(this["webpackJsonpskill-tracker"]=this["webpackJsonpskill-tracker"]||[]).push([[0],{72:function(e,t,a){},73:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(24),s=a.n(n),c=(a(72),a(51)),i=a(6),l=a(7),o=a(102),d=(a(73),a(54)),u=a(1);var j=function(e){var t=e.variant,a=e.heading,n=e.message,s=Object(r.useState)(!0),c=Object(i.a)(s,2),l=c[0],o=c[1],j=Object(r.useState)(null),b=Object(i.a)(j,2),h=b[0],m=b[1];return console.log(h),Object(r.useEffect)((function(){var e=setTimeout((function(){return o(!1)}),5e3);return m(e),function(){clearTimeout(h)}}),[]),Object(u.jsx)(d.a,{variant:t,onClose:function(){return o(!1)},dismissible:!0,show:l,children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(d.a.Heading,{children:a}),Object(u.jsx)("p",{className:"alert-body",children:n})]})})},b=a(67),h=a(42),m=a(65),O=a(13),p=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O.c,{to:"/my-skills",className:"nav-link",children:"My Skills"}),Object(u.jsx)(O.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(u.jsx)(O.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),x=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(u.jsx)(O.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),g=Object(u.jsx)(u.Fragment,{}),v=function(e){var t=e.user;return Object(u.jsx)(h.a,{bg:"dark",variant:"dark",expand:"md",children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(h.a.Brand,{children:Object(u.jsx)(O.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Skill Tracker"})}),Object(u.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(b.a,{className:"ms-auto",children:[t&&Object(u.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),g,t?p:x]})})]})})},f=a(12),w=a.n(f),k=a(19),y="https://limitless-castle-29876.herokuapp.com/skill-tracker",S="http://localhost:4741/skill-tracker",N="localhost"===window.location.hostname?S:y,C=a(30),P=a.n(C),I=function(e,t,a){return P.a.post(N+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},F=function(e,t){return P.a.post(N+"/sign-in/",{credentials:{email:e,password:t}})},A=function(e){return P.a.delete(N+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},U=function(e,t,a){return P.a.patch(N+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},D=a(9),E=a(25),L=a(2),T={background:"linear-gradient(45deg, #fdbb2d, #dbca37, #b7d551, #94de71, #6fe393, #46e6b6, #14e8d5, #0ae7ef)",color:"white",minHeight:"calc(100vh - ".concat("56px",")")},q=Object(L.a)(Object(L.a)({},{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%",margin:"0"}),T),B=function(e){var t=e.msgAlert,a=e.setUser,n=e.user,s=Object(r.useState)(""),c=Object(i.a)(s,2),o=c[0],d=c[1],j=Object(r.useState)(""),b=Object(i.a)(j,2),h=b[0],m=b[1],O=Object(r.useState)(""),p=Object(i.a)(O,2),x=p[0],g=p[1],v=Object(r.useState)(!1),f=Object(i.a)(v,2),y=f[0],S=f[1],N=function(){var e=Object(k.a)(w.a.mark((function e(r){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,I(o,h,x);case 4:return e.next=6,F(o,h);case 6:n=e.sent,a(n.data.user),localStorage.setItem("user",JSON.stringify(n.data.user)),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),S(!0),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(1),d(""),m(""),g(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return y||n?Object(u.jsx)(l.a,{to:"/my-skills"}):Object(u.jsx)("div",{style:q,className:"row",children:Object(u.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(u.jsx)("h3",{children:"Sign Up"}),Object(u.jsxs)(D.a,{onSubmit:N,children:[Object(u.jsxs)(D.a.Group,{controlId:"email",children:[Object(u.jsx)(D.a.Label,{children:"Email address"}),Object(u.jsx)(D.a.Control,{required:!0,type:"email",name:"email",value:o,placeholder:"Enter email",onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)(D.a.Group,{controlId:"password",children:[Object(u.jsx)(D.a.Label,{children:"Password"}),Object(u.jsx)(D.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(u.jsxs)(D.a.Group,{controlId:"passwordConfirmation",children:[Object(u.jsx)(D.a.Label,{children:"Password Confirmation"}),Object(u.jsx)(D.a.Control,{required:!0,name:"passwordConfirmation",value:x,type:"password",placeholder:"Confirm Password",onChange:function(e){return g(e.target.value)}})]}),Object(u.jsx)(E.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},G=function(e){var t=e.msgAlert,a=e.setUser,n=e.user,s=Object(r.useState)(""),c=Object(i.a)(s,2),o=c[0],d=c[1],j=Object(r.useState)(""),b=Object(i.a)(j,2),h=b[0],m=b[1],O=Object(r.useState)(!1),p=Object(i.a)(O,2),x=p[0],g=p[1],v=function(){var e=Object(k.a)(w.a.mark((function e(r){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,F(o,h);case 4:n=e.sent,a(n.data.user),localStorage.setItem("user",JSON.stringify(n.data.user)),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),g(!0),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),d(""),m(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return x||n?Object(u.jsx)(l.a,{to:"/my-skills"}):Object(u.jsx)("div",{style:q,className:"row",children:Object(u.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(u.jsx)("h3",{children:"Sign In"}),Object(u.jsxs)(D.a,{onSubmit:v,children:[Object(u.jsxs)(D.a.Group,{controlId:"email",children:[Object(u.jsx)(D.a.Label,{children:"Email address"}),Object(u.jsx)(D.a.Control,{required:!0,type:"email",name:"email",value:o,placeholder:"Enter email",onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)(D.a.Group,{controlId:"password",children:[Object(u.jsx)(D.a.Label,{children:"Password"}),Object(u.jsx)(D.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(u.jsx)(E.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},z=function(e){var t=e.msgAlert,a=e.clearUser,n=e.user,s=Object(r.useState)(!1),c=Object(i.a)(s,2),o=c[0],d=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),localStorage.removeItem("user"),a(),d(!0),e.next=6,A(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!n||o?Object(u.jsx)(l.a,{to:"/"}):""},J=function(e){var t=e.msgAlert,a=e.user,n=Object(r.useState)(""),s=Object(i.a)(n,2),c=s[0],o=s[1],d=Object(r.useState)(""),j=Object(i.a)(d,2),b=j[0],h=j[1],m=Object(r.useState)(!1),O=Object(i.a)(m,2),p=O[0],x=O[1],g=function(){var e=Object(k.a)(w.a.mark((function e(r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,U(c,b,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),x(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),o(""),h(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||p?Object(u.jsx)(l.a,{to:"/my-skills"}):Object(u.jsx)("div",{style:q,className:"row",children:Object(u.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(u.jsx)("h3",{children:"Change Password"}),Object(u.jsxs)(D.a,{onSubmit:g,children:[Object(u.jsxs)(D.a.Group,{controlId:"oldPassword",children:[Object(u.jsx)(D.a.Label,{children:"Old password"}),Object(u.jsx)(D.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)(D.a.Group,{controlId:"newPassword",children:[Object(u.jsx)(D.a.Label,{children:"New Password"}),Object(u.jsx)(D.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(u.jsx)(E.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},M=function(e){return e.user?Object(u.jsx)(l.a,{to:"my-skills"}):Object(u.jsxs)("div",{style:q,children:[Object(u.jsx)("h1",{children:"Skill Tracker"}),Object(u.jsx)("h2",{className:"mb-3",children:"Sign In to start tracking skills!"}),Object(u.jsx)(O.b,{to:"/sign-in",children:Object(u.jsx)("button",{className:"btn btn-dark btn-lg",children:"Sign In"})})]})},_=function(){var e=Object(k.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(N+"/my-practices/",{headers:{Authorization:"Bearer ".concat(t.token)}});case 2:return(a=e.sent).data.practices.sort((function(e,t){return e.daysStreak-t.daysStreak||t.daysSinceStreak-e.daysSinceStreak})),e.abrupt("return",Promise.resolve(Object(L.a)({},a)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e,t){P.a.patch(N+"/mark-practice/"+e,{},{headers:{Authorization:"Bearer ".concat(t.token)}})},Y=a(39),H=a(66),R=function(e){var t=new Date(e),a=new Date;return t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()},K=function(e){var t=e.user,a=e.msgAlert,n=Object(r.useState)(null),s=Object(i.a)(n,2),c=s[0],o=s[1];if(!t)return Object(u.jsx)(l.a,{to:"/sign-in"});var d=function(){var e=Object(k.a)(w.a.mark((function e(){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t);case 3:r=e.sent,o(r.data.practices),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to load practices",e.t0),a({heading:"Failed to load practices",message:"Try again later",variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){d()}),[]);var j,b=function(){var e=Object(k.a)(w.a.mark((function e(a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("practice clicked"),e.next=3,W(a,t);case 3:d();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j=c?0===c.length?Object(u.jsx)("h3",{children:"It looks like dont have any practices yet!"}):Object(u.jsx)("div",{className:"row",children:c.map((function(e){var t=e._id,a=e.skill,r=e.daysStreak,n=e.daysSinceStreak,s=e.lastPracticed;return Object(u.jsx)("div",{className:"col-md-6 col-lg-4 mb-4",children:Object(u.jsxs)(Y.a,{className:"text-center",bg:"dark",text:"white",children:[Object(u.jsxs)(Y.a.Body,{children:[Object(u.jsx)(Y.a.Title,{children:a.name}),a.description&&Object(u.jsx)(Y.a.Text,{children:a.description}),a.reviewUrl&&Object(u.jsx)("a",{href:a.reviewUrl,target:"_blank",rel:"noreferrer",children:Object(u.jsx)(E.a,{className:"me-2",variant:"outline-primary",size:"lg",children:"Review"})}),a.practiceUrl&&Object(u.jsx)("a",{href:a.practiceUrl,target:"_blank",rel:"noreferrer",children:Object(u.jsx)(E.a,{variant:"secondary",size:"lg",onClick:function(){return b(t)},children:"Practice"})})]}),Object(u.jsxs)(Y.a.Footer,{className:0===r?"text-danger":R(s)?"text-success":"text-white",children:[r>0&&Object(u.jsxs)(u.Fragment,{children:[r," day practice streak \ud83d\udd25"]}),0===r&&Object(u.jsxs)(u.Fragment,{children:[n," days since last streak \ud83d\uded1"]}),Object(u.jsx)("div",{children:R(s)})]})]})},t)}))}):Object(u.jsx)(H.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(u.jsx)("div",{style:T,children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"pt-4 pb-2",children:"My Skills"}),j]})})},Q=function(){var e=Object(r.useState)(function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null}()),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)([]),d=Object(i.a)(s,2),b=d[0],h=d[1],m=function(e){var t=e.heading,a=e.message,r=e.variant,n=Object(o.a)();h((function(e){return[].concat(Object(c.a)(e),[{heading:t,message:a,variant:r,id:n}])}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{user:a}),b.map((function(e){return Object(u.jsx)(j,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(u.jsx)("main",{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/sign-up",element:Object(u.jsx)(B,{msgAlert:m,user:a,setUser:n})}),Object(u.jsx)(l.b,{path:"/sign-in",element:Object(u.jsx)(G,{msgAlert:m,user:a,setUser:n})}),Object(u.jsx)(l.b,{path:"/sign-out",element:Object(u.jsx)(z,{msgAlert:m,clearUser:function(){return n(null)},user:a})}),Object(u.jsx)(l.b,{path:"/change-password",element:Object(u.jsx)(J,{msgAlert:m,user:a})}),Object(u.jsx)(l.b,{path:"/",element:Object(u.jsx)(M,{user:a})}),Object(u.jsx)(l.b,{path:"/my-skills",element:Object(u.jsx)(K,{msgAlert:m,user:a})})]})})]})},V=Object(u.jsx)(O.a,{basename:"/skill-tracker",children:Object(u.jsx)(Q,{})});s.a.render(V,document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.51b1d29e.chunk.js.map