(this["webpackJsonpcitas-app-react"]=this["webpackJsonpcitas-app-react"]||[]).push([[0],{35:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},65:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var c=t(1),r=t(17),n=t.n(r),s=t(4),i=t(9),l=t(6),o=t(7),d=t.n(o),j=t(14),b=t(8),m=t.n(b),u=Object({NODE_ENV:"production",PUBLIC_URL:"/Citas-React-App",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,h=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",c="".concat(u,"/").concat(e);return"GET"===t?fetch(c):fetch(c,{method:t,headers:{"Content-type":"application/json"},body:JSON.stringify(a)})},x=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",c="".concat(u,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===t?fetch(c,{method:t,headers:{"x-token":r}}):fetch(c,{method:t,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(a)})};function O(e){var a=new FormData;return Object.keys(e).forEach((function(t){a.append(t,e[t])})),a}var f=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",c="".concat(u,"/").concat(e),r=localStorage.getItem("token")||"";if("GET"===t)return fetch(c,{method:t,headers:{"x-token":r}});var n=O(a);return console.log("datatoserver",n),fetch(c,{method:t,headers:{"x-token":r},body:n})},p="[ui] Toggle Sidebar",v="[article] Open Modal",g="[article] Close Modal",N="[article] Set active",y="[article] Add new",w="[article] Clear active article",k="[article] article updated",C="[article] article deleted",S="[article] articles loaded",E="[campaign] Add new",A="[campaign] campaign deleted",_="[campaign] campaigns loaded",R="[auth] Finish checking login state",T="[auth] Login",D="[auth] Logout",P=function(){return{type:R}},F=function(e){return{type:T,payload:e}},I=function(){return{type:D}},L=(t(60),t(0)),G=function(){return Object(L.jsx)("div",{className:"spinner-container",children:Object(L.jsx)("div",{className:"spinner"})})},U=t(13),M=(t(62),t(18)),z=t(3),B=function(){var e=Object(s.c)(),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(c.useState)(e),t=Object(U.a)(a,2),r=t[0],n=t[1];return[r,function(e){var a=e.target;n(Object(z.a)(Object(z.a)({},r),{},Object(M.a)({},a.name,a.value)))},function(){n(e)}]}({email:"asddf@gmail.com",password:"123456"}),t=Object(U.a)(a,2),r=t[0],n=t[1],i=r.email,l=r.password;return Object(L.jsx)("div",{className:"d-flex align-items-center text-center",style:{height:"100vh"},children:Object(L.jsxs)("form",{className:"form-signin",onSubmit:function(a){a.preventDefault(),e(function(e,a){return function(){var t=Object(j.a)(d.a.mark((function t(c){var r,n,s,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h("auth",{email:e,password:a},"POST");case 2:return r=t.sent,t.next=5,r.json();case 5:(n=t.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),s=n.avatar,i=s.replace(/\/upload\//,"/upload/c_scale,w_30,h_30/"),console.log(i),c(F({uid:n.uid,name:n.name,rol:n.rol,avatar:i}))):m.a.fire("Error",n.msg,"error");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(i,l))},children:[Object(L.jsx)("img",{className:"mb-4",src:"/images/logotipo.png",alt:"",height:"72",width:"300"}),Object(L.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Ingreso al Panel de Control"}),Object(L.jsx)("input",{type:"text",id:"inputEmail",name:"email",className:"form-control",placeholder:"Correo Electr\xf3nico",value:i,onChange:n}),Object(L.jsx)("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Contrase\xf1a",name:"password",value:l,onChange:n}),Object(L.jsx)("button",{className:"btn btn-lg btn-primary btn-block rounded-0",type:"submit",children:"Ingresar"})]})})},H="admin",W=function(e){var a=e.rol,t=Object(s.d)((function(e){return e.ui})).toggleSidebar;return Object(L.jsxs)("div",{className:"sidebar-container".concat(!0===t?"-collapsed":""," bg-primario"),children:[Object(L.jsx)("div",{className:"logo",children:Object(L.jsxs)("h4",{className:"text-light font-weight-bold",children:[!0===t?"Ra|":"Raaaaaa|"," "]})}),Object(L.jsxs)("div",{className:"menu ".concat(!0===t?"text-center":""),children:[Object(L.jsxs)(i.b,{to:"/",exact:!0,className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"fas fa-home mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Inicio"})]}),a===H?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(i.b,{to:"/slide",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"fab fa-slideshare mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Slide"})]}),Object(L.jsxs)(i.b,{to:"/articles",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"fas fa-cubes mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Articulos"})]}),Object(L.jsxs)(i.b,{to:"/campaigns",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"fas fa-images mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Campa\xf1as"})]}),Object(L.jsxs)(i.b,{to:"/videos",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"fas fa-video mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Spots"})]}),Object(L.jsxs)(i.b,{to:"/citas",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"fas fa-laptop-medical mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Reserva de citas"})]}),Object(L.jsxs)(i.b,{to:"/suscripciones",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"fas fa-envelope mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Suscripciones"})]})]}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(i.b,{to:"/addcita",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"far fa-calendar-plus mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Agendar una cita"})]}),Object(L.jsxs)(i.b,{to:"/cancelcita",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"far fa-calendar-times mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Cancelar una cita"})]}),Object(L.jsxs)(i.b,{to:"/recita",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"fas fa-sync-alt mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Reagendar una cita"})]}),Object(L.jsxs)(i.b,{to:"/historial",className:"sidebar-item",activeClassName:"sidebar-item-active",children:[Object(L.jsx)("i",{className:"fas fa-calendar-check mr-2 lead"}),Object(L.jsx)("span",{className:!0===t?"d-none":"",children:"Historial de citas"})]})]})]})]})},J=function(){var e=Object(s.d)((function(e){return e.auth})),a=e.name,t=e.avatar,c=Object(s.c)();return Object(L.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light bg-lightu border-bottom",children:[Object(L.jsxs)("span",{className:"navbar-brand mb-0 h1",children:[Object(L.jsx)("span",{className:"btn btn-sm btn-primario shadow-sm mr-1",onClick:function(){c({type:p})},children:Object(L.jsx)("i",{className:"fas fa-bars fa-sm"})}),"Dia, Fecha hora"]}),Object(L.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(L.jsx)("span",{className:"navbar-toggler-icon"})}),Object(L.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:[Object(L.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(L.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(L.jsx)("a",{className:"nav-link ",href:"/#",children:Object(L.jsx)("i",{className:"far fa-envelope fa-lg"})})}),Object(L.jsxs)("li",{className:"nav-item dropdown",children:[Object(L.jsxs)("a",{className:"nav-link dropdown-toggle",href:"/#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(L.jsx)("img",{src:t,alt:"Avatar",className:"img-fuid rounded-circle mr-2 avatar"}),a]}),Object(L.jsxs)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdownMenuLink",children:[Object(L.jsx)("a",{className:"dropdown-item",href:"/#",children:"Mi perfil"}),Object(L.jsx)("div",{className:"dropdown-divider"}),Object(L.jsx)("button",{className:"dropdown-item",type:"button",onClick:function(){c((function(e){localStorage.clear(),e(I())}))},children:"Cerrar Sesi\xf3n"})]})]})]}),Object(L.jsxs)("ul",{className:"navbar-nav",id:"navbar-menu",children:[Object(L.jsx)("li",{className:"nav-item",children:Object(L.jsxs)("a",{href:"/#",className:"nav-link",children:[Object(L.jsx)("i",{className:"fas fa-home mr-2 lead"})," Inicio"]})}),Object(L.jsx)("li",{className:"nav-item",children:Object(L.jsxs)("a",{href:"/#",className:"nav-link",children:[Object(L.jsx)("i",{className:"fab fa-slideshare mr-2 lead"})," Slide"]})}),Object(L.jsx)("li",{className:"nav-item",children:Object(L.jsxs)("a",{href:"/#",className:"nav-link",children:[Object(L.jsx)("i",{className:"fas fa-cubes mr-2 lead"}),"Articulos"]})}),Object(L.jsx)("li",{className:"nav-item",children:Object(L.jsxs)("a",{href:"/#",className:"nav-link",children:[Object(L.jsx)("i",{className:"fas fa-images mr-2 lead"})," Campa\xf1as"]})}),Object(L.jsx)("li",{className:"nav-item",children:Object(L.jsxs)("a",{href:"/#",className:"nav-link",children:[Object(L.jsx)("i",{className:"fas fa-video mr-2 lead"})," Spots"]})}),Object(L.jsx)("li",{className:"nav-item",children:Object(L.jsxs)("a",{href:"/#",className:"nav-link",children:[Object(L.jsx)("i",{className:"fas fa-laptop-medical mr-2 lead"})," Reservas de Citas"]})}),Object(L.jsx)("li",{className:"nav-item",children:Object(L.jsxs)("a",{href:"/#",className:"nav-link",children:[Object(L.jsx)("i",{className:"fas fa-envelope mr-2 lead"})," Suscriptores"]})})]})]})]})},K=(t(65),function(){var e=Object(s.d)((function(e){return e.auth})).rol;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("section",{className:"py-3",children:Object(L.jsx)("div",{className:"container",children:Object(L.jsxs)("div",{className:"row",children:[Object(L.jsx)("div",{className:"col-lg-9",children:Object(L.jsx)("h3",{children:"Bienveniedo Username"})}),Object(L.jsx)("div",{className:"col-lg-3",children:"ra"})]})})}),Object(L.jsx)("section",{children:Object(L.jsx)("div",{className:"container",children:e===H?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{className:"card-group mb-3",children:[Object(L.jsx)("div",{className:"card text-center text-white bg-primario",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"fab fa-slideshare fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Slide"})]})}),Object(L.jsx)("div",{className:"card text-center text-white bg-grisoscuro",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"fas fa-cubes fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Articulos"})]})}),Object(L.jsx)("div",{className:"card text-center text-white bg-celeste",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"fas fa-images fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Campa\xf1as"})]})})]}),Object(L.jsxs)("div",{className:"card-group",children:[Object(L.jsx)("div",{className:"card text-center text-white bg-naranja",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"fas fa-video fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Videos Publictarios"})]})}),Object(L.jsx)("div",{className:"card text-center text-white bg-celesteclaro",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"fas fa-envelope fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Susscripciones"})]})}),Object(L.jsx)("div",{className:"card text-center text-white bg-primary",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"fas fa-laptop-medical fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Citas"})]})})]})]}):Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{className:"card-group mb-3",children:[Object(L.jsx)("div",{className:"card text-center text-white bg-primario",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"far fa-calendar-plus fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Agendar una cita"})]})}),Object(L.jsx)("div",{className:"card text-center text-white bg-grisoscuro",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"far fa-calendar-times fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Cancelar una cita"})]})}),Object(L.jsx)("div",{className:"card text-center text-white bg-naranja",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"fas fa-sync-alt fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Reagendar una cita"})]})}),Object(L.jsx)("div",{className:"card text-center text-white bg-celeste",children:Object(L.jsxs)("div",{className:"card-body",children:[Object(L.jsx)("a",{href:"/#",className:"stretched-link text-white",children:Object(L.jsx)("i",{className:"fas fa-calendar-check fa-5x py-3"})}),Object(L.jsx)("h5",{className:"card-title",children:"Historial de citas"})]})})]})})})})]})}),V=(t(35),function(e){return{type:y,payload:e}}),X=function(e){return{type:k,payload:e}},q=function(){return{type:C}},Q=function(e){return{type:S,payload:e}},Y=function(){return{type:v}},Z=t(32),$=t.n(Z),ee={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};$.a.setAppElement("#root");var ae={title:"",body:"",url:"",imgTitlePreview:"Seleccionar Archivo",image:""},te=function(){var e=Object(s.c)(),a=Object(s.d)((function(e){return e.article})),t=a.articleModal,r=a.activeArticle,n=Object(c.useState)(ae),i=Object(U.a)(n,2),l=i[0],o=i[1],b=l.title,u=l.body,h=(l.url,l.imgTitlePreview),x=l.image;Object(c.useEffect)((function(){r?function(e){return fetch(e).then((function(e){return e.blob()})).then((function(e){return new Promise((function(a,t){var c=new FileReader;c.onloadend=function(){return a(c.result)},c.onerror=t,c.readAsDataURL(e)}))}))}(r.url).then((function(e){var a=function(e,a){for(var t=e.split(","),c=t[0].match(/:(.*?);/)[1],r=atob(t[1]),n=r.length,s=new Uint8Array(n);n--;)s[n]=r.charCodeAt(n);return new File([s],a,{type:c})}(e,"imageName.jpg");o(Object(z.a)(Object(z.a)({},r),{},{image:a}))})):o(ae)}),[r]);var O=function(e){var a=e.target;o(Object(z.a)(Object(z.a)({},l),{},Object(M.a)({},a.name,a.value)))},p=function(){e({type:g}),e({type:w}),o(ae)};return Object(L.jsxs)($.a,{isOpen:t,onRequestClose:p,closeTimeoutMS:200,style:ee,className:"modal",overlayClassName:"modal-fondo",children:[Object(L.jsxs)("h1",{children:[" ",r?"Editar Articulo":"Nuevo Articulo"," "]}),Object(L.jsx)("hr",{}),Object(L.jsxs)("form",{className:"container",onSubmit:function(a){var t;a.preventDefault(),console.log("formva",l),r?e((t={_id:l._id,title:l.title,body:l.body,image:l.image},function(){var e=Object(j.a)(d.a.mark((function e(a){var c,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m.a.fire("Cargando porfavor espere..."),m.a.showLoading(),e.next=5,f("articles/".concat(t._id),t,"PUT");case 5:return c=e.sent,e.next=8,c.json();case 8:(r=e.sent).ok?(a(X({_id:r.articuloActualizado._id,title:r.articuloActualizado.title,body:r.articuloActualizado.body,url:r.articuloActualizado.url})),m.a.fire("Realizado !","El Art\xedculo ha sido actualizado con exito","success")):(n="",Object.entries(r.errors).forEach((function(e){n+=" "+e[1].msg})),m.a.fire("Error",n,"error")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(a){return e.apply(this,arguments)}}())):(console.log("Adding"),e(function(e){return function(){var a=Object(j.a)(d.a.mark((function a(t){var c,r,n,s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,m.a.fire({title:"Cargando...",allowOutsideClick:!1,html:"Porfavor espere"}),m.a.showLoading(),a.next=5,f("articles",e,"POST");case 5:return c=a.sent,a.next=8,c.json();case 8:(r=a.sent).ok?(n={_id:r.articuloGuardado._id,title:r.articuloGuardado.title,body:r.articuloGuardado.body,url:r.articuloGuardado.url},m.a.fire("Realizado !","El Art\xedculo ha sido creado con exito","success"),t(V(n))):(s="",Object.entries(r.errors).forEach((function(e){s+=" "+e[1].msg})),m.a.fire("Error",s,"error")),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.log("Error: ",a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()}({title:l.title,body:l.body,image:l.image}))),p()},children:[Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsx)("label",{children:"Titulo "}),Object(L.jsx)("input",{type:"text",className:"form-control",placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:b,onChange:O}),Object(L.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Contenido",rows:"5",name:"body",value:u,onChange:O})}),Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsxs)("div",{className:"custom-file",children:[Object(L.jsx)("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){console.log(e.target.files);var a=e.target.files[0].name;o(Object(z.a)(Object(z.a)({},l),{},{imgTitlePreview:a,image:e.target.files[0]}))}}),Object(L.jsx)("label",{className:"custom-file-label",htmlFor:"customFile","data-browse":"Elegir",children:h})]}),Object(L.jsx)("div",{className:"d-flex",children:x?Object(L.jsx)("img",{src:URL.createObjectURL(x),id:"previewImage",className:"img-thumbnail mx-auto"}):Object(L.jsx)("div",{className:"mx-auto",children:"Escoga una imagen para subir "})})]}),Object(L.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(L.jsx)("i",{className:"far fa-save"}),Object(L.jsx)("span",{children:" Guardar"})]})]})]})},ce=function(){var e=Object(s.c)();return Object(L.jsx)("div",{children:Object(L.jsxs)("button",{className:"btn btn-celeste fab-button-danger ml-3",onClick:function(){e(function(){var e=Object(j.a)(d.a.mark((function e(a,t){var c,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t().article.activeArticle._id,e.prev=1,e.next=4,x("articles/".concat(c),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(n=e.sent).ok?a(q()):m.a.fire("Error",n.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a,t){return e.apply(this,arguments)}}())},children:[Object(L.jsx)("i",{className:"fas fa-trash"}),Object(L.jsx)("span",{children:" Borrar articulo"})]})})},re=function(e){var a=e._id,t=e.title,c=e.body,r=e.url,n=Object(s.c)(),i=Object(s.d)((function(e){return e.article})).activeArticle;return Object(L.jsx)("div",{className:"col-md-6 col-lg-6 col-xl-3 mb-2",children:Object(L.jsxs)("summary",{className:"card shadow ".concat((null===i||void 0===i?void 0:i._id)===a?"card-active":""),style:{borderRadius:"1rem"},onClick:function(){n({type:N,payload:{_id:a,title:t,body:c,url:r}})},children:[Object(L.jsx)("img",{className:"card-img-top",src:r,alt:"",style:{borderRadius:"1rem 1rem 0 0"}}),Object(L.jsxs)("div",{className:"card-body d-flex align-items-center justify-content-between",children:[Object(L.jsxs)("div",{className:"mr-2",children:[Object(L.jsx)("h5",{className:"card-title",children:t}),Object(L.jsx)("p",{className:"card-text",children:c})]}),Object(L.jsx)("button",{className:"btn btn-transparent shadow-sm",onClick:function(){console.log("Edit"),n(Y())},children:Object(L.jsx)("i",{className:"far fa-edit"})})]})]})})},ne=function(){var e=Object(s.c)(),a=Object(s.d)((function(e){return e.article})),t=a.articles,r=a.activeArticle;return Object(c.useEffect)((function(){e(function(){var e=Object(j.a)(d.a.mark((function e(a){var t,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("articles",{},"GET");case 3:return t=e.sent,e.next=6,t.json();case 6:(c=e.sent).ok&&(r=c.articles,a(Q(r))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())}),[e]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)("div",{className:"container-fluid",children:[Object(L.jsx)("div",{className:"page-article-header",children:Object(L.jsxs)("div",{className:"row align-items-center",children:[Object(L.jsx)("div",{className:"col-sm mb-2 mb-sm-0",children:Object(L.jsx)("h1",{className:"h3",children:"Articulos"})}),Object(L.jsx)("div",{className:"col-sm-auto",children:Object(L.jsxs)("button",{onClick:function(){e(Y())},className:"btn btn-primario rounded-0",children:[Object(L.jsx)("i",{className:"fas fa-plus"})," A\xf1adir articulo"]})})]})}),Object(L.jsx)("div",{className:"row",children:t.map((function(e){return Object(L.jsx)(re,Object(z.a)({},e),e._id)}))})]}),Object(L.jsx)(te,{}),r&&Object(L.jsx)(ce,{})]})},se=t(41),ie=function(e){return{type:E,payload:e}},le=function(e){return{type:A,payload:{_id:e}}},oe=function(e){return{type:_,payload:e}},de=function(e){var a=e._id,t=e.url,c=e.provided,r=e.innerRef,n=Object(s.c)(),i=function(e){n(function(e){return function(){var a=Object(j.a)(d.a.mark((function a(t){var c,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,m.a.fire({title:"Eliminando...",allowOutsideClick:!1,html:"Porfavor espere"}),a.next=4,x("campaigns/".concat(e),{},"DELETE");case 4:return c=a.sent,a.next=7,c.json();case 7:(r=a.sent).ok?(t(le(e)),m.a.fire("Realizado !","Campa\xf1a eliminada exitosamente","success")):m.a.fire("Error",r.msg,"error"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(e))};return console.log(c),Object(L.jsx)("div",Object(z.a)(Object(z.a)(Object(z.a)({className:"mb-2",ref:r},c.draggableProps),c.dragHandleProps),{},{children:Object(L.jsxs)("div",{className:"card shadow",style:{borderRadius:"1rem",height:"200px",width:"200px",overflow:"hidden"},children:[Object(L.jsx)("img",{className:"card-img",src:t,alt:"",style:{borderRadius:"1rem"}}),Object(L.jsx)("div",{className:"card-img-overlay  d-flex align-items-start",style:{padding:0},children:Object(L.jsx)("button",{className:"btn btn-danger shadow-sm ml-auto",onClick:function(){return i(a)},children:Object(L.jsx)("i",{className:"fas fa-trash"})})})]})}))},je=t(25),be={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},me={borderColor:"#2196f3"},ue={borderColor:"#00e676"},he={borderColor:"#ff1744"},xe={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},Oe={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},fe={display:"flex",minWidth:0,overflow:"hidden"},pe={display:"block",width:"auto",height:"100%"},ve=function(){var e,a=Object(s.c)(),t=Object(s.d)((function(e){return e.campaign})).campaigns,r=Object(c.useState)((e=10,Array.from({length:e},(function(e,a){return a})).map((function(e){return{id:"item-".concat(e),content:"item ".concat(e)}})))),n=Object(U.a)(r,2),i=(n[0],n[1],Object(c.useState)()),l=Object(U.a)(i,2),o=(l[0],l[1],Object(c.useState)([])),b=Object(U.a)(o,2),u=b[0],h=b[1],O=Object(se.a)({accept:"image/*",maxFiles:1,onDrop:function(e){h(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),p=O.getRootProps,v=O.getInputProps,g=O.isDragActive,N=O.isDragAccept,y=O.isDragReject,w=(O.acceptedFiles,Object(c.useMemo)((function(){return Object(z.a)(Object(z.a)(Object(z.a)(Object(z.a)({},be),g?me:{}),N?ue:{}),y?he:{})}),[g,y,N])),k=u.map((function(e){return Object(L.jsx)("div",{style:Oe,children:Object(L.jsx)("div",{style:fe,children:Object(L.jsx)("img",{src:e.preview,style:pe})})},e.name)}));Object(c.useEffect)((function(){a(function(){var e=Object(j.a)(d.a.mark((function e(a){var t,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("campaigns",{},"GET");case 3:return t=e.sent,e.next=6,t.json();case 6:(c=e.sent).ok&&(r=c.campaigns,a(oe(r))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}())}),[a]);return Object(L.jsxs)("section",{className:"",children:[Object(L.jsx)("div",{className:"container-fluid",children:Object(L.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),console.log(u[0]),a((t={image:u[0]},function(){var e=Object(j.a)(d.a.mark((function e(a){var c,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m.a.fire({title:"Cargando...",allowOutsideClick:!1,html:"Porfavor espere"}),m.a.showLoading(),e.next=5,f("campaigns",t,"POST");case 5:return c=e.sent,e.next=8,c.json();case 8:(r=e.sent).ok?(m.a.fire("Realizado !","La campa\xf1a  ha sido creado con exito","success"),a(ie(r.campaignGuardado))):(n="",Object.entries(r.errors).forEach((function(e){n+=" "+e[1].msg})),m.a.fire("Error",n,"error")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(a){return e.apply(this,arguments)}}())),h([])},children:[Object(L.jsxs)("div",Object(z.a)(Object(z.a)({},p({style:w})),{},{children:[Object(L.jsx)("input",Object(z.a)({},v())),Object(L.jsx)("p",{children:"Arrastre la imagen aca, o haga para click para Seleccionar"})]})),Object(L.jsx)("aside",{style:xe,children:k}),u.length>0?Object(L.jsx)("button",{type:"submit",className:"btn btn-primario rounded-0",children:"Subir imagen"}):""]})}),Object(L.jsx)("div",{className:"container-fluid mt-3",children:Object(L.jsx)(je.a,{onDragEnd:function(e){if(console.log(e),e.destination){var c=function(e,a,t){var c=Array.from(e),r=c.splice(a,1),n=Object(U.a)(r,1)[0];return c.splice(t,0,n),c}(t,e.source.index,e.destination.index);a(oe(c))}},children:Object(L.jsx)(je.c,{droppableId:"campaigns",direction:"horizontal",children:function(e){return Object(L.jsxs)("div",Object(z.a)(Object(z.a)({className:"d-flex",style:{border:"4px dashed",overflow:"auto"}},e.droppableProps),{},{ref:e.innerRef,children:[t.map((function(e,a){return Object(L.jsx)(je.b,{draggableId:e._id,index:a,children:function(a){return Object(L.jsx)(de,Object(z.a)({innerRef:a.innerRef,provided:a},e))}},e._id)})),e.placeholder]}))}})})})]})},ge=function(e){var a=e.boxColor,t=e.boxNumber,c=e.handleDrag,r=e.handleDrop,n=e.image;return Object(L.jsx)("div",{className:"col-md-6 col-lg-4 col-xl-3 box",draggable:!0,id:t,onDragOver:function(e){return e.preventDefault()},onDragStart:c,onDrop:r,children:Object(L.jsx)("div",{className:"box-image",style:{backgroundColor:a,borderColor:a},children:Object(L.jsx)("img",{src:n,alt:"ias",style:{},className:"img-fluid"})})})},Ne=(t(75),function(){var e=Object(c.useState)(),a=Object(U.a)(e,2),t=a[0],r=a[1],n=Object(c.useState)([{id:"Box-1",color:"red",order:1,image:"/images/slide112.jpg"},{id:"Box-2",color:"green",order:2,image:"/images/slide783.jpg"},{id:"Box-3",color:"blue",order:3,image:"/images/slide896.jpg"},{id:"Box-4",color:"green",order:4,image:"/images/slide112.jpg"},{id:"Box-5",color:"green",order:5,image:"/images/slide112.jpg"}]),s=Object(U.a)(n,2),i=s[0],l=s[1],o=function(e){r(e.currentTarget.id),console.log(e.currentTarget.id)},d=function(e){var a=i.find((function(e){return e.id===t})),c=i.find((function(a){return a.id===e.currentTarget.id})),r=a.order,n=c.order,s=i.map((function(a){return a.id===t&&(a.order=n),a.id===e.currentTarget.id&&(a.order=r),a}));l(s)};return console.log(i),Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("section",{className:"images-box-container m-3",children:Object(L.jsx)("section",{className:"container-fluid",children:Object(L.jsx)("div",{className:"row",children:i.sort((function(e,a){return e.order-a.order})).map((function(e){return Object(L.jsx)(ge,{boxColor:e.color,boxNumber:e.id,image:e.image,handleDrag:o,handleDrop:d},e.id)}))})})})})}),ye=function(){return Object(L.jsxs)("div",{className:"container",children:[Object(L.jsx)("h3",{children:"Agendar una nueva cita"}),Object(L.jsx)("form",{})]})},we=function(){return Object(L.jsx)("div",{children:"CancelCita"})},ke=function(){return Object(L.jsx)("div",{children:"Historial"})},Ce=function(){return Object(L.jsx)("div",{children:"Re cita"})},Se=function(){var e=Object(s.d)((function(e){return e.auth})).rol;return console.log(e===H),Object(L.jsxs)("div",{className:"d-flex",id:"dashboard",children:[Object(L.jsx)(W,{rol:e}),Object(L.jsxs)("div",{className:"w-100",children:[Object(L.jsx)(J,{}),Object(L.jsx)("div",{id:"content",children:e===H?Object(L.jsxs)(l.d,{children:[Object(L.jsx)(l.b,{exact:!0,path:"/",component:K,rol:e}),Object(L.jsx)(l.b,{exact:!0,path:"/articles",component:ne}),Object(L.jsx)(l.b,{exact:!0,path:"/slide",component:Ne}),Object(L.jsx)(l.b,{exact:!0,path:"/campaigns",component:ve}),Object(L.jsx)(l.a,{to:"/"})]}):Object(L.jsxs)(l.d,{children:[Object(L.jsx)(l.b,{exact:!0,path:"/",component:K,rol:e}),Object(L.jsx)(l.b,{exact:!0,path:"/addcita",component:ye}),Object(L.jsx)(l.b,{exact:!0,path:"/recita",component:Ce}),Object(L.jsx)(l.b,{exact:!0,path:"/cancelcita",component:we}),Object(L.jsx)(l.b,{exact:!0,path:"/historial",component:ke}),Object(L.jsx)(l.a,{to:"/"})]})})]})]})},Ee=t(24),Ae=function(e){var a=e.isAuthenticated,t=e.component,c=Object(Ee.a)(e,["isAuthenticated","component"]);return Object(L.jsx)(l.b,Object(z.a)(Object(z.a)({},c),{},{component:function(e){return a?Object(L.jsx)(t,Object(z.a)({},e)):Object(L.jsx)(l.a,{to:"/login"})}}))},_e=function(e){var a=e.isAuthenticated,t=e.component,c=Object(Ee.a)(e,["isAuthenticated","component"]);return console.log(a),Object(L.jsx)(l.b,Object(z.a)(Object(z.a)({},c),{},{component:function(e){return a?Object(L.jsx)(l.a,{to:"/"}):Object(L.jsx)(t,Object(z.a)({},e))}}))},Re=function(){var e=Object(s.c)(),a=Object(s.d)((function(e){return e.auth})),t=a.checking,r=a.uid;return Object(c.useEffect)((function(){e(function(){var e=Object(j.a)(d.a.mark((function e(a){var t,c,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth/renew",{});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),r=c.avatar,n=r.replace(/\/upload\//,"/upload/c_scale,w_30,h_30/"),a(F({uid:c.uid,name:c.name,rol:c.rol,avatar:n}))):a(P());case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[e]),t?Object(L.jsx)(G,{}):Object(L.jsx)(i.a,{children:Object(L.jsx)("div",{children:Object(L.jsxs)(l.d,{children:[Object(L.jsx)(_e,{exact:!0,path:"/login",component:B,isAuthenticated:!!r}),Object(L.jsx)(Ae,{path:"/",component:Se,isAuthenticated:!!r}),Object(L.jsx)(l.a,{to:"/"})]})})})},Te=t(15),De=t(40),Pe=t(19),Fe={articles:[],activeArticle:null,articleModal:!1},Ie={checking:!0},Le={campaigns:[]},Ge={toggleSidebar:!1},Ue=Object(Te.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case T:return Object(z.a)(Object(z.a)({},e),{},{checking:!1},a.payload);case R:return Object(z.a)(Object(z.a)({},e),{},{checking:!1});case D:return{checking:!1};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case p:return Object(z.a)(Object(z.a)({},e),{},{toggleSidebar:!e.toggleSidebar});default:return e}},article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return Object(z.a)(Object(z.a)({},e),{},{activeArticle:a.payload});case y:return Object(z.a)(Object(z.a)({},e),{},{articles:[].concat(Object(Pe.a)(e.articles),[a.payload])});case w:return Object(z.a)(Object(z.a)({},e),{},{activeArticle:null});case k:return Object(z.a)(Object(z.a)({},e),{},{articles:e.articles.map((function(e){return e._id===a.payload._id?a.payload:e}))});case C:return Object(z.a)(Object(z.a)({},e),{},{articles:e.articles.filter((function(a){return a._id!==e.activeArticle._id})),activeArticle:null});case S:return Object(z.a)(Object(z.a)({},e),{},{articles:Object(Pe.a)(a.payload)});case v:return Object(z.a)(Object(z.a)({},e),{},{articleModal:!0});case g:return Object(z.a)(Object(z.a)({},e),{},{articleModal:!1});default:return e}},campaign:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(z.a)(Object(z.a)({},e),{},{campaigns:[].concat(Object(Pe.a)(e.campaigns),[a.payload])});case A:return Object(z.a)(Object(z.a)({},e),{},{campaigns:e.campaigns.filter((function(e){return e._id!==a.payload._id}))});case _:return Object(z.a)(Object(z.a)({},e),{},{campaigns:Object(Pe.a)(a.payload)});default:return e}}}),Me="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Te.d,ze=Object(Te.e)(Ue,Me(Object(Te.a)(De.a))),Be=function(){return Object(L.jsx)(s.a,{store:ze,children:Object(L.jsx)(Re,{})})};n.a.render(Object(L.jsx)(Be,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.21ce2c0c.chunk.js.map