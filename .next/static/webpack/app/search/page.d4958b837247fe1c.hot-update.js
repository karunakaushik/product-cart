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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _store_create_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/create-store */ \"(app-pages-browser)/./src/store/create-store.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ProductCard = (param)=>{\n    let { product } = param;\n    _s();\n    const { cart, addToCart, updateQuantity, removeFromCart } = (0,_store_create_store__WEBPACK_IMPORTED_MODULE_1__.useCartStore)();\n    const existingProduct = cart.find((item)=>item.id === product.id);\n    const quantity = existingProduct ? existingProduct.quantity : 0;\n    const handleRemoveFromCart = ()=>{\n        removeFromCart(product.id);\n    };\n    const handleQuantityChange = (newQuantity)=>{\n        addToCart(product);\n        if (newQuantity >= 0) {\n            updateQuantity(product.id, newQuantity);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col rounded-md w-fit text-black py-4 px-8 bg-white gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: product === null || product === void 0 ? void 0 : product.name\n            }, void 0, false, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: $\",\n                    product === null || product === void 0 ? void 0 : product.price\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Add to Cart\"\n            }, void 0, false, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(quantity - 1),\n                        disabled: quantity === 0,\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"border rounded-sm px-4 border-black\",\n                        children: quantity\n                    }, void 0, false, {\n                        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleQuantityChange(quantity + 1),\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/karuna/my-own-space/product-cart/src/components/product-card/product-card.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCard, \"TY+3KRIBjpJmsoZXsp0KLk3yGXk=\", false, function() {\n    return [\n        _store_create_store__WEBPACK_IMPORTED_MODULE_1__.useCartStore\n    ];\n});\n_c = ProductCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRW9EO0FBRXBELE1BQU1DLGNBQWM7UUFBQyxFQUFFQyxPQUFPLEVBQU87O0lBQ25DLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGNBQWMsRUFBRUMsY0FBYyxFQUFFLEdBQUdOLGlFQUFZQTtJQUN4RSxNQUFNTyxrQkFBa0JKLEtBQUtLLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtSLFFBQVFRLEVBQUU7SUFDbEUsTUFBTUMsV0FBV0osa0JBQWtCQSxnQkFBZ0JJLFFBQVEsR0FBRztJQUU5RCxNQUFNQyx1QkFBdUI7UUFDM0JOLGVBQWVKLFFBQVFRLEVBQUU7SUFDM0I7SUFFQSxNQUFNRyx1QkFBdUIsQ0FBQ0M7UUFDNUJWLFVBQVVGO1FBQ1YsSUFBSVksZUFBZSxHQUFHO1lBQ3BCVCxlQUFlSCxRQUFRUSxFQUFFLEVBQUVJO1FBQzdCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFJZixvQkFBQUEsOEJBQUFBLFFBQVNnQixJQUFJOzs7Ozs7MEJBQ2xCLDhEQUFDQzs7b0JBQUU7b0JBQVNqQixvQkFBQUEsOEJBQUFBLFFBQVNrQixLQUFLOzs7Ozs7OzBCQUUxQiw4REFBQ0M7MEJBQU87Ozs7OzswQkFFUiw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFDQ0MsU0FBUyxJQUFNVCxxQkFBcUJGLFdBQVc7d0JBQy9DWSxVQUFVWixhQUFhO2tDQUN4Qjs7Ozs7O2tDQUdELDhEQUFDYTt3QkFBS1IsV0FBVTtrQ0FBdUNMOzs7Ozs7a0NBQ3ZELDhEQUFDVTt3QkFBT0MsU0FBUyxJQUFNVCxxQkFBcUJGLFdBQVc7a0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluRTtHQW5DTVY7O1FBQ3dERCw2REFBWUE7OztLQURwRUM7QUFxQ04saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ1bmEvbXktb3duLXNwYWNlL3Byb2R1Y3QtY2FydC9zcmMvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlQ2FydFN0b3JlIH0gZnJvbSBcIkAvc3RvcmUvY3JlYXRlLXN0b3JlXCI7XG5cbmNvbnN0IFByb2R1Y3RDYXJkID0gKHsgcHJvZHVjdCB9Ontwcn0pID0+IHtcbiAgY29uc3QgeyBjYXJ0LCBhZGRUb0NhcnQsIHVwZGF0ZVF1YW50aXR5LCByZW1vdmVGcm9tQ2FydCB9ID0gdXNlQ2FydFN0b3JlKCk7XG4gIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IGNhcnQuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG4gIGNvbnN0IHF1YW50aXR5ID0gZXhpc3RpbmdQcm9kdWN0ID8gZXhpc3RpbmdQcm9kdWN0LnF1YW50aXR5IDogMDtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9ICgpID0+IHtcbiAgICByZW1vdmVGcm9tQ2FydChwcm9kdWN0LmlkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVRdWFudGl0eUNoYW5nZSA9IChuZXdRdWFudGl0eSkgPT4ge1xuICAgIGFkZFRvQ2FydChwcm9kdWN0KTtcbiAgICBpZiAobmV3UXVhbnRpdHkgPj0gMCkge1xuICAgICAgdXBkYXRlUXVhbnRpdHkocHJvZHVjdC5pZCwgbmV3UXVhbnRpdHkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLW1kIHctZml0IHRleHQtYmxhY2sgcHktNCBweC04IGJnLXdoaXRlIGdhcC00XCI+XG4gICAgICA8aDM+e3Byb2R1Y3Q/Lm5hbWV9PC9oMz5cbiAgICAgIDxwPlByaWNlOiAke3Byb2R1Y3Q/LnByaWNlfTwvcD5cblxuICAgICAgPGJ1dHRvbj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdWFudGl0eUNoYW5nZShxdWFudGl0eSAtIDEpfVxuICAgICAgICAgIGRpc2FibGVkPXtxdWFudGl0eSA9PT0gMH1cbiAgICAgICAgPlxuICAgICAgICAgIC1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLXNtIHB4LTQgYm9yZGVyLWJsYWNrXCI+e3F1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdWFudGl0eUNoYW5nZShxdWFudGl0eSArIDEpfT4rPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl0sIm5hbWVzIjpbInVzZUNhcnRTdG9yZSIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsImNhcnQiLCJhZGRUb0NhcnQiLCJ1cGRhdGVRdWFudGl0eSIsInJlbW92ZUZyb21DYXJ0IiwiZXhpc3RpbmdQcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJpZCIsInF1YW50aXR5IiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJoYW5kbGVRdWFudGl0eUNoYW5nZSIsIm5ld1F1YW50aXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJuYW1lIiwicCIsInByaWNlIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/product-card/product-card.tsx\n"));

/***/ })

});