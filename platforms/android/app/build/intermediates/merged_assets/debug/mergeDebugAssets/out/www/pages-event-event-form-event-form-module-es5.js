(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-event-event-form-event-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesEventEventFormEventFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"eventModel.errorsForm.clear()\" *ngIf=\"dataEvent\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Tipo de Evento</ion-label>\n      <ion-select [(ngModel)]=\"event.type_event_id\" name=\"type_event_id\">\n        <ion-select-option [value]=\"type_event.id\" *ngFor=\"let type_event of dataEvent.types_events\">{{ type_event.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('type_event_id') }}</div>\n    </ion-item>\n    \n    <ion-item *ngIf=\"!team_admin\">\n      <ion-label position=\"floating\">Equipo</ion-label>\n      <ion-select [(ngModel)]=\"event.team_id\" name=\"team_id\">\n        <ion-select-option [value]=\"team.id\" *ngFor=\"let team of dataEvent.teams\">{{ team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('team_id') }}</div>\n    </ion-item>\n \n\n    <ion-item>\n      <ion-label position=\"floating\">Jugador</ion-label> \n       <ion-select [(ngModel)]=\"event.player_id\" name=\"player_id\">\n        <ion-select-option [value]=\"player.id\" *ngFor=\"let player of getPlayers()\">{{ player.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('player_id') }}</div>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Tiempo</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"event.time\" name=\"time\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('time') }}</div> \n\n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/event/event-form/event-form-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/event/event-form/event-form-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: EventFormPageRoutingModule */

    /***/
    function srcAppPagesEventEventFormEventFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventFormPageRoutingModule", function () {
        return EventFormPageRoutingModule;
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


      var _event_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./event-form.page */
      "./src/app/pages/event/event-form/event-form.page.ts");

      var routes = [{
        path: '',
        component: _event_form_page__WEBPACK_IMPORTED_MODULE_3__["EventFormPage"]
      }];

      var EventFormPageRoutingModule = function EventFormPageRoutingModule() {
        _classCallCheck(this, EventFormPageRoutingModule);
      };

      EventFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/event/event-form/event-form.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/event/event-form/event-form.module.ts ***!
      \*************************************************************/

    /*! exports provided: EventFormPageModule */

    /***/
    function srcAppPagesEventEventFormEventFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventFormPageModule", function () {
        return EventFormPageModule;
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


      var _event_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./event-form-routing.module */
      "./src/app/pages/event/event-form/event-form-routing.module.ts");
      /* harmony import */


      var _event_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./event-form.page */
      "./src/app/pages/event/event-form/event-form.page.ts");

      var EventFormPageModule = function EventFormPageModule() {
        _classCallCheck(this, EventFormPageModule);
      };

      EventFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _event_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventFormPageRoutingModule"]],
        declarations: [_event_form_page__WEBPACK_IMPORTED_MODULE_6__["EventFormPage"]]
      })], EventFormPageModule);
      /***/
    },

    /***/
    "./src/app/pages/event/event-form/event-form.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/event/event-form/event-form.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesEventEventFormEventFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LWZvcm0vZXZlbnQtZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/event/event-form/event-form.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/event/event-form/event-form.page.ts ***!
      \***********************************************************/

    /*! exports provided: EventFormPage */

    /***/
    function srcAppPagesEventEventFormEventFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventFormPage", function () {
        return EventFormPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");

      var EventFormPage = /*#__PURE__*/function () {
        function EventFormPage(navParams, requestService, dialogService, viewCtrl) {
          _classCallCheck(this, EventFormPage);

          this.navParams = navParams;
          this.requestService = requestService;
          this.dialogService = dialogService;
          this.viewCtrl = viewCtrl;

          this.myDateFilter = function (d) {
            var day = d.getDay(); // Prevent Saturday and Sunday from being selected.

            return day == 6;
          };

          this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', requestService);
          this.eventModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Event', requestService);
          this.game_id = navParams.get('game_id');
          this.id = navParams.get('id');
          this.team_admin = navParams.get('team_admin');
        }

        _createClass(EventFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.init();

                    case 2:
                      this.loadEvent();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadEvent",
          value: function loadEvent() {
            if (this.id) {} else {
              this.event = {
                game_id: this.game_id,
                type_event_id: '',
                player_id: '',
                team_id: this.team_admin ? this.team_admin.id : '',
                time: ''
              };
            }
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.eventModel.api_function('dataEventCreate', {
                        game_id: this.game_id
                      }).subscribe(function (data) {
                        if (data['status'] == 'success') {
                          _this.dataEvent = data['data'];
                          _this.types_events = _this.dataEvent['types_events'];
                        }

                        console.log('ty', _this.types_events);
                        console.log(_this.dataEvent);
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getPlayers",
          value: function getPlayers() {
            var id = this.event.team_id;
            if (this.team_admin) id = this.event.team_id;

            if (id) {
              var team = this.dataEvent.teams.find(function (t) {
                return t.id === id;
              });
              if (team) return team.players;
            }

            return [];
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            if (this.event.id) {
              this.eventModel.api_update(this.event).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this2.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  console.log(data);

                  _this2.dismiss(data['Event']);
                }
              });
            } else {
              this.eventModel.api_create(this.event).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this2.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this2.dismiss(data['Event']);
                }
              });
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss(event) {
            this.viewCtrl.dismiss({
              event: event
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "print",
          value: function print() {
            console.log(this.event);
          }
        }]);

        return EventFormPage;
      }();

      EventFormPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      EventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./event-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./event-form.page.scss */
        "./src/app/pages/event/event-form/event-form.page.scss"))["default"]]
      })], EventFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-event-event-form-event-form-module-es5.js.map