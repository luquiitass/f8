(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{YTQa:function(e,t,n){"use strict";n.r(t),n.d(t,"ListPageModule",(function(){return v}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),c=n("mrSG"),l=n("j/D2"),b=n("8xVP"),a=n("fXoL"),d=n("G/jy"),u=n("vuFD");function f(e,t){1&e&&(a.Pb(0,"ion-list-header",8),a.Pb(1,"ion-label"),a.sc(2,"Sin registros"),a.Ob(),a.Ob())}function h(e,t){if(1&e){const e=a.Qb();a.Pb(0,"ion-item"),a.Pb(1,"ion-label"),a.Pb(2,"h3"),a.sc(3),a.Ob(),a.Ob(),a.Pb(4,"ion-buttons",9),a.Pb(5,"ion-button",3),a.Xb("click",(function(){a.mc(e);const n=t.$implicit;return a.Zb().showEdit(n)})),a.Lb(6,"ion-icon",10),a.Ob(),a.Pb(7,"ion-button",3),a.Xb("click",(function(){a.mc(e);const n=t.$implicit;return a.Zb().confirmDelete(n)})),a.Lb(8,"ion-icon",11),a.Ob(),a.Ob(),a.Ob()}if(2&e){const e=t.$implicit;a.xb(3),a.tc(e.name)}}const m=[{path:"",component:(()=>{class e{constructor(e,t,n){this.request=e,this.modalController=t,this.dialog=n,this.eventService=new b.a("Event",e)}ngOnInit(){this.eventService.api_all()}openModal(){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:l.a});return e.onDidDismiss().then(e=>{this.eventService.listAddLast(e.data.event)}),yield e.present()}))}showEdit(e){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:l.a,componentProps:{event:e}});return t.onDidDismiss().then(t=>{console.log(t),this.eventService.listUpdate(e.id,e)}),yield t.present()}))}confirmDelete(e){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este event",t=>{this.delete(e)})}delete(e){this.eventService.api_delete(e.id).subscribe(t=>{console.log(t),"success"==t.status&&(this.dialog.showToast("Evento Eliminado",null,"success"),this.eventService.listDelete(e.id))})}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(d.a),a.Kb(s.hb),a.Kb(u.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,t){1&e&&(a.Pb(0,"ion-header"),a.Pb(1,"ion-toolbar"),a.Pb(2,"ion-buttons",0),a.Lb(3,"ion-back-button",1),a.Ob(),a.Pb(4,"ion-title"),a.sc(5,"Eventos"),a.Ob(),a.Pb(6,"ion-buttons",2),a.Pb(7,"ion-button",3),a.Xb("click",(function(){return t.openModal()})),a.Lb(8,"ion-icon",4),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(9,"ion-content"),a.Pb(10,"ion-refresher",5),a.Xb("ionRefresh",(function(e){return t.eventService.api_all(e)})),a.Lb(11,"ion-refresher-content"),a.Ob(),a.Pb(12,"ion-list"),a.rc(13,f,3,0,"ion-list-header",6),a.rc(14,h,9,1,"ion-item",7),a.Ob(),a.Ob()),2&e&&(a.xb(13),a.ec("ngIf",0==t.eventService.list.length),a.xb(1),a.ec("ngForOf",t.eventService.list))},directives:[s.x,s.db,s.j,s.f,s.g,s.bb,s.i,s.y,s.r,s.J,s.K,s.E,i.k,i.j,s.F,s.D,s.B],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[r.j.forChild(m)],r.j]}),e})(),v=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[i.b,o.a,s.eb,p]]}),e})()}}]);