(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/publications/show/show.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/publications/show/show.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Publicación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"init($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngIf=\"publication\" >\n    <ion-card-content>\n      <div class=\"publication-user\">\n        <ion-thumbnail slot=\"start\">\n          <ion-img\n            (click)=\"showPhotoUser(publication.user.photo)\"\n            class=\"user-image\"\n            [src]=\"publication.user.photo ? publication.user.photo.urlCompleteThumb : 'assets/images/user.png'\"\n            style=\"border-radius:50%; background-position:center center; background-size:cover; width:40px; height:40px;\">\n        </ion-img>\n        </ion-thumbnail>\n\n        <div class=\"user\">\n          <div class=\"name\">\n            {{publication.user.last_name}} {{publication.user.first_name}}\n          </div>\n          <div class=\"date\">\n            {{util.getFormarHumans(publication.created_at)}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"publication-text\">\n        <ion-text color=\"dark\">\n          {{publication.text}}\n        </ion-text>\n      </div>\n\n      <div class=\"publication-image ion-text-center\" *ngIf=\"publication.image_id\">\n        <img [src]=\"publication.image.urlComplete\">\n      </div>\n\n      <!-- <ion-grid>\n        <ion-row >\n          <ion-col class=\"ion-text-left\">\n            <ion-text  color=\"dark\">\n              <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\n              {{publication.likes.length}}\n            </ion-text>\n          </ion-col>\n          <ion-col class=\"ion-text-right\">\n            <ion-text>\n              <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n              {{publication.comments.length}}\n            </ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n    \n      <div class=\"separator\"></div>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-segment *ngIf=\"publication\" (ionChange)=\"segmentChanged($event)\" color=\"secondary\" [value]=\"segment\">\n    \n    <ion-segment-button value=\"likes\" layout=\"icon-start\" class=\"sgm-likes\">\n      <ion-icon name=\"heart-outline\" ></ion-icon>\n      {{publication.likes.length}}\n    </ion-segment-button>\n\n    <ion-segment-button value=\"comments\" layout=\"icon-start\" class=\"sgm-comments\">\n      \n        <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\n        {{publication.comments.length}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <app-likes\n    *ngIf=\"publication && segment == 'likes'\"\n    [likes] = \"publication.likes\"\n  >\n  </app-likes>\n\n  <app-comments\n    *ngIf=\"publication && segment== 'comments'\"\n    [comments] = \"publication.comments\"\n    [idRelation]=\"id\"\n    [nameRelationModel]=\"'Publication'\"\n    [withTitle] = \"false\"\n    (onUpdateComments)=\"updateComments($event,publication)\"\n  ></app-comments>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-form/player-form.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-form/player-form.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Jugador</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePlayer.errorsForm.clear()\" >\n\n    <div>\n      <ion-img  [src]=\"photoModel.photo.getPath()\" ></ion-img>\n      <div class=\"ion-text-center\">\n        <ion-button   size=\"small\" color=\"tertiary\" (click)=\"photoModel.addOneNewToGallery()\">{{photoModel.isLoadPthoto() ? 'Modificar' : 'Seleccionar Imagen' }}</ion-button>\n      </div>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('name') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Fecha de nacimiento</ion-label>\n      <ion-datetime [(ngModel)]=\"player.birth_date\" name=\"birth_date\"    displayFormat=\"YYYY-MM-DD\" ></ion-datetime>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('birth_date') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Apodo</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.nick\" name=\"nick\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('nick') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Numero</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.number\" name=\"number\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('number') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Altura</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.height\" name=\"height\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('height') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Peso</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.weight\" name=\"weight\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('weight') }}</div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Posicion</ion-label>\n      <ion-select [(ngModel)]=\"player.position_id\" name=\"position_id\">\n        <ion-select-option [value]=\"pos.id\" *ngFor=\"let pos of servicePosition.list\">{{ pos.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('position_id') }}</div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Usuario</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"player.email\" name=\"email\" (click)=\"selectUser()\"></ion-input>\n      <ion-input type=\"hidden\" [(ngModel)]=\"player.user_id\" name=\"user_id\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePlayer.errorsForm.get('weight') }}</div>\n\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/position/position-form/position-form.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/position/position-form/position-form.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Posición</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePosition.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"posicion.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePosition.errorsForm.get('name') }}</div>\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Nueva Publicación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"servicePublication.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\" >Escribe aqui...</ion-label>\n      <ion-textarea  class=\"editor-text\" [(ngModel)]=\"publication.text\" name=\"text\"  ></ion-textarea>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePublication.errorsForm.get('text') }}</div>\n\n    <ion-item *ngIf=\"false\">\n      <ion-label position=\"floating\">Mencionar Equipo</ion-label>\n      <ion-select [(ngModel)]=\"publication.l_team\" name=\"l_team\">\n        <ion-select-option [value]=\"l_team.id\" *ngFor=\"let l_team of teams\">{{ l_team.name }}</ion-select-option>\n      </ion-select>\n      <div style=\"color: red; padding-top: 0.2rem\" >{{ servicePublication.errorsForm.get('l_team') }}</div>\n    </ion-item>\n\n    <ion-item *ngIf=\"this.photoModel.isLoadPthoto()\">\n      <ion-img  [src]=\"photoModel.photo.getPath()\" ></ion-img>\n    </ion-item>\n    <ion-item>\n      <ion-button expand=\"full\" fill=\"outline\"  (click)=\"photoModel.addOneNewToGallery()\" >\n        <ion-icon  name=\"image\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n    <ion-button type=\"submit\"  expand=\"block\" [disabled]=\"posting\">\n      <ion-spinner name=\"lines\" *ngIf=\"posting\" ></ion-spinner>\n      Publicar\n    </ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typeEvent/type-event-form/type-event-form.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typeEvent/type-event-form/type-event-form.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Tipo de evento</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceTypeEvent.errorsForm.clear()\" >\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"typeEvent.name\" name=\"name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceTypeEvent.errorsForm.get('name') }}</div>\n\n\n    <ion-item>\n      <ion-label position=\"floating\" >Path icono local</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"typeEvent.icon\" name=\"icon\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceTypeEvent.errorsForm.get('icon') }}</div>\n   \n    <ion-button type=\"submit\"  expand=\"block\">Guardar</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-form/user-form.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-form/user-form.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{user.id ? 'Modificar' : 'Nuevo Usuario'}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"close()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form (ngSubmit)=\"submit()\"  (keyup)=\"serviceUser.errorsForm.clear()\" >\n\n \n    <div>\n      <ion-img  [src]=\"photoService.photo.getPath()\" ></ion-img>\n      <div class=\"ion-text-center\">\n        <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('photo') }}</div>\n        <ion-button   size=\"small\" color=\"tertiary\" (click)=\"photoService.addOneNewToGallery()\">{{photoService.isLoadPthoto() ? 'Modificar Foto' :'Seleccionar Foto' }}</ion-button>\n      </div>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user.first_name\" name=\"first_name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('first_name') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Apellido</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user.last_name\" name=\"last_name\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('last_name') }}</div>\n\n    <ion-item>\n      <ion-label position=\"floating\" >Email</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('email') }}</div>\n\n    <ion-item *ngIf=\"!id\">\n      <ion-label position=\"floating\" >Contraseña</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('password') }}</div>\n\n    <ion-item *ngIf=\"!id\">\n      <ion-label position=\"floating\" >Confirmar Contraseña</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"user.confirm_password\" name=\"confirm_password\"></ion-input>\n    </ion-item>\n    <div style=\"color: red; padding-top: 0.2rem\" >{{ serviceUser.errorsForm.get('confirm_password') }}</div>\n   \n    <ion-button type=\"submit\"  expand=\"block\" [disabled]=\"saving\">\n      <ion-spinner name=\"lines\" *ngIf=\"saving\" ></ion-spinner>\n      Guardar\n    </ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/util/list-redirect/list-redirect.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/util/list-redirect/list-redirect.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n      \n    <ion-list-header *ngIf=\"list.length == 0\"  color=\"tertiary\">\n      <ion-label>Sin Opciones</ion-label>\n    </ion-list-header>\n \n    <ion-item *ngFor=\"let item of list\"  (click)=\"goTo(item)\">\n      <span>\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </span>\n      <ion-label >\n        <h3>{{item.name}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/explore-container/explore-container.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./explore-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./explore-container.component.scss */ "./src/app/explore-container/explore-container.component.scss")).default]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "./src/app/explore-container/explore-container.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "./src/app/explore-container/explore-container.component.ts");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "./src/app/pages/home/games/games.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/home/games/games.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".team-list {\n  display: block;\n}\n\n.vs {\n  width: 6%;\n}\n\n.game {\n  width: 100%;\n  /*background-image: url(/assets/images/img_fondo_part.png);\n  color: white;*/\n  padding: 10px;\n  background-color: white;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  font-size: small;\n}\n\n.team {\n  display: flex;\n  align-items: center;\n  width: 47%;\n  flex-flow: column-reverse;\n}\n\n.team-name {\n  margin-left: 15px;\n  margin-right: 15px;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.img-team {\n  border-radius: 50%;\n  background-position: center center;\n  width: 30px;\n  height: 30px;\n}\n\n.contenedor {\n  margin: 10px auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: -webkit-center;\n}\n\n.date {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9nYW1lcy9nYW1lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0E7Z0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBR0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQURKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvZ2FtZXMvZ2FtZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tbGlzdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi52c3tcbiAgICB3aWR0aDogNiU7XG59XG5cbi5nYW1le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ltZ19mb25kb19wYXJ0LnBuZyk7XG4gICAgY29sb3I6IHdoaXRlOyovXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcblxuXG4gICAgZm9udC1zaXplOiBzbWFsbDtcblxufVxuXG4udGVhbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQ3JTtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xuXG5cbn1cblxuLnRlYW0tbmFtZXtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG59XG5cbi5pbWctdGVhbXtcbiAgICBib3JkZXItcmFkaXVzOjUwJTsgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyOyBcbiAgICB3aWR0aDozMHB4OyBcbiAgICBoZWlnaHQ6MzBweDtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmRhdGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/results/results.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/home/results/results.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".game {\n  color: #FFF;\n  width: 100%;\n  padding: 3px;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px white, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n}\n\n.team {\n  position: relative;\n  background-image: url('img_fondo_res4.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 10px;\n  width: 100%;\n  padding-top: 15px;\n}\n\n.name-team {\n  display: inline-block;\n  width: 70%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.goals-team {\n  display: inline-block;\n  width: 30%;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-right: 20px;\n}\n\n.comment {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9yZXN1bHRzL3Jlc3VsdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0dBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9yZXN1bHRzL3Jlc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWV7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTNlbSAzZW0gcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAgMCAycHggd2hpdGUsIDAuM2VtIDAuM2VtIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi50ZWFte1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbWdfZm9uZG9fcmVzNC5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ubmFtZS10ZWFte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuXG4uZ29hbHMtdGVhbXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNvbW1lbnR7XG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICB0b3AgOjEwcHg7XG4gICAgcmlnaHQgOiAxMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/pages/publications/show/show.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/pages/publications/show/show.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".publication-user {\n  display: flex;\n}\n.publication-user .user {\n  display: block;\n}\n.publication-user .user .name {\n  margin-top: 5px;\n  font-size: medium;\n}\n.publication-user .user .date {\n  margin-left: 5px;\n  font-size: xx-small;\n}\n.publication-text {\n  margin: 10px;\n  margin-left: 15px;\n  font-size: medium;\n}\n.publication-image {\n  align-self: auto;\n}\n.separator {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-bottom: solid 1px rgba(63, 62, 62, 0.671);\n}\n.sgm-likes {\n  --ion-color-base: #e73636 !important;\n}\n.sgm-comments {\n  --ion-color-base: #277ecf !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMvcHVibGljYXRpb25zL3Nob3cvc2hvdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7QUFDUjtBQUNRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ1o7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFBWjtBQU1BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFISjtBQU1BO0VBQ0ksZ0JBQUE7QUFISjtBQU1BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FBSEo7QUFNQTtFQUNJLG9DQUFBO0FBSEo7QUFNQTtFQUNJLG9DQUFBO0FBSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy9wdWJsaWNhdGlvbnMvc2hvdy9zaG93LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdWJsaWNhdGlvbi11c2Vye1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAudXNlcntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTs7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmRhdGV7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiB4eC1zbWFsbDtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4ucHVibGljYXRpb24tdGV4dHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5wdWJsaWNhdGlvbi1pbWFnZXtcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xufVxuXG4uc2VwYXJhdG9ye1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSg2MywgNjIsIDYyLCAwLjY3MSk7XG59XG5cbi5zZ20tbGlrZXN7XG4gICAgLS1pb24tY29sb3ItYmFzZTogI2U3MzYzNiAhaW1wb3J0YW50O1xufVxuXG4uc2dtLWNvbW1lbnRze1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMyNzdlY2YgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pages/publications/show/show.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/pages/publications/show/show.page.ts ***!
  \************************************************************/
/*! exports provided: ShowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPage", function() { return ShowPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/transfer-data.service */ "./src/app/services/transfer-data.service.ts");







let ShowPage = class ShowPage {
    constructor(request, navParams, util, viewCtrl, transferData) {
        this.request = request;
        this.navParams = navParams;
        this.util = util;
        this.viewCtrl = viewCtrl;
        this.transferData = transferData;
        this.publicationModel = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('Publication', request);
        this.id = navParams.get('id');
        this.segment = navParams.get('segment');
        console.log('publication show', this.id);
        let result = transferData.getData('test');
        console.log('get data transfer in ShowPage', result);
    }
    ngOnInit() {
        this.init();
    }
    init($event = null) {
        this.publicationModel.api_functionModel(this.id, 'pageShow').subscribe(response => {
            console.log(response);
            this.publication = response['data'];
            if ($event)
                $event.target.complete();
        });
    }
    close() {
        this.publication.comments_count = this.publication.comments.length;
        this.publication.likes_count = this.publication.likes.length;
        this.viewCtrl.dismiss({
            publication: this.publication,
        });
    }
    segmentChanged($event) {
        console.log('Segment changed', $event);
        this.segment = $event.detail.value;
    }
    updateComments($event, publication) {
        publication.comments = $event;
    }
};
ShowPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_transfer_data_service__WEBPACK_IMPORTED_MODULE_6__["TransferDataService"] }
];
ShowPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./show.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/publications/show/show.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./show.page.scss */ "./src/app/pages/pages/publications/show/show.page.scss")).default]
    })
], ShowPage);



