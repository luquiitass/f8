(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-game-admin-game-admin-game-module~pages-game-game-game-module~pages-game-result-result~8c458735"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-header>\n    <ion-card-title>Comentarios</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content> \n\n    <ion-list>\n      <ion-item *ngIf=\"listComments.length < 1\">\n        <ion-note style=\"font-size: large;\">Se el primero en comentar!!!</ion-note>\n      </ion-item>\n      <ion-item  *ngFor=\"let item of listComments\">\n        <div class=\"comment-item\" >\n\n          <ion-thumbnail slot=\"start\" class=\"comment-image\">\n            <ion-img\n              class=\"comment-image\" \n              [src]=\"getPhoto(item)\"\n              style=\"border-radius:50%; background-position:center center; background-size:cover; width:35px; height:35px;\">\n            </ion-img>\n          </ion-thumbnail>\n\n          <div class=\"comment-data\">\n            <div class=\"comment-user\">\n              <a [routerLink]=\"'/users/' + item.user.id +'/profile'\">\n                {{item.user.last_name }} {{item.user.first_name }}\n              </a>\n            </div>\n            <div class=\"comment-body\">\n                {{item.body}}\n            </div>\n            <div class=\"comment-date\">{{ formatDate(item.created_at)}}</div>\n          </div>\n\n        </div>\n        \n\n       \n      </ion-item>\n    </ion-list>\n\n    <form (ngSubmit)=\"send()\" >\n\n      <div class=\"content-comment\">\n        <div class=\"content-comment-text\">\n          <ion-textarea  class=\"editor-text\" [(ngModel)]=\"comment.body\" name=\"body\"  placeholder=\"Escreibe un comentario...\" ></ion-textarea>\n        </div>\n        <div>\n          <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <ion-fab-button  class=\"edditor-send\" size=\"small\" color=\"primary\" type=\"submit\" (click)=\"send()\">\n              <ion-icon name=\"send-sharp\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n        </div>\n      </div>\n\n      <!-- <ion-grid>\n        <ion-row class=\"editor\">\n          <ion-col size=\"10\">\n            <div>\n              <ion-textarea  class=\"editor-text\" [(ngModel)]=\"comment.body\" name=\"body\"  placeholder=\"Escreibe un comentario...\" ></ion-textarea>\n            </div>\n          </ion-col>\n          <ion-col size=\"2\">\n            <div>\n              <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n                <ion-fab-button  class=\"edditor-send\" size=\"small\" color=\"primary\" type=\"submit\" (click)=\"send()\">\n                  <ion-icon name=\"send-sharp\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n     \n  </form>\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event-list/event-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event-list/event-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"(events.length && team_l && team_v) || isAdmin\" >\n  <ion-card-header>\n    <ion-card-title>Sucesos</ion-card-title>\n  </ion-card-header>\n    <ion-list >\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col *ngIf=\"team_l\"  class=\"ion-text-start\">\n            {{team_l.name}}\n          </ion-col>\n          <ion-col *ngIf=\"team_v\"  class=\"ion-text-end\">\n            {{team_v.name}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-list-header *ngIf=\"events.length == 0\"  color=\"tertiary\">\n        <ion-label>Sin registros</ion-label>\n      </ion-list-header>\n\n   \n      <ion-item *ngFor=\"let item of events ; let i = index\" >\n          \n        <ion-label >\n          <h3 [ngClass]=\"{'ion-text-end' : item.team.id == team_v.id}\">\n            <img *ngIf=\"item.type_event.icon\" src=\"assets/images/{{item.type_event.icon}}\"  width=\"40px\">\n            {{item.time}}° \n            <b>{{item.type_event.name}}</b> \n            <a [routerLink]=\"'/player/profile/' + item.player.id\" routerDirection=\"forward\" >\n              {{item.player.name}}\n            </a>\n          </h3>\n        </ion-label>\n\n        <ion-buttons slot=\"end\" *ngIf=\"isAdmin\">\n          <ion-button (click)=\"confirmDelete(item,i)\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n\n\n      </ion-item>\n    </ion-list>\n\n    <ion-button *ngIf=\"isAdmin\"  fill=\"clear\" expand=\"block\" (click)=\"addEvent()\">\n      Nuevo Suceso\n    </ion-button>\n\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/list/list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/list/list.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  list works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notificatio-selected/notificatio-selected.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notificatio-selected/notificatio-selected.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\">\n        <div *ngIf=\"isFavorite()\">\n          <div>Notificaciones activas !!!</div>\n          <div>Recibiras Notificaciones de las diferentes noticias de este equipo.</div>\n        </div>\n        <div *ngIf=\"!isFavorite()\">\n          <div>Activa las <b>Notificaciones</b> para recibir todas las noticias de este equipo.</div>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button (click)=\"toggleFavorite()\">\n          <ion-icon [name]=\"getNameIcon()\" [ngClass]=\"{'favorite' : isFavorite()}\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player-list/player-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player-list/player-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <ion-grid *ngIf=\"!loading && !errorLoading\">\n    <div *ngIf=\"items.length < 1\">\n      No posee Jugadores\n    </div>\n\n    <ion-row>\n      <ion-col size=\"4\" *ngFor=\"let item of items; let i = index\">\n        <div class=\"player-list\" >\n          <img class=\"player-list-photo\" [src]=\"getPhoto(item)\" alt=\"Foto\" (click)=\"showPhoto(item)\">\n          <h4 class=\"player-list-name\" (click)=\"selectItem(item)\">{{item.name}}</h4>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"loading && !errorLoading\" >\n    Cargando...\n  </div>\n\n  <div *ngIf=\"errorLoading\" (clcik)=\"load($event)\">\n    Volver a Intentar\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/redes/red-list/red-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/redes/red-list/red-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngIf=\"(list && list.length > 0)  || isAdmin\">\n  <ion-card-header>\n    \n    <ion-item>\n      <ion-card-title>\n        Redes Sociales\n      </ion-card-title>\n      <ion-button *ngIf=\"isAdmin\" slot=\"end\" (click)=\"openModal()\">\n        <ion-icon name=\"add-outline\"></ion-icon>      \n      </ion-button>\n    </ion-item>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-refresher *ngIf=\"withRefresh\" slot=\"fixed\" (ionRefresh)=\"load($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n   \n  \n      <ion-list-header *ngIf=\"list && list.length == 0\"  color=\"tertiary\">\n        <ion-label>No posee Redes Sociales</ion-label>\n      </ion-list-header>\n\n        <ion-grid>\n          <ion-row *ngFor=\"let red of list\" >\n            <ion-col size=\"1\">\n              <ion-icon class=\"icon-red {{getColorIcon(red)}}\" [name]=\"getIcon(red)\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"8\">\n              <h4 class=\"name\">{{red.url}}</h4>\n              <p>{{red.name}}</p>\n            </ion-col>\n            <ion-col size=\"1\" *ngIf=\"isAdmin\">\n              <ion-button size=\"small\" (click)=\"showEdit(red)\">\n                <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"1\" *ngIf=\"isAdmin\">\n              <ion-button size=\"small\" (click)=\"confirmDelete(red)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n     \n        <!-- <ion-item *ngFor=\"let red of list\" >\n            \n          <ion-label>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-icon class=\"icon-red\" [name]=\"getIcon(red)\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"9\">\n                  <h3 class=\"name\">{{red.name}}</h3>\n                  <p class=\"url\">{{red.url}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-label>\n  \n          <ion-buttons *ngIf=\"isAdmin\" slot=\"end\">\n            \n            <ion-button (click)=\"showEdit(red)\">\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"confirmDelete(red)\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n  \n        </ion-item> -->\n\n  \n  </ion-card-content>\n\n</ion-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-searchbar\n  [showCancelButton]=\"showCancelButton()\"\n  (keyup)=\"onInput($event)\"\n  (ionCancel)=\"onCancel($event)\">\n</ion-searchbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"eventModel.errorsForm.clear()\" *ngIf=\"dataEvent\">\n\n    <ion-item>\n      <ion-label position=\"floating\">Tipo de Evento</ion-label>\n      <ion-select [(ngModel)]=\"event.type_event_id\" name=\"type_event_id\">\n        <ion-select-option [value]=\"type_event.id\" *ngFor=\"let type_event of dataEvent.types_events\">{{ type_event.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('type_event_id') }}</div>\n    </ion-item>\n\n    \n    <ion-item>\n      <ion-label position=\"floating\">Equipo</ion-label>\n      <ion-select [(ngModel)]=\"event.team_id\" name=\"team_id\">\n        <ion-select-option [value]=\"team.id\" *ngFor=\"let team of dataEvent.teams\">{{ team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('team_id') }}</div>\n    </ion-item>\n \n\n    <ion-item>\n      <ion-label position=\"floating\">Jugador</ion-label> \n       <ion-select [(ngModel)]=\"event.player_id\" name=\"player_id\">\n        <ion-select-option [value]=\"player.id\" *ngFor=\"let player of getPlayers()\">{{ player.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('player_id') }}</div>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Tiempo</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"event.time\" name=\"time\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ eventModel.errorsForm.get('time') }}</div> \n\n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Red Social</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"redModel.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\">Red</ion-label>\n      <ion-select [(ngModel)]=\"red.name\" name=\"position_id\">\n        <ion-select-option [value]=\"red\" *ngFor=\"let red of redes\">{{ red }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ redModel.errorsForm.get('position_id') }}</div>\n\n    </ion-item>\n  \n\n    <ion-item>\n      <ion-label position=\"floating\" >Url</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"red.url\" name=\"url\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ redModel.errorsForm.get('url') }}</div>\n\n\n    \n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/comments/comments.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/comments/comments.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comment-item {\n  width: 100%;\n  display: flex;\n}\n\n.comment-image {\n  font-size: large;\n}\n\n.comment-data {\n  width: 100%;\n}\n\n.comment-user {\n  font-size: large;\n  margin-top: 10px;\n  font-weight: bold;\n}\n\n.comment-body {\n  font-size: smaller;\n  font-style: italic;\n  margin-left: 5px;\n  color: darkslategrey;\n  white-space: pre-wrap;\n}\n\n.comment-date {\n  font-size: x-small;\n  text-align: right;\n  color: darkslategrey;\n}\n\n.editor-text {\n  background-color: white;\n  box-shadow: 2px 2px 5px #999;\n  padding: 2px;\n  border-radius: 15px;\n}\n\n.editor-send {\n  margin-left: -5px;\n}\n\n.content-comment-text {\n  margin-right: 50px;\n}\n\n.comment-image {\n  margin-top: 10px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDRCxhQUFBO0FBQ0g7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtaXRlbXtcbiAgICB3aWR0aDogMTAwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb21tZW50LWltYWdle1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5jb21tZW50LWRhdGF7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50LXVzZXJ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tbWVudC1ib2R5e1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5jb21tZW50LWRhdGV7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufVxuXG4uZWRpdG9ye1xufVxuLmVkaXRvci10ZXh0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICM5OTk7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5lZGl0b3Itc2VuZHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcblxufVxuXG4uY29udGVudC1jb21tZW50LXRleHR7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uY29tbWVudC1pbWFnZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let CommentsComponent = class CommentsComponent {
    constructor(authService, request, util) {
        this.authService = authService;
        this.request = request;
        this.util = util;
        this.listComments = [];
        this.commentModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Comment', request);
    }
    ngOnInit() {
        this.inmit();
    }
    inmit() {
        this.comment = {
            idRelation: this.idRelation,
            nameRelationModel: this.nameRelationModel,
            body: this.commentText,
        };
        this.resetComment();
        this.loadCooments();
    }
    loadCooments() {
        if (this.comments && this.comments.length > 0) {
            this.listComments = this.comments;
            return;
        }
        this.relationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"](this.nameRelationModel, this.request);
        this.relationModel.api_loadAttribute(this.idRelation, 'comments').subscribe(response => {
            if (response['status'] == 'success') {
                this.listComments = response[this.nameRelationModel]['comments'];
            }
        }, error => {
        });
    }
    resetComment() {
        this.comment.body = '';
    }
    send() {
        console.log('send');
        if (this.comment.body) {
            //this.comment.body = this.commentText;
            this.commentModel.api_function('add', this.comment).subscribe(response => {
                if (response['status'] == 'success') {
                    var data = response['data'];
                    this.listComments.push(data);
                    this.resetComment();
                }
                console.log(response);
            }, error => {
                console.error(error);
            });
        }
    }
    formatDate(val) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(val).locale('es').fromNow();
    }
    getPhoto(comment) {
        return comment.user.photo ? comment.user.photo.urlCompleteThumb : 'assets/images/profile.jpg';
    }
};
CommentsComponent.ctorParameters = () => [
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
CommentsComponent.propDecorators = {
    nameRelationModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nameRelationModel',] }],
    idRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['idRelation',] }],
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['comments',] }]
};
CommentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments/comments.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comments.component.scss */ "./src/app/components/comments/comments.component.scss")).default]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _event_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/list/list.component */ "./src/app/components/event/list/list.component.ts");
/* harmony import */ var _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event-list/event-list.component */ "./src/app/components/event/event-list/event-list.component.ts");
/* harmony import */ var _player_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player-list/player-list.component */ "./src/app/components/player/player-list/player-list.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/components/comments/comments.component.ts");
/* harmony import */ var _notifications_notificatio_selected_notificatio_selected_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notificatio-selected/notificatio-selected.component */ "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.ts");
/* harmony import */ var _redes_red_list_red_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redes/red-list/red-list.component */ "./src/app/components/redes/red-list/red-list.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]
        ],
        declarations: [
            _event_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
            _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_5__["EventListComponent"],
            _player_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__["PlayerListComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"],
            _notifications_notificatio_selected_notificatio_selected_component__WEBPACK_IMPORTED_MODULE_8__["NotificatioSelectedComponent"],
            _redes_red_list_red_list_component__WEBPACK_IMPORTED_MODULE_9__["RedListComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
        ],
        exports: [
            _event_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
            _event_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_5__["EventListComponent"],
            _player_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__["PlayerListComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_7__["CommentsComponent"],
            _notifications_notificatio_selected_notificatio_selected_component__WEBPACK_IMPORTED_MODULE_8__["NotificatioSelectedComponent"],
            _redes_red_list_red_list_component__WEBPACK_IMPORTED_MODULE_9__["RedListComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
        ],
        entryComponents: [],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/event/event-list/event-list.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvZXZlbnQtbGlzdC9ldmVudC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/event/event-list/event-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_pages_event_event_form_event_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/event/event-form/event-form.page */ "./src/app/pages/event/event-form/event-form.page.ts");







let EventListComponent = class EventListComponent {
    constructor(requestService, dialog, modalController) {
        this.requestService = requestService;
        this.dialog = dialog;
        this.modalController = modalController;
        this.events = [];
        this.isAdmin = false;
        this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Game', requestService);
        this.eventModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Event', requestService);
        console.log(this.game_id);
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.gameModel.api_functionModel(this.game_id, 'dataEvent').subscribe(response => {
            if (response['status'] == 'success') {
                this.events = response['data']['events'];
                this.team_l = response['data']['team_l'];
                this.team_v = response['data']['team_v'];
            }
            console.log(this.events);
        });
    }
    confirmDelete(event, index) {
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar este Suceso', e => {
            this.delete(event, index);
        });
    }
    delete(event, index) {
        this.eventModel.api_delete(event.id).subscribe(data => {
            console.log(data);
            if (data['status'] == 'success') {
                this.dialog.showToast('Suceso Eliminado', null, 'success');
                this.events.splice(index, 1);
            }
        });
    }
    addEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_event_event_form_event_form_page__WEBPACK_IMPORTED_MODULE_6__["EventFormPage"],
                componentProps: { game_id: this.game_id }
            });
            modal.onDidDismiss().then(data => {
                let e = data.data['event'];
                this.events.push(e);
            });
            return yield modal.present();
        });
    }
};
EventListComponent.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
EventListComponent.propDecorators = {
    game_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['game_id',] }]
};
EventListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event-list/event-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event-list.component.scss */ "./src/app/components/event/event-list/event-list.component.scss")).default]
    })
], EventListComponent);



