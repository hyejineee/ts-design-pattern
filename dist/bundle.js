/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adapter/Animal.ts":
/*!*******************************!*\
  !*** ./src/adapter/Animal.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);


/***/ }),

/***/ "./src/adapter/Cat.ts":
/*!****************************!*\
  !*** ./src/adapter/Cat.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
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

var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sound = function () {
        console.log(this.name, "야옹");
    };
    return Cat;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cat);


/***/ }),

/***/ "./src/adapter/Dog.ts":
/*!****************************!*\
  !*** ./src/adapter/Dog.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
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

var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sound = function () {
        console.log(this.name, "멍멍");
    };
    return Dog;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dog);


/***/ }),

/***/ "./src/adapter/Tiger.ts":
/*!******************************!*\
  !*** ./src/adapter/Tiger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Object.defineProperty(Tiger.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Tiger.prototype.roar = function () {
        return "어흥";
    };
    return Tiger;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tiger);


/***/ }),

/***/ "./src/adapter/TigerAdapter.ts":
/*!*************************************!*\
  !*** ./src/adapter/TigerAdapter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
/* harmony import */ var _Tiger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tiger */ "./src/adapter/Tiger.ts");
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


var TigerAdapter = /** @class */ (function (_super) {
    __extends(TigerAdapter, _super);
    function TigerAdapter(name) {
        var _this = _super.call(this, name) || this;
        _this.tiger = new _Tiger__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this.tiger.name = name;
        return _this;
    }
    TigerAdapter.prototype.sound = function () {
        console.log(this.name, this.tiger.roar());
    };
    return TigerAdapter;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TigerAdapter);


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
/*!******************************!*\
  !*** ./src/adapter/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cat */ "./src/adapter/Cat.ts");
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dog */ "./src/adapter/Dog.ts");
/* harmony import */ var _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TigerAdapter */ "./src/adapter/TigerAdapter.ts");



var list = Array();
list.push(new _Dog__WEBPACK_IMPORTED_MODULE_1__["default"]("백구"));
list.push(new _Dog__WEBPACK_IMPORTED_MODULE_1__["default"]("시바"));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__["default"]("고양"));
// const tiger = new Tiger();
// tiger.name = "호랭";
// list.push(tiger);
list.push(new _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]("호랭"));
list.forEach(function (e) { return e.sound(); });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztBQUVsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2FkYXB0ZXIvQW5pbWFsLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2FkYXB0ZXIvQ2F0LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2FkYXB0ZXIvRG9nLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2FkYXB0ZXIvVGlnZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWRhcHRlci9UaWdlckFkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuYW1lOiBzdHJpbmcpIHt9XG5cbiAgYWJzdHJhY3Qgc291bmQoKTogdm9pZDtcbn1cbiIsImltcG9ydCBBbmltYWwgZnJvbSBcIi4vQW5pbWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdCBleHRlbmRzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG5cbiAgc291bmQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2codGhpcy5uYW1lLCBcIuyVvOyYuVwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFuaW1hbCBmcm9tIFwiLi9BbmltYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9nIGV4dGVuZHMgQW5pbWFsIHtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmFtZSk7XG4gIH1cblxuICBzb3VuZCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUsIFwi66mN66mNXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FuaW1hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlciB7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGw7XG5cbiAgc2V0IG5hbWUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHY7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHJvYXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCLslrTtnaVcIjtcbiAgfVxufVxuIiwiaW1wb3J0IEFuaW1hbCBmcm9tIFwiLi9BbmltYWxcIjtcbmltcG9ydCBUaWdlciBmcm9tIFwiLi9UaWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlckFkYXB0ZXIgZXh0ZW5kcyBBbmltYWwge1xuICBwcml2YXRlIHRpZ2VyOiBUaWdlcjtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuYW1lKTtcbiAgICB0aGlzLnRpZ2VyID0gbmV3IFRpZ2VyKCk7XG4gICAgdGhpcy50aWdlci5uYW1lID0gbmFtZTtcbiAgfVxuICBzb3VuZCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUsIHRoaXMudGlnZXIucm9hcigpKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FuaW1hbFwiO1xuaW1wb3J0IENhdCBmcm9tIFwiLi9DYXRcIjtcbmltcG9ydCBEb2cgZnJvbSBcIi4vRG9nXCI7XG5pbXBvcnQgVGlnZXIgZnJvbSBcIi4vVGlnZXJcIjtcbmltcG9ydCBUaWdlckFkYXB0ZXIgZnJvbSBcIi4vVGlnZXJBZGFwdGVyXCI7XG5cbmNvbnN0IGxpc3QgPSBBcnJheTxBbmltYWw+KCk7XG5saXN0LnB1c2gobmV3IERvZyhcIuuwseq1rFwiKSk7XG5saXN0LnB1c2gobmV3IERvZyhcIuyLnOuwlFwiKSk7XG5saXN0LnB1c2gobmV3IENhdChcIuqzoOyWkVwiKSk7XG5cbi8vIGNvbnN0IHRpZ2VyID0gbmV3IFRpZ2VyKCk7XG4vLyB0aWdlci5uYW1lID0gXCLtmLjrnq1cIjtcbi8vIGxpc3QucHVzaCh0aWdlcik7XG5saXN0LnB1c2gobmV3IFRpZ2VyQWRhcHRlcihcIu2YuOuerVwiKSk7XG5cbmxpc3QuZm9yRWFjaCgoZSkgPT4gZS5zb3VuZCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==