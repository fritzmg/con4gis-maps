(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-router-feature-list_jsx"],{"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"./node_modules/@babel/runtime/helpers/iterableToArray.js":e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"./node_modules/@babel/runtime/helpers/nonIterableSpread.js":e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"./node_modules/@babel/runtime/helpers/toConsumableArray.js":(e,t,r)=>{var o=r("./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"),s=r("./node_modules/@babel/runtime/helpers/iterableToArray.js"),a=r("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),l=r("./node_modules/@babel/runtime/helpers/nonIterableSpread.js");e.exports=function(e){return o(e)||s(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},"./src/Resources/public/js/components/c4g-router-feature-list-item.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterFeatureListItem=void 0;var a=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),n=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),p=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=b(r("./node_modules/react/index.js")),d=(o(r("./node_modules/ol/geom.js")),r("./src/Resources/public/js/c4g-maps-constant.js")),f=(r("./node_modules/ol/proj.js"),b(r("./src/Resources/public/js/c4g-maps-popup-info-de.js"))),y=b(r("./src/Resources/public/js/c4g-maps-popup-info-en.js")),m=r("./src/Resources/public/js/c4g-maps-utils.js");function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var n=a?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(o,l,n):o[l]=e[l]}return o.default=e,r&&r.set(e,o),o}var v=function(e){(0,u.default)(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,i.default)(t);if(r){var s=(0,i.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,p.default)(this,e)});function s(e){var t;return(0,a.default)(this,s),(t=o.call(this,e)).popupFunctions="de"===e.mapController.data.lang?f:y,t.clickFeature=t.clickFeature.bind((0,n.default)(t)),t}return(0,l.default)(s,[{key:"clickFeature",value:function(e){var t=this;t.props.setActiveId(t.props.feature.id),t.props.featureSource.forEachFeature((function(e){var r=void 0,o=t.props.mapController.data.routerLayers;if("area"===t.props.routeMode?r=o[t.props.layerArea][t.props.layerValueArea].layerData:"route"===t.props.routeMode&&(r=o[t.props.layerRoute][t.props.layerValueRoute].layerData),e.get("tid")===t.props.feature.id){var s=t.props.mapController.data.clickLocstyle;if(s)if(t.props.mapController.proxy.locationStyleController.arrLocStyles[s]){var a=t.props.mapController.proxy.locationStyleController.arrLocStyles[s].style;e.setStyle(a),"Polygon"==e.getGeometry().getType()?t.props.mapController.map.getView().fit(e.getGeometry().getExtent()):t.props.mapController.map.getView().setCenter(e.getGeometry().getCoordinates())}else t.props.mapController.proxy.locationStyleController.loadLocationStyles([s],{done:function(){var r=t.props.mapController.proxy.locationStyleController.arrLocStyles[s].style;t.mapSelectInteraction.getFeatures().forEach((function(t,o,s){t===e&&e.setStyle(r)}))}})}else e.setStyle(t.props.mapController.proxy.locationStyleController.arrLocStyles[r.locstyle].style)})),jQuery(this).parent().children("li").each((function(e,t){jQuery(t).addClass(d.cssConstants.INACTIVE).removeClass(d.cssConstants.ACTIVE)})),jQuery(this).addClass(d.cssConstants.ACTIVE).removeClass(d.cssConstants.INACTIVE)}},{key:"render",value:function(){var e=this,t=null;this.props.featureSource.forEachFeature((function(r){r.get("tid")===e.props.feature.id&&(t=r)}));var r="",o=null;if(t){if("overpass"===this.props.type){if(t.get("locstyle")){var s=t.get("locstyle"),a="",l=this.props.mapController.proxy.locationStyleController.arrLocStyles[s];l&&l.locStyleArr&&(a="cust_icon"===l.locStyleArr.styletype?l.locStyleArr.icon_src:"cust_icon_svg"===l.locStyleArr.styletype?l.locStyleArr.svgSrc:""),r=this.popupFunctions.fnStandardInfoPopup(t,a)}}else if("notOverpass"===this.props.type)this.props.feature&&this.props.feature.popup&&(r=this.props.feature.popup);else{var n="route"===this.props.routeMode?this.props.layerValueRoute:this.props.layerValueArea;o={entry:"",feature:this.props.feature,labels:["name"],activeLayerValue:n},m.utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry,o),r=o.entry}var u={__html:r+"<br>"};return c.default.createElement("li",{ref:this.props.refProp,dangerouslySetInnerHTML:u,className:this.props.active?"route-features-list-element c4g-active":"route-features-list-element c4g-inactive",onMouseUp:this.clickFeature})}return null}}]),s}(c.Component);t.RouterFeatureListItem=v},"./src/Resources/public/js/components/c4g-router-feature-list.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),l=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),u=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var n=a?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(o,l,n):o[l]=e[l]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),f=r("./src/Resources/public/js/components/c4g-router-feature-list-item.jsx");function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}var m=function(e){(0,p.default)(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,i.default)(this,e)});function s(e){var t;return(0,l.default)(this,s),(t=o.call(this,e)).setActiveId=t.setActiveId.bind((0,u.default)(t)),t.features={},t}return(0,n.default)(s,[{key:"setActiveId",value:function(e){this.setState({activeId:e})}},{key:"render",value:function(){var e=this,t=this.sortFeatures();return t?d.default.createElement("div",{className:this.props.className},this.props.header,this.props.switcher,d.default.createElement("ul",null,t.map((function(t,r){return e.features[t.id]=d.default.createRef(),d.default.createElement(f.RouterFeatureListItem,{feature:t,refProp:e.features[t.id],type:e.props.featureList.type,active:e.props.activeId===t.id,setActiveId:e.props.setActiveId,routeMode:e.props.routeMode,mapController:e.props.mapController,layerRoute:e.props.layerRoute,layerArea:e.props.layerArea,featureSource:e.props.featureSource,key:r,layerValueRoute:e.props.layerValueRoute,layerValueArea:e.props.layerValueArea})})))):d.default.createElement("div",{className:this.props.className})}},{key:"componentDidUpdate",value:function(e,t,r){if(e.activeId!==this.props.activeId&&this.props.activeId){var o=this.features[this.props.activeId];document.querySelector(".c4g-router-result-container").scrollTo(0,o.current.offsetTop)}}},{key:"sortFeatures",value:function(){var e=this.props.mapController.data.routerLayers,t="area"===this.props.routeMode?this.props.layerArea:this.props.layerRoute,r="area"===this.props.routeMode?this.props.layerValueArea:this.props.layerValueRoute;if(e){var o=e[t][r].mapLabel;return(0,a.default)(this.props.featureList.features).sort((function(e,t){var r=e,s=t;return e.tags&&t.tags&&(r=e.tags,s=t.tags),isNaN(r[o])?r[o]<s[o]?-1:1:r[o]-s[o]}))}}}]),s}(d.Component);t.default=m}}]);