/***/ }),

/***/ "./src/app/pages/player/player-form/player-form.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/player/player-form/player-form.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci9wbGF5ZXItZm9ybS9wbGF5ZXItZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/player/player-form/player-form.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/player/player-form/player-form.page.ts ***!
  \**************************************************************/
/*! exports provided: PlayerFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerFormPage", function() { return PlayerFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/modelImage */ "./src/app/api/models/modelImage.ts");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../search/search.page */ "./src/app/pages/search/search.page.ts");








let PlayerFormPage = class PlayerFormPage {
    constructor(request, dialogService, viewCtrl, navParams, modalController) {
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.modalController = modalController;
        this.servicePosition = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('Position', request);
        this.servicePlayer = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('Player', request);
        console.log('ver');
        this.id = navParams.get('id');
        this.team_id = navParams.get('team_id');
        this.photoModel = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__["ModelImage"](request, viewCtrl);
        this.photoModel.setAspectRatioCrop('1 / 1');
        this.photoModel.init('images/players/profile/', true, 'assets/images/jugador.png');
    }
    ngOnInit() {
        this.initObject();
        this.servicePosition.api_all();
    }
    initObject() {
        this.player = {
            'name': '',
            'nick': '',
            'birth_date': '',
            'number': 1,
            'height': 0.0,
            'weight': 0.0,
            'position_id': '',
            'team_id': this.team_id,
            'photo_id': ''
        };
        if (this.id) {
            this.servicePlayer.api_find(this.id).subscribe(data => {
                if (data['status'] == 'success') {
                    this.player = data['Player'];
                    this.photoModel.setImage(this.player.photo);
                }
            });
        }
    }
    submit() {
        if (this.photoModel.isLoadPthoto()) {
            this.savePhoto();
            return;
        }
        this.savePlayer();
    }
    dismiss(player) {
        this.viewCtrl.dismiss({
            player: player,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    savePhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.photoModel.uploadImage().subscribe(data => {
                if (data['status'] == 'success') {
                    let image = data['Image'];
                    this.player.photo_id = image.id;
                    this.savePlayer();
                }
            }, error => {
                this.dialogService.showToast('Error al subir Portada', 'Error', 'danger');
                //this.submit();
            });
        });
    }
    savePlayer() {
        if (this.player.id) {
            this.servicePlayer.api_update(this.player).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Player']);
                }
            });
        }
        else {
            this.servicePlayer.api_create(this.player).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Player']);
                }
            });
        }
    }
    selectUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //e.preventDefault();
            console.log('Add admins');
            const modal = yield this.modalController.create({
                component: _search_search_page__WEBPACK_IMPORTED_MODULE_7__["SearchPage"],
                componentProps: {
                    cancellable: false,
                    model: 'User',
                    function: 'searchUser',
                    multiple: false
                }
            });
            modal.onDidDismiss().then(data => {
                const user = data.data['item'];
                this.player.user_id = user.id;
                this.player.email = user.text;
            });
            return yield modal.present();
        });
    }
};
PlayerFormPage.ctorParameters = () => [
    { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
PlayerFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/player/player-form/player-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player-form.page.scss */ "./src/app/pages/player/player-form/player-form.page.scss")).default]
    })
], PlayerFormPage);



