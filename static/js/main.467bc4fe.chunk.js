(this["webpackJsonpskill-tracker"]=this["webpackJsonpskill-tracker"]||[]).push([[0],{72:function(e,t,a){},73:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(24),s=a.n(n),c=(a(72),a(51)),i=a(6),l=a(7),o=a(102),u=(a(73),a(54)),d=a(1);var j=function(e){var t=e.variant,a=e.heading,n=e.message,s=Object(r.useState)(!0),c=Object(i.a)(s,2),l=c[0],o=c[1],j=Object(r.useState)(null),b=Object(i.a)(j,2),h=b[0],m=b[1];return console.log(h),Object(r.useEffect)((function(){var e=setTimeout((function(){return o(!1)}),5e3);return m(e),function(){clearTimeout(h)}}),[]),Object(d.jsx)(u.a,{variant:t,onClose:function(){return o(!1)},dismissible:!0,show:l,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u.a.Heading,{children:a}),Object(d.jsx)("p",{className:"alert-body",children:n})]})})},b=a(67),h=a(42),m=a(65),O=a(13),p=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O.c,{to:"/my-skills",className:"nav-link",children:"My Skills"}),Object(d.jsx)(O.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(d.jsx)(O.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),g=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(d.jsx)(O.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),x=Object(d.jsx)(d.Fragment,{}),v=function(e){var t=e.user;return Object(d.jsx)(h.a,{bg:"dark",variant:"dark",expand:"md",children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(h.a.Brand,{children:Object(d.jsx)(O.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Skill Tracker"})}),Object(d.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(b.a,{className:"ms-auto",children:[t&&Object(d.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),x,t?p:g]})})]})})},f=a(12),w=a.n(f),k=a(19),y="https://bens-django-api.herokuapp.com/skill-tracker",S="http://localhost:8000/skill-tracker",N="localhost"===window.location.hostname?S:y,C=a(30),I=a.n(C),P=function(e,t,a){return I.a.post(N+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a}})},F=function(e,t){return I.a.post(N+"/sign-in/",{credentials:{email:e,password:t}})},A=function(e){return I.a.delete(N+"/sign-out/",{headers:{Authorization:"Token ".concat(e.token)}})},U=function(e,t,a){return I.a.patch(N+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Token ".concat(a.token)}})},D=a(9),T=a(25),E=a(2),L={background:"linear-gradient(45deg, #fdbb2d, #dbca37, #b7d551, #94de71, #6fe393, #46e6b6, #14e8d5, #0ae7ef)",color:"white",minHeight:"calc(100vh - ".concat("56px",")")},q=Object(E.a)(Object(E.a)({},{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%",margin:"0"}),L),G=function(e){var t=e.msgAlert,a=e.setUser,n=e.user,s=Object(r.useState)(""),c=Object(i.a)(s,2),o=c[0],u=c[1],j=Object(r.useState)(""),b=Object(i.a)(j,2),h=b[0],m=b[1],O=Object(r.useState)(""),p=Object(i.a)(O,2),g=p[0],x=p[1],v=Object(r.useState)(!1),f=Object(i.a)(v,2),y=f[0],S=f[1],N=function(){var e=Object(k.a)(w.a.mark((function e(r){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,P(o,h,g);case 4:return e.next=6,F(o,h);case 6:n=e.sent,a(n.data.user),localStorage.setItem("user",JSON.stringify(n.data.user)),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),S(!0),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(1),u(""),m(""),x(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return y||n?Object(d.jsx)(l.a,{to:"/my-skills"}):Object(d.jsx)("div",{style:q,className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign Up"}),Object(d.jsxs)(D.a,{onSubmit:N,children:[Object(d.jsxs)(D.a.Group,{controlId:"email",children:[Object(d.jsx)(D.a.Label,{children:"Email address"}),Object(d.jsx)(D.a.Control,{required:!0,type:"email",name:"email",value:o,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)(D.a.Group,{controlId:"password",children:[Object(d.jsx)(D.a.Label,{children:"Password"}),Object(d.jsx)(D.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(d.jsxs)(D.a.Group,{controlId:"passwordConfirmation",children:[Object(d.jsx)(D.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(D.a.Control,{required:!0,name:"passwordConfirmation",value:g,type:"password",placeholder:"Confirm Password",onChange:function(e){return x(e.target.value)}})]}),Object(d.jsx)(T.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},z=function(e){var t=e.msgAlert,a=e.setUser,n=e.user,s=Object(r.useState)(""),c=Object(i.a)(s,2),o=c[0],u=c[1],j=Object(r.useState)(""),b=Object(i.a)(j,2),h=b[0],m=b[1],O=Object(r.useState)(!1),p=Object(i.a)(O,2),g=p[0],x=p[1],v=function(){var e=Object(k.a)(w.a.mark((function e(r){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,F(o,h);case 4:n=e.sent,a(n.data.user),localStorage.setItem("user",JSON.stringify(n.data.user)),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),x(!0),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),u(""),m(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return g||n?Object(d.jsx)(l.a,{to:"/my-skills"}):Object(d.jsx)("div",{style:q,className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)(D.a,{onSubmit:v,children:[Object(d.jsxs)(D.a.Group,{controlId:"email",children:[Object(d.jsx)(D.a.Label,{children:"Email address"}),Object(d.jsx)(D.a.Control,{required:!0,type:"email",name:"email",value:o,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)(D.a.Group,{controlId:"password",children:[Object(d.jsx)(D.a.Label,{children:"Password"}),Object(d.jsx)(D.a.Control,{required:!0,name:"password",value:h,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]}),Object(d.jsx)(T.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},J=function(e){var t=e.msgAlert,a=e.clearUser,n=e.user,s=Object(r.useState)(!1),c=Object(i.a)(s,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),localStorage.removeItem("user"),a(),u(!0),e.next=6,A(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!n||o?Object(d.jsx)(l.a,{to:"/"}):""},M=function(e){var t=e.msgAlert,a=e.user,n=Object(r.useState)(""),s=Object(i.a)(n,2),c=s[0],o=s[1],u=Object(r.useState)(""),j=Object(i.a)(u,2),b=j[0],h=j[1],m=Object(r.useState)(!1),O=Object(i.a)(m,2),p=O[0],g=O[1],x=function(){var e=Object(k.a)(w.a.mark((function e(r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,U(c,b,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),g(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),o(""),h(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||p?Object(d.jsx)(l.a,{to:"/my-skills"}):Object(d.jsx)("div",{style:q,className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Change Password"}),Object(d.jsxs)(D.a,{onSubmit:x,children:[Object(d.jsxs)(D.a.Group,{controlId:"oldPassword",children:[Object(d.jsx)(D.a.Label,{children:"Old password"}),Object(d.jsx)(D.a.Control,{required:!0,name:"oldPassword",value:c,type:"password",placeholder:"Old Password",onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(D.a.Group,{controlId:"newPassword",children:[Object(d.jsx)(D.a.Label,{children:"New Password"}),Object(d.jsx)(D.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(T.a,{className:"mt-2",variant:"dark",type:"submit",children:"Submit"})]})]})})},B=function(e){return e.user?Object(d.jsx)(l.a,{to:"my-skills"}):Object(d.jsxs)("div",{style:q,children:[Object(d.jsx)("h1",{children:"Skill Tracker"}),Object(d.jsx)("h2",{className:"mb-3",children:"Sign In to start tracking skills!"}),Object(d.jsx)(O.b,{to:"/sign-in",children:Object(d.jsx)("button",{className:"btn btn-dark btn-lg",children:"Sign In"})})]})},W=function(){var e=Object(k.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(N+"/my-practices/",{headers:{Authorization:"Token ".concat(t.token)}});case 2:return(a=e.sent).data.practices.sort((function(e,t){return e.streakInDays-t.streakInDays||t.daysSinceStreak-e.daysSinceStreak})),e.abrupt("return",Promise.resolve(Object(E.a)({},a)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e,t){I.a.patch(N+"/mark-practice/"+e+"/",{},{headers:{Authorization:"Token ".concat(t.token)}})},_=a(39),H=a(66),R=function(e){var t=new Date(e),a=new Date;return t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()},K=function(e){var t=e.user,a=e.msgAlert,n=Object(r.useState)(null),s=Object(i.a)(n,2),c=s[0],o=s[1];if(!t)return Object(d.jsx)(l.a,{to:"/sign-in"});var u=function(){var e=Object(k.a)(w.a.mark((function e(){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t);case 3:r=e.sent,o(r.data.practices),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Failed to load practices",e.t0),a({heading:"Failed to load practices",message:"Try again later",variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){u()}),[]);var j,b=function(){var e=Object(k.a)(w.a.mark((function e(a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("practice clicked"),e.next=3,Y(a,t);case 3:u();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j=c?0===c.length?Object(d.jsx)("h3",{children:"It looks like dont have any practices yet!"}):Object(d.jsx)("div",{className:"row",children:c.map((function(e){var t=e.id,a=e.skill,r=e.streakInDays,n=e.daysSinceStreak,s=e.lastPracticed;return Object(d.jsx)("div",{className:"col-md-6 col-lg-4 mb-4",children:Object(d.jsxs)(_.a,{className:"text-center",bg:"dark",text:"white",children:[Object(d.jsxs)(_.a.Body,{children:[Object(d.jsx)(_.a.Title,{children:a.name}),a.description&&Object(d.jsx)(_.a.Text,{children:a.description}),a.reviewUrl&&Object(d.jsx)("a",{href:a.reviewUrl,target:"_blank",rel:"noreferrer",children:Object(d.jsx)(T.a,{className:"me-2",variant:"outline-primary",size:"lg",children:"Review"})}),a.practiceUrl&&Object(d.jsx)("a",{href:a.practiceUrl,target:"_blank",rel:"noreferrer",children:Object(d.jsx)(T.a,{variant:"secondary",size:"lg",onClick:function(){return b(t)},children:"Practice"})})]}),Object(d.jsxs)(_.a.Footer,{className:0===r?"text-danger":R(s)?"text-success":"text-white",children:[r>0&&Object(d.jsxs)(d.Fragment,{children:[r," day practice streak \ud83d\udd25"]}),0===r&&Object(d.jsxs)(d.Fragment,{children:[n," days since last streak \ud83d\uded1"]}),Object(d.jsx)("div",{children:R(s)})]})]})},t)}))}):Object(d.jsx)(H.a,{animation:"border",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(d.jsx)("div",{style:L,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"pt-4 pb-2",children:"My Skills"}),j]})})},Q=function(){var e=Object(r.useState)(function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null}()),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)([]),u=Object(i.a)(s,2),b=u[0],h=u[1],m=function(e){var t=e.heading,a=e.message,r=e.variant,n=Object(o.a)();h((function(e){return[].concat(Object(c.a)(e),[{heading:t,message:a,variant:r,id:n}])}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{user:a}),b.map((function(e){return Object(d.jsx)(j,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(d.jsx)("main",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/sign-up",element:Object(d.jsx)(G,{msgAlert:m,user:a,setUser:n})}),Object(d.jsx)(l.b,{path:"/sign-in",element:Object(d.jsx)(z,{msgAlert:m,user:a,setUser:n})}),Object(d.jsx)(l.b,{path:"/sign-out",element:Object(d.jsx)(J,{msgAlert:m,clearUser:function(){return n(null)},user:a})}),Object(d.jsx)(l.b,{path:"/change-password",element:Object(d.jsx)(M,{msgAlert:m,user:a})}),Object(d.jsx)(l.b,{path:"/",element:Object(d.jsx)(B,{user:a})}),Object(d.jsx)(l.b,{path:"/my-skills",element:Object(d.jsx)(K,{msgAlert:m,user:a})})]})})]})},V=Object(d.jsx)(O.a,{basename:"/skill-tracker",children:Object(d.jsx)(Q,{})});s.a.render(V,document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.467bc4fe.chunk.js.map