(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-my-profile-my-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/my-profile/my-profile.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/my-profile/my-profile.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesUserMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title> {{ user ? user.last_name +' '+user.first_name : 'My Perfil'}}</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"showEdit()\">\n        <ion-icon name=\"create\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngIf=\"user\">\n    <ion-card-content>\n\n      <ion-img-viewer \n        title=\"Foto de Perfil\" \n        [text]=\"user.last_name +' '+ user.first_name\"\n        scheme=\"dark\" \n        [src]=\"getPhoto()\">\n      </ion-img-viewer>\n\n    </ion-card-content>\n    <ion-card-header>\n      <ion-card-title>\n        {{user.last_name}} {{user.first_name}}\n      </ion-card-title>\n\n      <ion-card-subtitle>{{user.email}}</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n\n  <ion-card *ngIf=\"user && user.teams && user.teams.lenght\">\n    <ion-card-header>\n      <ion-card-title>Administrar Equipos</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let team of user.teams\" routerLink=\"/team/profile/{{team.id}}\" routerDirection=\"forward\">\n            {{team.name}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"user && user.player\">\n    <ion-card-header>\n      <ion-card-title>Jugador</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item routerLink=\"/player/profile/{{user.player.id}}\" routerDirection=\"forward\">\n            {{user.player.name}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/user/my-profile/my-profile-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/user/my-profile/my-profile-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: MyProfilePageRoutingModule */

    /***/
    function srcAppPagesUserMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
        return MyProfilePageRoutingModule;
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


      var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-profile.page */
      "./src/app/pages/user/my-profile/my-profile.page.ts");

      var routes = [{
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
      }];

      var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
        _classCallCheck(this, MyProfilePageRoutingModule);
      };

      MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/user/my-profile/my-profile.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/user/my-profile/my-profile.module.ts ***!
      \************************************************************/

    /*! exports provided: MyProfilePageModule */

    /***/
    function srcAppPagesUserMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
        return MyProfilePageModule;
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


      var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-profile-routing.module */
      "./src/app/pages/user/my-profile/my-profile-routing.module.ts");
      /* harmony import */


      var _my_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-profile.page */
      "./src/app/pages/user/my-profile/my-profile.page.ts");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");

      var MyProfilePageModule = function MyProfilePageModule() {
        _classCallCheck(this, MyProfilePageModule);
      };

      MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfilePageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxIonicImageViewerModule"]],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]]
      })], MyProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/user/my-profile/my-profile.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/pages/user/my-profile/my-profile.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesUserMyProfileMyProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/user/my-profile/my-profile.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/user/my-profile/my-profile.page.ts ***!
      \**********************************************************/

    /*! exports provided: MyProfilePage */

    /***/
    function srcAppPagesUserMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
        return MyProfilePage;
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


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");
      /* harmony import */


      var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/models/model */
      "./src/app/api/models/model.ts");
      /* harmony import */


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _user_form_user_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../user-form/user-form.page */
      "./src/app/pages/user/user-form/user-form.page.ts");

      var MyProfilePage = /*#__PURE__*/function () {
        function MyProfilePage(authUser, requestService, modalController) {
          _classCallCheck(this, MyProfilePage);

          this.authUser = authUser;
          this.requestService = requestService;
          this.modalController = modalController;
          this.userModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('User', requestService);
        }

        _createClass(MyProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.authUser.getUser();

                    case 2:
                      this.user = _context.sent;
                      console.log('authUser user', this.user);

                      if (this.user) {
                        this.userModel.api_functionModel(this.user.id, 'pageMyProfile').subscribe(function (respose) {
                          console.log('init myProfile', respose);

                          if (respose['status'] == 'success') {
                            _this.user = respose['data']; //this.authUser.updateUser(this.user);
                          }

                          if (event) event.target.complete();
                        }, function (error) {
                          console.error(error);
                          if (event) event.target.complete();
                        });
                      }

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getPhoto",
          value: function getPhoto() {
            return this.user && this.user.photo ? this.user.photo.urlComplete : 'assets/images/profile.jpg';
          }
        }, {
          key: "showEdit",
          value: function showEdit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _user_form_user_form_page__WEBPACK_IMPORTED_MODULE_6__["UserFormPage"],
                        componentProps: {
                          id: this.user.id
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log(data);
                        var item = data.data['user'];
                        _this2.user.first_name = item.first_name;
                        _this2.user.last_name = item.last_name;
                        _this2.user.photo = item.photo;
                        _this2.user.email = item.email;
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
        }]);

        return MyProfilePage;
      }();

      MyProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/my-profile/my-profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-profile.page.scss */
        "./src/app/pages/user/my-profile/my-profile.page.scss"))["default"]]
      })], MyProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-user-my-profile-my-profile-module-es5.js.map