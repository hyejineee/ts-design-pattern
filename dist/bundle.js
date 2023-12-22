/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/proxy/ProxyImage.ts":
/*!*********************************!*\
  !*** ./src/proxy/ProxyImage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RealImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RealImage */ "./src/proxy/RealImage.ts");

var ProxyImage = /** @class */ (function () {
    function ProxyImage(title, url, parent) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.image = null;
        this.domLayout = null;
        this.domTitle = null;
        this.domLayout = document.createElement("div");
        this.domLayout.classList.add("layout");
        this.parent.append(this.domLayout);
        this.domTitle = document.createElement("div");
        this.domTitle.classList.add("title-proxy");
        this.domTitle.innerHTML = "<span>".concat(this.title, "</span><br/><span>click to load</span>");
        this.domLayout.append(this.domTitle);
    }
    ProxyImage.prototype.append = function () {
        var _this = this;
        if (this.image)
            return;
        this.domLayout.addEventListener("click", function () {
            _this.domLayout.style.border = "none";
            _this.domLayout.innerHTML = "";
            _this.image = new _RealImage__WEBPACK_IMPORTED_MODULE_0__["default"](_this.title, _this.url, _this.domLayout);
            _this.image.append(); // 주요 비즈니스 로직
        });
    };
    return ProxyImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProxyImage);


/***/ }),

/***/ "./src/proxy/RealImage.ts":
/*!********************************!*\
  !*** ./src/proxy/RealImage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RealImage = /** @class */ (function () {
    function RealImage(title, url, parent) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.domLayout = null;
        this.domTitle = null;
        this.domImage = null;
        this.domLoading = null;
        this.domLayout = document.createElement("div");
        this.domLayout.classList.add("layout");
        this.parent.append(this.domLayout);
        this.domTitle = document.createElement("div");
        this.domTitle.classList.add("title");
        this.domTitle.innerText = this.title;
        this.domLoading = document.createElement("div");
        this.domLoading.classList.add("loading");
        this.domLoading.innerText = "Loading...";
    }
    RealImage.prototype.append = function () {
        var _this = this;
        if (this.domImage)
            return;
        this.domImage = new Image();
        this.domLayout.append(this.domLoading);
        this.domImage.src = this.url;
        this.domImage.onload = function () {
            setTimeout(function () {
                _this.domLayout.removeChild(_this.domLoading);
                _this.domLayout.append(_this.domImage);
            }, 3000);
        };
    };
    return RealImage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RealImage);


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
/*!****************************!*\
  !*** ./src/proxy/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProxyImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProxyImage */ "./src/proxy/ProxyImage.ts");

