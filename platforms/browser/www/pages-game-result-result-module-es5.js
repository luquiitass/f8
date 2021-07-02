(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-result-result-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/result/result.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/result/result.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGameResultResultPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n   </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <app-result-item\n    *ngIf=\"game\"\n    [game]=\"game\"\n  ></app-result-item>\n\n\n  <app-event-list [game_id]=\"id\" ></app-event-list> \n\n  <app-comments\n    [idRelation]=\"id\"\n    [nameRelationModel]=\"'Game'\"\n  ></app-comments>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/game/result/result-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/game/result/result-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: ResultPageRoutingModule */

    /***/
    function srcAppPagesGameResultResultRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultPageRoutingModule", function () {
        return ResultPageRoutingModule;
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


      var _result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./result.page */
      "./src/app/pages/game/result/result.page.ts");

      var routes = [{
        path: '',
        component: _result_page__WEBPACK_IMPORTED_MODULE_3__["ResultPage"]
      }];

      var ResultPageRoutingModule = function ResultPageRoutingModule() {
        _classCallCheck(this, ResultPageRoutingModule);
      };

      ResultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResultPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/game/result/result.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/game/result/result.module.ts ***!
      \****************************************************/

    /*! exports provided: ResultPageModule */

    /***/
    function srcAppPagesGameResultResultModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultPageModule", function () {
        return ResultPageModule;
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


      var _result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./result-routing.module */
      "./src/app/pages/game/result/result-routing.module.ts");
      /* harmony import */


      var _result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./result.page */
      "./src/app/pages/game/result/result.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");

      var ResultPageModule = function ResultPageModule() {
        _classCallCheck(this, ResultPageModule);
      };

      ResultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _result_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_result_page__WEBPACK_IMPORTED_MODULE_6__["ResultPage"]]
      })], ResultPageModule);
      /***/
    },

    /***/
    "./src/app/pages/game/result/result.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/pages/game/result/result.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGameResultResultPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvcmVzdWx0L3Jlc3VsdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/game/result/result.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/game/result/result.page.ts ***!
      \**************************************************/

    /*! exports provided: ResultPage */

    /***/
    function srcAppPagesGameResultResultPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultPage", function () {
        return ResultPage;
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


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");

      var ResultPage = /*#__PURE__*/function () {
        function ResultPage(route, requesService) {
          _classCallCheck(this, ResultPage);

          this.route = route;
          this.requesService = requesService;
          this.id = this.route.snapshot.paramMap.get('id');
          this.resultModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Game', requesService);
        }

        _createClass(ResultPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.resultModel.api_functionModel(this.id, 'dataProfile').subscribe(function (data) {
              if (data['status'] == 'success') _this.game = data['data'];
              if (event) event.target.complete();
            });
          }
        }]);

        return ResultPage;
      }();

      ResultPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }];
      };

      ResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./result.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/result/result.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./result.page.scss */
        "./src/app/pages/game/result/result.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ../../home/results/results.page.scss */
        "./src/app/pages/home/results/results.page.scss"))["default"]]
      })], ResultPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-game-result-result-module-es5.js.map