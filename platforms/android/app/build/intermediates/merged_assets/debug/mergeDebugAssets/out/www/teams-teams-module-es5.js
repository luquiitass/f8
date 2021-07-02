(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teams-teams-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/teams/teams.page.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/teams/teams.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTeamsTeamsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Equipos</ion-title>\n  </ion-toolbar>\n  <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"!firstLoad\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n    <ion-list>\n  \n      <ion-list-header *ngIf=\"teams.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n     \n      <ion-item *ngFor=\"let team of teams\" routerLink=\"/team/profile/{{team.id}}\" routerDirection=\"forward\" class=\"team-list\" >\n        <ion-avatar slot=\"start\" >\n          <ion-img \n            [src]=\"team.shield ? team.shield.urlComplete : 'assets/images/shield_team.png'\">\n          </ion-img>\n        </ion-avatar>\n        <ion-label >\n          <h3>{{team.name}}</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"firstLoad\">\n    <ion-item *ngFor=\"let i of listSkeleton\" >\n      <ion-avatar slot=\"start\" >\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label >\n        <h3>\n          <ion-skeleton-text animated style=\"width: 80%;height: 20px;\"></ion-skeleton-text>\n        </h3>\n      </ion-label>\n    </ion-item>\n  </div>\n  \n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/home/teams/teams-routing.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/home/teams/teams-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: TeamsPageRoutingModule */

    /***/
    function srcAppPagesHomeTeamsTeamsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamsPageRoutingModule", function () {
        return TeamsPageRoutingModule;
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


      var _teams_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./teams.page */
      "./src/app/pages/home/teams/teams.page.ts");

      var routes = [{
        path: '',
        component: _teams_page__WEBPACK_IMPORTED_MODULE_3__["TeamsPage"]
      }];

      var TeamsPageRoutingModule = function TeamsPageRoutingModule() {
        _classCallCheck(this, TeamsPageRoutingModule);
      };

      TeamsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TeamsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/home/teams/teams.module.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/home/teams/teams.module.ts ***!
      \**************************************************/

    /*! exports provided: TeamsPageModule */

    /***/
    function srcAppPagesHomeTeamsTeamsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function () {
        return TeamsPageModule;
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


      var _teams_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./teams-routing.module */
      "./src/app/pages/home/teams/teams-routing.module.ts");
      /* harmony import */


      var _teams_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./teams.page */
      "./src/app/pages/home/teams/teams.page.ts");

      var TeamsPageModule = function TeamsPageModule() {
        _classCallCheck(this, TeamsPageModule);
      };

      TeamsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _teams_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamsPageRoutingModule"]],
        declarations: [_teams_page__WEBPACK_IMPORTED_MODULE_6__["TeamsPage"]]
      })], TeamsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/home/teams/teams.page.scss":
    /*!**************************************************!*\
      !*** ./src/app/pages/home/teams/teams.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTeamsTeamsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvdGVhbXMvdGVhbXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/home/teams/teams.page.ts":
    /*!************************************************!*\
      !*** ./src/app/pages/home/teams/teams.page.ts ***!
      \************************************************/

    /*! exports provided: TeamsPage */

    /***/
    function srcAppPagesHomeTeamsTeamsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamsPage", function () {
        return TeamsPage;
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


      var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/request.service */
      "./src/app/api/request.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/util/dialog.service */
      "./src/app/api/util/dialog.service.ts");
      /* harmony import */


      var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth-user.service */
      "./src/app/services/auth-user.service.ts");

      var TeamsPage = /*#__PURE__*/function () {
        function TeamsPage(request, modalController, dialog, auth) {
          _classCallCheck(this, TeamsPage);

          this.request = request;
          this.modalController = modalController;
          this.dialog = dialog;
          this.auth = auth;
          this.teams = [];
          this.listSkeleton = new Array(10);
          this.firstLoad = true;
          this.teamService = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Team', request);
        }

        _createClass(TeamsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var _this = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.teamService.api_function('pageHomeTeams').subscribe(function (response) {
              _this.teams = response['data'];
              if (event) event.target.complete();
              _this.firstLoad = false;
            }, function (error) {
              if (event) event.target.complete();
              _this.firstLoad = false;
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.auth.logout();
          }
        }]);

        return TeamsPage;
      }();

      TeamsPage.ctorParameters = function () {
        return [{
          type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
        }, {
          type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_6__["AuthUserService"]
        }];
      };

      TeamsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teams',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./teams.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/teams/teams.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./teams.page.scss */
        "./src/app/pages/home/teams/teams.page.scss"))["default"]]
      })], TeamsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=teams-teams-module-es5.js.map