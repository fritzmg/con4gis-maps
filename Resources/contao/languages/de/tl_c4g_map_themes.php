<?php

/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['new']     = array('Neues Kartenthema', 'Ein neues Kartenthema erstellen');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['edit']    = array('Kartenthema bearbeiten', 'Kartenthema ID %s bearbeiten');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['copy']    = array('Kartenthema duplizieren', 'Kartenthema ID %s duplizieren');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['delete']  = array('Kartenthema löschen', 'Kartenthema ID %s löschen');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['show']    = array('Kartenthema anzeigen', 'Kartenthema ID %s anzeigen');

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['name']        = array('Name', 'Bitte geben Sie den Namen des Kartenthemas an.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['useglobal']   = array('Einstellungen global setzen', 'Einige Einstellungen, wie Farben und Formen, werden im CSS als Variable gesetzt und können auch global, also außerhalb der Karte, zur Verfügung gestellt werden.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttons'] = array('Buttons-CSS', 'Wählen Sie einen Stil für die Buttons aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_buttons'] = array('Eigene Button-CSS', 'Wählen Sie diese Option, wenn Sie eine eigene CSS-Datei verwenden wollen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_buttons']  = array('Eigene Buttons', 'Laden Sie Ihre eigene CSS-Datei hoch (Beispiele unter files/con4gis).');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttonradius']  = array('Radius der Button', 'Geben Sie hier den Buttonradius in Prozent ein.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['colors']  = array('Farben-CSS', 'Wählen Sie einen Stil für die Farben aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_colors'] = array('Eigene Farben-CSS', 'Wählen Sie diese Option, wenn Sie eine eigene CSS-Datei verwenden wollen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_colors']  = array('Eigene Farben', 'Laden Sie Ihre eigene CSS-Datei hoch (Beispiele unter files/con4gis).');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['maincolor']  = array('Hauptfarbe', 'Die Farbe überschreibt die CSS-Einstellungen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['mainopacity']  = array('Deckkraft der Hauptfarbe', 'Überschreibt die CSS-Einstellungen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['fontcolor']  = array('Schriftfarbe', 'Die Farbe überschreibt die CSS-Einstellungen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['fontopacity']  = array('Deckkraft der Schriftfarbe', 'Überschreibt die CSS-Einstellungen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['shadowcolor']  = array('Schattenfarbe', 'Die Farbe überschreibt die CSS-Einstellungen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['shadowopacity']  = array('Deckkraft der Schattenfarbe', 'Überschreibt die CSS-Einstellungen.');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['effects'] = array('Effekte-CSS', 'Wählen Sie einen Stil für die Effekte aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_effects'] = array('Eigene Effekte-CSS', 'Wählen Sie diese Option, wenn Sie eine eigene CSS-Datei verwenden wollen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_effects']  = array('Eigene Effekte', 'Laden Sie Ihre eigene CSS-Datei hoch (Beispiele unter files/con4gis).');

$GLOBALS['TL_LANG']['tl_c4g_map_themes']['icons']   = array('Icons-CSS', 'Wählen Sie einen Stil für die Icons aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['custom_icons'] = array('Eigene Icon-CSS', 'Wählen Sie diese Option, wenn Sie eine eigene CSS-Datei verwenden wollen.');
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['external_icons']  = array('Eigene Icons', 'Laden Sie Ihre eigene CSS-Datei hoch (Beispiele unter files/con4gis).');

// Palettes
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['theme_legend']   = 'Kartenthema-Einstellungen';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['buttons_legend'] = 'Bedienelemente';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['colors_legend']  = 'Farben';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['effects_legend'] = 'Effekte';
$GLOBALS['TL_LANG']['tl_c4g_map_themes']['icons_legend']   = 'Icons';

//$GLOBALS['TL_LANG']['tl_c4g_map_themes']['example_info']   =
//    'Beispieldateien wurden Ihnen unter /files/con4gis/examples/themes zur Verfügung gestellt.<br>'.
//    'Sollten Sie Dateien im Files Verzeichnis nutzen wollen, dann denken Sie daran diese zu veröffentlichen.<br>'.
//    'Achtung! Der Beispielorder wird immer wieder mit aktuellen Daten überschrieben. Kopieren Sie sich die Dateien für Ihr eigenes Theme.<br>'.
//    'Sollte mangels Dateirechten die Zurverfügungstellung nicht möglich sein, dann können Sie die Dateien auch unter /vendor/con4gis/MapsBundle/Resources/public/css/themes finden.<br>'.
//    'Selbstverständlich können Sie auch eigenes CSS nutzen und die Karte auf Ihre Art anpassen.';