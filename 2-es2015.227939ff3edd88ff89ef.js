(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{CimB:function(t,n,e){"use strict";e.d(n,"a",(function(){return L}));var i=e("mrSG"),o=e("8xVP"),s=e("TEn/"),c=e("fXoL"),a=e("G/jy"),r=e("2Rin"),l=e("rLe3"),m=e("EbHZ"),b=e("tyNb"),d=e("y/q6"),u=e("zYHx"),g=e("vuFD"),p=e("ofXK");function h(t,n){1&t&&(c.Pb(0,"ion-list-header"),c.Pb(1,"ion-label"),c.sc(2," No posee me gustas "),c.Ob(),c.Ob())}function f(t,n){if(1&t&&(c.Pb(0,"ion-item"),c.Pb(1,"ion-thumbnail",2),c.Lb(2,"ion-img",3),c.Ob(),c.Pb(3,"ion-label"),c.sc(4),c.Ob(),c.Ob()),2&t){const t=n.$implicit,e=c.Zb();c.xb(2),c.ec("src",t.photo?t.photo.urlCompleteThumb:e.pathImages.images.profile_user),c.xb(2),c.vc(" ",t.last_name," ",t.first_name," ")}}let O=(()=>{class t{constructor(t){this.pathImages=t,this.likes=[]}ngOnInit(){}init(){}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(u.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-likes"]],inputs:{likes:"likes"},decls:5,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["slot","start",1,"comment-image"],[1,"comment-image",2,"border-radius","50%","background-position","center center","background-size","cover",3,"src"]],template:function(t,n){1&t&&(c.Pb(0,"ion-card"),c.Pb(1,"ion-card-content"),c.Pb(2,"ion-list"),c.rc(3,h,3,0,"ion-list-header",0),c.rc(4,f,5,3,"ion-item",1),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.xb(3),c.ec("ngIf",0==n.likes.length),c.xb(1),c.ec("ngForOf",n.likes))},directives:[s.k,s.l,s.E,p.k,p.j,s.F,s.D,s.B,s.ab,s.z],styles:[""]}),t})();var P=e("OXCg");let x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-not-fount"]],decls:3,vars:0,template:function(t,n){1&t&&(c.Pb(0,"ion-card"),c.Pb(1,"ion-card-content"),c.sc(2," No se ha encontrado el registro, es probable que haya sido eliminado. "),c.Ob(),c.Ob())},directives:[s.k,s.l],styles:[""]}),t})();function C(t,n){if(1&t){const t=c.Qb();c.Pb(0,"ion-button",7),c.Xb("click",(function(){return c.mc(t),c.Zb().close()})),c.Lb(1,"ion-icon",8),c.Ob()}}function v(t,n){if(1&t){const t=c.Qb();c.Pb(0,"ion-button",7),c.Xb("click",(function(){return c.mc(t),c.Zb().navCtrl.back()})),c.Lb(1,"ion-icon",8),c.Ob()}}function k(t,n){if(1&t&&(c.Pb(0,"div",18),c.Lb(1,"img",19),c.Ob()),2&t){const t=c.Zb(2);c.xb(1),c.ec("src",t.publication.image.urlComplete,c.nc)}}function M(t,n){if(1&t&&(c.Pb(0,"ion-card"),c.Pb(1,"ion-card-content"),c.Pb(2,"div",9),c.Pb(3,"ion-thumbnail",0),c.Lb(4,"ion-img",10),c.Ob(),c.Pb(5,"div",11),c.Pb(6,"div",12),c.sc(7),c.Ob(),c.Pb(8,"div",13),c.sc(9),c.Ob(),c.Ob(),c.Ob(),c.Pb(10,"div",14),c.Pb(11,"ion-text",15),c.sc(12),c.Ob(),c.Ob(),c.rc(13,k,2,1,"div",16),c.Lb(14,"div",17),c.Ob(),c.Ob()),2&t){const t=c.Zb();c.xb(4),c.ec("src",t.publication.user.photo?t.publication.user.photo.urlCompleteThumb:t.pathImages.images.profile_user),c.xb(3),c.vc(" ",t.publication.user.last_name," ",t.publication.user.first_name," "),c.xb(2),c.uc(" ",t.util.getFormarHumans(t.publication.created_at)," "),c.xb(3),c.uc(" ",t.publication.text," "),c.xb(1),c.ec("ngIf",t.publication.image_id)}}function y(t,n){if(1&t){const t=c.Qb();c.Pb(0,"ion-segment",20),c.Xb("ionChange",(function(n){return c.mc(t),c.Zb().segmentChanged(n)})),c.Pb(1,"ion-segment-button",21),c.Lb(2,"ion-icon",22),c.sc(3),c.Ob(),c.Pb(4,"ion-segment-button",23),c.Lb(5,"ion-icon",24),c.sc(6),c.Ob(),c.Ob()}if(2&t){const t=c.Zb();c.ec("value",t.segment),c.xb(3),c.uc(" ",t.publication.likes.length," "),c.xb(3),c.uc(" ",t.publication.comments.length," ")}}function w(t,n){if(1&t&&c.Lb(0,"app-likes",25),2&t){const t=c.Zb();c.ec("likes",t.publication.likes)}}function _(t,n){if(1&t){const t=c.Qb();c.Pb(0,"app-comments",26),c.Xb("onUpdateComments",(function(n){c.mc(t);const e=c.Zb();return e.updateComments(n,e.publication)})),c.Ob()}if(2&t){const t=c.Zb();c.ec("comments",t.publication.comments)("idRelation",t.id)("nameRelationModel","Publication")("withTitle",!1)}}function I(t,n){1&t&&c.Lb(0,"app-not-fount")}let L=(()=>{class t{constructor(t,n,e,i,s,c,a,r,l,m,b,d){this.request=t,this.navParams=n,this.util=e,this.utilArray=i,this.viewCtrl=s,this.transferData=c,this.route=a,this.navCtrl=r,this.authUser=l,this.pathImages=m,this.dialogService=b,this.platform=d,this.segment="comments",this.isModal=!0,this.firstLoading=!0,this.notFound=!1,this.publicationModel=new o.a("Publication",t),this.id=this.navParams.get("id"),this.segment=this.navParams.get("segment"),this.platform.backButton.subscribeWithPriority(100,()=>{alert("close"),this.close()})}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.id||(this.isModal=!1,this.id=this.route.snapshot.paramMap.get("id"),this.segment="likes"==this.route.snapshot.paramMap.get("segment")?"likes":"comments"),this.init()}))}init(t=null){return Object(i.a)(this,void 0,void 0,(function*(){this.firstLoading&&(yield this.dialogService.loadingProgres(),this.firstLoading=!1),this.publicationModel.api_functionModel(this.id,"pageShow").subscribe(n=>{console.log(n),this.publication=n.data,t&&t.target.complete(),this.dialogService.dimissLoaging()},n=>{this.util.notFoundItemApi(n)&&(this.notFound=!0),console.log(n),t&&t.target.complete(),this.dialogService.dimissLoaging()})}))}close(){this.publication.comments_count=this.publication.comments.length,this.publication.likes_count=this.publication.likes.length,this.viewCtrl.dismiss({publication:this.publication})}segmentChanged(t){console.log("Segment changed",t),this.segment=t.detail.value}updateComments(t,n){n.comments=t}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(a.a),c.Kb(s.jb),c.Kb(r.a),c.Kb(l.a),c.Kb(s.hb),c.Kb(m.a),c.Kb(b.a),c.Kb(s.ib),c.Kb(d.a),c.Kb(u.a),c.Kb(g.a),c.Kb(s.lb))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-publication"]],features:[c.wb([s.jb])],decls:15,vars:7,consts:[["slot","start"],["color","dark",3,"click",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],["color","secondary",3,"value","ionChange",4,"ngIf"],[3,"likes",4,"ngIf"],[3,"comments","idRelation","nameRelationModel","withTitle","onUpdateComments",4,"ngIf"],["color","dark",3,"click"],["name","arrow-back"],[1,"publication-user"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src"],[1,"user"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center",4,"ngIf"],[1,"separator"],[1,"publication-image","ion-text-center"],[3,"src"],["color","secondary",3,"value","ionChange"],["value","likes","layout","icon-start",1,"sgm-likes"],["name","heart-outline"],["value","comments","layout","icon-start",1,"sgm-comments"],["name","chatbubble-ellipses-outline"],[3,"likes"],[3,"comments","idRelation","nameRelationModel","withTitle","onUpdateComments"]],template:function(t,n){1&t&&(c.Pb(0,"ion-header"),c.Pb(1,"ion-toolbar"),c.Pb(2,"ion-buttons",0),c.rc(3,C,2,0,"ion-button",1),c.rc(4,v,2,0,"ion-button",1),c.Ob(),c.Pb(5,"ion-title"),c.sc(6,"Publicaci\xf3n"),c.Ob(),c.Ob(),c.Ob(),c.Pb(7,"ion-content"),c.Pb(8,"ion-refresher",2),c.Xb("ionRefresh",(function(t){return n.init(t)})),c.Lb(9,"ion-refresher-content"),c.Ob(),c.rc(10,M,15,6,"ion-card",3),c.rc(11,y,7,3,"ion-segment",4),c.rc(12,w,1,1,"app-likes",5),c.rc(13,_,1,4,"app-comments",6),c.rc(14,I,1,0,"app-not-fount",3),c.Ob()),2&t&&(c.xb(3),c.ec("ngIf",n.isModal),c.xb(1),c.ec("ngIf",!n.isModal),c.xb(6),c.ec("ngIf",n.publication),c.xb(1),c.ec("ngIf",n.publication),c.xb(1),c.ec("ngIf",n.publication&&"likes"==n.segment),c.xb(1),c.ec("ngIf",n.publication&&"comments"==n.segment),c.xb(1),c.ec("ngIf",n.notFound))},directives:[s.x,s.db,s.j,p.k,s.bb,s.r,s.J,s.K,s.i,s.y,s.k,s.l,s.ab,s.z,s.Y,s.O,s.nb,s.P,O,P.a,x],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:10px 10px 10px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}.sgm-likes[_ngcontent-%COMP%]{--ion-color-base:#e73636!important}.sgm-comments[_ngcontent-%COMP%]{--ion-color-base:#277ecf!important}"]}),t})()},EbHZ:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("fXoL");let o=(()=>{class t{constructor(){this.data={},this.callbaks={}}setData(t,n){this.data[t]=n}getData(t){return this.data.hasOwnProperty(t)?this.data[t]:null}clear(t=null){this.data.hasOwnProperty(t)?delete this.data[t]:this.data={}}onSettDataPage(t,n){this.callbaks[t]=n}setDataPage(t,n){this.callbaks.hasOwnProperty(t)&&this.callbaks[t](n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},OXCg:function(t,n,e){"use strict";e.d(n,"a",(function(){return w}));var i=e("mrSG"),o=e("fXoL"),s=e("8xVP"),c=e("wd/R"),a=e("6g0+"),r=e("y/q6"),l=e("G/jy"),m=e("2Rin"),b=e("TEn/"),d=e("vuFD"),u=e("rLe3"),g=e("ofXK"),p=e("3Pt+"),h=e("tyNb");function f(t,n){1&t&&(o.Pb(0,"div"),o.Pb(1,"ion-card-title",13),o.sc(2,"Comentarios"),o.Ob(),o.Lb(3,"div",14),o.Ob())}function O(t,n){1&t&&(o.Pb(0,"ion-item"),o.Pb(1,"ion-note",15),o.sc(2,"Se el primero en comentar!!!"),o.Ob(),o.Ob())}function P(t,n){if(1&t){const t=o.Qb();o.Pb(0,"ion-button",30),o.Xb("click",(function(){o.mc(t);const n=o.Zb(2).$implicit;return o.Zb().openMenuComment(n)})),o.Lb(1,"ion-icon",31),o.Ob()}}function x(t,n){if(1&t){const t=o.Qb();o.Pb(0,"div",19),o.rc(1,P,2,0,"ion-button",20),o.Pb(2,"ion-thumbnail",21),o.Pb(3,"ion-img",22),o.Xb("click",(function(){o.mc(t);const n=o.Zb().$implicit;return o.Zb().openViewer(n)})),o.Ob(),o.Ob(),o.Pb(4,"div",23),o.Pb(5,"div",24),o.Pb(6,"ion-text",25),o.Pb(7,"a",26),o.sc(8),o.Ob(),o.Ob(),o.Ob(),o.Pb(9,"div",27),o.Pb(10,"ion-text",28),o.sc(11),o.Ob(),o.Ob(),o.Pb(12,"div",29),o.Pb(13,"ion-text",28),o.sc(14),o.Ob(),o.Ob(),o.Ob(),o.Ob()}if(2&t){const t=o.Zb().$implicit,n=o.Zb();o.xb(1),o.ec("ngIf",n.authUser.user.id==t.user_id),o.xb(2),o.ec("src",n.getPhoto(t)),o.xb(4),o.ec("routerLink","/users/"+t.user.id+"/profile"),o.xb(1),o.vc(" ",t.user.last_name," ",t.user.first_name," "),o.xb(3),o.uc(" ",t.body," "),o.xb(3),o.uc(" ",n.formatDate(t.created_at)," ")}}function C(t,n){1&t&&o.Lb(0,"ion-spinner",37)}function v(t,n){if(1&t){const t=o.Qb();o.Pb(0,"div",32),o.Pb(1,"ion-text"),o.sc(2,"Editar comentario"),o.Ob(),o.Pb(3,"ion-textarea",33),o.Xb("ngModelChange",(function(n){return o.mc(t),o.Zb(2).commentEdit.body=n})),o.Ob(),o.Pb(4,"div",34),o.Pb(5,"ion-button",35),o.Xb("click",(function(){return o.mc(t),o.Zb(2).editComment()})),o.rc(6,C,1,0,"ion-spinner",12),o.sc(7," Actualizar "),o.Ob(),o.Pb(8,"ion-button",36),o.Xb("click",(function(){o.mc(t);const n=o.Zb().$implicit;return o.Zb().cancelEdit(n)})),o.sc(9,"Cancelar"),o.Ob(),o.Ob(),o.Ob()}if(2&t){const t=o.Zb(2);o.xb(3),o.ec("ngModel",t.commentEdit.body),o.xb(2),o.ec("disabled",t.updatingComment),o.xb(1),o.ec("ngIf",t.updatingComment),o.xb(2),o.ec("disabled",t.updatingComment)}}function k(t,n){if(1&t&&(o.Pb(0,"ion-item",16),o.rc(1,x,15,7,"div",17),o.rc(2,v,10,4,"div",18),o.Ob()),2&t){const t=n.$implicit;o.xb(1),o.ec("ngIf",!t.edit),o.xb(1),o.ec("ngIf",t.edit)}}function M(t,n){1&t&&o.Lb(0,"ion-icon",38)}function y(t,n){1&t&&o.Lb(0,"ion-spinner",37)}let w=(()=>{class t{constructor(t,n,e,i,c,a,r){this.authService=t,this.request=n,this.util=e,this.modalController=i,this.dialog=c,this.utilArray=a,this.authUser=r,this.comments=[],this.withTitle=!0,this.onUpdateComments=new o.n,this.listComments=[],this.sending=!1,this.updatingComment=!1,this.commentModel=new s.a("Comment",n)}ngOnInit(){this.init()}init(){this.comment={idRelation:this.idRelation,nameRelationModel:this.nameRelationModel,body:this.commentText},this.resetComment(),this.loadCooments()}loadCooments(t=null){this.listComments=this.comments,this.comments&&this.comments.length>0||(this.relationModel=new s.a(this.nameRelationModel,this.request),this.relationModel.api_loadAttribute(this.idRelation,"comments").subscribe(n=>{"success"==n.status&&(this.listComments=n[this.nameRelationModel].comments),t&&t.target.complete()},n=>{t&&t.target.complete()}))}resetComment(){this.comment.body=""}send(){console.log("send"),this.comment.body&&(this.comment.body=this.comment.body.trim(),this.sending=!0,this.commentModel.api_function("add",this.comment).subscribe(t=>{"success"==t.status&&(this.listComments.push(t.data),this.onUpdateComments&&this.onUpdateComments.emit(this.listComments),this.resetComment()),this.sending=!1},t=>{this.sending=!1}))}formatDate(t){return c(t).locale("es").fromNow()}getPhoto(t){return t.user.photo?t.user.photo.urlCompleteThumb:"assets/images/profile.jpg"}openViewer(t){return Object(i.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:a.c,componentProps:{src:t.user.photo?t.user.photo.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});return yield n.present()}))}ngOnChanges(t){t.comments&&this.loadCooments()}openMenuComment(t){return Object(i.a)(this,void 0,void 0,(function*(){this.dialog.actionSheetEditDelete(()=>{t.edit=!0,this.commentEdit=Object.assign({},t)},()=>{this.confirmDelete(t)})}))}confirmDelete(t){this.dialog.presentAlertConfirm("Confirmar","\xbfEstas seguro de eliminar este comentario?",n=>{this.delete(t)})}delete(t){this.commentModel.api_delete(t.id).subscribe(n=>{console.log(n),"success"==n.status&&(this.dialog.showToast("Comentario eliminado.",null,"success"),this.utilArray.listDelete(this.listComments,t.id))})}cancelEdit(t){t.edit=!1,this.commentEdit={body:""}}editComment(){return Object(i.a)(this,void 0,void 0,(function*(){console.log("edit comment api"),this.updatingComment=!0,this.commentEdit.body=this.commentEdit.body.trim(),this.commentModel.api_update(this.commentEdit).subscribe(t=>{"success"==t.status&&(this.commentEdit.edit=!1,this.utilArray.listUpdate(this.listComments,this.commentEdit.id,this.commentEdit)),this.updatingComment=!1},t=>{console.log(t),this.updatingComment=!1})}))}}return t.\u0275fac=function(n){return new(n||t)(o.Kb(r.a),o.Kb(l.a),o.Kb(m.a),o.Kb(b.hb),o.Kb(d.a),o.Kb(u.a),o.Kb(r.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-comments"]],inputs:{nameRelationModel:"nameRelationModel",idRelation:"idRelation",comments:"comments",withTitle:"withTitle"},outputs:{onUpdateComments:"onUpdateComments"},features:[o.vb],decls:15,vars:7,consts:[[2,"margin-top","20px"],[4,"ngIf"],["lines","none",2,"margin","0px","padding","0px"],["class","team-list",4,"ngFor","ngForOf"],[1,"content-new"],[3,"ngSubmit"],[1,"content-comment"],[1,"content-comment-text"],["name","body","placeholder","A\xf1ade un comentario...",1,"editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-comment-btn","ion-align-self-end"],["size","small","color","primary","type","submit",1,"edditor-send",3,"disabled","click"],["name","send-sharp",4,"ngIf"],["name","lines",4,"ngIf"],[1,"ion-text-center","title"],[1,"separator"],[2,"font-size","large","margin","15px"],[1,"team-list"],["class","comment-item",4,"ngIf"],["class","comment-edit",4,"ngIf"],[1,"comment-item"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],["slot","start",1,"comment-image"],[1,"comment-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"comment-data"],[1,"comment-user"],["color","dark"],[2,"text-decoration","blink",3,"routerLink"],[1,"comment-body","first-uppercase"],["color","light"],[1,"comment-date"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"comment-edit"],["name","body","placeholder","A\xf1ade un comentario...",1,"form-control","editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-right","comment-edit-bts"],["slot","end",3,"disabled","click"],["slot","end","color","light",3,"disabled","click"],["name","lines"],["name","send-sharp"]],template:function(t,n){1&t&&(o.Pb(0,"div",0),o.rc(1,f,4,0,"div",1),o.Pb(2,"div"),o.Pb(3,"ion-list",2),o.rc(4,O,3,0,"ion-item",1),o.rc(5,k,3,2,"ion-item",3),o.Ob(),o.Pb(6,"div",4),o.Pb(7,"form",5),o.Xb("ngSubmit",(function(){return n.send()})),o.Pb(8,"div",6),o.Pb(9,"div",7),o.Pb(10,"ion-textarea",8),o.Xb("ngModelChange",(function(t){return n.comment.body=t})),o.Ob(),o.Ob(),o.Pb(11,"div",9),o.Pb(12,"ion-fab-button",10),o.Xb("click",(function(){return n.send()})),o.rc(13,M,1,0,"ion-icon",11),o.rc(14,y,1,0,"ion-spinner",12),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&t&&(o.xb(1),o.ec("ngIf",n.withTitle),o.xb(3),o.ec("ngIf",n.listComments.length<1),o.xb(1),o.ec("ngForOf",n.listComments),o.xb(5),o.ec("ngModel",n.comment.body),o.xb(2),o.ec("disabled",n.sending),o.xb(1),o.ec("ngIf",!n.sending),o.xb(1),o.ec("ngIf",n.sending))},directives:[g.k,b.E,g.j,p.i,p.e,p.f,b.Z,b.ob,p.d,p.g,b.u,b.o,b.B,b.I,b.ab,b.z,b.Y,h.i,b.mb,b.i,b.y,b.U],styles:[".comment-item[_ngcontent-%COMP%]{width:100%;display:flex}.comment-image[_ngcontent-%COMP%]{font-size:large}.comment-data[_ngcontent-%COMP%]{width:100%}.comment-user[_ngcontent-%COMP%]{font-size:large;margin-top:10px;font-weight:700}.comment-body[_ngcontent-%COMP%]{font-size:medium;font-style:italic;margin-left:5px;color:#2f4f4f;white-space:pre-wrap}.comment-date[_ngcontent-%COMP%]{font-size:x-small;text-align:right;color:#2f4f4f}.editor-text[_ngcontent-%COMP%]{box-shadow:2px 2px 5px #999;padding:2px;border-radius:15px}.editor-send[_ngcontent-%COMP%]{margin-left:-5px}.content-comment[_ngcontent-%COMP%]{margin:10px;display:flex}.content-comment-text[_ngcontent-%COMP%]{width:90%}.content-comment-btn[_ngcontent-%COMP%]{width:10%}.comment-image[_ngcontent-%COMP%]{margin-top:3px;margin-right:5px}.comment-edit[_ngcontent-%COMP%]{width:100%;margin-bottom:15px;padding:5px}.comment-edit[_ngcontent-%COMP%], .comment-edit-bts[_ngcontent-%COMP%]{margin-top:10px}.title[_ngcontent-%COMP%]{color:#fff;padding-top:10px;padding-bottom:5px;font-size:x-large;border-top-left-radius:10px;border-top-right-radius:10px}.content-new[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{background:var(--background-l1)}.content-new[_ngcontent-%COMP%]{border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding-top:5px;padding-bottom:10px}"]}),t})()},rLe3:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("fXoL");let o=(()=>{class t{constructor(){}listAddLast(t,n){t.push(n)}listAddFirst(t,n){t.unshift(n)}listUpdate(t,n,e){let i=this.findIndexList(t,n);i>=0&&(t[i]=e)}listDelete(t,n){let e=this.findIndexList(t,n);e>=0&&t.splice(e,1)}findList(t,n){return t.find(t=>t.id===n)}findIndexList(t,n){return t.findIndex(t=>t.id===n)}updateAttribustesObject(t,n,e=[]){console.log("update attributes");for(let i of e)n.hasOwnProperty(i)&&(t[i]=n[i]);return t}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);