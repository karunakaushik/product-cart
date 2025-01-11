"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-pages-browser)/./src/components/product-card/product-card.tsx":
/*!******************************************************!*\
  !*** ./src/components/product-card/product-card.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_create_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/create-store */ \"(app-pages-browser)/./src/store/create-store.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ProductCard = (param)=>{\n    let { product } = param;\n    _s();\n    const { cart, addToCart, updateQuantity, removeFromCart } = (0,_store_create_store__WEBPACK_IMPORTED_MODULE_1__.useCartStore)();\n    const existingProduct = cart.find((item)=>item.id === product.id);\n    const quantity = existingProduct ? existingProduct.quantity : 0;\n    const handleQuantityChange = (newQuantity)=>{\n        addToCart(product);\n        if (newQuantity >= 0) {\n            updateQuantity(product.id, newQuantity);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col rounded-md w-fit text-black py-4 px-8 bg-white gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: product === null || product === void 0 ? void 0 : product.name\n            }, void 0, false, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: $\",\n                    product === null || product === void 0 ? void 0 : product.price\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Add to Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(quantity - 1),\n                        disabled: quantity === 0,\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"border rounded-sm px-4 border-black\",\n                        children: quantity\n                    }, void 0, false, {\n                        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(quantity + 1),\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"TY+3KRIBjpJmsoZXsp0KLk3yGXk=\", false, function() {\n    return [\n        _store_create_store__WEBPACK_IMPORTED_MODULE_1__.useCartStore\n    ];\n});\n_c = ProductCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRW9EO0FBRXBELE1BQU1DLGNBQWM7UUFBQyxFQUFFQyxPQUFPLEVBQTJCOztJQUN2RCxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLGNBQWMsRUFBRSxHQUFHTixpRUFBWUE7SUFDeEUsTUFBTU8sa0JBQWtCSixLQUFLSyxJQUFJLENBQy9CLENBQUNDLE9BQXlCQSxLQUFLQyxFQUFFLEtBQUtSLFFBQVFRLEVBQUU7SUFFbEQsTUFBTUMsV0FBV0osa0JBQWtCQSxnQkFBZ0JJLFFBQVEsR0FBRztJQUU5RCxNQUFNQyx1QkFBdUIsQ0FBQ0M7UUFDNUJULFVBQVVGO1FBQ1YsSUFBSVcsZUFBZSxHQUFHO1lBQ3BCUixlQUFlSCxRQUFRUSxFQUFFLEVBQUVHO1FBQzdCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFJZCxvQkFBQUEsOEJBQUFBLFFBQVNlLElBQUk7Ozs7OzswQkFDbEIsOERBQUNDOztvQkFBRTtvQkFBU2hCLG9CQUFBQSw4QkFBQUEsUUFBU2lCLEtBQUs7Ozs7Ozs7MEJBRTFCLDhEQUFDQzswQkFBTzs7Ozs7OzBCQUVSLDhEQUFDTjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNLO3dCQUNDQyxTQUFTLElBQU1ULHFCQUFxQkQsV0FBVzt3QkFDL0NXLFVBQVVYLGFBQWE7a0NBQ3hCOzs7Ozs7a0NBR0QsOERBQUNZO3dCQUFLUixXQUFVO2tDQUF1Q0o7Ozs7OztrQ0FDdkQsOERBQUNTO3dCQUFPQyxTQUFTLElBQU1ULHFCQUFxQkQsV0FBVztrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5FO0dBakNNVjs7UUFDd0RELDZEQUFZQTs7O0tBRHBFQztBQW1DTixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2thcnVuYS9teS1vd24tc3BhY2UvcHJvZHVjdC1jYXJ0L3NyYy9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VDYXJ0U3RvcmUgfSBmcm9tIFwiQC9zdG9yZS9jcmVhdGUtc3RvcmVcIjtcblxuY29uc3QgUHJvZHVjdENhcmQgPSAoeyBwcm9kdWN0IH06IHsgcHJvZHVjdDogY2FydERhdGFbXSB9KSA9PiB7XG4gIGNvbnN0IHsgY2FydCwgYWRkVG9DYXJ0LCB1cGRhdGVRdWFudGl0eSwgcmVtb3ZlRnJvbUNhcnQgfSA9IHVzZUNhcnRTdG9yZSgpO1xuICBjb25zdCBleGlzdGluZ1Byb2R1Y3QgPSBjYXJ0LmZpbmQoXG4gICAgKGl0ZW06IHsgaWQ6IG51bWJlciB9KSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkXG4gICk7XG4gIGNvbnN0IHF1YW50aXR5ID0gZXhpc3RpbmdQcm9kdWN0ID8gZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5IDogMDtcblxuICBjb25zdCBoYW5kbGVRdWFudGl0eUNoYW5nZSA9IChuZXdRdWFudGl0eTogbnVtYmVyKSA9PiB7XG4gICAgYWRkVG9DYXJ0KHByb2R1Y3QpO1xuICAgIGlmIChuZXdRdWFudGl0eSA+PSAwKSB7XG4gICAgICB1cGRhdGVRdWFudGl0eShwcm9kdWN0LmlkLCBuZXdRdWFudGl0eSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJvdW5kZWQtbWQgdy1maXQgdGV4dC1ibGFjayBweS00IHB4LTggYmctd2hpdGUgZ2FwLTRcIj5cbiAgICAgIDxoMz57cHJvZHVjdD8ubmFtZX08L2gzPlxuICAgICAgPHA+UHJpY2U6ICR7cHJvZHVjdD8ucHJpY2V9PC9wPlxuXG4gICAgICA8YnV0dG9uPkFkZCB0byBDYXJ0PC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVF1YW50aXR5Q2hhbmdlKHF1YW50aXR5IC0gMSl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3F1YW50aXR5ID09PSAwfVxuICAgICAgICA+XG4gICAgICAgICAgLVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtc20gcHgtNCBib3JkZXItYmxhY2tcIj57cXVhbnRpdHl9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVF1YW50aXR5Q2hhbmdlKHF1YW50aXR5ICsgMSl9Pis8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXSwibmFtZXMiOlsidXNlQ2FydFN0b3JlIiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0IiwiY2FydCIsImFkZFRvQ2FydCIsInVwZGF0ZVF1YW50aXR5IiwicmVtb3ZlRnJvbUNhcnQiLCJleGlzdGluZ1Byb2R1Y3QiLCJmaW5kIiwiaXRlbSIsImlkIiwicXVhbnRpdHkiLCJoYW5kbGVRdWFudGl0eUNoYW5nZSIsIm5ld1F1YW50aXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJuYW1lIiwicCIsInByaWNlIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/product-card/product-card.tsx\n"));

/***/ })

});