(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{nHXg:function(t,e,i){"use strict";i.r(e),i.d(e,"TeamsPageModule",(function(){return P}));var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),b=i("8xVP"),a=i("fXoL"),c=i("G/jy"),l=i("vuFD"),f=i("y/q6");function u(t,e){1&t&&(a.Pb(0,"ion-list-header",7),a.Pb(1,"ion-label"),a.sc(2,"Sin registros"),a.Ob(),a.Ob())}function m(t,e){if(1&t&&(a.Pb(0,"ion-item",8),a.Pb(1,"ion-avatar",0),a.Lb(2,"ion-img",9),a.Ob(),a.Pb(3,"ion-label"),a.Pb(4,"h3"),a.sc(5),a.Ob(),a.Ob(),a.Ob()),2&t){const t=e.$implicit;a.gc("routerLink","/team/profile/",t.id,""),a.xb(2),a.ec("src",t.shield?t.shield.urlComplete:"assets/images/shield_team.png"),a.xb(3),a.tc(t.name)}}function h(t,e){if(1&t){const t=a.Qb();a.Pb(0,"div"),a.Pb(1,"ion-refresher",4),a.Xb("ionRefresh",(function(e){return a.mc(t),a.Zb().init(e)})),a.Lb(2,"ion-refresher-content"),a.Ob(),a.Pb(3,"ion-list"),a.rc(4,u,3,0,"ion-list-header",5),a.rc(5,m,6,3,"ion-item",6),a.Ob(),a.Ob()}if(2&t){const t=a.Zb();a.xb(4),a.ec("ngIf",0==t.teams.length),a.xb(1),a.ec("ngForOf",t.teams)}}function d(t,e){1&t&&(a.Pb(0,"ion-item"),a.Pb(1,"ion-avatar",0),a.Lb(2,"ion-skeleton-text",11),a.Ob(),a.Pb(3,"ion-label"),a.Pb(4,"h3"),a.Lb(5,"ion-skeleton-text",12),a.Ob(),a.Ob(),a.Ob())}function g(t,e){if(1&t&&(a.Pb(0,"div"),a.rc(1,d,6,0,"ion-item",10),a.Ob()),2&t){const t=a.Zb();a.xb(1),a.ec("ngForOf",t.listSkeleton)}}const p=[{path:"",component:(()=>{class t{constructor(t,e,i,n){this.request=t,this.modalController=e,this.dialog=i,this.auth=n,this.teams=[],this.listSkeleton=new Array(10),this.firstLoad=!0,this.teamService=new b.a("Team",t)}ngOnInit(){this.init()}init(t=null){this.teamService.api_function("pageHomeTeams").subscribe(e=>{this.teams=e.data,t&&t.target.complete(),this.firstLoad=!1},e=>{t&&t.target.complete(),this.firstLoad=!1})}close(){this.auth.logout()}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(c.a),a.Kb(r.hb),a.Kb(l.a),a.Kb(f.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-teams"]],decls:10,vars:2,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],["routerDirection","forward","class","team-list",3,"routerLink",4,"ngFor","ngForOf"],["color","tertiary"],["routerDirection","forward",1,"team-list",3,"routerLink"],[3,"src"],[4,"ngFor","ngForOf"],["animated",""],["animated","",2,"width","80%","height","20px"]],template:function(t,e){1&t&&(a.Pb(0,"ion-header"),a.Pb(1,"ion-toolbar"),a.Pb(2,"ion-title"),a.sc(3,"Equipos"),a.Ob(),a.Ob(),a.Pb(4,"ion-buttons",0),a.Pb(5,"ion-button",1),a.Xb("click",(function(){return e.close()})),a.Lb(6,"ion-icon",2),a.Ob(),a.Ob(),a.Ob(),a.Pb(7,"ion-content"),a.rc(8,h,6,2,"div",3),a.rc(9,g,2,1,"div",3),a.Ob()),2&t&&(a.xb(8),a.ec("ngIf",!e.firstLoad),a.xb(1),a.ec("ngIf",e.firstLoad))},directives:[r.x,r.db,r.bb,r.j,r.i,r.y,r.r,n.k,r.J,r.K,r.E,n.j,r.F,r.D,r.B,r.mb,s.h,r.e,r.z,r.S],styles:[""]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(p)],s.j]}),t})(),P=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[n.b,o.a,r.eb,O]]}),t})()}}]);