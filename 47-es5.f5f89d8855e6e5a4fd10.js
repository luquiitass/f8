!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"k+ul":function(n,i,o){"use strict";o.r(i),o.d(i,"Tab3PageModule",(function(){return k}));var r=o("TEn/"),a=o("tyNb"),c=o("ofXK"),s=o("3Pt+"),u=o("mrSG"),l=o("rBWs"),b=o("8xVP"),f=o("fXoL"),m=o("G/jy"),p=o("vuFD");function d(e,t){if(1&e){var n=f.Ob();f.Nb(0,"ion-item"),f.Nb(1,"ion-label"),f.Nb(2,"h3"),f.rc(3),f.Mb(),f.Mb(),f.Nb(4,"ion-buttons",7),f.Nb(5,"ion-button"),f.Jb(6,"ion-icon",8),f.Mb(),f.Nb(7,"ion-button",6),f.Vb("click",(function(){f.lc(n);var e=t.$implicit;return f.Xb().showEdit(e)})),f.Jb(8,"ion-icon",9),f.Mb(),f.Nb(9,"ion-button",6),f.Vb("click",(function(){f.lc(n);var e=t.$implicit;return f.Xb().confirmDelete(e)})),f.Jb(10,"ion-icon",10),f.Mb(),f.Mb(),f.Mb()}if(2&e){var i=t.$implicit;f.xb(3),f.sc(i.name)}}var h,v,w,y=((h=function(){function n(t,i,o){e(this,n),this.request=t,this.modalController=i,this.dialog=o,this.teamService=new b.a("Team",t)}var i,o,r;return i=n,(o=[{key:"ngOnInit",value:function(){this.teamService.api_all()}},{key:"openModal",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:l.a});case 2:return(t=e.sent).onDidDismiss().then((function(e){n.teamService.listAddLast(e.data.team)})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"showEdit",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:l.a,componentProps:{team:e}});case 2:return(n=t.sent).onDidDismiss().then((function(t){console.log(t),i.teamService.listUpdate(e.id,e)})),t.next=6,n.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"confirmDelete",value:function(e){var t=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este equipo",(function(n){t.delete(e)}))}},{key:"delete",value:function(e){var t=this;this.teamService.api_delete(e.id).subscribe((function(n){console.log(n),"success"==n.status&&(t.dialog.showToast("Team Eliminado",null,"success"),t.teamService.listDelete(e.id))}))}}])&&t(i.prototype,o),r&&t(i,r),n}()).\u0275fac=function(e){return new(e||h)(f.Ib(m.a),f.Ib(r.V),f.Ib(p.a))},h.\u0275cmp=f.Cb({type:h,selectors:[["app-tab3"]],decls:15,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["color","tertiary"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["slot","end"],["name","enter-outline"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,t){1&e&&(f.Nb(0,"ion-header",0),f.Nb(1,"ion-toolbar"),f.Nb(2,"ion-title"),f.rc(3," Equipos "),f.Mb(),f.Mb(),f.Mb(),f.Nb(4,"ion-content",1),f.Nb(5,"ion-refresher",2),f.Vb("ionRefresh",(function(e){return t.teamService.api_all(e)})),f.Jb(6,"ion-refresher-content"),f.Mb(),f.Nb(7,"ion-list"),f.Nb(8,"ion-list-header",3),f.Nb(9,"ion-label"),f.rc(10,"Equipos"),f.Mb(),f.Mb(),f.qc(11,d,11,1,"ion-item",4),f.Mb(),f.Nb(12,"ion-fab",5),f.Nb(13,"ion-fab-button",6),f.Vb("click",(function(){return t.openModal()})),f.rc(14," New "),f.Mb(),f.Mb(),f.Mb()),2&e&&(f.cc("translucent",!0),f.xb(4),f.cc("fullscreen",!0),f.xb(7),f.cc("ngForOf",t.teamService.list))},directives:[r.r,r.R,r.Q,r.m,r.C,r.D,r.x,r.y,r.w,c.j,r.o,r.p,r.v,r.f,r.e,r.s],styles:[""]}),h),M=o("qtYk"),N=[{path:"",component:y}],g=((w=function t(){e(this,t)}).\u0275mod=f.Gb({type:w}),w.\u0275inj=f.Fb({factory:function(e){return new(e||w)},imports:[[a.j.forChild(N)],a.j]}),w),k=((v=function t(){e(this,t)}).\u0275mod=f.Gb({type:v}),v.\u0275inj=f.Fb({factory:function(e){return new(e||v)},imports:[[r.S,c.b,s.a,M.a,a.j.forChild([{path:"",component:y}]),g]]}),v)}}])}();