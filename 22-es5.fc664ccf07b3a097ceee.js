!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{GgTm:function(n,a,i){"use strict";i.r(a),i.d(a,"ResultPageModule",(function(){return x}));var o=i("ofXK"),r=i("3Pt+"),s=i("TEn/"),c=i("tyNb"),b=i("8xVP"),l=i("fXoL"),d=i("G/jy"),p=i("ZETu"),m=i("OXCg");function u(e,t){if(1&e&&(l.Nb(0,"div",4),l.Nb(1,"div",5),l.Nb(2,"div",6),l.Nb(3,"span",7),l.rc(4),l.Mb(),l.Nb(5,"span",8),l.rc(6),l.Mb(),l.Mb(),l.Jb(7,"br",9),l.Nb(8,"div",6),l.Nb(9,"span",7),l.rc(10),l.Mb(),l.Nb(11,"span",8),l.rc(12),l.Mb(),l.Mb(),l.Mb(),l.Mb()),2&e){var n=l.Xb();l.xb(4),l.sc(n.game.team_l.name),l.xb(2),l.sc(n.game.l_goals),l.xb(4),l.sc(n.game.team_v.name),l.xb(2),l.sc(n.game.l_goals)}}var g,f,h,M=[{path:"",component:(g=function(){function n(t,a){e(this,n),this.route=t,this.requesService=a,this.id=this.route.snapshot.paramMap.get("id"),this.resultModel=new b.a("Game",a)}var a,i,o;return a=n,(i=[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.resultModel.api_functionModel(this.id,"dataProfile").subscribe((function(n){"success"==n.status&&(e.game=n.data),t&&t.target.complete()}))}}])&&t(a.prototype,i),o&&t(a,o),n}(),g.\u0275fac=function(e){return new(e||g)(l.Ib(c.a),l.Ib(d.a))},g.\u0275cmp=l.Cb({type:g,selectors:[["app-result"]],decls:10,vars:4,consts:[["slot","start"],["class","game",4,"ngIf"],[3,"game_id"],[3,"idRelation","nameRelationModel"],[1,"game"],[1,"team-list","contenedor","light-black-background"],[1,"team"],[1,"name-team"],[1,"goals-team"],[1,"separator"]],template:function(e,t){1&e&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar"),l.Nb(2,"ion-title"),l.rc(3,"Partido"),l.Mb(),l.Nb(4,"ion-buttons",0),l.Jb(5,"ion-back-button"),l.Mb(),l.Mb(),l.Mb(),l.Nb(6,"ion-content"),l.qc(7,u,13,4,"div",1),l.Jb(8,"app-event-list",2),l.Jb(9,"app-comments",3),l.Mb()),2&e&&(l.xb(7),l.cc("ngIf",t.game),l.xb(1),l.cc("game_id",t.id),l.xb(1),l.cc("idRelation",t.id)("nameRelationModel","Game"))},directives:[s.r,s.R,s.Q,s.f,s.c,s.d,s.m,o.k,p.a,m.a],styles:["",".game[_ngcontent-%COMP%]{color:#fff;width:100%;padding:10px;border-radius:5px;box-shadow:inset 0 -3em 3em rgba(0,0,0,.1),0 0 0 2px #fff,.3em .3em 1em rgba(0,0,0,.3)}.team[_ngcontent-%COMP%]{position:relative;background-image:url(/assets/images/img_fondo_res4.png);background-repeat:no-repeat;background-size:cover;width:100%;padding:15px 10px 10px}.name-team[_ngcontent-%COMP%]{width:70%}.goals-team[_ngcontent-%COMP%], .name-team[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.goals-team[_ngcontent-%COMP%]{width:30%;text-align:right;padding-right:20px}.comment[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;display:none}"]}),g)}],v=((f=function t(){e(this,t)}).\u0275mod=l.Gb({type:f}),f.\u0275inj=l.Fb({factory:function(e){return new(e||f)},imports:[[c.j.forChild(M)],c.j]}),f),w=i("j1ZV"),x=((h=function t(){e(this,t)}).\u0275mod=l.Gb({type:h}),h.\u0275inj=l.Fb({factory:function(e){return new(e||h)},imports:[[o.b,r.a,s.S,v,w.a]]}),h)}}])}();