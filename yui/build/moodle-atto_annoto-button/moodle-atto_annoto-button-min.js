YUI.add("moodle-atto_annoto-button",function(e,t){e.namespace("M.atto_annoto").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){var e=this.addButton({icon:"icon",iconComponent:"atto_annoto",buttonName:"annoto",callback:this._toggleAnnoto});this.get("host").on("pluginsloaded",function(e){this._setAnnoto()},this,e)},_toggleAnnoto:function(){var t=e.all("annoto");if(t.size()>0)t.remove(),this.unHighlightButtons("annoto"),this.markUpdated();else{var n=e.Node.create("<annoto />");n.appendTo(this.editor),this.highlightButtons("annoto"),this.markUpdated()}},_setAnnoto:function(){var t=e.all("annoto");console.log(t);if(t.size()>0){this.highlightButtons("annoto");return}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