/***/ }),

/***/ "./src/app/pages/position/position-form/position-form.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/position/position-form/position-form.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc2l0aW9uL3Bvc2l0aW9uLWZvcm0vcG9zaXRpb24tZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/position/position-form/position-form.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/position/position-form/position-form.page.ts ***!
  \********************************************************************/
/*! exports provided: PositionFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionFormPage", function() { return PositionFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");







let PositionFormPage = class PositionFormPage {
    constructor(request, dialogService, viewCtrl, photoService, navParams) {
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.photoService = photoService;
        this.servicePosition = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_5__["Model"]('Position', request);
        this.id = navParams.get('id');
    }
    ngOnInit() {
        this.initObject();
    }
    initObject() {
        this.posicion = { name: '' };
        if (this.id) {
            this.servicePosition.api_find(this.id).subscribe(data => {
                if (data['status'] == 'success') {
                    this.posicion = data['Position'];
                }
            });
        }
    }
    submit() {
        if (this.posicion.id) {
            this.servicePosition.api_update(this.posicion).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Position']);
                }
            });
        }
        else {
            this.servicePosition.api_create(this.posicion).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Position']);
                }
            });
        }
    }
    dismiss(posicion) {
        this.viewCtrl.dismiss({
            posicion: posicion,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
};
PositionFormPage.ctorParameters = () => [
    { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
PositionFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-position-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./position-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/position/position-form/position-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./position-form.page.scss */ "./src/app/pages/position/position-form/position-form.page.scss")).default]
    })
], PositionFormPage);



