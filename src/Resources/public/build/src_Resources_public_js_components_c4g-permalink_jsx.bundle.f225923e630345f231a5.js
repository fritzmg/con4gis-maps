/*! For license information please see src_Resources_public_js_components_c4g-permalink_jsx.bundle.f225923e630345f231a5.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-permalink_jsx"],{"./src/Resources/public/js/components/c4g-permalink.jsx":(e,t,n)=>{var s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=n("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=s(n("./node_modules/@babel/runtime/helpers/createClass.js")),l=s(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=s(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=s(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var s={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(s,o,l):s[o]=e[o]}return s.default=e,n&&n.set(e,s),s}(n("./node_modules/react/index.js")),p=n("./src/Resources/public/js/c4g-maps-constant.js"),d=n("./node_modules/ol/proj.js"),m=n("./src/Resources/public/js/c4g-maps-utils.js"),C=n("./src/Resources/public/js/c4g-maps-i18n.js"),h=n("./node_modules/ol/control.js");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var k=u.default.lazy((function(){return Promise.resolve().then(n.bind(n,"./src/Resources/public/js/components/c4g-titlebar.jsx"))}));t.default=function(e){function t(e){var n,s,a,o;(0,r.default)(this,t),s=this,a=t,o=[e],a=(0,i.default)(a);var c=n=(0,l.default)(s,g()?Reflect.construct(a,o||[],(0,i.default)(s).constructor):a.apply(s,o)),u=document.createElement("div"),p=document.createElement("button"),d=(0,C.getLanguage)(e.mapController.data);if(e.mapController.data.themeData&&e.mapController.data.themeData.controlLabels){var m=document.createElement("span");m.innerText=d.CTRL_PERMALINK,p.appendChild(m)}else p.title=d.CTRL_PERMALINK;u.className="c4g-permalink-control ol-unselectable ol-control ",e.open?u.className+="c4g-open":u.className+="c4g-close",e.external&&(u.className+=" c4g-external"),u.appendChild(p),jQuery(u).on("click",(function(e){c.state.open?c.close():c.open()}));var f=e.mapController,k=new h.Control({element:u,target:e.target}),v=f.arrComponents.findIndex((function(e){return"permalink"===e.name}));return f.arrComponents[v].control=k,f.mapsControls.controls.horizontalPanel=k,n.open=n.open.bind(n),n.close=n.close.bind(n),n.langConstants=(0,C.getLanguage)(n.props.mapController.data),n.state={open:!1,link:""},n}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this;return u.default.createElement("div",{className:"c4g-permalink-wrapper"},u.default.createElement(u.Suspense,{fallback:u.default.createElement("div",null,"Loading...")},u.default.createElement(k,{wrapperClass:"c4g-permalink-header",headerClass:"c4g-permalink-header-headline",header:"Permalink",closeBtnClass:"c4g-permalink-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),u.default.createElement("div",{className:"c4g-permalink-content"},u.default.createElement("textarea",{cols:"50",rows:"2",id:"permalink-text",value:this.state.link,readOnly:!0}),u.default.createElement("button",{className:p.cssConstants.COPY+" "+p.cssConstants.ICON,title:this.langConstants.COPY_TO_CLIPBOARD,"data-clipboard-target":"#permalink-text"}),u.default.createElement("button",{className:p.cssConstants.REFRESH+" "+p.cssConstants.ICON,title:this.langConstants.REFRESH,onMouseUp:function(){return e.generateLinkFromCurrentState({target:e.textfield})}})))}},{key:"componentDidUpdate",value:function(e,t,n){if(t.open===this.state.open&&t.link===this.state.link||this.generateLinkFromCurrentState({target:this.textfield}),t.open&&!this.state.open&&jQuery(".c4g-permalink-container").removeClass(p.cssConstants.OPEN).addClass(p.cssConstants.CLOSE),this.props.mapController.data.caching){var s=m.utils.getValue("panel");"Permalink"!==s||this.state.open?"Permalink"!==s&&this.state.open&&m.utils.storeValue("panel","Permalink"):m.utils.storeValue("panel","")}this.state.open&&jQuery(".c4g-permalink-container").addClass(p.cssConstants.OPEN).removeClass(p.cssConstants.CLOSE)}},{key:"componentDidMount",value:function(){this.textField=document.querySelector("#permalink-text");var e=document.querySelector("."+p.cssConstants.COPY+"."+p.cssConstants.ICON);try{new ClipboardJS(e)}catch(e){console.warn("Permalink is currently not supported in backend mode..")}}},{key:"open",value:function(){jQuery(this.element).addClass(p.cssConstants.OPEN),jQuery(".c4g-permalink-container").removeClass(p.cssConstants.CLOSE).addClass(p.cssConstants.OPEN),this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){jQuery(this.element).removeClass(p.cssConstants.OPEN),jQuery(".c4g-permalink-container").removeClass(p.cssConstants.OPEN).addClass(p.cssConstants.CLOSE),this.setState({open:!1})}},{key:"toggle",value:function(){jQuery(this.popup).hasClass(p.cssConstants.CLOSE)?this.open():this.close()}},{key:"generateLinkFromCurrentState",value:function(e){var t,n,s,a,r;if((!(t=e||{}).paramCount||6!==t.paramCount&&2!==t.paramCount&&1!==t.paramCount)&&(t.paramCount=6),s=[],n=this.props.mapController.map.getView(),this.props.mapController.proxy,r=n.getCenter(),r=(0,d.transform)([r[0],r[1]],"EPSG:3857","EPSG:4326"),s.push(+r[0].toFixed(6)),s.push(+r[1].toFixed(5)),s.push(parseInt(n.getZoom())),this.props.saveIds){s.push(+n.getRotation().toFixed(2)),this.props.mapController.state.activeBaselayerId?s.push(this.props.mapController.state.activeBaselayerId):s.push(0);var o=[],l=this.props.mapController.state.arrLayerStates;for(var i in l)l.hasOwnProperty(i)&&(o=o.concat(this.getActiveLayerIds(l[i])));o.length>1?(-1===o[0].indexOf("{")&&(o=m.utils.deltaEncode(o)),o=o.join(":")):o=o[0]||"0",s.push(o)}s=s.join("/"),a=m.utils.setUrlParam(s,this.props.mapController.data.permalink.getParameter),this.setState({link:a})}},{key:"generateLink",value:function(e){return!(!e||6!==e.length&&2!==e.length&&1!==e.length)&&m.utils.setUrlParam(e.join("/"),this.props.mapController.data.permalink.getParameter)}},{key:"getActiveLayerIds",value:function(e){var t=[];for(var n in e.active&&t.push(e.id),e.childStates)e.childStates.hasOwnProperty(n)&&(t=t.concat(this.getActiveLayerIds(e.childStates[n])));return t}}])}(u.Component)}}]);