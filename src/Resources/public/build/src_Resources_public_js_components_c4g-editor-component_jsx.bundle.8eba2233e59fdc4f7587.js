/*! For license information please see src_Resources_public_js_components_c4g-editor-component_jsx.bundle.8eba2233e59fdc4f7587.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-editor-component_jsx"],{"./src/Resources/public/js/c4g-editor-i18n-de.js":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.projectEditorLang=void 0,t.projectEditorLang={LANG:"de",METADATA_EDIT:"Metadaten bearbeiten",DUPLICATE_ELEMENT:"Element duplizieren",DISPLACE_ELEMENT:"Element in anderes Projekt verschieben",DUPLICATE_AND_DELETE:"Element duplizieren & in anderes Projekt verschieben",CHOOSE_PROJECT:"Wähle ein Projekt ...",EDITOR_FEATURE_DELETE_HEADLINE:"Element löschen",EDITOR_FEATURE_DELETE_QUESTION:"Wollen Sie das Element wirklich löschen?",ROTATE_ELEMENT:"Element rotieren",DESELECT_ELEMENT:"Element-Auswahl aufheben",REVERT_ELEMENT:"Letzte Version wiederherstellen",CONFIRM_DELETE_ALL:"Wollen Sie die ausgewählten Elemente wirklich löschen?",BUTTON_DESELECT_ALL:"Auswahl für alle aufheben",BUTTON_DELETE_ALL:"Ausgewählte Elemente löschen",BUTTON_DISPLACE_ALL:"Ausgewählte Elemente in anderes Projekt verschieben",BUTTON_CONFIRM:"Bestätigen",BUTTON_CANCEL:"Abbrechen",BUTTON_COPY_DISPLACE_ALL:"Ausgewählte Elemente kopieren und in anderes Projekt verschieben",BUTTON_TRANSLATE_ALL:"Ausgewählte Elemente auf der Karte verschieben",BUTTON_APPLY_TRANSLATE:"Änderungen übernehmen",EDITOR:"Editor",EDITOR_ENABLE_INSTANT_MEASURE:"Messen während des Zeichnens",EDITOR_ENABLE_FREEHAND_DRAW:"Freihand zeichnen",EDITOR_FEATURE_APPLY:"Editieren beenden",EDITOR_FEATURE_DELETE:"Aktives Element löschen",EDITOR_FEATURE_MODIFY:"Elemente editieren",EDITOR_SELECT_INFO:"Zur Auswahl ein Element auf der Karte anklicken.",EDITOR_SELECT_INFO_ADDITIONAL:"[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox",EDITOR_VIEW_TRIGGER_SELECT:"Auswahl Modus",EDITOR_VIEW_TRIGGER_DRAW_POINT:"Punktwerkzeuge",EDITOR_VIEW_TRIGGER_DRAW_FREEHAND:"Freihand zeichnen",EDITOR_VIEW_TRIGGER_DRAW_LINESTRING:"Streckenwerkzeuge",EDITOR_VIEW_TRIGGER_DRAW_POLYGON:"Flächenwerkzeuge",EDITOR_VIEW_TRIGGER_DRAW_CIRCLE:"Kreiswerkzeuge",CTRL_EDITOR:"Editor ein-/ausblenden",EDITOR_API_ERROR_TITLE:"Es ist ein Fehler aufgetreten",NONE:""}},"./src/Resources/public/js/c4g-editor-i18n.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getEditorLanguage=function(e){return"de"===e.lang||e.lang,s.projectEditorLang},t.langConstants=void 0;var o=n("./src/Resources/public/js/c4g-maps-constant-i18n-de.js"),r=n("./src/Resources/public/js/c4g-maps-constant-i18n-en.js"),s=n("./src/Resources/public/js/c4g-editor-i18n-de.js"),a={};"undefined"!=typeof mapData&&(a="de"===mapData.lang?o.langConstantsGerman:"en"===mapData.lang?r.langConstantsEnglish:o.langConstantsGerman),t.langConstants=jQuery.extend(a,s.projectEditorLang)},"./src/Resources/public/js/components/c4g-editor-component.jsx":(e,t,n)=>{var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),r=n("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=T(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var i=s?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n("./node_modules/react/index.js")),p=n("./src/Resources/public/js/c4g-editor-i18n.js"),f=n("./node_modules/ol/control.js"),h=n("./node_modules/ol/layer.js"),E=n("./node_modules/ol/format.js"),g=(n("./node_modules/ol/interaction.js"),n("./node_modules/ol/source.js")),m=n("./node_modules/ol/index.js"),_=n("./node_modules/ol/geom.js"),y=n("./src/Resources/public/js/c4g-maps-utils.js"),C=(n("./node_modules/ol/style.js"),n("./node_modules/ol/proj.js")),v=n("./node_modules/ol/coordinate.js");function T(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(T=function(e){return e?n:t})(e)}function R(e,t,n){return t=(0,c.default)(t),(0,l.default)(e,I()?Reflect.construct(t,n||[],(0,c.default)(e).constructor):t.apply(e,n))}function I(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(I=function(){return!!e})()}var L=d.default.lazy((function(){return n.e("src_Resources_public_js_components_c4g-editor-view_jsx").then(n.bind(n,"./src/Resources/public/js/components/c4g-editor-view.jsx"))})),S=d.default.lazy((function(){return n.e("src_Resources_public_js_components_c4g-titlebar_jsx").then(n.bind(n,"./src/Resources/public/js/components/c4g-titlebar.jsx"))}));t.default=function(e){function t(e){var n;(0,a.default)(this,t),(n=R(this,t,[e])).close=n.close.bind(n),n.open=n.open.bind(n),n.countEditorId=n.countEditorId.bind(n),n.addFeature=n.addFeature.bind(n),n.removeFeature=n.removeFeature.bind(n),n.modifyFeature=n.modifyFeature.bind(n),n.changeJSON=n.changeJSON.bind(n),n.props.mapController.editor=n;var o=n,r=document.createElement("div"),s=document.createElement("button");if(e.mapController.data.themeData&&e.mapController.data.themeData.controlLabels){var i=document.createElement("span");i.innerText="Editor",s.appendChild(i)}else s.title="Editor";r.className="c4g-editor-control ol-unselectable ol-control c4g-close",r.appendChild(s),jQuery(r).on("click",(function(e){var t=o.props.mapController.editorContainer.className.includes("c4g-close");o.state.open?t?jQuery(o.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open"):o.close():o.open()})),n.config={},n.arrLocstyles=[];var l=e.mapController;e.config?n.handleConfig(e.config):n.getConfiguration(l.data.feEditorProfile||l.data.beEditorProfile,!!l.data.feEditorProfile),n.langConstants=(0,p.getEditorLanguage)(l.data);var c=new f.Control({element:r,target:e.target});c.isOpen=function(){return!1},l.mapsControls.controls.editor||(l.mapsControls.controls.editor=c);var u,d=l.arrComponents.findIndex((function(e){return"editor"===e.name}));return l.arrComponents[d].control=c,n.modes=["select","Point","LineString","Polygon","Circle"],n.props.inputField&&$(n.props.inputField).val()&&$(n.props.inputField).val().length>50?(u=$(n.props.inputField).val(),setTimeout((function(){n.reRender()}),200)):u='{"type": "FeatureCollection", "features": []}',n.state={open:e.open||!1,currentMode:"select",styleData:{},control:c,range:0,features:u,editorId:0,addComponents:[]},n.styleFunction=function(e,t){var n=[];if(e&&e.get&&e.get("features")){var r=e.get("features");r.length,e=r[0]}if(e&&e.getStyle())n=e.getStyle();else if(e&&e.get&&e.get("locstyle")){var s=e.get("locstyle");if(o.props.mapController.proxy.locationStyleController.arrLocStyles&&o.props.mapController.proxy.locationStyleController.arrLocStyles[s]){o.props.mapController.proxy.locationStyleController.arrLocStyles[s].style||(o.props.mapController.proxy.locationStyleController.arrLocStyles[s].style=o.props.mapController.proxy.locationStyleController.arrLocStyles[s].getStyleFunction());var a=o.props.mapController.proxy.locationStyleController.arrLocStyles[s].style;n="function"==typeof a?a(e,t,!1):o.props.mapController.proxy.locationStyleController.arrLocStyles[s].style}}return n[0]&&e&&e.get("zIndex")&&n[0].setZIndex(e.get("zIndex")),n},n.features=new m.Collection,n.editorLayer=new h.Vector({source:new g.Vector({format:new E.GeoJSON}),style:n.styleFunction}),n.props.open&&n.props.mapController.map.addLayer(n.editorLayer),n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"open",value:function(){var e=this;jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open");var t=this.props.mapController.map.getLayers(),n=!0;t.forEach((function(t,o,r){t===e.editorLayer&&(n=!1)})),n&&this.props.mapController.map.addLayer(this.editorLayer),this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close"),this.setState({open:!1})}},{key:"countEditorId",value:function(){var e=this.state.editorId+1;this.setState({editorId:e})}},{key:"getConfiguration",value:function(e){var t=this;fetch(arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?"con4gis/editorServiceBackend/"+e:"con4gis/editorService/"+e).then((function(e){e.json().then((function(e){t.handleConfig(e)}))}))}},{key:"handleConfig",value:function(e){var t=this;for(var n in e.drawStyles)if(e.drawStyles.hasOwnProperty(n)){this.config[n]=[];var o=e.drawStyles[n],r=function(){if(o.elements.hasOwnProperty(s)){var e=o.elements[s];t.config[n].push(e),-1===t.arrLocstyles.findIndex((function(t){return t===e.styleId}))&&e.styleId&&t.arrLocstyles.push(e.styleId)}};for(var s in o.elements)r()}this.props.mapController.proxy.locationStyleController.loadLocationStyles(this.arrLocstyles,{done:function(e){t.setState({styleData:e})}})}},{key:"reRender",value:function(){try{if(this.state.features.length>50){this.linkInput();var e=JSON.parse(this.state.features),t=new E.GeoJSON({featureProjection:"EPSG:3857"}).readFeatures(e),n=this.editorLayer.getSource();for(var o in n.forEachFeature((function(e){n.removeFeature(e)})),t)if(t.hasOwnProperty(o)){var r=t[o];r.get("radius")&&r.setGeometry(new _.Circle(r.getGeometry().getCoordinates(),r.get("radius"))),n.addFeature(r)}}}catch(e){console.log(e)}if(this.state.range){var s=window.getSelection(),a=s.getRangeAt(0),i=a.startContainer.childNodes[0]||a.startContainer;a.setStart(i,this.state.range),a.setEnd(i,this.state.range),s.removeRange(a),s.addRange(a)}}},{key:"changeJSON",value:function(e){var t=this,n=window.getSelection().getRangeAt(0).startOffset;this.setState({features:e.target.innerText,range:n},(function(){t.reRender()}))}},{key:"addFeature",value:function(e){var t=this,n=JSON.parse(this.state.features);n.features.push(e);var o=JSON.stringify(n,null,2);this.setState({features:o},(function(){t.linkInput()}))}},{key:"removeFeature",value:function(e){var t=this,n=e.properties.editorId,o=JSON.parse(this.state.features),r=o.features.findIndex((function(e){return e.properties.editorId===n}));o.features.splice(r,1);var s=JSON.stringify(o,null,2);this.setState({features:s},(function(){t.linkInput()})),y.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_remove,e)}},{key:"modifyFeature",value:function(e){var t=this,n=e.properties.editorId,o=JSON.parse(this.state.features),r=o.features.findIndex((function(e){return e.properties.editorId===n}));o.features[r]=e;var s=JSON.stringify(o,null,2);this.setState({features:s},(function(){t.linkInput()}))}},{key:"linkInput",value:function(){this.props.inputField&&this.state.features.length>50&&$(this.props.inputField).val(this.state.features)}},{key:"setAddComps",value:function(e,t){this.setState({config:t,conststr:e})}},{key:"render",value:function(){var e,t=this;return this.state.conststr&&(e=d.default.createElement(this.state.conststr,{config:this.state.config,get:C.get,transform:C.transform,toStringHDMS:v.toStringHDMS,source:this.editorLayer.getSource(),format:new E.GeoJSON})),d.default.createElement("div",{className:"c4g-editor-wrapper"},d.default.createElement(d.Suspense,{fallback:d.default.createElement("div",null,"Loading...")},d.default.createElement(S,(0,s.default)({wrapperClass:"c4g-editor-header",headerClass:"c4g-editor-headline",hideContainer:".c4g-editor-container-right",header:this.langConstants.EDITOR,closeBtnTitle:this.langConstants.CTRL_EDITOR,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close},"closeBtnTitle",this.langConstants.CLOSE))),d.default.createElement("div",{className:"c4g-editor-mode-switcher"},this.modes.map((function(e,n){if("select"===e||t.config[e]&&t.config[e].length>0){var o=t.langConstants["EDITOR_VIEW_TRIGGER_DRAW_"+e.toUpperCase()];return d.default.createElement("button",{key:n,className:"c4g-editor-"+e+"  "+(e===t.state.currentMode?"c4g-active":"c4g-inactive"),title:o,onMouseUp:function(){return t.setState({currentMode:e})}})}return null}))),d.default.createElement(L,{className:"c4g-editor-view",styleFunction:this.styleFunction,mode:this.state.currentMode,styleData:this.state.styleData,elements:this.config[this.state.currentMode]?this.config[this.state.currentMode]:[],active:this.state.open,features:this.features,editorVars:this.props.config.editorVars,removeFeature:this.removeFeature,modifyFeature:this.modifyFeature,addFeature:this.addFeature,editorLayer:this.editorLayer,editorId:this.state.editorId,countEditorId:this.countEditorId,updateFeatures:this.updateFeatures,mapController:this.props.mapController,editor:this,lang:this.langConstants}),d.default.createElement("div",{className:"c4g-editor-content",style:{display:"none"}},d.default.createElement("pre",{contentEditable:!0,style:{overflowY:"scroll",overflowX:"none"},suppressContentEditableWarning:!0,onInput:this.changeJSON},this.state.features)),e)}},{key:"componentDidUpdate",value:function(e,t,n){(e.open&&!this.props.open||t.open&&!this.state.open)&&jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close")}},{key:"componentDidMount",value:function(){window.c4gMapsHooks.hook_editor_components&&window.c4gMapsHooks.hook_editor_components.length>0&&y.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_components,{comp:this,container:"#c4g-editor-portal"})}}])}(d.Component)}}]);