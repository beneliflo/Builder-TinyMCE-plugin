System.register(["@emotion/core","@builder.io/react","react"],(function(e,n){var t={},o={},i={};return{setters:[function(e){t.jsx=e.jsx},function(e){o.Builder=e.Builder},function(e){i.Component=e.Component,i.createElement=e.createElement,i.createRef=e.createRef,i.default=e.default,i.useRef=e.useRef}],execute:function(){e((()=>{var e={703:(e,n,t)=>{"use strict";var o=t(414);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,r,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:i};return t.PropTypes=t,t}},697:(e,n,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},960:e=>{"use strict";e.exports=o},967:e=>{"use strict";e.exports=t},954:e=>{"use strict";e.exports=i}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";r.r(a);var e,n,t=r(967),o=r(960),i=r(954),s=r(697),u=function(){return u=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},u.apply(this,arguments)},c={onActivate:s.func,onAddUndo:s.func,onBeforeAddUndo:s.func,onBeforeExecCommand:s.func,onBeforeGetContent:s.func,onBeforeRenderUI:s.func,onBeforeSetContent:s.func,onBeforePaste:s.func,onBlur:s.func,onChange:s.func,onClearUndos:s.func,onClick:s.func,onContextMenu:s.func,onCommentChange:s.func,onCopy:s.func,onCut:s.func,onDblclick:s.func,onDeactivate:s.func,onDirty:s.func,onDrag:s.func,onDragDrop:s.func,onDragEnd:s.func,onDragGesture:s.func,onDragOver:s.func,onDrop:s.func,onExecCommand:s.func,onFocus:s.func,onFocusIn:s.func,onFocusOut:s.func,onGetContent:s.func,onHide:s.func,onInit:s.func,onKeyDown:s.func,onKeyPress:s.func,onKeyUp:s.func,onLoadContent:s.func,onMouseDown:s.func,onMouseEnter:s.func,onMouseLeave:s.func,onMouseMove:s.func,onMouseOut:s.func,onMouseOver:s.func,onMouseUp:s.func,onNodeChange:s.func,onObjectResizeStart:s.func,onObjectResized:s.func,onObjectSelected:s.func,onPaste:s.func,onPostProcess:s.func,onPostRender:s.func,onPreProcess:s.func,onProgressState:s.func,onRedo:s.func,onRemove:s.func,onReset:s.func,onSaveContent:s.func,onSelectionChange:s.func,onSetAttrib:s.func,onSetContent:s.func,onShow:s.func,onSubmit:s.func,onUndo:s.func,onVisualAid:s.func,onSkinLoadError:s.func,onThemeLoadError:s.func,onModelLoadError:s.func,onPluginLoadError:s.func,onIconsLoadError:s.func,onLanguageLoadError:s.func},l=u({apiKey:s.string,id:s.string,inline:s.bool,init:s.object,initialValue:s.string,onEditorChange:s.func,value:s.string,tagName:s.string,cloudChannel:s.string,plugins:s.oneOfType([s.string,s.array]),toolbar:s.oneOfType([s.string,s.array]),disabled:s.bool,textareaName:s.string,tinymceScriptSrc:s.string,rollback:s.oneOfType([s.number,s.oneOf([!1])]),scriptLoading:s.shape({async:s.bool,defer:s.bool,delay:s.number})},c),d=function(e){return"function"==typeof e},p=function(e){return e in c},f=function(e){return e.substr(2)},h=function(e,n,t,o,i){return function(n,t,o,i,r,a,s){var u=Object.keys(r).filter(p),c=Object.keys(a).filter(p),l=u.filter((function(e){return void 0===a[e]})),d=c.filter((function(e){return void 0===r[e]}));l.forEach((function(e){var n=f(e),t=s[n];o(n,t),delete s[n]})),d.forEach((function(o){var i=function(n,t){return function(o){var i;return null===(i=n(t))||void 0===i?void 0:i(o,e)}}(n,o),r=f(o);s[r]=i,t(r,i)}))}(i,e.on.bind(e),e.off.bind(e),0,n,t,o)},v=0,g=function(e){var n=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++v+String(n)},m=function(e){return null!==e&&("textarea"===e.tagName.toLowerCase()||"input"===e.tagName.toLowerCase())},y=function(e){return void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" ")},b=function(e,n){void 0!==e&&(null!=e.mode&&"object"==typeof e.mode&&"function"==typeof e.mode.set?e.mode.set(n):e.setMode(n))},C=function(){return{listeners:[],scriptId:g("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},k=(e=C(),{load:function(n,t,o,i,r,a){var s=function(){return function(n,t,o,i,r,a){var s=t.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=n,s.src=o,s.async=i,s.defer=r;var u=function(){s.removeEventListener("load",u),e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0};s.addEventListener("load",u),t.head&&t.head.appendChild(s)}(e.scriptId,n,t,o,i)};e.scriptLoaded?a():(e.listeners.push(a),e.scriptLoading||(e.scriptLoading=!0,r>0?setTimeout(s,r):s()))},reinitialize:function(){e=C()}}),E=function(e){var n=e;return n&&n.tinymce?n.tinymce:null},_=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),w=function(){return w=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},w.apply(this,arguments)},S=function(e){function n(n){var t,o,r,a=this;return(a=e.call(this,n)||this).rollbackTimer=void 0,a.valueCursor=void 0,a.rollbackChange=function(){var e=a.editor,n=a.props.value;e&&n&&n!==a.currentContent&&e.undoManager.ignore((function(){if(e.setContent(n),a.valueCursor&&(!a.inline||e.hasFocus()))try{e.selection.moveToBookmark(a.valueCursor)}catch(e){}})),a.rollbackTimer=void 0},a.handleBeforeInput=function(e){if(void 0!==a.props.value&&a.props.value===a.currentContent&&a.editor&&(!a.inline||a.editor.hasFocus()))try{a.valueCursor=a.editor.selection.getBookmark(3)}catch(e){}},a.handleBeforeInputSpecial=function(e){"Enter"!==e.key&&"Backspace"!==e.key&&"Delete"!==e.key||a.handleBeforeInput(e)},a.handleEditorChange=function(e){var n=a.editor;if(n&&n.initialized){var t=n.getContent();void 0!==a.props.value&&a.props.value!==t&&!1!==a.props.rollback&&(a.rollbackTimer||(a.rollbackTimer=window.setTimeout(a.rollbackChange,"number"==typeof a.props.rollback?a.props.rollback:200))),t!==a.currentContent&&(a.currentContent=t,d(a.props.onEditorChange)&&a.props.onEditorChange(t,n))}},a.handleEditorChangeSpecial=function(e){"Backspace"!==e.key&&"Delete"!==e.key||a.handleEditorChange(e)},a.initialise=function(e){var n,t,o;void 0===e&&(e=0);var i=a.elementRef.current;if(i)if(function(e){if(!("isConnected"in Node.prototype)){for(var n=e,t=e.parentNode;null!=t;)t=(n=t).parentNode;return n===e.ownerDocument}return e.isConnected}(i)){var r=E(a.view);if(!r)throw new Error("tinymce should have been loaded into global scope");var s,u,c=w(w({},a.props.init),{selector:void 0,target:i,readonly:a.props.disabled,inline:a.inline,plugins:(s=null===(n=a.props.init)||void 0===n?void 0:n.plugins,u=a.props.plugins,y(s).concat(y(u))),toolbar:null!==(t=a.props.toolbar)&&void 0!==t?t:null===(o=a.props.init)||void 0===o?void 0:o.toolbar,setup:function(e){a.editor=e,a.bindHandlers({}),a.inline&&!m(i)&&e.once("PostRender",(function(n){e.setContent(a.getInitialValue(),{no_events:!0})})),a.props.init&&d(a.props.init.setup)&&a.props.init.setup(e)},init_instance_callback:function(e){var n,t,o=a.getInitialValue();a.currentContent=null!==(n=a.currentContent)&&void 0!==n?n:e.getContent(),a.currentContent!==o&&(a.currentContent=o,e.setContent(o),e.undoManager.clear(),e.undoManager.add(),e.setDirty(!1));var i=null!==(t=a.props.disabled)&&void 0!==t&&t;b(a.editor,i?"readonly":"design"),a.props.init&&d(a.props.init.init_instance_callback)&&a.props.init.init_instance_callback(e)}});a.inline||(i.style.visibility=""),m(i)&&(i.value=a.getInitialValue()),r.init(c)}else if(0===e)setTimeout((function(){return a.initialise(1)}),1);else{if(!(e<100))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return a.initialise(e+1)}),100)}},a.id=a.props.id||g("tiny-react"),a.elementRef=i.createRef(),a.inline=null!==(r=null!==(t=a.props.inline)&&void 0!==t?t:null===(o=a.props.init)||void 0===o?void 0:o.inline)&&void 0!==r&&r,a.boundHandlers={},a}return _(n,e),Object.defineProperty(n.prototype,"view",{get:function(){var e,n;return null!==(n=null===(e=this.elementRef.current)||void 0===e?void 0:e.ownerDocument.defaultView)&&void 0!==n?n:window},enumerable:!1,configurable:!0}),n.prototype.componentDidUpdate=function(e){var n,t,o=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(e),this.editor.initialized)){if(this.currentContent=null!==(n=this.currentContent)&&void 0!==n?n:this.editor.getContent(),"string"==typeof this.props.initialValue&&this.props.initialValue!==e.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"==typeof this.props.value&&this.props.value!==this.currentContent){var i=this.editor;i.undoManager.transact((function(){var e;if(!o.inline||i.hasFocus())try{e=i.selection.getBookmark(3)}catch(e){}var n=o.valueCursor;if(i.setContent(o.props.value),!o.inline||i.hasFocus())for(var t=0,r=[e,n];t<r.length;t++){var a=r[t];if(a)try{i.selection.moveToBookmark(a),o.valueCursor=a;break}catch(e){}}}))}if(this.props.disabled!==e.disabled){var r=null!==(t=this.props.disabled)&&void 0!==t&&t;b(this.editor,r?"readonly":"design")}}},n.prototype.componentDidMount=function(){var e,n,t,o,i,r;null!==E(this.view)?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&k.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(n=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async)&&void 0!==n&&n,null!==(o=null===(t=this.props.scriptLoading)||void 0===t?void 0:t.defer)&&void 0!==o&&o,null!==(r=null===(i=this.props.scriptLoading)||void 0===i?void 0:i.delay)&&void 0!==r?r:0,this.initialise)},n.prototype.componentWillUnmount=function(){var e=this,n=this.editor;n&&(n.off(this.changeEvents(),this.handleEditorChange),n.off(this.beforeInputEvent(),this.handleBeforeInput),n.off("keypress",this.handleEditorChangeSpecial),n.off("keydown",this.handleBeforeInputSpecial),n.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(t){n.off(t,e.boundHandlers[t])})),this.boundHandlers={},n.remove(),this.editor=void 0)},n.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},n.prototype.changeEvents=function(){var e,n,t;return(null===(t=null===(n=null===(e=E(this.view))||void 0===e?void 0:e.Env)||void 0===n?void 0:n.browser)||void 0===t?void 0:t.isIE())?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},n.prototype.beforeInputEvent=function(){return window.InputEvent&&"function"==typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},n.prototype.renderInline=function(){var e=this.props.tagName,n=void 0===e?"div":e;return i.createElement(n,{ref:this.elementRef,id:this.id})},n.prototype.renderIframe=function(){return i.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},n.prototype.getScriptSrc=function(){if("string"==typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel,n=this.props.apiKey?this.props.apiKey:"no-api-key";return"https://cdn.tiny.cloud/1/".concat(n,"/tinymce/").concat(e,"/tinymce.min.js")},n.prototype.getInitialValue=function(){return"string"==typeof this.props.initialValue?this.props.initialValue:"string"==typeof this.props.value?this.props.value:""},n.prototype.bindHandlers=function(e){var n=this;if(void 0!==this.editor){h(this.editor,e,this.props,this.boundHandlers,(function(e){return n.props[e]}));var t=function(e){return void 0!==e.onEditorChange||void 0!==e.value},o=t(e),i=t(this.props);!o&&i?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):o&&!i&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},n.propTypes=l,n.defaultProps={cloudChannel:"6"},n}(i.Component),T="/Users/benjaminflores/GitHub/Builder-TinyMCE-plugin/src/plugin.jsx";const O=(e,n)=>new Promise(((t,o)=>{const i=new XMLHttpRequest;i.withCredentials=!1,i.open("POST","postAcceptor.php"),i.upload.onprogress=e=>{n(e.loaded/e.total*100)},i.onload=()=>{if(403===i.status)return void o({message:"HTTP Error: "+i.status,remove:!0});if(i.status<200||i.status>=300)return void o("HTTP Error: "+i.status);const e=JSON.parse(i.responseText);e&&"string"==typeof e.location?t(e.location):o("Invalid JSON: "+i.responseText)},i.onerror=()=>{o("Image upload failed due to a XHR Transport error. Code: "+i.status)};const r=new FormData;r.append("file",e.blob(),e.filename()),i.send(r)}));o.Builder.registerEditor({name:"TinyTextEditor",component:function(e){const n=(0,i.useRef)(null);return(0,t.jsx)(i.default.Fragment,null,(0,t.jsx)(S,{apiKey:"0lbhu31lrngl0y5eo8e6p0jckqgeikc94mnkaig43yuahupv",onInit:(e,t)=>n.current=t,value:e.value,onEditorChange:e.onChange,init:{height:500,menubar:!1,plugins:["advlist","autolink","lists","link","image","charmap","preview","anchor","searchreplace","visualblocks","code","fullscreen","insertdatetime","media","table","code","codesample","help","wordcount","tinydrive","editimage","lists"],tinydrive_token_provider:"0lbhu31lrngl0y5eo8e6p0jckqgeikc94mnkaig43yuahupv",toolbar:"undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | codesample | link insertfile image media | table mergetags | checklist bullist numlist outdent indent | removeformat | code | help",editimage_toolbar:"rotateleft rotateright | flipv fliph | editimage imageoptions",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",image_title:!0,image_caption:!0,image_description:!1,images_upload_credentials:!0,automatic_uploads:!0,file_picker_types:"file image media",images_upload_handler:O},__self:this,__source:{fileName:T,lineNumber:60,columnNumber:7}}),(0,t.jsx)("button",{type:"button",onClick:()=>{n.current&&console.log(n.current.getContent())},__self:this,__source:{fileName:T,lineNumber:116,columnNumber:7}},"Log editor content"))}})})(),a})())}}}));