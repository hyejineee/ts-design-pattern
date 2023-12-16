/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorator/BoxDecorator.ts":
/*!***************************************!*\
  !*** ./src/decorator/BoxDecorator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var BoxDecorator = /** @class */ (function (_super) {
    __extends(BoxDecorator, _super);
    function BoxDecorator(target) {
        return _super.call(this, target) || this;
    }
    BoxDecorator.prototype.getLinesCount = function () {
        return this.target.getLinesCount() + 2;
    };
    BoxDecorator.prototype.getLength = function (i) {
        return this.target.getLength(i) + 2;
    };
    BoxDecorator.prototype.getMaxLength = function () {
        return this.target.getMaxLength() + 2;
    };
    BoxDecorator.prototype.getString = function (i) {
        var maxW = this.getMaxLength();
        if (i === 0 || i === this.getLinesCount() - 1) {
            return "<span style='color:yellow'>+".concat("-".repeat(maxW - 2), "+</span>");
        }
        return ("<span style='color:yellow'>|</span>" +
            "".concat(this.target.getString(i - 1)).concat(" ".repeat(maxW - this.getLength(i - 1))) +
            "<span style='color:yellow'>|</span>");
    };
    return BoxDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxDecorator);


/***/ }),

/***/ "./src/decorator/Decorator.ts":
/*!************************************!*\
  !*** ./src/decorator/Decorator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(target) {
        var _this = _super.call(this) || this;
        _this.target = target;
        return _this;
    }
    return Decorator;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Decorator);


/***/ }),

/***/ "./src/decorator/Item.ts":
/*!*******************************!*\
  !*** ./src/decorator/Item.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.print = function (dom) {
        var result = [];
        var cntLines = this.getLinesCount();
        for (var i = 0; i < cntLines; i++) {
            var string = this.getString(i);
            result.push(string);
        }
        dom.innerHTML = result.join("\n");
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/decorator/SideDecorator.ts":
/*!****************************************!*\
  !*** ./src/decorator/SideDecorator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var SideDecorator = /** @class */ (function (_super) {
    __extends(SideDecorator, _super);
    function SideDecorator(target, ch) {
        var _this = _super.call(this, target) || this;
        _this.ch = ch;
        return _this;
    }
    SideDecorator.prototype.getLinesCount = function () {
        return this.target.getLinesCount();
    };
    SideDecorator.prototype.getLength = function (i) {
        return this.target.getLength(i) + this.ch.length * 2;
    };
    SideDecorator.prototype.getMaxLength = function () {
        return this.target.getMaxLength() + this.ch.length * 2;
    };
    SideDecorator.prototype.getString = function (i) {
        return ("<span style='color:gray'>".concat(this.ch, "</span>") +
            "".concat(this.target.getString(i)) +
            "<span style='color:gray'>".concat(this.ch, "</span>"));
    };
    return SideDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideDecorator);


/***/ }),

/***/ "./src/decorator/Strings.ts":
/*!**********************************!*\
  !*** ./src/decorator/Strings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Strings = /** @class */ (function (_super) {
    __extends(Strings, _super);
    function Strings() {
        var _this = _super.call(this) || this;
        _this.data = new Array();
        return _this;
    }
    Strings.prototype.getLinesCount = function () {
        return this.data.length;
    };
    Strings.prototype.getLength = function (i) {
        return this.data[i].length;
    };
    Strings.prototype.getMaxLength = function () {
        return this.data.reduce(function (acc, cur) { return (acc < cur.length ? cur.length : acc); }, 0);
    };
    Strings.prototype.getString = function (i) {
        return this.data[i];
    };
    Strings.prototype.add = function (str) {
        this.data.push(str);
    };
    return Strings;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strings);


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
/*!********************************!*\
  !*** ./src/decorator/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxDecorator */ "./src/decorator/BoxDecorator.ts");
/* harmony import */ var _SideDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideDecorator */ "./src/decorator/SideDecorator.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strings */ "./src/decorator/Strings.ts");



