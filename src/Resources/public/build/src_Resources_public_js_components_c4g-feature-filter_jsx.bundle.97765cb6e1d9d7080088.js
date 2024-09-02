/*! For license information please see src_Resources_public_js_components_c4g-feature-filter_jsx.bundle.97765cb6e1d9d7080088.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-feature-filter_jsx"],{"./src/Resources/public/js/components/c4g-feature-filter-item.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterItem=void 0;var s=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),o=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),f=r("./src/Resources/public/js/c4g-maps-utils.js");function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function d(e,t,r){return t=(0,u.default)(t),(0,i.default)(e,h()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}t.FeatureFilterItem=function(e){function t(e){return(0,s.default)(this,t),d(this,t,[e])}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=this;return c.default.createElement("div",{className:"c4g-filter-form-element"},c.default.createElement("label",null,c.default.createElement("input",{type:"radio",onChange:function(r){e.props.filterLayers(t.props.feature.identifier,t.props.parentId,t.props.feature.value,t.props.value.field)},checked:t.props.checked.identifier===t.props.feature.identifier,value:this.props.feature.identifier}),f.utils.decodeHTML(this.props.feature.translation)))}}])}(c.Component)},"./src/Resources/public/js/components/c4g-feature-filter-list.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterList=void 0;var s=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),o=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),f=r("./src/Resources/public/js/c4g-maps-utils.js"),p=r("./src/Resources/public/js/components/c4g-feature-filter-item.jsx");function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e,t,r){return t=(0,u.default)(t),(0,i.default)(e,m()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}t.FeatureFilterList=function(e){function t(e){return(0,s.default)(this,t),h(this,t,[e])}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e,t=this,r=null,a="";if(this.props.feature.filters.length>2){this.props.open?(a="c4g-open",r=c.default.createElement("form",null,this.props.feature.filters.map((function(e,r){return c.default.createElement(p.FeatureFilterItem,{feature:e,parentId:t.props.id,checked:t.props.checkedItem,filterLayers:t.props.filterLayers,key:r})})))):a="c4g-close",a+="fi_wrapper fi_"+f.utils.removeUmlauts(this.props.feature.name);var n=this.props.checkedItem.identifier==="all c4g-item-"+f.utils.removeUmlauts(this.props.feature.name)?"":"c4g-item-checked c4g-item-"+f.utils.removeUmlauts(this.props.feature.name);return c.default.createElement("li",{className:n},c.default.createElement("div",{className:a,onMouseUp:function(e){t.props.setOpen(t.props.id),e.stopPropagation(),e.preventDefault()}},c.default.createElement("span",null),f.utils.decodeHTML(this.props.feature.name)),r)}a="fi_wrapper fi_"+f.utils.removeUmlauts(this.props.feature.name),e="fi_text fi_"+f.utils.removeUmlauts(this.props.feature.name)+"_text";var s="c4g-item-checked c4g-item-"+f.utils.removeUmlauts(this.props.feature.name);s+="all"===this.props.checkedItem.identifier?"":" clicked";var l,i=null;return l=this.props.feature.link?function(e){window.open(t.props.feature.link,"_self")}:function(e){t.props.filterLayers(t.props.feature.filters[1].identifier!==t.props.checkedItem.identifier?t.props.feature.filters[1].identifier:"all",t.props.id,t.props.feature.filters[1].identifier!==t.props.checkedItem.identifier?t.props.feature.filters[1].value:void 0,t.props.feature.filters[1].identifier!==t.props.checkedItem.identifier?t.props.feature.filters[1].field:void 0),e.stopPropagation(),e.preventDefault()},this.props.feature.image&&(i=c.default.createElement("img",{src:this.props.feature.image,title:this.props.feature.name,width:this.props.feature.width,height:this.props.feature.height})),c.default.createElement("li",{className:s},c.default.createElement("div",{className:a,onMouseUp:l},i,c.default.createElement("span",{className:e},f.utils.decodeHTML(this.props.feature.name))))}}])}(c.Component)},"./src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterMultiCheckbox=void 0;var s=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),o=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),f=r("./src/Resources/public/js/c4g-maps-utils.js"),p=r("./src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx");function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e,t,r){return t=(0,u.default)(t),(0,i.default)(e,m()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}t.FeatureFilterMultiCheckbox=function(e){function t(e){return(0,s.default)(this,t),h(this,t,[e])}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e,t,r=this,a=null;if(this.props.feature.filters.length>2){this.props.open?(e="c4g-open",a=c.default.createElement("form",null,this.props.feature.filters.map((function(e,t){var a=!!r.props.checkedItems.find((function(t){return t.identifier===e.identifier&&t.value===e.value}));return c.default.createElement(p.FeatureFilterMultiCheckboxItem,{feature:e,parentId:r.props.id,checked:a,filterLayers:r.props.filterLayers,key:t})})))):e="c4g-close";var n=null;if(this.props.checkedItems.length>0){var s="all"===this.props.checkedItems[0].identifier?this.props.checkedItems.length-1:this.props.checkedItems.length;n=c.default.createElement("span",{className:"sum"}," ",s," ")}e+=" fi_wrapper fi_"+f.utils.removeUmlauts(this.props.feature.name);var l="c4g-item-checked c4g-item-"+f.utils.removeUmlauts(this.props.feature.name);return c.default.createElement("li",{className:l},c.default.createElement("div",{className:e,onMouseUp:function(e){r.props.setOpen(r.props.id),e.stopPropagation(),e.preventDefault()}},c.default.createElement("span",null),f.utils.decodeHTML(this.props.feature.name)),n,a)}e="fi_wrapper fi_"+f.utils.removeUmlauts(this.props.feature.name),t="fi_text fi_"+f.utils.removeUmlauts(this.props.feature.name)+"_text";var i,u="c4g-item-checked c4g-item-"+f.utils.removeUmlauts(this.props.feature.name);u+=0===this.props.checkedItems.length?"":" clicked",i=this.props.feature.link?function(e){window.open(r.props.feature.link,"_self")}:function(e){r.props.filterLayers(r.props.feature.filters[1].identifier,r.props.id,!0),e.stopPropagation(),e.preventDefault()};var o=null;return this.props.feature.image&&(o=c.default.createElement("img",{src:this.props.feature.image,title:this.props.feature.name,width:this.props.feature.width,height:this.props.feature.height})),c.default.createElement("li",{className:u},c.default.createElement("div",{className:e,onMouseUp:i},c.default.createElement("span",{className:t},o,f.utils.decodeHTML(this.props.feature.name))))}}])}(c.Component)},"./src/Resources/public/js/components/c4g-feature-filter.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),o=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),f=r("./src/Resources/public/js/components/c4g-feature-filter-list.jsx"),p=r("./src/Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx"),d=(r("./node_modules/ol/style.js"),r("./node_modules/ol/source.js")),h=r("./src/Resources/public/js/c4g-maps-i18n.js"),m=a(r("./node_modules/opening_hours/build/opening_hours.js")),v=r("./src/Resources/public/js/c4g-maps-utils.js");function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function b(e,t,r){return t=(0,u.default)(t),(0,i.default)(e,y()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}t.default=function(e){function t(e){var r;(0,s.default)(this,t);var a=r=b(this,t,[e]);return r.filterLayers=r.filterLayers.bind(r),r.filterLayersMulti=r.filterLayersMulti.bind(r),r.setOpen=r.setOpen.bind(r),r.wrapperRef=c.default.createRef(),r.ulRef=c.default.createRef(),r.handleClickOutside=r.handleClickOutside.bind(r),r.handleClickInside=r.handleClickInside.bind(r),r.filterLayer=r.filterLayer.bind(r),r.filterLayerMulti=r.filterLayerMulti.bind(r),r.hideFeature=r.hideFeature.bind(r),r.hideFeatureMulti=r.hideFeatureMulti.bind(r),r.callbackFunction=r.callbackFunction.bind(r),r.callbackFunctionMulti=r.callbackFunctionMulti.bind(r),r.loadFilters(),e.mapController.data.caching&&(window.onbeforeunload=function(){v.utils.storeValue("filtersChecked",JSON.stringify(a.state.arrChecked));var e=a.props.mapController.getCurrentLayerStates(a.props.mapController.state.arrLayerStates);v.utils.storeValue("layers",e),v.utils.storeValue("tstampc4g",Date.now())}),r.state={filters:[],open:!0,arrChecked:[],openedList:-1},r.features=[],r.langConstants=(0,h.getLanguage)(e.mapController.data),r.props.mapController.filter=r,r}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e,t=this,r=this,a=this.state.filters,n=document.querySelector(".c4g-feature-filter-list");e=n?!(n.scrollWidth<=n.clientWidth):r.props.target&&!(r.props.target.scrollWidth<=r.props.target.clientWidth);var s=null;if(parseFloat(this.props.mapController.data.filterResetButton)){var l=!1;for(var i in this.state.arrChecked)!l&&this.state.arrChecked.hasOwnProperty(i)&&(l=parseFloat(this.props.mapController.data.filterHandling)?this.state.arrChecked[i]!=[]:"all"!=this.state.arrChecked[i].identifier);l&&(s=c.default.createElement("button",{className:"c4g-feature-filter-reset",onMouseUp:function(e){return t.resetFilter()}},this.langConstants.RESET_FILTER))}if(parseFloat(this.props.mapController.data.filterHandling)){if(a&&a.length>0){var u=a.map((function(e,a){var n=r.state.arrChecked[a]||[],s=r.state.openedList===a;return c.default.createElement(p.FeatureFilterMultiCheckbox,{feature:e,open:s,setOpen:t.setOpen,checkedItems:n,filterLayers:t.filterLayersMulti,id:a,key:a})}));return e?c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("button",{className:"c4g-btn-nav-previous",onMouseUp:function(e){return t.ulRef.current.scrollLeft-=100}}),c.default.createElement("button",{className:"c4g-btn-nav-next",onMouseUp:function(e){return t.ulRef.current.scrollLeft+=100}}),c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-overflowed",onMouseUp:function(e){return t.handleClickInside(e)},ref:this.ulRef},u),s):c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-not-overflowed",onMouseUp:function(e){return t.handleClickInside(e)},ref:this.ulRef},u),s)}}else if(a&&a.length>0){var o=a.map((function(e,a){var n=r.state.arrChecked[a],s=r.state.openedList===a;return c.default.createElement(f.FeatureFilterList,{feature:e,open:s,setOpen:t.setOpen,checkedItem:n,filterLayers:t.filterLayers,id:a,key:a})}));return e?c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("button",{className:"c4g-btn-nav-previous",onMouseUp:function(e){return t.ulRef.current.scrollLeft-=100}}),c.default.createElement("button",{className:"c4g-btn-nav-next",onMouseUp:function(e){return t.ulRef.current.scrollLeft+=100}}),c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-overflowed",onMouseUp:function(e){return t.handleClickInside(e)},ref:this.ulRef},o),s):c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-not-overflowed",onMouseUp:function(e){return t.handleClickInside(e)},ref:this.ulRef},o),s)}return c.default.createElement("div",null)}},{key:"filterLayers",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=this.state.arrChecked;n[t]={identifier:e,value:r,field:a},this.setState({arrChecked:n},this.callbackFunction)}},{key:"callbackFunction",value:function(){var e=this;this.props.mapController.map.getLayers().getArray().map((function(t,r){e.filterLayer(t)}));for(var t=0;t<this.features.length;t++)this.features.hasOwnProperty(t)&&this.showFeature(this.features[t],t)&&t--;this.props.mapController.map.getView().dispatchEvent("change:center")}},{key:"filterLayersMulti",value:function(e,t,r){var a=this.state.arrChecked,n=a[t],s=n.find((function(t){return t.identifier===e&&t.value===r}));if(s)if("all"===e)n=[];else{var l=n.indexOf(s);l>-1&&n.splice(l,1)}else"all"===e?n=JSON.parse(JSON.stringify(this.state.filters[t].filters)):n.push({identifier:e,value:r});a[t]=n,this.setState({arrChecked:a},this.callbackFunctionMulti)}},{key:"callbackFunctionMulti",value:function(){var e=this;this.props.mapController.map.getLayers().getArray().map((function(t,r){e.filterLayerMulti(t)}));for(var t=0;t<this.features.length;t++)this.features.hasOwnProperty(t)&&this.showFeatureMulti(this.features[t],t)&&t--}},{key:"setOpen",value:function(e){this.state.openedList===e?this.setState({openedList:-1}):this.setState({openedList:e})}},{key:"resetFilter",value:function(){var e=this,t=[];for(var r in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(r)&&(parseFloat(this.props.mapController.data.filterHandling)?t.push([]):t.push({identifier:"all"}));this.setState({arrChecked:t},(function(){for(var t=0;t<e.features.length;t++)e.features.hasOwnProperty(t)&&e.resetFeature(e.features[t],t)&&t--}))}},{key:"filterLayer",value:function(e){var t=this;if(e.getLayers&&"function"==typeof e.getLayers)e.getLayers().getArray().map((function(e,r){t.filterLayer(e)}));else if(e.getStyle&&"function"==typeof e.getSource){var r=e.getSource()instanceof d.Cluster?e.getSource().getSource():e.getSource();r.forEachFeature((function(e){return t.hideFeature(e,r)}))}}},{key:"filterLayerMulti",value:function(e){var t=this;if(e.getLayers&&"function"==typeof e.getLayers)e.getLayers().getArray().map((function(e,r){t.filterLayerMulti(e)}));else if(e.getStyle&&"function"==typeof e.getSource){var r=e.getSource()instanceof d.Cluster?e.getSource().getSource():e.getSource();r.forEachFeature((function(e){return t.hideFeatureMulti(e,r)}))}}},{key:"checkFeature",value:function(e,t){var r=t.identifier;if("opening_hours"!==t.value||!e.get(t.field||"opening_hours"))return!!("all"===r||e.get(r)&&!t.value||t.value==e.get(r)&&t.value);try{return new m.default(e.get(t.field||"opening_hours"),{address:{country_code:"de"}}).getState()}catch(e){return!1}}},{key:"checkFeatureMulti",value:function(e,t){}},{key:"hideFeature",value:function(e,t){var r=this;if(e.get("features"))e.get("features").forEach((function(e){return r.hideFeature(e,t)}));else{if(e.get("noFilter"))return;var a=!0;for(var n in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(n)&&a&&(a=this.checkFeature(e,this.state.arrChecked[n]));a||(e.set("source",t),this.features.push(e),t.removeFeature(e))}}},{key:"hideFeatureMulti",value:function(e,t){var r=this;if(e.get("features"))e.get("features").forEach((function(e){return r.hideFeatureMulti(e,t)}));else{if(e.get("noFilter"))return;var a=!1,n=!1;for(var s in this.state.arrChecked)if(this.state.arrChecked.hasOwnProperty(s)){var l=this.state.arrChecked[s];for(var i in l)if(l.hasOwnProperty(i)){n=!0;var u=l[i],o=u.identifier;if(e.get(o)){var c=e.get(o);(u.value&&u.value===c||!u.value)&&(a=!0)}}}!a&&n&&(e.set("source",t),this.features.push(e),t.removeFeature(e))}}},{key:"showFeature",value:function(e,t){var r=!0;for(var a in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(a)&&r&&(r=this.checkFeature(e,this.state.arrChecked[a]));if(r){var n=e.get("source");return e.set("source",!1),n.addFeature(e),this.features.splice(t,1),!0}return!1}},{key:"resetFeature",value:function(e,t){var r=e.get("source");return e.set("source",!1),r.addFeature(e),this.features.splice(t,1),!0}},{key:"showFeatureMulti",value:function(e,t){var r=!1,a=!1;for(var n in this.state.arrChecked)if(this.state.arrChecked.hasOwnProperty(n)){var s=this.state.arrChecked[n];for(var l in s)if(s.hasOwnProperty(l)){a=!0;var i=s[l],u=i.identifier;if(e.get(u)){var o=e.get(u);(i.value&&i.value===o||!i.value)&&(r=!0)}}}if(r||!a){var c=e.get("source");return e.set("source",!1),c.addFeature(e),this.features.splice(t,1),!0}return!1}},{key:"loadFilters",value:function(){var e=this,t=this.props.mapController.data.api.filter+this.props.mapController.data.id+"/"+this.props.mapController.data.lang;fetch(t).then((function(t){return t.json().then((function(t){for(var r=function(){},a=[],n=0;n<t.length;n++)parseFloat(e.props.mapController.data.filterHandling)?a.push([]):a.push({identifier:"all"});if(e.props.mapController.data.caching&&v.utils.getValue("tstampc4g")&&v.utils.getValue("tstampc4g")+604800>Date.now()&&v.utils.getValue("filtersChecked")){var s=JSON.parse(v.utils.getValue("filtersChecked"));if(s.length===t.length)if(a=s,e.props.mapController.proxy.layers_loaded)r=parseFloat(e.props.mapController.data.filterHandling)?e.callbackFunctionMulti:e.callbackFunction;else{var l=parseFloat(e.props.mapController.data.filterHandling)?e.callbackFunctionMulti:e.callbackFunction;window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(e){l()}))}}e.setState({filters:t,arrChecked:a},r)}))}))}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&this.wrapperRef.current&&!this.wrapperRef.current.contains(e.target)&&this.setState({openedList:-1})}},{key:"handleClickInside",value:function(e){e.nativeEvent.path[0]===e.currentTarget&&this.setState({openedList:-1})}}])}(c.Component)},"./src/Resources/public/js/components/c4g-feature-multicheckbox-item.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterMultiCheckboxItem=void 0;var s=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),o=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),f=r("./src/Resources/public/js/c4g-maps-utils.js");function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function d(e,t,r){return t=(0,u.default)(t),(0,i.default)(e,h()?Reflect.construct(t,r||[],(0,u.default)(e).constructor):t.apply(e,r))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}t.FeatureFilterMultiCheckboxItem=function(e){function t(e){return(0,s.default)(this,t),d(this,t,[e])}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"c4g-filter-form-element"},c.default.createElement("label",null,c.default.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:function(e){e.stopPropagation()},onClick:function(t){e.props.filterLayers(e.props.feature.identifier,e.props.parentId,e.props.feature.value)},value:this.props.feature.identifier}),f.utils.decodeHTML(this.props.feature.translation)))}}])}(c.Component)}}]);