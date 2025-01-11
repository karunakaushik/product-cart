"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./src/store/create-store.tsx":
/*!************************************!*\
  !*** ./src/store/create-store.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCartStore: () => (/* binding */ useCartStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/react.mjs\");\n\nconst useCartStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        cart: [],\n        addToCart: (product)=>set((state)=>{\n                const existingProduct = state.cart.find((item)=>item.id === product.id);\n                if (existingProduct) {\n                    return {\n                        cart: state.cart.map((item)=>item.id === product.id ? {\n                                ...item,\n                                quantity: item.quantity + 1\n                            } : item)\n                    };\n                } else {\n                    return {\n                        cart: [\n                            ...state.cart,\n                            {\n                                ...product,\n                                quantity: 1\n                            }\n                        ]\n                    };\n                }\n            }),\n        removeFromCart: (productId)=>set((state)=>{\n                return {\n                    cart: state.cart.filter((item)=>item.id !== productId)\n                };\n            }),\n        updateQuantity: (productId, quantity)=>set((state)=>{\n                if (quantity <= 0) {\n                    return {\n                        cart: state.cart.filter((item)=>item.id !== productId)\n                    };\n                }\n                return {\n                    cart: state.cart.map((item)=>item.id === productId ? {\n                            ...item,\n                            quantity\n                        } : item)\n                };\n            }),\n        totalProduct: (state)=>{\n            var _state_cart;\n            const total = state === null || state === void 0 ? void 0 : (_state_cart = state.cart) === null || _state_cart === void 0 ? void 0 : _state_cart.reduce((sum, item)=>sum + item.quantity, 0);\n            return total || 0;\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9jcmVhdGUtc3RvcmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDO0FBSTFCLE1BQU1DLGVBQWVELCtDQUFNQSxDQUFDLENBQUNFLE1BQVM7UUFDM0NDLE1BQU0sRUFBRTtRQUNSQyxXQUFXLENBQUNDLFVBQ1ZILElBQUksQ0FBQ0k7Z0JBQ0gsTUFBTUMsa0JBQWtCRCxNQUFNSCxJQUFJLENBQUNLLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtMLFFBQVFLLEVBQUU7Z0JBQ3hFLElBQUlILGlCQUFpQjtvQkFDbkIsT0FBTzt3QkFDTEosTUFBTUcsTUFBTUgsSUFBSSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0YsT0FDcEJBLEtBQUtDLEVBQUUsS0FBS0wsUUFBUUssRUFBRSxHQUNsQjtnQ0FBRSxHQUFHRCxJQUFJO2dDQUFFRyxVQUFVSCxLQUFLRyxRQUFRLEdBQUc7NEJBQUUsSUFDdkNIO29CQUVSO2dCQUNGLE9BQU87b0JBQ0wsT0FBTzt3QkFBRU4sTUFBTTsrQkFBSUcsTUFBTUgsSUFBSTs0QkFBRTtnQ0FBRSxHQUFHRSxPQUFPO2dDQUFFTyxVQUFVOzRCQUFFO3lCQUFFO29CQUFDO2dCQUM5RDtZQUNGO1FBRUZDLGdCQUFnQixDQUFDQyxZQUNmWixJQUFJLENBQUNJO2dCQUNILE9BQU87b0JBQ0xILE1BQU1HLE1BQU1ILElBQUksQ0FBQ1ksTUFBTSxDQUFDLENBQUNOLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0k7Z0JBQ2hEO1lBQ0Y7UUFFRkUsZ0JBQWdCLENBQUNGLFdBQW1CRixXQUNsQ1YsSUFBSSxDQUFDSTtnQkFDSCxJQUFJTSxZQUFZLEdBQUc7b0JBQ2pCLE9BQU87d0JBQUVULE1BQU1HLE1BQU1ILElBQUksQ0FBQ1ksTUFBTSxDQUFDLENBQUNOLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0k7b0JBQVc7Z0JBQ3BFO2dCQUVBLE9BQU87b0JBQ0xYLE1BQU1HLE1BQU1ILElBQUksQ0FBQ1EsR0FBRyxDQUFDLENBQUNGLE9BQ3BCQSxLQUFLQyxFQUFFLEtBQUtJLFlBQVk7NEJBQUUsR0FBR0wsSUFBSTs0QkFBRUc7d0JBQVMsSUFBSUg7Z0JBRXBEO1lBQ0Y7UUFDRlEsY0FBYyxDQUFDWDtnQkFDQ0E7WUFBZCxNQUFNWSxRQUFRWixrQkFBQUEsNkJBQUFBLGNBQUFBLE1BQU9ILElBQUksY0FBWEcsa0NBQUFBLFlBQWFhLE1BQU0sQ0FBQyxDQUFDQyxLQUFLWCxPQUFTVyxNQUFNWCxLQUFLRyxRQUFRLEVBQUU7WUFFdEUsT0FBT00sU0FBUztRQUNsQjtJQUNGLElBQUkiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ1bmEvbXktb3duLXNwYWNlL3Byb2R1Y3QtY2FydC9zcmMvc3RvcmUvY3JlYXRlLXN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xuXG50eXBlIGNhcnREYXRhID0geyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmc7IHF1YW50aXR5OiBudW1iZXI7IHByaWNlOiBudW1iZXIgfTtcblxuZXhwb3J0IGNvbnN0IHVzZUNhcnRTdG9yZSA9IGNyZWF0ZSgoc2V0KSA9PiAoe1xuICBjYXJ0OiBbXSxcbiAgYWRkVG9DYXJ0OiAocHJvZHVjdDogeyBpZDogYW55IH0pID0+XG4gICAgc2V0KChzdGF0ZTogeyBjYXJ0OiBjYXJ0RGF0YVtdIH0pID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZHVjdCA9IHN0YXRlLmNhcnQuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XG4gICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2FydDogc3RhdGUuY2FydC5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICBpdGVtLmlkID09PSBwcm9kdWN0LmlkXG4gICAgICAgICAgICAgID8geyAuLi5pdGVtLCBxdWFudGl0eTogaXRlbS5xdWFudGl0eSArIDEgfVxuICAgICAgICAgICAgICA6IGl0ZW1cbiAgICAgICAgICApLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgY2FydDogWy4uLnN0YXRlLmNhcnQsIHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfV0gfTtcbiAgICAgIH1cbiAgICB9KSxcblxuICByZW1vdmVGcm9tQ2FydDogKHByb2R1Y3RJZDogbnVtYmVyKSA9PlxuICAgIHNldCgoc3RhdGU6IHsgY2FydDogY2FydERhdGFbXSB9KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYXJ0OiBzdGF0ZS5jYXJ0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcHJvZHVjdElkKSxcbiAgICAgIH07XG4gICAgfSksXG5cbiAgdXBkYXRlUXVhbnRpdHk6IChwcm9kdWN0SWQ6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcikgPT5cbiAgICBzZXQoKHN0YXRlOiB7IGNhcnQ6IGNhcnREYXRhW10gfSkgPT4ge1xuICAgICAgaWYgKHF1YW50aXR5IDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHsgY2FydDogc3RhdGUuY2FydC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHByb2R1Y3RJZCkgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2FydDogc3RhdGUuY2FydC5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgaXRlbS5pZCA9PT0gcHJvZHVjdElkID8geyAuLi5pdGVtLCBxdWFudGl0eSB9IDogaXRlbVxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KSxcbiAgdG90YWxQcm9kdWN0OiAoc3RhdGU6IHsgY2FydDogY2FydERhdGFbXSB9KSA9PiB7XG4gICAgY29uc3QgdG90YWwgPSBzdGF0ZT8uY2FydD8ucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHksIDApO1xuXG4gICAgcmV0dXJuIHRvdGFsIHx8IDA7XG4gIH0sXG59KSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlIiwidXNlQ2FydFN0b3JlIiwic2V0IiwiY2FydCIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJzdGF0ZSIsImV4aXN0aW5nUHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJtYXAiLCJxdWFudGl0eSIsInJlbW92ZUZyb21DYXJ0IiwicHJvZHVjdElkIiwiZmlsdGVyIiwidXBkYXRlUXVhbnRpdHkiLCJ0b3RhbFByb2R1Y3QiLCJ0b3RhbCIsInJlZHVjZSIsInN1bSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/create-store.tsx\n"));

/***/ })

});