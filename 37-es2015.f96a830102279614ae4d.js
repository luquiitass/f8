(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{yZGV:function(e,t,i){"use strict";i.r(t),i.d(t,"ProfilePageModule",(function(){return L}));var o=i("ofXK"),a=i("3Pt+"),n=i("TEn/"),s=i("tyNb"),r=i("mrSG"),c=i("8xVP"),l=i("Alqj"),b=i("fXoL"),d=i("G/jy");function p(e,t){1&e&&(b.Nb(0,"div"),b.Nb(1,"div"),b.rc(2,"Notificaciones activas !!!"),b.Mb(),b.Nb(3,"div"),b.rc(4,"Recibiras Notificaciones de las diferentes noticias de este equipo."),b.Mb(),b.Mb())}function m(e,t){1&e&&(b.Nb(0,"div"),b.Nb(1,"div"),b.rc(2,"Activa las "),b.Nb(3,"b"),b.rc(4,"Notificaciones"),b.Mb(),b.rc(5," para recibir todas las noticias de este equipo."),b.Mb(),b.Mb())}const u=function(e){return{favorite:e}};let h=(()=>{class e{constructor(e){this.requesService=e,this.favoriteModel=new c.a("Favorite",e)}ngOnInit(){}toggleFavorite(){this.object&&(this.isFavorite()?this.favoriteModel.api_delete(this.object.favorite.id).subscribe(e=>{this.object.favorite=null,console.log(e)},e=>{console.error(e)}):this.favoriteModel.api_function("addFavorite",{table_id:this.table_id,table_name:this.table_name}).subscribe(e=>{"success"==e.status&&(this.object.favorite=e.data)},e=>{console.error(e)}))}isFavorite(){return!(!this.object||!this.object.favorite)}getNameIcon(){return this.isFavorite()?"notifications-off-outline":"notifications-outline"}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(d.a))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-notificatio-selected"]],inputs:{object:"object",table_name:"table_name",table_id:"table_id"},decls:9,vars:6,consts:[["size","10"],[4,"ngIf"],["size","2"],[3,"click"],[3,"name","ngClass"]],template:function(e,t){1&e&&(b.Nb(0,"ion-card"),b.Nb(1,"ion-grid"),b.Nb(2,"ion-row"),b.Nb(3,"ion-col",0),b.qc(4,p,5,0,"div",1),b.qc(5,m,6,0,"div",1),b.Mb(),b.Nb(6,"ion-col",2),b.Nb(7,"ion-button",3),b.Vb("click",(function(){return t.toggleFavorite()})),b.Jb(8,"ion-icon",4),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&e&&(b.xb(4),b.cc("ngIf",t.isFavorite()),b.xb(1),b.cc("ngIf",!t.isFavorite()),b.xb(3),b.cc("name",t.getNameIcon())("ngClass",b.gc(4,u,t.isFavorite())))},directives:[n.g,n.q,n.F,n.l,o.k,n.e,n.s,o.i],styles:[""]}),e})();var g=i("pa2R"),f=i("dXyq"),v=i("OXCg");function M(e,t){if(1&e){const e=b.Ob();b.Nb(0,"ion-content"),b.Nb(1,"div"),b.Nb(2,"div"),b.Jb(3,"img",5),b.Mb(),b.Nb(4,"div",6),b.Jb(5,"img",7),b.Nb(6,"span",8),b.rc(7),b.Mb(),b.Mb(),b.Mb(),b.Jb(8,"app-notificatio-selected",9),b.Nb(9,"ion-card"),b.Nb(10,"ion-card-header"),b.Nb(11,"ion-card-title"),b.rc(12," Jugadores "),b.Mb(),b.Mb(),b.Nb(13,"ion-card-content"),b.Nb(14,"app-player-list",10),b.Vb("eventLoad",(function(t){return b.lc(e),b.Xb().loadPlayers(t)}))("eventSelect",(function(t){return b.lc(e),b.Xb().playerSelect(t)})),b.Mb(),b.Mb(),b.Mb(),b.Jb(15,"app-red-list",11),b.Jb(16,"app-comments",12),b.Mb()}if(2&e){const e=b.Xb();b.xb(3),b.cc("src",e.getCover(),b.mc),b.xb(2),b.cc("src",e.getShield(),b.mc),b.xb(2),b.sc(e.team.name),b.xb(1),b.cc("object",e.team)("table_name","Team")("table_id",e.id),b.xb(6),b.cc("items",e.playersList)("loading",e.playersLoading)("errorLoad",e.playersErrorLoad),b.xb(1),b.cc("nameModel","Team")("idModel",e.id)("isAdmin",!1),b.xb(1),b.cc("comments",e.team.comments)("idRelation",e.id)("nameRelationModel","Team")}}const y=[{path:"",component:(()=>{class e{constructor(e,t,i,o){this.route=e,this.requesService=t,this.modalController=i,this.navCtrl=o,this.id="0",this.team=null,this.playersList=[],this.playersLoading=!0,this.playersErrorLoad=!1,this.id=this.route.snapshot.paramMap.get("id"),this.teamModel=new c.a("Team",t)}ngOnInit(){this.init()}init(){this.playersLoading=!0,this.teamModel.api_functionModel(this.id,"pageProfile").subscribe(e=>{console.log(e),"success"==e.status&&(this.team=e.data,this.playersList=this.team.players),this.playersLoading=!1},e=>{this.playersLoading=!1,this.playersErrorLoad=!1,console.error(e)})}getCover(){return this.team.cover_page?this.team.cover_page.urlComplete:"assets/images/cover.jpg"}getShield(){return this.team.shield?this.team.shield.urlComplete:"assets/images/shield_team.png"}showMenu(){return Object(r.a)(this,void 0,void 0,(function*(){let e=[{name:"Editar Equipo",route:""},{name:"Admi. Jugadores",route:`team/${this.id}/players`},{name:"Admi. Partidos",rote:""}];const t=yield this.modalController.create({component:l.a,componentProps:{title:"Administrar",list:e}});return t.onDidDismiss().then(e=>{console.log(e)}),yield t.present()}))}setLog(e){console.log("set log in page profile, num : ",e)}loadPlayers(e){this.playersLoading=!0,this.teamModel.api_loadAttribute(this.id,"players").subscribe(e=>{"success"==e.status&&(this.playersList=e.Team.players),this.playersLoading=!1},e=>{this.playersLoading=!1,this.playersErrorLoad=!0})}playerSelect(e){console.log("goTo",e),this.navCtrl.navigateForward("player/profile/"+e.id)}}return e.\u0275fac=function(t){return new(t||e)(b.Ib(s.a),b.Ib(d.a),b.Ib(n.V),b.Ib(n.W))},e.\u0275cmp=b.Cb({type:e,selectors:[["app-profile"]],decls:10,vars:1,consts:[["slot","start"],["slot","secondary"],[3,"click"],["name","create"],[4,"ngIf"],["alt","Portada",1,"cover",3,"src"],[1,"shield-team"],["alt","Escudo",1,"shield",3,"src"],[1,"name-team"],[3,"object","table_name","table_id"],[3,"items","loading","errorLoad","eventLoad","eventSelect"],[3,"nameModel","idModel","isAdmin"],[3,"comments","idRelation","nameRelationModel"]],template:function(e,t){1&e&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-title"),b.rc(3,"Equipo "),b.Mb(),b.Nb(4,"ion-buttons",0),b.Jb(5,"ion-back-button"),b.Mb(),b.Nb(6,"ion-buttons",1),b.Nb(7,"ion-button",2),b.Vb("click",(function(){return t.showMenu()})),b.Jb(8,"ion-icon",3),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.qc(9,M,17,15,"ion-content",4)),2&e&&(b.xb(9),b.cc("ngIf",t.team))},directives:[n.r,n.R,n.Q,n.f,n.c,n.d,n.e,n.s,o.k,n.m,h,n.g,n.i,n.k,n.h,g.a,f.a,v.a],styles:[".cover[_ngcontent-%COMP%]{width:100%}.shield-team[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:5px}.shield[_ngcontent-%COMP%]{width:50px;height:50px}.name-team[_ngcontent-%COMP%]{display:inline;margin-left:10px}"]}),e})()}];let N=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(t){return new(t||e)},imports:[[s.j.forChild(y)],s.j]}),e})();var _=i("j1ZV");let L=(()=>{class e{}return e.\u0275mod=b.Gb({type:e}),e.\u0275inj=b.Fb({factory:function(t){return new(t||e)},imports:[[o.b,a.a,n.S,N,_.a]]}),e})()}}]);