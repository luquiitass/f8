!function(){function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{ZAPo:function(n,o,t){"use strict";t.r(o),t.d(o,"HomePageModule",(function(){return h}));var i,b,c,s=t("ofXK"),u=t("3Pt+"),a=t("TEn/"),l=t("tyNb"),f=t("mrSG"),m=t("Dwri"),p=t("fXoL"),P=t("y/q6"),d=[{path:"",component:(i=function(){function n(r,o){e(this,n),this.userAuthService=r,this.modalController=o}var o,t,i;return o=n,(t=[{key:"ngOnInit",value:function(){}},{key:"logout",value:function(){this.userAuthService.logout()}},{key:"search",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:m.a,componentProps:{cancellable:!1,model:"User",function:"searchUser",multiple:!1}});case 2:return(r=e.sent).onDidDismiss().then((function(e){})),e.next=6,r.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}])&&r(o.prototype,t),i&&r(o,i),n}(),i.\u0275fac=function(e){return new(e||i)(p.Kb(P.a),p.Kb(a.hb))},i.\u0275cmp=p.Eb({type:i,selectors:[["app-home"]],decls:36,vars:0,consts:[["routerLink","/","routerDirection","forward"],["routerLink","/positions","routerDirection","forward"],["routerLink","/typesEvent","routerDirection","forward"],["routerLink","/teams","routerDirection","forward"],["routerLink","/games","routerDirection","forward"],["routerLink","/players","routerDirection","forward"],["routerLink","/users","routerDirection","forward"],["routerLink","/errors","routerDirection","forward"],[3,"click"]],template:function(e,r){1&e&&(p.Pb(0,"ion-header"),p.Pb(1,"ion-toolbar"),p.Pb(2,"ion-title"),p.sc(3,"Admin home"),p.Ob(),p.Ob(),p.Ob(),p.Pb(4,"ion-content"),p.Pb(5,"ion-list"),p.Pb(6,"ion-item",0),p.Pb(7,"ion-label"),p.sc(8,"Home user"),p.Ob(),p.Ob(),p.Pb(9,"ion-item",1),p.Pb(10,"ion-label"),p.sc(11,"Posiciones"),p.Ob(),p.Ob(),p.Pb(12,"ion-item",2),p.Pb(13,"ion-label"),p.sc(14,"Tipo de Evento"),p.Ob(),p.Ob(),p.Pb(15,"ion-item",3),p.Pb(16,"ion-label"),p.sc(17,"Equipos"),p.Ob(),p.Ob(),p.Pb(18,"ion-item",4),p.Pb(19,"ion-label"),p.sc(20,"Partidos"),p.Ob(),p.Ob(),p.Pb(21,"ion-item",5),p.Pb(22,"ion-label"),p.sc(23,"Jugadores"),p.Ob(),p.Ob(),p.Pb(24,"ion-item",6),p.Pb(25,"ion-label"),p.sc(26,"Users"),p.Ob(),p.Ob(),p.Pb(27,"ion-item",7),p.Pb(28,"ion-label"),p.sc(29,"Errores"),p.Ob(),p.Ob(),p.Pb(30,"ion-item",8),p.Xb("click",(function(){return r.search()})),p.Pb(31,"ion-label"),p.sc(32,"Search"),p.Ob(),p.Ob(),p.Pb(33,"ion-item",8),p.Xb("click",(function(){return r.logout()})),p.Pb(34,"ion-label"),p.sc(35,"Logout"),p.Ob(),p.Ob(),p.Ob(),p.Ob())},directives:[a.x,a.db,a.bb,a.r,a.E,a.B,a.mb,l.h,a.D],styles:[""]}),i)}],O=((c=function r(){e(this,r)}).\u0275mod=p.Ib({type:c}),c.\u0275inj=p.Hb({factory:function(e){return new(e||c)},imports:[[l.j.forChild(d)],l.j]}),c),h=((b=function r(){e(this,r)}).\u0275mod=p.Ib({type:b}),b.\u0275inj=p.Hb({factory:function(e){return new(e||b)},imports:[[s.b,u.a,a.eb,O]]}),b)}}])}();