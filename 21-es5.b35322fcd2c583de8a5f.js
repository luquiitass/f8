!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"7i0p":function(n,i,o){"use strict";o.r(i),o.d(i,"ListPageModule",(function(){return C}));var r=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),c=o("tyNb"),b=o("mrSG"),l=o("PEpV"),u=o("8xVP"),d=o("wd/R"),m=o("fXoL"),f=o("G/jy"),g=o("vuFD"),h=o("2Rin");function v(e,t){if(1&e&&(m.Nb(0,"ion-segment-button",11),m.rc(1),m.Mb()),2&e){var n=t.$implicit,i=t.index;m.dc("value",i),m.ec("id","sgm_",i,""),m.xb(1),m.tc(" ",n.date," ")}}function p(e,t){1&e&&(m.Nb(0,"ion-list-header",12),m.Nb(1,"ion-label"),m.rc(2,"Sin registros"),m.Mb(),m.Mb())}var M=function(){return["/admin/game/{item.id}"]};function N(e,t){if(1&e){var n=m.Ob();m.Nb(0,"ion-item"),m.Nb(1,"ion-grid"),m.Nb(2,"ion-row"),m.Nb(3,"ion-col",13),m.Nb(4,"ion-grid"),m.Nb(5,"ion-row"),m.Nb(6,"ion-col",14),m.rc(7),m.Mb(),m.Nb(8,"ion-col",15),m.rc(9,"0"),m.Mb(),m.Mb(),m.Nb(10,"ion-row"),m.Nb(11,"ion-col"),m.rc(12," Vs "),m.Mb(),m.Mb(),m.Nb(13,"ion-row"),m.Nb(14,"ion-col",14),m.rc(15),m.Mb(),m.Nb(16,"ion-col",15),m.rc(17,"0"),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(18,"ion-col",16),m.Nb(19,"ion-grid"),m.Nb(20,"ion-row"),m.Nb(21,"ion-col",17),m.Nb(22,"a",18),m.Jb(23,"ion-icon",19),m.Mb(),m.Mb(),m.Nb(24,"ion-col",17),m.Nb(25,"ion-button",3),m.Vb("click",(function(){m.lc(n);var e=t.$implicit;return m.Xb().showEdit(e)})),m.Jb(26,"ion-icon",20),m.Mb(),m.Mb(),m.Nb(27,"ion-col",17),m.Nb(28,"ion-button",3),m.Vb("click",(function(){m.lc(n);var e=t.$implicit;return m.Xb().confirmDelete(e)})),m.Jb(29,"ion-icon",21),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Mb()}if(2&e){var i=t.$implicit;m.xb(7),m.tc(" ",i.team_l.name," "),m.xb(8),m.tc(" ",i.team_v.name," "),m.xb(7),m.cc("routerLink",m.fc(3,M))}}var w,y,k,x=[{path:"",component:(w=function(){function n(t,i,o,r,a){e(this,n),this.request=t,this.dialogService=i,this.modalController=o,this.dialog=r,this.util=a,this.games=[],this.tabs=[],this.gameService=new u.a("Game",t)}var i,o,r;return i=n,(o=[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.gameService.api_function("pageAdminAll").subscribe((function(n){e.tabs=n.data.dates,e.selectTab(),console.log(n),t&&t.target.complete()}),(function(e){t&&t.target.completed()}))}},{key:"openModal",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:l.a,componentProps:{date:this.tabs&&this.tabs[this.tabSelected]?this.tabs[this.tabSelected].date:""}});case 2:return(t=e.sent).onDidDismiss().then((function(e){n.gameService.listAddLast(e.data.game)})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"showEdit",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:l.a,componentProps:{id:e.id}});case 2:return(n=t.sent).onDidDismiss().then((function(e){var t=e.data.game;i.gameService.listUpdate(t.id,t)})),t.next=6,n.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"confirmDelete",value:function(e){var t=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este game",(function(n){t.delete(e)}))}},{key:"delete",value:function(e){var t=this;this.gameService.api_delete(e.id).subscribe((function(n){console.log(n),"success"==n.status&&(t.dialog.showToast("Game Eliminado",null,"success"),t.gameService.listDelete(e.id))}))}},{key:"showItem",value:function(e){console.log(e)}},{key:"selectDate",value:function(e){var t=this,n=parseInt(e.detail.value),i=this.tabs[n];if(i.results)return this.games=i.results,void this.focusSegment();this.gameService.api_function("adminByDate",{date:i.date}).subscribe((function(e){"success"==e.status&&(t.tabs[n].results=e.data,t.games=t.tabs[n].results,t.focusSegment()),console.log(e)}),(function(e){console.error(e)}))}},{key:"focusSegment",value:function(){var e="sgm_"+this.tabSelected;console.log("select segment : ",e),document.getElementById(e).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}},{key:"delay",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"selectTab",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.tabs.length>0)){e.next=8;break}return t=d(),n=0,this.tabs.forEach((function(e,i){d(e.date).isAfter(t)&&0==n&&(n=i)})),this.selectDate({detail:{value:n}}),this.tabSelected=n,e.next=7,this.util.delay(1500);case 7:this.focusSegment();case 8:case"end":return e.stop()}}),e,this)})))}}])&&t(i.prototype,o),r&&t(i,r),n}(),w.\u0275fac=function(e){return new(e||w)(m.Ib(f.a),m.Ib(g.a),m.Ib(s.V),m.Ib(g.a),m.Ib(h.a))},w.\u0275cmp=m.Cb({type:w,selectors:[["app-list"]],decls:20,vars:4,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["size","12"],["scrollable","",3,"ngModel","ngModelChange","ionChange"],[3,"value","id",4,"ngFor","ngForOf"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"value","id"],["color","tertiary"],["size","10"],["size","11"],["size","1"],["size","2"],["size-sm","4","size-xs","12"],[3,"routerLink"],["name","enter -outline"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,t){1&e&&(m.Nb(0,"ion-header"),m.Nb(1,"ion-toolbar"),m.Nb(2,"ion-buttons",0),m.Jb(3,"ion-back-button",1),m.Mb(),m.Nb(4,"ion-title"),m.rc(5,"Partidos"),m.Mb(),m.Nb(6,"ion-buttons",2),m.Nb(7,"ion-button",3),m.Vb("click",(function(){return t.openModal()})),m.Jb(8,"ion-icon",4),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.Nb(9,"ion-content"),m.Nb(10,"ion-refresher",5),m.Vb("ionRefresh",(function(e){return t.init(e)})),m.Jb(11,"ion-refresher-content"),m.Mb(),m.Nb(12,"ion-list"),m.Nb(13,"ion-grid"),m.Nb(14,"ion-row"),m.Nb(15,"ion-col",6),m.Nb(16,"ion-segment",7),m.Vb("ngModelChange",(function(e){return t.tabSelected=e}))("ionChange",(function(e){return t.selectDate(e)})),m.qc(17,v,2,3,"ion-segment-button",8),m.Mb(),m.Mb(),m.Mb(),m.Mb(),m.qc(18,p,3,0,"ion-list-header",9),m.qc(19,N,30,4,"ion-item",10),m.Mb(),m.Mb()),2&e&&(m.xb(16),m.cc("ngModel",t.tabSelected),m.xb(1),m.cc("ngForOf",t.tabs),m.xb(1),m.cc("ngIf",0==t.games.length),m.xb(1),m.cc("ngForOf",t.games))},directives:[s.r,s.R,s.f,s.c,s.d,s.Q,s.e,s.s,s.m,s.C,s.D,s.x,s.q,s.F,s.l,s.H,s.bb,a.d,a.g,r.j,r.k,s.I,s.y,s.w,s.v,c.i,s.ab],styles:[".status[_ngcontent-%COMP%], .team[_ngcontent-%COMP%]{width:100%}.team[_ngcontent-%COMP%]{display:inline}.goal-team[_ngcontent-%COMP%], .name-team[_ngcontent-%COMP%]{background-color:transparent}.names[_ngcontent-%COMP%]{width:80%}"]}),w)}],S=((k=function t(){e(this,t)}).\u0275mod=m.Gb({type:k}),k.\u0275inj=m.Fb({factory:function(e){return new(e||k)},imports:[[c.j.forChild(x)],c.j]}),k),C=((y=function t(){e(this,t)}).\u0275mod=m.Gb({type:y}),y.\u0275inj=m.Fb({factory:function(e){return new(e||y)},imports:[[r.b,a.a,s.S,S]]}),y)}}])}();