/***/ }),

/***/ "./src/app/components/event/list/list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/event/list/list.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/event/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/event/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() { }
    ngOnInit() { }
};
ListComponent.ctorParameters = () => [];
ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/list/list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list.component.scss */ "./src/app/components/event/list/list.component.scss")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/notifications/notificatio-selected/notificatio-selected.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorite {\n  /*color: darkturquoise;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvLXNlbGVjdGVkL25vdGlmaWNhdGlvLXNlbGVjdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpby1zZWxlY3RlZC9ub3RpZmljYXRpby1zZWxlY3RlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZvcml0ZXtcbiAgICAvKmNvbG9yOiBkYXJrdHVycXVvaXNlOyovXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/notifications/notificatio-selected/notificatio-selected.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NotificatioSelectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificatioSelectedComponent", function() { return NotificatioSelectedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");




let NotificatioSelectedComponent = class NotificatioSelectedComponent {
    constructor(requesService) {
        this.requesService = requesService;
        this.favoriteModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__["Model"]('Favorite', requesService);
    }
    ngOnInit() { }
    toggleFavorite() {
        if (this.object) {
            if (this.isFavorite()) {
                this.favoriteModel.api_delete(this.object.favorite.id).subscribe(response => {
                    this.object.favorite = null;
                    console.log(response);
                }, error => {
                    console.error(error);
                });
            }
            else {
                let parms = {
                    table_id: this.table_id,
                    table_name: this.table_name
                };
                this.favoriteModel.api_function('addFavorite', parms).subscribe(response => {
                    if (response['status'] == 'success') {
                        this.object.favorite = response['data'];
                    }
                }, error => {
                    console.error(error);
                });
            }
        }
    }
    isFavorite() {
        return this.object && this.object.favorite ? true : false;
    }
    getNameIcon() {
        return this.isFavorite() ? 'notifications-off-outline' : 'notifications-outline';
    }
};
NotificatioSelectedComponent.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] }
];
NotificatioSelectedComponent.propDecorators = {
    object: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['object',] }],
    table_name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['table_name',] }],
    table_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['table_id',] }]
};
NotificatioSelectedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificatio-selected',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notificatio-selected.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notificatio-selected/notificatio-selected.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notificatio-selected.component.scss */ "./src/app/components/notifications/notificatio-selected/notificatio-selected.component.scss")).default]
    })
], NotificatioSelectedComponent);



