(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{rLe3:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var o=i("fXoL");let n=(()=>{class t{constructor(){}listAddLast(t,e){t.push(e)}listAddFirst(t,e){t.unshift(e)}listUpdate(t,e,i){let o=this.findIndexList(t,e);o>=0&&(t[o]=i)}listDelete(t,e){let i=this.findIndexList(t,e);i>=0&&t.splice(i,1)}findList(t,e){return t.find(t=>t.id===e)}findIndexList(t,e){return t.findIndex(t=>t.id===e)}updateAttribustesObject(t,e,i=[]){console.log("update attributes");for(let o of i)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},yXoJ:function(t,e,i){"use strict";i.r(e),i.d(e,"ListPageModule",(function(){return g}));var o=i("ofXK"),n=i("3Pt+"),s=i("TEn/"),r=i("tyNb"),a=i("mrSG"),l=i("JTEZ"),c=i("8xVP"),d=i("fXoL"),b=i("G/jy"),u=i("vuFD"),h=i("rLe3");function p(t,e){1&t&&(d.Pb(0,"ion-list-header",8),d.Pb(1,"ion-label"),d.sc(2,"Sin registros"),d.Ob(),d.Ob())}function m(t,e){if(1&t){const t=d.Qb();d.Pb(0,"ion-item"),d.Pb(1,"ion-label"),d.Pb(2,"h3"),d.sc(3),d.Ob(),d.Ob(),d.Pb(4,"ion-buttons",9),d.Pb(5,"ion-button",3),d.Xb("click",(function(){d.mc(t);const i=e.$implicit;return d.Zb().showEdit(i)})),d.Lb(6,"ion-icon",10),d.Ob(),d.Pb(7,"ion-button",3),d.Xb("click",(function(){d.mc(t);const i=e.$implicit;return d.Zb().confirmDelete(i)})),d.Lb(8,"ion-icon",11),d.Ob(),d.Ob(),d.Ob()}if(2&t){const t=e.$implicit;d.xb(3),d.tc(t.name)}}const f=[{path:"",component:(()=>{class t{constructor(t,e,i,o,n,s){this.request=t,this.dialogService=e,this.modalController=i,this.dialog=o,this.route=n,this.utilArray=s,this.list=[],this.playerService=new c.a("Player",t),this.modelTeam=new c.a("Team",t),this.team_id=this.route.snapshot.paramMap.get("team_id")}ngOnInit(){this.load()}load(t=null){console.log("load"),this.team_id?this.modelTeam.api_loadAttribute(this.team_id,"players").subscribe(e=>{(e.status="success")&&(console.log("response",e),this.list=e.Team.players),t&&t.target.complete()},e=>{t&&t.target.complete()}):this.playerService.api_function("all").subscribe(t=>{this.list=t.data},t=>{console.log(t)})}openModal(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:l.a,componentProps:{team_id:this.team_id}});return t.onDidDismiss().then(t=>{t.data&&t.data.player&&this.utilArray.listAddFirst(this.list,t.data.player)}),yield t.present()}))}showEdit(t){return Object(a.a)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:l.a,componentProps:{id:t.id}});return e.onDidDismiss().then(t=>{if(t.data&&t.data.hasOwnProperty("player")){const e=t.data.player;this.utilArray.listUpdate(this.list,e.id,e)}}),yield e.present()}))}confirmDelete(t){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este jugador",e=>{this.delete(t)})}delete(t){t.user_id?this.team_id&&this.modelTeam.api_functionModel(this.team_id,"removePlayer",{player_id:t.id}).subscribe(e=>{this.dialog.showToast("El Jugador ha sido eliminado de esta plantilla",null,"success"),this.utilArray.listDelete(this.list,t.id)},t=>{}):this.playerService.api_delete(t.id).subscribe(e=>{console.log(e),"success"==e.status&&(this.dialog.showToast("Jugador Eliminado",null,"success"),this.utilArray.listDelete(this.list,t.id))})}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(b.a),d.Kb(u.a),d.Kb(s.hb),d.Kb(u.a),d.Kb(r.a),d.Kb(h.a))},t.\u0275cmp=d.Eb({type:t,selectors:[["app-list"]],decls:15,vars:3,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(t,e){1&t&&(d.Pb(0,"ion-header"),d.Pb(1,"ion-toolbar"),d.Pb(2,"ion-buttons",0),d.Lb(3,"ion-back-button",1),d.Ob(),d.Pb(4,"ion-title"),d.sc(5),d.Ob(),d.Pb(6,"ion-buttons",2),d.Pb(7,"ion-button",3),d.Xb("click",(function(){return e.openModal()})),d.Lb(8,"ion-icon",4),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Pb(9,"ion-content"),d.Pb(10,"ion-refresher",5),d.Xb("ionRefresh",(function(t){return e.load(t)})),d.Lb(11,"ion-refresher-content"),d.Ob(),d.Pb(12,"ion-list"),d.rc(13,p,3,0,"ion-list-header",6),d.rc(14,m,9,1,"ion-item",7),d.Ob(),d.Ob()),2&t&&(d.xb(5),d.uc("",e.team_id?"Plantilla de ":"","Jugadores"),d.xb(8),d.ec("ngIf",0==e.list.length),d.xb(1),d.ec("ngForOf",e.list))},directives:[s.x,s.db,s.j,s.f,s.g,s.bb,s.i,s.y,s.r,s.J,s.K,s.E,o.k,o.j,s.F,s.D,s.B],styles:[""]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(e){return new(e||t)},imports:[[r.j.forChild(f)],r.j]}),t})(),g=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(e){return new(e||t)},imports:[[o.b,n.a,s.eb,y]]}),t})()}}]);