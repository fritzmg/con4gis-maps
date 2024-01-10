/*! For license information please see src_Resources_public_js_components_c4g-zoom-position_jsx.bundle.3f4cad3387492da3346a.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-zoom-position_jsx"],{"./src/Resources/public/js/components/c4g-zoom-position.jsx":(e,t,o)=>{var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),r=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=n(o("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var o=b(t);if(o&&o.has(e))return o.get(e);var n={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,o&&o.set(e,n),n}(o("./node_modules/react/index.js")),d=o("./node_modules/ol/control.js"),m=o("./src/Resources/public/js/c4g-maps-constant.js"),f=o("./src/Resources/public/js/c4g-maps-i18n.js");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(b=function(e){return e?o:t})(e)}function _(e,t,o){return t=(0,u.default)(t),(0,l.default)(e,C()?Reflect.construct(t,o||[],(0,u.default)(e).constructor):t.apply(e,o))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}o("./node_modules/ol/index.js"),t.default=function(e){function t(e){var o;(0,s.default)(this,t),o=_(this,t,[e]);var n,r,a=(0,c.default)(o),l=e.mapController,u=l.map.getView(),i=l.data,p=(0,f.getLanguage)(i),b=function(e){e.stopPropagation(),this.blur(),a.props.mapController.geolocation.once("change",(function(e){var t=a.props.mapController.geolocation.getPosition();t&&(u.setCenter(t),u.setZoom(18),l.map.setView(u))})),a.props.mapController.geolocation.getTracking()?a.props.mapController.geolocation.dispatchEvent("change"):a.props.mapController.geolocation.setTracking(!0)};if((n=document.createElement("div")).className=m.cssConstants.OL_ZOOM_POS+" "+m.cssConstants.OL_CONTROL+" "+m.cssConstants.OL_UNSELECTABLE,r=document.createElement("button"),e.mapController.data.themeData.controlLabels){var C=document.createElement("span");C.innerText=p.CTRL_ZOOM_POS,r.appendChild(C)}else r.title=p.CTRL_ZOOM_POS;n.appendChild(r),r.addEventListener("click",b,{useCapture:!1,passive:!0}),r.addEventListener("touchstart",b,{useCapture:!1,passive:!0});var g=new d.Control({element:n,target:o.props.target}),h=l.arrComponents.findIndex((function(e){return"zoomPosition"===e.name}));return l.arrComponents[h].control=g,l.mapsControls.controls.zoomPosition=g,o}return(0,i.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return null}}]),t}(p.Component)}}]);