/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpY2F0aW9ucy9mb3JtLXB1YmxpY2F0aW9uL2Zvcm0tcHVibGljYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/publications/form-publication/form-publication.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/publications/form-publication/form-publication.page.ts ***!
  \******************************************************************************/
/*! exports provided: FormPublicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPublicationPage", function() { return FormPublicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/models/modelImage */ "./src/app/api/models/modelImage.ts");
/* harmony import */ var src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth-user.service */ "./src/app/services/auth-user.service.ts");









let FormPublicationPage = class FormPublicationPage {
    constructor(request, dialogService, viewCtrl, photoService, navParams, authUser) {
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.photoService = photoService;
        this.authUser = authUser;
        this.posting = false;
        this.myDateFilter = (d) => {
            const day = d.getDay();
            return day == 6;
        };
        this.photoModel = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_7__["ModelImage"](request, viewCtrl);
        this.photoModel.setAspectRatioCrop('none');
        this.servicePublication = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_6__["Model"]('Publication', request);
        //this.serviceTeam.setModel('Team');
        this.id = navParams.get('id');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield this.authUser.getUser();
            this.initObject();
        });
    }
    initObject() {
        this.publication = {
            text: '',
            user_id: this.user.id
        };
        if (this.id) {
            this.servicePublication.api_find(this.id).subscribe(data => {
                if (data['status'] == 'success') {
                    this.publication = data['Publication'];
                }
            });
        }
    }
    submit() {
        if (this.photoModel.isLoadPthoto()) {
            this.publication.image = this.photoModel.image;
        }
        this.posting = true;
        if (this.publication.id) {
            this.servicePublication.api_update(this.publication).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    console.log(data);
                    this.dismiss(data['Publication']);
                }
                this.posting = false;
            }, error => {
                this.posting = false;
            });
        }
        else {
            this.servicePublication.api_create(this.publication).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['Publication']);
                }
                this.posting = false;
            }, error => {
                this.posting = false;
            });
        }
    }
    dismiss(publication) {
        this.viewCtrl.dismiss({
            publication: publication,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
    print() {
        console.log(this.publication);
    }
};
FormPublicationPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_services_auth_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthUserService"] }
];
FormPublicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-publication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-publication.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/form-publication/form-publication.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-publication.page.scss */ "./src/app/pages/publications/form-publication/form-publication.page.scss")).default]
    })
], FormPublicationPage);



