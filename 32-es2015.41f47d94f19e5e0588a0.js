(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{uwJ2:function(i,t,o){"use strict";o.r(t),o.d(t,"ListPageModule",(function(){return M}));var n=o("ofXK"),e=o("3Pt+"),s=o("TEn/"),r=o("tyNb"),c=o("mrSG"),l=o("U6ZO"),b=o("8xVP"),a=o("fXoL"),d=o("G/jy"),u=o("vuFD");function p(i,t){1&i&&(a.Nb(0,"ion-list-header",8),a.Nb(1,"ion-label"),a.rc(2,"Sin registros"),a.Mb(),a.Mb())}function f(i,t){if(1&i){const i=a.Ob();a.Nb(0,"ion-item"),a.Nb(1,"ion-label"),a.Nb(2,"h3"),a.rc(3),a.Mb(),a.Mb(),a.Nb(4,"ion-buttons",9),a.Nb(5,"ion-button",3),a.Vb("click",(function(){a.lc(i);const o=t.$implicit;return a.Xb().showEdit(o)})),a.Jb(6,"ion-icon",10),a.Mb(),a.Nb(7,"ion-button",3),a.Vb("click",(function(){a.lc(i);const o=t.$implicit;return a.Xb().confirmDelete(o)})),a.Jb(8,"ion-icon",11),a.Mb(),a.Mb(),a.Mb()}if(2&i){const i=t.$implicit;a.xb(3),a.sc(i.name)}}const h=[{path:"",component:(()=>{class i{constructor(i,t,o,n){this.request=i,this.dialogService=t,this.modalController=o,this.dialog=n,this.positionService=new b.a("Position",i)}ngOnInit(){this.positionService.api_all()}openModal(){return Object(c.a)(this,void 0,void 0,(function*(){const i=yield this.modalController.create({component:l.a});return i.onDidDismiss().then(i=>{this.positionService.listAddLast(i.data.posicion)}),yield i.present()}))}showEdit(i){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:l.a,componentProps:{id:i.id}});return t.onDidDismiss().then(t=>{console.log(t),this.positionService.listUpdate(i.id,i)}),yield t.present()}))}confirmDelete(i){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este posicion",t=>{this.delete(i)})}delete(i){this.positionService.api_delete(i.id).subscribe(t=>{console.log(t),"success"==t.status&&(this.dialog.showToast("Position Eliminado",null,"success"),this.positionService.listDelete(i.id))})}}return i.\u0275fac=function(t){return new(t||i)(a.Ib(d.a),a.Ib(u.a),a.Ib(s.V),a.Ib(u.a))},i.\u0275cmp=a.Cb({type:i,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(i,t){1&i&&(a.Nb(0,"ion-header"),a.Nb(1,"ion-toolbar"),a.Nb(2,"ion-buttons",0),a.Jb(3,"ion-back-button",1),a.Mb(),a.Nb(4,"ion-title"),a.rc(5,"Posiciones"),a.Mb(),a.Nb(6,"ion-buttons",2),a.Nb(7,"ion-button",3),a.Vb("click",(function(){return t.openModal()})),a.Jb(8,"ion-icon",4),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(9,"ion-content"),a.Nb(10,"ion-refresher",5),a.Vb("ionRefresh",(function(i){return t.positionService.api_all(i)})),a.Jb(11,"ion-refresher-content"),a.Mb(),a.Nb(12,"ion-list"),a.qc(13,p,3,0,"ion-list-header",6),a.qc(14,f,9,1,"ion-item",7),a.Mb(),a.Mb()),2&i&&(a.xb(13),a.cc("ngIf",0==t.positionService.list.length),a.xb(1),a.cc("ngForOf",t.positionService.list))},directives:[s.r,s.R,s.f,s.c,s.d,s.Q,s.e,s.s,s.m,s.C,s.D,s.x,n.k,n.j,s.y,s.w,s.v],styles:[""]}),i})()}];let m=(()=>{class i{}return i.\u0275mod=a.Gb({type:i}),i.\u0275inj=a.Fb({factory:function(t){return new(t||i)},imports:[[r.j.forChild(h)],r.j]}),i})(),M=(()=>{class i{}return i.\u0275mod=a.Gb({type:i}),i.\u0275inj=a.Fb({factory:function(t){return new(t||i)},imports:[[n.b,e.a,s.S,m]]}),i})()}}]);