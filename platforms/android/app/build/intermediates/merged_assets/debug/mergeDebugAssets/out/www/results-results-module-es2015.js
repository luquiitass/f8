(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["results-results-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/results/results.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/results/results.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Resultados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!firstLoad\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n      <ion-refresher-content\n      refreshingText=\"Cargando...\"\n      ></ion-refresher-content>\n    </ion-refresher>\n  \n    \n  \n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-segment scrollable [(ngModel)]=\"tabSelected\" (ionChange)=\"selectDate($event)\" >\n              <ion-segment-button *ngFor=\"let tab of tabs;let i=index\" value=\"{{i}}\" id=\"sgm_r_{{i}}\" >\n                {{formatDate(tab.date)}}\n              </ion-segment-button>\n            </ion-segment>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <ion-list-header *ngIf=\"list.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n\n      <app-result-item\n        *ngFor=\"let game of list\"\n        [game] = \"game\"\n        routerLink=\"/results/profile/{{game.id}}\" \n        routerDirection=\"forward\"\n      ></app-result-item>\n      \n        \n\n      </ion-list>\n  \n\n  </div>\n\n\n\n  <div *ngIf=\"firstLoad\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n        <ion-col>  <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text> </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-card *ngFor=\"let i of listSkeleton\">\n      <div class=\"ion-padding custom-skeleton\">\n        <ion-skeleton-text animated style=\"width: 100% ; height: 30px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100% ; height: 30px;margin-top: 15px;\"></ion-skeleton-text>\n      </div>\n    </ion-card>\n  </div>\n\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/results/results-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/results/results-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ResultsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageRoutingModule", function() { return ResultsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _results_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results.page */ "./src/app/pages/home/results/results.page.ts");




const routes = [
    {
        path: '',
        component: _results_page__WEBPACK_IMPORTED_MODULE_3__["ResultsPage"]
    }
];
let ResultsPageRoutingModule = class ResultsPageRoutingModule {
};
ResultsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResultsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/results/results.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/home/results/results.module.ts ***!
  \******************************************************/
/*! exports provided: ResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageModule", function() { return ResultsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _results_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results-routing.module */ "./src/app/pages/home/results/results-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _results_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./results.page */ "./src/app/pages/home/results/results.page.ts");








let ResultsPageModule = class ResultsPageModule {
};
ResultsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _results_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultsPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_results_page__WEBPACK_IMPORTED_MODULE_7__["ResultsPage"]]
    })
], ResultsPageModule);



/***/ }),

/***/ "./src/app/pages/home/results/results.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/home/results/results.page.ts ***!
  \****************************************************/
/*! exports provided: ResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPage", function() { return ResultsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");





let ResultsPage = class ResultsPage {
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
            /*this.modelGame.api_function('results').subscribe(data => {
              if(data['status'] = 'success'){
                this.list = data['data'];
                if(event)
                  event.target.complete();
              }
            })
        */
            //await this.delay(5000);
            this.modelGame.api_function('pageHomeResults').subscribe(response => {
                if (response['status'] == 'success') {
                    this.tabs = response['data']['dates'];
                    this.selectLast();
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
    selectLast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.tabs.length > 0) {
                let tab = this.tabs.slice(-1)[0];
                this.list = tab['results'];
                this.tabSelected = this.tabs.length - 1;
                yield this.delay(1500);
                this.focusSegment();
                //this.selectDate(tab['date']);
            }
        });
    }
    selectDate(event) {
        let index = parseInt(event.detail.value);
        let tab = this.tabs[index];
        if (tab['results']) {
            this.list = tab['results'];
            this.focusSegment();
            return;
        }
        this.modelGame.api_function('resultsByDate', { 'date': tab['date'] }).subscribe(response => {
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
        let segmentId = 'sgm_r_' + this.tabSelected;
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
        return this.util.setFormatMoment(val, 'DD MMMM YYYY');
    }
};
ResultsPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
ResultsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./results.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/results/results.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./results.page.scss */ "./src/app/pages/home/results/results.page.scss")).default]
    })
], ResultsPage);



/***/ })

}]);
//# sourceMappingURL=results-results-module-es2015.js.map