(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{uwJ2:function(i,t,o){"use strict";o.r(t),o.d(t,"ListPageModule",(function(){return P}));var n=o("ofXK"),e=o("3Pt+"),s=o("TEn/"),r=o("tyNb"),c=o("mrSG"),l=o("U6ZO"),b=o("8xVP"),a=o("fXoL"),d=o("G/jy"),u=o("vuFD");function p(i,t){1&i&&(a.Pb(0,"ion-list-header",8),a.Pb(1,"ion-label"),a.sc(2,"Sin registros"),a.Ob(),a.Ob())}function f(i,t){if(1&i){const i=a.Qb();a.Pb(0,"ion-item"),a.Pb(1,"ion-label"),a.Pb(2,"h3"),a.sc(3),a.Ob(),a.Ob(),a.Pb(4,"ion-buttons",9),a.Pb(5,"ion-button",3),a.Xb("click",(function(){a.mc(i);const o=t.$implicit;return a.Zb().showEdit(o)})),a.Lb(6,"ion-icon",10),a.Ob(),a.Pb(7,"ion-button",3),a.Xb("click",(function(){a.mc(i);const o=t.$implicit;return a.Zb().confirmDelete(o)})),a.Lb(8,"ion-icon",11),a.Ob(),a.Ob(),a.Ob()}if(2&i){const i=t.$implicit;a.xb(3),a.tc(i.name)}}const h=[{path:"",component:(()=>{class i{constructor(i,t,o,n){this.request=i,this.dialogService=t,this.modalController=o,this.dialog=n,this.positionService=new b.a("Position",i)}ngOnInit(){this.positionService.api_all()}openModal(){return Object(c.a)(this,void 0,void 0,(function*(){const i=yield this.modalController.create({component:l.a});return i.onDidDismiss().then(i=>{this.positionService.listAddLast(i.data.posicion)}),yield i.present()}))}showEdit(i){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:l.a,componentProps:{id:i.id}});return t.onDidDismiss().then(t=>{console.log(t),this.positionService.listUpdate(i.id,i)}),yield t.present()}))}confirmDelete(i){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este posicion",t=>{this.delete(i)})}delete(i){this.positionService.api_delete(i.id).subscribe(t=>{console.log(t),"success"==t.status&&(this.dialog.showToast("Position Eliminado",null,"success"),this.positionService.listDelete(i.id))})}}return i.\u0275fac=function(t){return new(t||i)(a.Kb(d.a),a.Kb(u.a),a.Kb(s.hb),a.Kb(u.a))},i.\u0275cmp=a.Eb({type:i,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(i,t){1&i&&(a.Pb(0,"ion-header"),a.Pb(1,"ion-toolbar"),a.Pb(2,"ion-buttons",0),a.Lb(3,"ion-back-button",1),a.Ob(),a.Pb(4,"ion-title"),a.sc(5,"Posiciones"),a.Ob(),a.Pb(6,"ion-buttons",2),a.Pb(7,"ion-button",3),a.Xb("click",(function(){return t.openModal()})),a.Lb(8,"ion-icon",4),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(9,"ion-content"),a.Pb(10,"ion-refresher",5),a.Xb("ionRefresh",(function(i){return t.positionService.api_all(i)})),a.Lb(11,"ion-refresher-content"),a.Ob(),a.Pb(12,"ion-list"),a.rc(13,p,3,0,"ion-list-header",6),a.rc(14,f,9,1,"ion-item",7),a.Ob(),a.Ob()),2&i&&(a.xb(13),a.ec("ngIf",0==t.positionService.list.length),a.xb(1),a.ec("ngForOf",t.positionService.list))},directives:[s.x,s.db,s.j,s.f,s.g,s.bb,s.i,s.y,s.r,s.J,s.K,s.E,n.k,n.j,s.F,s.D,s.B],styles:[""]}),i})()}];let m=(()=>{class i{}return i.\u0275mod=a.Ib({type:i}),i.\u0275inj=a.Hb({factory:function(t){return new(t||i)},imports:[[r.j.forChild(h)],r.j]}),i})(),P=(()=>{class i{}return i.\u0275mod=a.Ib({type:i}),i.\u0275inj=a.Hb({factory:function(t){return new(t||i)},imports:[[n.b,e.a,s.eb,m]]}),i})()}}]);