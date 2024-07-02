<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 9
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2024, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\MapsBundle\Classes\Services;

use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Classes\Events\LoadRouteFeaturesEvent;
use con4gis\MapsBundle\Classes\Polyline;
use con4gis\MapsBundle\Entity\RoutingConfiguration;
use Contao\Frontend;
use Contao\System;
use Contao\Input;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpClient\HttpClient;

class RouteService extends Frontend
{
    private $eventDispatcher;

    /**
     * RouteService constructor.
     * @param $eventDispatcher
     */
    public function __construct(EventDispatcherInterface $eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
    }
    /**
     * Prepares the GET data for the call to the route services.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */
    public function generate($profileId, $locations, $routerConfig, $language, $profile = null)
    {
        $strParams = '';
        foreach ($_GET as $key => $value) {
            if (Input::get($key)) {
                if (strlen($strParams) > 0) {
                    $strParams .= '&';
                }
                if ($key == 'loc_to' || $key == 'loc_from') {
                    $strParams .= 'loc=' . Input::get($key);
                } else {
                    $strParams .= $key . '=' . Input::get($key);
                }
            }
        }

        return $this->getRoutingResponse($locations, $strParams, $routerConfig, $profileId, $profile, $language);
    }

    /**
     * Creates a route and dispatches an event for loading features on the route. Returns an object containing both.
     * @param $profileId
     * @param $layer
     * @param $locations
     * @param $detour
     * @param $profile
     * @return string
     */
    public function getResponse($profileId, $layer, $locations, $detour, $language, $profile)
    {
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $profileId);
        $routerConfigRepo = System::getContainer()->get('doctrine.orm.default_entity_manager')
            ->getRepository(RoutingConfiguration::class);
        $routerConfig = $routerConfigRepo->findOneBy(['id' => $objMapsProfile->routerConfig]);
        $routeData = $this->generate($profileId, $locations, $routerConfig, $profile, $language);
        $polyline = new Polyline([]);
        $objLayer = C4gMapsModel::findById($layer);
        if ($routerConfig->getRouterLayers()) { //prevent listener and decoding of polyline if not necessary
            try {
                if ($routerConfig->getRouterApiSelection() == '1' || $routeData['routeType'] == '1') {
                    $points = $polyline->fromEncodedString($routeData['routes'][0]['geometry']);
                } elseif ($routerConfig->getRouterApiSelection() == '2' || $routeData['routeType'] == '2') {
                    $points = $polyline->fromEncodedString($routeData['routes'][0]['geometry']);
                } elseif ($routerConfig->getRouterApiSelection() == '3' || $routeData['routeType'] == '3') {
                    $points = $polyline->fromEncodedString($routeData['paths'][0]['points']);
                } elseif ($routerConfig->getRouterApiSelection() == '4' || $routeData['routeType'] == '4') {
                    $points = $polyline->fromEncodedString($routeData['trip']['legs'][0]['shape'], 1e-6);
                } elseif ($routerConfig->getRouterApiSelection() == '6' || $routeData['routeType'] == '6') {
                    $points = $polyline->fromEncodedString($routeData['trip']['legs'][0]['shape'], 1e-6);
                }
                $points = $polyline->tunePolyline($points, 0.1, 0.4)->getPoints();
                $event = new LoadRouteFeaturesEvent();
                $event->setLayerId($layer);
                $event->setProfileId($profileId);
                $event->setPoints($points);
                $event->setDetour($detour);
                $event->setType($objLayer->location_type === 'overpass' ? 'overpass' : 'notOverpass');
                $this->eventDispatcher->dispatch($event, $event::NAME);
                $routeData['features'] = $event->getFeatures();
                $routeData['bbox'] = $event->getBbox();
                $routeData['type'] = $event->getType();
            } catch (\InvalidArgumentException $exception) {
                // return error to frontend
                $routeData['error'] = 'ROUTER_ERROR_POLYLINE';
            }
        }
        $result = [];
        if ($routeData) {
            $result = $routeData;
        }

