!function(){function t(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==i.return||i.return()}finally{if(s)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{GgTm:function(t,e,i){"use strict";i.r(e),i.d(e,"ResultPageModule",(function(){return C}));var r=i("ofXK"),a=i("3Pt+"),c=i("TEn/"),s=i("tyNb"),m=i("8xVP"),u=i("fXoL"),d=i("G/jy"),l=i("ZETu"),b=i("OXCg"),f=i("6Rhz");function p(t,e){if(1&t&&u.Lb(0,"app-result-item",5),2&t){var n=u.Zb();u.ec("game",n.game)}}var g,h,v,x=[{path:"",component:(g=function(){function t(e,i){n(this,t),this.route=e,this.requesService=i,this.id=this.route.snapshot.paramMap.get("id"),this.resultModel=new m.a("Game",i)}return o(t,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.resultModel.api_functionModel(this.id,"dataProfile").subscribe((function(n){"success"==n.status&&(t.game=n.data),e&&e.target.complete()}))}}]),t}(),g.\u0275fac=function(t){return new(t||g)(u.Kb(s.a),u.Kb(d.a))},g.\u0275cmp=u.Eb({type:g,selectors:[["app-result"]],decls:12,vars:4,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],[3,"game",4,"ngIf"],[3,"game_id"],[3,"idRelation","nameRelationModel"],[3,"game"]],template:function(t,e){1&t&&(u.Pb(0,"ion-header"),u.Pb(1,"ion-toolbar"),u.Pb(2,"ion-title"),u.sc(3,"Partido"),u.Ob(),u.Pb(4,"ion-buttons",0),u.Lb(5,"ion-back-button"),u.Ob(),u.Ob(),u.Ob(),u.Pb(6,"ion-content"),u.Pb(7,"ion-refresher",1),u.Xb("ionRefresh",(function(t){return e.init(t)})),u.Lb(8,"ion-refresher-content"),u.Ob(),u.rc(9,p,1,1,"app-result-item",2),u.Lb(10,"app-event-list",3),u.Lb(11,"app-comments",4),u.Ob()),2&t&&(u.xb(9),u.ec("ngIf",e.game),u.xb(1),u.ec("game_id",e.id),u.xb(1),u.ec("idRelation",e.id)("nameRelationModel","Game"))},directives:[c.x,c.db,c.bb,c.j,c.f,c.g,c.r,c.J,c.K,r.k,l.a,b.a,f.a],styles:["",".game[_ngcontent-%COMP%]{color:#fff;width:100%;padding:10px;border-radius:5px;box-shadow:inset 0 -3em 3em rgba(0,0,0,.1),0 0 0 2px #fff,.3em .3em 1em rgba(0,0,0,.3)}.team[_ngcontent-%COMP%]{position:relative;background-image:url(img_fondo_res4.7a1ad4da4803a568a1d2.png);background-repeat:no-repeat;background-size:cover;width:100%;padding:15px 10px 10px}.name-team[_ngcontent-%COMP%]{width:70%}.goals-team[_ngcontent-%COMP%], .name-team[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.goals-team[_ngcontent-%COMP%]{width:30%;text-align:right;padding-right:20px}.comment[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;display:none}"]}),g)}],y=((h=function t(){n(this,t)}).\u0275mod=u.Ib({type:h}),h.\u0275inj=u.Hb({factory:function(t){return new(t||h)},imports:[[s.j.forChild(x)],s.j]}),h),O=i("j1ZV"),C=((v=function t(){n(this,t)}).\u0275mod=u.Ib({type:v}),v.\u0275inj=u.Hb({factory:function(t){return new(t||v)},imports:[[r.b,a.a,c.eb,y,O.a]]}),v)},OXCg:function(t,e,i){"use strict";i.d(e,"a",(function(){return I}));var r=i("mrSG"),a=i("fXoL"),c=i("8xVP"),s=i("wd/R"),m=i("6g0+"),u=i("y/q6"),d=i("G/jy"),l=i("2Rin"),b=i("TEn/"),f=i("vuFD"),p=i("rLe3"),g=i("ofXK"),h=i("3Pt+"),v=i("tyNb");function x(t,e){1&t&&(a.Pb(0,"div"),a.Pb(1,"ion-card-title",13),a.sc(2,"Comentarios"),a.Ob(),a.Lb(3,"div",14),a.Ob())}function y(t,e){1&t&&(a.Pb(0,"ion-item"),a.Pb(1,"ion-note",15),a.sc(2,"Se el primero en comentar!!!"),a.Ob(),a.Ob())}function O(t,e){if(1&t){var n=a.Qb();a.Pb(0,"ion-button",30),a.Xb("click",(function(){a.mc(n);var t=a.Zb(2).$implicit;return a.Zb().openMenuComment(t)})),a.Lb(1,"ion-icon",31),a.Ob()}}function C(t,e){if(1&t){var n=a.Qb();a.Pb(0,"div",19),a.rc(1,O,2,0,"ion-button",20),a.Pb(2,"ion-thumbnail",21),a.Pb(3,"ion-img",22),a.Xb("click",(function(){a.mc(n);var t=a.Zb().$implicit;return a.Zb().openViewer(t)})),a.Ob(),a.Ob(),a.Pb(4,"div",23),a.Pb(5,"div",24),a.Pb(6,"ion-text",25),a.Pb(7,"a",26),a.sc(8),a.Ob(),a.Ob(),a.Ob(),a.Pb(9,"div",27),a.Pb(10,"ion-text",28),a.sc(11),a.Ob(),a.Ob(),a.Pb(12,"div",29),a.Pb(13,"ion-text",28),a.sc(14),a.Ob(),a.Ob(),a.Ob(),a.Ob()}if(2&t){var i=a.Zb().$implicit,o=a.Zb();a.xb(1),a.ec("ngIf",o.authUser.user.id==i.user_id),a.xb(2),a.ec("src",o.getPhoto(i)),a.xb(4),a.ec("routerLink","/users/"+i.user.id+"/profile"),a.xb(1),a.vc(" ",i.user.last_name," ",i.user.first_name," "),a.xb(3),a.uc(" ",i.body," "),a.xb(3),a.uc(" ",o.formatDate(i.created_at)," ")}}function P(t,e){1&t&&a.Lb(0,"ion-spinner",37)}function w(t,e){if(1&t){var n=a.Qb();a.Pb(0,"div",32),a.Pb(1,"ion-text"),a.sc(2,"Editar comentario"),a.Ob(),a.Pb(3,"ion-textarea",33),a.Xb("ngModelChange",(function(t){return a.mc(n),a.Zb(2).commentEdit.body=t})),a.Ob(),a.Pb(4,"div",34),a.Pb(5,"ion-button",35),a.Xb("click",(function(){return a.mc(n),a.Zb(2).editComment()})),a.rc(6,P,1,0,"ion-spinner",12),a.sc(7," Actualizar "),a.Ob(),a.Pb(8,"ion-button",36),a.Xb("click",(function(){a.mc(n);var t=a.Zb().$implicit;return a.Zb().cancelEdit(t)})),a.sc(9,"Cancelar"),a.Ob(),a.Ob(),a.Ob()}if(2&t){var i=a.Zb(2);a.xb(3),a.ec("ngModel",i.commentEdit.body),a.xb(2),a.ec("disabled",i.updatingComment),a.xb(1),a.ec("ngIf",i.updatingComment),a.xb(2),a.ec("disabled",i.updatingComment)}}function k(t,e){if(1&t&&(a.Pb(0,"ion-item",16),a.rc(1,C,15,7,"div",17),a.rc(2,w,10,4,"div",18),a.Ob()),2&t){var n=e.$implicit;a.xb(1),a.ec("ngIf",!n.edit),a.xb(1),a.ec("ngIf",n.edit)}}function M(t,e){1&t&&a.Lb(0,"ion-icon",38)}function _(t,e){1&t&&a.Lb(0,"ion-spinner",37)}var I=function(){var t=function(){function t(e,i,o,r,s,m,u){n(this,t),this.authService=e,this.request=i,this.util=o,this.modalController=r,this.dialog=s,this.utilArray=m,this.authUser=u,this.comments=[],this.withTitle=!0,this.onUpdateComments=new a.n,this.listComments=[],this.sending=!1,this.updatingComment=!1,this.commentModel=new c.a("Comment",i)}return o(t,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){this.comment={idRelation:this.idRelation,nameRelationModel:this.nameRelationModel,body:this.commentText},this.resetComment(),this.loadCooments()}},{key:"loadCooments",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.listComments=this.comments,this.comments&&this.comments.length>0||(this.relationModel=new c.a(this.nameRelationModel,this.request),this.relationModel.api_loadAttribute(this.idRelation,"comments").subscribe((function(n){"success"==n.status&&(t.listComments=n[t.nameRelationModel].comments),e&&e.target.complete()}),(function(t){e&&e.target.complete()})))}},{key:"resetComment",value:function(){this.comment.body=""}},{key:"send",value:function(){var t=this;console.log("send"),this.comment.body&&(this.comment.body=this.comment.body.trim(),this.sending=!0,this.commentModel.api_function("add",this.comment).subscribe((function(e){"success"==e.status&&(t.listComments.push(e.data),t.onUpdateComments&&t.onUpdateComments.emit(t.listComments),t.resetComment()),t.sending=!1}),(function(e){t.sending=!1})))}},{key:"formatDate",value:function(t){return s(t).locale("es").fromNow()}},{key:"getPhoto",value:function(t){return t.user.photo?t.user.photo.urlCompleteThumb:"assets/images/profile.jpg"}},{key:"openViewer",value:function(t){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:m.c,componentProps:{src:t.user.photo?t.user.photo.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnChanges",value:function(t){t.comments&&this.loadCooments()}},{key:"openMenuComment",value:function(t){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.dialog.actionSheetEditDelete((function(){t.edit=!0,n.commentEdit=Object.assign({},t)}),(function(){n.confirmDelete(t)}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"confirmDelete",value:function(t){var e=this;this.dialog.presentAlertConfirm("Confirmar","\xbfEstas seguro de eliminar este comentario?",(function(n){e.delete(t)}))}},{key:"delete",value:function(t){var e=this;this.commentModel.api_delete(t.id).subscribe((function(n){console.log(n),"success"==n.status&&(e.dialog.showToast("Commentario eliminado",null,"success"),e.utilArray.listDelete(e.listComments,t.id))}))}},{key:"cancelEdit",value:function(t){t.edit=!1,this.commentEdit={body:""}}},{key:"editComment",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("edit comment api"),this.updatingComment=!0,this.commentEdit.body=this.commentEdit.body.trim(),this.commentModel.api_update(this.commentEdit).subscribe((function(t){"success"==t.status&&(e.commentEdit.edit=!1,e.utilArray.listUpdate(e.listComments,e.commentEdit.id,e.commentEdit)),e.updatingComment=!1}),(function(t){console.log(t),e.updatingComment=!1}));case 1:case"end":return t.stop()}}),t,this)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Kb(u.a),a.Kb(d.a),a.Kb(l.a),a.Kb(b.hb),a.Kb(f.a),a.Kb(p.a),a.Kb(u.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-comments"]],inputs:{nameRelationModel:"nameRelationModel",idRelation:"idRelation",comments:"comments",withTitle:"withTitle"},outputs:{onUpdateComments:"onUpdateComments"},features:[a.vb],decls:15,vars:7,consts:[[2,"margin-top","20px"],[4,"ngIf"],["lines","none",2,"margin","0px","padding","0px"],["class","team-list",4,"ngFor","ngForOf"],[1,"content-new"],[3,"ngSubmit"],[1,"content-comment"],[1,"content-comment-text"],["name","body","placeholder","Escreibe un comentario...",1,"editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-comment-btn","ion-align-self-end"],["size","small","color","primary","type","submit",1,"edditor-send",3,"disabled","click"],["name","send-sharp",4,"ngIf"],["name","lines",4,"ngIf"],[1,"ion-text-center","title"],[1,"separator"],[2,"font-size","large","margin","15px"],[1,"team-list"],["class","comment-item",4,"ngIf"],["class","comment-edit",4,"ngIf"],[1,"comment-item"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],["slot","start",1,"comment-image"],[1,"comment-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"comment-data"],[1,"comment-user"],["color","dark"],[2,"text-decoration","blink",3,"routerLink"],[1,"comment-body","first-uppercase"],["color","light"],[1,"comment-date"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"comment-edit"],["name","body","placeholder","A\xf1ade un comentario...",1,"form-control","editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-right","comment-edit-bts"],["slot","end",3,"disabled","click"],["slot","end","color","light",3,"disabled","click"],["name","lines"],["name","send-sharp"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.rc(1,x,4,0,"div",1),a.Pb(2,"div"),a.Pb(3,"ion-list",2),a.rc(4,y,3,0,"ion-item",1),a.rc(5,k,3,2,"ion-item",3),a.Ob(),a.Pb(6,"div",4),a.Pb(7,"form",5),a.Xb("ngSubmit",(function(){return e.send()})),a.Pb(8,"div",6),a.Pb(9,"div",7),a.Pb(10,"ion-textarea",8),a.Xb("ngModelChange",(function(t){return e.comment.body=t})),a.Ob(),a.Ob(),a.Pb(11,"div",9),a.Pb(12,"ion-fab-button",10),a.Xb("click",(function(){return e.send()})),a.rc(13,M,1,0,"ion-icon",11),a.rc(14,_,1,0,"ion-spinner",12),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.xb(1),a.ec("ngIf",e.withTitle),a.xb(3),a.ec("ngIf",e.listComments.length<1),a.xb(1),a.ec("ngForOf",e.listComments),a.xb(5),a.ec("ngModel",e.comment.body),a.xb(2),a.ec("disabled",e.sending),a.xb(1),a.ec("ngIf",!e.sending),a.xb(1),a.ec("ngIf",e.sending))},directives:[g.k,b.E,g.j,h.i,h.e,h.f,b.Z,b.ob,h.d,h.g,b.u,b.o,b.B,b.I,b.ab,b.z,b.Y,v.i,b.mb,b.i,b.y,b.U],styles:[".comment-item[_ngcontent-%COMP%]{width:100%;display:flex}.comment-image[_ngcontent-%COMP%]{font-size:large}.comment-data[_ngcontent-%COMP%]{width:100%}.comment-user[_ngcontent-%COMP%]{font-size:large;margin-top:10px;font-weight:700}.comment-body[_ngcontent-%COMP%]{font-size:medium;font-style:italic;margin-left:5px;color:#2f4f4f;white-space:pre-wrap}.comment-date[_ngcontent-%COMP%]{font-size:x-small;text-align:right;color:#2f4f4f}.editor-text[_ngcontent-%COMP%]{box-shadow:2px 2px 5px #999;padding:2px;border-radius:15px}.editor-send[_ngcontent-%COMP%]{margin-left:-5px}.content-comment[_ngcontent-%COMP%]{margin:10px;display:flex}.content-comment-text[_ngcontent-%COMP%]{width:90%}.content-comment-btn[_ngcontent-%COMP%]{width:10%}.comment-image[_ngcontent-%COMP%]{margin-top:3px;margin-right:5px}.comment-edit[_ngcontent-%COMP%]{width:100%;margin-bottom:15px;padding:5px}.comment-edit[_ngcontent-%COMP%], .comment-edit-bts[_ngcontent-%COMP%]{margin-top:10px}.title[_ngcontent-%COMP%]{color:#fff;padding-top:10px;padding-bottom:5px;font-size:x-large;border-top-left-radius:10px;border-top-right-radius:10px}.content-new[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{background:var(--background-l1)}.content-new[_ngcontent-%COMP%]{border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding-top:5px;padding-bottom:10px}"]}),t}()},rLe3:function(e,i,r){"use strict";r.d(i,"a",(function(){return c}));var a=r("fXoL"),c=function(){var e=function(){function e(){n(this,e)}return o(e,[{key:"listAddLast",value:function(t,e){t.push(e)}},{key:"listAddFirst",value:function(t,e){t.unshift(e)}},{key:"listUpdate",value:function(t,e,n){var i=this.findIndexList(t,e);i>=0&&(t[i]=n)}},{key:"listDelete",value:function(t,e){var n=this.findIndexList(t,e);n>=0&&t.splice(n,1)}},{key:"findList",value:function(t,e){return t.find((function(t){return t.id===e}))}},{key:"findIndexList",value:function(t,e){return t.findIndex((function(t){return t.id===e}))}},{key:"updateAttribustesObject",value:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];console.log("update attributes");var o,r=t(i);try{for(r.s();!(o=r.n()).done;){var a=o.value;n.hasOwnProperty(a)&&(e[a]=n[a])}}catch(c){r.e(c)}finally{r.f()}return e}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();