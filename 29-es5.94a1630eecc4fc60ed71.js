!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{hZ7N:function(t,i,o){"use strict";o.r(i),o.d(i,"AdminGamePageModule",(function(){return j}));var a=o("ofXK"),r=o("3Pt+"),s=o("TEn/"),c=o("tyNb"),u=o("mrSG"),b=o("8xVP"),d=o("j/D2"),l=o("fXoL"),f=o("G/jy"),m=o("2Rin"),p=o("ZETu");function h(e,n){if(1&e){var t=l.Qb();l.Pb(0,"ion-content"),l.Lb(1,"app-event-list",1),l.Pb(2,"pre"),l.sc(3),l.ac(4,"json"),l.Ob(),l.Pb(5,"ion-button",2),l.Xb("click",(function(){return l.mc(t),l.Zb().addEvent()})),l.sc(6," A\xf1adir Eventos"),l.Ob(),l.Ob()}if(2&e){var i=l.Zb();l.xb(1),l.ec("game_id",i.id),l.xb(2),l.tc(l.bc(4,2,i.game))}}var v,g,w,y=[{path:"",component:(v=function(){function t(n,i,o,a){e(this,t),this.route=n,this.requesService=i,this.util=o,this.modalController=a,this.game=[],this.id=this.route.snapshot.paramMap.get("id"),this.gameModel=new b.a("Game",i),console.log("id",this.id)}var i,o,a;return i=t,(o=[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.gameModel.api_find(this.id).subscribe((function(t){"success"==t.status&&(e.game=t.Game),n&&n.target.complete()}))}},{key:"addEvent",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:d.a,componentProps:{game_id:this.game.id}});case 2:return(n=e.sent).onDidDismiss().then((function(e){var n=e.data.event;console.log(n),t.game.events.push(n)})),e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}])&&n(i.prototype,o),a&&n(i,a),t}(),v.\u0275fac=function(e){return new(e||v)(l.Kb(c.a),l.Kb(f.a),l.Kb(m.a),l.Kb(s.hb))},v.\u0275cmp=l.Eb({type:v,selectors:[["app-admin-game"]],decls:5,vars:1,consts:[[4,"ngIf"],[3,"game_id"],["expand","block",3,"click"]],template:function(e,n){1&e&&(l.Pb(0,"ion-header"),l.Pb(1,"ion-toolbar"),l.Pb(2,"ion-title"),l.sc(3,"admin-game"),l.Ob(),l.Ob(),l.Ob(),l.rc(4,h,7,4,"ion-content",0)),2&e&&(l.xb(4),l.ec("ngIf",n.game))},directives:[s.x,s.db,s.bb,a.k,s.r,p.a,s.i],pipes:[a.e],styles:[""]}),v)}],k=((g=function n(){e(this,n)}).\u0275mod=l.Ib({type:g}),g.\u0275inj=l.Hb({factory:function(e){return new(e||g)},imports:[[c.j.forChild(y)],c.j]}),g),P=o("j1ZV"),j=((w=function n(){e(this,n)}).\u0275mod=l.Ib({type:w}),w.\u0275inj=l.Hb({factory:function(e){return new(e||w)},imports:[[a.b,r.a,s.eb,k,P.a]]}),w)}}])}();