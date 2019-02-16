webpackJsonp([1],{"30Qg":function(t,e){},"4sEm":function(t,e,a){t.exports=a.p+"static/img/logo-huerta.b226b99.png"},"75Xi":function(t,e){},"7GL2":function(t,e){},"7zck":function(t,e){},MSqk:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("v-content",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(t){a("30Qg")},null,null).exports,o=a("NYxO");n.default.use(o.a);var s=new o.a.Store({state:{proyecto:"hola desde vuex",idReunion:""},mutations:{guardarProyecto:function(t,e){t.proyecto=e},setIdReunion:function(t,e){t.idReunion=e}},getters:{proyecto:function(t){return t.proyecto},idReunion:function(t){return t.idReunion}}}),c=a("/ocq"),l=a("woOf"),d=a.n(l),u=a("mtWM"),v=a.n(u),m=a("//Fk"),f=a.n(m),p={data:function(){return{dialog:!1,resolve:null,reject:null,message:null,title:null,options:{color:"primary",width:290,zIndex:200}}},methods:{open:function(t,e,a){var n=this;return this.dialog=!0,this.title=t,this.message=e,this.options=d()(this.options,a),new f.a(function(t,e){n.resolve=t,n.reject=e})},agree:function(){this.resolve(!0),this.dialog=!1},cancel:function(){this.resolve(!1),this.dialog=!1}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{style:{zIndex:t.options.zIndex},attrs:{"max-width":t.options.width},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.cancel(e):null}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:t.options.color,dense:"",flat:""}},[a("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.title))])],1),t._v(" "),a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!t.message,expression:"!!message"}]},[t._v(t._s(t.message))]),t._v(" "),a("v-card-actions",{staticClass:"pt-0"},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary darken-1",flat:"flat"},nativeOn:{click:function(e){return t.agree(e)}}},[t._v("Eliminar")]),t._v(" "),a("v-btn",{attrs:{color:"grey",flat:"flat"},nativeOn:{click:function(e){return t.cancel(e)}}},[t._v("Cancelar")])],1)],1)],1)},staticRenderFns:[]},h=a("VU/8")(p,g,!1,null,null,null).exports,_={name:"Proyectos",components:{Confirm:h},data:function(){return{search:"",dialog:!1,valid:!0,date:"",menu:!1,reglasNombre:[function(t){return!!t||"El nombre es requerido."}],reglasArea:[function(t){return!!t||"El área es requerida."}],reglasFecha:[function(t){return!!t||"La fecha es requerida."}],headers:[{text:"Proyecto",align:"center",sortable:!1,value:"nombre"},{text:"Área",align:"center",value:"area",sortable:!1},{text:"Fecha",align:"center",value:"fecha",sortable:!1},{text:"Reuniones",align:"center",value:"proyecto",sortable:!1},{text:"Acciones",align:"center",value:"proyecto",sortable:!1}],rowsPerPageItems:[5,10,20],totalProyectos:0,proyectos:[],loading:!0,pagination:{},editedIndex:-1,editedItem:{nombre:"",area:"",fecha:"",reuniones:[]},defaultItem:{nombre:"",area:"",fecha:"",reuniones:[]}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Proyecto":"Editar Proyecto"}},watch:{dialog:function(t){t||this.close(),this.$refs.form.resetValidation()},pagination:{handler:function(){this.getDatosPaginados()}},search:{handler:function(){this.getDatosPaginados()}}},mounted:function(){this.date=this.getfechaHoy(),this.editedItem.fecha=this.date,this.defaultItem.fecha=this.date},created:function(){},methods:{initialize:function(){},getDatosPaginados:function(){var t=this;this.loading=!0;var e=this.pagination.rowsPerPage,a=this.pagination.page-1,n=this.search;v.a.get("/proyectos/proyectospaginados?page="+a+"&size="+e+"&filter="+n).then(function(e){t.proyectos=e.data.content,t.totalProyectos=e.data.totalElements}).catch(function(t){return console.log(t)}).finally(function(){t.loading=!1})},editItem:function(t){this.editedIndex=this.proyectos.indexOf(t),this.editedItem=d()({},t),this.dialog=!0},deleteItem:function(t){var e=this;this.$refs.confirm.open("Eliminar","¿Está seguro?",{color:"primary"}).then(function(a){var n=e.proyectos.indexOf(t);a&&(e.proyectos.splice(n,1),v.a.delete("/proyectos/proyecto/"+t.id).then(function(){e.totalProyectos=e.totalProyectos-1}))})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=d()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=this;this.$refs.form.validate()&&(this.editedIndex>-1?(console.log("Es una edición"),d()(this.proyectos[this.editedIndex],this.editedItem),v.a.put("/proyectos/",this.proyectos[this.editedIndex])):(console.log("Es un nuevo proyecto."),v.a.post("/proyectos/",this.editedItem).then(function(e){t.proyectos.push(e.data),t.totalProyectos=t.totalProyectos+1}).catch(function(e){t.errors.push(e)})),this.close())},proyectoSeleccionado:function(t){this.$store.commit("guardarProyecto",t),this.$router.push("reuniones")},getfechaHoy:function(){var t=new Date;return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toJSON().slice(0,10)}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("confirm",{ref:"confirm"}),t._v(" "),n("v-toolbar",{staticClass:"relieve-toolbar",attrs:{flat:""}},[n("img",{staticStyle:{height:"73%"},attrs:{src:a("4sEm"),alt:"La Huerta"}})]),t._v(" "),n("v-container",[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.dialog=!1}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary"},slot:"activator"},[t._v("Nuevo Proyecto")]),t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-text-field",{attrs:{rules:t.reglasNombre,name:"nombre",label:"Nombre",required:""},model:{value:t.editedItem.nombre,callback:function(e){t.$set(t.editedItem,"nombre",e)},expression:"editedItem.nombre"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("v-text-field",{attrs:{rules:t.reglasArea,label:"Área",required:""},model:{value:t.editedItem.area,callback:function(e){t.$set(t.editedItem,"area",e)},expression:"editedItem.area"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Seleccione la fecha:","prepend-icon":"event",readonly:"",rules:t.reglasFecha},slot:"activator",model:{value:t.editedItem.fecha,callback:function(e){t.$set(t.editedItem,"fecha",e)},expression:"editedItem.fecha"}}),t._v(" "),n("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.editedItem.fecha,callback:function(e){t.$set(t.editedItem,"fecha",e)},expression:"editedItem.fecha"}})],1)],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancelar")]),t._v(" "),n("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Guardar")])],1)],1)],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.proyectos,pagination:t.pagination,"total-items":t.totalProyectos,"rows-per-page-items":t.rowsPerPageItems,loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.nombre))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.area))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.fecha))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("v-btn",{staticClass:"primary",on:{click:function(a){t.proyectoSeleccionado(e.item)}}},[n("v-icon",{attrs:{dark:""}},[t._v("visibility")])],1)],1),t._v(" "),n("td",{staticClass:"justify-center layout px-0"},[n("v-icon",{staticClass:"mr-2",attrs:{medium:"",color:"black"},on:{click:function(a){t.editItem(e.item)}}},[t._v("\n          edit\n        ")]),t._v(" "),n("v-icon",{attrs:{medium:"",color:"error"},on:{click:function(a){t.deleteItem(e.item)}}},[t._v("\n          delete\n        ")])],1)]}}])},[n("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n      Su búsqueda para "'+t._s(t.search)+'" no entregó resultados.\n    ')]),t._v(" "),n("template",{attrs:{value:!0,color:"error",icon:"warning"},slot:"no-data"},[t._v("\n      Lo sentimos, no hay proyectos que mostrar.\n    ")])],2)],1)],1)},staticRenderFns:[]};var b=a("VU/8")(_,x,!1,function(t){a("q6vK")},"data-v-1b7c20fe",null).exports,y=a("2Pnh"),k=a.n(y),I=a("l9mu"),w={name:"Reuniones",components:{Confirm:h},data:function(){return{search:"",valid:!0,proyecto:"",loading:!0,rowsPerPageItems:[5,10,20],dialog_descarga:!1,totalReuniones:0,pagination:{},reunion:{id:"",objetivo:"",fecha:"",participantes:[]},headers:[{text:"Objetivo",align:"center",sortable:!1,value:"objetivo"},{text:"Fecha",align:"center",sortable:!1,value:"fecha"},{text:"Acciones",align:"center",value:"reunion",sortable:!1},{text:"Descargar",align:"center",value:"reunion",sortable:!1}],headers_print:[{text:"No. Nómina",align:"center",sortable:!1,value:"nomina",class:["grey lighten-3","black--text"]},{text:"Nombre",align:"center",value:"nombre",sortable:!1,class:["grey lighten-3","black--text"]},{text:"Rol/Puesto",align:"center",value:"fecha",sortable:!1,class:["grey lighten-3","black--text"]},{text:"Área",align:"center",value:"rol",sortable:!1,class:["grey lighten-3","black--text"]},{text:"Firma",align:"center",value:"area",sortable:!1,class:["grey lighten-3","black--text"]}]}},computed:{formTitle:function(){return-1===this.editedIndex?"Nueva Reunión":"Editar Reunión"}},watch:{},mounted:function(){},created:function(){this.proyecto=this.$store.getters.proyecto,this.loading=!1},methods:{initialize:function(){},deleteItem:function(t){var e=this;this.$refs.confirm.open("Eliminar","¿Está seguro?",{color:"primary"}).then(function(a){var n=e.proyecto.reuniones.indexOf(t);a&&(e.proyecto.reuniones.splice(n,1),e.$store.commit("guardarProyecto",e.proyecto),v.a.put("/proyectos/",e.proyecto))})},reunionSeleccionada:function(t){this.$store.commit("setIdReunion",t.id),this.$router.push("reunion")},nuevaReunion:function(){this.$router.push("reunion")},descargaDirecta:function(t){this.reunion=t,this.dialog_descarga=!0},solicitarFirmas:function(t){this.$store.commit("setIdReunion",t),this.$router.push("firmar")},resizeCanvas:function(){var t=Math.max(window.devicePixelRatio||1,1);this.canvas.width=this.canvas.offsetWidth*t,this.canvas.height=this.canvas.offsetHeight*t,this.canvas.getContext("2d").scale(t,t),this.signaturePad.clear()},getImgUrl:function(t){return t},descargarPase:function(t){"png"===t?k()(document.querySelector("#pase-de-lista"),{onclone:function(t){t.getElementById("pase-de-lista").style.display="block"}}).then(function(t){var e=t.toDataURL("image/png").replace("image/png","image/octet-stream"),a=document.createElement("a"),n=new Date;n.setMinutes(n.getMinutes()-n.getTimezoneOffset()),n.toISOString().slice(0,10),a.download=n.toJSON().slice(0,10).replace(/-/g,".")+".png",a.href=e,a.click()}):"pdf"===t&&k()(document.querySelector("#pase-de-lista"),{onclone:function(t){t.getElementById("pase-de-lista").style.display="block"}}).then(function(t){var e=t.toDataURL("image/png"),a=new I({orientation:"landscape"}),n=new Date;n.setMinutes(n.getMinutes()-n.getTimezoneOffset()),n.toISOString().slice(0,10);var i=n.toJSON().slice(0,10).replace(/-/g,".")+".pdf";a.addImage(e,"PNG",0,0),a.save(i)})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("confirm",{ref:"confirm"}),t._v(" "),n("v-toolbar",{staticClass:"elevation-0"},[n("v-btn",{attrs:{icon:"",to:"/"}},[n("v-icon",[t._v("arrow_back")])],1),t._v(" "),n("v-toolbar-title")],1),t._v(" "),n("v-container",[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"}},[n("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},on:{click:function(e){t.nuevaReunion()}},slot:"activator"},[t._v("\n            Nueva Reunion\n            ")])],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.proyecto.reuniones,pagination:t.pagination,"total-items":t.totalReuniones,"rows-per-page-items":t.rowsPerPageItems,loading:t.loading,search:t.search},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.objetivo))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.fecha))]),t._v(" "),n("td",{staticClass:"justify-center layout px-0"},[n("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(a){t.solicitarFirmas(e.item.id)}}},[t._v("\n              Firmar\n            ")]),t._v(" "),n("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:function(a){t.reunionSeleccionada(e.item)}}},[t._v("\n              Editar\n            ")]),t._v(" "),n("v-icon",{attrs:{medium:"",color:"error"},on:{click:function(a){t.deleteItem(e.item)}}},[t._v("\n              delete\n            ")])],1),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("v-btn",{staticClass:"accent",attrs:{dark:""},on:{click:function(a){t.descargaDirecta(e.item)}}},[t._v("\n              Descargar\n            ")])],1)]}}])},[n("v-alert",{attrs:{slot:"no-results",value:!0,color:"error"},slot:"no-results"},[t._v('\n          Su búsqueda para "'+t._s(t.search)+'" no entregó resultados.\n        ')]),t._v(" "),n("template",{attrs:{value:!0,color:"error"},slot:"no-data"},[t._v("\n          Lo sentimos, no hay reuniones que mostrar.\n        ")])],2)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.dialog_descarga=!1}},model:{value:t.dialog_descarga,callback:function(e){t.dialog_descarga=e},expression:"dialog_descarga"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(" Descargar")])]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("p",[t._v("Seleccione su formato de descarga:")])])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-layout",{attrs:{row:"",wrap:"","pb-3":""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("v-btn",{attrs:{large:"",color:"primary"},on:{click:function(e){t.descargarPase("png")}}},[n("v-icon",[t._v("image")]),t._v(" .PNG\n            ")],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("v-btn",{attrs:{large:"",color:"error"},on:{click:function(e){t.descargarPase("pdf")}}},[n("v-icon",[t._v("picture_as_pdf")]),t._v(" .PDF\n            ")],1)],1)],1)],1)],1),t._v(" "),n("v-container",{staticClass:"fluid page pt-0",attrs:{id:"pase-de-lista"}},[n("v-container",{staticClass:"pa-0 mt-3",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md12:""}},[n("h3",[t._v("HOJA DE REGISTRO")])])],1),t._v(" "),n("v-form",{ref:"form_reunion"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md9:""}},[n("v-text-field",{attrs:{value:"Objetivo: "+t.reunion.objetivo,readonly:""}})],1),t._v(" "),n("v-flex",{attrs:{md3:""}},[n("v-text-field",{attrs:{value:"Fecha: "+t.reunion.fecha,readonly:""}})],1)],1)],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers_print,items:t.reunion.participantes,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.nomina))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.nombre))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.rol))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.area))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("img",{attrs:{src:e.item.firma,alt:e.item.firma,width:"100",height:"auto"}})])]}}])}),t._v(" "),n("v-container",{staticClass:"pa-0 ma-0 grid-list-md",attrs:{id:"footer-pase-de-lista"}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})]),t._v(" "),n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})]),t._v(" "),n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})]),t._v(" "),n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})]),t._v(" "),n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})])],1)],1)],1)],1)},staticRenderFns:[]};var P=a("VU/8")(w,C,!1,function(t){a("MSqk")},"data-v-58f624a0",null).exports,R=a("WbHO"),A=a.n(R),E={name:"Reunion",components:{Confirm:h},data:function(){return{search:"",dialog:!1,valid:!0,date:"",menu:!1,proyecto:"",reunion:{id:"",objetivo:"",fecha:"",participantes:[]},objetivoRules:[function(t){return!!t||"El objetivo es requerido."}],fechaReunionRules:[function(t){return!!t||"La fecha es requerida."}],reglasNomina:[function(t){return!!t||"El número de nómina es requerido"},function(t){return/^-?\d*$/.test(t)||"Solo ingrese números."}],reglasNombre:[],reglasRol:[],reglasArea:[],loading:!0,headers:[{text:"No. Nómina",align:"center",sortable:!1,value:"nomina"},{text:"Nombre",align:"center",value:"nombre"},{text:"Rol/Puesto",align:"center",value:"fecha"},{text:"Área",align:"center",value:"rol",sortable:!1},{text:"Firma",align:"center",value:"area",sortable:!1},{text:"Acciones",align:"center",value:"firma",sortable:!1}],totalParticipantes:0,editedIndex:-1,editedItem:{nomina:"",nombre:"",rol:"",area:""},defaultItem:{nomina:"",nombre:"",rol:"",area:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Participante":"Editar Participante"}},watch:{dialog:function(t){t||this.close(),this.$refs.form.resetValidation()}},mounted:function(){},created:function(){this.proyecto=this.$store.getters.proyecto;var t=this.$store.getters.idReunion;""!==t?this.reunion=this.proyecto.reuniones.find(function(e){return e.id===t}):(this.date=this.getfechaHoy(),this.reunion.fecha=this.date,this.reunion.fecha=this.date)},methods:{initialize:function(){},editItem:function(t){this.editedIndex=this.reunion.participantes.indexOf(t),this.editedItem=d()({},t),this.dialog=!0},deleteItem:function(t){var e=this,a=this.reunion.participantes.indexOf(t);this.$refs.confirm.open("Eliminar","¿Está seguro?",{color:"primary"}).then(function(t){t&&e.reunion.participantes.splice(a,1)})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=d()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){this.$refs.form_reunion.validate()&&(console.log(this.proyecto),""===this.reunion.id&&(this.reunion.id=A()().toHexString(),this.proyecto.reuniones.push(this.reunion)),this.$store.commit("guardarProyecto",this.proyecto),this.$store.commit("setIdReunion",""),v.a.put("/proyectos/",this.proyecto),this.$router.push("reuniones"))},guardarParticipante:function(){this.$refs.form.validate()&&(this.editedIndex>-1?d()(this.reunion.participantes[this.editedIndex],this.editedItem):this.reunion.participantes.push(this.editedItem),this.close())},volver:function(){this.$store.commit("setIdReunion",""),this.$router.push("reuniones")},getfechaHoy:function(){var t=new Date;return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toJSON().slice(0,10)}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("confirm",{ref:"confirm"}),t._v(" "),a("v-toolbar",{staticClass:"elevation-0"},[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.volver()}}},[a("v-icon",[t._v("arrow_back")])],1),t._v(" "),a("v-toolbar-title")],1),t._v(" "),a("v-container",[a("h2",{staticClass:"text-sm-left mb-1"},[t._v("Detalle Reunión")]),t._v(" "),a("v-container",{staticClass:"pr-0 pl-0",attrs:{"grid-list-md":""}},[a("v-form",{ref:"form_reunion"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md6:""}},[a("v-text-field",{attrs:{rules:t.objetivoRules,label:"Objetivo",required:""},model:{value:t.reunion.objetivo,callback:function(e){t.$set(t.reunion,"objetivo",e)},expression:"reunion.objetivo"}})],1),t._v(" "),a("v-flex",{attrs:{md6:""}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Seleccione la fecha:","prepend-icon":"event",readonly:"",rules:t.fechaReunionRules},slot:"activator",model:{value:t.reunion.fecha,callback:function(e){t.$set(t.reunion,"fecha",e)},expression:"reunion.fecha"}}),t._v(" "),a("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.reunion.fecha,callback:function(e){t.$set(t.reunion,"fecha",e)},expression:"reunion.fecha"}})],1)],1),t._v(" "),a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Guardar")])],1)],1)],1),t._v(" "),a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("h2",{staticClass:"text-sm-left mb-1"},[t._v("Participantes")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{"max-width":"500px"},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.dialog=!1}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Nuevo participante")]),t._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("v-text-field",{attrs:{rules:t.reglasNomina,label:"No. Nómina",required:""},model:{value:t.editedItem.nomina,callback:function(e){t.$set(t.editedItem,"nomina",e)},expression:"editedItem.nomina"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("v-text-field",{attrs:{rules:t.reglasNombre,label:"Nombre",required:""},model:{value:t.editedItem.nombre,callback:function(e){t.$set(t.editedItem,"nombre",e)},expression:"editedItem.nombre"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("v-text-field",{attrs:{rules:t.reglasRol,label:"Rol",required:""},model:{value:t.editedItem.rol,callback:function(e){t.$set(t.editedItem,"rol",e)},expression:"editedItem.rol"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("v-text-field",{attrs:{rules:t.reglasArea,label:"Área/Departamento",required:""},model:{value:t.editedItem.area,callback:function(e){t.$set(t.editedItem,"area",e)},expression:"editedItem.area"}})],1)],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"secondary"},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancelar")]),t._v(" "),a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.guardarParticipante(e)}}},[t._v("Guardar")])],1)],1)],1)],1),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.reunion.participantes,search:t.search,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.nomina))]),t._v(" "),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.nombre))]),t._v(" "),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.rol))]),t._v(" "),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.area))]),t._v(" "),a("td",{staticClass:"text-xs-center"},[a("img",{attrs:{src:e.item.firma,alt:e.item.firma,width:"100",height:"auto"}})]),t._v(" "),a("td",{staticClass:"justify-center layout px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{medium:""},on:{click:function(a){t.editItem(e.item)}}},[t._v("\n                edit\n              ")]),t._v(" "),a("v-icon",{attrs:{medium:""},on:{click:function(a){t.deleteItem(e.item)}}},[t._v("\n                delete\n              ")])],1)]}}])},[a("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n            Su búsqueda para "'+t._s(t.search)+'" no entregó resultados.\n          ')]),t._v(" "),a("template",{attrs:{value:!0,color:"error"},slot:"no-data"},[t._v("\n            Lo sentimos, no hay participantes que mostrar.\n          ")])],2)],1)],1)},staticRenderFns:[]};var S=a("VU/8")(E,N,!1,function(t){a("7GL2")},"data-v-ed0162be",null).exports,O=a("n6Vz"),G={name:"Reunion",data:function(){return{errors:"",search:"",signaturePad:"",canvas:"",dialog:!1,dialog_descarga:!1,valid:!0,noNomina:"",proyecto:"",reunion:{id:"",objetivo:"",fecha:"",participantes:[]},objetivoRules:[function(t){return!!t||"El objetivo es requerido."}],fechaReunionRules:[function(t){return!!t||"La fecha es requerida."}],reglasNomina:[function(t){return!!t||"El número de nómina es requerido"},function(t){return/^-?\d*$/.test(t)||"Solo ingrese números."}],reglasNombre:[],reglasRol:[],reglasArea:[],loading:!0,headers:[{text:"No. Nómina",align:"center",sortable:!1,value:"nomina"},{text:"Nombre",align:"center",value:"nombre",sortable:!1},{text:"Rol/Puesto",align:"center",value:"fecha",sortable:!1},{text:"Área",align:"center",value:"rol",sortable:!1},{text:"Firma",align:"center",value:"area",sortable:!1},{text:"",align:"center",value:"area",sortable:!1}],headers_print:[{text:"No. Nómina",align:"center",sortable:!1,value:"nomina",class:["grey lighten-3","black--text"]},{text:"Nombre",align:"center",value:"nombre",sortable:!1,class:["grey lighten-3","black--text"]},{text:"Rol/Puesto",align:"center",value:"fecha",sortable:!1,class:["grey lighten-3","black--text"]},{text:"Área",align:"center",value:"rol",sortable:!1,class:["grey lighten-3","black--text"]},{text:"Firma",align:"center",value:"area",sortable:!1,class:["grey lighten-3","black--text"]}],totalParticipantes:0,editedIndex:-1,editedItem:{nomina:"",nombre:"",rol:"",area:""},defaultItem:{nomina:"",nombre:"",rol:"",area:""}}},computed:{formTitle:function(){return"Ingrese su firma"}},watch:{dialog:function(t){t||this.close()}},mounted:function(){this.canvas=document.querySelector("canvas"),this.signaturePad=new O.a(document.getElementById("signature-pad"),{backgroundColor:"rgba(0, 0, 0, 0)",penColor:"rgb(0, 0, 0)",minWidth:.5,maxWidth:1.5})},created:function(){this.proyecto=this.$store.getters.proyecto;var t=this.$store.getters.idReunion;""!==t&&(this.reunion=this.proyecto.reuniones.find(function(e){return e.id===t}))},methods:{initialize:function(){},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=d()({},t.defaultItem),t.editedIndex=-1},300)},activarDialog:function(t){this.dialog=!0,this.noNomina=t},resizeCanvas:function(){var t=Math.max(window.devicePixelRatio||1,1);this.canvas.width=this.canvas.offsetWidth*t,this.canvas.height=this.canvas.offsetHeight*t,this.canvas.getContext("2d").scale(t,t),this.signaturePad.clear()},guardarFirma:function(){var t=this,e={IdProyecto:this.proyecto.id,IdReunion:this.reunion.id,NoNomina:this.noNomina,DataUri:this.signaturePad.toDataURL("image/png")};v.a.put("/proyectos/participante/firma",e).then(function(a){t.proyecto=a.data,t.$store.commit("guardarProyecto",t.proyecto),t.dialog=!1,t.reunion=a.data.reuniones.find(function(t){return t.id===e.IdReunion}),t.limpiarFirma()}).catch(function(e){t.errors.push(e)}),console.log(this.proyecto)},limpiarFirma:function(){this.signaturePad.clear()},getImgUrl:function(t){return t},volver:function(){this.$store.commit("setIdReunion",""),this.$router.push("reuniones")},descargarPase:function(t){this.dialog_descarga=!0,"png"===t?k()(document.querySelector("#pase-de-lista"),{onclone:function(t){t.getElementById("pase-de-lista").style.display="block"}}).then(function(t){var e=t.toDataURL("image/png").replace("image/png","image/octet-stream"),a=document.createElement("a"),n=new Date;n.setMinutes(n.getMinutes()-n.getTimezoneOffset()),n.toISOString().slice(0,10),a.download=n.toJSON().slice(0,10).replace(/-/g,".")+".png",a.href=e,a.click()}):"pdf"===t&&k()(document.querySelector("#pase-de-lista"),{onclone:function(t){t.getElementById("pase-de-lista").style.display="block"}}).then(function(t){var e=t.toDataURL("image/png"),a=new I({orientation:"landscape"}),n=new Date;n.setMinutes(n.getMinutes()-n.getTimezoneOffset()),n.toISOString().slice(0,10);var i=n.toJSON().slice(0,10).replace(/-/g,".")+".pdf";a.addImage(e,"PNG",0,0),a.save(i)})}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog_descarga,callback:function(e){t.dialog_descarga=e},expression:"dialog_descarga"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(" Descargar")])]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("p",[t._v("Seleccione su formato de descarga:")])])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-layout",{attrs:{row:"",wrap:"","pb-3":""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("v-btn",{attrs:{large:"",color:"primary"},on:{click:function(e){t.descargarPase("png")}}},[n("v-icon",[t._v("image")]),t._v(" .PNG\n            ")],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("v-btn",{attrs:{large:"",color:"error"},on:{click:function(e){t.descargarPase("pdf")}}},[n("v-icon",[t._v("picture_as_pdf")]),t._v(" .PDF\n            ")],1)],1)],1)],1)],1),t._v(" "),n("v-toolbar",{staticClass:"elevation-0"},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.volver()}}},[n("v-icon",[t._v("arrow_back")])],1),t._v(" "),n("v-toolbar-title"),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog_descarga=!0}}},[n("v-icon",[t._v("save_alt")])],1)],1),t._v(" "),n("v-container",[n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-container",[n("canvas",{staticClass:"signature-pad",attrs:{id:"signature-pad"}})]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"secondary",on:{click:function(e){t.limpiarFirma()}}},[t._v("Limpiar")]),t._v(" "),n("v-btn",{staticClass:"primary",on:{click:function(e){t.guardarFirma()}}},[t._v("Guardar")])],1)],1)],1),t._v(" "),n("v-container",{staticClass:"pa-0",attrs:{"grid-list-md":""}},[n("v-form",{ref:"form_reunion"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md6:""}},[n("v-text-field",{attrs:{value:t.reunion.objetivo,label:"Objetivo",readonly:""}})],1),t._v(" "),n("v-flex",{attrs:{md6:""}},[n("v-text-field",{attrs:{value:t.reunion.fecha,label:"Fecha",readonly:""}})],1)],1)],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.reunion.participantes,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.nomina))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.nombre))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.rol))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.area))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("img",{attrs:{src:e.item.firma,alt:e.item.firma,width:"100",height:"auto"}})]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("v-btn",{staticClass:"accent",attrs:{dark:""},on:{click:function(a){t.activarDialog(e.item.nomina)}}},[t._v("\n            Firmar\n          ")])],1)]}}])},[n("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n        Su búsqueda para "'+t._s(t.search)+'" no entregó resultados.\n      ')])],1)],1),t._v(" "),n("v-container",{staticClass:"fluid page pt-0",attrs:{id:"pase-de-lista"}},[n("v-container",{staticClass:"pa-0 mt-3",attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md12:""}},[n("h3",[t._v("HOJA DE REGISTRO")])])],1),t._v(" "),n("v-form",{ref:"form_reunion"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md9:""}},[n("v-text-field",{attrs:{value:"Objetivo: "+t.reunion.objetivo,readonly:""}})],1),t._v(" "),n("v-flex",{attrs:{md3:""}},[n("v-text-field",{attrs:{value:"Fecha: "+t.reunion.fecha,readonly:""}})],1)],1)],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers_print,items:t.reunion.participantes,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.nomina))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.nombre))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.rol))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.area))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("img",{attrs:{src:e.item.firma,alt:e.item.firma,width:"100",height:"auto"}})])]}}])},[n("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n        Su búsqueda para "'+t._s(t.search)+'" no entregó resultados.\n      ')])],1),t._v(" "),n("v-container",{staticClass:"pa-0 ma-0 grid-list-md",attrs:{id:"footer-pase-de-lista"}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})]),t._v(" "),n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})]),t._v(" "),n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})]),t._v(" "),n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})]),t._v(" "),n("v-flex",{staticClass:"pa-0"},[n("img",{attrs:{src:a("pG8G"),alt:"1"}})])],1)],1)],1)],1)},staticRenderFns:[]};var F=a("VU/8")(G,$,!1,function(t){a("75Xi")},"data-v-3218a140",null).exports;n.default.use(c.a);var q=new c.a({mode:"abstract",routes:[{path:"/",name:"Proyectos",component:b},{path:"/reuniones",name:"Reuniones",component:P,props:!0},{path:"/reunion",name:"Reunion",component:S},{path:"/firmar",name:"Firmar",component:F}]}),D=a("3EgV"),M=a.n(D);a("gJtD"),a("7zck");n.default.use(M.a,{theme:{primary:"#1A2930",secondary:"#339989",accent:"#197567",error:"#b74b4b",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},lang:{locales:{es:{dataIterator:{rowsPerPageText:"Items por página:",rowsPerPageAll:"Todos",pageText:"{0}-{1} de {2}",noResultsText:"No se encontraron resultados",nextPage:"Siguiente",prevPage:"Anterior"},dataTable:{rowsPerPageText:"Registros por página:"},noDataText:"No hay datos disponibles"}},current:"es"}}),n.default.config.productionTip=!1,new n.default({el:"#app",store:s,router:q,components:{App:r},template:"<App/>",mounted:function(){this.$router.replace("/")}})},gJtD:function(t,e){},pG8G:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABkBAMAAACWddTDAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA90lEQVRYhe3SMY+CMBjG8cdSimOR6qw33Ey3G2G4HaODIyaGOGpMmMl5iX7sa0Fzc5k0eX6DydvhL5QXICIiIiIioncwgUrTGsfr/5GGH9U9D22tINqmihb74nkiNPxoGxOYsikS9/9JLWooIzMgSnU/tvgMbH1bJFv3pkXUAT/iBMiN7keDr8AWSkzOM5RF7FrWVu5Eaj/+GuxGtA67uvQFJDM8WpDG/wa33BV1w3Op7Nka+1xArIf7mt4erdH3ZaFO7sMt3Vat86HlxxYf4a3pZZ+7haogM9ENLT/aZh7eis/XftEhOr9f/VcYt/dERERERESv6A9gMya591VXzgAAAABJRU5ErkJggg=="},q6vK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e241b8db38ddf4b20a15.js.map