(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],{20:function(e,n,t){e.exports=t(37)},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(3),r=t.n(c),i=t(4),s=t(11),l=t(13),u=t(6);function d(e){return{type:"SET_USERINFO",payload:Object(u.a)({},e)}}function m(e){return{type:"SET_MEETING_VIEW",payload:e}}var f=t(12),g=t.n(f);function h(e){var n=(e=(e+="").replace(/-/g,"").split("")).length;return n<=3||(n>3&&n<=6?e.splice(3,0,"-"):n<=10?(e.splice(3,0,"-"),e.splice(7,0,"-")):n<=11&&(e.splice(3,0,"-"),e.splice(8,0,"-"))),e.join("")}function p(e){var n,t=/https?:\/\/([^/]+)/gi.exec(e);return t&&t.length&&(n=t[0]),n}var w="/signin?from=".concat("pwa"),v="/start/videomeeting?from=".concat("pwa"),E="/join",b="/",j={isDuringMeeting:!1,meetingCurrentView:b,userSessionCredential:g.a.get("_zm_kms")||"",userInfo:null,lastJoinName:"",meetingHistoryList:[]},C=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_USERINFO":e.userInfo=n.payload;break;case"IS_DURING_MEETING":e.isDuringMeeting=n.payload;break;case"SET_MEETING_VIEW":e.meetingCurrentView=n.payload;break;case"SET_USER_SESSION_CREDENTIAL":n.payload||(e.userInfo=null),e.userSessionCredential=n.payload;break;default:return e}})),k=Object(i.d)(C,Object(i.c)(Object(i.a)(s.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})),S=t(1),N=(t(31),t(2)),y=(t(32),t(33),t(15)),I=t(16),O=t(5),M=t(18),T=t(19),x=(t(34),t(17)),_=t.n(x),W=function(e){Object(T.a)(t,e);var n=Object(M.a)(t);function t(e){var o;return Object(y.a)(this,t),(o=n.call(this,e)).state={text:"",checked:!0},o.onChange=o.onChange.bind(Object(O.a)(o)),o}return Object(I.a)(t,[{key:"onChange",value:function(e){console.log(e.target.checked),this.setState({checked:e.target.checked})}},{key:"render",value:function(){return a.a.createElement("label",{className:_()("zm-checkbox-container",this.props.containerClass)},this.props.text,a.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.onChange}),a.a.createElement("span",{className:"check-mark"}))}}]),t}(a.a.Component);var U=Object(S.b)(null,(function(e,n){return{onCancel:function(){e(m(b))},joinMeeting:function(e,n){window.location.href=function(e,n){var t="".concat(p(window.location.href),"/wc/").concat(e,"/join"),o=[];for(var a in n)n.hasOwnProperty(a)&&o.push("".concat(a,"=").concat(n[a]));return(o=o.join("&")).length>0&&(o="?"+o),"".concat(t).concat(o)}(e,{joinName:n})}}}))((function(e){var n=e.onCancel,t=e.joinMeeting,c=Object(o.useState)(""),r=Object(N.a)(c,2),i=r[0],s=r[1],l=Object(o.useState)(""),u=Object(N.a)(l,2),d=u[0],m=u[1],f=/^\d{9,11}$/.test(i),g=d.trim().length>0&&d.trim().length<=70,p=function(){if(f&&g){var e=i.replace(/-/g,"");console.group("join meeting"),console.log("meeting id is %s",i),console.log("join name is %s",d),console.groupEnd(),t(e,d)}},w=function(e){"Enter"===e.key&&p()};return a.a.createElement("div",{className:"join"},a.a.createElement("h2",{className:"join-header"},"Join Meeting"),a.a.createElement("div",{className:"join-form"},a.a.createElement("input",{type:"text",className:"join-meetingId",placeholder:"Meeting ID",value:h(i),onChange:function(e){var n=e.target.value.toLowerCase();n=n.replace(/[-\s]/g,""),/^\d{0,11}$/.test(n)&&s(n)},onKeyDown:w}),a.a.createElement("input",{type:"text",className:"join-joinName",placeholder:"Screen Name",value:d,onChange:function(e){var n=e.target.value;n.length<=70&&m(n)},onKeyDown:w}),a.a.createElement(W,{containerClass:"join-connect-audio",text:"Remember my name for future meetings",checked:!1,onChange:function(e){console.log(e)}}),a.a.createElement(W,{containerClass:"join-connect-audio",text:"Do not connect to audio",checked:!1,onChange:function(e){console.log(e)}}),a.a.createElement(W,{containerClass:"join-off-video",text:"Turn off my video",checked:!1,onChange:function(e){console.log(e)}})),a.a.createElement("footer",null,a.a.createElement("button",{disabled:!(f&&g),className:"btn-join",onClick:p},"Join"),a.a.createElement("button",{className:"btn-cancel",onClick:n},"Cancel")))}));t(35);var D=Object(S.b)((function(e){return{userInfo:e.userInfo,userSessionCredential:e.userSessionCredential}}),(function(e){return{joinMeeting:function(){e(m(E))},signIn:function(){window.location.href="".concat(p(window.location.href)).concat(w)},startMeeting:function(){window.location.href="".concat(p(window.location.href)).concat(v)},logout:function(){e({type:"SET_USER_SESSION_CREDENTIAL",payload:""}),e(d(null))}}}))((function(e){var n=e.userInfo,t=e.userSessionCredential,o=e.signIn,c=e.startMeeting,r=e.joinMeeting,i=e.logout;return console.log(n,"in Home"),a.a.createElement("div",{className:"home"},t&&n&&a.a.createElement("div",{className:"home-header"},a.a.createElement("img",{src:n.avatar||"",className:"home-header-avatar",alt:"user avatar"}),a.a.createElement("span",{className:"home-header-name"},n.displayName),a.a.createElement("span",{className:"home-header-logout",onClick:i},"Logout")),a.a.createElement("div",{className:"home-logo"}),a.a.createElement("div",{className:"btns-home"},t&&a.a.createElement("button",{className:"btn btn-block btn-home-start",onClick:c},"Start Meeting"),a.a.createElement("button",{className:"btn btn-block btn-home-join",onClick:r},"Join Meeting"),!t&&a.a.createElement("button",{className:"btn btn-block btn-home-signin",onClick:o},"Sign In")))}));t(36);function R(e,n){return window.fetch(e,Object(u.a)({method:"GET",credentials:"same-origin"},n))}var L=function(){return function(e,n){return n().userSessionCredential?R("/userinfo",{headers:{"Custom-X":"custom-xxx"}}).then((function(e){return e.json()})).then((function(n){return 0===n.errorCode?(e(d(n.result)),!0):201===n.errorCode?Promise.reject(n.errorMessage):void 0})).catch((function(e){console.log(e)})):Promise.reject("User not login.")}};var V=Object(S.b)((function(e){return{meetingCurrentView:e.meetingCurrentView,userSessionCredential:e.userSessionCredential,userInfo:e.userInfo}}))((function(e){var n=Object(o.useState)(!1),t=Object(N.a)(n,2),c=(t[0],t[1],e.meetingCurrentView),r=e.userSessionCredential,i=e.userInfo,s=e.dispatch;return Object(o.useEffect)((function(){console.log(r,i),r&&!i&&s(L())}),[r,i,s]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"app"},c===E&&a.a.createElement(U,null),c===b&&a.a.createElement(D,null)))})),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?n&&n.onUpdate&&n.onUpdate(e):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}(window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone)&&window.resizeTo(600,370),r.a.render(a.a.createElement(S.a,{store:k},a.a.createElement(a.a.StrictMode,null,a.a.createElement(V,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.navigator.serviceWorker.addEventListener("message",(function(e){e.data&&"SW.UPDATE"===e.data.type&&(console.log("service worker has updated and user confirmed to reload the page; to reload."),window.location.reload())})),window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");G?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker.")}))):J(n,e)}))}}({onUpdate:function(e){var n=window.confirm("New content is avaliable, would you like to reload the page to use the new contents?");console.log("user action: ",n),n&&(console.log("user confirmed to reload"),e.waiting&&e.waiting.postMessage({type:"SW.SKIP_WAITING"}))}})}},[[20,1,2]]]);
//# sourceMappingURL=main.a8620629.chunk.js.map