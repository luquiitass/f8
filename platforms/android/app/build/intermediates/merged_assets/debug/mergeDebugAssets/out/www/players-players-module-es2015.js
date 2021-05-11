(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["players-players-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/players/players.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/players/players.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>players</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-player-list \n  [items] = \"players\"\n  (eventSelect)=\"playerSelect($event)\" \n></app-player-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/players/players-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/players/players-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PlayersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersPageRoutingModule", function() { return PlayersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _players_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players.page */ "./src/app/pages/home/players/players.page.ts");




const routes = [
    {
        path: '',
        component: _players_page__WEBPACK_IMPORTED_MODULE_3__["PlayersPage"]
    }
];
let PlayersPageRoutingModule = class PlayersPageRoutingModule {
};
PlayersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/players/players.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/home/players/players.module.ts ***!
  \******************************************************/
/*! exports provided: PlayersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersPageModule", function() { return PlayersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _players_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./players-routing.module */ "./src/app/pages/home/players/players-routing.module.ts");
/* harmony import */ var _players_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./players.page */ "./src/app/pages/home/players/players.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








let PlayersPageModule = class PlayersPageModule {
};
PlayersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _players_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayersPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_players_page__WEBPACK_IMPORTED_MODULE_6__["PlayersPage"]]
    })
], PlayersPageModule);



/***/ }),

/***/ "./src/app/pages/home/players/players.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/home/players/players.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcGxheWVycy9wbGF5ZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home/players/players.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/home/players/players.page.ts ***!
  \****************************************************/
/*! exports provided: PlayersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersPage", function() { return PlayersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let PlayersPage = class PlayersPage {
    constructor(request, navCtrl) {
        this.request = request;
        this.navCtrl = navCtrl;
        this.players = [];
        this.playerModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Player', this.request);
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.playerModel.api_function('pageHomePlayers').subscribe(response => {
            if (response['status'] == 'success') {
                this.players = response['data'];
            }
            console.log(response);
        }, error => {
            console.error(error);
        });
    }
    playerSelect(player) {
        console.log('goTo', player);
        this.navCtrl.navigateForward(`player/profile/${player.id}`);
    }
};
PlayersPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
PlayersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-players',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./players.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/players/players.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./players.page.scss */ "./src/app/pages/home/players/players.page.scss")).default]
    })
], PlayersPage);



/***/ })

}]);
//# sourceMappingURL=players-players-module-es2015.js.map