/***/ }),

/***/ "./src/app/components/player/player-list/player-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/player/player-list/player-list.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".player-list {\n  margin: 5px;\n}\n\n.player-list-photo {\n  width: 100%;\n  vertical-align: middle;\n  border-radius: 5px;\n}\n\n.player-list-name {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLWxpc3QvcGxheWVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFHQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLWxpc3QvcGxheWVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWVyLWxpc3R7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi5wbGF5ZXItbGlzdC1waG90b3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBsYXllci1saXN0LW5hbWV7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/player/player-list/player-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/player/player-list/player-list.component.ts ***!
  \************************************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");



let PlayerListComponent = class PlayerListComponent {
    constructor(photoViewer) {
        var _a;
        this.photoViewer = photoViewer;
        this.loading = false;
        this.eventLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eventSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.items = (_a = this.items) !== null && _a !== void 0 ? _a : [];
    }
    ngOnInit() {
        //this.items = 
        console.log('items comp', this.items);
    }
    load(event) {
        console.log('emit comp');
        if (this.eventLoad)
            this.eventLoad.emit(event);
    }
    selectItem(item) {
        if (this.eventSelect)
            this.eventSelect.emit(item);
    }
    //Otras funciones 
    getPhoto(item) {
        return item['photo'] ? this.getPhotoServer(item['photo']) : 'assets/images/jugador.png';
    }
    getPhotoServer(photo) {
        return photo['thumb'] ? photo['urlCompleteThumb'] : photo['urlCompleteThumb'];
    }
    showPhoto(image) {
        this.photoViewer.show(image.urlComplete);
    }
};
PlayerListComponent.ctorParameters = () => [
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"] }
];
PlayerListComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['items',] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['loading',] }],
    errorLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['errorLoad',] }],
    eventLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    eventSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
PlayerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player/player-list/player-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player-list.component.scss */ "./src/app/components/player/player-list/player-list.component.scss")).default]
    })
], PlayerListComponent);



/***/ }),

/***/ "./src/app/components/redes/red-list/red-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/redes/red-list/red-list.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-red {\n  font-size: 30px;\n}\n\n.name {\n  font-size: large;\n  margin-left: 10px;\n}\n\n.url {\n  font-size: small;\n  color: 0;\n}\n\n.facebook-color {\n  color: #4267B2;\n}\n\n.instagram-color {\n  color: #c51d34;\n}\n\n.twitter-color {\n  color: #1DA1F2;\n}\n\n.whatsapp-color {\n  color: #00bb2d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWRlcy9yZWQtbGlzdC9yZWQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWRlcy9yZWQtbGlzdC9yZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXJlZHtcbiAgICBmb250LXNpemU6IDMwcHg7IC8vUHJlZmVycmVkIHNpemUgaGVyZVxufVxuXG4ubmFtZXtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udXJse1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IGJsdWUoJGNvbG9yOiAjMDAwMDAwKTtcbn1cblxuLmZhY2Vib29rLWNvbG9ye1xuICAgIGNvbG9yOiAjNDI2N0IyO1xufVxuXG4uaW5zdGFncmFtLWNvbG9ye1xuICAgIGNvbG9yOiAjYzUxZDM0O1xufVxuXG4udHdpdHRlci1jb2xvcntcbiAgICBjb2xvcjogIzFEQTFGMjtcbn1cblxuLndoYXRzYXBwLWNvbG9ye1xuICAgIGNvbG9yOiAjMDBiYjJkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/redes/red-list/red-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/redes/red-list/red-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: RedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedListComponent", function() { return RedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_pages_redes_redes_form_redes_form_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/redes/redes-form/redes-form.page */ "./src/app/pages/redes/redes-form/redes-form.page.ts");
/* harmony import */ var src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util-array.service */ "./src/app/services/util-array.service.ts");