/***/ }),

/***/ "./src/app/pages/typeEvent/type-event-form/type-event-form.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/typeEvent/type-event-form/type-event-form.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R5cGVFdmVudC90eXBlLWV2ZW50LWZvcm0vdHlwZS1ldmVudC1mb3JtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/typeEvent/type-event-form/type-event-form.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/typeEvent/type-event-form/type-event-form.page.ts ***!
  \*************************************************************************/
/*! exports provided: TypeEventFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeEventFormPage", function() { return TypeEventFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let TypeEventFormPage = class TypeEventFormPage {
    constructor(request, dialogService, viewCtrl, navParams) {
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.serviceTypeEvent = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_2__["Model"]('TypeEvent', request);
        console.log('ver');
        this.id = navParams.get('id');
    }
    ngOnInit() {
        this.initObject();
    }
    initObject() {
        this.typeEvent = { 'name': '', 'icon': '' };
        if (this.id) {
            this.serviceTypeEvent.api_find(this.id).subscribe(data => {
                if (data['status'] == 'success') {
                    this.typeEvent = data['TypeEvent'];
                }
            });
        }
    }
    submit() {
        if (this.typeEvent.id) {
            this.serviceTypeEvent.api_update(this.typeEvent).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['TypeEvent']);
                }
            });
        }
        else {
            this.serviceTypeEvent.api_create(this.typeEvent).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['TypeEvent']);
                }
            });
        }
    }
    dismiss(typeEvent) {
        this.viewCtrl.dismiss({
            typeEvent: typeEvent,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
};
TypeEventFormPage.ctorParameters = () => [
    { type: src_app_api_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] }
];
TypeEventFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-event-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./type-event-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typeEvent/type-event-form/type-event-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./type-event-form.page.scss */ "./src/app/pages/typeEvent/type-event-form/type-event-form.page.scss")).default]
    })
], TypeEventFormPage);



