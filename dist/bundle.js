/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bridge/CaptionDiaplay.ts":
/*!**************************************!*\
  !*** ./src/bridge/CaptionDiaplay.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CaptionDisplay = /** @class */ (function () {
    function CaptionDisplay() {
    }
    CaptionDisplay.prototype.title = function (draft) {
        console.log("title", draft.getTitle());
    };
    CaptionDisplay.prototype.author = function (draft) {
        console.log("author", draft.getAuthor());
    };
    CaptionDisplay.prototype.content = function (draft) {
        var content = draft.getContent();
        console.log("content");
        content.forEach(function (e) { return console.log(e); });
    };
    return CaptionDisplay;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaptionDisplay);


/***/ }),

/***/ "./src/bridge/CharactersCounter.ts":
/*!*****************************************!*\
  !*** ./src/bridge/CharactersCounter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draft */ "./src/bridge/Draft.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CharactersCounter = /** @class */ (function (_super) {
    __extends(CharactersCounter, _super);
    function CharactersCounter(title, author, content) {
        return _super.call(this, title, author, content) || this;
    }
    CharactersCounter.prototype.getCharactersCount = function () {
        var count = 0;
        count += this.getTitle().length;
        count += this.getAuthor.length;
        this.getContent().forEach(function (e) { return (count += e.length); });
        return count;
    };
    return CharactersCounter;
}(_Draft__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharactersCounter);


/***/ }),

/***/ "./src/bridge/Draft.ts":
/*!*****************************!*\
  !*** ./src/bridge/Draft.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Draft = /** @class */ (function () {
    function Draft(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
    Draft.prototype.getTitle = function () {
        return this.title;
    };
    Draft.prototype.getAuthor = function () {
        return this.author;
    };
    Draft.prototype.getContent = function () {
        return this.content;
    };
    Draft.prototype.print = function (display) {
        display.title(this);
        display.author(this);
        display.content(this);
    };
    return Draft;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draft);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/bridge/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaptionDiaplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptionDiaplay */ "./src/bridge/CaptionDiaplay.ts");
/* harmony import */ var _CharactersCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharactersCounter */ "./src/bridge/CharactersCounter.ts");


var title = "제목";
var author = "작가";
var content = ["내용1", "내용2", "내용3"];
// const draft = new Draft(title, author, content);
var draft = new _CharactersCounter__WEBPACK_IMPORTED_MODULE_1__["default"](title, author, content);
// const display = new SimpleDisplay();
var display = new _CaptionDiaplay__WEBPACK_IMPORTED_MODULE_0__["default"]();
draft.print(display);
console.log("전체 문자 수", draft.getCharactersCount());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25CLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFdEMsbURBQW1EO0FBQ25ELElBQU0sS0FBSyxHQUFHLElBQUksMERBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUU1RCx1Q0FBdUM7QUFDdkMsSUFBTSxPQUFPLEdBQUcsSUFBSSx1REFBYyxFQUFFLENBQUM7QUFFckMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYnJpZGdlL0NhcHRpb25EaWFwbGF5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2JyaWRnZS9DaGFyYWN0ZXJzQ291bnRlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9icmlkZ2UvRHJhZnQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9icmlkZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc3BsYXkgZnJvbSBcIi4vRGlzcGxheVwiO1xuaW1wb3J0IERyYWZ0IGZyb20gXCIuL0RyYWZ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcHRpb25EaXNwbGF5IGltcGxlbWVudHMgRGlzcGxheSB7XG4gIHRpdGxlKGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwidGl0bGVcIiwgZHJhZnQuZ2V0VGl0bGUoKSk7XG4gIH1cbiAgYXV0aG9yKGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwiYXV0aG9yXCIsIGRyYWZ0LmdldEF1dGhvcigpKTtcbiAgfVxuICBjb250ZW50KGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkcmFmdC5nZXRDb250ZW50KCk7XG4gICAgY29uc29sZS5sb2coXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuZm9yRWFjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xuICB9XG59XG4iLCJpbXBvcnQgRHJhZnQgZnJvbSBcIi4vRHJhZnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyc0NvdW50ZXIgZXh0ZW5kcyBEcmFmdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb250ZW50OiBzdHJpbmdbXSkge1xuICAgIHN1cGVyKHRpdGxlLCBhdXRob3IsIGNvbnRlbnQpO1xuICB9XG5cbiAgZ2V0Q2hhcmFjdGVyc0NvdW50KCk6IG51bWJlciB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGNvdW50ICs9IHRoaXMuZ2V0VGl0bGUoKS5sZW5ndGg7XG4gICAgY291bnQgKz0gdGhpcy5nZXRBdXRob3IubGVuZ3RoO1xuICAgIHRoaXMuZ2V0Q29udGVudCgpLmZvckVhY2goKGUpID0+IChjb3VudCArPSBlLmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG59XG4iLCJpbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9EaXNwbGF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgYXV0aG9yOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmdbXVxuICApIHt9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cbiAgZ2V0QXV0aG9yKCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhvcjtcbiAgfVxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBwcmludChkaXNwbGF5OiBEaXNwbGF5KTogdm9pZCB7XG4gICAgZGlzcGxheS50aXRsZSh0aGlzKTtcbiAgICBkaXNwbGF5LmF1dGhvcih0aGlzKTtcbiAgICBkaXNwbGF5LmNvbnRlbnQodGhpcyk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhcHRpb25EaXNwbGF5IGZyb20gXCIuL0NhcHRpb25EaWFwbGF5XCI7XG5pbXBvcnQgQ2hhcmFjdGVyc0NvdW50ZXIgZnJvbSBcIi4vQ2hhcmFjdGVyc0NvdW50ZXJcIjtcbmltcG9ydCBEcmFmdCBmcm9tIFwiLi9EcmFmdFwiO1xuaW1wb3J0IFNpbXBsZURpc3BsYXkgZnJvbSBcIi4vU0ltcGxlRGlhcGxheVwiO1xuXG5jb25zdCB0aXRsZSA9IFwi7KCc66qpXCI7XG5jb25zdCBhdXRob3IgPSBcIuyekeqwgFwiO1xuY29uc3QgY29udGVudCA9IFtcIuuCtOyaqTFcIiwgXCLrgrTsmqkyXCIsIFwi64K07JqpM1wiXTtcblxuLy8gY29uc3QgZHJhZnQgPSBuZXcgRHJhZnQodGl0bGUsIGF1dGhvciwgY29udGVudCk7XG5jb25zdCBkcmFmdCA9IG5ldyBDaGFyYWN0ZXJzQ291bnRlcih0aXRsZSwgYXV0aG9yLCBjb250ZW50KTtcblxuLy8gY29uc3QgZGlzcGxheSA9IG5ldyBTaW1wbGVEaXNwbGF5KCk7XG5jb25zdCBkaXNwbGF5ID0gbmV3IENhcHRpb25EaXNwbGF5KCk7XG5cbmRyYWZ0LnByaW50KGRpc3BsYXkpO1xuXG5jb25zb2xlLmxvZyhcIuyghOyytCDrrLjsnpAg7IiYXCIsIGRyYWZ0LmdldENoYXJhY3RlcnNDb3VudCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==