(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-player-search-player-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-search/player-search.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-search/player-search.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n\n  <app-search></app-search>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/player/player-search/player-search-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/player/player-search/player-search-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: PlayerSearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchPageRoutingModule", function() { return PlayerSearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _player_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-search.page */ "./src/app/pages/player/player-search/player-search.page.ts");




const routes = [
    {
        path: '',
        component: _player_search_page__WEBPACK_IMPORTED_MODULE_3__["PlayerSearchPage"]
    }
];
let PlayerSearchPageRoutingModule = class PlayerSearchPageRoutingModule {
};
PlayerSearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlayerSearchPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/player/player-search/player-search.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/player/player-search/player-search.module.ts ***!
  \********************************************************************/
/*! exports provided: PlayerSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchPageModule", function() { return PlayerSearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _player_search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-search-routing.module */ "./src/app/pages/player/player-search/player-search-routing.module.ts");
/* harmony import */ var _player_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-search.page */ "./src/app/pages/player/player-search/player-search.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








let PlayerSearchPageModule = class PlayerSearchPageModule {
};
PlayerSearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _player_search_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayerSearchPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_player_search_page__WEBPACK_IMPORTED_MODULE_6__["PlayerSearchPage"]]
    })
], PlayerSearchPageModule);



/***/ }),

/***/ "./src/app/pages/player/player-search/player-search.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/player/player-search/player-search.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wbGF5ZXItc2VhcmNoL3BsYXllci1zZWFyY2gucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/player/player-search/player-search.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/player/player-search/player-search.page.ts ***!
  \******************************************************************/
/*! exports provided: PlayerSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchPage", function() { return PlayerSearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PlayerSearchPage = class PlayerSearchPage {
    constructor() { }
    ngOnInit() {
    }
};
PlayerSearchPage.ctorParameters = () => [];
PlayerSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player-search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-search/player-search.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player-search.page.scss */ "./src/app/pages/player/player-search/player-search.page.scss")).default]
    })
], PlayerSearchPage);



/***/ })

}]);
//# sourceMappingURL=pages-player-player-search-player-search-module-es2015.js.map