/***/ }),

/***/ "./src/app/pages/user/user-form/user-form.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/user/user-form/user-form.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci1mb3JtL3VzZXItZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user/user-form/user-form.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user/user-form/user-form.page.ts ***!
  \********************************************************/
/*! exports provided: UserFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormPage", function() { return UserFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request.service */ "./src/app/api/request.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/models/model */ "./src/app/api/models/model.ts");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/models/modelImage */ "./src/app/api/models/modelImage.ts");







let UserFormPage = class UserFormPage {
    constructor(request, dialogService, viewCtrl, navParams) {
        this.request = request;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.saving = false;
        this.serviceUser = new src_app_api_models_model__WEBPACK_IMPORTED_MODULE_4__["Model"]('User', request);
        this.photoService = new src_app_api_models_modelImage__WEBPACK_IMPORTED_MODULE_6__["ModelImage"](request, viewCtrl);
        this.photoService.init('images/users/profile/', true, 'assets/images/profile.jpg');
        this.id = navParams.get('id');
    }
    ngOnInit() {
        this.initObject();
    }
    initObject() {
        this.user = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
            role: 'user'
        };
        if (this.id) {
            this.serviceUser.api_find(this.id).subscribe(data => {
                if (data['status'] == 'success') {
                    this.user = data['User'];
                    this.photoService.setImage(this.user.photo);
                    console.log(this.photoService.photo.getPath());
                }
            });
        }
    }
    submit() {
        this.saving = true;
        if (this.photoService.isLoadPthoto) {
            this.user.photo = this.photoService.photo;
        }
        if (this.user.id) {
            this.serviceUser.api_update(this.user).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['User']);
                }
                this.saving = false;
            }, error => {
                this.saving = false;
            });
        }
        else {
            this.serviceUser.api_create(this.user).subscribe(data => {
                var _a;
                if (data['status'] == 'success') {
                    this.dialogService.showToast((_a = data['msjSuccess']) !== null && _a !== void 0 ? _a : 'Registrado');
                    this.dismiss(data['User']);
                }
                this.saving = false;
            }, error => {
                this.saving = false;
            });
        }
    }
    dismiss(user) {
        this.viewCtrl.dismiss({
            user: user,
        });
    }
    close() {
        this.viewCtrl.dismiss();
    }
};
UserFormPage.ctorParameters = () => [
    { type: _api_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
UserFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user-form/user-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-form.page.scss */ "./src/app/pages/user/user-form/user-form.page.scss")).default]
    })
], UserFormPage);



