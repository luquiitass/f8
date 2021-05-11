(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-game-list-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/list/list.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/list/list.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesGameListListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"admin_home\"></ion-back-button>    \n    </ion-buttons>\n    <ion-title>Partidos</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"openModal()\">\n        <ion-icon name=\"add-outline\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n      \n    \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-segment scrollable [(ngModel)]=\"tabSelected\" (ionChange)=\"selectDate($event)\" >\n              <ion-segment-button *ngFor=\"let tab of tabs;let i=index\" value=\"{{i}}\" id=\"sgm_{{i}}\" >\n                {{tab.date}}\n              </ion-segment-button>\n            </ion-segment>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-list-header *ngIf=\"games.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n\n   \n      <ion-item *ngFor=\"let item of games\" >\n\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"10\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"11\">\n                    {{item.team_l.name}}\n                  </ion-col>\n                  <ion-col size=\"1\">0</ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col>\n                    Vs\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col size=\"11\">\n                    {{item.team_v.name}}\n                  </ion-col>\n                  <ion-col size=\"1\">0</ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n\n\n            <ion-col size=\"2\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size-sm=\"4\" size-xs=\"12\">\n                    <a [routerLink]=\"['/admin/game/{item.id}']\">\n                      <ion-icon name=\"enter -outline\"></ion-icon>\n                    </a>\n                  </ion-col>\n                  <ion-col size-sm=\"4\" size-xs=\"12\">\n                    <ion-button (click)=\"showEdit(item)\">\n                      <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                  <ion-col size-sm=\"4\" size-xs=\"12\">\n                    <ion-button (click)=\"confirmDelete(item)\">\n                      <ion-icon name=\"trash-outline\"></ion-icon>\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n    </ion-list>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/game/list/list-routing.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/pages/game/list/list-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: ListPageRoutingModule */

    /***/
    function srcAppPagesGameListListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function () {
        return ListPageRoutingModule;
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


      var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list.page */
      "./src/app/pages/game/list/list.page.ts");

      var routes = [{
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
      }];

      var ListPageRoutingModule = function ListPageRoutingModule() {
        _classCallCheck(this, ListPageRoutingModule);
      };

      ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/game/list/list.module.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/game/list/list.module.ts ***!
      \************************************************/

    /*! exports provided: ListPageModule */

    /***/
    function srcAppPagesGameListListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPageModule", function () {
        return ListPageModule;
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


      var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-routing.module */
      "./src/app/pages/game/list/list-routing.module.ts");
      /* harmony import */


      var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list.page */
      "./src/app/pages/game/list/list.page.ts");

      var ListPageModule = function ListPageModule() {
        _classCallCheck(this, ListPageModule);
      };

      ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
      })], ListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/game/list/list.page.scss":
    /*!************************************************!*\
      !*** ./src/app/pages/game/list/list.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesGameListListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".status {\n  width: 100%;\n}\n\n.team {\n  display: inline;\n  width: 100%;\n}\n\n.name-team {\n  background-color: transparent;\n}\n\n.goal-team {\n  background-color: transparent;\n}\n\n.names {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FtZS9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1c3tcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRlYW17XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmFtZS10ZWFte1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZ29hbC10ZWFte1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmFtZXN7XG4gICAgd2lkdGg6IDgwJTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/game/list/list.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/game/list/list.page.ts ***!
      \**********************************************/

    /*! exports provided: ListPage */

    /***/
    function srcAppPagesGameListListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPage", function () {
        return ListPage;
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


      var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _pages_game_game_form_game_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../pages/game/game-form/game-form.page */
      "./src/app/pages/game/game-form/game-form.page.ts");
      /* harmony import */


      var _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");

      var ListPage = /*#__PURE__*/function () {
        function ListPage(request, dialogService, modalController, dialog, util) {
          _classCallCheck(this, ListPage);

          this.request = request;
          this.dialogService = dialogService;
          this.modalController = modalController;
          this.dialog = dialog;
          this.util = util;
          this.games = [];
          this.tabs = [];
          this.gameService = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Game', request);
        }

        _createClass(ListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //    this.gameService.setModel('Game');
            //this.gameService.api_all();
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.gameService.api_function('pageAdminAll').subscribe(function (response) {
              _this.tabs = response['data']['dates'];

              _this.selectTab();

              console.log(response);
              if (event) event.target.complete();
            }, function (error) {
              if (event) event.target.completed();
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _pages_game_game_form_game_form_page__WEBPACK_IMPORTED_MODULE_4__["GameFormPage"],
                        componentProps: {
                          date: this.tabs && this.tabs[this.tabSelected] ? this.tabs[this.tabSelected].date : ''
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        var game = data.data['game'];

                        _this2.gameService.listAddLast(game);
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
        }, {
          key: "showEdit",
          value: function showEdit(game) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _pages_game_game_form_game_form_page__WEBPACK_IMPORTED_MODULE_4__["GameFormPage"],
                        componentProps: {
                          id: game.id
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        var game = data.data['game'];

                        _this3.gameService.listUpdate(game.id, game);
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete(game) {
            var _this4 = this;

            this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este game', function (e) {
              _this4["delete"](game);
            });
          }
        }, {
          key: "delete",
          value: function _delete(game) {
            var _this5 = this;

            this.gameService.api_delete(game.id).subscribe(function (data) {
              console.log(data);

              if (data['status'] == 'success') {
                _this5.dialog.showToast('Game Eliminado', null, 'success');

                _this5.gameService.listDelete(game.id);
              }
            });
          }
        }, {
          key: "showItem",
          value: function showItem(item) {
            console.log(item);
          }
        }, {
          key: "selectDate",
          value: function selectDate(event) {
            var _this6 = this;

            var index = parseInt(event.detail.value);
            var tab = this.tabs[index];

            if (tab['results']) {
              this.games = tab['results'];
              this.focusSegment();
              return;
            }

            this.gameService.api_function('adminByDate', {
              'date': tab['date']
            }).subscribe(function (response) {
              if (response['status'] == 'success') {
                _this6.tabs[index]['results'] = response['data'];
                _this6.games = _this6.tabs[index]['results'];

                _this6.focusSegment();
              }

              console.log(response);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "focusSegment",
          value: function focusSegment() {
            var segmentId = 'sgm_' + this.tabSelected;
            console.log('select segment : ', segmentId);
            document.getElementById(segmentId).scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center'
            });
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }, {
          key: "selectTab",
          value: function selectTab() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var now, tabSelect;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.tabs.length > 0)) {
                        _context3.next = 9;
                        break;
                      }

                      now = moment__WEBPACK_IMPORTED_MODULE_7__();
                      tabSelect = 0;
                      this.tabs.forEach(function (tab, i) {
                        var date_tab = moment__WEBPACK_IMPORTED_MODULE_7__(tab.date);

                        if (date_tab.isAfter(now) && tabSelect == 0) {
                          tabSelect = i;
                        }
                      });
                      this.selectDate({
                        detail: {
                          value: tabSelect
                        }
                      });
                      this.tabSelected = tabSelect;
                      _context3.next = 8;
                      return this.util.delay(1500);

                    case 8:
                      this.focusSegment();

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ListPage;
      }();

      ListPage.ctorParameters = function () {
        return [{
          type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }];
      };

      ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/list/list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./list.page.scss */
        "./src/app/pages/game/list/list.page.scss"))["default"]]
      })], ListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-game-list-list-module-es5.js.map