(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{7906:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shared/[noteId]",function(){return t(378)}])},3111:function(e,n,t){"use strict";t.d(n,{g:function(){return s}});var r=t(5503),a=t(6257),c=t(7702),i=(0,r.ZF)({apiKey:"AIzaSyCMLgx6sdSEty413liaBASkkAfYmKMOVII",authDomain:"daily-utils-3.firebaseapp.com",projectId:"daily-utils-3",storageBucket:"daily-utils-3.appspot.com",messagingSenderId:"249678447104",appId:"1:249678447104:web:daa9230c539c87268fcee5",measurementId:"G-CV5E92KSDT"}),o=(0,a.ad)(i),s=(0,c.v0)(i);n.Z=o},1248:function(e,n,t){"use strict";t.d(n,{au:function(){return u},jb:function(){return d},r_:function(){return l},Bz:function(){return p}});var r=t(4051),a=t.n(r),c=t(6257),i=t(3111);function o(e,n,t,r,a,c,i){try{var o=e[c](i),s=o.value}catch(u){return void t(u)}o.done?n(s):Promise.resolve(s).then(r,a)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var c=e.apply(n,t);function i(e){o(c,r,a,i,s,"next",e)}function s(e){o(c,r,a,i,s,"throw",e)}i(void 0)}))}}var u=function(){var e=s(a().mark((function e(n){var t,r,o,s,u,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.noteTitle,r=n.noteDescription,o=n.noteTag,s=localStorage.getItem("userId"),u=(0,c.JU)(i.Z,"Users",s),e.next=5,(0,c.ET)((0,c.hJ)(u,"Notes"),{Title:t,Description:r,Tag:o}).then((function(e){return e.id})).catch((function(e){return!1}));case 5:return d=e.sent,e.abrupt("return",d);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=s(a().mark((function e(n){var t,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("userId"),r=(0,c.JU)(i.Z,"Users",t),e.next=4,(0,c.oe)((0,c.JU)(r,"Notes",n)).then((function(e){return!0})).catch((function(e){return!1}));case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=s(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.pl)((0,c.JU)(i.Z,"SharedNotes",n.Id),n).then((function(){return!0})).catch((function(){return!1}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){return[{code:"en",name:"English"},{code:"ar",name:"Arabic"},{code:"az",name:"Azerbaijani"},{code:"cs",name:"Czech"},{code:"nl",name:"Dutch"},{code:"fi",name:"Finnish"},{code:"fr",name:"French"},{code:"de",name:"German"},{code:"hi",name:"Hindi"},{code:"hu",name:"Hungarian"},{code:"id",name:"Indonesian"},{code:"ga",name:"Irish"},{code:"gu",name:"Gujrati"},{code:"it",name:"Italian"},{code:"ja",name:"Japanese"},{code:"ko",name:"Korean"},{code:"pl",name:"Polish"},{code:"pt",name:"Portuguese"},{code:"ru",name:"Russian"},{code:"es",name:"Spanish"},{code:"sv",name:"Swedish"},{code:"tr",name:"Turkish"},{code:"uk",name:"Ukranian"},{code:"vi",name:"Vietnamese"}]}},378:function(e,n,t){"use strict";t.r(n);var r=t(4051),a=t.n(r),c=t(5893),i=t(9669),o=t.n(i),s=t(6257),u=t(1163),d=t(7294),l=t(3111),p=t(1248);function m(e,n,t,r,a,c,i){try{var o=e[c](i),s=o.value}catch(u){return void t(u)}o.done?n(s):Promise.resolve(s).then(r,a)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var c=e.apply(n,t);function i(e){m(c,r,a,i,o,"next",e)}function o(e){m(c,r,a,i,o,"throw",e)}i(void 0)}))}}n.default=function(){var e=(0,d.useState)(),n=e[0],t=e[1],r=(0,u.useRouter)().query.noteId,i=(0,d.useState)(!0),m=i[0],h=i[1],v=function(){var e=f(a().mark((function e(t){var r,c,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=document.getElementById("".concat(null===n||void 0===n?void 0:n.Id,"-Description")),c=document.getElementById("".concat(null===n||void 0===n?void 0:n.Id,"-Title")),r&&c){e.next=4;break}return e.abrupt("return");case 4:return i={method:"POST",url:"https://microsoft-translator-text.p.rapidapi.com/translate",params:{"api-version":"3.0",to:t,textType:"plain",profanityAction:"NoAction"},headers:{"content-type":"application/json","X-RapidAPI-Host":"microsoft-translator-text.p.rapidapi.com","X-RapidAPI-Key":"80cf7f649emsh2dbdc2572126428p1b5afbjsn2998d99ca75f"},data:'[{"Text":"'.concat(null===n||void 0===n?void 0:n.Title,'"},{"Text":"').concat(null===n||void 0===n?void 0:n.Description,'"}]')},e.next=7,o().request(i).then((function(e){c.innerHTML=e.data[0].translations[0].text,r.innerHTML=e.data[1].translations[0].text})).catch((function(e){return console.error({err:e})}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,d.useLayoutEffect)((function(){var e=function(){var e=f(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=4;break}return e.next=4,(0,s.QT)((0,s.JU)(l.Z,"SharedNotes",r)).then((function(e){if(h(!1),e.data()){var n=e.data(),r=n.Title,a=n.Description,c=n.Tag;t({Title:r,Description:a,Tag:c,Id:e.id})}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"card w-96 h-96 m-5 bg-primary text-primary-content shadow-xl",children:(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsxs)("h2",{className:"card-title",children:[n.Title,(0,c.jsx)("div",{className:"badge badge-secondary",children:n.Tag})]}),(0,c.jsx)("p",{children:n.Description}),(0,c.jsx)("div",{className:"card-actions justify-end",children:(0,c.jsx)("label",{htmlFor:"".concat(n.Id,"-preview-modal"),className:"btn btn-secondary modal-button",children:"OPEN"})})]})}),(0,c.jsx)("input",{type:"checkbox",id:"".concat(n.Id,"-preview-modal"),className:"modal-toggle"}),(0,c.jsx)("div",{className:"modal",children:(0,c.jsxs)("div",{className:"modal-box relative bg-primary text-primary-content ",children:[(0,c.jsx)("label",{htmlFor:"".concat(n.Id,"-preview-modal"),className:"btn btn-sm btn-circle btn-secondary absolute right-2 top-2",children:"\u2715"}),(0,c.jsx)("h3",{id:"".concat(n.Id,"-Title"),className:"text-lg font-bold",children:n.Title}),(0,c.jsx)("p",{id:"".concat(n.Id,"-Description"),className:"py-4",children:n.Description}),(0,c.jsxs)("div",{className:"modal-action",children:[(0,c.jsx)("button",{className:"btn btn-secondary",onClick:function(){return navigator.clipboard.writeText(n.Title+"\n"+n.Description)},children:"Copy"}),(0,c.jsx)("select",{onChange:function(e){return v(e.target.value)},className:"select select-secondary bg-secondary ",children:(0,p.Bz)().map((function(e,n){return(0,c.jsx)("option",{value:e.code,children:e.name},n)}))})]})]})})]}):(0,c.jsx)("div",{className:"h-full w-full grid place-items-center text-3xl text-primary",children:(0,c.jsx)("h1",{className:" btn btn-ghost select-none ".concat(m&&"loading"," "),children:m?"Fetching Data":"Invalid ID Provided!"})})}}},function(e){e.O(0,[16,228,131,669,774,888,179],(function(){return n=7906,e(e.s=n);var n}));var n=e.O();_N_E=n}]);