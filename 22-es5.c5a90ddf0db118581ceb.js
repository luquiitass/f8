!function(){function e(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==i.return||i.return()}finally{if(s)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Z1lk:function(e,t,i){"use strict";i.r(t),i.d(t,"ProfilePageModule",(function(){return j}));var o=i("ofXK"),a=i("3Pt+"),c=i("TEn/"),s=i("tyNb"),b=i("mrSG"),l=i("8xVP"),d=i("wd/R"),u=i("JTEZ"),p=i("fXoL"),f=i("G/jy"),g=i("y/q6"),m=i("vuFD"),h=i("dXyq"),v=i("6g0+");function y(e,t){if(1&e){var n=p.Qb();p.Pb(0,"ion-buttons",7),p.Pb(1,"ion-button",8),p.Xb("click",(function(){p.mc(n);var e=p.Zb();return e.showEdit(e.player)})),p.Lb(2,"ion-icon",9),p.Ob(),p.Ob()}}function P(e,t){if(1&e){var n=p.Qb();p.Pb(0,"ion-chip",10),p.Pb(1,"ion-label",11),p.sc(2," Eres el administrador de este perfil, puede activar la edicion aqu\xed. "),p.Ob(),p.Pb(3,"ion-toggle",12),p.Xb("ngModelChange",(function(e){return p.mc(n),p.Zb().canEdit=e})),p.Ob(),p.Ob()}if(2&e){var i=p.Zb();p.xb(3),p.ec("ngModel",i.canEdit)}}function O(e,t){if(1&e&&(p.Pb(0,"div"),p.Pb(1,"ion-card"),p.Lb(2,"ion-img-viewer",13),p.Pb(3,"h3",3),p.sc(4),p.Ob(),p.Ob(),p.Ob()),2&e){var n=p.Zb();p.xb(2),p.ec("text",n.player.name)("src",n.getPhoto()),p.xb(2),p.tc(n.player.name)}}function x(e,t){if(1&e&&(p.Pb(0,"div",16),p.sc(1),p.Ob()),2&e){var n=p.Zb(2);p.xb(1),p.uc(" ",n.player.position.name," ")}}function w(e,t){if(1&e&&(p.Pb(0,"div",27),p.Pb(1,"ion-text",28),p.sc(2,"Equipo Actual"),p.Ob(),p.Pb(3,"div"),p.Pb(4,"ion-item",29),p.Pb(5,"ion-thumbnail",0),p.Lb(6,"ion-img",30),p.Ob(),p.Pb(7,"ion-label"),p.Pb(8,"h2"),p.sc(9),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob()),2&e){var n=p.Zb(2);p.xb(4),p.gc("routerLink","/team/profile/",n.player.team.id,""),p.xb(2),p.ec("src",n.player.team.shield?n.player.team.shield.urlComplete:"assets/images/shield_team.png"),p.xb(3),p.tc(n.player.team.name)}}function k(e,t){if(1&e&&(p.Pb(0,"div"),p.Pb(1,"div",14),p.Pb(2,"ion-grid"),p.Pb(3,"ion-row"),p.Pb(4,"ion-col",15),p.Pb(5,"div"),p.sc(6," Edad "),p.Ob(),p.Pb(7,"div",16),p.sc(8),p.Ob(),p.Ob(),p.Pb(9,"ion-col",15),p.Pb(10,"div",17),p.sc(11," Peso "),p.Ob(),p.Pb(12,"div",18),p.sc(13),p.Ob(),p.Ob(),p.Ob(),p.Pb(14,"ion-row"),p.Pb(15,"ion-col",15),p.Pb(16,"div"),p.sc(17," Posici\xf3n "),p.Ob(),p.rc(18,x,2,1,"div",19),p.Ob(),p.Pb(19,"ion-col",15),p.Pb(20,"div",17),p.sc(21," Altura "),p.Ob(),p.Pb(22,"div",18),p.sc(23),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Pb(24,"div",20),p.Pb(25,"div",21),p.Pb(26,"div",22),p.sc(27),p.Ob(),p.Lb(28,"ion-img",23),p.Pb(29,"div",24),p.sc(30),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.rc(31,w,10,3,"div",25),p.Pb(32,"div"),p.Pb(33,"ion-card"),p.Pb(34,"ion-card-header"),p.Pb(35,"ion-card-title"),p.sc(36,"Estad\xedsticas"),p.Ob(),p.Ob(),p.Pb(37,"ion-card-content"),p.Pb(38,"ion-list"),p.Pb(39,"ion-item"),p.Pb(40,"label"),p.sc(41,"Goles"),p.Ob(),p.Pb(42,"ion-note",26),p.sc(43),p.Ob(),p.Ob(),p.Pb(44,"ion-item"),p.Pb(45,"label"),p.sc(46,"Asistencias"),p.Ob(),p.Pb(47,"ion-note",26),p.sc(48),p.Ob(),p.Ob(),p.Pb(49,"ion-item"),p.Pb(50,"label"),p.sc(51,"Rojas"),p.Ob(),p.Pb(52,"ion-note",26),p.sc(53),p.Ob(),p.Ob(),p.Pb(54,"ion-item"),p.Pb(55,"label"),p.sc(56,"Amarillas"),p.Ob(),p.Pb(57,"ion-note",26),p.sc(58),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob()),2&e){var n=p.Zb();p.xb(8),p.uc(" ",n.getYears(n.player.birth_date)," "),p.xb(5),p.uc(" ",n.player.weight," "),p.xb(5),p.ec("ngIf",n.player.position),p.xb(5),p.uc(" ",n.player.height," "),p.xb(4),p.tc(n.player.name),p.xb(1),p.ec("src","assets/images/cam.png"),p.xb(2),p.tc(n.player.number),p.xb(1),p.ec("ngIf",n.player&&n.player.team),p.xb(12),p.tc(n.player.countGoals),p.xb(5),p.tc(n.player.countAssistence),p.xb(5),p.tc(n.player.countRed),p.xb(5),p.tc(n.player.countYellow)}}var M,C,I,L=[{path:"",component:(M=function(){function e(t,i,r,o,a){n(this,e),this.request=t,this.route=i,this.authUser=r,this.modalController=o,this.dialogService=a,this.isAdmin=!1,this.canEdit=!1,this.firstLoading=!0,this.platerModel=new l.a("Player",t),this.id=this.route.snapshot.paramMap.get("id")}return r(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=this.firstLoading,!t.t0){t.next=5;break}return t.next=4,this.dialogService.loadingProgres();case 4:this.firstLoading=!1;case 5:this.platerModel.api_functionModel(this.id,"profile").subscribe((function(t){"success"==t.status&&(n.player=t.data,n.isAdmin=n.player.user_id==n.authUser.user.id,console.log("player",n.player)),e&&e.target.complete(),n.dialogService.dimissLoaging()}),(function(t){e&&e.target.complete(),n.dialogService.dimissLoaging()}));case 6:case"end":return t.stop()}}),t,this)})))}},{key:"getPhoto",value:function(){return this.player&&this.player.photo?this.player.photo.urlComplete:"assets/images/jugador.png"}},{key:"getYears",value:function(e){return d().diff(e,"years")}},{key:"showEdit",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:u.a,componentProps:{id:e.id,isUser:!0}});case 2:return(n=t.sent).onDidDismiss().then((function(e){console.log("dismiss edit"),e.data&&e.data.hasOwnProperty("player")&&e.data&&e.data.player&&(i.player=e.data.player)})),t.next=6,n.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}}]),e}(),M.\u0275fac=function(e){return new(e||M)(p.Kb(f.a),p.Kb(s.a),p.Kb(g.a),p.Kb(c.hb),p.Kb(m.a))},M.\u0275cmp=p.Eb({type:M,selectors:[["app-profile"]],decls:15,vars:7,consts:[["slot","start"],["slot","secondary",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[1,"ion-text-center"],["class","chip","color","secondary",4,"ngIf"],[4,"ngIf"],[3,"nameModel","idModel","isAdmin"],["slot","secondary"],[3,"click"],["name","create"],["color","secondary",1,"chip"],[1,"msj-is-admin"],[3,"ngModel","ngModelChange"],["title","Jugador","scheme","dark",1,"ion-text-center",3,"text","src"],[1,"content-data"],[1,"data"],[1,"data-value"],[1,"ion-text-end"],[1,"data-value","ion-text-end"],["class","data-value",4,"ngIf"],[1,"cami","ion-text-center"],[1,"cami-c"],[1,"cami-name"],[1,"cami-img",2,"border-radius","50%","background-position","center center","background-size","cover",3,"src"],[1,"cami-number"],["class","player-team bg-l2",4,"ngIf"],["slot","end","color","primary"],[1,"player-team","bg-l2"],[1,"player-team-title"],[3,"routerLink"],[2,"border-radius","50%","background-position","center center","background-size","cover","width","50px","height","50px",3,"src"]],template:function(e,t){1&e&&(p.Pb(0,"ion-header"),p.Pb(1,"ion-toolbar"),p.Pb(2,"ion-title"),p.sc(3,"Jugador"),p.Ob(),p.Pb(4,"ion-buttons",0),p.Lb(5,"ion-back-button"),p.Ob(),p.rc(6,y,3,0,"ion-buttons",1),p.Ob(),p.Ob(),p.Pb(7,"ion-content"),p.Pb(8,"ion-refresher",2),p.Xb("ionRefresh",(function(e){return t.init(e)})),p.Lb(9,"ion-refresher-content"),p.Ob(),p.Pb(10,"div",3),p.rc(11,P,4,1,"ion-chip",4),p.Ob(),p.rc(12,O,5,3,"div",5),p.rc(13,k,59,12,"div",5),p.Lb(14,"app-red-list",6),p.Ob()),2&e&&(p.xb(6),p.ec("ngIf",t.canEdit),p.xb(5),p.ec("ngIf",t.isAdmin),p.xb(1),p.ec("ngIf",t.player),p.xb(1),p.ec("ngIf",t.player),p.xb(1),p.ec("nameModel","Player")("idModel",t.id)("isAdmin",t.canEdit))},directives:[c.x,c.db,c.bb,c.j,c.f,c.g,o.k,c.r,c.J,c.K,h.a,c.i,c.y,c.p,c.D,c.cb,c.c,a.d,a.g,c.k,v.a,c.w,c.M,c.q,c.z,c.m,c.o,c.l,c.E,c.B,c.I,c.Y,c.mb,s.h,c.ab],styles:["p[_ngcontent-%COMP%]{margin-left:10px;margin-top:10px}ion-chip[_ngcontent-%COMP%]{padding:10px}ion-note[_ngcontent-%COMP%]{font-size:larger;font-weight:700}.cami[_ngcontent-%COMP%]{position:absolute;align-items:center;left:50%;margin-left:-70px;width:140px;top:50%;height:140px;margin-top:-70px;background:beige;border-radius:80px}.cami-name[_ngcontent-%COMP%]{font-size:xx-small;top:20px;color:#fff}.cami-name[_ngcontent-%COMP%], .cami-number[_ngcontent-%COMP%]{position:absolute;width:100%}.cami-number[_ngcontent-%COMP%]{font-size:xx-large;text-align:center;top:40px;color:#fffaf0}.cami-img[_ngcontent-%COMP%]{height:140px;width:140px;padding:2px;border:1px solid rgba(0,0,0,.25882352941176473)}.cami-c[_ngcontent-%COMP%], .content-data[_ngcontent-%COMP%]{position:relative}.data[_ngcontent-%COMP%]{height:90px;border:1px solid var(--ion-color-light);border-radius:10px;padding:10px;margin:1px}.data-value[_ngcontent-%COMP%]{font-size:large;color:var(--ion-color-light);margin-top:10px}.player-team-title[_ngcontent-%COMP%]{margin-left:10px;color:var(--ion-color-light)}.player-team[_ngcontent-%COMP%]{margin:5px;border:1px solid #c7c7c7;border-radius:10px;padding:5px}.msj-is-admin[_ngcontent-%COMP%]{padding:10px}.chip[_ngcontent-%COMP%]{height:auto}"]}),M)}],_=((C=function e(){n(this,e)}).\u0275mod=p.Ib({type:C}),C.\u0275inj=p.Hb({factory:function(e){return new(e||C)},imports:[[s.j.forChild(L)],s.j]}),C),A=i("j1ZV"),j=((I=function e(){n(this,e)}).\u0275mod=p.Ib({type:I}),I.\u0275inj=p.Hb({factory:function(e){return new(e||I)},imports:[[o.b,a.a,c.eb,_,A.a,v.b]]}),I)},rLe3:function(t,i,o){"use strict";o.d(i,"a",(function(){return c}));var a=o("fXoL"),c=function(){var t=function(){function t(){n(this,t)}return r(t,[{key:"listAddLast",value:function(e,t){e.push(t)}},{key:"listAddFirst",value:function(e,t){e.unshift(t)}},{key:"listUpdate",value:function(e,t,n){var i=this.findIndexList(e,t);i>=0&&(e[i]=n)}},{key:"listDelete",value:function(e,t){var n=this.findIndexList(e,t);n>=0&&e.splice(n,1)}},{key:"findList",value:function(e,t){return e.find((function(e){return e.id===t}))}},{key:"findIndexList",value:function(e,t){return e.findIndex((function(e){return e.id===t}))}},{key:"updateAttribustesObject",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];console.log("update attributes");var r,o=e(i);try{for(o.s();!(r=o.n()).done;){var a=r.value;n.hasOwnProperty(a)&&(t[a]=n[a])}}catch(c){o.e(c)}finally{o.f()}return t}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();