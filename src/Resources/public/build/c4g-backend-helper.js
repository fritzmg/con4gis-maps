/*! For license information please see c4g-backend-helper.js.LICENSE.txt */
(()=>{"use strict";window.showGeoEditor=function(t,e,o,i){var n,d,a,l;if(!t||!e)return!1;t+="&layerId="+i,(n=o||{}).url=t,d=(window.getSize().x-50).toInt(),(!n.width||n.width>d||n.width<360)&&(n.width=d>=360?d:360),a=(window.getSize().y-160).toInt(),(!n.height||n.height>a)&&(n.height=a),(l=new SimpleModal({width:n.width.toString(),btn_ok:Contao.lang.close,draggable:!1,overlayOpacity:.5,onShow:function(){document.body.setStyle("overflow","hidden")},onHide:function(){document.body.setStyle("overflow","auto")}})).addButton(Contao.lang.close,"btn",(function(){this.hide()})),l.addButton(Contao.lang.apply,"btn primary",(function(){e.value=document.getElementById("geo_editor_iframe").contentWindow.document.getElementById("c4gGeoEditorGeoData").value,this.hide(),document.getElementById("tl_c4g_maps").submit()})),l.show({title:n.title||"",contents:'<iframe src="'+n.url+'" width="100%" height="'+n.height+'" frameborder="0" id="geo_editor_iframe"></iframe>',model:"modal"})}})();