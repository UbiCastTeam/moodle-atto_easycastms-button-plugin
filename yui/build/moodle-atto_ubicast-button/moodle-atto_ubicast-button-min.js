YUI.add("moodle-atto_ubicast-button",function(r,e){var s="atto_ubicast",c=0,i=!0;function o(){var e,t;for(e=0;e<window.document.body.classList.length;e++)if(window.document.body.classList[e].startsWith("course"))return 2===(t=window.document.body.classList[e].split("-")).length&&parseInt(t[1],10)||0;return 0}r.namespace("M.atto_ubicast").Button=r.Base.create("button",r.M.editor_atto.EditorPlugin,[],{initializer:function(){var e,t;if(this.addButton({icon:"icon",iconComponent:s,callback:this.openChoicesDialogue}),i){if(c=o(),o()<2)for(e=document.getElementsByClassName("atto_ubicast_button"),t=0;t<e.length;t++)e[t].style.display="none";i=!1}},_currentSelection:null,_dialogContent:null,openChoicesDialogue:function(){this._showDialogue()},_showDialogue:function(){var n,e,a,t;this._currentSelection=this.get("host").getSelection(),!1!==this._currentSelection&&(n=this.getDialogue({headerContent:M.util.get_string("pluginname",s),width:"425px",focusAfterHide:!0}),window.MediaSelector||((e=document.createElement("script")).type="text/javascript",e.src=window.M.cfg.wwwroot+"/mod/ubicast/statics/media_selector.js?_=12",document.getElementsByTagName("body")[0].appendChild(e)),a=this,(t=new XMLHttpRequest).onreadystatechange=function(){var e,t,i,o;4===this.readyState&&200===this.status&&(e="id_resource_atto_ubicast_"+(new Date).getTime(),(t=r.Node.create(this.responseText)).set("id",e),i=r.Node.create('<div style="text-align: center;"></div>'),o=M.util.get_string("inputsubmit",s),i.append(r.Node.create('<button type="submit" class="submit">'+o+"</button>")),t.append(i),t.on("submit",a._setVideo,a),a._dialogContent=t,n.set("bodyContent",t).show(),setTimeout(function(){window.mediaSelector=new window.MediaSelector({moodleURL:window.M.cfg.wwwroot+"/mod/ubicast/lti.php?id="+c,mediaserverURL:t.one("#ms_mediaserverURL").get("value"),target:e})},window.MediaSelector?10:2e3))},t.open("GET",window.M.cfg.wwwroot+"/lib/editor/atto/plugins/ubicast/media.php",!0),t.send())},_setVideo:function(e){var t,i,o,n,a,s,d;return e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),t=this._dialogContent.one("#id_mediaid").get("value"),i=this._dialogContent.one("#media_width").get("value"),o=this._dialogContent.one("#media_height").get("value"),t&&(n=this.get("host"),this.editor.focus(),n.setSelection(this._currentSelection),a="/lib/editor/atto/plugins/ubicast/view.php?course={{ courseId }}&video={{ mediaId }}/",s='<iframe class="mediaserver-iframe" style="width: {{ mediaW }}; height: {{ mediaH }}; background-color: #ddd;" src="'+window.M.cfg.wwwroot+a+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>',d=r.Handlebars.compile(s)({courseId:c,mediaId:t,mediaW:i,mediaH:o}),n.insertContentAtFocusPoint(d),this.markUpdated()),!1}})},"@VERSION@",{requires:["promise","moodle-editor_atto-plugin","event-valuechange"]});