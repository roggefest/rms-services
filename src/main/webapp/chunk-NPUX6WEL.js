import{a as ye,b as be}from"./chunk-DC44RH3L.js";import{b as X,c as Y,d as Z,f as te,g as ie,h as oe,i as re,j as ne,k as ae,l as le,n as se,o as de,p as ce,q as pe,r as ue,s as he,t as _e,u as Ce,v as fe,w as we}from"./chunk-VW4DD7XS.js";import"./chunk-O6B2BRIA.js";import{B as me,C as ge,D as xe,b as j,e as H,i as z,m as O,o as G,r as J,t as Q,w as $,x as ee}from"./chunk-ZIPX6HED.js";import{Eb as L,Gb as q,Oc as P,P as V,Pa as S,Ra as m,Sc as I,T as c,U as p,Ua as M,Va as E,Wa as n,Xa as r,Xc as K,Ya as g,ab as D,bb as f,cb as s,ec as N,kb as W,lb as d,lc as R,mb as b,mc as A,nb as F,qb as h,rb as _,sb as C,tb as k,ub as B,uc as U,vb as v,ya as a,za as w}from"./chunk-DU6A2WQC.js";import{a as T}from"./chunk-55KE2TB7.js";function Se(l,u){}function De(l,u){if(l&1){let o=D();n(0,"div",15)(1,"h5",16),d(2,"Cat\xE1logo de productos"),r()(),n(3,"div",2)(4,"div",17)(5,"p-dropdown",18),C("ngModelChange",function(e){c(o);let i=s();return _(i.selectedPartidaFilter,e)||(i.selectedPartidaFilter=e),p(e)}),f("onChange",function(){c(o);let e=s();return p(e.onChangeDrops())}),r()(),n(6,"div",17)(7,"p-dropdown",19),C("ngModelChange",function(e){c(o);let i=s();return _(i.selectedDestinationFilter,e)||(i.selectedDestinationFilter=e),p(e)}),f("onChange",function(){c(o);let e=s();return p(e.onChangeDrops())}),r()(),n(8,"div",20)(9,"span",21),g(10,"i",22),n(11,"input",23),f("input",function(e){c(o),s();let i=W(8);return p(i.filterGlobal(e.target.value,"contains"))}),r()()()()}if(l&2){let o=s();a(5),m("options",o.partidas),h("ngModel",o.selectedPartidaFilter),m("showClear",!0),a(2),h("ngModel",o.selectedDestinationFilter),m("options",o.destinations)("showClear",!0)}}function ve(l,u){l&1&&(n(0,"tr")(1,"th",24),g(2,"p-tableHeaderCheckbox"),r(),n(3,"th",25),d(4,"Producto "),g(5,"p-sortIcon",26),r(),n(6,"th",27),d(7,"Precio "),g(8,"p-sortIcon",28),r(),n(9,"th",29),d(10,"Unidad "),g(11,"p-sortIcon",30),r(),n(12,"th",31),d(13,"Partida "),g(14,"p-sortIcon",32),r(),n(15,"th",31),d(16,"Especializado para "),g(17,"p-sortIcon",33),r(),g(18,"th"),r())}function Pe(l,u){if(l&1){let o=D();n(0,"tr")(1,"td"),g(2,"p-tableCheckbox",34),r(),n(3,"td"),d(4),r(),n(5,"td"),d(6),L(7,"currency"),r(),n(8,"td"),d(9),r(),n(10,"td")(11,"span"),d(12),r()(),n(13,"td")(14,"span"),d(15),r()(),n(16,"td")(17,"button",35),f("click",function(){let i=c(o).$implicit,x=s();return p(x.editProduct(i))}),r(),n(18,"button",36),f("click",function(){let i=c(o).$implicit,x=s();return p(x.deleteProduct(i))}),r()()()}if(l&2){let o=u.$implicit;a(2),m("value",o),a(2),b(o.title),a(2),b(q(7,10,o.price,"USD")),a(3),b(o.categoryDescription),a(2),E("product-badge status-"),a(),b(o.partidaDescription),a(2),E("product-badge status-"),a(),b(o.areaDescription)}}function Ie(l,u){if(l&1&&(n(0,"div",15),d(1),r()),l&2){let o=s();a(),F(" En total hay ",o.products?o.products.length:0," productos. ")}}function Me(l,u){l&1&&(n(0,"small",51),d(1,"Nombre del producto es requerido."),r())}function Ee(l,u){if(l&1){let o=D();n(0,"div",37)(1,"label",38),d(2,"Producto:"),r(),n(3,"input",39),C("ngModelChange",function(e){c(o);let i=s();return _(i.product.title,e)||(i.product.title=e),p(e)}),r(),S(4,Me,2,0,"small",40),r(),n(5,"div",37)(6,"label",41),d(7,"Descripci\xF3n:"),r(),n(8,"textarea",42),C("ngModelChange",function(e){c(o);let i=s();return _(i.product.description,e)||(i.product.description=e),p(e)}),r()(),n(9,"div",37)(10,"div",43)(11,"div",44)(12,"label",45),d(13,"Partidas:"),r(),n(14,"p-dropdown",46),C("ngModelChange",function(e){c(o);let i=s();return _(i.selectedPartida,e)||(i.selectedPartida=e),p(e)}),r()()()(),n(15,"div",37)(16,"div",43)(17,"div",44)(18,"label",45),d(19,"Unidades:"),r(),n(20,"p-dropdown",47),C("ngModelChange",function(e){c(o);let i=s();return _(i.selectedCategory,e)||(i.selectedCategory=e),p(e)}),r()()()(),n(21,"div",37)(22,"div",43)(23,"div",44)(24,"label",45),d(25,"Especializado para:"),r(),n(26,"p-dropdown",48),C("ngModelChange",function(e){c(o);let i=s();return _(i.selectedDestination,e)||(i.selectedDestination=e),p(e)}),r()()()(),n(27,"div",43)(28,"div",44)(29,"label",45),d(30,"Precio:"),r(),n(31,"p-inputNumber",49),C("ngModelChange",function(e){c(o);let i=s();return _(i.product.price,e)||(i.product.price=e),p(e)}),r()()(),n(32,"div",43)(33,"div",44)(34,"p-checkbox",50),C("ngModelChange",function(e){c(o);let i=s();return _(i.product.generateIva,e)||(i.product.generateIva=e),p(e)}),r()()()}if(l&2){let o=s();a(3),h("ngModel",o.product.title),a(),m("ngIf",o.submitted&&!o.product.title),a(4),h("ngModel",o.product.description),a(6),m("options",o.partidas),h("ngModel",o.selectedPartida),m("required",!0)("showClear",!0),a(6),m("options",o.unidades),h("ngModel",o.selectedCategory),m("showClear",!0),a(6),h("ngModel",o.selectedDestination),m("options",o.destinations)("showClear",!0),a(5),h("ngModel",o.product.price),a(3),m("binary",!0),h("ngModel",o.product.generateIva)}}function Te(l,u){if(l&1){let o=D();n(0,"button",52),f("click",function(){c(o);let e=s();return p(e.hideDialog())}),r(),n(1,"button",53),f("click",function(){c(o);let e=s();return p(e.saveProduct())}),r()}}var Ve=()=>["title","price","category","partidaDescription"],We=()=>({width:"450px",height:"550px"}),Fe=()=>({width:"450px"}),mt=(()=>{let u=class u{constructor(t,e,i,x){this.productService=t,this.catalogService=e,this.messageService=i,this.confirmationService=x,this.products=[],this.product={price:0,quantity:0,title:""},this.selectedProducts=[],this.submitted=!1,this.productDialog=!1,this.loadingProducts=!1,this.unidades=[],this.partidas=[],this.destinations=[],this.selectedDestinationFilter={areaId:"0",areaDescription:""},this.selectedPartida={partidaId:0,partidaDescription:""},this.selectedPartidaFilter={partidaId:0,partidaDescription:""},this.selectedCategory={categoryId:0,categoryDescription:""},this.selectedDestination={areaId:"0",areaDescription:""}}ngOnInit(){this.loadProducts(0,0),this.loadPartidaCatalog(),this.loadAreasCatalog(),this.loadCategoryCatalog(),console.log("area %o",this.destinations)}onChangeDrops(){let t=null;this.selectedDestinationFilter!=null&&(t=this.selectedDestinationFilter.areaId);let e=null;this.selectedPartidaFilter!=null&&(e=this.selectedPartidaFilter.partidaId),this.products=[],this.loadProducts(t,e)}openNew(){this.product={price:0,quantity:0,title:""},this.submitted=!1,this.productDialog=!0}deleteSelectedProducts(){this.confirmationService.confirm({message:"Estas seguro que quieres borrar el producto selecionado?",header:"Confirmaci\xF3n",icon:"pi pi-exclamation-triangle",accept:()=>{this.products=this.products.filter(t=>!this.selectedProducts.includes(t)),this.selectedProducts=[],this.messageService.add({severity:"success",summary:"Confirmaci\xF3n",detail:"Producto eliminado exitosamente",life:3e3})}})}editProduct(t){console.log("Destinations: ",this.destinations),console.log("Unidades: ",this.unidades),console.log("Partidas: ",this.partidas),this.product=T({},t),t.destinationId!=null?(console.log("ProductParam: %o",t),console.log("this.Product: %o",this.product),this.selectedDestination={areaId:t.destinationId,areaDescription:t.areaDescription},this.product.destinationId=t.destinationId,this.product.areaDescription=t.areaDescription):(this.product.destinationId=null,this.product.areaDescription=null),this.selectedPartida={partidaId:t.partidaId,partidaDescription:t.partidaDescription},this.selectedCategory={categoryId:t.categoryId,categoryDescription:t.categoryDescription},this.productDialog=!0,console.log("Selected destination: %o",this.selectedDestination),console.log("Selected partida: %o",this.selectedPartida),console.log("Selected category: %o",this.selectedCategory)}deleteProduct(t){this.confirmationService.confirm({message:"Estas seguro que quieres borrar el producto "+t.title+"?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.removeproduct(t.id),this.products=this.products.filter(e=>e.id!==t.id),this.product={price:0,quantity:0,title:""}}})}hideDialog(){this.productDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0,this.product.title.trim()&&(this.product.id?(this.selectedDestination!=null?(this.product.destinationId=this.selectedDestination.areaId,this.product.areaDescription=this.selectedDestination.areaDescription):(this.product.destinationId=null,this.product.areaDescription=null),this.product.categoryId=this.selectedCategory.categoryId,this.product.categoryDescription=this.selectedCategory.categoryDescription,this.product.partidaDescription=this.selectedPartida.partidaDescription,this.product.partidaId=this.selectedPartida.partidaId,this.addProduct(this.product),this.products[this.findIndexById(this.product.id)]=this.product,this.messageService.add({severity:"success",summary:"Actualizaci\xF3n exitosa",detail:"Se actualiz\xF3 el producto con \xE9xito",life:3e3})):(this.product.id="",this.selectedDestination!=null?(this.product.destinationId=this.selectedDestination.areaId,this.product.areaDescription=this.selectedDestination.areaDescription):(this.product.destinationId=null,this.product.areaDescription=null),this.product.categoryId=this.selectedCategory.categoryId,this.product.categoryDescription=this.selectedCategory.categoryDescription,this.product.partidaDescription=this.selectedPartida.partidaDescription,this.product.partidaId=this.selectedPartida.partidaId,this.addProduct(this.product),this.messageService.add({severity:"success",summary:"Creaci\xF3n exitosa",detail:"Se creo el prducto con \xE9xito"})),this.products=[...this.products],this.productDialog=!1,this.product={price:0,quantity:0,title:""})}addProduct(t){return console.log("param %o",t),this.catalogService.addProduct(t).subscribe({next:e=>{this.product=e},error:e=>{console.error("Error creating products:",e),this.messageService.add({severity:"error",summary:"Error al guardar",detail:"Ocurri\xF3 un error al guardar el prodcuto"})},complete:()=>{t.id==""&&(console.log("product %o",this.product),this.products.push(this.product))}}),""}removeproduct(t){this.catalogService.deleteProduct(t).subscribe({next:e=>{},error:e=>{console.error("Error deleting product:",e)},complete:()=>{}}),this.messageService.add({severity:"success",summary:"Confirmado",detail:"Se elimin\xF3 el producto con \xE9xito"})}findIndexById(t){let e=-1;for(let i=0;i<this.products.length;i++)if(this.products[i].id===t){e=i;break}return e}createId(){let t="";for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<5;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}loadProducts(t,e){this.loadingProducts=!0,this.catalogService.getProductsCatalog(t,e).subscribe({next:i=>{i!=null&&(this.products=i)},error:i=>{console.error("Error loading products:",i)},complete:()=>{this.loadingProducts=!1}})}loadAreasCatalog(){let t;this.catalogService.getDestinations().subscribe({next:e=>{console.log("areas response %o ",e),this.destinations=e},error:e=>{console.error("Error loading areas catalog:",e)},complete:()=>{}})}loadPartidaCatalog(){this.catalogServicesSubscription=this.partidaCatSubscription=this.catalogService.getPartidas().subscribe({next:t=>{console.log(t),this.partidas=t},error:t=>{console.error("Error loading areas catalog:",t)},complete:()=>{}})}loadCategoryCatalog(){this.categoryCatSubscription=this.catalogService.getCategories().subscribe({next:t=>{this.unidades=t},error:t=>{console.error("Error loading areas catalog:",t)},complete:()=>{}})}ngOnDestroy(){this.catalogServicesSubscription?.unsubscribe(),this.partidaCatSubscription?.unsubscribe(),this.categoryCatSubscription?.unsubscribe(),console.log("unsubscribed")}};u.\u0275fac=function(e){return new(e||u)(w(xe),w(we),w(I),w(P))},u.\u0275cmp=V({type:u,selectors:[["product-catalog-component"]],standalone:!0,features:[k([I,P]),B],decls:17,vars:17,consts:[[1,"card"],["styleClass","p-mb-4"],[1,"formgrid","grid"],[1,"field","md:col-12","col-12"],["pButton","","pRipple","","label","Nuevo","icon","pi pi-plus",1,"p-button-success","p-mr-2",3,"click"],["pTemplate","right"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","paginator","styleClass","globalFilterFields","selection","rowHover","showCurrentPageReport","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","Detalles del producto","styleClass","p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],[1,"p-d-flex","p-ai-center","p-jc-between"],[1,"p-m-0"],[1,"field","md:col-3","col-6"],["optionLabel","partidaDescription","placeholder","Selecciona una partida","pTooltip","Selecciona una partida para el producto",1,"p-inputtext-sm",3,"options","ngModel","showClear","ngModelChange","onChange"],["id","destiny","optionLabel","areaDescription","pTooltip","Selecciona un destino para los productos del cat\xE1logo","placeholder","Area de la remisi\xF3n",1,"p-inputtext-sm",3,"ngModel","options","showClear","ngModelChange","onChange"],[1,"field","md:col-6","col-12"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","B\xFAsqueda r\xE1pida...",1,"p-inputtext-sm",3,"input"],[2,"width","3rem"],["pSortableColumn","name"],["field","title"],["pSortableColumn","price"],["field","price"],["pSortableColumn","category"],["field","category"],["pSortableColumn","partidaDescription"],["field","partidaDescription"],["field","areaDescription"],[3,"value"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","p-mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],[1,"p-field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngModelChange"],["class","p-invalid",4,"ngIf"],["for","description"],["id","description","pInputTextarea","","rows","3","cols","20",3,"ngModel","ngModelChange"],[1,"p-formgrid","p-grid"],[1,"p-field","p-col"],["for","price"],["optionLabel","partidaDescription","placeholder","Selecciona una partida","pTooltip","Selecciona una partida para el producto",1,"p-inputtext-sm",3,"options","ngModel","required","showClear","ngModelChange"],["optionLabel","categoryDescription","placeholder","Selecciona una unidad","pTooltip","Selecciona una unidad para el producto",1,"p-inputtext-sm",3,"options","ngModel","showClear","ngModelChange"],["id","destiny","optionLabel","areaDescription","pTooltip","Selecciona un destino para los productos del cat\xE1logo","placeholder","Area de la remisi\xF3n",1,"p-inputtext-sm",3,"ngModel","options","showClear","ngModelChange"],["id","price","mode","currency","currency","USD","locale","en-US",3,"ngModel","ngModelChange"],["label","Aplica IVA",1,"p-inputtext-sm","text-xs",3,"binary","ngModel","ngModelChange"],[1,"p-invalid"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Guardar","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(e,i){e&1&&(g(0,"p-toast"),n(1,"div",0)(2,"p-toolbar",1)(3,"div",2)(4,"div",3)(5,"button",4),f("click",function(){return i.openNew()}),r()()(),S(6,Se,0,0,"ng-template",5),r(),n(7,"p-table",6,7),C("selectionChange",function(y){return _(i.selectedProducts,y)||(i.selectedProducts=y),y}),S(9,De,12,6,"ng-template",8)(10,ve,19,0,"ng-template",9)(11,Pe,19,13,"ng-template",10)(12,Ie,2,1,"ng-template",11),r()(),n(13,"p-dialog",12),C("visibleChange",function(y){return _(i.productDialog,y)||(i.productDialog=y),y}),S(14,Ee,35,16,"ng-template",13)(15,Te,2,0,"ng-template",14),r(),g(16,"p-confirmDialog")),e&2&&(a(7),m("value",i.products)("rows",10)("paginator",!0)("styleClass","p-datatable-sm")("globalFilterFields",v(14,Ve)),h("selection",i.selectedProducts),m("rowHover",!0)("showCurrentPageReport",!0),a(6),M(v(15,We)),h("visible",i.productDialog),m("modal",!0),a(3),M(v(16,Fe)))},dependencies:[A,N,R,se,oe,K,re,ne,ae,le,X,J,_e,he,Z,Y,Q,ge,me,ee,$,U,ce,de,G,j,H,O,z,ie,te,ue,pe,be,ye,fe,Ce]});let l=u;return l})();export{mt as ProductCatalogComponent};
