(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-game-game-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game/game.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game/game.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGameGameGamePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Partido</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"game\" *ngIf=\"game\">\n    \n    \n    <app-game-list\n      [game] = \"game\">\n    </app-game-list>\n\n    <div class=\"ion-text-center\">\n      <ion-badge color=\"tertiary\">{{game.status}}</ion-badge>\n    </div>\n   \n\n    <ion-card *ngIf=\"game.location\">\n      <ion-card-header>\n        <ion-card-subtitle>Ubicación</ion-card-subtitle>\n        <ion-card-title>{{game.location}}</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n\n   \n   \n    <app-comments\n      [idRelation]=\"id\"\n      [nameRelationModel]=\"'Game'\"\n    ></app-comments>\n\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/game/game/game-routing.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/game/game/game-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: GamePageRoutingModule */

    /***/
    function srcAppPagesGameGameGameRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamePageRoutingModule", function () {
        return GamePageRoutingModule;
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


      var _game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./game.page */
      "./src/app/pages/game/game/game.page.ts");

      var routes = [{
        path: '',
        component: _game_page__WEBPACK_IMPORTED_MODULE_3__["GamePage"]
      }];

      var GamePageRoutingModule = function GamePageRoutingModule() {
        _classCallCheck(this, GamePageRoutingModule);
      };

      GamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GamePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/game/game/game.module.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/game/game/game.module.ts ***!
      \************************************************/

    /*! exports provided: GamePageModule */

    /***/
    function srcAppPagesGameGameGameModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamePageModule", function () {
        return GamePageModule;
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


      var _game_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./game-routing.module */
      "./src/app/pages/game/game/game-routing.module.ts");
      /* harmony import */


      var _game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./game.page */
      "./src/app/pages/game/game/game.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");

      var GamePageModule = function GamePageModule() {
        _classCallCheck(this, GamePageModule);
      };

      GamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _game_routing_module__WEBPACK_IMPORTED_MODULE_5__["GamePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_game_page__WEBPACK_IMPORTED_MODULE_6__["GamePage"]]
      })], GamePageModule);
      /***/
    },

    /***/
    "./src/app/pages/game/game/game.page.scss":
    /*!************************************************!*\
      !*** ./src/app/pages/game/game/game.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGameGameGamePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvZ2FtZS9nYW1lLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/game/game/game.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/game/game/game.page.ts ***!
      \**********************************************/

    /*! exports provided: GamePage */

    /***/
    function srcAppPagesGameGameGamePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamePage", function () {
        return GamePage;
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
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");

      var GamePage = /*#__PURE__*/function () {
        function GamePage(route, requesService, util) {
          _classCallCheck(this, GamePage);

          this.route = route;
          this.requesService = requesService;
          this.util = util;
          this.id = this.route.snapshot.paramMap.get('id');
          this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Game', requesService);
        }

        _createClass(GamePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.gameModel.api_functionModel(this.id, 'dataProfile').subscribe(function (data) {
              if (data['status'] == 'success') _this.game = data['data'];
              if (event) event.target.complete();
            });
          }
        }]);

        return GamePage;
      }();

      GamePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }];
      };

      GamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./game.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game/game.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./game.page.scss */
        "./src/app/pages/game/game/game.page.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ../../home/games/games.page.scss */
        "./src/app/pages/home/games/games.page.scss"))["default"]]
      })], GamePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-game-game-game-module-es5.js.map