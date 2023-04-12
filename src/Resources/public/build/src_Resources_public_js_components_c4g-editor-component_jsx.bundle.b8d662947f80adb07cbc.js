/*! For license information please see src_Resources_public_js_components_c4g-editor-component_jsx.bundle.b8d662947f80adb07cbc.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-editor-component_jsx"],{"./src/Resources/public/js/c4g-editor-i18n-de.js":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.projectEditorLang=void 0,t.projectEditorLang={LANG:"de",METADATA_EDIT:"Metadaten bearbeiten",DUPLICATE_ELEMENT:"Element duplizieren",DISPLACE_ELEMENT:"Element in anderes Projekt verschieben",DUPLICATE_AND_DELETE:"Element duplizieren & in anderes Projekt verschieben",CHOOSE_PROJECT:"Wähle ein Projekt ...",EDITOR_FEATURE_DELETE_HEADLINE:"Element löschen",EDITOR_FEATURE_DELETE_QUESTION:"Wollen Sie das Element wirklich löschen?",ROTATE_ELEMENT:"Element rotieren",DESELECT_ELEMENT:"Element-Auswahl aufheben",REVERT_ELEMENT:"Letzte Version wiederherstellen",CONFIRM_DELETE_ALL:"Wollen Sie die ausgewählten Elemente wirklich löschen?",BUTTON_DESELECT_ALL:"Auswahl für alle aufheben",BUTTON_DELETE_ALL:"Ausgewählte Elemente löschen",BUTTON_DISPLACE_ALL:"Ausgewählte Elemente in anderes Projekt verschieben",BUTTON_CONFIRM:"Bestätigen",BUTTON_CANCEL:"Abbrechen",BUTTON_COPY_DISPLACE_ALL:"Ausgewählte Elemente kopieren und in anderes Projekt verschieben",BUTTON_TRANSLATE_ALL:"Ausgewählte Elemente auf der Karte verschieben",BUTTON_APPLY_TRANSLATE:"Änderungen übernehmen",EDITOR:"Editor",EDITOR_ENABLE_INSTANT_MEASURE:"Messen während des Zeichnens",EDITOR_ENABLE_FREEHAND_DRAW:"Freihand zeichnen",EDITOR_FEATURE_APPLY:"Editieren beenden",EDITOR_FEATURE_DELETE:"Aktives Element löschen",EDITOR_FEATURE_MODIFY:"Elemente editieren",EDITOR_SELECT_INFO:"Zur Auswahl ein Element auf der Karte anklicken.",EDITOR_SELECT_INFO_ADDITIONAL:"[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox",EDITOR_VIEW_TRIGGER_SELECT:"Auswahl Modus",EDITOR_VIEW_TRIGGER_DRAW_POINT:"Punktwerkzeuge",EDITOR_VIEW_TRIGGER_DRAW_FREEHAND:"Freihand zeichnen",EDITOR_VIEW_TRIGGER_DRAW_LINESTRING:"Streckenwerkzeuge",EDITOR_VIEW_TRIGGER_DRAW_POLYGON:"Flächenwerkzeuge",EDITOR_VIEW_TRIGGER_DRAW_CIRCLE:"Kreiswerkzeuge",CTRL_EDITOR:"Editor ein-/ausblenden",EDITOR_API_ERROR_TITLE:"Es ist ein Fehler aufgetreten",NONE:""}},"./src/Resources/public/js/c4g-editor-i18n.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getEditorLanguage=function(e){return"de"===e.lang||e.lang,s.projectEditorLang},t.langConstants=void 0;var r=n("./src/Resources/public/js/c4g-maps-constant-i18n-de.js"),o=n("./src/Resources/public/js/c4g-maps-constant-i18n-en.js"),s=n("./src/Resources/public/js/c4g-editor-i18n-de.js"),a={};"undefined"!=typeof mapData&&(a="de"===mapData.lang?r.langConstantsGerman:"en"===mapData.lang?o.langConstantsEnglish:r.langConstantsGerman);var i=jQuery.extend(a,s.projectEditorLang);t.langConstants=i},"./src/Resources/public/js/components/c4g-editor-component.jsx":(e,t,n)=>{var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),o=n("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=r(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=r(n("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=r(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=r(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=r(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=T(t);if(n&&n.has(e))return n.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=s?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n("./node_modules/react/index.js")),f=n("./src/Resources/public/js/c4g-editor-i18n.js"),h=n("./node_modules/ol/control.js"),E=n("./node_modules/ol/layer.js"),g=n("./node_modules/ol/format.js"),m=(n("./node_modules/ol/interaction.js"),n("./node_modules/ol/source.js")),_=n("./node_modules/ol/index.js"),y=n("./node_modules/ol/geom.js"),C=n("./src/Resources/public/js/c4g-maps-utils.js"),v=(n("./node_modules/ol/style.js"),n("./node_modules/ol/proj.js")),R=n("./node_modules/ol/coordinate.js");function T(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(T=function(e){return e?n:t})(e)}var I=p.default.lazy((function(){return Promise.all([n.e("src_Resources_public_js_c4g-popup-controller_js"),n.e("src_Resources_public_js_components_c4g-editor-view_jsx")]).then(n.bind(n,"./src/Resources/public/js/components/c4g-editor-view.jsx"))})),b=p.default.lazy((function(){return n.e("src_Resources_public_js_components_c4g-titlebar_jsx").then(n.bind(n,"./src/Resources/public/js/components/c4g-titlebar.jsx"))})),L=function(e){(0,c.default)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,d.default)(t);if(n){var o=(0,d.default)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,u.default)(this,e)});function o(e){var t;(0,a.default)(this,o),(t=r.call(this,e)).close=t.close.bind((0,l.default)(t)),t.open=t.open.bind((0,l.default)(t)),t.countEditorId=t.countEditorId.bind((0,l.default)(t)),t.addFeature=t.addFeature.bind((0,l.default)(t)),t.removeFeature=t.removeFeature.bind((0,l.default)(t)),t.modifyFeature=t.modifyFeature.bind((0,l.default)(t)),t.changeJSON=t.changeJSON.bind((0,l.default)(t)),t.props.mapController.editor=(0,l.default)(t);var n=(0,l.default)(t),s=document.createElement("div"),i=document.createElement("button");i.title="Editor",s.className="c4g-editor-control ol-unselectable ol-control c4g-close",s.appendChild(i),jQuery(s).on("click",(function(e){var t=n.props.mapController.editorContainer.className.includes("c4g-close");n.state.open?t?jQuery(n.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open"):n.close():n.open()})),t.config={},t.arrLocstyles=[];var c=e.mapController;e.config?t.handleConfig(e.config):t.getConfiguration(c.data.feEditorProfile||c.data.beEditorProfile,!!c.data.feEditorProfile),t.langConstants=(0,f.getEditorLanguage)(c.data);var u=new h.Control({element:s,target:e.target});u.isOpen=function(){return!1},c.mapsControls.controls.editor||(c.mapsControls.controls.editor=u);var d,p=c.arrComponents.findIndex((function(e){return"editor"===e.name}));return c.arrComponents[p].control=u,t.modes=["select","Point","LineString","Polygon","Circle"],t.props.inputField&&$(t.props.inputField).val()&&$(t.props.inputField).val().length>50?(d=$(t.props.inputField).val(),setTimeout((function(){t.reRender()}),200)):d='{"type": "FeatureCollection", "features": []}',t.state={open:e.open||!1,currentMode:"select",styleData:{},control:u,range:0,features:d,editorId:0,addComponents:[]},t.styleFunction=function(e,t){var r=[];if(e&&e.get&&e.get("features")){var o=e.get("features");o.length,e=o[0]}if(e&&e.getStyle())r=e.getStyle();else if(e&&e.get&&e.get("locstyle")){var s=e.get("locstyle");if(n.props.mapController.proxy.locationStyleController.arrLocStyles&&n.props.mapController.proxy.locationStyleController.arrLocStyles[s]){n.props.mapController.proxy.locationStyleController.arrLocStyles[s].style||(n.props.mapController.proxy.locationStyleController.arrLocStyles[s].style=n.props.mapController.proxy.locationStyleController.arrLocStyles[s].getStyleFunction());var a=n.props.mapController.proxy.locationStyleController.arrLocStyles[s].style;r="function"==typeof a?a(e,t,!1):n.props.mapController.proxy.locationStyleController.arrLocStyles[s].style}}return r[0]&&e&&e.get("zIndex")&&r[0].setZIndex(e.get("zIndex")),r},t.features=new _.Collection,t.editorLayer=new E.Vector({source:new m.Vector({format:new g.GeoJSON}),style:t.styleFunction}),t.props.open&&t.props.mapController.map.addLayer(t.editorLayer),t}return(0,i.default)(o,[{key:"open",value:function(){var e=this;jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open");var t=this.props.mapController.map.getLayers(),n=!0;t.forEach((function(t,r,o){t===e.editorLayer&&(n=!1)})),n&&this.props.mapController.map.addLayer(this.editorLayer),this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close"),this.setState({open:!1})}},{key:"countEditorId",value:function(){var e=this.state.editorId+1;this.setState({editorId:e})}},{key:"getConfiguration",value:function(e){var t=this;fetch(arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?"con4gis/editorServiceBackend/"+e:"con4gis/editorService/"+e).then((function(e){e.json().then((function(e){t.handleConfig(e)}))}))}},{key:"handleConfig",value:function(e){var t=this;for(var n in e.drawStyles)if(e.drawStyles.hasOwnProperty(n)){this.config[n]=[];var r=e.drawStyles[n],o=function(){if(r.elements.hasOwnProperty(s)){var e=r.elements[s];t.config[n].push(e),-1===t.arrLocstyles.findIndex((function(t){return t===e.styleId}))&&e.styleId&&t.arrLocstyles.push(e.styleId)}};for(var s in r.elements)o()}this.props.mapController.proxy.locationStyleController.loadLocationStyles(this.arrLocstyles,{done:function(e){t.setState({styleData:e})}})}},{key:"reRender",value:function(){try{if(this.state.features.length>50){this.linkInput();var e=JSON.parse(this.state.features),t=new g.GeoJSON({featureProjection:"EPSG:3857"}).readFeatures(e),n=this.editorLayer.getSource();for(var r in n.forEachFeature((function(e){n.removeFeature(e)})),t)if(t.hasOwnProperty(r)){var o=t[r];o.get("radius")&&o.setGeometry(new y.Circle(o.getGeometry().getCoordinates(),o.get("radius"))),n.addFeature(o)}}}catch(e){console.log(e)}if(this.state.range){var s=window.getSelection(),a=s.getRangeAt(0),i=a.startContainer.childNodes[0]||a.startContainer;a.setStart(i,this.state.range),a.setEnd(i,this.state.range),s.removeRange(a),s.addRange(a)}}},{key:"changeJSON",value:function(e){var t=this,n=window.getSelection().getRangeAt(0).startOffset;this.setState({features:e.target.innerText,range:n},(function(){t.reRender()}))}},{key:"addFeature",value:function(e){var t=this,n=JSON.parse(this.state.features);n.features.push(e);var r=JSON.stringify(n,null,2);this.setState({features:r},(function(){t.linkInput()}))}},{key:"removeFeature",value:function(e){var t=this,n=e.properties.editorId,r=JSON.parse(this.state.features),o=r.features.findIndex((function(e){return e.properties.editorId===n}));r.features.splice(o,1);var s=JSON.stringify(r,null,2);this.setState({features:s},(function(){t.linkInput()})),C.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_remove,e)}},{key:"modifyFeature",value:function(e){var t=this,n=e.properties.editorId,r=JSON.parse(this.state.features),o=r.features.findIndex((function(e){return e.properties.editorId===n}));r.features[o]=e;var s=JSON.stringify(r,null,2);this.setState({features:s},(function(){t.linkInput()}))}},{key:"linkInput",value:function(){this.props.inputField&&this.state.features.length>50&&$(this.props.inputField).val(this.state.features)}},{key:"setAddComps",value:function(e,t){this.setState({config:t,conststr:e})}},{key:"render",value:function(){var e,t=this;return this.state.conststr&&(e=p.default.createElement(this.state.conststr,{config:this.state.config,get:v.get,transform:v.transform,toStringHDMS:R.toStringHDMS,source:this.editorLayer.getSource(),format:new g.GeoJSON})),p.default.createElement("div",{className:"c4g-editor-wrapper"},p.default.createElement(p.Suspense,{fallback:p.default.createElement("div",null,"Loading...")},p.default.createElement(b,(0,s.default)({wrapperClass:"c4g-editor-header",headerClass:"c4g-editor-headline",hideContainer:".c4g-editor-container-right",header:this.langConstants.EDITOR,closeBtnTitle:this.langConstants.CTRL_EDITOR,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close},"closeBtnTitle",this.langConstants.CLOSE))),p.default.createElement("div",{className:"c4g-editor-mode-switcher"},this.modes.map((function(e,n){if("select"===e||t.config[e]&&t.config[e].length>0){var r=t.langConstants["EDITOR_VIEW_TRIGGER_DRAW_"+e.toUpperCase()];return p.default.createElement("button",{key:n,className:"c4g-editor-"+e+"  "+(e===t.state.currentMode?"c4g-active":"c4g-inactive"),title:r,onMouseUp:function(){return t.setState({currentMode:e})}})}return null}))),p.default.createElement(I,{className:"c4g-editor-view",styleFunction:this.styleFunction,mode:this.state.currentMode,styleData:this.state.styleData,elements:this.config[this.state.currentMode]?this.config[this.state.currentMode]:[],active:this.state.open,features:this.features,editorVars:this.props.config.editorVars,removeFeature:this.removeFeature,modifyFeature:this.modifyFeature,addFeature:this.addFeature,editorLayer:this.editorLayer,editorId:this.state.editorId,countEditorId:this.countEditorId,updateFeatures:this.updateFeatures,mapController:this.props.mapController,editor:this,lang:this.langConstants}),p.default.createElement("div",{className:"c4g-editor-content",style:{display:"none"}},p.default.createElement("pre",{contentEditable:!0,style:{overflowY:"scroll",overflowX:"none"},suppressContentEditableWarning:!0,onInput:this.changeJSON},this.state.features)),e)}},{key:"componentDidUpdate",value:function(e,t,n){(e.open&&!this.props.open||t.open&&!this.state.open)&&jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close")}},{key:"componentDidMount",value:function(){window.c4gMapsHooks.hook_editor_components&&window.c4gMapsHooks.hook_editor_components.length>0&&C.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_components,{comp:this,container:"#c4g-editor-portal"})}}]),o}(p.Component);t.default=L}}]);