/***/ }),

/***/ "./src/app/pages/util/list-redirect/list-redirect.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/util/list-redirect/list-redirect.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3V0aWwvbGlzdC1yZWRpcmVjdC9saXN0LXJlZGlyZWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/util/list-redirect/list-redirect.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/util/list-redirect/list-redirect.page.ts ***!
  \****************************************************************/
/*! exports provided: ListRedirectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRedirectPage", function() { return ListRedirectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/util/dialog.service */ "./src/app/api/util/dialog.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ListRedirectPage = class ListRedirectPage {
    constructor(dialogService, viewCtrl, navParams, navCtrl) {
        var _a, _b;
        this.dialogService = dialogService;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.list = (_a = navParams.get('list')) !== null && _a !== void 0 ? _a : [];
        this.title = (_b = navParams.get('title')) !== null && _b !== void 0 ? _b : 'Opciones';
    }
    ngOnInit() {
    }
    dimiss() {
        this.viewCtrl.dismiss();
    }
    goTo(item) {
        console.log('goTo');
        this.navCtrl.navigateForward(item.route);
        this.viewCtrl.dismiss();
    }
};
ListRedirectPage.ctorParameters = () => [
    { type: src_app_api_util_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ListRedirectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-redirect',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-redirect.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/util/list-redirect/list-redirect.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-redirect.page.scss */ "./src/app/pages/util/list-redirect/list-redirect.page.scss")).default]
    })
], ListRedirectPage);



/***/ }),

/***/ "./src/app/services/transfer-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/transfer-data.service.ts ***!
  \***************************************************/
/*! exports provided: TransferDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferDataService", function() { return TransferDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransferDataService = class TransferDataService {
    constructor() {
        this.data = {};
    }
    setData(key, value) {
        this.data[key] = value;
    }
    getData(key) {
        if (this.data.hasOwnProperty(key))
            return this.data[key];
        return null;
    }
    clear(key = null) {
        if (this.data.hasOwnProperty(key)) {
            delete this.data[key];
            return;
        }
        this.data = {};
    }
};
TransferDataService.ctorParameters = () => [];
TransferDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TransferDataService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map