var items = [
    [
        "설산야경",
        "https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp",
    ],
    [
        "외로운늑대",
        "https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp",
    ],
    [
        "강변황혼",
        "https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp",
    ],
];
var domList = document.querySelector(".list");
items.forEach(function (e) {
    var title = e[0];
    var url = e[1];
    var image = new _ProxyImage__WEBPACK_IMPORTED_MODULE_0__["default"](title, url, domList);
    image.append();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4RTtJQUNEO1FBQ0UsT0FBTztRQUNQLGlFQUFpRTtLQUNsRTtJQUNEO1FBQ0UsTUFBTTtRQUNOLHFFQUFxRTtLQUN0RTtDQUNGLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWhELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO0lBQ2QsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqQixJQUFNLEtBQUssR0FBRyxJQUFJLG1EQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9wcm94eS9Qcm94eUltYWdlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3Byb3h5L1JlYWxJbWFnZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3Byb3h5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuaW1wb3J0IFJlYWxJbWFnZSBmcm9tIFwiLi9SZWFsSW1hZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3h5SW1hZ2UgaW1wbGVtZW50cyBJbWFnZSB7XG4gIHByaXZhdGUgaW1hZ2U6IFJlYWxJbWFnZSA9IG51bGw7XG4gIHByaXZhdGUgZG9tTGF5b3V0OiBIVE1MRGl2RWxlbWVudCA9IG51bGw7XG4gIHByaXZhdGUgZG9tVGl0bGU6IEhUTUxEaXZFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZyxcbiAgICBwcml2YXRlIHBhcmVudDogRWxlbWVudFxuICApIHtcbiAgICB0aGlzLmRvbUxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5kb21MYXlvdXQuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy5kb21MYXlvdXQpO1xuXG4gICAgdGhpcy5kb21UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5kb21UaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGUtcHJveHlcIik7XG4gICAgdGhpcy5kb21UaXRsZS5pbm5lckhUTUwgPSBgPHNwYW4+JHt0aGlzLnRpdGxlfTwvc3Bhbj48YnIvPjxzcGFuPmNsaWNrIHRvIGxvYWQ8L3NwYW4+YDtcbiAgICB0aGlzLmRvbUxheW91dC5hcHBlbmQodGhpcy5kb21UaXRsZSk7XG4gIH1cblxuICBhcHBlbmQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW1hZ2UpIHJldHVybjtcblxuICAgIHRoaXMuZG9tTGF5b3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvbUxheW91dC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgIHRoaXMuZG9tTGF5b3V0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICB0aGlzLmltYWdlID0gbmV3IFJlYWxJbWFnZSh0aGlzLnRpdGxlLCB0aGlzLnVybCwgdGhpcy5kb21MYXlvdXQpO1xuXG4gICAgICB0aGlzLmltYWdlLmFwcGVuZCgpOyAvLyDso7zsmpQg67mE7KaI64uI7IqkIOuhnOyngVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWxJbWFnZSBpbXBsZW1lbnRzIEltYWdlIHtcbiAgcHJpdmF0ZSBkb21MYXlvdXQ6IEhUTUxEaXZFbGVtZW50ID0gbnVsbDtcbiAgcHJpdmF0ZSBkb21UaXRsZTogSFRNTERpdkVsZW1lbnQgPSBudWxsO1xuICBwcml2YXRlIGRvbUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbnVsbDtcbiAgcHJpdmF0ZSBkb21Mb2FkaW5nOiBIVE1MRGl2RWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5kb21MYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tTGF5b3V0LmNsYXNzTGlzdC5hZGQoXCJsYXlvdXRcIik7XG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuZG9tTGF5b3V0KTtcblxuICAgIHRoaXMuZG9tVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuZG9tVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRoaXMuZG9tVGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcblxuICAgIHRoaXMuZG9tTG9hZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5kb21Mb2FkaW5nLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuICAgIHRoaXMuZG9tTG9hZGluZy5pbm5lclRleHQgPSBcIkxvYWRpbmcuLi5cIjtcbiAgfVxuXG4gIGFwcGVuZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kb21JbWFnZSkgcmV0dXJuO1xuICAgIHRoaXMuZG9tSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgIHRoaXMuZG9tTGF5b3V0LmFwcGVuZCh0aGlzLmRvbUxvYWRpbmcpO1xuICAgIHRoaXMuZG9tSW1hZ2Uuc3JjID0gdGhpcy51cmw7XG5cbiAgICB0aGlzLmRvbUltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRvbUxheW91dC5yZW1vdmVDaGlsZCh0aGlzLmRvbUxvYWRpbmcpO1xuICAgICAgICB0aGlzLmRvbUxheW91dC5hcHBlbmQodGhpcy5kb21JbWFnZSk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm94eUltYWdlIGZyb20gXCIuL1Byb3h5SW1hZ2VcIjtcbmltcG9ydCBSZWFsSW1hZ2UgZnJvbSBcIi4vUmVhbEltYWdlXCI7XG5cbmNvbnN0IGl0ZW1zID0gW1xuICBbXG4gICAgXCLshKTsgrDslbzqsr1cIixcbiAgICBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3Nub3ctbW91bnRhaW4tbmlnaHQtd2FsbHBhcGVyLTgxMzA1X3c2MzUud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLsmbjroZzsmrTripHrjIBcIixcbiAgICBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL2ZhbnRhc3ktd29ybGQtd2FsbHBhcGVyLTI5ODk3X3c2MzUud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLqsJXrs4DtmantmLxcIixcbiAgICBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3N1bnNldC1taW5pbWFsaXN0LXdhbGxwYXBlci04MTA3Ml93NjM1LndlYnBcIixcbiAgXSxcbl07XG5cbmNvbnN0IGRvbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG5cbml0ZW1zLmZvckVhY2goKGUpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBlWzBdO1xuICBjb25zdCB1cmwgPSBlWzFdO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IFByb3h5SW1hZ2UodGl0bGUsIHVybCwgZG9tTGlzdCk7XG4gIGltYWdlLmFwcGVuZCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=