var str = new _Strings__WEBPACK_IMPORTED_MODULE_2__["default"]();
str.add("hello");
str.add("asdlkfjsdlkfjlksa");
str.add("asdfasdf");
str.add("dfskgjakldsgjla;kdfjglkdf");
var domPre = document.querySelector("pre");
// str.print(domPre);
var sd = new _SideDecorator__WEBPACK_IMPORTED_MODULE_1__["default"](str, '"');
// sd.print(domPre);
var bd = new _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__["default"](sd);
bd.print(domPre);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUdwQztJQUEwQyxnQ0FBUztJQXdCakQsc0JBQVksTUFBWTtRQUN0QixhQUFLLFlBQUMsTUFBTSxDQUFDLFNBQUM7SUFDaEIsQ0FBQztJQXpCRCxvQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsZ0NBQVMsR0FBVCxVQUFVLENBQVM7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELG1DQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxnQ0FBUyxHQUFULFVBQVUsQ0FBUztRQUNqQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDOUMsT0FBTyxzQ0FBK0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQVUsQ0FBQztRQUN2RSxDQUFDO1FBRUQsT0FBTyxDQUNMLHFDQUFxQztZQUNyQyxVQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBRyxHQUFHLENBQUMsTUFBTSxDQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQzdCLENBQUU7WUFDSCxxQ0FBcUMsQ0FDdEMsQ0FBQztJQUNKLENBQUM7SUFJSCxtQkFBQztBQUFELENBQUMsQ0EzQnlDLGtEQUFTLEdBMkJsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QnlCO0FBRTFCO0lBQWdELDZCQUFJO0lBQ2xELG1CQUFzQixNQUFZO1FBQ2hDLGtCQUFLLFdBQUUsU0FBQztRQURZLFlBQU0sR0FBTixNQUFNLENBQU07O0lBRWxDLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQ0FKK0MsNkNBQUksR0FJbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtJQUFBO0lBZ0JBLENBQUM7SUFWQyxvQkFBSyxHQUFMLFVBQU0sR0FBZ0I7UUFDcEIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbUM7QUFHcEM7SUFBMkMsaUNBQVM7SUFpQmxELHVCQUFZLE1BQVksRUFBVSxFQUFVO1FBQzFDLGtCQUFLLFlBQUMsTUFBTSxDQUFDLFNBQUM7UUFEa0IsUUFBRSxHQUFGLEVBQUUsQ0FBUTs7SUFFNUMsQ0FBQztJQWxCRCxxQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxpQ0FBUyxHQUFULFVBQVUsQ0FBUztRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELGlDQUFTLEdBQVQsVUFBVSxDQUFTO1FBQ2pCLE9BQU8sQ0FDTCxtQ0FBNEIsSUFBSSxDQUFDLEVBQUUsWUFBUztZQUM1QyxVQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFO1lBQzdCLG1DQUE0QixJQUFJLENBQUMsRUFBRSxZQUFTLENBQzdDLENBQUM7SUFDSixDQUFDO0lBSUgsb0JBQUM7QUFBRCxDQUFDLENBcEIwQyxrREFBUyxHQW9CbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ5QjtBQUUxQjtJQUFxQywyQkFBSTtJQWtCdkM7UUFDRSxrQkFBSyxXQUFFLFNBQUM7UUFIRixVQUFJLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQzs7SUFJbkMsQ0FBQztJQW5CRCwrQkFBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBQ0QsMkJBQVMsR0FBVCxVQUFVLENBQVM7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBQ0QsOEJBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3JCLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxRQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBckMsQ0FBcUMsRUFDbkQsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBQ0QsMkJBQVMsR0FBVCxVQUFVLENBQVM7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFPRCxxQkFBRyxHQUFILFVBQUksR0FBVztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxDQXpCb0MsNkNBQUksR0F5QnhDOzs7Ozs7OztVQzNCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRTtBQUNaO0FBRWhDLElBQU0sR0FBRyxHQUFHLElBQUksZ0RBQU8sRUFBRSxDQUFDO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBRXJDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0MscUJBQXFCO0FBRXJCLElBQU0sRUFBRSxHQUFHLElBQUksc0RBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkMsb0JBQW9CO0FBRXBCLElBQU0sRUFBRSxHQUFHLElBQUkscURBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL0JveERlY29yYXRvci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9kZWNvcmF0b3IvRGVjb3JhdG9yLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2RlY29yYXRvci9JdGVtLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2RlY29yYXRvci9TaWRlRGVjb3JhdG9yLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2RlY29yYXRvci9TdHJpbmdzLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWNvcmF0b3IgZnJvbSBcIi4vRGVjb3JhdG9yXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveERlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuZ2V0TGluZXNDb3VudCgpICsgMjtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuZ2V0TGVuZ3RoKGkpICsgMjtcbiAgfVxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuZ2V0TWF4TGVuZ3RoKCkgKyAyO1xuICB9XG4gIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1heFcgPSB0aGlzLmdldE1heExlbmd0aCgpO1xuICAgIGlmIChpID09PSAwIHx8IGkgPT09IHRoaXMuZ2V0TGluZXNDb3VudCgpIC0gMSkge1xuICAgICAgcmV0dXJuIGA8c3BhbiBzdHlsZT0nY29sb3I6eWVsbG93Jz4rJHtcIi1cIi5yZXBlYXQobWF4VyAtIDIpfSs8L3NwYW4+YDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPnw8L3NwYW4+YCArXG4gICAgICBgJHt0aGlzLnRhcmdldC5nZXRTdHJpbmcoaSAtIDEpfSR7XCIgXCIucmVwZWF0KFxuICAgICAgICBtYXhXIC0gdGhpcy5nZXRMZW5ndGgoaSAtIDEpXG4gICAgICApfWAgK1xuICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPnw8L3NwYW4+YFxuICAgICk7XG4gIH1cbiAgY29uc3RydWN0b3IodGFyZ2V0OiBJdGVtKSB7XG4gICAgc3VwZXIodGFyZ2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEZWNvcmF0b3IgZXh0ZW5kcyBJdGVtIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRhcmdldDogSXRlbSkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEl0ZW0ge1xuICBhYnN0cmFjdCBnZXRMaW5lc0NvdW50KCk6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlcjtcbiAgYWJzdHJhY3QgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZztcblxuICBwcmludChkb206IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgY250TGluZXMgPSB0aGlzLmdldExpbmVzQ291bnQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY250TGluZXM7IGkrKykge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaSk7XG4gICAgICByZXN1bHQucHVzaChzdHJpbmcpO1xuICAgIH1cbiAgICBkb20uaW5uZXJIVE1MID0gcmVzdWx0LmpvaW4oXCJcXG5cIik7XG4gIH1cbn1cbiIsImltcG9ydCBEZWNvcmF0b3IgZnJvbSBcIi4vRGVjb3JhdG9yXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVEZWNvcmF0b3IgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0LmdldExpbmVzQ291bnQoKTtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuZ2V0TGVuZ3RoKGkpICsgdGhpcy5jaC5sZW5ndGggKiAyO1xuICB9XG4gIGdldE1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRhcmdldC5nZXRNYXhMZW5ndGgoKSArIHRoaXMuY2gubGVuZ3RoICogMjtcbiAgfVxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjpncmF5Jz4ke3RoaXMuY2h9PC9zcGFuPmAgK1xuICAgICAgYCR7dGhpcy50YXJnZXQuZ2V0U3RyaW5nKGkpfWAgK1xuICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjpncmF5Jz4ke3RoaXMuY2h9PC9zcGFuPmBcbiAgICApO1xuICB9XG4gIGNvbnN0cnVjdG9yKHRhcmdldDogSXRlbSwgcHJpdmF0ZSBjaDogc3RyaW5nKSB7XG4gICAgc3VwZXIodGFyZ2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdzIGV4dGVuZHMgSXRlbSB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcbiAgfVxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2ldLmxlbmd0aDtcbiAgfVxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnJlZHVjZShcbiAgICAgIChhY2MsIGN1cikgPT4gKGFjYyA8IGN1ci5sZW5ndGggPyBjdXIubGVuZ3RoIDogYWNjKSxcbiAgICAgIDBcbiAgICApO1xuICB9XG4gIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGFbaV07XG4gIH1cbiAgcHJpdmF0ZSBkYXRhID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYWRkKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLnB1c2goc3RyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQm94RGVjb3JhdG9yIGZyb20gXCIuL0JveERlY29yYXRvclwiO1xuaW1wb3J0IFNpZGVEZWNvcmF0b3IgZnJvbSBcIi4vU2lkZURlY29yYXRvclwiO1xuaW1wb3J0IFN0cmluZ3MgZnJvbSBcIi4vU3RyaW5nc1wiO1xuXG5jb25zdCBzdHIgPSBuZXcgU3RyaW5ncygpO1xuc3RyLmFkZChcImhlbGxvXCIpO1xuc3RyLmFkZChcImFzZGxrZmpzZGxrZmpsa3NhXCIpO1xuc3RyLmFkZChcImFzZGZhc2RmXCIpO1xuc3RyLmFkZChcImRmc2tnamFrbGRzZ2psYTtrZGZqZ2xrZGZcIik7XG5cbmNvbnN0IGRvbVByZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwcmVcIik7XG4vLyBzdHIucHJpbnQoZG9tUHJlKTtcblxuY29uc3Qgc2QgPSBuZXcgU2lkZURlY29yYXRvcihzdHIsICdcIicpO1xuLy8gc2QucHJpbnQoZG9tUHJlKTtcblxuY29uc3QgYmQgPSBuZXcgQm94RGVjb3JhdG9yKHNkKTtcbmJkLnByaW50KGRvbVByZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=