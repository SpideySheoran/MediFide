(this.webpackJsonpmedifide=this.webpackJsonpmedifide||[]).push([[0],{43:function(e,t,c){},65:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(36),l=c.n(s),i=(c(42),c(43),c(17)),r=c(18),o=c(21),d=c(20),j=c(15),b=c(9),h=c(71),m=c(72),O=c(73),x=c(74),u=c(75),p=c(76),f=c(5),g=c.n(f),v=c(0),N=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(i.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n)))._handleSignInClick=function(){g.a.get("/google")},e}return Object(r.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{dark:!0,color:"danger",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(m.a,{href:"/",children:Object(v.jsx)("h1",{children:"MediFide"})})})}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("br",{}),Object(v.jsx)(O.a,{className:"rounded-0 shadow",children:Object(v.jsx)(x.a,{children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-3",children:Object(v.jsx)("h3",{children:"Login as Patient"})}),Object(v.jsx)("div",{className:"col-6",children:Object(v.jsx)("a",{href:"/google",class:"button",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{class:"svgIcon t-popup-svg",children:Object(v.jsx)("svg",{class:"svgIcon-use",width:"25",height:"37",viewBox:"0 0 25 25",children:Object(v.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(v.jsx)("path",{d:"M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",fill:"#4285F4"}),Object(v.jsx)("path",{d:"M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",fill:"#34A853"}),Object(v.jsx)("path",{d:"M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",fill:"#FBBC05"}),Object(v.jsx)("path",{d:"M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",fill:"#EA4335"})]})})}),Object(v.jsx)("span",{class:"button-label",children:"Sign in with Google"})]})})})]})})}),Object(v.jsx)(O.a,{className:"rounded-0 shadow mt-5",children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-3",children:[Object(v.jsx)("h1",{}),Object(v.jsx)("h3",{children:"Login as Doctor"})]})}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)(u.a,{sm:{size:4,offset:3},children:Object(v.jsx)("a",{href:"/Schedule",children:Object(v.jsx)(p.a,{className:"rounded-0 shadow-sm ",block:!0,color:"white",children:"View your Schedule         "})})})})]})}),Object(v.jsx)(O.a,{className:"rounded-0 shadow mt-5",children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-3",children:[Object(v.jsx)("h1",{}),Object(v.jsx)("h3",{children:"Login as Admin"})]})}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)(u.a,{sm:{size:4,offset:3},children:Object(v.jsx)("a",{href:"/admin/login",children:Object(v.jsx)(p.a,{className:"rounded-0 shadow-sm ",block:!0,color:"white",children:"Login as ADMIN         "})})})})]})})]})]})}}]),c}(a.Component),y=c(7),w=c(77),A=c(78),C=c(79),S=function(e){var t=Object(a.useState)({email:""}),c=Object(y.a)(t,2),s=c[0],l=c[1],i=Object(a.useState)({date:"",time:"",doctor:""}),r=Object(y.a)(i,2),o=r[0],d=r[1];Object(a.useEffect)((function(){var e=s.email;g.a.get("/api/current_user").then((function(t){l(t.data.user),console.log(t.data.user.email),e=t.data.user.email,g.a.get("/users/patient/"+e).then((function(e){console.log(e.data),d(e.data.appointment)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]);return Object(v.jsx)(n.a.Fragment,{children:Object(v.jsxs)(O.a,{className:"mt-5 shadow-lg p-3 mb-5 rounded-0",children:[Object(v.jsx)(w.a,{top:!0,width:"100%",src:"/assets/images/Current.jpg",alt:"Your Bookings"}),Object(v.jsxs)(x.a,{children:[Object(v.jsx)(A.a,{tag:"h3",children:"Current Appointment"}),o?Object(v.jsxs)(C.a,{children:[o.date,", ",o.time,", ",o.doctor]}):Object(v.jsx)(C.a,{children:"No Appointments"}),Object(v.jsx)(p.a,{onClick:function(){var e=s.email;g.a.post("/users/cancel/"+e,o).then((function(e){console.log(e.data),d(e.data.appointment),window.location.reload()}))},className:"rounded-0 font-weight-bold",color:"warning",size:"lg",block:!0,children:"Cancel Appointment"})]})]})})},D=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){return Object(i.a)(this,c),t.call(this,e)}return Object(r.a)(c,[{key:"render",value:function(){return Object(v.jsx)(n.a.Fragment,{children:Object(v.jsxs)(O.a,{className:"mt-5 shadow-lg p-3 mb-5 rounded-0",children:[Object(v.jsx)(w.a,{top:!0,width:"100%",src:"/assets/images/ambulance.jpg",alt:"Ambulance Contact Number"}),Object(v.jsxs)(x.a,{children:[Object(v.jsx)(A.a,{tag:"h3",children:"Emergency Contact No:"}),Object(v.jsxs)(C.a,{tag:"h2",children:[Object(v.jsx)("i",{className:"fa fa-phone fa-lg mr-2"}),"+91-98XXX-XXXX5"]})]})]})})}}]),c}(a.Component);var k=function(e){return Object(v.jsx)("div",{className:"w-100 footer mt-5",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"row justify-content-center"}),Object(v.jsx)("div",{className:"row justify-content-center ",children:Object(v.jsx)("div",{className:"col-auto",children:Object(v.jsx)("p",{children:"\xa9 Copyright 2018 Medifide"})})})]})})};c(65);var X=function(e){var t=Object(a.useState)({email:""}),c=Object(y.a)(t,2),n=c[0],s=c[1],l=Object(a.useState)({date:"",time:"",doctor:""}),i=Object(y.a)(l,2),r=i[0],o=i[1],d=Object(b.e)();return Object(a.useEffect)((function(){var e=n.email;g.a.get("/api/current_user").then((function(t){s(t.data.user),console.log(t.data.user.email),e=t.data.user.email,g.a.get("/users/patient/"+e).then((function(e){o(e.data.appointment),console.log(r)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]),Object(v.jsxs)(j.a,{children:[Object(v.jsx)("h4",{className:"text-center",id:"alreadyBooked",hidden:"true",children:"Appointment Already Booked"}),Object(v.jsxs)(p.a,{onClick:function(){r?document.getElementById("alreadyBooked").removeAttribute("hidden"):d.push("./BAApp")},className:" mt-5 shadow-lg p-3 mb-5 rounded-0 container font-weight-bold mt-5 ",color:"danger",size:"lg",block:!0,children:[Object(v.jsx)("h3",{children:"Book Appointment Now!"}),Object(v.jsx)("i",{class:"fa fa-plus-circle fa-2x ml-3","aria-hidden":"true"})]})]})},F=function(e){var t=Object(a.useState)({current_user:[],error:!1,loginStatus:!1,loadStatus:!1}),c=Object(y.a)(t,2),n=c[0],s=c[1];return g.a.get("/api/current_user").then((function(e){s({error:!1,loadStatus:!0,loginStatus:e.data.loggedIn,current_user:e.data.user})})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)})),Object(v.jsx)(h.a,{dark:!0,color:"danger",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"col-sm-4",children:Object(v.jsx)(m.a,{href:"/",children:Object(v.jsx)("h1",{children:"MediFide"})})}),Object(v.jsx)("h2",{children:n.current_user.name}),Object(v.jsx)("a",{href:"./Details",children:Object(v.jsx)(p.a,{className:"rounded-0",color:"info",children:"Update details"})}),Object(v.jsx)("a",{href:"./History",children:Object(v.jsx)(p.a,{className:"rounded-0",color:"info",children:"Medical history"})}),Object(v.jsx)("a",{href:"/api/logout",children:Object(v.jsx)(p.a,{className:"rounded-0",color:"secondary",children:"Logout"})})]})})},E=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){return Object(i.a)(this,c),t.call(this,e)}return Object(r.a)(c,[{key:"render",value:function(){return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(F,{}),Object(v.jsx)("div",{className:"container mt-3",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-12 col-sm-6",children:Object(v.jsx)("div",{className:"col-11",children:Object(v.jsx)(S,{})})}),Object(v.jsx)("div",{className:"col-12 col-sm-6",children:Object(v.jsx)(D,{})})]})}),Object(v.jsx)(X,{}),Object(v.jsx)(k,{})]})}}]),c}(a.Component),R=(c(69),c(80)),z=c(81);var M=function(e,t){var c=Object(b.e)();return console.log(e.doctor._id),Object(v.jsx)(R.a,{children:Object(v.jsx)(z.a,{children:Object(v.jsx)(u.a,{sm:{size:6,offset:3},children:Object(v.jsx)(O.a,{className:"mt-5 shadow-lg p-3 mb-5  rounded-0",style:{backgroundColor:"#f0afaf"},children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-12 col-sm-6",children:Object(v.jsx)(w.a,{top:!0,width:"80%",src:e.doctor.personal.photo,alt:"Doc"})}),Object(v.jsx)("div",{className:"col-12 col-sm-6 d-flex align-items-center",children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(A.a,{tag:"h3",children:e.doctor.personal.name}),Object(v.jsx)(C.a,{children:e.doctor.personal.qualification}),Object(v.jsx)(p.a,{className:"font-weight-bold rounded-0",color:"info",size:"lg",block:!0,onClick:function(){c.push("/docProfile/"+e.doctor._id)},children:"Book Appointment"})]})})]})})})})})},I=function(e){var t=Object(a.useState)([]),c=Object(y.a)(t,2),s=c[0],l=c[1];return Object(a.useEffect)((function(){g.a.get("/doctors").then((function(e){l(e.data),console.log(s)}))}),[]),Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(F,{}),Object(v.jsx)(R.a,{children:Object(v.jsx)(z.a,{children:Object(v.jsx)(u.a,{sm:{size:12},children:Object(v.jsx)(O.a,{className:"mt-5 shadow-lg p-3 mb-5  rounded-0",children:s.map((function(e,t){return Object(v.jsx)(M,{doctor:e},t)}))})})})}),Object(v.jsx)(k,{})]})};var P=function(){var e=Object(a.useState)({email:""}),t=Object(y.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)({time:""}),i=Object(y.a)(l,2),r=i[0],o=i[1],d=Object(a.useState)(""),j=Object(y.a)(d,2),h=j[0],m=j[1],x=Object(a.useState)({name:"",qualification:"",college:"",profilePic:""}),p=Object(y.a)(x,2),f=p[0],N=p[1],w=Object(a.useState)([]),C=Object(y.a)(w,2),S=C[0],D=C[1],X=Object(b.f)().id;return Object(a.useEffect)((function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()+1),t=t.toISOString().split("T")[0],document.getElementsByName("date")[0].setAttribute("min",t),g.a.get("/doctors/"+X).then((function(e){console.log(e.data.personal),N({name:e.data.personal.name,qualification:e.data.personal.qualification,college:e.data.personal.college,profilePic:e.data.personal.photo})})),console.log(f);var a=c.email;g.a.get("/api/current_user").then((function(e){s(e.data.user),console.log(e.data.user.email),a=e.data.user.email,g.a.get("/users/patient/"+a).then((function(e){console.log(e.data)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]),Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(F,{}),Object(v.jsx)(R.a,{children:Object(v.jsx)(z.a,{children:Object(v.jsx)(u.a,{sm:{size:12},children:Object(v.jsxs)(O.a,{className:"mt-5 shadow-lg p-3 mb-5  rounded-0",children:[Object(v.jsx)(A.a,{className:"mt-5  p-3  rounded-0",children:Object(v.jsx)("h1",{children:"Book Your Appointment With"})}),Object(v.jsx)(z.a,{children:Object(v.jsx)(u.a,{sm:{size:6,offset:1},children:Object(v.jsxs)(O.a,{className:"mt-5 shadow-lg p-3 mb-5  rounded-0",style:{backgroundColor:"#f0afaf"},children:[Object(v.jsx)("img",{top:!0,width:"50%",src:f.profilePic,class:"img-rounded",alt:"Doc1"}),Object(v.jsxs)("div",{className:"col-12 col-sm-12 ",children:[Object(v.jsx)("h3",{children:f.name}),Object(v.jsx)("h5",{children:f.qualification}),Object(v.jsx)("h5",{}),Object(v.jsx)("h5",{}),Object(v.jsx)("h4",{children:f.college})]})]})})}),Object(v.jsx)("div",{className:"row mt-5",children:Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("h3",{children:"Select your desired Date"}),Object(v.jsx)("div",{class:"container-fluid",children:Object(v.jsx)("div",{class:"row",children:Object(v.jsx)("div",{class:"col-md-6 col-sm-6 col-xs-12 mt-3",children:Object(v.jsx)("form",{class:"form-horizontal",method:"post",children:Object(v.jsxs)("div",{class:"form-group ",children:[Object(v.jsxs)("label",{class:"control-label col-sm-2 requiredField",for:"date",children:["Date",Object(v.jsx)("span",{class:"asteriskField",children:"*"})]}),Object(v.jsx)("div",{class:"col-12",children:Object(v.jsxs)("div",{class:"input-group col-6",children:[Object(v.jsx)("div",{class:"input-group-addon",children:Object(v.jsx)("i",{class:"fa fa-calendar"})}),Object(v.jsx)("input",{value:h,onChange:function(e){return m(e.target.value)},class:"form-control",id:"date",name:"date",placeholder:"M/DD/YYYY",type:"date"})]})})]})})})})}),Object(v.jsx)("div",{class:"form-group mt-3",children:Object(v.jsx)("div",{class:"col-sm-10 col-sm-offset-2",children:Object(v.jsx)("button",{onClick:function(){g.a.post("/doctors/appointmentCheck/"+X,{appointments:{date:h,slots:{slot:r.time}},docName:f.name,email:c.email}).then((function(e){return D(e.data)})),document.getElementById("Slots").removeAttribute("hidden")},class:"btn btn-danger rounded-0 shadow",name:"submit",type:"submit",children:"Check Availiblity"})})}),Object(v.jsxs)("div",{class:"mt-5",id:"Slots",hidden:"true",children:[S.map((function(e){return Object(v.jsx)("button",{class:"btn btn-primary ",style:{margin:"2.5px"},onClick:function(){return o({time:e})},children:e})})),Object(v.jsx)("div",{class:"form-group mt-3",children:Object(v.jsx)("div",{class:"col-sm-10 col-sm-offset-2",children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("button",{onClick:function(){g.a.post("/doctors/appointment/"+X,{appointments:{date:h,slots:{slot:r.time}},docName:f.name,email:c.email}).then((function(e){return console.log(e)}))},class:"btn btn-danger rounded-0 shadow",name:"submit",type:"submit",children:"Book"})})})})]})]})})]})})})})]}),Object(v.jsx)(k,{})]})},B=c(19),L=c(16),Y=c(82),_=c(83),G=c(84),T=c(85),q=function(e){var t=Object(a.useState)({email:""}),c=Object(y.a)(t,2),s=c[0],l=c[1],i=Object(a.useState)({height:"",weight:"",number:"",anumber:"",address1:"",address2:"",city:"",state:"",zip:""}),r=Object(y.a)(i,2),o=r[0],d=r[1];Object(a.useEffect)((function(){var e=s.email;g.a.get("/api/current_user").then((function(t){l(t.data.user),console.log(t.data.user.email),e=t.data.user.email,g.a.get("/users/patient/"+e).then((function(e){console.log(e.data),d(e.data)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]);var j=function(e){console.log(e.target.name),d((function(t){return Object(L.a)(Object(L.a)({},t),{},Object(B.a)({},e.target.name,e.target.value||e.target.checked))})),console.log(o)};return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(F,{}),Object(v.jsx)(R.a,{children:Object(v.jsx)(z.a,{children:Object(v.jsx)(u.a,{sm:{size:6,offset:3},children:Object(v.jsxs)(O.a,{className:"mt-5 shadow-lg p-3 mb-5 rounded-0",style:{backgroundColor:"#ffaba6"},children:[Object(v.jsx)(A.a,{className:"mt-3 ",children:Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)("h2",{children:"Update Your Deatils"})})}),Object(v.jsx)(x.a,{children:Object(v.jsxs)(Y.a,{children:[s.email&&Object(v.jsx)("input",{name:"email",value:s.email,hidden:!0}),Object(v.jsxs)(z.a,{form:!0,children:[Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleHeight",children:"Height"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:j,type:"text",value:o.height,name:"height",id:"exampleHeight",placeholder:"ft/cm"})]})}),Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleWeight",children:"Weight"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:j,type:"text",value:o.weight,name:"weight",id:"exampleWeight",placeholder:"Kg/lb"})]})})]}),Object(v.jsxs)(z.a,{form:!0,children:[Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleNumber",children:"Contact number"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:j,type:"text",value:o.number,name:"number",id:"exampleNumber",placeholder:"94XXXXXXXX"})]})}),Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleANumber",children:"Aternate Contact Number"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:j,type:"text",value:o.anumber,name:"anumber",id:"exampleANumber",placeholder:"94XXXXXXXX"})]})})]}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleAddress",children:"Address"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:j,type:"text",value:o.address1,name:"address1",id:"exampleAddress",placeholder:"1234 Main St"})]}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleAddress2",children:"Address 2"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:j,type:"text",value:o.address2,name:"address2",id:"exampleAddress2",placeholder:"Apartment, studio, or floor"})]}),Object(v.jsxs)(z.a,{form:!0,children:[Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleCity",children:"City"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:j,type:"text",value:o.city,name:"city",id:"exampleCity"})]})}),Object(v.jsx)(u.a,{md:4,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleState",children:"State"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:j,type:"text",value:o.state,name:"state",id:"exampleState"})]})}),Object(v.jsx)(u.a,{md:2,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleZip",children:"Zip"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:j,type:"text",value:o.zip,name:"zip",id:"exampleZip"})]})})]}),Object(v.jsx)(p.a,{onClick:function(){console.log(o),g.a.post("/users/update",Object(L.a)({email:s.email},o)).then((function(e){console.log(e),window.location.reload()}))},id:"updatebutton",className:"mt-3 rounded-0",color:"danger",children:"Update"})]})})]})})})}),Object(v.jsx)(k,{})]})};var H=function(e){return Object(v.jsx)("div",{className:"w-100 footer mt-5",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"row justify-content-center"}),Object(v.jsx)("div",{className:"row justify-content-center ",children:Object(v.jsx)("div",{className:"col-auto",children:Object(v.jsx)("p",{children:"\xa9 Copyright 2018 Medifide"})})})]})})},W=function(e){var t=Object(a.useState)({email:""}),c=Object(y.a)(t,2),s=c[0],l=c[1],i=Object(a.useState)([]),r=Object(y.a)(i,2),o=r[0],d=r[1];return Object(a.useEffect)((function(){var e=s.email;g.a.get("/api/current_user").then((function(t){l(t.data.user),console.log(t.data.user.email),e=t.data.user.email,g.a.get("/users/history/"+e).then((function(e){d(e.data),console.log(e.data),console.log(o)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]),Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(F,{}),Object(v.jsx)(R.a,{children:o.map((function(e,t){return Object(v.jsx)(O.a,{className:"mt-5 shadow p-3 mb-5  rounded-0",children:Object(v.jsxs)(x.a,{children:[e.doctor,Object(v.jsx)("br",{}),e.date,Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"Diagnosed with"}),e.pAilment,Object(v.jsx)("br",{}),e.sAilment,Object(v.jsx)("br",{}),Object(v.jsx)("h6",{children:"Rx"}),e.medicine1,Object(v.jsx)("br",{}),e.medicine2,Object(v.jsx)("br",{}),e.medicine3,Object(v.jsx)("br",{}),e.medicine4,Object(v.jsx)("br",{}),e.medicine5]})})}))}),Object(v.jsx)(H,{})]})},Q=function(e){return Object(v.jsx)(h.a,{dark:!0,color:"danger",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"col-sm-4",children:Object(v.jsx)(m.a,{href:"/",children:Object(v.jsx)("h1",{children:"MediFide"})})}),Object(v.jsx)("a",{href:"/api/logout",children:Object(v.jsx)(p.a,{className:"rounded-0",color:"secondary",children:"Logout"})})]})})};var U=function(e){return Object(v.jsx)("div",{className:"w-100 footer mt-5",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"row justify-content-center"}),Object(v.jsx)("div",{className:"row justify-content-center ",children:Object(v.jsx)("div",{className:"col-auto",children:Object(v.jsx)("p",{children:"\xa9 Copyright 2018 Medifide"})})})]})})},V=function(e){var t=Object(a.useState)({name:"",gender:"",email:"",dob:"",phone:"",photo:"",qualification:"",college:""}),c=Object(y.a)(t,2),s=c[0],l=c[1],i=function(e){console.log(e.target.name),l((function(t){return Object(L.a)(Object(L.a)({},t),{},Object(B.a)({},e.target.name,e.target.value||e.target.checked))}))};return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(Q,{}),Object(v.jsx)("div",{className:"container mt-5",children:Object(v.jsxs)(O.a,{className:"shadow-lg rounded-0",style:{backgroundColor:"#f0afaf"},children:[Object(v.jsx)(A.a,{className:"mt-5 ",children:Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)("h1",{children:"Add a new Doctor"})})}),Object(v.jsx)(x.a,{children:Object(v.jsxs)(Y.a,{children:[Object(v.jsx)(z.a,{form:!0,children:Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"DocName",children:"Doctor's Name"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:i,type:"text",value:s.name,name:"name",id:"exampleName",placeholder:"Name "})]})})}),Object(v.jsxs)(z.a,{form:!0,children:[Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleGender",children:"Gender"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:i,type:"text",value:s.gender,name:"gender",id:"exampleGender",placeholder:"M/F"})]})}),Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleEmail",children:"Email ID"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:i,type:"text",value:s.email,name:"email",id:"exampleEmail",placeholder:"abc@xyz.com"})]})})]}),Object(v.jsxs)(z.a,{form:!0,children:[Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"examplePhone",children:"Contact Number"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:i,type:"text",value:s.phone,name:"phone",id:"examplePhone",placeholder:"94XXXXXXXX"})]})}),Object(v.jsx)(u.a,{md:6,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleDob",children:"Date of Birth"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:i,type:"text",value:s.dob,name:"dob",id:"exampleDob",placeholder:"DD/MM/YYYY"})]})})]}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleQualification",children:"Qualification"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:i,type:"text",value:s.qualification,name:"qualification",id:"exampleQualification",placeholder:"Qualification"})]}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleCollege",children:"College"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:i,type:"text",value:s.college,name:"college",id:"exampleCollege",placeholder:"College"})]}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"examplePhoto",children:"Photo"}),Object(v.jsx)(T.a,{className:"rounded-0",onChange:i,type:"text",value:s.photo,name:"photo",id:"examplePhoto",placeholder:"Image URL"})]}),Object(v.jsx)(_.a,{check:!0}),Object(v.jsx)("a",{href:"./view",children:Object(v.jsx)(p.a,{onClick:function(){console.log(s),g.a.post("/doctors/add",s).then((function(e){console.log(e)}))},id:"updatebutton",className:"mt-3 rounded-0 shadow",color:"primary",children:"Add Doctor"})})]})})]})}),Object(v.jsx)(U,{})]})},Z=function(e){var t=Object(a.useState)(""),c=Object(y.a)(t,2),s=c[0],l=c[1];return Object(v.jsx)(n.a.Fragment,{children:Object(v.jsx)(R.a,{children:Object(v.jsx)(z.a,{children:Object(v.jsx)(u.a,{sm:{size:6,offset:3},children:Object(v.jsxs)(O.a,{className:"rounded-0 mt-5",children:[Object(v.jsx)(A.a,{className:" mt-5",children:Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)("h3",{children:"Admin Login"})})}),Object(v.jsxs)(x.a,{children:[Object(v.jsx)(Y.a,{children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"examplePassword",children:"Password"}),Object(v.jsx)(T.a,{value:s,onChange:function(e){return l(e.target.value)},type:"password",name:"password",id:"examplePassword",placeholder:"******"})]})}),Object(v.jsx)(p.a,{className:"rounded-0 shadow-sm",onClick:function(){"password"===s&&e.history.push("/admin/view")},children:"Login"})]})]})})})})})};var J=function(e){return Object(v.jsx)("div",{className:"col-4 mb-5",children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(w.a,{top:!0,width:"100%",src:e.doctor.personal.photo,alt:"Doc"}),Object(v.jsxs)(x.a,{children:[Object(v.jsx)(A.a,{tag:"h3",children:e.doctor.personal.name}),Object(v.jsx)("a",{href:"./view",children:Object(v.jsx)(p.a,{onClick:function(){console.log(e.doctor._id),g.a.post("/doctors/remove/"+e.doctor._id).then((function(e){return console.log(e)}))},className:"font-weight-bold rounded-0 shadow-sm",color:"info",size:"lg",block:!0,children:"Remove"})})]})]})})};var K=function(e){var t=Object(a.useState)([]),c=Object(y.a)(t,2),s=c[0],l=c[1];return Object(a.useEffect)((function(){g.a.get("/doctors").then((function(e){l(e.data),console.log(s)}))}),[]),Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(Q,{}),Object(v.jsxs)("div",{className:"container shadow-lg mt-3",children:[Object(v.jsx)("div",{className:"row",children:Object(v.jsx)(u.a,{sm:{size:4,offset:5},children:Object(v.jsx)("a",{href:"./add",children:Object(v.jsx)(p.a,{className:"rounded-0 ml-5 mt-5 mb-5 shadow",color:"danger",children:"Add a new Doctor"})})})}),Object(v.jsx)("div",{className:"row",children:s.map((function(e,t){return Object(v.jsx)(J,{doctor:e},t)}))})]}),Object(v.jsx)(U,{})]})},$=c(86),ee=function(e){return Object(v.jsx)(h.a,{dark:!0,color:"danger",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"col-sm-4",children:Object(v.jsx)(m.a,{href:"/",children:Object(v.jsx)("h1",{children:"MediFide"})})}),Object(v.jsx)("a",{href:"/api/logout",children:Object(v.jsx)(p.a,{className:"rounded-0",color:"secondary",children:"Logout"})})]})})},te=function(e){var t=Object(a.useState)({email:""}),c=Object(y.a)(t,2),s=c[0],l=c[1],i=Object(a.useState)({time:""}),r=Object(y.a)(i,2),o=(r[0],r[1],Object(a.useState)("")),d=Object(y.a)(o,2),j=d[0],h=d[1],m=Object(a.useState)(""),O=Object(y.a)(m,2),x=O[0],u=O[1],f=Object(a.useState)([]),N=Object(y.a)(f,2),w=N[0],A=N[1],C=Object(b.e)();Object(a.useEffect)((function(){var e=s.email;g.a.get("/api/current_user").then((function(t){l(t.data.user),console.log(t.data.user.email),e=t.data.user.email,g.a.get("/users/patient/"+e).then((function(e){console.log(e.data)}))})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}),[]);return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(ee,{}),Object(v.jsx)("div",{className:"container mt-3",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("h3",{children:"Select your desired Date"}),Object(v.jsx)("div",{class:"container-fluid",children:Object(v.jsx)("div",{class:"row",children:Object(v.jsx)("div",{class:"col-md-6 col-sm-6 col-xs-12 mt-3",children:Object(v.jsxs)("form",{class:"form-horizontal",method:"post",children:[Object(v.jsxs)("div",{class:"form-group ",children:[Object(v.jsxs)("label",{class:"control-label col-sm-2 requiredField",for:"date",children:["Email",Object(v.jsx)("span",{class:"asteriskField",children:"*"})]}),Object(v.jsx)("input",{className:!0,type:"text",value:x,onChange:function(e){return u(e.target.value)}})]}),Object(v.jsxs)("div",{class:"form-group ",children:[Object(v.jsxs)("label",{class:"control-label col-sm-2 requiredField",for:"date",children:["Date",Object(v.jsx)("span",{class:"asteriskField",children:"*"})]}),Object(v.jsx)("div",{class:"col-10",children:Object(v.jsxs)("div",{class:"input-group col-6",children:[Object(v.jsx)("div",{class:"input-group-addon",children:Object(v.jsx)("i",{class:"fa fa-calendar"})}),Object(v.jsx)("input",{value:j,onChange:function(e){return h(e.target.value)},class:"form-control",id:"date",name:"date",placeholder:"M/DD/YYYY",type:"date"})]})})]}),Object(v.jsx)(p.a,{onClick:function(){g.a.get("/doctors/getByDate/"+x+"/"+j).then((function(e){console.log(e.data),A(e.data)})),document.getElementById("Sched").removeAttribute("hidden")},className:"mt-1 rounded-0 shadow",color:"secondary",children:"Go"})]})})})}),Object(v.jsxs)("div",{id:"Sched",hidden:"true",children:[Object(v.jsx)("h2",{className:"mt-5",children:"Your Schedule"}),w.msg||0===w.length?Object(v.jsx)("h2",{children:"No appointments for today"}):Object(v.jsxs)($.a,{children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"#"}),Object(v.jsx)("th",{children:"Time"}),Object(v.jsx)("th",{children:"Name"})]})}),Object(v.jsx)("tbody",{children:w.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"row",children:t+1}),Object(v.jsx)("td",{children:e.slot}),Object(v.jsx)("td",{children:e.name}),Object(v.jsx)("th",{children:Object(v.jsx)(p.a,{onClick:function(){return t=e.id,void C.push("/History/"+t);var t},color:"secondary",children:"View History"})})]})}))})]})]})]}),Object(v.jsx)("div",{className:"col-12 col-sm-6"})]})}),Object(v.jsx)(k,{})]})},ce=function(e){var t=Object(b.f)().id,c=Object(a.useState)({date:"",doctor:"",time:"",pAilment:"",sAilment:"",medicine1:"",medicine2:"",medicine3:"",medicine4:"",medicine5:""}),s=Object(y.a)(c,2),l=s[0],i=s[1];Object(a.useEffect)((function(){g.a.get("/users/"+t).then((function(e){i({date:e.data.appointment.date,doctor:e.data.appointment.doctor,time:e.data.appointment.time})}))}),[]);var r=function(e){console.log(e.target.name),i((function(t){return Object(L.a)(Object(L.a)({},t),{},Object(B.a)({},e.target.name,e.target.value||e.target.checked))}))};return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(ee,{}),Object(v.jsx)(R.a,{children:Object(v.jsx)(z.a,{children:Object(v.jsx)(u.a,{sm:{size:6,offset:3},children:Object(v.jsx)(O.a,{className:"mt-5 shadow-lg p-3 mb-5  rounded-0",style:{backgroundColor:"#f0afaf"},children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)("h2",{children:"Patient's Prescription"}),Object(v.jsxs)(Y.a,{children:[Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleDate",children:"Date"}),Object(v.jsx)(T.a,{type:"text",name:"date",id:"exampleDate",placeholder:"DD/MM/YYYY",value:l.date})]}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleAilment",children:"Primary Ailment"}),Object(v.jsx)(T.a,{onChange:r,type:"text",name:"pAilment",id:"exampleAilment",placeholder:"",value:l.pAilment})]}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleSAilment",children:"Secondary Ailments"}),Object(v.jsx)(T.a,{onChange:r,type:"text",name:"sAilment",id:"exampleSAilment",placeholder:"",value:l.sAilment})]}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(G.a,{for:"exampleSelect",children:"Medicines Rx"}),Object(v.jsx)(T.a,{onChange:r,type:"medicine",name:"medicine1",id:"medicine1",placeholder:"",value:l.medicine1}),Object(v.jsx)(T.a,{onChange:r,type:"medicine",name:"medicine2",id:"medicine2",placeholder:"",value:l.medicine2}),Object(v.jsx)(T.a,{onChange:r,type:"medicine",name:"medicine3",id:"medicine3",placeholder:"",value:l.medicine3}),Object(v.jsx)(T.a,{onChange:r,type:"medicine",name:"medicine4",id:"medicine4",placeholder:"",value:l.medicine4}),Object(v.jsx)(T.a,{onChange:r,type:"medicine",name:"medicine5",id:"medicine5",placeholder:"",value:l.medicine5})]}),Object(v.jsx)("a",{href:"/Schedule",children:Object(v.jsx)(p.a,{color:"info",onClick:function(){g.a.post("/users/prescription/"+t,l).then((function(e){console.log(e)}))},children:"Submit"})})]})]})})})})}),Object(v.jsx)(H,{})]})},ae=function(e){var t=Object(b.f)().id,c=Object(a.useState)([]),s=Object(y.a)(c,2),l=s[0],i=s[1],r=Object(b.e)();Object(a.useEffect)((function(){g.a.get("/users/"+t).then((function(e){i(e.data.history),console.log(e.data)}))}),[]);return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(ee,{}),Object(v.jsxs)(R.a,{children:[Object(v.jsx)(p.a,{className:"col-md-3 mt-5 justify-content-center",onClick:function(){return function(e){r.push("/Prescription/"+e)}(t)},color:"secondary",children:"Write Prescription"}),l.map((function(e,t){return Object(v.jsx)(O.a,{className:"mt-5 shadow p-3 mb-5  rounded-0",children:Object(v.jsxs)(x.a,{children:[e.doctor,Object(v.jsx)("br",{}),e.date,Object(v.jsx)("br",{}),Object(v.jsx)("p",{children:"Diagnosed with"}),e.pAilment,Object(v.jsx)("br",{}),e.sAilment,Object(v.jsx)("br",{}),Object(v.jsx)("h6",{children:"Rx"}),e.medicine1,Object(v.jsx)("br",{}),e.medicine2,Object(v.jsx)("br",{}),e.medicine3,Object(v.jsx)("br",{}),e.medicine4,Object(v.jsx)("br",{}),e.medicine5]})})}))]}),Object(v.jsx)(H,{})]})},ne=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(i.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={current_user:[],error:!1,loginStatus:!1,loadStatus:!1},e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/api/current_user").then((function(t){e.setState({error:!1,loadStatus:!0,loginStatus:t.data.loggedIn,current_user:t.data.user}),console.log(e.state.current_user,e.state.loginStatus)})).catch((function(e){console.log("ERROR LOADING DATA"),console.log(e)}))}},{key:"logout",value:function(){console.log("yww"),g.a.get("/api/logout")}},{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(j.a,{children:this.state.loginStatus?Object(v.jsxs)("div",{children:[Object(v.jsx)(b.a,{exact:!0,path:"/",component:E}),Object(v.jsx)(b.a,{path:"/BAApp",component:I}),Object(v.jsx)(b.a,{path:"/docProfile/:id",component:P}),Object(v.jsx)(b.a,{path:"/Details",component:q}),Object(v.jsx)(b.a,{path:"/History",component:W})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)(b.a,{exact:!0,path:"/",component:N}),Object(v.jsx)(b.a,{path:"/admin/login",component:Z}),Object(v.jsx)(b.a,{path:"/admin/add",component:V}),Object(v.jsx)(b.a,{path:"/admin/view",component:K}),Object(v.jsx)(b.a,{path:"/Schedule",component:te}),Object(v.jsx)(b.a,{path:"/History/:id",component:ae}),Object(v.jsx)(b.a,{path:"/Prescription/:id",component:ce})]})})})}}]),c}(a.Component),se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,87)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(ne,{})}),document.getElementById("root")),se()}},[[70,1,2]]]);
//# sourceMappingURL=main.b0fe710a.chunk.js.map