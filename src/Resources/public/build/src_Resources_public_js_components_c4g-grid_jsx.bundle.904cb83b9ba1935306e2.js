/*! For license information please see src_Resources_public_js_components_c4g-grid_jsx.bundle.904cb83b9ba1935306e2.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-grid_jsx"],{"./src/Resources/public/js/components/c4g-grid.jsx":(e,t,n)=>{var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=n("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(n("./node_modules/@babel/runtime/helpers/createClass.js")),a=r(n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=r(n("./node_modules/@babel/runtime/helpers/inherits.js")),c=r(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var n=C(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n("./node_modules/react/index.js")),p=n("./node_modules/ol/control.js"),f=n("./src/Resources/public/js/c4g-maps-constant.js"),m=n("./src/Resources/public/js/c4g-maps-i18n.js"),b=n("./node_modules/ol/index.js");function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(C=function(e){return e?n:t})(e)}t.default=function(e){(0,u.default)(s,e);var t,n,r=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.default)(t);if(n){var s=(0,i.default)(this).constructor;e=Reflect.construct(r,arguments,s)}else e=r.apply(this,arguments);return(0,c.default)(this,e)});function s(e){var t,n,l;(0,o.default)(this,s),t=r.call(this,e);var u=(0,m.getLanguage)(e.mapController.data),c=e.mapController,i={className:f.cssConstants.GRATICULE,switchable:!0,tipLabel:u.CTRL_GRID,label:"#",disableLabel:"[]",showLabels:!0,visible:!1},d=((0,a.default)(t),new b.Graticule(i)),C=function(e){e.stopPropagation(),this.blur(),d.getVisible()?(d.setVisible(!1),jQuery(n).removeClass(f.cssConstants.ENABLED)):(d.setVisible(!0),jQuery(n).addClass(f.cssConstants.ENABLED))};if((n=document.createElement("div")).className=f.cssConstants.GRATICULE+" "+f.cssConstants.OL_UNSELECTABLE+" "+f.cssConstants.OL_CONTROL,l=document.createElement("button"),e.mapController.data.themeData.controlLabels){var h=document.createElement("span");h.innerText=u.CTRL_GRID,l.appendChild(h)}else l.title=u.CTRL_GRID;n.appendChild(l),l.addEventListener("click",C,{useCapture:!1,passive:!0}),l.addEventListener("touchstart",C,{useCapture:!1,passive:!0});var _=new p.Control({element:n,target:e.target});e.mapController.map.addLayer(d);var j=c.arrComponents.findIndex((function(e){return"graticule"===e.name}));return c.arrComponents[j].control=_,c.mapsControls.controls.graticule=_,t}return(0,l.default)(s,[{key:"render",value:function(){return null}}]),s}(d.Component)}}]);