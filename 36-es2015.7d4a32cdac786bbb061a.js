(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{F4UR:function(n,e,i){"use strict";i.r(e),i.d(e,"LoginPageModule",(function(){return p}));var o=i("ofXK"),t=i("3Pt+"),r=i("TEn/"),c=i("tyNb"),s=i("mrSG"),a=i("U9ZX"),b=i("fXoL"),d=i("y/q6");const l=[{path:"",component:(()=>{class n{constructor(n,e){this.authUserService=n,this.modalController=e}ngOnInit(){this.authUserService.redirect()}googleAuth(){}login(n){this.authUserService.login(n.value)}openModal(){return Object(s.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:a.a});return n.onDidDismiss().then(n=>{}),yield n.present()}))}}return n.\u0275fac=function(e){return new(e||n)(b.Kb(d.a),b.Kb(r.hb))},n.\u0275cmp=b.Eb({type:n,selectors:[["app-login"]],decls:20,vars:2,consts:[[1,"ion-padding","ion-align-items-center"],[1,"ion-justify-content-center"],["size-xs","12",1,"ion-align-self-center"],[3,"ngSubmit"],["form","ngForm"],[1,"ion-text-center","bg-l2","icon"],["src","assets/icon/favicon.png"],[1,"ion-padding"],["name","email","type","email","placeholder","ejemplo@gmail.com","ngModel","","required",""],["name","password","type","password","placeholder","Contrase\xf1a","ngModel","","required",""],[2,"color","red","padding-top","0.2rem"],["padding",""],["type","submit","expand","block",3,"disabled"],["expand","block",3,"click"]],template:function(n,e){if(1&n){const n=b.Qb();b.Pb(0,"ion-content",0),b.Pb(1,"ion-grid"),b.Pb(2,"ion-row",1),b.Pb(3,"ion-col",2),b.Pb(4,"form",3,4),b.Xb("ngSubmit",(function(){b.mc(n);const i=b.jc(5);return e.login(i)})),b.Pb(6,"div",5),b.Lb(7,"ion-img",6),b.Ob(),b.Pb(8,"div",7),b.Pb(9,"ion-item"),b.Lb(10,"ion-input",8),b.Ob(),b.Pb(11,"ion-item"),b.Lb(12,"ion-input",9),b.Ob(),b.Ob(),b.Pb(13,"div",10),b.sc(14),b.Ob(),b.Pb(15,"div",11),b.Pb(16,"ion-button",12),b.sc(17,"Iniciar Sesi\xf3n"),b.Ob(),b.Pb(18,"ion-button",13),b.Xb("click",(function(){return e.openModal()})),b.sc(19,"Registrarme"),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()}if(2&n){const n=b.jc(5);b.xb(14),b.tc(e.authUserService.errorsLogin),b.xb(2),b.ec("disabled",n.invalid)}},directives:[r.r,r.w,r.M,r.q,t.i,t.e,t.f,r.z,r.B,r.A,r.ob,t.d,t.g,t.h,r.i],styles:["ion-grid[_ngcontent-%COMP%], ion-row[_ngcontent-%COMP%]{height:100%}ion-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.icon[_ngcontent-%COMP%]{max-width:400px;border-radius:70px;margin:auto}"]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=b.Ib({type:n}),n.\u0275inj=b.Hb({factory:function(e){return new(e||n)},imports:[[c.j.forChild(l)],c.j]}),n})(),p=(()=>{class n{}return n.\u0275mod=b.Ib({type:n}),n.\u0275inj=b.Hb({factory:function(e){return new(e||n)},imports:[[o.b,t.a,r.eb,u]]}),n})()}}]);