!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{gnoQ:function(n,i,o){"use strict";o.r(i),o.d(i,"ListPageModule",(function(){return N}));var r=o("ofXK"),a=o("3Pt+"),c=o("TEn/"),s=o("tyNb"),u=o("mrSG"),l=o("rBWs"),b=o("8xVP"),f=o("fXoL"),m=o("G/jy"),d=o("vuFD");function p(e,t){1&e&&(f.Nb(0,"ion-list-header",8),f.Nb(1,"ion-label"),f.rc(2,"Sin registros"),f.Mb(),f.Mb())}function h(e,t){if(1&e){var n=f.Ob();f.Nb(0,"ion-item"),f.Nb(1,"ion-label"),f.Nb(2,"h3"),f.rc(3),f.Mb(),f.Mb(),f.Nb(4,"ion-buttons",9),f.Nb(5,"ion-button"),f.Jb(6,"ion-icon",10),f.Mb(),f.Nb(7,"ion-button",3),f.Vb("click",(function(){f.lc(n);var e=t.$implicit;return f.Xb().showEdit(e)})),f.Jb(8,"ion-icon",11),f.Mb(),f.Nb(9,"ion-button",3),f.Vb("click",(function(){f.lc(n);var e=t.$implicit;return f.Xb().confirmDelete(e)})),f.Jb(10,"ion-icon",12),f.Mb(),f.Mb(),f.Mb()}if(2&e){var i=t.$implicit;f.xb(3),f.sc(i.name)}}var v,y,g,w=[{path:"",component:(v=function(){function n(t,i,o){e(this,n),this.request=t,this.modalController=i,this.dialog=o,this.teamService=new b.a("Team",t)}var i,o,r;return i=n,(o=[{key:"ngOnInit",value:function(){this.teamService.api_all()}},{key:"openModal",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:l.a});case 2:return(t=e.sent).onDidDismiss().then((function(e){n.teamService.listAddLast(e.data.team)})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"showEdit",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:l.a,componentProps:{id:e.id}});case 2:return(n=t.sent).onDidDismiss().then((function(e){var t=e.data.team;i.teamService.listUpdate(t.id,t)})),t.next=6,n.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"confirmDelete",value:function(e){var t=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este equipo",(function(n){t.delete(e)}))}},{key:"delete",value:function(e){var t=this;this.teamService.api_delete(e.id).subscribe((function(n){console.log(n),"success"==n.status&&(t.dialog.showToast("Team Eliminado",null,"success"),t.teamService.listDelete(e.id))}))}}])&&t(i.prototype,o),r&&t(i,r),n}(),v.\u0275fac=function(e){return new(e||v)(f.Ib(m.a),f.Ib(c.V),f.Ib(d.a))},v.\u0275cmp=f.Cb({type:v,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["name","enter-outline"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,t){1&e&&(f.Nb(0,"ion-header"),f.Nb(1,"ion-toolbar"),f.Nb(2,"ion-buttons",0),f.Jb(3,"ion-back-button",1),f.Mb(),f.Nb(4,"ion-title"),f.rc(5,"Equipos"),f.Mb(),f.Nb(6,"ion-buttons",2),f.Nb(7,"ion-button",3),f.Vb("click",(function(){return t.openModal()})),f.Jb(8,"ion-icon",4),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(9,"ion-content"),f.Nb(10,"ion-refresher",5),f.Vb("ionRefresh",(function(e){return t.teamService.api_all(e)})),f.Jb(11,"ion-refresher-content"),f.Mb(),f.Nb(12,"ion-list"),f.qc(13,p,3,0,"ion-list-header",6),f.qc(14,h,11,1,"ion-item",7),f.Mb(),f.Mb()),2&e&&(f.xb(13),f.cc("ngIf",0==t.teamService.list.length),f.xb(1),f.cc("ngForOf",t.teamService.list))},directives:[c.r,c.R,c.f,c.c,c.d,c.Q,c.e,c.s,c.m,c.C,c.D,c.x,r.k,r.j,c.y,c.w,c.v],styles:[""]}),v)}],M=((g=function t(){e(this,t)}).\u0275mod=f.Gb({type:g}),g.\u0275inj=f.Fb({factory:function(e){return new(e||g)},imports:[[s.j.forChild(w)],s.j]}),g),N=((y=function t(){e(this,t)}).\u0275mod=f.Gb({type:y}),y.\u0275inj=f.Fb({factory:function(e){return new(e||y)},imports:[[r.b,a.a,c.S,M]]}),y)}}])}();