(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{8482:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Signup",function(){return n(3635)}])},3111:function(e,r,n){"use strict";n.d(r,{g:function(){return c}});var t=n(5503),s=n(6257),a=n(7702),i=(0,t.ZF)({apiKey:"AIzaSyCMLgx6sdSEty413liaBASkkAfYmKMOVII",authDomain:"daily-utils-3.firebaseapp.com",projectId:"daily-utils-3",storageBucket:"daily-utils-3.appspot.com",messagingSenderId:"249678447104",appId:"1:249678447104:web:daa9230c539c87268fcee5",measurementId:"G-CV5E92KSDT"}),u=(0,s.ad)(i),c=(0,a.v0)(i);r.Z=u},9591:function(e,r,n){"use strict";n.d(r,{cK:function(){return o},n$:function(){return l},c0:function(){return d}});var t=n(4051),s=n.n(t),a=n(7702),i=n(3111);function u(e,r,n,t,s,a,i){try{var u=e[a](i),c=u.value}catch(o){return void n(o)}u.done?r(c):Promise.resolve(c).then(t,s)}function c(e){return function(){var r=this,n=arguments;return new Promise((function(t,s){var a=e.apply(r,n);function i(e){u(a,t,s,i,c,"next",e)}function c(e){u(a,t,s,i,c,"throw",e)}i(void 0)}))}}n(3174);var o=function(){var e=c(s().mark((function e(r){var n,t,u,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.userName,t=r.userEmail,u=r.userPassword,e.next=3,(0,a.Xb)(i.g,t,u).then((function(e){return i.g.currentUser&&(0,a.ck)(i.g.currentUser,{displayName:n}),i.g.currentUser&&(0,a.w$)(i.g.currentUser).then((function(){alert("Verification Email Has Been Sent! Please Verify To Activate Your Account.")})),!0})).catch((function(e){return console.error(e),!1}));case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=c(s().mark((function e(r){var n,t,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.userEmail,t=r.userPassword,u=(0,a.e5)(i.g,n,t).then((function(e){var r;return(null===(r=i.g.currentUser)||void 0===r?void 0:r.emailVerified)?(localStorage.setItem("userId",e.user.uid),!0):(confirm("Please Verify Your Email To Continue, Haven't Received Verification Email? Press OK to Resend.")&&i.g.currentUser&&(0,a.w$)(i.g.currentUser),!1)})).catch((function(e){return console.log(e),alert("Invalid Email/Password!"),!1})),e.abrupt("return",u);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=c(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.LS)(i.g,r).then((function(){alert("Password Reset EMail will be sent if it matches in out Database!")})).catch((function(){alert("Password Reset EMail will be sent if it matches in out Database!")}));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},3635:function(e,r,n){"use strict";n.r(r);var t=n(4051),s=n.n(t),a=n(5893),i=n(1664),u=n(1163),c=n(7294),o=n(9591);function l(e,r,n,t,s,a,i){try{var u=e[a](i),c=u.value}catch(o){return void n(o)}u.done?r(c):Promise.resolve(c).then(t,s)}r.default=function(){var e=(0,c.useState)(!1),r=e[0],n=e[1];(0,c.useLayoutEffect)((function(){localStorage.getItem("userId")&&t.replace("/")}),[]);var t=(0,u.useRouter)(),d=function(){var e,r=(e=s().mark((function e(r){var a,i,u,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),a=r.target.userName.value,i=r.target.userEmail.value,u=r.target.userPassword.value,n(!0),e.next=7,(0,o.cK)({userName:a,userEmail:i,userPassword:u});case 7:c=e.sent,n(!1),c?t.push("Login"):alert("User With This Email, Already Exist!");case 10:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,s){var a=e.apply(r,n);function i(e){l(a,t,s,i,u,"next",e)}function u(e){l(a,t,s,i,u,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,a.jsx)("form",{onSubmit:function(e){return d(e)},className:"h-full w-full",children:(0,a.jsx)("div",{className:"h-full w-full grid place-items-center",children:(0,a.jsxs)("div",{className:" h-3/5 w-96 flex flex-col justify-evenly items-center ",children:[(0,a.jsxs)("div",{className:"w-11/12 flex justify-end",children:[(0,a.jsx)("span",{className:"text-3xl font-semibold text-base-content",children:"Sign"}),(0,a.jsx)("span",{className:"text-3xl font-semibold text-primary",children:"up"})]}),(0,a.jsx)("div",{className:"form-control w-11/12 ",children:(0,a.jsxs)("label",{className:"input-group ",children:[(0,a.jsx)("span",{children:"Name\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,a.jsx)("input",{type:"text",name:"userName",placeholder:"Someone User",className:"input input-bordered w-11/12",required:!0})]})}),(0,a.jsx)("div",{className:"form-control w-11/12 ",children:(0,a.jsxs)("label",{className:"input-group ",children:[(0,a.jsx)("span",{children:"Email\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}),(0,a.jsx)("input",{type:"email",name:"userEmail",placeholder:"someone@somewhere.com",className:"input input-bordered w-11/12",required:!0})]})}),(0,a.jsx)("div",{className:"form-control w-11/12 ",children:(0,a.jsxs)("label",{className:"input-group ",children:[(0,a.jsx)("span",{children:"Password"}),(0,a.jsx)("input",{type:"password",name:"userPassword",placeholder:"P@55W0RD",className:"input input-bordered w-11/12",required:!0})]})}),(0,a.jsx)("button",{className:"btn btn-primary w-11/12 ".concat(r&&"loading"," "),type:"submit",children:"Signup"}),(0,a.jsxs)("div",{className:"flex w-11/12 justify-between items-center select-none",children:[(0,a.jsx)("span",{className:"btn btn-xs btn-ghost",children:(0,a.jsx)(i.default,{href:"ForgotPassword",children:(0,a.jsx)("a",{className:"text-primary",children:"forgot password"})})}),(0,a.jsxs)("span",{className:"text-xs",children:["Already have an Account?\xa0",(0,a.jsx)(i.default,{href:"Login",children:(0,a.jsx)("a",{className:"text-primary",children:"Login"})})]})]})]})})})}}},function(e){e.O(0,[16,228,131,174,774,888,179],(function(){return r=8482,e(e.s=r);var r}));var r=e.O();_N_E=r}]);