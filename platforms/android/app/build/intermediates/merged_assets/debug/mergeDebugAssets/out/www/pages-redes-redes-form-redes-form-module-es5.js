(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-redes-redes-form-redes-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRedesRedesFormRedesFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Red Social</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"redModel.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\">Red</ion-label>\n      <ion-select [(ngModel)]=\"red.name\" name=\"position_id\">\n        <ion-select-option [value]=\"red\" *ngFor=\"let red of redes\">{{ red }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ redModel.errorsForm.get('position_id') }}</div>\n\n    </ion-item>\n  \n\n    <ion-item>\n      <ion-label position=\"floating\" >Url</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"red.url\" name=\"url\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ redModel.errorsForm.get('url') }}</div>\n\n\n    \n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/redes/redes-form/redes-form-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/redes/redes-form/redes-form-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: RedesFormPageRoutingModule */

    /***/
    function srcAppPagesRedesRedesFormRedesFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedesFormPageRoutingModule", function () {
        return RedesFormPageRoutingModule;
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


      var _redes_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redes-form.page */
      "./src/app/pages/redes/redes-form/redes-form.page.ts");

      var routes = [{
        path: '',
        component: _redes_form_page__WEBPACK_IMPORTED_MODULE_3__["RedesFormPage"]
      }];

      var RedesFormPageRoutingModule = function RedesFormPageRoutingModule() {
        _classCallCheck(this, RedesFormPageRoutingModule);
      };

      RedesFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedesFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/redes/redes-form/redes-form.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/redes/redes-form/redes-form.module.ts ***!
      \*************************************************************/

    /*! exports provided: RedesFormPageModule */

    /***/
    function srcAppPagesRedesRedesFormRedesFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedesFormPageModule", function () {
        return RedesFormPageModule;
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


      var _redes_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./redes-form-routing.module */
      "./src/app/pages/redes/redes-form/redes-form-routing.module.ts");
      /* harmony import */


      var _redes_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redes-form.page */
      "./src/app/pages/redes/redes-form/redes-form.page.ts");

      var RedesFormPageModule = function RedesFormPageModule() {
        _classCallCheck(this, RedesFormPageModule);
      };

      RedesFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _redes_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedesFormPageRoutingModule"]],
        declarations: [_redes_form_page__WEBPACK_IMPORTED_MODULE_6__["RedesFormPage"]]
      })], RedesFormPageModule);
      /***/
    },

    /***/
    "./src/app/pages/redes/redes-form/redes-form.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/redes/redes-form/redes-form.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRedesRedesFormRedesFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGVzL3JlZGVzLWZvcm0vcmVkZXMtZm9ybS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/redes/redes-form/redes-form.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/redes/redes-form/redes-form.page.ts ***!
      \***********************************************************/

    /*! exports provided: RedesFormPage */

    /***/
    function srcAppPagesRedesRedesFormRedesFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedesFormPage", function () {
        return RedesFormPage;
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


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");

      var RedesFormPage = /*#__PURE__*/function () {
        function RedesFormPage(request, dialogService, viewCtrl, navParams) {
          _classCallCheck(this, RedesFormPage);

          this.request = request;
          this.dialogService = dialogService;
          this.viewCtrl = viewCtrl;
          this.navParams = navParams;
          this.redes = ['Facebook', 'Instagram', 'WhatsApp', 'Twitter'];
          this.redModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Red', request);
          this.id = navParams.get('id');
          this.idModel = navParams.get('idModel');
          this.nameModel = navParams.get('nameModel');
        }

        _createClass(RedesFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            this.red = {
              name: '',
              url: '',
              name_model: this.nameModel,
              model_id: this.idModel
            };

            if (this.id) {
              this.redModel.api_find(this.id).subscribe(function (response) {
                _this.red = response['Red'];
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            this.saveRed();
          }
        }, {
          key: "dismiss",
          value: function dismiss(red) {
            this.viewCtrl.dismiss({
              red: red
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.viewCtrl.dismiss();
          }
        }, {
          key: "saveRed",
          value: function saveRed() {
            var _this2 = this;

            if (this.red.id) {
              this.redModel.api_update(this.red).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this2.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this2.dismiss(data['Red']);
                }
              });
            } else {
              this.redModel.api_create(this.red).subscribe(function (data) {
                var _a;

                if (data['status'] == 'success') {
                  _this2.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');

                  _this2.dismiss(data['Red']);
                }
              });
            }
          }
        }]);

        return RedesFormPage;
      }();

      RedesFormPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      RedesFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redes-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./redes-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./redes-form.page.scss */
        "./src/app/pages/redes/redes-form/redes-form.page.scss"))["default"]]
      })], RedesFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-redes-redes-form-redes-form-module-es5.js.map