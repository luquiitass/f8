(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-admin-game-admin-game-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/admin-game/admin-game.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/admin-game/admin-game.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGameAdminGameAdminGamePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>admin-game</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"game\">\n\n  <app-event-list [game_id]=\"id\"></app-event-list> \n\n  <pre>{{ game | json }}</pre>\n\n  <ion-button expand=\"block\" (click)=\"addEvent()\"> Añadir Eventos</ion-button>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/game/admin-game/admin-game-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/game/admin-game/admin-game-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: AdminGamePageRoutingModule */

    /***/
    function srcAppPagesGameAdminGameAdminGameRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGamePageRoutingModule", function () {
        return AdminGamePageRoutingModule;
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


      var _admin_game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-game.page */
      "./src/app/pages/game/admin-game/admin-game.page.ts");

      var routes = [{
        path: '',
        component: _admin_game_page__WEBPACK_IMPORTED_MODULE_3__["AdminGamePage"]
      }];

      var AdminGamePageRoutingModule = function AdminGamePageRoutingModule() {
        _classCallCheck(this, AdminGamePageRoutingModule);
      };

      AdminGamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminGamePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/game/admin-game/admin-game.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/game/admin-game/admin-game.module.ts ***!
      \************************************************************/

    /*! exports provided: AdminGamePageModule */

    /***/
    function srcAppPagesGameAdminGameAdminGameModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGamePageModule", function () {
        return AdminGamePageModule;
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


      var _admin_game_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-game-routing.module */
      "./src/app/pages/game/admin-game/admin-game-routing.module.ts");
      /* harmony import */


      var _admin_game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-game.page */
      "./src/app/pages/game/admin-game/admin-game.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");

      var AdminGamePageModule = function AdminGamePageModule() {
        _classCallCheck(this, AdminGamePageModule);
      };

      AdminGamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_game_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminGamePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_admin_game_page__WEBPACK_IMPORTED_MODULE_6__["AdminGamePage"]]
      })], AdminGamePageModule);
      /***/
    },

    /***/
    "./src/app/pages/game/admin-game/admin-game.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/pages/game/admin-game/admin-game.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGameAdminGameAdminGamePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvYWRtaW4tZ2FtZS9hZG1pbi1nYW1lLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/game/admin-game/admin-game.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/game/admin-game/admin-game.page.ts ***!
      \**********************************************************/

    /*! exports provided: AdminGamePage */

    /***/
    function srcAppPagesGameAdminGameAdminGamePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGamePage", function () {
        return AdminGamePage;
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


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _event_event_form_event_form_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../event/event-form/event-form.page */
      "./src/app/pages/event/event-form/event-form.page.ts");

      var AdminGamePage = /*#__PURE__*/function () {
        function AdminGamePage(route, requesService, util, modalController) {
          _classCallCheck(this, AdminGamePage);

          this.route = route;
          this.requesService = requesService;
          this.util = util;
          this.modalController = modalController;
          this.game = [];
          this.id = this.route.snapshot.paramMap.get('id');
          this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', requesService);
          console.log('id', this.id);
        }

        _createClass(AdminGamePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.gameModel.api_find(this.id).subscribe(function (data) {
              if (data['status'] == 'success') _this.game = data['Game'];
              if (event) event.target.complete();
            });
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _event_event_form_event_form_page__WEBPACK_IMPORTED_MODULE_7__["EventFormPage"],
                        componentProps: {
                          game_id: this.game.id
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        var event = data.data['event'];
                        console.log(event);

                        _this2.game['events'].push(event);
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AdminGamePage;
      }();

      AdminGamePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      AdminGamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-game.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/admin-game/admin-game.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-game.page.scss */
        "./src/app/pages/game/admin-game/admin-game.page.scss"))["default"]]
      })], AdminGamePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-game-admin-game-admin-game-module-es5.js.map