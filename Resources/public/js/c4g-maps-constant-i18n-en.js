// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.constant = this.c4g.maps.constant || {};

(function ($, c4g) {
  'use strict';

  /**
   * Language constants (en)
   */
  c4g.maps.constant.i18n = $.extend(c4g.maps.constant.i18n, {

    LANG: 'en',

    NAME: 'Name',
    HIDE: 'Hide',
    CLOSE: 'Close',
    POINT: 'POI',
    FREEHAND: 'freehand',
    LINE: 'Line',
    POLYGON: 'Area',
    CIRCLE: 'Radius',
    PERIMETER: 'Perimeter',
    LENGTH: 'Length',
    SURFACEAREA: 'Surface area',
    RADIUS: 'Radius',
    REFRESH: 'Refresh',
    COPY_TO_CLIPBOARD: 'Copy to clipboard',

    CTRL_ZOOM_IN: 'Zoom in',
    CTRL_ZOOM_OUT: 'Zoom out',
    CTRL_ZOOM_EXT: 'Fit to extent',
    CTRL_ZOOM_HOME: 'jump to initial position',
    CTRL_ZOOM_POS: 'jump to browser/device position',
    CTRL_ZOOM_SLIDER: 'Zoom slider',
    CTRL_RESET_ROTATION: 'Reset rotation (touch, alt+mouse)',
    CTRL_PORTSIDE: 'Toggle portside',
    CTRL_ROUTER: 'Toggle router',
    CTRL_EDITOR: 'Toggle editor',
    CTRL_MEASURETOOLS: 'Toggle measuretools',
    CTRL_INFOPAGE: 'Toggle infopage',
    CTRL_ADDITIONALPANEL: 'Toggle panel',
    CTRL_ACCOUNT: 'Toggle account',
    CTRL_ZOOMLEVEL: 'Zoom',
    CTRL_MOUSECOORDS: 'Lon/Lat',
    CTRL_GEOSEARCH: 'Toggle geosearch',
    CTRL_START_SEARCH: 'start search',
    CTRL_OVERVIEWMAP: 'Toggle overviewmap',
    CTRL_GEOBOOKMARKS: 'Manage favorites',
    CTRL_SIDEBOARD: 'Toggle sideboard',
    CTRL_STARBOARD: 'Toggle starboard',
    CTRL_ATTRIBUTION: 'Show attribution',
    CTRL_GRID: 'Toggle grid',
    CTRL_PERMALINK: 'Generate Permalink',
    CTRL_FULLSCREEN: 'Toggle fullscreen-mode',
    CTRL_PRINT: 'Export map',

    EDITOR: 'Editor',
    EDITOR_ENABLE_INSTANT_MEASURE: 'Measure while drawing',
    EDITOR_ENABLE_FREEHAND_DRAW: 'Freehand draw',
    EDITOR_FEATURE_APPLY: 'End modification',
    EDITOR_FEATURE_DELETE: 'Delete feature',
    EDITOR_FEATURE_MODIFY: 'Modify feature',
    EDITOR_SELECT_INFO: 'Click an element on the map to select it.',
    EDITOR_SELECT_INFO_ADDITIONAL: '[ctrl] + [click] for multiselect <br>[shift] for boxselect',
    EDITOR_VIEW_TRIGGER_SELECT: 'Select-mode',
    EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Add POIs',
    EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Draw freehand',
    EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Add tracks',
    EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Add areas',
    EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Add circles',

    POPUP_ROUTE_FROM: 'Route from here',
    POPUP_ROUTE_TO: 'Route to here',

    STARBOARD: 'Starboard',
    STARBOARD_BASELAYER: 'Baselayer',
    STARBOARD_LAYER: 'Layer',
    STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Baselayerswitcher',
    STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Layerswitcher',

    ROUTER_VIEW_ADDRESS_INPUT: 'Find route',
    ROUTER_FROM_LABEL: 'Start',
    ROUTER_TO_LABEL: 'End',
    ROUTER_CLEAR_TITLE: 'Delete',
    ROUTER_CLEAR_HTML: '',
    ROUTER_Label_Interim: 'Interim Goals',

    ROUTER_SWITCH:'Switch between Start and End',
    ROUTER_OVER:'Add interim goal',
    ROUTER_PRINT:'Print route description',


    ROUTER_VIEW_LABEL_ROUTE: 'Route:',
    ROUTER_VIEW_LABEL_DISTANCE: 'Distance:',
    ROUTER_VIEW_LABEL_TIME: 'Time:',
    ROUTER_VIEW_LABEL_PROFILE:'Profile',

    ROUTER_VIEW_ALERT_ADDRESS: 'Address not found.',
    ROUTER_VIEW_ALERT_GOCODING: 'No access to geocoding.',

    ROUTER: 'Router',
    ROUTER_N: 'Head north',
    ROUTER_E: 'Head east',
    ROUTER_S: 'Head south',
    ROUTER_W: 'Head west',
    ROUTER_NE: 'Head northeast',
    ROUTER_SE: 'Head southeast',
    ROUTER_SW: 'Head southwest',
    ROUTER_NW: 'Head northwest',
    ROUTER_DIRECTION_0: 'unknown direction[ onto <b>%s</b>]',
    ROUTER_DIRECTION_1: 'straight ahead[ onto <b>%s</b>]',
    ROUTER_DIRECTION_2: 'slight right[ onto <b>%s</b>]',
    ROUTER_DIRECTION_3: 'right[ onto <b>%s</b>]',
    ROUTER_DIRECTION_4: 'sharp right[ onto <b>%s</b>]',
    ROUTER_DIRECTION_5: 'turn[ onto <b>%s</b>]',
    ROUTER_DIRECTION_6: 'sharp turn left[ onto <b>%s</b>]',
    ROUTER_DIRECTION_7: 'turn left[ onto <b>%s</b>]',
    ROUTER_DIRECTION_8: 'light turn left[ onto <b>%s</b>]',
    ROUTER_DIRECTION_10: 'drive in direction of <b>%d</b>[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-1': 'Take the first exit in the roundabout[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-2': 'Take the 2nd exit in the roundabout[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-3': 'Take the 3rd exit in the roundabout[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-4': 'Take the 4th exit in the roundabout[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-5': 'Take the 5th exit in the roundabout[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-6': 'Take the 6th exit in the roundabout[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-7': 'Take the 7th exit in the roundabout[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-8': 'Take the 8th exit in the roundabout[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-9': 'Take the 9th exit in the roundabout[ onto <b>%s</b>]',
    'ROUTER_DIRECTION_11-x': 'Take one of the exits in the roundabout[ onto <b>%s</b>]',
    ROUTER_DIRECTION_15: 'Destination reached',

      'ROUTER_5.X_TYPE_0': ' Turn %m on[ <b>%s</b>]',
      'ROUTER_5.X_TYPE_1': ' Follow the course of the road %m[ as <b>%s</b>]',
      'ROUTER_5.X_TYPE_2': ' Depart[ on <b>%s</b>]',
      'ROUTER_5.X_TYPE_3': ' Arrive <b>%m</b>',
      'ROUTER_5.X_TYPE_4': ' Continue driving[ on <b>%s</b>]',
      'ROUTER_5.X_TYPE_5': ' Take the ramp %m[ on <b>%s</b>]',
      'ROUTER_5.X_TYPE_6': ' Take the ramp %m[ to exit on<b>%s</b>]',
      'ROUTER_5.X_TYPE_7': ' Take the %m site of the fork to[ <b>%s</b>]',
      'ROUTER_5.X_TYPE_8': ' Turn %m[ on <b>%s</b>]',
      'ROUTER_5.X_TYPE_9': ' Take the lane %m[ on <b>%s</b>]',
      'ROUTER_5.X_TYPE_10': ' Turn %m to stay on the road',
      'ROUTER_5.X_TYPE_11': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
      'ROUTER_5.X_TYPE_12': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
      'ROUTER_5.X_TYPE_13': ' Turn %m[ on <b>%s</b>]',
      'ROUTER_5.X_TYPE_14': ' Follow the road %m',

      'ROUTER_5.X_MOD_0'  : 'Uturn',
      'ROUTER_5.X_MOD_1'  : 'sharp right',
      'ROUTER_5.X_MOD_2'  : 'right',
      'ROUTER_5.X_MOD_3'  : 'slight right',
      'ROUTER_5.X_MOD_4'  : 'straight',
      'ROUTER_5.X_MOD_5'  : 'slight left',
      'ROUTER_5.X_MOD_6'  : 'left',
      'ROUTER_5.X_MOD_7'  : 'sharp left',
      'ROUTER_5.X_MOD_8'  : 'somehow',

    ROUTER_FROM: 'Start',
    ROUTER_TO: 'End',
    ROUTER_FIND_ROUTE: 'Find route',
    ROUTER_LOC_ROUTE_TO: 'Route to here',
    ROUTER_ROUTEDESC: 'Description',
    ROUTER_ROUTENAME: 'Route',
    ROUTER_DISTANCE: 'Distance',
    ROUTER_TIME: 'Time',
    ROUTER_REV_GEOCODING: 'Identified address...',
    ROUTER_ERROR_REV_GEOCODING: 'Fault! Can not identifiy address',
    ROUTER_SEARCHING: 'Search address...',
    ROUTER_ERROR_SEARCHING: 'Fault! Can not find address',
    ROUTER_CALC_ROUTE: 'Calc route...',
    ROUTER_ERROR_CALC_ROUTE: 'Fault! Can not calc address',

    MEASURETOOLS: 'Measuretools',
    MEASURETOOLS_INFO: 'Select a measuretype below and start measuring by clicking on the map.',
    MEASURETOOLS_INFO_ADDITIONAL: '(To stop a measurement, double-click on the map.)',
    MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Select-mode',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Measure tracks',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Measure areas',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Measure radius',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Measure freehand',

    GEOBOOKMARKS_PLACEHOLDER: 'Enter new caption',

    INFOPAGE: 'Infopage',
    INFOPAGE_VIEW_TRIGGER: 'Show informations',

    ADDITIONALPANEL: 'Panel',
    ADDITIONALPANEL_VIEW_TRIGGER: 'Show panel',

    ACCOUNT: 'Account',
    ACCOUNT_VIEW_TRIGGER: 'Show account',

    SEARCH_NOT_FOUND: 'Location not found. Sorry... :(',

    NONE: '' // last line
  }); // end of "language constants" ---

}(jQuery, this.c4g));

export var langConstantsEnglish = this.c4g.maps.constant.i18n;