(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["games-games-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/games/games.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/games/games.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Partidos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!firstLoad\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n    <ion-list>\n  \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-segment scrollable [(ngModel)]=\"tabSelected\" (ionChange)=\"selectDate($event)\" >\n              <ion-segment-button *ngFor=\"let tab of tabs;let i=index\" value=\"{{i}}\" id=\"sgm_{{i}}\" >\n                {{formatDate(tab.date)}}\n              </ion-segment-button>\n            </ion-segment>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-list-header *ngIf=\"list.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n\n      <app-game-list \n        *ngFor=\"let game of list\"\n        [game]=\"game\"  \n        routerLink=\"/games/profile/{{game.id}}\" \n        routerDirection=\"forward\"\n      >\n      </app-game-list>\n  \n      <!-- <ion-item *ngFor=\"let game of list\" routerLink=\"/games/profile/{{game.id}}\" routerDirection=\"forward\" >\n        <div class=\"game\">\n          <div class=\"team-list contenedor\">\n            <div class=\"team\">\n              <span class=\"team-name\">{{game.team_l.name}}</span>\n              <ion-thumbnail slot=\"end\">\n                <ion-img \n                  class=\"img-team\"\n                  [src]=\"game.team_l.shield ? game.team_l.shield.urlComplete : 'assets/images/shield_team.png'\">\n                </ion-img>\n              </ion-thumbnail>\n            </div>\n  \n            <div class=\"vs\">vs</div>\n  \n            <div class=\"team\">\n              <span class=\"team-name\">{{game.team_v.name}}</span>\n              <ion-thumbnail slot=\"start\">\n                <ion-img \n                  class=\"img-team\"\n                  [src]=\"game.team_v.shield ? game.team_v.shield.urlComplete : 'assets/images/shield_team.png'\"\n                  >\n                </ion-img>\n              </ion-thumbnail>\n            </div>\n          </div>\n          <div class=\"date \">\n            <span>{{ util.formatHours(game.time) }}</span>\n          </div>\n        </div>\n      </ion-item> -->\n    </ion-list>\n  </div>\n  \n  <div *ngIf=\"firstLoad\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-card *ngFor=\"let i of listSkeleton\">\n      <div class=\"ion-padding custom-skeleton\">\n        <div class=\"game\">\n          <div class=\"team-list contenedor\">\n            <div class=\"team\">\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              <ion-avatar slot=\"start\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-avatar>\n            </div>\n  \n            <div class=\"vs\">\n              <ion-skeleton-text animated style=\"width: 20px\"></ion-skeleton-text>\n            </div>\n  \n            <div class=\"team\">\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              <ion-avatar slot=\"start\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </ion-avatar>\n            </div>\n          </div>\n          <div class=\"date ion-text-center\"  style=\"width: 100%\">\n            <ion-skeleton-text animated style=\"width: 80px;margin: auto;\"></ion-skeleton-text>\n          </div>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/games/games-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/home/games/games-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: GamesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPageRoutingModule", function() { return GamesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games.page */ "./src/app/pages/home/games/games.page.ts");




const routes = [
    {
        path: '',
        component: _games_page__WEBPACK_IMPORTED_MODULE_3__["GamesPage"]
    }
];
let GamesPageRoutingModule = class GamesPageRoutingModule {
};
GamesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GamesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/games/games.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/home/games/games.module.ts ***!
  \**************************************************/
/*! exports provided: GamesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPageModule", function() { return GamesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games-routing.module */ "./src/app/pages/home/games/games-routing.module.ts");
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games.page */ "./src/app/pages/home/games/games.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








let GamesPageModule = class GamesPageModule {
};
GamesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _games_routing_module__WEBPACK_IMPORTED_MODULE_5__["GamesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_games_page__WEBPACK_IMPORTED_MODULE_6__["GamesPage"]]
    })
], GamesPageModule);



/***/ }),

/***/ "./src/app/pages/home/games/games.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home/games/games.page.ts ***!
  \************************************************/
/*! exports provided: GamesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPage", function() { return GamesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let GamesPage = class GamesPage {
    constructor(request, util) {
        this.request = request;
        this.util = util;
        this.list = [];
        this.tabs = [];
        this.listSkeleton = new Array(3);
        this.firstLoad = true;
        this.modelGame = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', request);
    }
    ngOnInit() {
        this.init();
    }
    init(event = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*this.modelGame.api_function('games').subscribe(data => {
              if(data['status'] = 'success'){
                this.list = data['data'];
                if(event)
                  event.target.complete();
              }
            })
            */
            this.modelGame.api_function('pageHomeGames').subscribe(response => {
                if (response['status'] == 'success') {
                    this.tabs = response['data']['dates'];
                    this.selectFirst();
                }
                if (event)
                    event.target.complete();
                console.log(response);
                this.firstLoad = false;
            }, error => {
                if (event)
                    event.target.complete();
                console.error(error);
                this.firstLoad = false;
            });
        });
    }
    selectFirst() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.tabs.length > 0) {
                let tab = this.tabs[0];
                this.list = tab['results'];
                this.tabSelected = 0;
                yield this.delay(1500);
                this.focusSegment();
                //this.selectDate(tab['date']);
            }
        });
    }
    selectDate(event) {
        let index = parseInt(event.detail.value);
        let tab = this.tabs[index];
        if (tab && tab['results']) {
            this.list = tab['results'];
            this.focusSegment();
            return;
        }
        this.modelGame.api_function('gamesByDate', { 'date': tab['date'] }).subscribe(response => {
            if (response['status'] == 'success') {
                this.tabs[index]['results'] = response['data'];
                this.list = this.tabs[index]['results'];
                this.focusSegment();
            }
            console.log(response);
        }, error => {
            console.error(error);
        });
    }
    focusSegment() {
        let segmentId = 'sgm_' + this.tabSelected;
        console.log('select segment : ', segmentId);
        document.getElementById(segmentId).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    formatDate(val) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(val).locale('es').format('DD MMMM YYYY');
    }
};
GamesPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
GamesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-games',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./games.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/games/games.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./games.page.scss */ "./src/app/pages/home/games/games.page.scss")).default]
    })
], GamesPage);



/***/ })

}]);
//# sourceMappingURL=games-games-module-es2015.js.map