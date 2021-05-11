(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/profile/profile.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/profile/profile.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Jugador</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div *ngIf=\"player\">\n    <ion-card>\n      <ion-img [src]=\"getPhoto()\" ></ion-img>\n      <h3 class=\"ion-text-center\">{{player.name}}</h3>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"player\">\n    <div class=\"content-data\">\n      <ion-grid>\n        <ion-row >\n          <ion-col class=\"data\">\n            <div>\n              Edad\n            </div>\n            <div class=\"data-value\">\n              {{getYears(player.birth_date)}}\n            </div>\n          </ion-col>\n          <ion-col class=\"data\">\n            <div class=\"ion-text-end\">\n              Peso\n            </div>\n            <div class=\"data-value ion-text-end\">\n              {{player.weight}}\n            </div>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col class=\"data\">\n            <div>\n              Posición\n            </div>\n            <div class=\"data-value\">\n              {{player.position.name}}\n            </div>\n          </ion-col>\n          <ion-col class=\"data\">\n            <div class=\"ion-text-end\"> \n              Altura\n            </div>\n            <div class=\"data-value ion-text-end\">\n              {{player.height}}\n            </div>\n          </ion-col>\n        </ion-row>\n  \n      </ion-grid>\n  \n      <div class=\" cami ion-text-center\">\n        <div class=\"cami-c\">\n          <div class=\"cami-name\" >{{player.name}}</div>\n          <ion-img \n            class=\"cami-img\"\n            [src]=\"'assets/images/cam.png'\"\n            style=\"border-radius:50%; background-position:center center; background-size:cover; \">\n          </ion-img>\n          <div class=\"cami-number\">{{player.number}}</div>\n          </div>\n      </div>\n    </div>\n\n    <div>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Estadísticas</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <label>Goles</label>\n              <ion-note slot=\"end\" color=\"primary\">{{player.countGoals}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n              <label>Asistencias</label>\n              <ion-note slot=\"end\" color=\"primary\">{{player.countAssistence}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n              <label>Rojas</label>\n              <ion-note slot=\"end\" color=\"primary\">{{player.countRed}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n              <label>Amarillas</label>\n              <ion-note slot=\"end\" color=\"primary\">{{player.countYellow}}</ion-note>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    \n\n  </div>\n\n  <app-red-list\n    [nameModel] = \"'Player'\"\n    [idModel] = \"id\"\n    [isAdmin] = \"false\"\n  ></app-red-list>\n \n\n</ion-content>\n");

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








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-note {\n  font-size: larger;\n  font-weight: bold;\n}\n\n.cami {\n  position: absolute;\n  align-items: center;\n  left: 50%;\n  margin-left: -70px;\n  width: 140px;\n  top: 50%;\n  height: 140px;\n  margin-top: -70px;\n  background: beige;\n  border-radius: 80px;\n}\n\n.cami-name {\n  font-size: xx-small;\n  position: absolute;\n  width: 100%;\n  top: 20px;\n  color: white;\n}\n\n.cami-number {\n  font-size: xx-large;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  top: 40px;\n  color: floralwhite;\n}\n\n.cami-img {\n  height: 140px;\n  width: 140px;\n  padding: 2px;\n  border: solid 1px #00000042;\n}\n\n.cami-c {\n  position: relative;\n}\n\n.content-data {\n  position: relative;\n}\n\n.data {\n  height: 90px;\n  border: solid 1px #00000042;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 1px;\n}\n\n.data-value {\n  font-size: large;\n  color: #000000ba;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxheWVyL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tbm90ZSB7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4gIFxuXG4uY2FtaXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgIGJhY2tncm91bmQ6IGJlaWdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XG59XG5cbi5jYW1pLW5hbWV7XG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbWktbnVtYmVye1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDQwcHg7XG4gICAgY29sb3I6IGZsb3JhbHdoaXRlO1xufVxuXG4uY2FtaS1pbWd7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMwMDAwMDA0Mjtcbn1cblxuLmNhbWktY3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudC1kYXRhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kYXRhe1xuICAgIGhlaWdodDogOTBweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMDAwMDAwNDI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMXB4O1xuXG59XG4uZGF0YS12YWx1ZXtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGNvbG9yOiAjMDAwMDAwYmE7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

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
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let ProfilePage = class ProfilePage {
    constructor(request, route) {
        this.request = request;
        this.route = route;
        this.platerModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Player', request);
        this.id = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.platerModel.api_functionModel(this.id, 'profile').subscribe(response => {
            if (response['status'] == 'success') {
                this.player = response['data'];
                console.log('player', this.player);
            }
        }, error => {
        });
    }
    getPhoto() {
        if (this.player && this.player.photo)
            return this.player.photo.urlComplete;
        return 'assets/images/jugador.png';
    }
    getYears(date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__().diff(date, 'years');
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
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