//import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';
//import { AppAvailability } from '@ionic-native/app-availability/ngx';
let RedListComponent = class RedListComponent {
    constructor(request, dialog, modalController, util, utilArray, nacCtrl) {
        this.request = request;
        this.dialog = dialog;
        this.modalController = modalController;
        this.util = util;
        this.utilArray = utilArray;
        this.nacCtrl = nacCtrl;
        this.isAdmin = false;
        this.withRefresh = false;
        this.redModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Red', request);
    }
    ngOnInit() {
        this.load();
        //this.isAdmin = true;
    }
    load(event = null) {
        this.redModel.api_function('pageTeam', { nameModel: this.nameModel, idModel: this.idModel }).subscribe(response => {
            this.list = response['data'];
            console.log(response);
            if (event)
                event.target.complete();
        }, error => {
            console.error(error);
            if (event)
                event.target.complete();
        });
    }
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_redes_redes_form_redes_form_page__WEBPACK_IMPORTED_MODULE_7__["RedesFormPage"],
                componentProps: {
                    nameModel: this.nameModel,
                    idModel: this.idModel
                }
            });
            modal.onDidDismiss().then(data => {
                const red = data.data['red'];
                this.utilArray.listAddLast(this.list, red);
                //this.redModel.listAddLast(red);
            });
            return yield modal.present();
        });
    }
    showEdit(red) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_redes_redes_form_redes_form_page__WEBPACK_IMPORTED_MODULE_7__["RedesFormPage"],
                componentProps: { id: red.id }
            });
            modal.onDidDismiss().then(data => {
                const red = data.data['red'];
                this.utilArray.listUpdate(this.list, red.id, red);
            });
            return yield modal.present();
        });
    }
    confirmDelete(red) {
        this.dialog.presentAlertConfirm('Confirmar', 'Estas seguro de eliminar esta Red Social', e => {
            this.delete(red);
        });
    }
    delete(red) {
        this.redModel.api_delete(red.id).subscribe(data => {
            console.log(data);
            if (data['status'] == 'success') {
                this.dialog.showToast('Game Eliminado', null, 'success');
                this.utilArray.listDelete(this.list, red.id);
            }
        });
    }
    getIcon(red) {
        switch (red.name) {
            case 'Facebook':
                return 'logo-facebook';
            case 'Instagram':
                return 'logo-instagram';
            case 'WhatsApp':
                return 'logo-whatsapp';
            case 'Twitter':
                return 'logo-twitter';
        }
    }
    getColorIcon(red) {
        switch (red.name) {
            case 'Facebook':
                return 'facebook-color';
            case 'Instagram':
                return 'instagram-color';
            case 'WhatsApp':
                return 'whatsapp-color';
            case 'Twitter':
                return 'twitter-color';
        }
    }
    openRed(red) {
        if (red && red.url) {
            let baseUrl = '';
            switch (red.name) {
                case 'Facebook':
                    baseUrl = 'https://www.facebook.com/';
                    break;
                case 'Instagram':
                    baseUrl = 'https://www.instagram.com/';
                    break;
                case 'WhatsApp':
                    return 'whatsapp-color';
                case 'Twitter':
                    baseUrl = 'https://twitter.com/';
                    break;
            }
            /*      const browser = this.iab.create(baseUrl + red.url);
            
                  browser.show()
              */
        }
    }
};
RedListComponent.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_util_array_service__WEBPACK_IMPORTED_MODULE_8__["UtilArrayService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
RedListComponent.propDecorators = {
    nameModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nameModel',] }],
    idModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['idModel',] }],
    isAdmin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['isAdmin',] }],
    withRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['withRefresh',] }]
};
RedListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-red-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./red-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/redes/red-list/red-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./red-list.component.scss */ "./src/app/components/redes/red-list/red-list.component.scss")).default]
    })
], RedListComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() { }
    ngOnInit() { }
    onCancel(event) { }
    onInput(event) { }
    showCancelButton() { }
};
SearchComponent.ctorParameters = () => [];
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/pages/event/event-form/event-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50L2V2ZW50LWZvcm0vZXZlbnQtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/event/event-form/event-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/event/event-form/event-form.page.ts ***!
  \***********************************************************/
