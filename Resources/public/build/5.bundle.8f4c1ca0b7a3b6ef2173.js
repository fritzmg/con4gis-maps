(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{408:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=r(24),n=(a=s)&&a.__esModule?a:{default:a},u=r(170),i=r(87),l=r(88),c=r(568),p=r(47),d=r(46),m=r(62),f=r(45);
/*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=r,o=document.createElement("div"),s=document.createElement("button");r.langConstants=(0,i.getLanguage)(e.mapController.data),s.title=r.langConstants.CTRL_MEASURETOOLS,o.className="c4g-measuretools-control ol-unselectable ol-control ",e.open?o.className+="c4g-open":o.className+="c4g-close",e.external&&(o.className+=" c4g-external"),o.appendChild(s),jQuery(o).on("click",(function(e){var t=a.props.mapController.measuretoolsContainer.className.includes("c4g-close");a.state.open?t?jQuery(a.props.mapController.measuretoolsContainer).removeClass("c4g-close").addClass("c4g-open"):a.close():a.open()}));var n=e.mapController,u=new l.Control({element:o,target:e.target});return n.mapsControls.controls.measuretools=u,n.map.addControl(u),r.close=r.close.bind(r),r.open=r.open.bind(r),r.addMeasuredFeature=r.addMeasuredFeature.bind(r),r.modifyMeasuredFeature=r.modifyMeasuredFeature.bind(r),r.removeMeasuredFeature=r.removeMeasuredFeature.bind(r),r.incrementFeatureId=r.incrementFeatureId.bind(r),r.modes=["select","line","polygon","circle","freehand"],r.state={open:e.open||!1,currentMode:"select",control:u,measuredFeatures:[],featureIdCtr:0},r.init(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t={select:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND};return n.default.createElement("div",{className:"c4g-measuretools-wrapper"},n.default.createElement(u.Titlebar,{wrapperClass:"c4g-measuretools-header",headerClass:"c4g-measuretools-headline",hideContainer:".c4g-measuretools-container",header:this.langConstants.MEASURETOOLS,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE}),n.default.createElement("div",{className:"c4g-measuretools-mode-switcher"},this.modes.map((function(r,a){return n.default.createElement("button",{key:a,className:"c4g-measure-"+r+" "+(r===e.state.currentMode?"c4g-active":"c4g-inactive"),onMouseUp:function(){return e.setState({currentMode:r})},title:t[r]})}))),n.default.createElement(c.MeasuretoolsView,{mode:"select",measureTools:this,active:"select"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),n.default.createElement(c.MeasuretoolsView,{mode:"line",measureTools:this,active:"line"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),n.default.createElement(c.MeasuretoolsView,{mode:"polygon",measureTools:this,active:"polygon"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),n.default.createElement(c.MeasuretoolsView,{mode:"circle",measureTools:this,active:"circle"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),n.default.createElement(c.MeasuretoolsView,{mode:"freehand",measureTools:this,active:"freehand"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}))}},{key:"incrementFeatureId",value:function(){this.setState({featureIdCtr:this.state.featureIdCtr+1})}},{key:"addMeasuredFeature",value:function(e){var t=this.state.measuredFeatures;t.push(e),this.setState({measuredFeatures:t})}},{key:"modifyMeasuredFeature",value:function(e,t){for(var r=this.state.measuredFeatures,a=0;a<r.length;a++)r[a].id===t&&(r[a]=e);this.setState({measuredFeatures:r})}},{key:"removeMeasuredFeature",value:function(e){for(var t=this.state.measuredFeatures,r=0;r<t.length;r++)if(t[r].id===e){t.splice(r,1);break}this.setState({measuredFeatures:t})}},{key:"setCurrentMode",value:function(e){this.modes.includes(e)?this.setState({currentMode:e}):console.warn("The specified mode is not available")}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"init",value:function(){return this.measureLineLayer=new p.Vector({source:new d.Vector}),this.measurePolygonLayer=new p.Vector({source:new d.Vector}),this.measureCircleLayer=new p.Vector({source:new d.Vector}),this.measureFreehandLayer=new p.Vector({source:new d.Vector}),this.measureLayerGroup=new p.Group({layers:new m.Collection([this.measureFreehandLayer,this.measureCircleLayer,this.measurePolygonLayer,this.measureLineLayer]),visible:!0}),this.props.mapController.map.addLayer(this.measureLayerGroup),!0}},{key:"componentDidUpdate",value:function(e,t,r){if(t.open&&!this.state.open)jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close"),this.props.mapController.map.removeLayer(this.measureLayerGroup),this.removeTooltips(),this.removedOnce=!0;else if(!t.open&&this.state.open){if(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close"),this.removedOnce)try{this.props.mapController.map.addLayer(this.measureLayerGroup)}catch(e){console.warn(e)}this.addTooltips()}this.props.mapController.data.caching&&!this.state.open&&(f.utils.getValue("panel")===this.constructor.name&&f.utils.storeValue("panel",""))}},{key:"removeTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++){r[a].get("tooltip").hide()}}}},{key:"addTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++){r[a].get("tooltip").show()}}}}]),t}(s.Component);t.default=h},568:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuretoolsView=void 0;var a,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=r(24),n=(a=s)&&a.__esModule?a:{default:a},u=r(87),i=r(62),l=r(89),c=r(45),p=r(235),d=r(569);
/*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
t.MeasuretoolsView=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=(0,u.getLanguage)(r.props.mapController.data);return r.headlines={select:a.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:a.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:a.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:a.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:a.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND},r.featureIdCtr=r.props.featureId,r.updateFunctions=r.createMeasureFunctions(),r.modifyFeature=r.modifyFeature.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this;return this.props.active?"select"===this.props.mode?n.default.createElement("div",{className:"c4g-measuretools-content"},n.default.createElement("p",null,this.props.lang.MEASURETOOLS_INFO),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement("sub",null,this.props.lang.MEASURETOOLS_INFO_ADDITIONAL)):n.default.createElement("div",{className:"c4g-measuretools-content"},n.default.createElement("div",{className:"contentHeadline"},this.headlines[this.props.mode]),n.default.createElement("div",null,Object.keys(this.props.features).map((function(t,r){var a=e.props.features[t];return n.default.createElement(d.MeasuredFeature,{key:r,idx:r,label:a.label,feature:a,measuredValues:a.measuredValues,modifyFeature:e.modifyFeature})})))):null}},{key:"modifyFeature",value:function(e,t){for(var r=this.props.features,a=0;a<r.length;a++)if(r[a].id===t){r[a].olFeature.set("featureLabel",e.label),this.updateMeasureFeature(r[a].olFeature);break}this.props.modifyFeature(e,t)}},{key:"componentDidMount",value:function(){"select"!==this.props.mode&&this.updateFunctions.initFunction()}},{key:"componentDidUpdate",value:function(e,t,r){"select"!==this.props.mode&&(!e.active&&this.props.active&&this.updateFunctions.activateFunction(),e.active&&!this.props.active&&this.updateFunctions.deactivateFunction(),this.props.mapController.mapHover.deactivate()),"select"!==this.props.mode&&this.props.measureTools.state.open||this.props.mapController.mapHover.activate(),this.featureIdCtr=this.props.featureId}},{key:"createMeasureFunctions",value:function(){var e=void 0,t=void 0,r=void 0,a=void 0,o=this;return{initFunction:function(){var s,n,u,d,m,f,h,y;if(s=o.featureIdCtr,e="freehand"===o.props.mode.toLowerCase()?o.props.measureTools.measureFreehandLayer.getSource():"circle"===o.props.mode.toLowerCase()?o.props.measureTools.measureCircleLayer.getSource():"polygon"===o.props.mode.toLowerCase()?o.props.measureTools.measurePolygonLayer.getSource():o.props.measureTools.measureLineLayer.getSource(),t=new i.Collection,"select"!==o.props.mode.toLowerCase()){switch(o.props.mode){case"line":r="LineString";break;case"polygon":r="Polygon";break;case"circle":r="Circle";break;case"freehand":r="LineString"}return a=new l.Draw({features:t,source:e,type:r,freehand:"freehand"===o.props.mode}),d=function(e){var t,r,a,n;if(!e)return!1;"LineString"===e.getGeometry().getType()?(o.props.lang.LENGTH,t=o.props.lang.LINE,r=!1,a=!1,n=!0):"Polygon"===e.getGeometry().getType()?(o.props.lang.PERIMETER,t=o.props.lang.POLYGON,r=!0,a=!1,n=!1):"Circle"===e.getGeometry().getType()?(o.props.lang.RADIUS,t=o.props.lang.CIRCLE,r=!0,a=!0,n=!1):(o.props.lang.LENGTH,t=o.props.lang.FREEHAND,r=!1,a=!1,n=!0),s=o.featureIdCtr,e.set("featureId",s);var u={};u.id=s,u.label=t+" "+s,e.set("featureLabel",u.label),u.measuredValues={},n&&(u.measuredValues.line={description:"Länge: ",value:0}),a&&(u.measuredValues.radius={description:"Radius: ",value:0}),r&&(u.measuredValues.area={description:"Flächeninhalt: ",value:0}),u.olFeature=e,o.props.addFeature(u),o.props.incrFeatId()},m=function(e){var t,r,a,s,n;t=e.get("tooltip"),r=e.get("featureLabel"),a=c.utils.measureGeometry(e.getGeometry(),!0),e.set("measuredLength",a.rawValue),t.setContent("<strong>"+r+"</strong><br>"+a.htmlValue);var u=e.get("featureId"),i={};i.label=r,i.id=u,i.measuredValues={},i.olFeature=e,a&&"circle"!==e.get("geometryType")&&"polygon"!==e.get("geometryType")&&(i.measuredValues.line={},i.measuredValues.line.description="Länge: ",i.measuredValues.line.value=a.rawValue),"circle"===e.get("geometryType")&&(n=c.utils.measureGeometry(e.getGeometry()),i.measuredValues.radius={description:"Radius: ",value:0},i.measuredValues.radius.value=n.rawValue,t.setContent("<strong>"+r+"</strong><br>"+i.measuredValues.radius.description+n.htmlValue)),"polygon"!==e.get("geometryType")&&"circle"!==e.get("geometryType")||(s=c.utils.measureGeometry(e.getGeometry(),!1,!0),i.measuredValues.area={description:"Flächeninhalt: ",value:0},i.measuredValues.area.value=s.rawValue,t.setContent("<strong>"+r+"</strong><br>"+i.measuredValues.area.description+s.htmlValue)),e.set("tooltip",t),o.props.modifyFeature(i,i.id)},o.updateMeasureFeature=m,y=function(e){o.props.removeFeature(e.get("featureId"))},f=function(e){var t=c.utils.measureGeometry(e.getGeometry(),!0).htmlValue.match(/\d/g);return t=t.join("")},h=function(){var e="0.00 m".match(/\d/g);return e=e.join(""),e=8},a.on("drawstart",(function(t){n=t.feature,u=new p.TooltipPopUp({map:o.props.mapController.map,position:t.coordinate,horizontal:!0,closeable:!0,closeFunction:function(){var r=f(t.feature),a=h();r!==a&&r>a?(y(t.feature),e.removeFeature(t.feature)):y(t.feature)}}),n.set("tooltip",u),n.set("geometryType",o.props.mode.toLowerCase()),d(n)}),o),o.props.mapController.map.on("pointermove",(function(e){n&&u&&(u.setPosition(e.coordinate),m(n))}),o),a.on("drawend",(function(e){n&&u&&(m(n),n=null,u=null)}),o),!0}},activateFunction:function(){t.clear(),o.props.mapController.map.addInteraction(a)},deactivateFunction:function(){if("point"!==o.props.mode.toLowerCase())try{a.finishDrawing()}catch(e){}o.props.mapController.map.removeInteraction(a)}}}}]),t}(s.Component)},569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuredFeature=void 0;var a,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=r(24),n=(a=s)&&a.__esModule?a:{default:a};
/*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link              https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
t.MeasuredFeature=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.changeFeatureLabel=r.changeFeatureLabel.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement("label",{htmlFor:"measureElement_"+this.props.idx},"Name: "),n.default.createElement("input",{type:"text",name:"measureElement_"+this.props.idx,defaultValue:this.props.label,onInput:this.changeFeatureLabel})),Object.keys(this.props.measuredValues).map((function(t,r){var a=e.props.measuredValues[t],o=0;switch(t){case"line":case"radius":o=e.convertMetersToKm(a.value);break;case"area":o=e.convertSquareMetersToSquareKm(a.value)}return n.default.createElement("p",{key:r},n.default.createElement("strong",null,a.description),n.default.createElement("span",{className:"c4g-measure-value-"+e.props.idx},o))})))}},{key:"changeFeatureLabel",value:function(){var e=this.props.feature;e.label=document.querySelector('input[name="measureElement_'+this.props.idx+'"]').value,this.props.modifyFeature(e,e.id)}},{key:"convertMetersToKm",value:function(e){var t=e/1e3;return t>0?t+" km":e+" m"}},{key:"convertSquareMetersToSquareKm",value:function(e){var t=e/1e6;return t>0?t+" km²":e+" m²"}}]),t}(s.Component)}}]);