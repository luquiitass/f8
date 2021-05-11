(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-game-form-game-form-module"], {
    /***/
    "./src/app/pages/game/game-form/game-form-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/game/game-form/game-form-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: GameFormPageRoutingModule */

    /***/
    function srcAppPagesGameGameFormGameFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameFormPageRoutingModule", function () {
        return GameFormPageRoutingModule;
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


      var _game_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./game-form.page */
      "./src/app/pages/game/game-form/game-form.page.ts");

      var routes = [{
        path: '',
        component: _game_form_page__WEBPACK_IMPORTED_MODULE_3__["GameFormPage"]
      }];

      var GameFormPageRoutingModule = function GameFormPageRoutingModule() {
        _classCallCheck(this, GameFormPageRoutingModule);
      };

      GameFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GameFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/game/game-form/game-form.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/game/game-form/game-form.module.ts ***!
      \**********************************************************/

    /*! exports provided: GameFormPageModule */

    /***/
    function srcAppPagesGameGameFormGameFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameFormPageModule", function () {
        return GameFormPageModule;
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


      var _game_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./game-form-routing.module */
      "./src/app/pages/game/game-form/game-form-routing.module.ts");
      /* harmony import */


      var _game_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./game-form.page */
      "./src/app/pages/game/game-form/game-form.page.ts");

      var GameFormPageModule = function GameFormPageModule() {
        _classCallCheck(this, GameFormPageModule);
      };

      GameFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _game_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["GameFormPageRoutingModule"]],
        declarations: [_game_form_page__WEBPACK_IMPORTED_MODULE_6__["GameFormPage"]]
      })], GameFormPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-game-game-form-game-form-module-es5.js.map