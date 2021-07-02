(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/profile/profile.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/profile/profile.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Jugador</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\" *ngIf=\"canEdit\">\n      <ion-button (click)=\"showEdit(player)\">\n        <ion-icon name=\"create\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"ion-text-center\">\n    <ion-chip class=\"chip\" color=\"secondary\" *ngIf=\"isAdmin\">\n      <ion-label class=\"msj-is-admin\">\n        Eres el administrador de este perfil, puede activar la edicion aquí.\n      </ion-label>\n      <ion-toggle [(ngModel)]=\"canEdit\"></ion-toggle>\n\n    </ion-chip>\n  </div>\n  \n  \n  <div *ngIf=\"player\">\n    <ion-card>\n      <!-- <ion-img [src]=\"getPhoto()\" ></ion-img> -->\n\n      <ion-img-viewer class=\"ion-text-center\"\n        title=\"Jugador\" \n        [text]=\"player.name\"\n        scheme=\"dark\" \n        [src]=\"getPhoto()\">\n      </ion-img-viewer>\n\n      <h3 class=\"ion-text-center\">{{player.name}}</h3>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"player\">\n    <div class=\"content-data\">\n      <ion-grid>\n        <ion-row >\n          <ion-col class=\"data\">\n            <div>\n              Edad\n            </div>\n            <div class=\"data-value\">\n              {{getYears(player.birth_date)}}\n            </div>\n          </ion-col>\n          <ion-col class=\"data\">\n            <div class=\"ion-text-end\">\n              Peso\n            </div>\n            <div class=\"data-value ion-text-end\">\n              {{player.weight}}\n            </div>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col class=\"data\">\n            <div>\n              Posición\n            </div>\n            <div class=\"data-value\" *ngIf=\"player.position\">\n              {{player.position.name}}\n            </div>\n          </ion-col>\n          <ion-col class=\"data\">\n            <div class=\"ion-text-end\"> \n              Altura\n            </div>\n            <div class=\"data-value ion-text-end\">\n              {{player.height}}\n            </div>\n          </ion-col>\n        </ion-row>\n  \n      </ion-grid>\n  \n      <div class=\" cami ion-text-center\">\n        <div class=\"cami-c\">\n          <div class=\"cami-name\" >{{player.name}}</div>\n          <ion-img \n            class=\"cami-img\"\n            [src]=\"'assets/images/cam.png'\"\n            style=\"border-radius:50%; background-position:center center; background-size:cover; \">\n          </ion-img>\n          <div class=\"cami-number\">{{player.number}}</div>\n          </div>\n      </div>\n    </div>\n\n    <div class=\"player-team bg-l2\" *ngIf=\"player && player.team\">\n      <ion-text class=\"player-team-title\" >Equipo Actual</ion-text>\n  \n      <div>\n        <ion-item routerLink=\"/team/profile/{{player.team.id}}\" >\n          <ion-thumbnail slot=\"start\">\n            <ion-img \n              [src]=\"player.team.shield ? player.team.shield.urlComplete : 'assets/images/shield_team.png'\"\n              style=\"border-radius:50%; background-position:center center; background-size:cover; width:50px; height:50px;\">\n            </ion-img>\n          </ion-thumbnail>\n          <ion-label >\n            <h2>{{player.team.name}}</h2>\n          </ion-label>\n        </ion-item>\n      </div>\n  \n    </div>\n\n    <div>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Estadísticas</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <label>Goles</label>\n              <ion-note slot=\"end\" color=\"primary\">{{player.countGoals}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n              <label>Asistencias</label>\n              <ion-note slot=\"end\" color=\"primary\">{{player.countAssistence}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n              <label>Rojas</label>\n              <ion-note slot=\"end\" color=\"primary\">{{player.countRed}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n              <label>Amarillas</label>\n              <ion-note slot=\"end\" color=\"primary\">{{player.countYellow}}</ion-note>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    \n\n  </div>\n\n \n\n  <app-red-list\n    [nameModel] = \"'Player'\"\n    [idModel] = \"id\"\n    [isAdmin] = \"canEdit\"\n  ></app-red-list>\n \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/player/profile/profile-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/player/profile/profile-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/player/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/player/profile/profile.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/player/profile/profile.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/player/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/player/profile/profile.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_8__["NgxIonicImageViewerModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/player/profile/profile.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/player/profile/profile.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\nion-chip {\n  padding: 10px;\n}\n\nion-note {\n  font-size: larger;\n  font-weight: bold;\n}\n\n.cami {\n  position: absolute;\n  align-items: center;\n  left: 50%;\n  margin-left: -70px;\n  width: 140px;\n  top: 50%;\n  height: 140px;\n  margin-top: -70px;\n  background: beige;\n  border-radius: 80px;\n}\n\n.cami-name {\n  font-size: xx-small;\n  position: absolute;\n  width: 100%;\n  top: 20px;\n  color: white;\n}\n\n.cami-number {\n  font-size: xx-large;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  top: 40px;\n  color: floralwhite;\n}\n\n.cami-img {\n  height: 140px;\n  width: 140px;\n  padding: 2px;\n  border: solid 1px #00000042;\n}\n\n.cami-c {\n  position: relative;\n}\n\n.content-data {\n  position: relative;\n}\n\n.data {\n  height: 90px;\n  border: solid 1px var(--ion-color-light);\n  border-radius: 10px;\n  padding: 10px;\n  margin: 1px;\n}\n\n.data-value {\n  font-size: large;\n  color: var(--ion-color-light);\n  margin-top: 10px;\n}\n\n.player-team-title {\n  margin-left: 10px;\n  color: var(--ion-color-light);\n}\n\n.player-team {\n  margin: 5px;\n  border: solid 1px #c7c7c7;\n  border-radius: 10px;\n  padding: 5px;\n}\n\n.msj-is-admin {\n  padding: 10px;\n}\n\n.chip {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxheWVyL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbmlvbi1jaGlwe1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiAgXG5cbi5jYW1pe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTcwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgbWFyZ2luLXRvcDogLTcwcHg7XG4gICAgYmFja2dyb3VuZDogYmVpZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogODBweDtcbn1cblxuLmNhbWktbmFtZXtcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FtaS1udW1iZXJ7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogNDBweDtcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XG59XG5cbi5jYW1pLWltZ3tcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDAwMDQyO1xufVxuXG4uY2FtaS1je1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50LWRhdGF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRhdGF7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMXB4O1xuXG59XG4uZGF0YS12YWx1ZXtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wbGF5ZXItdGVhbS10aXRsZXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAgIDtcbn1cblxuLnBsYXllci10ZWFte1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjN2M3Yzc7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tc2otaXMtYWRtaW57XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNoaXB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/player/profile/profile.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/player/profile/profile.page.ts ***!
  \******************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var _player_form_player_form_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../player-form/player-form.page */ "./src/app/pages/player/player-form/player-form.page.ts");









let ProfilePage = class ProfilePage {
    constructor(request, route, authUser, modalController) {
        this.request = request;
        this.route = route;
        this.authUser = authUser;
        this.modalController = modalController;
        this.isAdmin = false;
        this.canEdit = false;
        this.platerModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Player', request);
        this.id = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.init();
    }
    init($event = null) {
        this.platerModel.api_functionModel(this.id, 'profile').subscribe(response => {
            if (response['status'] == 'success') {
                this.player = response['data'];
                this.isAdmin = this.player.user_id == this.authUser.user.id;
                console.log('player', this.player);
            }
            if ($event)
                $event.target.complete();
        }, error => {
            if ($event)
                $event.target.complete();
        });
    }
    getPhoto() {
        if (this.player && this.player.photo)
            return this.player.photo.urlComplete;
        return 'assets/images/jugador.png';
    }
    getYears(date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__().diff(date, 'years');
    }
    showEdit(player) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _player_form_player_form_page__WEBPACK_IMPORTED_MODULE_8__["PlayerFormPage"],
                componentProps: {
                    id: player.id,
                    isUser: true
                }
            });
            modal.onDidDismiss().then(data => {
                console.log('dismiss edit');
                if (data.data && data.data.hasOwnProperty('player')) {
                    if (data.data && data.data['player']) {
                        const player = data.data['player'];
                        this.player = player;
                    }
                    //this.playerService.listUpdate(player.id,player);
                }
            });
            return yield modal.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__["AuthUserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/player/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-player-profile-profile-module-es2015.js.map