/*! exports provided: EventFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormPage", function() { return EventFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");






let EventFormPage = class EventFormPage {
    constructor(navParams, requestService, dialogService, viewCtrl) {
        this.navParams = navParams;
        this.requestService = requestService;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.myDateFilter = (d) => {
            const day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day == 6;
        };
        this.gameModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Game', requestService);
        this.eventModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Event', requestService);
        this.game_id = navParams.get('game_id');
        this.id = navParams.get('id');
    }
    ngOnInit() {
        this.loadEvent();
        this.init();
    }
    loadEvent() {
        if (this.id) {
        }
        else {
            this.event = {
                game_id: this.game_id,
                type_event_id: '',
                player_id: '',
                team_id: '',
                time: ''
            };
        }
    }
    init() {
        this.eventModel.api_function('dataEventCreate', { game_id: this.game_id }).subscribe(data => {
            if (data['status'] == 'success') {
                this.dataEvent = data['data'];
                this.types_events = this.dataEvent['types_events'];
            }
            console.log('ty', this.types_events);
            console.log(this.dataEvent);
        });
    }
    getPlayers() {
        let id = this.event.team_id;
        if (id) {
            let team = this.dataEvent.teams.find(t => t.id === id);
            if (team)
                return team.players;
        }
        return [];
    }
    submit() {
        if (this.event.id) {
            this.eventModel.api_update(this.event).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    console.log(data);
                    this.dismiss(data['Event']);
                }
            });
        }
        else {
            this.eventModel.api_create(this.event).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Event']);
                }
            });
        }
    }
    dismiss(event) {
        this.viewCtrl.dismiss({
            event: event,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    print() {
        console.log(this.event);
    }
};
EventFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
EventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/event/event-form/event-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event-form.page.scss */ "./src/app/pages/event/event-form/event-form.page.scss")).default]
    })
], EventFormPage);



