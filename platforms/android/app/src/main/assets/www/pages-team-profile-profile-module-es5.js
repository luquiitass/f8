(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/profile/profile.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/profile/profile.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTeamProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Equipo </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"showMenu()\">\n        <ion-icon name=\"create\"></ion-icon>      \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"team\">\n  <div>\n    <div>\n      <img class=\"cover\" [src]=\"getCover()\" alt=\"Portada\">\n    </div>\n\n    <div class=\"shield-team\">\n      <img class=\"shield\" [src]=\"getShield()\" alt=\"Escudo\">\n      <span class=\"name-team\">{{team.name}}</span>\n    </div>\n  </div>\n\n  <app-notificatio-selected\n    [object]=\"team\"\n    [table_name]=\"'Team'\"\n    [table_id] = \"id\"\n  ></app-notificatio-selected>\n\n<ion-card>\n  <ion-card-header>\n    <ion-card-title>\n      Jugadores\n    </ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n    <app-player-list \n      [items] = \"playersList\"\n      (eventLoad)=\"loadPlayers($event)\"\n      (eventSelect)=\"playerSelect($event)\" \n      [loading] = \"playersLoading\"\n      [errorLoad]=\"playersErrorLoad\"\n    ></app-player-list>\n  </ion-card-content>\n\n</ion-card>\n\n  <app-red-list\n    [nameModel] = \"'Team'\"\n    [idModel] = \"id\"\n    [isAdmin] = \"false\"\n    ></app-red-list>\n\n<app-comments\n  [comments] = \"team.comments\"\n  [idRelation]=\"id\"\n  [nameRelationModel]=\"'Team'\"\n></app-comments>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/team/profile/profile-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/team/profile/profile-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function srcAppPagesTeamProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/team/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/team/profile/profile.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/team/profile/profile.module.ts ***!
      \******************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppPagesTeamProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "./src/app/pages/team/profile/profile-routing.module.ts");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/pages/team/profile/profile.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../components/components.module */
      "./src/app/components/components.module.ts");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/pages/team/profile/profile.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/team/profile/profile.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTeamProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cover {\n  width: 100%;\n}\n\n.shield-team {\n  display: flex;\n  align-items: flex-end;\n  padding: 5px;\n}\n\n.shield {\n  width: 50px;\n  height: 50px;\n}\n\n.name-team {\n  display: inline;\n  margin-left: 10px;\n  /*vertical-align: middle;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFtL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGllbGQtdGVhbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5zaGllbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubmFtZS10ZWFte1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Ki9cbn1cblxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/team/profile/profile.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/team/profile/profile.page.ts ***!
      \****************************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppPagesTeamProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _util_list_redirect_list_redirect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../util/list-redirect/list-redirect.page */
      "./src/app/pages/util/list-redirect/list-redirect.page.ts");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(route, requesService, modalController, navCtrl) {
          _classCallCheck(this, ProfilePage);

          this.route = route;
          this.requesService = requesService;
          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.id = '0';
          this.team = null;
          this.playersList = [];
          this.playersLoading = true;
          this.playersErrorLoad = false;
          this.id = this.route.snapshot.paramMap.get('id');
          this.teamModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Team', requesService);
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            /*
            this.teamModel.api_find(this.id).subscribe(data => {
              if(data['status'] == 'success')
                this.team = data['Team'];
            })*/
            this.playersLoading = true;
            this.teamModel.api_functionModel(this.id, 'pageProfile').subscribe(function (response) {
              console.log(response);

              if (response['status'] == 'success') {
                _this.team = response['data'];
                _this.playersList = _this.team.players;
              }

              _this.playersLoading = false;
            }, function (error) {
              _this.playersLoading = false;
              _this.playersErrorLoad = false;
              console.error(error);
            }); //this.loadPlayers()
          }
        }, {
          key: "getCover",
          value: function getCover() {
            return this.team.cover_page ? this.team.cover_page.urlComplete : 'assets/images/cover.jpg';
          }
        }, {
          key: "getShield",
          value: function getShield() {
            return this.team.shield ? this.team.shield.urlComplete : 'assets/images/shield_team.png';
          }
        }, {
          key: "showMenu",
          value: function showMenu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var list, modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      list = [{
                        name: 'Editar Equipo',
                        route: ''
                      }, {
                        name: 'Admi. Jugadores',
                        route: "team/".concat(this.id, "/players")
                      }, {
                        name: 'Admi. Partidos',
                        rote: ''
                      }];
                      _context.next = 3;
                      return this.modalController.create({
                        component: _util_list_redirect_list_redirect_page__WEBPACK_IMPORTED_MODULE_6__["ListRedirectPage"],
                        componentProps: {
                          title: 'Administrar',
                          list: list
                        }
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log(data);
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setLog",
          value: function setLog(num) {
            console.log('set log in page profile, num : ', num);
          }
        }, {
          key: "loadPlayers",
          value: function loadPlayers(event) {
            var _this2 = this;

            this.playersLoading = true;
            this.teamModel.api_loadAttribute(this.id, 'players').subscribe(function (response) {
              if (response['status'] == 'success') {
                _this2.playersList = response['Team']['players'];
              }

              _this2.playersLoading = false;
            }, function (error) {
              _this2.playersLoading = false;
              _this2.playersErrorLoad = true;
            });
          }
        }, {
          key: "playerSelect",
          value: function playerSelect(player) {
            console.log('goTo', player);
            this.navCtrl.navigateRoot("player/profile/".concat(player.id));
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/pages/team/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-team-profile-profile-module-es5.js.map