        return \GuzzleHttp\json_encode($result);
    }

    /**
     * Checks the router type and calls the appropriate function.
     * @param $arrInput
     * @param $strParams
     * @param $intProfileId
     * @param $profile
     * @return string
     */
    protected function getRoutingResponse($arrInput, $strParams, $routerConfig, $intProfileId, $profile, $language)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            if ($routerConfig->getRouterApiSelection() == '1' || $routerConfig->getRouterApiSelection() == '0') {
                $response = $this->getORSMResponse($arrInput, $strParams, $routerConfig, $language, $profile);
            } elseif ($routerConfig->getRouterApiSelection() == '2') {
                $response = $this->getORSResponse($arrInput, $strParams, $profile, $language, $routerConfig);
            } elseif ($routerConfig->getRouterApiSelection() == '3') {
                $response = $this->getGraphhopperResponse($arrInput, $strParams, $profile, $language, $routerConfig);
            } elseif ($routerConfig->getRouterApiSelection() == '4') {
                $response = $this->getValhallaResponse($arrInput, $strParams, $routerConfig, $language, $profile);
            } elseif ($routerConfig->getRouterApiSelection() == '5') {
                $response = $this->getCon4gisIOResponse($arrInput, $strParams, $routerConfig, $language, $profile);
            } elseif ($routerConfig->getRouterApiSelection() == '6') {
                $response = $this->getStadiaMapsResponse($arrInput, $strParams, $routerConfig, $language, $profile);
            }

            return $response;
        }
    }

    private function getCon4gisIOResponse($arrInput, $strParams, $routerConfig, $language, $profile = null)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $objSettings = C4gMapSettingsModel::findOnly();
            if (!substr_count('ca-ES, cs-CZ, de-DE, en-US, es-ES, fr-FR	, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)) {
                $language = $GLOBALS['TL_LANGUAGE'];
                if (!substr_count('ca-ES, cs-CZ, de-DE, en-US,C, es-ES, fr-FR, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)) {
                    $language = 'en-US';
                }
            }
            $strInput = '';
            foreach ($arrInput as $elementInput) {
                $strInput .= $elementInput . ';';
            }
            $strInput = rtrim($strInput, ';');
            $client = HttpClient::create();
            $headers = [
                'Content-Type' => 'application/json'
            ];
            if ($_SERVER['HTTP_REFERER']) {
                $headers['Referer'] = $_SERVER['HTTP_REFERER'];
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $headers['User-Agent'] = $_SERVER['HTTP_USER_AGENT'];
            }

            $sendUrl = rtrim($objSettings->con4gisIoUrl, '/') . '/' . 'routing.php?input=' . $strInput . '&language=' . $language . '&profile=' . $profile . '&key=' . $objSettings->con4gisIoKey;
            $request = $client->request('GET', $sendUrl, [
                'headers' => $headers
            ]);
            $response = $request->getContent();

            try {
                $response = \GuzzleHttp\json_decode($response, true);
            } catch (\Exception $exception) {
                $response = [];
                $response['error'] = 'ROUTER_ERROR_POLYLINE';

                return $response;
            }

            return $response;
        }
    }

    private function getValhallaResponse($arrInput, $strParams, $routerConfig, $language, $profile = null)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $strRoutingUrl = $routerConfig->getRouterViarouteUrl() ? $routerConfig->getRouterViarouteUrl() : 'https://api.mapbox.com/valhalla/v1/';
            $strRoutingUrl .= 'route';
            $strRoutingUrl .= $routerConfig->getRouterApiKey() ? '?access_token=' . $routerConfig->getRouterApiKey() : '';

            $locations = [];
            for ($i = 0; $i < sizeof($arrInput); $i++) {
                $location = [];
                $location['lat'] = explode(',', $arrInput[$i])[0];
                $location['lon'] = explode(',', $arrInput[$i])[1];
                $location['type'] = 'through';
                $locations[] = $location;
            }
            $locations[0]['type'] = 'break';
            $locations[sizeof($locations) - 1]['type'] = 'break';
            switch ($profile) {
                case 0:
                    $costing = 'auto';

                    break;
                case 1:
                    $costing = 'truck';

                    break;
                case 2:
                    $costing = 'bicycle';

                    break;
                case 3:
                    $costing = 'bicycle';
                    $costing_options = [
                        'bicycle' => [
                            'bicycle_type' => 'Road',
                        ],
                    ];

                    break;
                case 5:
                    $costing = 'bicycle';
                    $costing_options = [
                        'bicycle' => [
                            'bicycle_type' => 'Mountain',
                        ],
                    ];

                    break;
                case 8:
                    $costing = 'pedestrian';

                    break;
                case 12:
                    $costing = 'motor_scooter';

                    break;
                case 13:
                    $costing = 'motorcycle';
                    $costing_options = [
                        'motorcycle' => [
                            'use_highways' => 0.4,
                            'use_trails' => 0.8,
                        ],
                    ];

                    break;
                default:
                    $costing = 'auto';

                    break;
            }

            if (!substr_count('ca-ES, cs-CZ, de-DE, en-US, en-US-x-pirate, es-ES, fr-FR	, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)) {
                $language = $GLOBALS['TL_LANGUAGE'];
                if (!substr_count('ca-ES, cs-CZ, de-DE, en-US,C, es-ES, fr-FR, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)) {
                    $language = 'en-US';
                }
            }
            if ($routerConfig->getPirate()) {
                $language = 'en-US-x-pirate';
            }
            $directionOptions = [
                'units' => 'meters',
                'language' => $language,
            ];
            $client = HttpClient::create();
            $headers = [
                'Content-Type' => 'application/json'
            ];
            if ($_SERVER['HTTP_REFERER']) {
                $headers['Referer'] = $_SERVER['HTTP_REFERER'];
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $headers['User-Agent'] = $_SERVER['HTTP_USER_AGENT'];
            }

            $routeData = [
                'locations' => $locations,
                'costing' => $costing,
                'directions_options' => $directionOptions,
            ];
            if ($costing_options) {
                $routeData = [
                    'locations' => $locations,
                    'costing' => $costing,
                    'directions_options' => $directionOptions,
                    'costing_options' => $costing_options,
                ];
            }
            $encodedData = \GuzzleHttp\json_encode($routeData);

            $request = $client->request('POST', $strRoutingUrl, [
                'headers' => $headers,
                'body'     => $encodedData
            ]);
            $response = $request->getContent();
            try {
                $response = \GuzzleHttp\json_decode($response, true);
            } catch (\Exception $exception) {
                $response = [];
                $response['error'] = 'ROUTER_ERROR_POLYLINE';

                return $response;
            }

            return $response;
        }
    }

    private function getStadiaMapsResponse($arrInput, $strParams, $routerConfig, $language, $profile = null)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $strRoutingUrl = $routerConfig->getRouterViarouteUrl() ? $routerConfig->getRouterViarouteUrl() : 'https://api.stadiamaps.com/route/v1';
            $strRoutingUrl .= $routerConfig->getRouterApiKey() ? '?api_key=' . $routerConfig->getRouterApiKey() : '';

            $locations = [];
            for ($i = 0; $i < sizeof($arrInput); $i++) {
                $location = [];
                $location['lat'] = explode(',', $arrInput[$i])[0];
                $location['lon'] = explode(',', $arrInput[$i])[1];
                $location['type'] = 'through';
                $locations[] = $location;
            }
            $locations[0]['type'] = 'break';
            $locations[sizeof($locations) - 1]['type'] = 'break';
            switch ($profile) {
                case 0:
                    $costing = 'auto';

                    break;
                case 1:
                    $costing = 'truck';

                    break;
                case 2:
                    $costing = 'bicycle';

                    break;
                case 3:
                    $costing = 'bicycle';
                    $costing_options = [
                        'bicycle' => [
                            'bicycle_type' => 'Road',
                        ],
                    ];

                    break;
                case 5:
                    $costing = 'bicycle';
                    $costing_options = [
                        'bicycle' => [
                            'bicycle_type' => 'Mountain',
                        ],
                    ];

                    break;
                case 8:
                    $costing = 'pedestrian';

                    break;
                case 12:
                    $costing = 'motor_scooter';

                    break;
                case 13:
                    $costing = 'motorcycle';
                    $costing_options = [
                        'motorcycle' => [
                            'use_highways' => 0.4,
                            'use_trails' => 0.8,
                        ],
                    ];

                    break;
                default:
                    $costing = 'auto';

                    break;
            }

            if (!substr_count('ca-ES, cs-CZ, de-DE, en-US, en-US-x-pirate, es-ES, fr-FR, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)) {
                $language = $GLOBALS['TL_LANGUAGE'];
                if (!substr_count('ca-ES, cs-CZ, de-DE, en-US,C, es-ES, fr-FR, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)) {
                    $language = 'en-US';
                }
            }
            if ($routerConfig->getPirate()) {
                $language = 'en-US-x-pirate';
            }
            $directionOptions = [
                'units' => 'meters',
                'language' => $language,
            ];
            $client = HttpClient::create();
            $headers = [
                'Content-Type' => 'application/json'
            ];
            if ($_SERVER['HTTP_REFERER']) {
                $headers['Referer'] = $_SERVER['HTTP_REFERER'];
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $headers['User-Agent'] = $_SERVER['HTTP_USER_AGENT'];
            }

            $routeData = [
                'locations' => $locations,
                'costing' => $costing,
                'directions_options' => $directionOptions,
            ];
            if ($costing_options) {
                $routeData = [
                    'locations' => $locations,
                    'costing' => $costing,
                    'directions_options' => $directionOptions,
                    'costing_options' => $costing_options,
                ];
            }
            $encodedData = \GuzzleHttp\json_encode($routeData);

            $request = $client->request('GET', $strRoutingUrl, [
                'headers' => $headers,
                'body'     => $encodedData
            ]);
            $response = $request->getContent();
            try {
                $response = \GuzzleHttp\json_decode($response, true);
            } catch (\Exception $exception) {
                $response = [];
                $response['error'] = 'ROUTER_ERROR_POLYLINE';

                return $response;
            }

            return $response;
        }
    }

    /**
     * Calls the Graphhopper and returns the routing response.
     * @param $objMapsProfile
     * @param $arrInput
     * @param $strParams
     * @return string
     */
    private function getGraphhopperResponse($arrInput, $strParams, $profile, $language, $routerConfig)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $valuesProfile = [0 => 'car', 1 => 'truck', 2 => 'bike', 3 => 'racingbike', 5 => 'mtb', 8 => 'foot', 9 => 'hike', 11 => 'small_truck', 12 => 'scooter'];
            $strRoutingUrl = $routerConfig->getRouterViarouteUrl() ? $routerConfig->getRouterViarouteUrl() : 'https://graphhopper.com/api/1/';
            $strRoutingUrl .= 'route?';
            $apiKey = '&key=' . $routerConfig->getRouterApiKey();
            $points = 'point=' . explode(',', $arrInput[0])[0] . ',' . explode(',', $arrInput[0])[1];
            for ($i = 1; $i < sizeof($arrInput); $i++) {
                $points .= '&point=' . explode(',', $arrInput[$i])[0] . ',' . explode(',', $arrInput[$i])[1];
            }
            $points = substr($points, 0, strlen($points) - 1);
            if (!substr_count('cn, de, en, es, ru, dk, fr, it, nl, br, se, tr, gr', $language)) {
                $language = $GLOBALS['TL_LANGUAGE'];
                if (!substr_count('cn, de, en, es, ru, dk, fr, it, nl, br, se, tr, gr', $language)) {
                    $language = 'en';
                }
            }
            $profile = $valuesProfile[$profile] ? $valuesProfile[$profile] : 'car';

            $profile = '&vehicle=' . $profile;
            $locale = '&locale=' . $language;
            $url = $strRoutingUrl . $points . $profile . $locale;
            if ($routerConfig->getRouterAlternative() == '1' && sizeof($arrInput) == 2) {
                $url .= '&algorithm=alternative_route&ch.disable=true';
            }
            $url .= $apiKey;
            $client = HttpClient::create();
            $headers = [];
            if ($_SERVER['HTTP_REFERER']) {
                $headers['Referer'] = $_SERVER['HTTP_REFERER'];
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $headers['User-Agent'] = $_SERVER['HTTP_USER_AGENT'];
            }
            $request = $client->request('GET', $url, [
                'headers' => $headers
            ]);
            $response = $request->getContent();

            try {
                $response = \GuzzleHttp\json_decode($response, true);
            } catch (\Exception $exception) {
                $response = [];
                $response['error'] = 'ROUTER_ERROR_POLYLINE';

                return $response;
            }

            return $response;
        }
    }

    /**
     * Calls the ORSM and returns the routing response.
     * @param $objMapsProfile
     * @param $arrInput
     * @param $strParams
     * @return string
     */
    private function getORSMResponse($arrInput, $strParams, $routerConfig, $language, $profile = 'driving')
    {
        $strRoutingUrl = 'http://router.project-osrm.org/';
        if ($routerConfig->getRouterViarouteUrl()) {
            $strRoutingUrl = $routerConfig->getRouterViarouteUrl();
            if (substr($strRoutingUrl, -1, 1) != '/') {
                $strRoutingUrl = $strRoutingUrl . '/';
            }
        }

        $client = HttpClient::create();
        $headers = [];
        if ($_SERVER['HTTP_REFERER']) {
            $headers['Referer'] = $_SERVER['HTTP_REFERER'];
        }
        if ($_SERVER['HTTP_USER_AGENT']) {
            $headers['User-Agent'] = $_SERVER['HTTP_USER_AGENT'];
        }

        if ($routerConfig && $routerConfig->getRouterApiSelection() == '1') {
            $url = '';
            for ($i = 0; $i < sizeof($arrInput); $i++) {
                $url = $url . explode(',', $arrInput[$i])[1] . ',' . explode(',', $arrInput[$i])[0] . ';';
            }
            $url = substr($url, 0, strlen($url) - 1);
            $request = $client->request('GET', $strRoutingUrl . 'route/v1/' . $profile . '/' . $url . '?steps=true&overview=full&alternatives=true', [
                'headers' => $headers
            ]);

        } else {
            $request = $client->request('GET', $strRoutingUrl . '?' . $strParams, [
                'headers' => $headers
            ]);
        }
        $response = $request->getContent();

        try {
            $response = \GuzzleHttp\json_decode($response, true);
        } catch (\Exception $exception) {
            $response = [];
            $response['error'] = 'ROUTER_ERROR_POLYLINE';

            return $response;
        }

        return $response;
    }

    /**
     * Calls the ORS and returns the routing response.
     * @param $arrInput
     * @param $strParams
     * @param $intProfileId
     * @param $profile
     * @return array|mixed|string
     */
    private function getORSResponse($arrInput, $strParams, $profile, $language, $routerConfig)
    {
        if ($routerConfig instanceof RoutingConfiguration) {
            $valuesProfile = ['driving-car', 'driving-hgv', 'cycling-regular', 'cycling-road', 'cycling-safe', 'cycling-mountain', 'cycling-tour', 'cycling-electric', 'foot-walking', 'foot-hiking', 'wheelchair'];
            $strRoutingUrl = $routerConfig->getRouterViarouteUrl() ? $routerConfig->getRouterViarouteUrl() : 'https://api.openrouteservice.org/';
            $strRoutingUrl .= 'v2/directions/';
            $coordinates = [];
            for ($i = 0; $i < sizeof($arrInput); $i++) {
                $coordinates[] = [explode(',', $arrInput[$i])[1], explode(',', $arrInput[$i])[0]];
            }
            if (!substr_count('cn, de, en, es, ru, dk, fr, it, nl, br, se, tr, gr', $language)) {
                $language = $GLOBALS['TL_LANGUAGE'];
                if (!substr_count('cn, de, en, es, ru, dk, fr, it, nl, br, se, tr, gr', $language)) {
                    $language = 'en';
                }
            }
            $profile = $valuesProfile[$profile] ? $valuesProfile[$profile] : 'driving-car';

//            $profile = '&profile=' . $profile . '&format=json&language=' . $language . '&geometry_format=encodedpolyline&maneuvers=true&preference=recommended';
            $body = [
                'coordinates' => $coordinates,
                'maneuvers' => true,
                'preference' => 'recommended',
                'language' => $language,
            ];
            $url = $strRoutingUrl . $profile;
            $client = HttpClient::create();
            $headers = [
                'Authorization' => $routerConfig->getRouterApiKey(),
                'Content-Type'  => 'application/json'
            ];
            if ($_SERVER['HTTP_REFERER']) {
                $headers['Referer'] = $_SERVER['HTTP_REFERER'];
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $headers['User-Agent'] = $_SERVER['HTTP_USER_AGENT'];
            }

            $data = \GuzzleHttp\json_encode($body);

            $request = $client->request('POST', $url, [
                'headers'    => $headers,
                'body'      => $data
            ]);
            $response = $request->getContent();

            try {
                $response = \GuzzleHttp\json_decode($response, true);
            } catch (\Exception $exception) {
                $response = [];
                $response['error'] = 'ROUTER_ERROR_POLYLINE';

                return $response;
            }

            // error handling
            if ($response['error'] && $response['error']['code'] === 2004) {
                // try again with another preference
                $body['preference'] = 'fastest';
                $data = \GuzzleHttp\json_encode($body);

                $request = $client->request('POST', $url, [
                    'headers'    => $headers,
                    'body'      => $data
                ]);
                $response = $request->getContent();
                if ($response) {
                    $response = json_decode($response, true);
                    if ($response['error'] && $response['error']['code'] === 2004) {
                        return $response;
                    }
                }
            }

            if ($routerConfig->getRouterAlternative() == '1') {

                $body['preference'] = 'shortest';
                $data = \GuzzleHttp\json_encode($body);
                $request = $client->request('POST', $url, [
                    'headers'    => $headers,
                    'body'      => $data
                ]);
                $response = $request->getContent();
                if ($response) {
                    $response['routes'][1] = \GuzzleHttp\json_decode($response, true)['routes'][0];
                }
            }
            return $response;
        }
    }
}