/***/ }),

/***/ "./src/app/pages/redes/redes-form/redes-form.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/redes/redes-form/redes-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGVzL3JlZGVzLWZvcm0vcmVkZXMtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/redes/redes-form/redes-form.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/redes/redes-form/redes-form.page.ts ***!
  \***********************************************************/
/*! exports provided: RedesFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedesFormPage", function() { return RedesFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");






let RedesFormPage = class RedesFormPage {
    constructor(request, dialogService, viewCtrl, navParams) {
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
    ngOnInit() {
        this.init();
    }
    init() {
        this.red = {
            name: '',
            url: '',
            name_model: this.nameModel,
            model_id: this.idModel
        };
        if (this.id) {
            this.redModel.api_find(this.id).subscribe(response => {
                this.red = response['Red'];
            });
        }
    }
    submit() {
        this.saveRed();
    }
    dismiss(red) {
        this.viewCtrl.dismiss({
            red: red,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    saveRed() {
        if (this.red.id) {
            this.redModel.api_update(this.red).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Red']);
                }
            });
        }
        else {
            this.redModel.api_create(this.red).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Red']);
                }
            });
        }
    }
};
RedesFormPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
RedesFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redes-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./redes-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/redes/redes-form/redes-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./redes-form.page.scss */ "./src/app/pages/redes/redes-form/redes-form.page.scss")).default]
    })
], RedesFormPage);



