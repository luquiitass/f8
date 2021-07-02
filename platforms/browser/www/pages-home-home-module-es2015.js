(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Fútbol Alem </ion-title>\n    <ion-buttons slot=\"secondary\">\n       <ion-button  routerLink=\"/notifications\" routerDirection=\"forward\">\n        <ion-icon name=\"notifications-outline\"></ion-icon>      \n        <ion-badge id=\"notifications-badge\" *ngIf=\"notificationsCount > 0\">{{notificationsCount}}</ion-badge>\n      </ion-button> \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\n  <ion-header>\n    <ion-toolbar >\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n    <ion-list>\n      <ion-item routerLink=\"/my-profile\" routerDirection=\"forward\" >\n        <app-menu-user style=\"width: 100%;\"></app-menu-user>\n      </ion-item>\n      <!-- <ion-item>Mis Equipos</ion-item>\n      <ion-item>Mis Jugadores</ion-item>\n      <ion-item>Mis Partidos</ion-item> -->\n\n      <ion-item lines=\"full\" *ngIf=\"false\">\n        <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n        <ion-label>\n          Toggle Dark Theme\n        </ion-label>\n        <ion-toggle id=\"themeToggle\" slot=\"end\"></ion-toggle>\n      </ion-item>\n\n\n      <ion-item routerLink=\"/admin_home\" routerDirection=\"forward\" *ngIf=\"auth.isAdmin()\" >Administrar APP</ion-item>\n      <ion-item (click)=\"logout()\">\n        <ion-label>Cerrar Sesión</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n\n\n <ion-tabs slot=\"top\" color=\"primary\">\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"results\">\n        <ion-icon name=\"clipboard-outline\"></ion-icon>\n        <ion-label>Resultado</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"games\">\n        <ion-icon name=\"easel-outline\"></ion-icon>\n        <ion-label>Partidos</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"teams\">\n        <ion-icon name=\"people-outline\"></ion-icon>\n        <ion-label>Equipos</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"players\">\n        <ion-icon name=\"person-outline\"></ion-icon>\n        <ion-label>Jugadores</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"publications\">\n        <ion-icon name=\"happy-outline\"></ion-icon>        \n        <ion-label>3° Tiempo</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  \n  </ion-tabs>\n\n");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");





const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            {
                path: 'teams',
                loadChildren: () => __webpack_require__.e(/*! import() | teams-teams-module */ "teams-teams-module").then(__webpack_require__.bind(null, /*! ./teams/teams.module */ "./src/app/pages/home/teams/teams.module.ts")).then(m => m.TeamsPageModule)
            },
            {
                path: 'results',
                loadChildren: () => Promise.all(/*! import() | results-results-module */[__webpack_require__.e("common"), __webpack_require__.e("results-results-module")]).then(__webpack_require__.bind(null, /*! ./results/results.module */ "./src/app/pages/home/results/results.module.ts")).then(m => m.ResultsPageModule)
            },
            {
                path: 'games',
                loadChildren: () => Promise.all(/*! import() | games-games-module */[__webpack_require__.e("common"), __webpack_require__.e("games-games-module")]).then(__webpack_require__.bind(null, /*! ./games/games.module */ "./src/app/pages/home/games/games.module.ts")).then(m => m.GamesPageModule)
            },
            {
                path: 'players',
                loadChildren: () => __webpack_require__.e(/*! import() | players-players-module */ "players-players-module").then(__webpack_require__.bind(null, /*! ./players/players.module */ "./src/app/pages/home/players/players.module.ts")).then(m => m.PlayersPageModule)
            },
            {
                path: 'publications',
                loadChildren: () => __webpack_require__.e(/*! import() | publications-publications-module */ "publications-publications-module").then(__webpack_require__.bind(null, /*! ./publications/publications.module */ "./src/app/pages/home/publications/publications.module.ts")).then(m => m.PublicationsPageModule)
            },
            {
                path: '',
                redirectTo: '/home/results',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'publications',
        loadChildren: () => __webpack_require__.e(/*! import() | publications-publications-module */ "publications-publications-module").then(__webpack_require__.bind(null, /*! ./publications/publications.module */ "./src/app/pages/home/publications/publications.module.ts")).then(m => m.PublicationsPageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#notification-button {\n  position: relative;\n  width: 42px;\n  top: 1px;\n  right: 1px;\n  overflow: visible !important;\n}\n\n#notifications-badge {\n  background-color: red;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGlmaWNhdGlvbi1idXR0b24geyAgICAgICAgICAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNDJweDtcbiAgICB0b3A6MXB4O1xuICAgIHJpZ2h0OiAxcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xufVxuXG5cbiNub3RpZmljYXRpb25zLWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTNweDtcbiAgICByaWdodDogLTNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");






let HomePage = class HomePage {
    constructor(platform, splashScreen, statusBar, auth) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.auth = auth;
        this.currentPageTitle = 'Dashboard';
        this.appPages = [
            {
                title: 'Dashboard',
                url: '',
                icon: 'easel'
            },
            {
                title: 'Timeline',
                url: '/timeline',
                icon: 'film'
            },
            {
                title: 'Settings',
                url: '/settings',
                icon: 'settings'
            }
        ];
        this.initializeApp();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.auth.updateUserApi();
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.loadTheme();
        });
        setInterval(() => {
            if (this.auth.user)
                this.auth.userModel.api_loadAttribute(this.auth.user.id, 'counts_not').subscribe(response => {
                    console.log('update atribute counts_not', response);
                    let count = response['User']['counts_not'];
                    if (count > this.auth.user.counts_not) {
                        this.auth.user.counts_not = count;
                    }
                });
        }, 50000);
    }
    loadTheme() {
        this.toggle = document.querySelector('#themeToggle');
        // Listen for the toggle check/uncheck to toggle the dark class on the <body>
        this.toggle.addEventListener('ionChange', (ev) => {
            document.body.classList.toggle('dark', ev.detail.checked);
        });
        this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        // Listen for changes to the prefers-color-scheme media query
        this.prefersDark.addListener((e) => this.checkToggle(e.matches));
    }
    // Called when the app loads
    loadApp() {
        this.checkToggle(this.prefersDark.matches);
    }
    // Called by the media query to check/uncheck the toggle
    checkToggle(shouldCheck) {
        this.toggle.checked = shouldCheck;
    }
    logout() {
        this.auth.logout();
    }
    get notificationsCount() {
        return this.auth.user && this.auth.user.counts_not ? this.auth.user.counts_not : 0;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__["AuthUserService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map