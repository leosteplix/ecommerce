"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Carrousel/index.jsx":
/*!********************************************!*\
  !*** ./src/components/Carrousel/index.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keen-slider/react */ \"./node_modules/keen-slider/react.js\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Card */ \"./src/components/Card/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Carrousel = function(param) {\n    var productos = param.productos;\n    var _this1 = _this;\n    _s1();\n    var ref = _slicedToArray((0,keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider)({\n        loop: true,\n        mode: \"free-snap\",\n        slides: {\n            perView: 5,\n            spacing: 1\n        }\n    }), 1), sliderRef = ref[0];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \" w-[70%] flex items-center justify-center mx-auto\",\n        __source: {\n            fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            ref: sliderRef,\n            className: \"keen-slider\",\n            __source: {\n                fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: productos.map(function(producto, key) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"keen-slider__slide number-slide1\",\n                    __source: {\n                        fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        producto: producto,\n                        __source: {\n                            fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        },\n                        __self: _this1\n                    }, key)\n                });\n            })\n        })\n    }));\n};\n_s1(Carrousel, \"czjHPJ+WAOa0SN9idoqsoyyfytY=\", false, function() {\n    return [\n        keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider\n    ];\n});\n_c = Carrousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carrousel);\nvar _c;\n$RefreshReg$(_c, \"Carrousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJyb3VzZWwvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3dCO0FBQ1Q7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQixHQUFLLENBQUNHLFNBQVMsR0FBRyxRQUFRLFFBQVcsQ0FBQztRQUFqQkMsU0FBUyxTQUFUQSxTQUFTOzs7SUFDNUIsR0FBSyxDQUFlSCxHQU9sQixrQkFQa0JBLGdFQUFhLENBQUMsQ0FBQztRQUNqQ0ksSUFBSSxFQUFFLElBQUk7UUFDVkMsSUFBSSxFQUFFLENBQVc7UUFDakJDLE1BQU0sRUFBRSxDQUFDO1lBQ1BDLE9BQU8sRUFBRSxDQUFDO1lBQ1ZDLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUMsT0FQTUMsU0FBUyxHQUFJVCxHQU9sQjtJQUVGLE1BQU0sc0VBQ0hVLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQW1EOzs7Ozs7O3VGQUMvREQsQ0FBRztZQUFDRSxHQUFHLEVBQUVILFNBQVM7WUFBRUUsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7c0JBQ3pDUixTQUFTLENBQUNVLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBRUMsR0FBRzs4QkFDM0IsTUFBTSx3REFBTEwsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQWtDOzs7Ozs7O21HQUM5Q1YsNkNBQUk7d0JBQUNhLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozt1QkFBT0MsR0FBRzs7Ozs7QUFNOUMsQ0FBQztJQXJCS2IsU0FBUzs7UUFDT0YsNERBQWE7OztLQUQ3QkUsU0FBUztBQXVCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcnJvdXNlbC9pbmRleC5qc3g/ODM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VLZWVuU2xpZGVyIH0gZnJvbSBcImtlZW4tc2xpZGVyL3JlYWN0XCI7XG5pbXBvcnQgXCJrZWVuLXNsaWRlci9rZWVuLXNsaWRlci5taW4uY3NzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vQ2FyZFwiO1xuY29uc3QgQ2Fycm91c2VsID0gKHsgcHJvZHVjdG9zIH0pID0+IHtcbiAgY29uc3QgW3NsaWRlclJlZl0gPSB1c2VLZWVuU2xpZGVyKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIG1vZGU6IFwiZnJlZS1zbmFwXCIsXG4gICAgc2xpZGVzOiB7XG4gICAgICBwZXJWaWV3OiA1LFxuICAgICAgc3BhY2luZzogMSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctWzcwJV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0b1wiPlxuICAgICAgPGRpdiByZWY9e3NsaWRlclJlZn0gY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJcIj5cbiAgICAgICAge3Byb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvLCBrZXkpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtlZW4tc2xpZGVyX19zbGlkZSBudW1iZXItc2xpZGUxXCI+XG4gICAgICAgICAgICA8Q2FyZCBwcm9kdWN0bz17cHJvZHVjdG99IGtleT17a2V5fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fycm91c2VsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlS2VlblNsaWRlciIsIkNhcmQiLCJDYXJyb3VzZWwiLCJwcm9kdWN0b3MiLCJsb29wIiwibW9kZSIsInNsaWRlcyIsInBlclZpZXciLCJzcGFjaW5nIiwic2xpZGVyUmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwibWFwIiwicHJvZHVjdG8iLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Carrousel/index.jsx\n");

/***/ })

});