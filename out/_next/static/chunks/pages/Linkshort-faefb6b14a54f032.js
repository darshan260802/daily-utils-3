(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{4800:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Linkshort",function(){return n(3924)}])},3111:function(t,e,n){"use strict";n.d(e,{g:function(){return i}});var r=n(5503),a=n(6257),o=n(7702),s=(0,r.ZF)({apiKey:"AIzaSyCMLgx6sdSEty413liaBASkkAfYmKMOVII",authDomain:"daily-utils-3.firebaseapp.com",projectId:"daily-utils-3",storageBucket:"daily-utils-3.appspot.com",messagingSenderId:"249678447104",appId:"1:249678447104:web:daa9230c539c87268fcee5",measurementId:"G-CV5E92KSDT"}),c=(0,a.ad)(s),i=(0,o.v0)(s);e.Z=c},3924:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return j}});var r=n(4051),a=n.n(r),o=n(5893),s=n(7294),c=n(6257),i=n(1163),u=n(3111),l=n(9669),d=n.n(l);function f(t,e,n,r,a,o,s){try{var c=t[o](s),i=c.value}catch(u){return void n(u)}c.done?e(i):Promise.resolve(i).then(r,a)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){f(o,r,a,s,c,"next",t)}function c(t){f(o,r,a,s,c,"throw",t)}s(void 0)}))}}var m=function(){var t=h(a().mark((function t(e){var n,r,o,s,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.upto.site/short",n={long:e},t.next=4,d().post("https://api.upto.site/short",n).then((function(t){return t.data.shortUrl})).catch((function(){return!1}));case 4:if(r=t.sent){t.next=7;break}return t.abrupt("return",!1);case 7:return o=localStorage.getItem("userId"),s=(0,c.JU)(u.Z,"Users",o),t.next=11,(0,c.ET)((0,c.hJ)(s,"Links"),{Long:e,Short:r,CreatedAt:(new Date).getTime()}).then((function(t){return t.id})).catch((function(){return!1}));case 11:return i=t.sent,t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=h(a().mark((function t(e){var n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("userId"),r=(0,c.JU)(u.Z,"Users",n),t.next=4,(0,c.oe)((0,c.JU)(r,"Links",e)).then((function(t){return!0})).catch((function(t){return!1}));case 4:return o=t.sent,t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=n(9352),x=n(5434);function b(t,e,n,r,a,o,s){try{var c=t[o](s),i=c.value}catch(u){return void n(u)}c.done?e(i):Promise.resolve(i).then(r,a)}var w=function(t){var e=t.Long,n=t.Short,r=(t.CreatedAt,t.Id),s=function(){var t,e=(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(r);case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){b(o,r,a,s,c,"next",t)}function c(t){b(o,r,a,s,c,"throw",t)}s(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,o.jsx)("div",{className:"card w-96 bg-primary m-5 text-primary-content shadow-xl",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("div",{className:"card-title",children:(0,o.jsx)("h2",{children:n})}),(0,o.jsx)("div",{children:e}),(0,o.jsxs)("div",{className:"card-actions justify-end",children:[(0,o.jsx)("button",{onClick:function(){navigator.clipboard.writeText(n)},className:"btn btn-secondary text-secondary-content btn-sm",children:(0,o.jsx)(v.WiF,{})}),(0,o.jsx)("button",{onClick:function(){window.open(n,"_blank")},className:"btn btn-secondary text-secondary-content btn-sm",children:(0,o.jsx)(v.y_J,{})}),(0,o.jsx)("button",{onClick:s,className:"btn btn-secondary btn-sm",children:(0,o.jsx)(x.ZkW,{})})]})]})})};function y(t,e,n,r,a,o,s){try{var c=t[o](s),i=c.value}catch(u){return void n(u)}c.done?e(i):Promise.resolve(i).then(r,a)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=function(){var t=(0,i.useRouter)(),e=(0,s.useState)([]),n=e[0],r=e[1],l=(0,s.useState)(!1),d=l[0],f=l[1],h=(0,s.useState)(!0),p=h[0],v=h[1],x=function(){var t,e=(t=a().mark((function t(e){var n,r,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),n=e.target.longLink.value,new RegExp("^((https?|ftp|smtp)://)?(www.)?[a-z0-9]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$").test(n)){t.next=5;break}return t.abrupt("return",alert("Please Enter Valid URL!"));case 5:return f(!0),t.next=8,m(n);case 8:r=t.sent,f(!1),r&&(null===(o=document.getElementById("new-link-modal"))||void 0===o||o.click(),document.getElementById("new-link-form").reset());case 11:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){y(o,r,a,s,c,"next",t)}function c(t){y(o,r,a,s,c,"throw",t)}s(void 0)}))});return function(t){return e.apply(this,arguments)}}();return(0,s.useLayoutEffect)((function(){if(localStorage.getItem("userId")){var e=localStorage.getItem("userId"),n=(0,c.JU)(u.Z,"Users",e);(0,c.cf)((0,c.hJ)(n,"Links"),(function(t){r(t.docs.map((function(t){return{Long:t.data().Long,Short:t.data().Short,CreatedAt:t.data().CreatedAt,Id:t.id}}))),v(!1)}))}else t.replace("Login")}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"h-full w-full flex flex-col overflow-x-hidden overflow-y-auto ",children:[(0,o.jsxs)("form",{onSubmit:function(t){return x(t)},id:"new-link-form",children:[(0,o.jsx)("input",{type:"checkbox",id:"new-link-modal",className:"modal-toggle"}),(0,o.jsx)("div",{className:"modal",children:(0,o.jsxs)("div",{className:"modal-box relative",children:[(0,o.jsx)("label",{htmlFor:"new-link-modal",className:"btn btn-sm btn-circle absolute right-2 top-2",children:"\u2715"}),(0,o.jsx)("h3",{className:"text-lg font-bold",children:"Short New Link"}),(0,o.jsx)("div",{className:"form-control w-full mt-4",children:(0,o.jsxs)("label",{className:"input-group ",children:[(0,o.jsx)("span",{children:"Long"}),(0,o.jsx)("input",{type:"text",name:"longLink",placeholder:"https://example.com",className:"input input-bordered w-full",required:!0})]})}),(0,o.jsx)("button",{className:"btn btn-primary w-full mt-4 ".concat(d&&"loading"),type:"submit",children:"short link"})]})})]}),(0,o.jsx)("div",{className:"w-full h-12 justify-between flex items-center px-2",children:(0,o.jsx)("label",{htmlFor:"new-link-modal",className:"btn btn-primary btn-sm modal-button",children:"short new link"})}),p?(0,o.jsx)("div",{className:"h-full w-full grid place-items-center",children:(0,o.jsx)("h1",{className:"btn btn-ghost select-none loading text-base-content",children:"Fetching Data"})}):(0,o.jsx)("div",{className:"h-full w-full overflow-x-hidden mt-5 overflow-y-auto flex flex-wrap items-start lg:justify-start justify-center",children:n.map((function(t){return console.log(t),(0,s.createElement)(w,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){g(t,e,n[e])}))}return t}({},t,{key:t.Id}))}))})]})})}}},function(t){t.O(0,[16,228,937,131,669,774,888,179],(function(){return e=4800,t(t.s=e);var e}));var e=t.O();_N_E=e}]);