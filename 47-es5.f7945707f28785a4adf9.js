!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{niya:function(n,i,o){"use strict";o.r(i),o.d(i,"ListPageModule",(function(){return P}));var r=o("ofXK"),s=o("3Pt+"),c=o("TEn/"),a=o("tyNb"),u=o("mrSG"),b=o("8xVP"),l=o("mzSd"),f=o("fXoL"),p=o("G/jy"),d=o("vuFD");function v(e,t){1&e&&(f.Pb(0,"ion-list-header",8),f.Pb(1,"ion-label"),f.sc(2,"Sin registros"),f.Ob(),f.Ob())}function h(e,t){if(1&e){var n=f.Qb();f.Pb(0,"ion-item"),f.Pb(1,"ion-label"),f.Pb(2,"h3"),f.sc(3),f.Ob(),f.Ob(),f.Pb(4,"ion-buttons",9),f.Pb(5,"ion-button",3),f.Xb("click",(function(){f.mc(n);var e=t.$implicit;return f.Zb().showEdit(e)})),f.Lb(6,"ion-icon",10),f.Ob(),f.Pb(7,"ion-button",3),f.Xb("click",(function(){f.mc(n);var e=t.$implicit;return f.Zb().confirmDelete(e)})),f.Lb(8,"ion-icon",11),f.Ob(),f.Ob(),f.Ob()}if(2&e){var i=t.$implicit;f.xb(3),f.tc(i.name)}}var m,y,g,E=[{path:"",component:(m=function(){function n(t,i,o,r){e(this,n),this.request=t,this.dialogService=i,this.modalController=o,this.dialog=r,this.typeEventService=new b.a("TypeEvent",t)}var i,o,r;return i=n,(o=[{key:"ngOnInit",value:function(){this.typeEventService.api_all()}},{key:"openModal",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:l.a});case 2:return(t=e.sent).onDidDismiss().then((function(e){n.typeEventService.listAddLast(e.data.typeEvent)})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"showEdit",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:l.a,componentProps:{id:e.id}});case 2:return(n=t.sent).onDidDismiss().then((function(t){console.log(t),i.typeEventService.listUpdate(e.id,t.data.typeEvent)})),t.next=6,n.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"confirmDelete",value:function(e){var t=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este typeEvent",(function(n){t.delete(e)}))}},{key:"delete",value:function(e){var t=this;this.typeEventService.api_delete(e.id).subscribe((function(n){console.log(n),"success"==n.status&&(t.dialog.showToast("TypeEvent Eliminado",null,"success"),t.typeEventService.listDelete(e.id))}))}}])&&t(i.prototype,o),r&&t(i,r),n}(),m.\u0275fac=function(e){return new(e||m)(f.Kb(p.a),f.Kb(d.a),f.Kb(c.hb),f.Kb(d.a))},m.\u0275cmp=f.Eb({type:m,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,t){1&e&&(f.Pb(0,"ion-header"),f.Pb(1,"ion-toolbar"),f.Pb(2,"ion-buttons",0),f.Lb(3,"ion-back-button",1),f.Ob(),f.Pb(4,"ion-title"),f.sc(5,"Tipos de Eventos"),f.Ob(),f.Pb(6,"ion-buttons",2),f.Pb(7,"ion-button",3),f.Xb("click",(function(){return t.openModal()})),f.Lb(8,"ion-icon",4),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Pb(9,"ion-content"),f.Pb(10,"ion-refresher",5),f.Xb("ionRefresh",(function(e){return t.typeEventService.api_all(e)})),f.Lb(11,"ion-refresher-content"),f.Ob(),f.Pb(12,"ion-list"),f.rc(13,v,3,0,"ion-list-header",6),f.rc(14,h,9,1,"ion-item",7),f.Ob(),f.Ob()),2&e&&(f.xb(13),f.ec("ngIf",0==t.typeEventService.list.length),f.xb(1),f.ec("ngForOf",t.typeEventService.list))},directives:[c.x,c.db,c.j,c.f,c.g,c.bb,c.i,c.y,c.r,c.J,c.K,c.E,r.k,r.j,c.F,c.D,c.B],styles:[""]}),m)}],O=((g=function t(){e(this,t)}).\u0275mod=f.Ib({type:g}),g.\u0275inj=f.Hb({factory:function(e){return new(e||g)},imports:[[a.j.forChild(E)],a.j]}),g),P=((y=function t(){e(this,t)}).\u0275mod=f.Ib({type:y}),y.\u0275inj=f.Hb({factory:function(e){return new(e||y)},imports:[[r.b,s.a,c.eb,O]]}),y)}}])}();