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

/***/ "(app-pages-browser)/./src/api/mock-data.tsx":
/*!*******************************!*\
  !*** ./src/api/mock-data.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchProducts: () => (/* binding */ fetchProducts)\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ fetchProducts auto */ const mockData = {\n    listing: [\n        {\n            id: \"1\",\n            name: \"Milk\",\n            price: 1.5,\n            quantity: 0\n        },\n        {\n            id: \"2\",\n            name: \"Cheese\",\n            price: 4.0,\n            quantity: 0\n        },\n        {\n            id: \"3\",\n            name: \"Yogurt\",\n            price: 2.0,\n            quantity: 0\n        },\n        {\n            id: \"4\",\n            name: \"Butter\",\n            price: 3.5,\n            quantity: 0\n        },\n        {\n            id: \"5\",\n            name: \"Apple\",\n            price: 0.8,\n            quantity: 0\n        },\n        {\n            id: \"6\",\n            name: \"Banana\",\n            price: 0.6,\n            quantity: 0\n        },\n        {\n            id: \"7\",\n            name: \"Orange\",\n            price: 1.2,\n            quantity: 0\n        },\n        {\n            id: \"8\",\n            name: \"Strawberry\",\n            price: 2.5,\n            quantity: 0\n        },\n        {\n            id: \"9\",\n            name: \"Lemon\",\n            price: 0.5,\n            quantity: 0\n        },\n        {\n            id: \"10\",\n            name: \"Blueberry\",\n            price: 3.0,\n            quantity: 0\n        },\n        {\n            id: \"11\",\n            name: \"Grapes\",\n            price: 2.8,\n            quantity: 0\n        },\n        {\n            id: \"12\",\n            name: \"Peach\",\n            price: 1.7,\n            quantity: 0\n        },\n        {\n            id: \"13\",\n            name: \"Milk Powder\",\n            price: 5.0,\n            quantity: 0\n        },\n        {\n            id: \"14\",\n            name: \"Cottage Cheese\",\n            price: 3.2,\n            quantity: 0\n        },\n        {\n            id: \"15\",\n            name: \"Ice Cream\",\n            price: 4.5,\n            quantity: 0\n        },\n        {\n            id: \"16\",\n            name: \"Mango\",\n            price: 1.5,\n            quantity: 0\n        },\n        {\n            id: \"17\",\n            name: \"Pineapple\",\n            price: 2.2,\n            quantity: 0\n        },\n        {\n            id: \"18\",\n            name: \"Avocado\",\n            price: 2.0,\n            quantity: 0\n        },\n        {\n            id: \"19\",\n            name: \"Kiwi\",\n            price: 1.8,\n            quantity: 0\n        },\n        {\n            id: \"20\",\n            name: \"Carrot\",\n            price: 0.9,\n            quantity: 0\n        }\n    ],\n    search: [\n        {\n            id: \"2\",\n            name: \"Cheese\",\n            price: 4.0,\n            quantity: 0\n        },\n        {\n            id: \"4\",\n            name: \"Butter\",\n            price: 3.5,\n            quantity: 0\n        },\n        {\n            id: \"5\",\n            name: \"Apple\",\n            price: 0.8,\n            quantity: 0\n        },\n        {\n            id: \"6\",\n            name: \"Banana\",\n            price: 0.6,\n            quantity: 0\n        },\n        {\n            id: \"10\",\n            name: \"Blueberry\",\n            price: 3.0,\n            quantity: 0\n        },\n        {\n            id: \"12\",\n            name: \"Peach\",\n            price: 1.7,\n            quantity: 0\n        },\n        {\n            id: \"14\",\n            name: \"Cottage Cheese\",\n            price: 3.2,\n            quantity: 0\n        },\n        {\n            id: \"16\",\n            name: \"Mango\",\n            price: 1.5,\n            quantity: 0\n        },\n        {\n            id: \"19\",\n            name: \"Kiwi\",\n            price: 1.8,\n            quantity: 0\n        }\n    ]\n};\nconst fetchProducts = async (page)=>{\n    return JSON.parse(JSON.stringify(mockData[page]));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkvbW9jay1kYXRhLnRzeCIsIm1hcHBpbmdzIjoiOzs7O21FQUVBLE1BQU1BLFdBQVc7SUFDZkMsU0FBUztRQUNQO1lBQUVDLElBQUk7WUFBS0MsTUFBTTtZQUFRQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUNqRDtZQUFFSCxJQUFJO1lBQUtDLE1BQU07WUFBVUMsT0FBTztZQUFLQyxVQUFVO1FBQUU7UUFDbkQ7WUFBRUgsSUFBSTtZQUFLQyxNQUFNO1lBQVVDLE9BQU87WUFBS0MsVUFBVTtRQUFFO1FBQ25EO1lBQUVILElBQUk7WUFBS0MsTUFBTTtZQUFVQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUNuRDtZQUFFSCxJQUFJO1lBQUtDLE1BQU07WUFBU0MsT0FBTztZQUFLQyxVQUFVO1FBQUU7UUFDbEQ7WUFBRUgsSUFBSTtZQUFLQyxNQUFNO1lBQVVDLE9BQU87WUFBS0MsVUFBVTtRQUFFO1FBQ25EO1lBQUVILElBQUk7WUFBS0MsTUFBTTtZQUFVQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUNuRDtZQUFFSCxJQUFJO1lBQUtDLE1BQU07WUFBY0MsT0FBTztZQUFLQyxVQUFVO1FBQUU7UUFDdkQ7WUFBRUgsSUFBSTtZQUFLQyxNQUFNO1lBQVNDLE9BQU87WUFBS0MsVUFBVTtRQUFFO1FBQ2xEO1lBQUVILElBQUk7WUFBTUMsTUFBTTtZQUFhQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUN2RDtZQUFFSCxJQUFJO1lBQU1DLE1BQU07WUFBVUMsT0FBTztZQUFLQyxVQUFVO1FBQUU7UUFDcEQ7WUFBRUgsSUFBSTtZQUFNQyxNQUFNO1lBQVNDLE9BQU87WUFBS0MsVUFBVTtRQUFFO1FBQ25EO1lBQUVILElBQUk7WUFBTUMsTUFBTTtZQUFlQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUN6RDtZQUFFSCxJQUFJO1lBQU1DLE1BQU07WUFBa0JDLE9BQU87WUFBS0MsVUFBVTtRQUFFO1FBQzVEO1lBQUVILElBQUk7WUFBTUMsTUFBTTtZQUFhQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUN2RDtZQUFFSCxJQUFJO1lBQU1DLE1BQU07WUFBU0MsT0FBTztZQUFLQyxVQUFVO1FBQUU7UUFDbkQ7WUFBRUgsSUFBSTtZQUFNQyxNQUFNO1lBQWFDLE9BQU87WUFBS0MsVUFBVTtRQUFFO1FBQ3ZEO1lBQUVILElBQUk7WUFBTUMsTUFBTTtZQUFXQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUNyRDtZQUFFSCxJQUFJO1lBQU1DLE1BQU07WUFBUUMsT0FBTztZQUFLQyxVQUFVO1FBQUU7UUFDbEQ7WUFBRUgsSUFBSTtZQUFNQyxNQUFNO1lBQVVDLE9BQU87WUFBS0MsVUFBVTtRQUFFO0tBQ3JEO0lBQ0RDLFFBQVE7UUFDTjtZQUFFSixJQUFJO1lBQUtDLE1BQU07WUFBVUMsT0FBTztZQUFLQyxVQUFVO1FBQUU7UUFDbkQ7WUFBRUgsSUFBSTtZQUFLQyxNQUFNO1lBQVVDLE9BQU87WUFBS0MsVUFBVTtRQUFFO1FBQ25EO1lBQUVILElBQUk7WUFBS0MsTUFBTTtZQUFTQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUNsRDtZQUFFSCxJQUFJO1lBQUtDLE1BQU07WUFBVUMsT0FBTztZQUFLQyxVQUFVO1FBQUU7UUFDbkQ7WUFBRUgsSUFBSTtZQUFNQyxNQUFNO1lBQWFDLE9BQU87WUFBS0MsVUFBVTtRQUFFO1FBQ3ZEO1lBQUVILElBQUk7WUFBTUMsTUFBTTtZQUFTQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUNuRDtZQUFFSCxJQUFJO1lBQU1DLE1BQU07WUFBa0JDLE9BQU87WUFBS0MsVUFBVTtRQUFFO1FBQzVEO1lBQUVILElBQUk7WUFBTUMsTUFBTTtZQUFTQyxPQUFPO1lBQUtDLFVBQVU7UUFBRTtRQUNuRDtZQUFFSCxJQUFJO1lBQU1DLE1BQU07WUFBUUMsT0FBTztZQUFLQyxVQUFVO1FBQUU7S0FDbkQ7QUFDSDtBQUVPLE1BQU1FLGdCQUFnQixPQUFPQztJQUNsQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQ1gsUUFBUSxDQUFDUSxLQUFLO0FBQ2pELEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ1bmEvbXktb3duLXNwYWNlL3Byb2R1Y3QtY2FydC9zcmMvYXBpL21vY2stZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmNvbnN0IG1vY2tEYXRhID0ge1xuICBsaXN0aW5nOiBbXG4gICAgeyBpZDogXCIxXCIsIG5hbWU6IFwiTWlsa1wiLCBwcmljZTogMS41LCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiMlwiLCBuYW1lOiBcIkNoZWVzZVwiLCBwcmljZTogNC4wLCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiM1wiLCBuYW1lOiBcIllvZ3VydFwiLCBwcmljZTogMi4wLCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiNFwiLCBuYW1lOiBcIkJ1dHRlclwiLCBwcmljZTogMy41LCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiNVwiLCBuYW1lOiBcIkFwcGxlXCIsIHByaWNlOiAwLjgsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBpZDogXCI2XCIsIG5hbWU6IFwiQmFuYW5hXCIsIHByaWNlOiAwLjYsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBpZDogXCI3XCIsIG5hbWU6IFwiT3JhbmdlXCIsIHByaWNlOiAxLjIsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBpZDogXCI4XCIsIG5hbWU6IFwiU3RyYXdiZXJyeVwiLCBwcmljZTogMi41LCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiOVwiLCBuYW1lOiBcIkxlbW9uXCIsIHByaWNlOiAwLjUsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBpZDogXCIxMFwiLCBuYW1lOiBcIkJsdWViZXJyeVwiLCBwcmljZTogMy4wLCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiMTFcIiwgbmFtZTogXCJHcmFwZXNcIiwgcHJpY2U6IDIuOCwgcXVhbnRpdHk6IDAgfSxcbiAgICB7IGlkOiBcIjEyXCIsIG5hbWU6IFwiUGVhY2hcIiwgcHJpY2U6IDEuNywgcXVhbnRpdHk6IDAgfSxcbiAgICB7IGlkOiBcIjEzXCIsIG5hbWU6IFwiTWlsayBQb3dkZXJcIiwgcHJpY2U6IDUuMCwgcXVhbnRpdHk6IDAgfSxcbiAgICB7IGlkOiBcIjE0XCIsIG5hbWU6IFwiQ290dGFnZSBDaGVlc2VcIiwgcHJpY2U6IDMuMiwgcXVhbnRpdHk6IDAgfSxcbiAgICB7IGlkOiBcIjE1XCIsIG5hbWU6IFwiSWNlIENyZWFtXCIsIHByaWNlOiA0LjUsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBpZDogXCIxNlwiLCBuYW1lOiBcIk1hbmdvXCIsIHByaWNlOiAxLjUsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBpZDogXCIxN1wiLCBuYW1lOiBcIlBpbmVhcHBsZVwiLCBwcmljZTogMi4yLCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiMThcIiwgbmFtZTogXCJBdm9jYWRvXCIsIHByaWNlOiAyLjAsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBpZDogXCIxOVwiLCBuYW1lOiBcIktpd2lcIiwgcHJpY2U6IDEuOCwgcXVhbnRpdHk6IDAgfSxcbiAgICB7IGlkOiBcIjIwXCIsIG5hbWU6IFwiQ2Fycm90XCIsIHByaWNlOiAwLjksIHF1YW50aXR5OiAwIH0sXG4gIF0sXG4gIHNlYXJjaDogW1xuICAgIHsgaWQ6IFwiMlwiLCBuYW1lOiBcIkNoZWVzZVwiLCBwcmljZTogNC4wLCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiNFwiLCBuYW1lOiBcIkJ1dHRlclwiLCBwcmljZTogMy41LCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiNVwiLCBuYW1lOiBcIkFwcGxlXCIsIHByaWNlOiAwLjgsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBpZDogXCI2XCIsIG5hbWU6IFwiQmFuYW5hXCIsIHByaWNlOiAwLjYsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBpZDogXCIxMFwiLCBuYW1lOiBcIkJsdWViZXJyeVwiLCBwcmljZTogMy4wLCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiMTJcIiwgbmFtZTogXCJQZWFjaFwiLCBwcmljZTogMS43LCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiMTRcIiwgbmFtZTogXCJDb3R0YWdlIENoZWVzZVwiLCBwcmljZTogMy4yLCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiMTZcIiwgbmFtZTogXCJNYW5nb1wiLCBwcmljZTogMS41LCBxdWFudGl0eTogMCB9LFxuICAgIHsgaWQ6IFwiMTlcIiwgbmFtZTogXCJLaXdpXCIsIHByaWNlOiAxLjgsIHF1YW50aXR5OiAwIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jIChwYWdlOiBsaXN0aW5nKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1vY2tEYXRhW3BhZ2VdKSk7XG59O1xuIl0sIm5hbWVzIjpbIm1vY2tEYXRhIiwibGlzdGluZyIsImlkIiwibmFtZSIsInByaWNlIiwicXVhbnRpdHkiLCJzZWFyY2giLCJmZXRjaFByb2R1Y3RzIiwicGFnZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api/mock-data.tsx\n"));

/***/ })

});