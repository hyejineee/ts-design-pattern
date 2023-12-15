/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/templateMethod/Article.ts":
/*!***************************************!*\
  !*** ./src/templateMethod/Article.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);


/***/ }),

/***/ "./src/templateMethod/DisplayArticleTemplate.ts":
/*!******************************************************!*\
  !*** ./src/templateMethod/DisplayArticleTemplate.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DisplayArticleTemplate = /** @class */ (function () {
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        // readonly 키워드를 사용하여 파생(자식) 클래스에서 오버라이딩 할 수 없도록 막음
        this.displayHtml = function () {
            return "\n        ".concat(_this.titleHtml(), " \n        ").concat(_this.contentHtml(), " \n        ").concat(_this.footerHtml(), " \n        ");
        };
    }
    return DisplayArticleTemplate;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayArticleTemplate);


/***/ }),

/***/ "./src/templateMethod/EditableDisplayArticle.ts":
/*!******************************************************!*\
  !*** ./src/templateMethod/EditableDisplayArticle.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/templateMethod/DisplayArticleTemplate.ts");
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

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (e) { return "<li>".concat(e, "</li>"); });
        return "<ul>".concat(items.join(""), "</ul>");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "<h1>".concat(this.article.getFooter(), "</h1>");
    };
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "<div>\n    <span>\uC81C\uBAA9 : </span>\n    <input value=".concat(this.article.getTitle(), " />\n    </div>");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableDisplayArticle);


/***/ }),

