(this.webpackJsonpmedifide=this.webpackJsonpmedifide||[]).push([[0],{43:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(36),l=c.n(a),i=(c(42),c(43),c(15)),r=c(16),o=c(18),j=c(17),d=c(20),b=c(9),h=c(70),m=c(71),u=c(77),O=c(7),x=c.n(O),p=c(0),f=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s)))._handleSignInClick=function(){x.a.get("/google")},e}return Object(r.a)(c,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(h.a,{dark:!0,color:"danger",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(m.a,{href:"/",children:Object(p.jsx)("h1",{children:"MediFide"})})})}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-3",children:Object(p.jsx)("h3",{children:"Login as Patient"})}),Object(p.jsx)("div",{className:"col-3",children:Object(p.jsx)("a",{href:"/google",class:"button",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{class:"svgIcon t-popup-svg",children:Object(p.jsx)("svg",{class:"svgIcon-use",width:"25",height:"37",viewBox:"0 0 25 25",children:Object(p.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(p.jsx)("path",{d:"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",fill:"#4285F4"}),Object(p.jsx)("path",{d:"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",fill:"#34A853"}),Object(p.jsx)("path",{d:"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",fill:"#FBBC05"}),Object(p.jsx)("path",{d:"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",fill:"#EA4335"})]})})}),Object(p.jsx)("span",{class:"button-label",children:"Sign in with Google"})]})})}),Object(p.jsxs)("div",{className:"col-3",children:[Object(p.jsx)("h1",{}),Object(p.jsx)("h3",{children:"Login as Doctor"})]}),Object(p.jsx)("div",{className:"col-3",children:Object(p.jsx)("a",{href:"/google",class:"button",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{class:"svgIcon t-popup-svg",children:Object(p.jsx)("svg",{class:"svgIcon-use",width:"25",height:"37",viewBox:"0 0 25 25",children:Object(p.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(p.jsx)("path",{d:"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",fill:"#4285F4"}),Object(p.jsx)("path",{d:"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",fill:"#34A853"}),Object(p.jsx)("path",{d:"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",fill:"#FBBC05"}),Object(p.jsx)("path",{d:"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",fill:"#EA4335"})]})})}),Object(p.jsx)("span",{class:"button-label",children:"Sign in with Google"})]})})})]})]})]})}}]),c}(n.Component),g=c(8),v=c(72),y=c(73),C=c(74),N=c(75),k=c(76),w=function(e){var t=Object(n.useState)({email:""}),c=Object(g.a)(t,2),a=c[0],l=c[1],i=Object(n.useState)({date:"",time:"",doctor:""}),r=Object(g.a)(i,2),o=r[0],j=r[1];Object(n.useEffect)((function(){var e=a.email;x.a.get("/api/current_user").then((function(t){l(t.data.user),console.log(t.data.user.email),e=t.data.user.email,x.a.get("/users/patient/"+e).then((function(e){console.log(e.data),j(e.data.appointment)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]);return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)(v.a,{children:[Object(p.jsx)(y.a,{top:!0,width:"100%",src:"/assets/images/Current.jpg",alt:"Your Bookings"}),Object(p.jsxs)(C.a,{children:[Object(p.jsx)(N.a,{tag:"h3",children:"Current Appointment"}),o?Object(p.jsxs)(k.a,{children:[o.date,", ",o.time,", ",o.doctor]}):Object(p.jsx)(k.a,{children:"No Appointments"}),Object(p.jsx)(u.a,{onClick:function(){var e=a.email;x.a.post("/users/cancel/"+e).then((function(e){console.log(e.data),j(e.data.appointment),window.location.reload()}))},className:"font-weight-bold",color:"warning",size:"lg",block:!0,children:"Cancel Appointment"})]})]})})},A=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){return Object(i.a)(this,c),t.call(this,e)}return Object(r.a)(c,[{key:"render",value:function(){return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)(v.a,{children:[Object(p.jsx)(y.a,{top:!0,width:"100%",src:"/assets/images/ambulance.jpg",alt:"Ambulance Contact Number"}),Object(p.jsxs)(C.a,{children:[Object(p.jsx)(N.a,{tag:"h3",children:"Emergency Contact No:"}),Object(p.jsxs)(k.a,{tag:"h2",children:[Object(p.jsx)("i",{className:"fa fa-phone fa-lg mr-2"}),"+91-98XXX-XXXX5"]})]})]})})}}]),c}(n.Component);var D=function(e){return Object(p.jsx)("div",{className:"w-100 footer mt-5",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row justify-content-center"}),Object(p.jsx)("div",{className:"row justify-content-center ",children:Object(p.jsx)("div",{className:"col-auto",children:Object(p.jsx)("p",{children:"\xa9 Copyright 2018 Medifide"})})})]})})};var S=function(e){return Object(p.jsx)(d.a,{children:Object(p.jsx)("a",{href:"./BAApp",children:Object(p.jsxs)(u.a,{className:"container font-weight-bold mt-5 ",color:"danger",size:"lg",block:!0,children:[Object(p.jsx)("h3",{children:"Book Appointment Now!"}),Object(p.jsx)("i",{class:"fa fa-plus-circle fa-2x ml-3","aria-hidden":"true"})]})})})},F=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){return Object(i.a)(this,c),t.call(this,e)}return Object(r.a)(c,[{key:"render",value:function(){return Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsx)("div",{className:"container mt-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-12 col-sm-6",children:Object(p.jsx)("div",{className:"col-11",children:Object(p.jsx)(w,{})})}),Object(p.jsx)("div",{className:"col-12 col-sm-6",children:Object(p.jsx)(A,{})})]})}),Object(p.jsx)(S,{}),Object(p.jsx)(D,{})]})}}]),c}(n.Component);c(68);var M=function(e,t){return console.log(e),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12 col-sm-12",children:Object(p.jsx)(v.a,{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-12 col-sm-6",children:Object(p.jsx)(y.a,{top:!0,width:"80%",src:e.doctor.personal.photo,alt:"Doc"})}),Object(p.jsx)("div",{className:"col-12 col-sm-6 d-flex align-items-center",children:Object(p.jsxs)(C.a,{children:[Object(p.jsx)(N.a,{tag:"h3",children:e.doctor.personal.name}),Object(p.jsx)(k.a,{children:e.doctor.personal.qualification}),Object(p.jsx)("a",{href:"./Doc1",children:Object(p.jsx)(u.a,{className:"font-weight-bold",color:"info",size:"lg",block:!0,children:"Book Appointment"})})]})})]})})})})},B=function(e){var t=Object(n.useState)([]),c=Object(g.a)(t,2),a=c[0],l=c[1];return Object(n.useEffect)((function(){x.a.get("/doctors").then((function(e){l(e.data),console.log(a)}))}),[]),Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsx)("div",{className:"container mt-3",children:a.map((function(e,t){return Object(p.jsx)(M,{doctor:e},t)}))}),Object(p.jsx)(D,{})]})},R=function(e){var t=Object(n.useState)({email:""}),c=Object(g.a)(t,2),a=c[0],l=c[1],i=Object(n.useState)({time:""}),r=Object(g.a)(i,2),o=r[0],j=r[1],d=Object(n.useState)(""),b=Object(g.a)(d,2),h=b[0],m=b[1],u=Object(n.useState)(!1),O=Object(g.a)(u,2);O[0],O[1];Object(n.useEffect)((function(){var e=a.email;x.a.get("/api/current_user").then((function(t){l(t.data.user),console.log(t.data.user.email),e=t.data.user.email,x.a.get("/users/patient/"+e).then((function(e){console.log(e.data)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]);return Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsxs)("div",{className:"container mt-3",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12 col-sm-12",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h2",{children:"Book Your Appointment With"}),Object(p.jsx)("div",{className:"col-12 col-sm-12",children:Object(p.jsx)("img",{top:!0,width:"30%",src:"/assets/images/1.png",class:"img-rounded",alt:"Doc1"})}),Object(p.jsxs)("div",{className:"col-12 col-sm-12 ",children:[Object(p.jsx)("h3",{children:"Dr. Suresh Rana"}),Object(p.jsx)("h5",{children:"MD, M.B.B.S."}),Object(p.jsx)("h5",{}),Object(p.jsx)("h5",{}),Object(p.jsx)("h4",{children:"Gold medalist from Government Medical College Bombay"})]})]})})}),Object(p.jsx)("div",{className:"row mt-5",children:Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("h3",{children:"Select your desired Date"}),Object(p.jsx)("div",{class:"container-fluid",children:Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("div",{class:"col-md-6 col-sm-6 col-xs-12 mt-3",children:Object(p.jsx)("form",{class:"form-horizontal",method:"post",children:Object(p.jsxs)("div",{class:"form-group ",children:[Object(p.jsxs)("label",{class:"control-label col-sm-2 requiredField",for:"date",children:["Date",Object(p.jsx)("span",{class:"asteriskField",children:"*"})]}),Object(p.jsx)("div",{class:"col-12",children:Object(p.jsxs)("div",{class:"input-group col-6",children:[Object(p.jsx)("div",{class:"input-group-addon",children:Object(p.jsx)("i",{class:"fa fa-calendar"})}),Object(p.jsx)("input",{value:h,onChange:function(e){return m(e.target.value)},class:"form-control",id:"date",name:"date",placeholder:"M/DD/YYYY",type:"date"})]})})]})})})})}),Object(p.jsxs)("div",{class:"mt-5",id:"Slots",children:[Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"10-11am"})},children:"10-11am"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"11-12pm"})},children:"11-12pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"12-1pm"})},children:"12-1pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"1-2pm"})},children:"1-2pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"2-3pm"})},children:"2-3pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"3-4pm"})},children:"3-4pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"4-5pm"})},children:"4-5pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"5-6pm"})},children:"5-6pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"6-7pm"})},children:"6-7pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"7-8pm"})},children:"7-8pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"8-9pm"})},children:"8-9pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"9-10pm"})},children:"9-10pm"})]}),Object(p.jsx)("div",{class:"form-group mt-3",children:Object(p.jsx)("div",{class:"col-sm-10 col-sm-offset-2",children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("button",{onClick:function(){x.a.post("/doctors/appointment/60828a2debb1ea4a10ec6a18",{appointments:{date:h,slots:{slot:o.time}},docName:"Dr. Suresh Rana",email:a.email}).then((function(e){return console.log(e)}))},class:"btn btn-danger ",name:"submit",type:"submit",children:"Check Availiblity and Book"})})})})]})})]}),Object(p.jsx)(D,{})]})},X=function(e){var t=Object(n.useState)({email:""}),c=Object(g.a)(t,2),a=c[0],l=c[1],i=Object(n.useState)({time:""}),r=Object(g.a)(i,2),o=r[0],j=r[1],d=Object(n.useState)(""),b=Object(g.a)(d,2),h=b[0],m=b[1];Object(n.useEffect)((function(){var e=a.email;x.a.get("/api/current_user").then((function(t){l(t.data.user),console.log(t.data.user.email),e=t.data.user.email,x.a.get("/users/patient/"+e).then((function(e){console.log(e.data)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]);return Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsxs)("div",{className:"container mt-3",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12 col-sm-12",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h2",{children:"Book Your Appointment With"}),Object(p.jsx)("div",{className:"col-12 col-sm-12",children:Object(p.jsx)("img",{top:!0,width:"30%",src:"/assets/images/2.jpg",class:"img-rounded",alt:"Doc1"})}),Object(p.jsxs)("div",{className:"col-12 col-sm-12 ",children:[Object(p.jsx)("h3",{children:"Dr. Reshma Khan"}),Object(p.jsx)("h5",{children:"M.B.B.S (ENT Specialist)"}),Object(p.jsx)("h5",{}),Object(p.jsx)("h5",{}),Object(p.jsx)("h4",{children:"From Government Medical College Gwallior"})]})]})})}),Object(p.jsx)("div",{className:"row mt-5",children:Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("h3",{children:"Select your desired Date"}),Object(p.jsx)("div",{class:"container-fluid",children:Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("div",{class:"col-md-6 col-sm-6 col-xs-12 mt-3",children:Object(p.jsx)("form",{class:"form-horizontal",method:"post",children:Object(p.jsxs)("div",{class:"form-group ",children:[Object(p.jsxs)("label",{class:"control-label col-sm-2 requiredField",for:"date",children:["Date",Object(p.jsx)("span",{class:"asteriskField",children:"*"})]}),Object(p.jsx)("div",{class:"col-12",children:Object(p.jsxs)("div",{class:"input-group col-6",children:[Object(p.jsx)("div",{class:"input-group-addon",children:Object(p.jsx)("i",{class:"fa fa-calendar"})}),Object(p.jsx)("input",{value:h,onChange:function(e){return m(e.target.value)},class:"form-control",id:"date",name:"date",placeholder:"M/DD/YYYY",type:"date"})]})})]})})})})}),Object(p.jsxs)("div",{class:"mt-5",id:"Slots",children:[Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"10-11am"})},children:"10-11am"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"11-12pm"})},children:"11-12pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"12-1pm"})},children:"12-1pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"1-2pm"})},children:"1-2pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"2-3pm"})},children:"2-3pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"3-4pm"})},children:"3-4pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"4-5pm"})},children:"4-5pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"5-6pm"})},children:"5-6pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"6-7pm"})},children:"6-7pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"7-8pm"})},children:"7-8pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"8-9pm"})},children:"8-9pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"9-10pm"})},children:"9-10pm"})]}),Object(p.jsx)("div",{class:"form-group mt-3",children:Object(p.jsx)("div",{class:"col-sm-10 col-sm-offset-2",children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("button",{onClick:function(){x.a.post("/doctors/appointment/605f89786ab3b02854353104",{appointments:{date:h,slots:{slot:o.time}},docName:"Dr. Reshma Khan",email:a.email}).then((function(e){return console.log(e)}))},class:"btn btn-danger ",name:"submit",type:"submit",children:"Check Availiblity and Book"})})})})]})})]}),Object(p.jsx)(D,{})]})},Y=function(e){var t=Object(n.useState)({email:""}),c=Object(g.a)(t,2),a=c[0],l=c[1],i=Object(n.useState)({time:""}),r=Object(g.a)(i,2),o=r[0],j=r[1],d=Object(n.useState)(""),b=Object(g.a)(d,2),h=b[0],m=b[1];Object(n.useEffect)((function(){var e=a.email;x.a.get("/api/current_user").then((function(t){l(t.data.user),console.log(t.data.user.email),e=t.data.user.email,x.a.get("/users/patient/"+e).then((function(e){console.log(e.data)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]);return Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsxs)("div",{className:"container mt-3",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-12 col-sm-12",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h2",{children:"Book Your Appointment With"}),Object(p.jsx)("div",{className:"col-12 col-sm-12",children:Object(p.jsx)("img",{top:!0,width:"30%",src:"/assets/images/3.jpg",class:"img-rounded",alt:"Doc3"})}),Object(p.jsxs)("div",{className:"col-12 col-sm-12 ",children:[Object(p.jsx)("h3",{children:"Dr. Harvinder Singh"}),Object(p.jsx)("h5",{children:"M.B.B.S. MD (Child Specialist)"}),Object(p.jsx)("h5",{}),Object(p.jsx)("h5",{}),Object(p.jsx)("h4",{children:"From CMC Ludhiana"})]})]})})}),Object(p.jsx)("div",{className:"row mt-5",children:Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("h3",{children:"Select your desired Date"}),Object(p.jsx)("div",{class:"container-fluid",children:Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("div",{class:"col-md-6 col-sm-6 col-xs-12 mt-3",children:Object(p.jsx)("form",{class:"form-horizontal",method:"post",children:Object(p.jsxs)("div",{class:"form-group ",children:[Object(p.jsxs)("label",{class:"control-label col-sm-2 requiredField",for:"date",children:["Date",Object(p.jsx)("span",{class:"asteriskField",children:"*"})]}),Object(p.jsx)("div",{class:"col-12",children:Object(p.jsxs)("div",{class:"input-group col-6",children:[Object(p.jsx)("div",{class:"input-group-addon",children:Object(p.jsx)("i",{class:"fa fa-calendar"})}),Object(p.jsx)("input",{value:h,onChange:function(e){return m(e.target.value)},class:"form-control",id:"date",name:"date",placeholder:"M/DD/YYYY",type:"date"})]})})]})})})})}),Object(p.jsxs)("div",{class:"mt-5",id:"Slots",children:[Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"10-11am"})},children:"10-11am"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"11-12pm"})},children:"11-12pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"12-1pm"})},children:"12-1pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"1-2pm"})},children:"1-2pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"2-3pm"})},children:"2-3pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"3-4pm"})},children:"3-4pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"4-5pm"})},children:"4-5pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"5-6pm"})},children:"5-6pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"6-7pm"})},children:"6-7pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"7-8pm"})},children:"7-8pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"8-9pm"})},children:"8-9pm"}),Object(p.jsx)("button",{class:"btn btn-primary ",onClick:function(){return j({time:"9-10pm"})},children:"9-10pm"})]}),Object(p.jsx)("div",{class:"form-group mt-3",children:Object(p.jsx)("div",{class:"col-sm-10 col-sm-offset-2",children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("button",{onClick:function(){x.a.post("/doctors/appointment/605f89786ab3b02854353104",{appointments:{date:h,slots:{slot:o.time}},docName:"Dr. Harvinder Singh",email:a.email}).then((function(e){return console.log(e)}))},class:"btn btn-danger ",name:"submit",type:"submit",children:"Check Availiblity and Book"})})})})]})})]}),Object(p.jsx)(D,{})]})},E=c(21),z=c(22),I=c(78),G=c(79),L=c(80),T=c(81),_=c(82),H=c(83),V=function(e){var t=Object(n.useState)({email:""}),c=Object(g.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)({height:"",weight:"",number:"",anumber:"",address1:"",address2:"",city:"",state:"",zip:""}),i=Object(g.a)(l,2),r=i[0],o=i[1];Object(n.useEffect)((function(){var e=s.email;x.a.get("/api/current_user").then((function(t){a(t.data.user),console.log(t.data.user.email),e=t.data.user.email,x.a.get("/users/patient/"+e).then((function(e){console.log(e.data),o(e.data)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]);var j=function(e){console.log(e.target.name),o((function(t){return Object(z.a)(Object(z.a)({},t),{},Object(E.a)({},e.target.name,e.target.value||e.target.checked))})),console.log(r)};return Object(p.jsx)("div",{className:"container mt-5",children:Object(p.jsxs)(I.a,{children:[s.email&&Object(p.jsx)("input",{name:"email",value:s.email,hidden:!0}),Object(p.jsxs)(G.a,{form:!0,children:[Object(p.jsx)(L.a,{md:6,children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(_.a,{for:"exampleHeight",children:"Height"}),Object(p.jsx)(H.a,{onChange:j,type:"text",value:r.height,name:"height",id:"exampleHeight",placeholder:"ft/cm"})]})}),Object(p.jsx)(L.a,{md:6,children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(_.a,{for:"exampleWeight",children:"Weight"}),Object(p.jsx)(H.a,{onChange:j,type:"text",value:r.weight,name:"weight",id:"exampleWeight",placeholder:"Kg/lb"})]})})]}),Object(p.jsxs)(G.a,{form:!0,children:[Object(p.jsx)(L.a,{md:6,children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(_.a,{for:"exampleNumber",children:"Contact number"}),Object(p.jsx)(H.a,{onChange:j,type:"text",value:r.number,name:"number",id:"exampleNumber",placeholder:"94XXXXXXXX"})]})}),Object(p.jsx)(L.a,{md:6,children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(_.a,{for:"exampleANumber",children:"Aternate Contact Number"}),Object(p.jsx)(H.a,{onChange:j,type:"text",value:r.anumber,name:"anumber",id:"exampleANumber",placeholder:"94XXXXXXXX"})]})})]}),Object(p.jsxs)(T.a,{children:[Object(p.jsx)(_.a,{for:"exampleAddress",children:"Address"}),Object(p.jsx)(H.a,{onChange:j,type:"text",value:r.address1,name:"address1",id:"exampleAddress",placeholder:"1234 Main St"})]}),Object(p.jsxs)(T.a,{children:[Object(p.jsx)(_.a,{for:"exampleAddress2",children:"Address 2"}),Object(p.jsx)(H.a,{onChange:j,type:"text",value:r.address2,name:"address2",id:"exampleAddress2",placeholder:"Apartment, studio, or floor"})]}),Object(p.jsxs)(G.a,{form:!0,children:[Object(p.jsx)(L.a,{md:6,children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(_.a,{for:"exampleCity",children:"City"}),Object(p.jsx)(H.a,{onChange:j,type:"text",value:r.city,name:"city",id:"exampleCity"})]})}),Object(p.jsx)(L.a,{md:4,children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(_.a,{for:"exampleState",children:"State"}),Object(p.jsx)(H.a,{onChange:j,type:"text",value:r.state,name:"state",id:"exampleState"})]})}),Object(p.jsx)(L.a,{md:2,children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(_.a,{for:"exampleZip",children:"Zip"}),Object(p.jsx)(H.a,{onChange:j,type:"text",value:r.zip,name:"zip",id:"exampleZip"})]})})]}),Object(p.jsxs)(T.a,{check:!0,children:[Object(p.jsx)(H.a,{type:"checkbox",name:"check",id:"exampleCheck"}),Object(p.jsx)(_.a,{for:"exampleCheck",check:!0,children:"Check me out"})]}),Object(p.jsx)(u.a,{onClick:function(){console.log(r),x.a.post("/users/update",Object(z.a)({email:s.email},r)).then((function(e){console.log(e),window.location.reload()}))},id:"updatebutton",className:"mt-3",color:"primary",children:"Update"})]})})},W=c(84),q=function(e){var t=Object(n.useState)({email:""}),c=Object(g.a)(t,2),a=c[0],l=c[1],i=Object(n.useState)({time:""}),r=Object(g.a)(i,2),o=(r[0],r[1],Object(n.useState)("")),j=Object(g.a)(o,2),d=j[0],b=j[1];Object(n.useEffect)((function(){var e=a.email;x.a.get("/api/current_user").then((function(t){l(t.data.user),console.log(t.data.user.email),e=t.data.user.email,x.a.get("/users/patient/"+e).then((function(e){console.log(e.data)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]);return Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsx)("div",{className:"container mt-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("h3",{children:"Select your desired Date"}),Object(p.jsx)("div",{class:"container-fluid",children:Object(p.jsx)("div",{class:"row",children:Object(p.jsx)("div",{class:"col-md-6 col-sm-6 col-xs-12 mt-3",children:Object(p.jsxs)("form",{class:"form-horizontal",method:"post",children:[Object(p.jsxs)("div",{class:"form-group ",children:[Object(p.jsxs)("label",{class:"control-label col-sm-2 requiredField",for:"date",children:["Date",Object(p.jsx)("span",{class:"asteriskField",children:"*"})]}),Object(p.jsx)("div",{class:"col-10",children:Object(p.jsxs)("div",{class:"input-group col-6",children:[Object(p.jsx)("div",{class:"input-group-addon",children:Object(p.jsx)("i",{class:"fa fa-calendar"})}),Object(p.jsx)("input",{value:d,onChange:function(e){return b(e.target.value)},class:"form-control",id:"date",name:"date",placeholder:"M/DD/YYYY",type:"date"})]})})]}),Object(p.jsx)(u.a,{className:"mt-1",color:"secondary",children:"Go"})]})})})}),Object(p.jsx)("h2",{className:"mt-5",children:"Your Schedule"}),Object(p.jsxs)(W.a,{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{children:"Time"}),Object(p.jsx)("th",{children:"Name"})]})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:"1"}),Object(p.jsx)("td",{children:"Mark"}),Object(p.jsx)("td",{children:"Otto"}),Object(p.jsx)("th",{children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)(u.a,{color:"secondary",children:"View"})})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:"2"}),Object(p.jsx)("td",{children:"Jacob"}),Object(p.jsx)("td",{children:"Thornton"}),Object(p.jsx)("th",{children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)(u.a,{color:"secondary",children:"View"})})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:"3"}),Object(p.jsx)("td",{children:"Larry"}),Object(p.jsx)("td",{children:"the Bird"}),Object(p.jsx)("th",{children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)(u.a,{color:"secondary",children:"View"})})})]})]})]})]}),Object(p.jsx)("div",{className:"col-12 col-sm-6"})]})}),Object(p.jsx)(D,{})]})},J=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={current_user:[],error:!1,loginStatus:!1,loadStatus:!1},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.a.get("/api/current_user").then((function(t){e.setState({error:!1,loadStatus:!0,loginStatus:t.data.loggedIn,current_user:t.data.user}),console.log(e.state.current_user,e.state.loginStatus)})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}},{key:"logout",value:function(){console.log("yww"),x.a.get("/api/logout")}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{children:this.state.loginStatus?Object(p.jsxs)("div",{children:[Object(p.jsx)(h.a,{dark:!0,color:"danger",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"col-sm-4",children:Object(p.jsx)(m.a,{href:"/",children:Object(p.jsx)("h1",{children:"MediFide"})})}),Object(p.jsx)("a",{href:"./Details",children:Object(p.jsx)(u.a,{color:"info",children:"Update your details"})}),Object(p.jsx)("a",{href:"./Details",children:Object(p.jsx)(u.a,{color:"info",children:"View Medical history"})}),Object(p.jsx)("h2",{children:this.state.current_user.name}),Object(p.jsx)("a",{href:"/api/logout",children:Object(p.jsx)(u.a,{color:"secondary",children:"Logout"})})]})}),Object(p.jsx)(b.a,{exact:!0,path:"/",component:F}),Object(p.jsx)(b.a,{path:"/BAApp",component:B}),Object(p.jsx)(b.a,{path:"/Doc1",component:R}),Object(p.jsx)(b.a,{path:"/Doc2",component:X}),Object(p.jsx)(b.a,{path:"/Doc3",component:Y}),Object(p.jsx)(b.a,{path:"/Details",component:V}),Object(p.jsx)(b.a,{path:"/Schedule",component:q})]}):Object(p.jsx)(b.a,{exact:!0,path:"/",component:f})})})}}]),c}(n.Component),K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,85)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),K()}},[[69,1,2]]]);
//# sourceMappingURL=main.dba36f26.chunk.js.map