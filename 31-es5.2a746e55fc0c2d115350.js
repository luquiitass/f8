!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Z1lk:function(e,i,o){"use strict";o.r(i),o.d(i,"ProfilePageModule",(function(){return v}));var a=o("ofXK"),r=o("3Pt+"),b=o("TEn/"),c=o("tyNb"),s=o("8xVP"),l=o("wd/R"),d=o("fXoL"),p=o("G/jy"),u=o("dXyq");function M(n,t){if(1&n&&(d.Nb(0,"div"),d.Nb(1,"ion-card"),d.Jb(2,"ion-img",3),d.Nb(3,"h3",4),d.rc(4),d.Mb(),d.Mb(),d.Mb()),2&n){var e=d.Xb();d.xb(2),d.cc("src",e.getPhoto()),d.xb(2),d.sc(e.player.name)}}function g(n,t){if(1&n&&(d.Nb(0,"div"),d.Nb(1,"div",5),d.Nb(2,"ion-grid"),d.Nb(3,"ion-row"),d.Nb(4,"ion-col",6),d.Nb(5,"div"),d.rc(6," Edad "),d.Mb(),d.Nb(7,"div",7),d.rc(8),d.Mb(),d.Mb(),d.Nb(9,"ion-col",6),d.Nb(10,"div",8),d.rc(11," Peso "),d.Mb(),d.Nb(12,"div",9),d.rc(13),d.Mb(),d.Mb(),d.Mb(),d.Nb(14,"ion-row"),d.Nb(15,"ion-col",6),d.Nb(16,"div"),d.rc(17," Posici\xf3n "),d.Mb(),d.Nb(18,"div",7),d.rc(19),d.Mb(),d.Mb(),d.Nb(20,"ion-col",6),d.Nb(21,"div",8),d.rc(22," Altura "),d.Mb(),d.Nb(23,"div",9),d.rc(24),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(25,"div",10),d.Nb(26,"div",11),d.Nb(27,"div",12),d.rc(28),d.Mb(),d.Jb(29,"ion-img",13),d.Nb(30,"div",14),d.rc(31),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(32,"div"),d.Nb(33,"ion-card"),d.Nb(34,"ion-card-header"),d.Nb(35,"ion-card-title"),d.rc(36,"Estad\xedsticas"),d.Mb(),d.Mb(),d.Nb(37,"ion-card-content"),d.Nb(38,"ion-list"),d.Nb(39,"ion-item"),d.Nb(40,"label"),d.rc(41,"Goles"),d.Mb(),d.Nb(42,"ion-note",15),d.rc(43),d.Mb(),d.Mb(),d.Nb(44,"ion-item"),d.Nb(45,"label"),d.rc(46,"Asistencias"),d.Mb(),d.Nb(47,"ion-note",15),d.rc(48),d.Mb(),d.Mb(),d.Nb(49,"ion-item"),d.Nb(50,"label"),d.rc(51,"Rojas"),d.Mb(),d.Nb(52,"ion-note",15),d.rc(53),d.Mb(),d.Mb(),d.Nb(54,"ion-item"),d.Nb(55,"label"),d.rc(56,"Amarillas"),d.Mb(),d.Nb(57,"ion-note",15),d.rc(58),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&n){var e=d.Xb();d.xb(8),d.tc(" ",e.getYears(e.player.birth_date)," "),d.xb(5),d.tc(" ",e.player.weight," "),d.xb(6),d.tc(" ",e.player.position.name," "),d.xb(5),d.tc(" ",e.player.height," "),d.xb(4),d.sc(e.player.name),d.xb(1),d.cc("src","assets/images/cam.png"),d.xb(2),d.sc(e.player.number),d.xb(12),d.sc(e.player.countGoals),d.xb(5),d.sc(e.player.countAssistence),d.xb(5),d.sc(e.player.countRed),d.xb(5),d.sc(e.player.countYellow)}}var f,m,N,x=[{path:"",component:(f=function(){function e(t,i){n(this,e),this.request=t,this.route=i,this.platerModel=new s.a("Player",t),this.id=this.route.snapshot.paramMap.get("id")}var i,o,a;return i=e,(o=[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var n=this;this.platerModel.api_functionModel(this.id,"profile").subscribe((function(t){"success"==t.status&&(n.player=t.data,console.log("player",n.player))}),(function(n){}))}},{key:"getPhoto",value:function(){return this.player&&this.player.photo?this.player.photo.urlComplete:"assets/images/jugador.png"}},{key:"getYears",value:function(n){return l().diff(n,"years")}}])&&t(i.prototype,o),a&&t(i,a),e}(),f.\u0275fac=function(n){return new(n||f)(d.Ib(p.a),d.Ib(c.a))},f.\u0275cmp=d.Cb({type:f,selectors:[["app-profile"]],decls:10,vars:5,consts:[["slot","start"],[4,"ngIf"],[3,"nameModel","idModel","isAdmin"],[3,"src"],[1,"ion-text-center"],[1,"content-data"],[1,"data"],[1,"data-value"],[1,"ion-text-end"],[1,"data-value","ion-text-end"],[1,"cami","ion-text-center"],[1,"cami-c"],[1,"cami-name"],[1,"cami-img",2,"border-radius","50%","background-position","center center","background-size","cover",3,"src"],[1,"cami-number"],["slot","end","color","primary"]],template:function(n,t){1&n&&(d.Nb(0,"ion-header"),d.Nb(1,"ion-toolbar"),d.Nb(2,"ion-title"),d.rc(3,"Jugador"),d.Mb(),d.Nb(4,"ion-buttons",0),d.Jb(5,"ion-back-button"),d.Mb(),d.Mb(),d.Mb(),d.Nb(6,"ion-content"),d.qc(7,M,5,2,"div",1),d.qc(8,g,59,11,"div",1),d.Jb(9,"app-red-list",2),d.Mb()),2&n&&(d.xb(7),d.cc("ngIf",t.player),d.xb(1),d.cc("ngIf",t.player),d.xb(1),d.cc("nameModel","Player")("idModel",t.id)("isAdmin",!1))},directives:[b.r,b.R,b.Q,b.f,b.c,b.d,b.m,a.k,u.a,b.g,b.t,b.q,b.F,b.l,b.i,b.k,b.h,b.x,b.v,b.B],styles:["ion-note[_ngcontent-%COMP%]{font-size:larger;font-weight:700}.cami[_ngcontent-%COMP%]{position:absolute;align-items:center;left:50%;margin-left:-70px;width:140px;top:50%;height:140px;margin-top:-70px;background:beige;border-radius:80px}.cami-name[_ngcontent-%COMP%]{font-size:xx-small;top:20px;color:#fff}.cami-name[_ngcontent-%COMP%], .cami-number[_ngcontent-%COMP%]{position:absolute;width:100%}.cami-number[_ngcontent-%COMP%]{font-size:xx-large;text-align:center;top:40px;color:#fffaf0}.cami-img[_ngcontent-%COMP%]{height:140px;width:140px;padding:2px;border:1px solid rgba(0,0,0,.25882352941176473)}.cami-c[_ngcontent-%COMP%], .content-data[_ngcontent-%COMP%]{position:relative}.data[_ngcontent-%COMP%]{height:90px;border:1px solid rgba(0,0,0,.25882352941176473);border-radius:10px;padding:10px;margin:1px}.data-value[_ngcontent-%COMP%]{font-size:large;color:rgba(0,0,0,.7294117647058823);margin-top:10px}"]}),f)}],h=((m=function t(){n(this,t)}).\u0275mod=d.Gb({type:m}),m.\u0275inj=d.Fb({factory:function(n){return new(n||m)},imports:[[c.j.forChild(x)],c.j]}),m),y=o("j1ZV"),v=((N=function t(){n(this,t)}).\u0275mod=d.Gb({type:N}),N.\u0275inj=d.Fb({factory:function(n){return new(n||N)},imports:[[a.b,r.a,b.S,h,y.a]]}),N)}}])}();