(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{GgTm:function(t,e,n){"use strict";n.r(e),n.d(e,"ResultPageModule",(function(){return f}));var a=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),s=n("tyNb"),r=n("8xVP"),c=n("fXoL"),b=n("G/jy"),l=n("ZETu"),d=n("OXCg");function m(t,e){if(1&t&&(c.Nb(0,"div",4),c.Nb(1,"div",5),c.Nb(2,"div",6),c.Nb(3,"span",7),c.rc(4),c.Mb(),c.Nb(5,"span",8),c.rc(6),c.Mb(),c.Mb(),c.Jb(7,"br",9),c.Nb(8,"div",6),c.Nb(9,"span",7),c.rc(10),c.Mb(),c.Nb(11,"span",8),c.rc(12),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&t){const t=c.Xb();c.xb(4),c.sc(t.game.team_l.name),c.xb(2),c.sc(t.game.l_goals),c.xb(4),c.sc(t.game.team_v.name),c.xb(2),c.sc(t.game.l_goals)}}const p=[{path:"",component:(()=>{class t{constructor(t,e){this.route=t,this.requesService=e,this.id=this.route.snapshot.paramMap.get("id"),this.resultModel=new r.a("Game",e)}ngOnInit(){this.init()}init(t=null){this.resultModel.api_functionModel(this.id,"dataProfile").subscribe(e=>{"success"==e.status&&(this.game=e.data),t&&t.target.complete()})}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(s.a),c.Ib(b.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-result"]],decls:10,vars:4,consts:[["slot","start"],["class","game",4,"ngIf"],[3,"game_id"],[3,"idRelation","nameRelationModel"],[1,"game"],[1,"team-list","contenedor","light-black-background"],[1,"team"],[1,"name-team"],[1,"goals-team"],[1,"separator"]],template:function(t,e){1&t&&(c.Nb(0,"ion-header"),c.Nb(1,"ion-toolbar"),c.Nb(2,"ion-title"),c.rc(3,"Partido"),c.Mb(),c.Nb(4,"ion-buttons",0),c.Jb(5,"ion-back-button"),c.Mb(),c.Mb(),c.Mb(),c.Nb(6,"ion-content"),c.qc(7,m,13,4,"div",1),c.Jb(8,"app-event-list",2),c.Jb(9,"app-comments",3),c.Mb()),2&t&&(c.xb(7),c.cc("ngIf",e.game),c.xb(1),c.cc("game_id",e.id),c.xb(1),c.cc("idRelation",e.id)("nameRelationModel","Game"))},directives:[i.r,i.R,i.Q,i.f,i.c,i.d,i.m,a.k,l.a,d.a],styles:["",".game[_ngcontent-%COMP%]{color:#fff;width:100%;padding:10px;border-radius:5px;box-shadow:inset 0 -3em 3em rgba(0,0,0,.1),0 0 0 2px #fff,.3em .3em 1em rgba(0,0,0,.3)}.team[_ngcontent-%COMP%]{position:relative;background-image:url(/assets/images/img_fondo_res4.png);background-repeat:no-repeat;background-size:cover;width:100%;padding:15px 10px 10px}.name-team[_ngcontent-%COMP%]{width:70%}.goals-team[_ngcontent-%COMP%], .name-team[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.goals-team[_ngcontent-%COMP%]{width:30%;text-align:right;padding-right:20px}.comment[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;display:none}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(p)],s.j]}),t})();var u=n("j1ZV");let f=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[a.b,o.a,i.S,g,u.a]]}),t})()}}]);