/***/ "./src/templateMethod/SimpleDisplayArticle.ts":
/*!****************************************************!*\
  !*** ./src/templateMethod/SimpleDisplayArticle.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/templateMethod/DisplayArticleTemplate.ts");
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

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (e) { return "<li>".concat(e, "</li>"); });
        return "<ul>".concat(items.join(""), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDisplayArticle);


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
/*!*************************************!*\
  !*** ./src/templateMethod/index.ts ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/templateMethod/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/templateMethod/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/templateMethod/SimpleDisplayArticle.ts");



var article = new _Article__WEBPACK_IMPORTED_MODULE_0__["default"]("title", ["content1", "content2"], "footer");
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
document.querySelector(".content").innerHTML = display.displayHtml();
document.querySelector(".edit-mode").addEventListener("change", function (e) {
    var display = e.target.checked
        ? new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__["default"](article)
        : new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__["default"](article);
    document.querySelector(".content").innerHTML = display.displayHtml();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFFOEI7QUFDSjtBQUUxRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXpFLElBQU0sT0FBTyxHQUFHLElBQUksNkRBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRXJFLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQztJQUNoRSxJQUFNLE9BQU8sR0FBSSxDQUFDLENBQUMsTUFBMkIsQ0FBQyxPQUFPO1FBQ3BELENBQUMsQ0FBQyxJQUFJLCtEQUFzQixDQUFDLE9BQU8sQ0FBQztRQUNyQyxDQUFDLENBQUMsSUFBSSw2REFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV0QyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy90ZW1wbGF0ZU1ldGhvZC9BcnRpY2xlLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlTWV0aG9kL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvdGVtcGxhdGVNZXRob2QvRWRpdGFibGVEaXNwbGF5QXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy90ZW1wbGF0ZU1ldGhvZC9TaW1wbGVEaXNwbGF5QXJ0aWNsZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3RlbXBsYXRlTWV0aG9kL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmdbXSxcbiAgICBwcml2YXRlIGZvb3Rlcjogc3RyaW5nXG4gICkge31cblxuICBwdWJsaWMgZ2V0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250ZW50KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgcHVibGljIGdldEZvb3RlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvb3RlcjtcbiAgfVxufVxuIiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEaXNwbGF5QXJ0aWNsZVRlbXBsYXRlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFydGljbGU6IEFydGljbGUpIHt9XG5cbiAgLy8gcmVhZG9ubHkg7YKk7JuM65Oc66W8IOyCrOyaqe2VmOyXrCDtjIzsg50o7J6Q7IudKSDtgbTrnpjsiqTsl5DshJwg7Jik67KE65287J2065SpIO2VoCDsiJgg7JeG64+E66GdIOunieydjFxuICBwdWJsaWMgcmVhZG9ubHkgZGlzcGxheUh0bWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgJHt0aGlzLnRpdGxlSHRtbCgpfSBcbiAgICAgICAgJHt0aGlzLmNvbnRlbnRIdG1sKCl9IFxuICAgICAgICAke3RoaXMuZm9vdGVySHRtbCgpfSBcbiAgICAgICAgYDtcbiAgfTtcblxuICAvLyDtjIzsg50g7YG0656Y7Iqk7JeQ7IScIOq1rO2YhOuQoCDstpTsg4Eg66mU7ISc65OcIOyEoOyWuFxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29udGVudEh0bWwoKTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZm9vdGVySHRtbCgpOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCB0aXRsZUh0bWwoKTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xuaW1wb3J0IERpc3BsYXlBcnRpY2xlVGVtcGxhdGUgZnJvbSBcIi4vRGlzcGxheUFydGljbGVUZW1wbGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKGFydGljbGU6IEFydGljbGUpIHtcbiAgICBzdXBlcihhcnRpY2xlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGUpID0+IGA8bGk+JHtlfTwvbGk+YCk7XG4gICAgcmV0dXJuIGA8dWw+JHtpdGVtcy5qb2luKFwiXCIpfTwvdWw+YDtcbiAgfVxuICBwcm90ZWN0ZWQgZm9vdGVySHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGgxPiR7dGhpcy5hcnRpY2xlLmdldEZvb3RlcigpfTwvaDE+YDtcbiAgfVxuICBwcm90ZWN0ZWQgdGl0bGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8ZGl2PlxuICAgIDxzcGFuPuygnOuqqSA6IDwvc3Bhbj5cbiAgICA8aW5wdXQgdmFsdWU9JHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX0gLz5cbiAgICA8L2Rpdj5gO1xuICB9XG59XG4iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi9BcnRpY2xlXCI7XG5pbXBvcnQgRGlzcGxheUFydGljbGVUZW1wbGF0ZSBmcm9tIFwiLi9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XG4gIGNvbnN0cnVjdG9yKGFydGljbGU6IEFydGljbGUpIHtcbiAgICBzdXBlcihhcnRpY2xlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGUpID0+IGA8bGk+JHtlfTwvbGk+YCk7XG4gICAgcmV0dXJuIGA8dWw+JHtpdGVtcy5qb2luKFwiXCIpfTwvdWw+YDtcbiAgfVxuICBwcm90ZWN0ZWQgZm9vdGVySHRtbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGgzPiR7dGhpcy5hcnRpY2xlLmdldEZvb3RlcigpfTwvaDM+YDtcbiAgfVxuICBwcm90ZWN0ZWQgdGl0bGVIdG1sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8aDE+JHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX08L2gxPmA7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4vQXJ0aWNsZVwiO1xuaW1wb3J0IERpc3BsYXlBcnRpY2xlVGVtcGxhdGUgZnJvbSBcIi4vRGlzcGxheUFydGljbGVUZW1wbGF0ZVwiO1xuaW1wb3J0IEVkaXRhYmxlRGlzcGxheUFydGljbGUgZnJvbSBcIi4vRWRpdGFibGVEaXNwbGF5QXJ0aWNsZVwiO1xuaW1wb3J0IFNpbXBsZURpc3BsYXlBcnRpY2xlIGZyb20gXCIuL1NpbXBsZURpc3BsYXlBcnRpY2xlXCI7XG5cbmNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZShcInRpdGxlXCIsIFtcImNvbnRlbnQxXCIsIFwiY29udGVudDJcIl0sIFwiZm9vdGVyXCIpO1xuXG5jb25zdCBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LW1vZGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWRcbiAgICA/IG5ldyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpXG4gICAgOiBuZXcgU2ltcGxlRGlzcGxheUFydGljbGUoYXJ0aWNsZSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9