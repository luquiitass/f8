(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-util-list-redirect-list-redirect-module"], {
    /***/
    "./src/app/pages/util/list-redirect/list-redirect-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/util/list-redirect/list-redirect-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ListRedirectPageRoutingModule */

    /***/
    function srcAppPagesUtilListRedirectListRedirectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListRedirectPageRoutingModule", function () {
        return ListRedirectPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _list_redirect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-redirect.page */
      "./src/app/pages/util/list-redirect/list-redirect.page.ts");

      var routes = [{
        path: '',
        component: _list_redirect_page__WEBPACK_IMPORTED_MODULE_3__["ListRedirectPage"]
      }];

      var ListRedirectPageRoutingModule = function ListRedirectPageRoutingModule() {
        _classCallCheck(this, ListRedirectPageRoutingModule);
      };

      ListRedirectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListRedirectPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/util/list-redirect/list-redirect.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/util/list-redirect/list-redirect.module.ts ***!
      \******************************************************************/

    /*! exports provided: ListRedirectPageModule */

    /***/
    function srcAppPagesUtilListRedirectListRedirectModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListRedirectPageModule", function () {
        return ListRedirectPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _list_redirect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-redirect-routing.module */
      "./src/app/pages/util/list-redirect/list-redirect-routing.module.ts");
      /* harmony import */


      var _list_redirect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-redirect.page */
      "./src/app/pages/util/list-redirect/list-redirect.page.ts");

      var ListRedirectPageModule = function ListRedirectPageModule() {
        _classCallCheck(this, ListRedirectPageModule);
      };

      ListRedirectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_redirect_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListRedirectPageRoutingModule"]],
        declarations: [_list_redirect_page__WEBPACK_IMPORTED_MODULE_6__["ListRedirectPage"]]
      })], ListRedirectPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-util-list-redirect-list-redirect-module-es5.js.map