/***/ }),

/***/ "./src/app/services/util-array.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/util-array.service.ts ***!
  \************************************************/
/*! exports provided: UtilArrayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilArrayService", function() { return UtilArrayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UtilArrayService = class UtilArrayService {
    constructor() { }
    /**
     * Inserta el elemento al final del array
     * @param list array en el que se inserta el objeto
     * @param item item a insertar
     */
    listAddLast(list, item) {
        list.push(item);
    }
    /**
     * Añade un elemente en el array al inicio
     * @param list array en la que se inserta el objeto
     * @param item  elemento que se almacenara en el array
     */
    listAddFirst(list, item) {
        list.unshift(item);
    }
    /**
     * Remplaza un objeto del array
     * @param list array que se actualizara
     * @param id iel id del objeto
     * @param item elemento que se remplazara en el array
     */
    listUpdate(list, id, item) {
        let index = this.findIndexList(list, id);
        console.log('index remove', index);
        if (index >= 0) {
            list[index] = item;
        }
    }
    /**
     * elimina objeto de un array pasando el id del objeto
     * @param list array del que se eliminara el objeto
     * @param id id del objeto
     */
    listDelete(list, id) {
        let index = this.findIndexList(list, id);
        console.log('index remove', index);
        if (index >= 0)
            list.splice(index, 1);
    }
    /**
     * Busca un obeto en el array
     * @param list array en el qie se bucara el objeto
     * @param id id del objeto
     */
    findList(list, id) {
        return list.find(item => item['id'] === id);
    }
    /**
     * Retorna el indice de la posicion en la que se encuentra el objeto
     * @param list Array en el que se realizara a busqueda
     * @param id id del objeto buscado
     */
    findIndexList(list, id) {
        return list.findIndex(item => item['id'] === id);
    }
};
UtilArrayService.ctorParameters = () => [];
UtilArrayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilArrayService);



/***/ })

}]);
//# sourceMappingURL=default~pages-game-admin-game-admin-game-module~pages-game-game-game-module~pages-game-result-result~8c458735-es2015.js.map