"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/listing-page/page",{

/***/ "(app-pages-browser)/./src/components/product-card/product-card.tsx":
/*!******************************************************!*\
  !*** ./src/components/product-card/product-card.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_create_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/create-store */ \"(app-pages-browser)/./src/store/create-store.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ProductCard = (param)=>{\n    let { product } = param;\n    _s();\n    const { cart, addToCart, updateQuantity, removeFromCart } = (0,_store_create_store__WEBPACK_IMPORTED_MODULE_1__.useCartStore)();\n    const existingProduct = cart.find((item)=>item.id === (product === null || product === void 0 ? void 0 : product.id));\n    const quantity = existingProduct ? existingProduct.quantity : 0;\n    const handleQuantityChange = (newQuantity)=>{\n        addToCart(product);\n        if (newQuantity >= 0) {\n            updateQuantity(product.id, newQuantity);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col rounded-md w-fit text-black py-4 px-8 bg-white gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: product === null || product === void 0 ? void 0 : product.name\n            }, void 0, false, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: $\",\n                    product === null || product === void 0 ? void 0 : product.price\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Add to Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(quantity - 1),\n                        disabled: quantity === 0,\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"border rounded-sm px-4 border-black\",\n                        children: quantity\n                    }, void 0, false, {\n                        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(quantity + 1),\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"TY+3KRIBjpJmsoZXsp0KLk3yGXk=\", false, function() {\n    return [\n        _store_create_store__WEBPACK_IMPORTED_MODULE_1__.useCartStore\n    ];\n});\n_c = ProductCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRThEO0FBRTlELE1BQU1DLGNBQWM7UUFBQyxFQUFFQyxPQUFPLEVBQTJCOztJQUN2RCxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLGNBQWMsRUFBRSxHQUFHTixpRUFBWUE7SUFDeEUsTUFBTU8sa0JBQWtCSixLQUFLSyxJQUFJLENBQy9CLENBQUNDLE9BQXlCQSxLQUFLQyxFQUFFLE1BQUtSLG9CQUFBQSw4QkFBQUEsUUFBU1EsRUFBRTtJQUVuRCxNQUFNQyxXQUFXSixrQkFBa0JBLGdCQUFnQkksUUFBUSxHQUFHO0lBRTlELE1BQU1DLHVCQUF1QixDQUFDQztRQUM1QlQsVUFBVUY7UUFDVixJQUFJVyxlQUFlLEdBQUc7WUFDcEJSLGVBQWVILFFBQVFRLEVBQUUsRUFBRUc7UUFDN0I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUlkLG9CQUFBQSw4QkFBQUEsUUFBU2UsSUFBSTs7Ozs7OzBCQUNsQiw4REFBQ0M7O29CQUFFO29CQUFTaEIsb0JBQUFBLDhCQUFBQSxRQUFTaUIsS0FBSzs7Ozs7OzswQkFFMUIsOERBQUNDOzBCQUFPOzs7Ozs7MEJBRVIsOERBQUNOO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQ0NDLFNBQVMsSUFBTVQscUJBQXFCRCxXQUFXO3dCQUMvQ1csVUFBVVgsYUFBYTtrQ0FDeEI7Ozs7OztrQ0FHRCw4REFBQ1k7d0JBQUtSLFdBQVU7a0NBQXVDSjs7Ozs7O2tDQUN2RCw4REFBQ1M7d0JBQU9DLFNBQVMsSUFBTVQscUJBQXFCRCxXQUFXO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkU7R0FqQ01WOztRQUN3REQsNkRBQVlBOzs7S0FEcEVDO0FBbUNOLGlFQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMva2FydW5hL215LW93bi1zcGFjZS9wcm9kdWN0LWNhcnQvc3JjL2NvbXBvbmVudHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGNhcnREYXRhLCB1c2VDYXJ0U3RvcmUgfSBmcm9tIFwiQC9zdG9yZS9jcmVhdGUtc3RvcmVcIjtcblxuY29uc3QgUHJvZHVjdENhcmQgPSAoeyBwcm9kdWN0IH06IHsgcHJvZHVjdDogY2FydERhdGFbXSB9KSA9PiB7XG4gIGNvbnN0IHsgY2FydCwgYWRkVG9DYXJ0LCB1cGRhdGVRdWFudGl0eSwgcmVtb3ZlRnJvbUNhcnQgfSA9IHVzZUNhcnRTdG9yZSgpO1xuICBjb25zdCBleGlzdGluZ1Byb2R1Y3QgPSBjYXJ0LmZpbmQoXG4gICAgKGl0ZW06IHsgaWQ6IG51bWJlciB9KSA9PiBpdGVtLmlkID09PSBwcm9kdWN0Py5pZFxuICApO1xuICBjb25zdCBxdWFudGl0eSA9IGV4aXN0aW5nUHJvZHVjdCA/IGV4aXN0aW5nUHJvZHVjdC5xdWFudGl0eSA6IDA7XG5cbiAgY29uc3QgaGFuZGxlUXVhbnRpdHlDaGFuZ2UgPSAobmV3UXVhbnRpdHk6IG51bWJlcikgPT4ge1xuICAgIGFkZFRvQ2FydChwcm9kdWN0KTtcbiAgICBpZiAobmV3UXVhbnRpdHkgPj0gMCkge1xuICAgICAgdXBkYXRlUXVhbnRpdHkocHJvZHVjdC5pZCwgbmV3UXVhbnRpdHkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLW1kIHctZml0IHRleHQtYmxhY2sgcHktNCBweC04IGJnLXdoaXRlIGdhcC00XCI+XG4gICAgICA8aDM+e3Byb2R1Y3Q/Lm5hbWV9PC9oMz5cbiAgICAgIDxwPlByaWNlOiAke3Byb2R1Y3Q/LnByaWNlfTwvcD5cblxuICAgICAgPGJ1dHRvbj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdWFudGl0eUNoYW5nZShxdWFudGl0eSAtIDEpfVxuICAgICAgICAgIGRpc2FibGVkPXtxdWFudGl0eSA9PT0gMH1cbiAgICAgICAgPlxuICAgICAgICAgIC1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLXNtIHB4LTQgYm9yZGVyLWJsYWNrXCI+e3F1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdWFudGl0eUNoYW5nZShxdWFudGl0eSArIDEpfT4rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl0sIm5hbWVzIjpbInVzZUNhcnRTdG9yZSIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsImNhcnQiLCJhZGRUb0NhcnQiLCJ1cGRhdGVRdWFudGl0eSIsInJlbW92ZUZyb21DYXJ0IiwiZXhpc3RpbmdQcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJpZCIsInF1YW50aXR5IiwiaGFuZGxlUXVhbnRpdHlDaGFuZ2UiLCJuZXdRdWFudGl0eSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibmFtZSIsInAiLCJwcmljZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/product-card/product-card.tsx\n"));

/***/ })

});