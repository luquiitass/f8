(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{ZAPo:function(o,e,r){"use strict";r.r(e),r.d(e,"HomePageModule",(function(){return d}));var t=r("ofXK"),i=r("3Pt+"),n=r("TEn/"),b=r("tyNb"),s=r("mrSG"),c=r("Dwri"),l=r("fXoL"),u=r("y/q6");const a=[{path:"",component:(()=>{class o{constructor(o,e){this.userAuthService=o,this.modalController=e}ngOnInit(){}logout(){this.userAuthService.logout()}search(){return Object(s.a)(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:c.a,componentProps:{cancellable:!1,model:"User",function:"searchUser",multiple:!1}});return o.onDidDismiss().then(o=>{}),yield o.present()}))}}return o.\u0275fac=function(e){return new(e||o)(l.Kb(u.a),l.Kb(n.hb))},o.\u0275cmp=l.Eb({type:o,selectors:[["app-home"]],decls:36,vars:0,consts:[["routerLink","/","routerDirection","forward"],["routerLink","/positions","routerDirection","forward"],["routerLink","/typesEvent","routerDirection","forward"],["routerLink","/teams","routerDirection","forward"],["routerLink","/games","routerDirection","forward"],["routerLink","/players","routerDirection","forward"],["routerLink","/users","routerDirection","forward"],["routerLink","/errors","routerDirection","forward"],[3,"click"]],template:function(o,e){1&o&&(l.Pb(0,"ion-header"),l.Pb(1,"ion-toolbar"),l.Pb(2,"ion-title"),l.sc(3,"Admin home"),l.Ob(),l.Ob(),l.Ob(),l.Pb(4,"ion-content"),l.Pb(5,"ion-list"),l.Pb(6,"ion-item",0),l.Pb(7,"ion-label"),l.sc(8,"Home user"),l.Ob(),l.Ob(),l.Pb(9,"ion-item",1),l.Pb(10,"ion-label"),l.sc(11,"Posiciones"),l.Ob(),l.Ob(),l.Pb(12,"ion-item",2),l.Pb(13,"ion-label"),l.sc(14,"Tipo de Evento"),l.Ob(),l.Ob(),l.Pb(15,"ion-item",3),l.Pb(16,"ion-label"),l.sc(17,"Equipos"),l.Ob(),l.Ob(),l.Pb(18,"ion-item",4),l.Pb(19,"ion-label"),l.sc(20,"Partidos"),l.Ob(),l.Ob(),l.Pb(21,"ion-item",5),l.Pb(22,"ion-label"),l.sc(23,"Jugadores"),l.Ob(),l.Ob(),l.Pb(24,"ion-item",6),l.Pb(25,"ion-label"),l.sc(26,"Users"),l.Ob(),l.Ob(),l.Pb(27,"ion-item",7),l.Pb(28,"ion-label"),l.sc(29,"Errores"),l.Ob(),l.Ob(),l.Pb(30,"ion-item",8),l.Xb("click",(function(){return e.search()})),l.Pb(31,"ion-label"),l.sc(32,"Search"),l.Ob(),l.Ob(),l.Pb(33,"ion-item",8),l.Xb("click",(function(){return e.logout()})),l.Pb(34,"ion-label"),l.sc(35,"Logout"),l.Ob(),l.Ob(),l.Ob(),l.Ob())},directives:[n.x,n.db,n.bb,n.r,n.E,n.B,n.mb,b.h,n.D],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275mod=l.Ib({type:o}),o.\u0275inj=l.Hb({factory:function(e){return new(e||o)},imports:[[b.j.forChild(a)],b.j]}),o})(),d=(()=>{class o{}return o.\u0275mod=l.Ib({type:o}),o.\u0275inj=l.Hb({factory:function(e){return new(e||o)},imports:[[t.b,i.a,n.eb,m]]}),o})()}}]);