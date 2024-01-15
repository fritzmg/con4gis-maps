/*! For license information please see src_Resources_public_js_components_c4g-router-instructions-container_jsx.bundle.efcf2925280f9adc8983.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-router-instructions-container_jsx"],{"./src/Resources/public/js/components/c4g-router-instruction.jsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterInstruction=void 0;var a=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),u=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=n(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),l=n(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r("./node_modules/react/index.js")),f=r("./src/Resources/public/js/c4g-router-time-conversions.js"),h=r("./node_modules/ol/index.js"),g=r("./node_modules/ol/geom.js"),m=r("./node_modules/ol/proj.js"),b=r("./node_modules/ol/style.js");function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function k(e,t,r){return t=(0,i.default)(t),(0,u.default)(e,y()?Reflect.construct(t,r||[],(0,i.default)(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}t.RouterInstruction=function(e){function t(e){var r;return(0,a.default)(this,t),r=k(this,t,[e]),(0,l.default)((0,c.default)(r),"fnItemClick",(function(){if(this.props.routerWaySource&&this.props.routerWaySource.getFeatures()){this.props.routerHintSource.clear();var e=this.props.routerWaySource.getFeatures()[0].getGeometry().getCoordinates(),t=this.props.dataPos;if(t){var r=t.split(",");r[0]=parseFloat(r[0]),r[1]=parseFloat(r[1]);var n=(0,m.fromLonLat)(r),s=new h.Feature({geometry:new g.Point(n)});this.props.routerHintSource.addFeature(s),this.props.options.mapController.map.getView().setCenter(n)}else if(e&&(this.props.dataStart||0===this.props.dataStart)&&this.props.dataEnd){var a;if(this.props.dataStart===this.props.dataEnd)a=new g.Point(e[this.props.dataStart]);else{var o=e.slice(this.props.dataStart,this.props.dataEnd);a=new g.LineString(o)}var u=new h.Feature({geometry:a});u.setStyle(new b.Style({stroke:new b.Stroke({color:"rgba(255, 0, 0, 1)",width:20})})),this.props.routerHintSource.addFeature(u);var i=jQuery(".c4g-router-container-right").css("width");i?(i=i.split("."),i=Array.isArray(i)?i[0]:i,i=parseInt(i)+50):i=50;var c=parseInt(this.props.mapController.data.starboard.maxZoom)||22;this.props.mapController.map.getView().fit(a,{padding:[50,i,50,50],duration:500,maxZoom:c})}}})),(0,l.default)((0,c.default)(r),"fnItemOver",(function(){if(this.props.routerWaySource&&this.props.routerWaySource.getFeatures()){var e=this.props.routerWaySource.getFeatures()[0];if(e){this.props.routerHintSource.clear();var t=this.props.dataPos;if(t){var r=t.split(",");r[0]=parseFloat(r[0]),r[1]=parseFloat(r[1]);var n=(0,m.fromLonLat)(r),s=new h.Feature({geometry:new g.Point(n)});this.props.routerHintSource.addFeature(s)}else if((this.props.dataStart||0===this.props.dataStart)&&this.props.dataEnd){var a=e.getGeometry().getCoordinates();if(a){var o,u=a.slice(this.props.dataStart,this.props.dataEnd);(o=1===u.length?new h.Feature({geometry:new g.Point(u)}):new h.Feature({geometry:new g.LineString(u)})).setStyle(new b.Style({stroke:new b.Stroke({color:"rgba(255, 0, 0, 1)",width:15})})),this.props.routerHintSource.addFeature(o)}}}}})),(0,l.default)((0,c.default)(r),"fnItemOut",(function(){this.props.routerHintSource.clear()})),r.fnItemOver=r.fnItemOver.bind((0,c.default)(r)),r.fnItemClick=r.fnItemClick.bind((0,c.default)(r)),r.fnItemOut=r.fnItemOut.bind((0,c.default)(r)),r}return(0,p.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return d.default.createElement("div",{className:"c4g-router-instruction",onMouseUp:this.fnItemClick,onMouseLeave:this.fnItemOut,onMouseEnter:this.fnItemOver,key:this.props.id},d.default.createElement("div",{className:"c4g-router-instruction-image"},d.default.createElement("img",{src:this.getInstructionIcon(this.props.imgPath),alt:""})),d.default.createElement("div",{className:"c4g-router-instruction-text"},this.props.instrText),d.default.createElement("div",{className:"c4g-router-instruction-distance"},(0,f.toHumanDistance)(1e3*this.props.instrDist)))}},{key:"getInstructionIcon",value:function(e){switch(this.props.mapController.data.router_api_selection){case"5":case"4":return this.getInstructionIconValhalla(e);case"3":return this.getInstructionIconGraphhopper(e);case"2":return this.getInstructionIconORS(e)}}},{key:"getInstructionIconValhalla",value:function(e){var t;switch(e){case 0:default:t="default.png";break;case 1:case 2:case 3:t="head.png";break;case 4:case 5:case 6:t="target.png";break;case 7:case 8:case 17:case 22:case 25:t="continue.png";break;case 9:case 18:case 20:case 23:t="slight-right.png";break;case 10:t="turn-right.png";break;case 11:t="sharp-right.png";break;case 12:case 13:t="u-turn.png";break;case 14:t="sharp-left.png";break;case 15:t="turn-left.png";break;case 16:case 19:case 21:case 24:t="slight-left.png";break;case 26:case 27:t="round-about.png"}return"bundles/con4gismaps/vendor/osrm/images/"+t}},{key:"getInstructionIconGraphhopper",value:function(e){var t;switch(e){case 0:t="continue.png";break;case-2:t="turn-left.png";break;case 2:t="turn-right.png";break;case-1:t="turn-left.png";break;case 1:t="turn-right.png";break;case-3:t="sharp-left.png";break;case 3:t="sharp-right.png";break;case-7:t="slight-left.png";break;case 7:t="slight-right.png";break;case 6:t="round-about.png";break;case 4:case 5:t="target.png";break;case-98:t="u-turn.png";break;case 99:t="head.png"}return"bundles/con4gismaps/vendor/osrm/images/"+t}},{key:"getInstructionIconORS",value:function(e){var t;switch(e){case 0:t="turn-left.png";break;case 1:t="turn-right.png";break;case 2:t="sharp-left.png";break;case 3:t="sharp-right.png";break;case 4:case 12:t="slight-left.png";break;case 5:case 13:t="slight-right.png";break;case 6:t="continue.png";break;case 7:case 8:t="round-about.png";break;case 9:t="u-turn.png";break;case 10:t="target.png";break;case 11:t="head.png"}return"bundles/con4gismaps/vendor/osrm/images/"+t}}]),t}(d.Component)},"./src/Resources/public/js/components/c4g-router-instructions-container.jsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),u=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=s(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r("./node_modules/react/index.js")),l=r("./src/Resources/public/js/components/c4g-router-instruction.jsx");function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function f(e,t,r){return t=(0,i.default)(t),(0,u.default)(e,h()?Reflect.construct(t,r||[],(0,i.default)(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}r("./src/Resources/public/js/c4g-router-time-conversions.js"),t.default=function(e){function t(e){return(0,a.default)(this,t),f(this,t,[e])}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t=[];return this.props.routerInstructions&&this.props.routerInstructions.instructions&&(t=this.props.routerInstructions.instructions),0===t.length?"":p.default.createElement("div",{className:this.props.className},this.props.header,this.props.switcher,t.map((function(t,r){return p.default.createElement(l.RouterInstruction,{imgPath:t.type,instrText:t.instruction,instrDist:t.length,key:r,id:r,mapController:e.props.mapController,dataStart:t.begin_shape_index,dataEnd:t.end_shape_index,routerWaySource:e.props.routerWaySource,routerHintSource:e.props.routerHintSource})})))}}]),t}(p.Component)}}]);