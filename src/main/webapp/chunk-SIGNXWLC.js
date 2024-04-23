import{a as We}from"./chunk-RNYVNSAL.js";import{a as ye,b as Ee,c as Te,d as De,e as Fe}from"./chunk-LJAMSDGS.js";import{e as Z,f as ee}from"./chunk-IDBBXLGP.js";import{a as Ne,b as ze}from"./chunk-DC44RH3L.js";import{a as he,b as ge,c as xe,d as Ce,h as we,k as Se,n as Re,p as ke,q as Le,r as Me,s as Pe,t as Be,u as Oe,v as Ae,w as Ue}from"./chunk-VW4DD7XS.js";import{a as be,b as ve}from"./chunk-O6B2BRIA.js";import{B as Ve,C as Ie,D as je,b as te,c as ie,e as ne,f as oe,g as se,h as I,i as re,j as le,k as ae,l as ce,o as me,p as pe,r as ue,s as _e,t as fe}from"./chunk-ZIPX6HED.js";import{Eb as M,Fb as V,Oc as B,P as G,Pa as S,Ra as g,Sc as O,T as f,U as h,Ua as P,Wa as s,Xa as i,Xc as de,Ya as w,ab as x,bb as b,cb as _,ec as Y,fb as X,jc as $,lb as l,lc as J,mb as R,mc as Q,nb as L,qb as y,rb as E,sb as T,tb as q,ub as H,vb as F,wb as K,ya as m,za as D}from"./chunk-DU6A2WQC.js";import{d as He,e as Ke}from"./chunk-55KE2TB7.js";var Ge=He((W,N)=>{"use strict";(function(a,d){typeof define=="function"&&define.amd?define([],d):typeof W<"u"?d():(d(),a.FileSaver={})})(W,function(){"use strict";function a(o,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function d(o,p,C){var u=new XMLHttpRequest;u.open("GET",o),u.responseType="blob",u.onload=function(){c(u.response,p,C)},u.onerror=function(){console.error("could not download file")},u.send()}function r(o){var p=new XMLHttpRequest;p.open("HEAD",o,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function e(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(p)}}var t=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,n=t.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=t.saveAs||(typeof window!="object"||window!==t?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(o,p,C){var u=t.URL||t.webkitURL,v=document.createElement("a");p=p||o.name||"download",v.download=p,v.rel="noopener",typeof o=="string"?(v.href=o,v.origin===location.origin?e(v):r(v.href)?d(o,p,C):e(v,v.target="_blank")):(v.href=u.createObjectURL(o),setTimeout(function(){u.revokeObjectURL(v.href)},4e4),setTimeout(function(){e(v)},0))}:"msSaveOrOpenBlob"in navigator?function(o,p,C){if(p=p||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(a(o,C),p);else if(r(o))d(o,p,C);else{var u=document.createElement("a");u.href=o,u.target="_blank",setTimeout(function(){e(u)})}}:function(o,p,C,u){if(u=u||open("","_blank"),u&&(u.document.title=u.document.body.innerText="downloading..."),typeof o=="string")return d(o,p,C);var v=o.type==="application/octet-stream",qe=/constructor/i.test(t.HTMLElement)||t.safari,z=/CriOS\/[\d]+/.test(navigator.userAgent);if((z||v&&qe||n)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var k=A.result;k=z?k:k.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=k:location=k,u=null},A.readAsDataURL(o)}else{var U=t.URL||t.webkitURL,j=U.createObjectURL(o);u?u.location=j:location.href=j,u=null,setTimeout(function(){U.revokeObjectURL(j)},4e4)}});t.saveAs=c.saveAs=c,typeof N<"u"&&(N.exports=c)})});var Xe=Ke(Ge());function Ye(a,d){a&1&&(s(0,"div",23),w(1,"div",24),i())}function $e(a,d){if(a&1){let r=x();s(0,"div",25)(1,"p-button",26),b("click",function(){f(r);let t=_();return h(t.newRemission())}),i(),s(2,"p-button",27),b("click",function(){f(r);let t=_();return h(t.deleteSelectedRemission())}),i(),s(3,"button",28),b("click",function(){f(r);let t=_();return h(t.exportExcel())}),i(),s(4,"button",29),b("click",function(){f(r);let t=_();return h(t.loadRemissionsDetailed())}),i()()}if(a&2){let r=_();m(2),g("disabled",r.selectedRemissions.length==0)}}function Je(a,d){a&1&&(s(0,"tr"),w(1,"th",30),s(2,"th",31),l(3,"Folio"),i(),s(4,"th",32),l(5,"Estatus"),i(),s(6,"th",33),l(7,"Destino"),i(),s(8,"th",34),l(9,"Partidas en la remisi\xF3n"),i(),s(10,"th",34),l(11,"Observaciones"),i(),s(12,"th",35),l(13,"Fecha de creaci\xF3n"),i(),s(14,"th",35),l(15,"Fecha de expedici\xF3n"),i(),s(16,"th",35),l(17,"Total"),i(),s(18,"th",35),l(19,"Gran Total"),i(),s(20,"th",35),l(21,"Modificar"),i(),s(22,"th",35),l(23,"Imprimir"),i(),s(24,"th",35),l(25,"Sustituir"),i(),s(26,"th",35),l(27,"Validar"),i(),s(28,"th",35),l(29,"Cancelar"),i()())}function Qe(a,d){if(a&1){let r=x();s(0,"p-button",45),b("click",function(){f(r);let t=_().$implicit,n=_();return h(n.showValidationDialog(t))}),i()}}function Ze(a,d){if(a&1){let r=x();s(0,"p-button",46),b("click",function(){f(r);let t=_().$implicit,n=_();return h(n.showCancelDialog(t))}),i()}}var et=a=>["/adminremision/",a];function tt(a,d){if(a&1){let r=x();s(0,"tr")(1,"td"),w(2,"p-tableCheckbox",36),i(),s(3,"td",37)(4,"span",38),l(5,"Folio"),i(),l(6),i(),s(7,"td")(8,"span",38),l(9,"Estatus"),i(),l(10),s(11,"span"),l(12),i(),s(13,"span"),l(14),i()(),s(15,"td")(16,"span",39),l(17,"Destino"),i(),l(18),i(),s(19,"td")(20,"span",39),l(21,"Partidas de la remisi\xF3n"),i(),l(22),i(),s(23,"td")(24,"span",39),l(25,"Observaciones"),i(),l(26),i(),s(27,"td")(28,"span",39),l(29,"Fecha de creaci\xF3n"),i(),l(30),M(31,"date"),i(),s(32,"td")(33,"span",39),l(34,"Fecha de expedici\xF3n"),i(),l(35),M(36,"date"),i(),s(37,"td")(38,"span",39),l(39,"Total"),i(),l(40),M(41,"currency"),i(),s(42,"td")(43,"span",39),l(44,"Gran Total"),i(),l(45),M(46,"currency"),i(),s(47,"td")(48,"p-button",40),b("click",function(){let n=f(r).$implicit,c=_();return h(c.editRemision(n))}),i()(),s(49,"td")(50,"p-button",41),b("click",function(){let n=f(r).$implicit,c=_();return h(c.showPrintDialog(n))}),i()(),s(51,"td")(52,"p-button",42),b("click",function(){let n=f(r).$implicit,c=_();return h(c.substituteRemission(n))}),i()(),s(53,"td"),S(54,Qe,1,0,"p-button",43),i(),s(55,"td"),S(56,Ze,1,0,"p-button",44),i()()}if(a&2){let r=d.$implicit;m(2),g("value",r),m(),X("pTooltip",r.id),m(3),L("",r.folio," "),m(4),L("",r.status," "),m(2),L(" ",r.status==="Cancelada"&&r.substitutedByFolio!=null?"- Substituye con folio: "+r.substitutedByFolio:""," "),m(2),L(" ",r.status==="Activa"&&r.originFolio!=null?"- Proviene del folio: "+r.originFolio:""," "),m(4),R(r.areaDescription),m(4),R(r.remissionPartidas),m(4),R(r.observations),m(4),R(V(31,16,r.creationDate)),m(5),R(V(36,18,r.expeditionDate)),m(5),R(V(41,20,r.total)),m(5),R(V(46,22,r.greatTotal)),m(3),g("routerLink",K(24,et,r.id)),m(6),g("ngIf",r.status!="Entregada"&&r.status!="Cancelada"),m(2),g("ngIf",r.status!="Entregada"&&r.status!="Cancelada")}}function it(a,d){if(a&1){let r=x();s(0,"div",47)(1,"div",48)(2,"label",49),l(3,"Folio:"),i(),s(4,"input",50),T("ngModelChange",function(t){f(r);let n=_();return E(n.newFolio,t)||(n.newFolio=t),h(t)}),i(),s(5,"small",51),l(6,"Introduce el nuevo folio para la substituci\xF3n de la remisi\xF3n."),i()(),w(7,"i",52),s(8,"p"),l(9),i()()}if(a&2){let r=d.$implicit,e=_();m(4),y("ngModel",e.newFolio),m(5),R(r.message)}}function nt(a,d){if(a&1){let r=x();s(0,"div",53)(1,"p-checkbox",54),T("ngModelChange",function(t){f(r);let n=_();return E(n.printPrices,t)||(n.printPrices=t),h(t)}),i()()}if(a&2){let r=_();m(),g("binary",!0),y("ngModel",r.printPrices)}}function ot(a,d){if(a&1){let r=x();s(0,"button",55),b("click",function(){f(r);let t=_();return h(t.closeDialog())}),i(),s(1,"p-button",56),b("click",function(){f(r);let t=_();return h(t.printRemission())}),i()}}function st(a,d){if(a&1){let r=x();s(0,"button",55),b("click",function(){f(r);let t=_();return h(t.closeValidateDialog())}),i()}}function rt(a,d){if(a&1){let r=x();s(0,"div",53)(1,"p")(2,"b"),l(3,"Seguro deseas cancelar la remisi\xF3n?"),i()()(),s(4,"div",53)(5,"span",57)(6,"textarea",58),T("ngModelChange",function(t){f(r);let n=_();return E(n.cancelObservations,t)||(n.cancelObservations=t),h(t)}),i(),s(7,"label",59),l(8,"Observaciones"),i()()()}if(a&2){let r=_();m(6),y("ngModel",r.cancelObservations)}}function lt(a,d){if(a&1){let r=x();s(0,"p-button",60),b("click",function(){f(r);let t=_();return h(t.cancelRemission())}),i(),s(1,"button",61),b("click",function(){f(r);let t=_();return h(t.closeCancelDialog())})("loading",function(){f(r);let t=_();return h(t.substitutingRemission)}),i()}}var at=()=>({"min-width":"25rem"}),ct=()=>[5,10,20],mt=()=>({width:"300px",height:"190px"}),pt=()=>({width:"420px",height:"430px"}),dt=()=>({width:"420px",height:"330px"}),Jt=(()=>{let d=class d{constructor(e,t,n,c,o){this.service=e,this.messageService=t,this.confirmatioService=n,this.router=c,this.catalogService=o,this.remissions=[],this.destinations=[],this.totalRecords=0,this.selectedCity=0,this.minDate=new Date,this.loadingRemissions=!1,this.substitutingRemission=!1,this.partidas=[],this.newFolio="",this.printPrices=!0,this.cancelObservations="",this.productDetailed=[],this.filter={folio:0,destinationId:0,dateInit:new Date,dateEnd:new Date},this.selectedRemissions=[],this.visiblePrintModal=!1,this.visibleValidateModal=!1,this.validationResult=!1,this.visibleCancelModal=!1,this.filtersForm=new se({folio:new I("",[ie.minLength(3)]),destination:new I(0),initDate:new I({value:"",disabled:!1}),endDate:new I({value:"",disabled:!0})})}ngOnInit(){this.loadDestinations(),this.loadPartidaCatalog()}editRemision(e){console.log("editing %o",e)}newRemission(){console.log("newRemission"),this.router.navigate(["adminremision",0])}initDateOnInput(){console.log("onInput"),this.filtersForm.controls.endDate.enable(),this.minDate=this.filtersForm.controls.initDate.value}initDateOnClear(){console.log("onClear"),this.filtersForm.controls.initDate.patchValue(null),this.filtersForm.controls.initDate.reset(),this.filtersForm.controls.endDate.reset(),this.filtersForm.controls.endDate.patchValue(null),this.filtersForm.controls.endDate.disable()}selectProduct(e){console.log("Select product")}onRowSelect(e){console.log("onRowSelect ",e),console.log(this.selectedRemissions)}onRowUnselect(e){console.log("onRowUnselect",e),console.log(this.selectedRemissions)}loadRemissions(){console.log("Load remissions"),this.loadingRemissions=!0,this.remissions.splice(0);let{destination:e,folio:t,initDate:n,endDate:c}=this.filtersForm.controls;this.filter={folio:t.value,destinationId:e.value!=null?e.value.areaId:"",dateInit:n.value,dateEnd:c.value},this.getRemissionSubscription=this.service.getRemissions(this.filter).subscribe({next:o=>{if(console.log(o),o!=null){let{_embedded:p}=o;this.remissions=p.remissionVOList,this.totalRecords=p.remissionVOList.length}else this.messageService.add({severity:"error",summary:"No encontrado",detail:"No existen remisiones con los filtros proporcionados"})},error:o=>{console.error("Error loading remissions:",o),this.loadingRemissions=!1},complete:()=>{this.loadingRemissions=!1}})}loadDestinations(){this.loadAreasCatalog(),console.log("destinations %o ",this.destinations)}deleteSelectedRemission(){console.log("Delete selected remission");let e=this.selectedRemissions.length;this.confirmatioService.confirm({message:`Seguro deseas borrar ${e} remision(es) seleccionada(s)?`,header:"Borrar remisi\xF3n",acceptLabel:"Borrar",accept:()=>{console.log("Deleting remission %o",this.selectedRemissions),this.selectedRemissions.forEach(t=>{console.log(t);try{this.handleDelete(t.id)}catch(n){console.log(n)}}),this.loadRemissions()},reject:()=>{this.messageService.add({severity:"error",summary:"Operaci\xF3n cancelada",detail:`Se rechaz\xF3 la eliminaci\xF3n de ${e} remision(es)`})}})}handleDelete(e){let t=this.selectedRemissions.length;this.delteRemissioSubscription=this.service.deleteRemission(e).subscribe({next:n=>{console.log(n)},error:n=>{console.error("Error loading remissions:",n)},complete:()=>{this.loadingRemissions=!1}}),this.messageService.add({severity:"success",summary:"Confirmado",detail:`Se eliminaron ${t} remision(es) con \xE9xito`})}printRemissions(){console.log("Print selected remissions"),console.log(this.selectedRemissions)}substituteRemission(e){console.log("Substitute selected remission %o",e);let t=e.folio;this.confirmatioService.confirm({message:`Seguro deseas sustituir la remisi\xF3n con el folio ${t}?`,header:`Sustituir remisi\xF3n (${t})`,acceptLabel:"Si",accept:()=>{let n={id:e.id,total:e.total,destinationId:e.destinationId,areaDescription:e.areaDescription,folio:this.newFolio,observations:e.observations,expeditionDate:e.expeditionDate,format:e.format,products:e.products,formatId:e.formatId};console.log("remission substitution data: %o",n),this.saveRemission(n),console.log("Substituting remission %o",this.selectedRemissions)},reject:()=>{this.messageService.add({severity:"error",summary:"Operaci\xF3n cancelada",detail:`Se rechaz\xF3 la sustituci\xF3n de la remisi\xF3n con el folio ${t}`})}})}getAreaDescription(e){return this.catalogService.getAreaDescription(e,this.destinations)}saveRemission(e){this.substitutingRemission=!0,this.sustituteRemissionSubscription=this.service.substituteRemission(e).subscribe({next:t=>{console.log("Response: %o",t)},error:t=>{this.substitutingRemission=!1,console.error("Error saving remissions:",t),this.messageService.add({severity:"error",summary:"Error al substituir",detail:"Ocurri\xF3 un error al sustituir la remisi\xF3n"})},complete:()=>{this.loadRemissions(),this.messageService.add({severity:"success",summary:"Substituci\xF3n de remisi\xF3n",detail:`Se susstituy\xF3 la remisi\xF3n con el folio: ${e.folio} exitosamente`})}})}loadAreasCatalog(){this.catalogSubscription=this.catalogService.getDestinations().subscribe({next:e=>{console.log("Areas response %o",e),this.destinations=e},error:e=>{console.error("Error loading areas catalog:",e)},complete:()=>{}})}printRemission(){this.service.printRemissionUpdate(this.selectedRemission?.id,this.selectedRemission?.folio,this.printPrices),this.visiblePrintModal=!1}showPrintDialog(e){this.selectedRemission=e,this.visiblePrintModal=!0}showValidationDialog(e){this.selectedRemission=e,this.visibleValidateModal=!0}showCancelDialog(e){this.selectedRemission=e,console.log("Selected remission: %o",this.selectedRemission),this.cancelObservations="",this.visibleCancelModal=!0}closeDialog(){this.visiblePrintModal=!1}closeValidateDialog(){this.visibleValidateModal=!1}closeCancelDialog(){this.visibleCancelModal=!1}ngOnDestroy(){this.catalogSubscription?.unsubscribe(),this.sustituteRemissionSubscription?.unsubscribe(),this.delteRemissioSubscription?.unsubscribe(),this.getRemissionSubscription?.unsubscribe(),this.partidaCatSubscription?.unsubscribe(),console.log("unsubscribed")}exportExcel(){import("./chunk-ZP54UIBZ.js").then(e=>{let n={Sheets:{data:e.utils.json_to_sheet(this.remissions)},SheetNames:["data"]},c=e.write(n,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(c,"products")})}exportExcelDetailed(){import("./chunk-ZP54UIBZ.js").then(e=>{let n={Sheets:{data:e.utils.json_to_sheet(this.productDetailed)},SheetNames:["data"]},c=e.write(n,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(c,"products")})}saveAsExcelFile(e,t){let n="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",c=".xlsx",o=new Blob([e],{type:n});Xe.saveAs(o,t+"_export_"+new Date().getTime()+c)}loadRemissionsDetailed(){console.log("Load remissions"),this.loadingRemissions=!0,this.remissions.splice(0);let{destination:e,folio:t,initDate:n,endDate:c}=this.filtersForm.controls;this.filter={folio:t.value,destinationId:e.value!=null?e.value.areaId:"",dateInit:n.value,dateEnd:c.value},this.getRemissionSubscription=this.service.getRemissionsDetailed(this.filter).subscribe({next:o=>{console.log(o),o!=null?this.productDetailed=o:this.messageService.add({severity:"error",summary:"No encontrado",detail:"No existen remisiones con los filtros proporcionados"})},error:o=>{console.error("Error loading remissions:",o),this.loadingRemissions=!1},complete:()=>{this.loadingRemissions=!1,this.exportExcelDetailed()}})}loadPartidaCatalog(){this.partidaCatSubscription=this.catalogService.getPartidas().subscribe({next:e=>{console.log(e),this.partidas=e},error:e=>{console.error("Error loading areas catalog:",e)},complete:()=>{}})}getValidationData(e){if(console.log("ValidationResult: %o %o",e,this.selectedRemission),e){let t=this.remissions.find(c=>c.id===this.selectedRemission?.id),n=this.remissions.indexOf(t);this.remissions[n].status="Entregada"}}cancelRemission(){this.substitutingRemission=!0,this.cancelObservations!=null&&this.selectedRemission!=null&&(this.selectedRemission.observations=this.cancelObservations),this.sustituteRemissionSubscription=this.service.cancelRemission(this.selectedRemission).subscribe({next:e=>{console.log("Response: %o",e)},error:e=>{this.substitutingRemission=!1,console.error("Error saving remissions:",e),this.messageService.add({severity:"error",summary:"Error al cancelar",detail:"Ocurri\xF3 un error al cancelar la remisi\xF3n"}),this.visibleCancelModal=!1},complete:()=>{let e=this.remissions.find(n=>n.id===this.selectedRemission?.id),t=this.remissions.indexOf(e);this.remissions[t].status="Cancelada",this.messageService.add({severity:"success",summary:"Cancelaci\xF3n de remisi\xF3n",detail:`Se cancelo la remisi\xF3n con el folio: ${this.selectedRemission?.folio} exitosamente`}),this.visibleCancelModal=!1}})}};d.\u0275fac=function(t){return new(t||d)(D(je),D(O),D(B),D(Z),D(Ue))},d.\u0275cmp=G({type:d,selectors:[["app-remision-list"]],standalone:!0,features:[q([O,B]),H],decls:35,vars:40,consts:[["header","REMISIONES"],["pTemplate","footer"],[3,"formGroup"],["legend","B\xFAsqueda de remisiones",3,"toggleable"],[1,"formgrid","grid"],[1,"field","md:col-4","col-12"],["id","folio","type","text","formControlName","folio","placeholder","Folio","tooltipEvent","focus","pTooltip","Ingresa un folio de remisi\xF3n",1,"p-inputtext-sm","text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary"],["formControlName","initDate","placeholder","fecha de inicio","dateFormat","dd/mm/yy","tooltipEvent","focus","pTooltip","Fecha de inicio en que se expidio la remisi\xF3n",1,"p-inputtext-sm",3,"iconDisplay","showButtonBar","showIcon","onSelect","onClearClick"],["formControlName","endDate","dateFormat","dd/mm/yy","tooltipEvent","focus","placeholder","Fecha final","pTooltip","Fecha final en que se expidio la remisi\xF3n",1,"p-inputtext-sm",3,"iconDisplay","showButtonBar","showIcon","minDate"],["id","destiny","formControlName","destination","optionLabel","areaDescription","pTooltip","Selecciona un destino donde la remisi\xF3n fu\xE9 enviada","placeholder","Destino de la remisi\xF3n",1,"p-inputtext-sm",3,"showClear","options"],[1,"field","md:col-4","col-6"],[1,"field","md:col-4"],["size","small","label","Buscar","icon","pi pi-search","severity","info","loadingIcon","pi pi-cog","pTooltip","Buscar remisiones existentes",3,"raised","loading","onClick"],["responsiveLayout","stack","styleClass","p-datatable-striped","currentPageReportTemplate","Mostrando de {first} a {last} de {totalRecords} remisiones",3,"value","paginator","rows","showCurrentPageReport","breakpoint","tableStyle","styleClass","selection","rowsPerPageOptions","selectionChange","onRowSelect"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","message"],["header","Imprimir remisi\xF3n","styleClass","p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["styleClass","p-fluid",3,"visible","modal","visibleChange"],[3,"inputData","updateEvent"],["styleClass","p-fluid","header","Cancelar remisi\xF3n",3,"visible","modal","visibleChange"],[1,"flex","flex-wrap","align-items-center","justify-content-between","gap-3"],[1,"flex","align-items-center","gap-2"],[1,"flex"],["size","small","label","Nueva","icon","pi pi-plus","severity","success",1,"mr-2",3,"click"],["size","small","label","Borrar","icon","pi pi-trash","severity","danger",1,"mr-2",3,"disabled","click"],["type","button","pButton","","size","small","pRipple","","icon","pi pi-file-excel","pTooltip","Generar XLS de los resultados de b\xFAsqueda","tooltipPosition","bottom",1,"p-button-success","mr-2",3,"click"],["type","button","pButton","","size","small","pRipple","","icon","pi pi-file-excel","pTooltip","Generar XLS de remisiones detallado ","tooltipPosition","bottom",1,"p-button-success","mr-2",3,"click"],[2,"width","4rem"],[2,"width","5%"],[2,"width","8%"],[2,"width","17%"],[2,"width","11%"],[2,"width","7%"],[3,"value"],[3,"pTooltip"],[1,"p-column-title","text-xs"],[1,"p-column-title"],["size","small","icon","pi pi-pencil","pTooltip","Editar la remisi\xF3n",3,"routerLink","click"],["size","small","icon","pi pi-print","pTooltip","Imprimir la remisi\xF3n",3,"click"],["size","small","icon","pi pi-clone","pTooltip","Sustituir la remisi\xF3n",3,"click"],["size","small","icon","pi pi-check","pTooltip","Validar entrega de la remisi\xF3n",3,"click",4,"ngIf"],["size","small","icon","pi pi-times-circle","pTooltip","Cancelar la remisi\xF3n",3,"click",4,"ngIf"],["size","small","icon","pi pi-check","pTooltip","Validar entrega de la remisi\xF3n",3,"click"],["size","small","icon","pi pi-times-circle","pTooltip","Cancelar la remisi\xF3n",3,"click"],[1,"flex","flex-column","align-items-center","w-full","gap-3","border-bottom-1","surface-border"],[1,"flex","flex-column","gap-2"],["for","username"],["pInputText","","id","username","aria-describedby","username-help",1,"p-inputtext-sm","text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","text-xs",3,"ngModel","ngModelChange"],["id","username-help"],[1,"pi","pi-exclamation-circle","text-6xl","text-primary-500"],[1,"field","md:col-12","col-12"],["label","Imprimir con precios",1,"p-inputtext-sm","text-xs",3,"binary","ngModel","ngModelChange"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text",3,"click"],["size","small","icon","pi pi-print","label","Imprimir",3,"click"],[1,"p-float-label"],["id","float-input","rows","5","cols","30","pInputTextarea","",3,"ngModel","ngModelChange"],["for","float-input"],["size","small","icon","pi pi-check","label","Aceptar",3,"click"],["pButton","","pRipple","","label","Cancelar","icon","pi pi-times",1,"p-button-text",3,"click","loading"]],template:function(t,n){t&1&&(s(0,"p-panel",0),S(1,Ye,2,0,"ng-template",1),s(2,"form",2)(3,"p-fieldset",3)(4,"div",4)(5,"div",5),w(6,"input",6),i(),s(7,"div",5)(8,"p-calendar",7),b("onSelect",function(){return n.initDateOnInput()})("onClearClick",function(){return n.initDateOnClear()}),i()(),s(9,"div",5),w(10,"p-calendar",8),i()(),s(11,"div",4)(12,"div",5),w(13,"p-dropdown",9),i()(),s(14,"div",4),w(15,"div",10)(16,"div",11),s(17,"div",10)(18,"p-button",12),b("onClick",function(){return n.loadRemissions()}),i()()()()(),s(19,"p-table",13),T("selectionChange",function(o){return E(n.selectedRemissions,o)||(n.selectedRemissions=o),o}),b("onRowSelect",function(o){return n.onRowSelect(o)}),S(20,$e,5,1,"ng-template",14)(21,Je,30,0,"ng-template",15)(22,tt,57,26,"ng-template",16),i(),w(23,"p-toast"),s(24,"p-confirmDialog"),S(25,it,10,2,"ng-template",17),i()(),s(26,"p-dialog",18),T("visibleChange",function(o){return E(n.visiblePrintModal,o)||(n.visiblePrintModal=o),o}),S(27,nt,2,2,"ng-template",19)(28,ot,2,0,"ng-template",1),i(),s(29,"p-dialog",20),T("visibleChange",function(o){return E(n.visibleValidateModal,o)||(n.visibleValidateModal=o),o}),s(30,"app-remission-check",21),b("updateEvent",function(o){return n.getValidationData(o)}),i(),S(31,st,1,0,"ng-template",1),i(),s(32,"p-dialog",22),T("visibleChange",function(o){return E(n.visibleCancelModal,o)||(n.visibleCancelModal=o),o}),S(33,rt,9,1,"ng-template",19)(34,lt,2,0,"ng-template",1),i()),t&2&&(m(2),g("formGroup",n.filtersForm),m(),g("toggleable",!0),m(5),g("iconDisplay","input")("showButtonBar",!0)("showIcon",!0),m(2),g("iconDisplay","input")("showButtonBar",!0)("showIcon",!0)("minDate",n.minDate),m(3),g("showClear",!0)("options",n.destinations),m(5),g("raised",!0)("loading",n.loadingRemissions),m(),g("value",n.remissions)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("breakpoint","960px")("tableStyle",F(35,at))("styleClass","p-datatable-sm"),y("selection",n.selectedRemissions),g("rowsPerPageOptions",F(36,ct)),m(7),P(F(37,mt)),y("visible",n.visiblePrintModal),g("modal",!0),m(3),P(F(38,pt)),y("visible",n.visibleValidateModal),g("modal",!0),m(),g("inputData",n.selectedRemission),m(2),P(F(39,dt)),y("visible",n.visibleCancelModal),g("modal",!0))},dependencies:[Q,Y,J,$,Re,we,de,Se,fe,ue,_e,Ce,xe,ge,he,Me,Le,pe,le,te,ne,oe,ae,ce,ye,ve,be,Te,Ee,Fe,De,ke,Ie,Ve,ee,me,re,Be,Pe,Ae,Oe,We,ze,Ne]});let a=d;return a})();export{Jt as RemisionListComponent};
