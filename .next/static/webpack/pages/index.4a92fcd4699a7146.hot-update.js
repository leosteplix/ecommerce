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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keen-slider/react */ \"./node_modules/keen-slider/react.js\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Card */ \"./src/components/Card/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Carrousel = function(param) {\n    var productos = param.productos, titulo = param.titulo, subtitulo = param.subtitulo;\n    var _this1 = _this;\n    _s1();\n    var ref = _slicedToArray((0,keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider)({\n        loop: true,\n        mode: \"free-snap\",\n        slides: {\n            perView: 5,\n            spacing: 10\n        }\n    }), 1), sliderRef = ref[0];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"w-[70%] mx-auto my-2\",\n        __source: {\n            fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                className: \" text-[26px] text-[#666666e1]\",\n                __source: {\n                    fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    titulo,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        __source: {\n                            fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 61\n                        },\n                        __self: _this,\n                        children: subtitulo\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                __source: {\n                    fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: subtitulo\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \" flex items-center justify-center \",\n                __source: {\n                    fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    ref: sliderRef,\n                    className: \"keen-slider\",\n                    __source: {\n                        fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: productos.map(function(producto, key) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"keen-slider__slide number-slide1\",\n                            __source: {\n                                fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                producto: producto,\n                                __source: {\n                                    fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            }, key)\n                        });\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s1(Carrousel, \"czjHPJ+WAOa0SN9idoqsoyyfytY=\", false, function() {\n    return [\n        keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider\n    ];\n});\n_c = Carrousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carrousel);\nvar _c;\n$RefreshReg$(_c, \"Carrousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJyb3VzZWwvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3dCO0FBQ1Q7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQixHQUFLLENBQUNHLFNBQVMsR0FBRyxRQUFRLFFBQThCLENBQUM7UUFBcENDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsU0FBUyxTQUFUQSxTQUFTOzs7SUFDL0MsR0FBSyxDQUFlTCxHQU9sQixrQkFQa0JBLGdFQUFhLENBQUMsQ0FBQztRQUNqQ00sSUFBSSxFQUFFLElBQUk7UUFDVkMsSUFBSSxFQUFFLENBQVc7UUFDakJDLE1BQU0sRUFBRSxDQUFDO1lBQ1BDLE9BQU8sRUFBRSxDQUFDO1lBQ1ZDLE9BQU8sRUFBRSxFQUFFO1FBQ2IsQ0FBQztJQUNILENBQUMsT0FQTUMsU0FBUyxHQUFJWCxHQU9sQjtJQUVGLE1BQU0sdUVBQ0hZLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXNCOzs7Ozs7OztrRkFDbENDLENBQUM7Z0JBQUNELFNBQVMsRUFBQyxDQUErQjs7Ozs7Ozs7b0JBQUVULE1BQU07b0JBQUMsQ0FBQzt5RkFBQ1csQ0FBSTs7Ozs7OztrQ0FBRVYsU0FBUzs7OztpRkFDckVVLENBQUk7Ozs7Ozs7MEJBQUVWLFNBQVM7O2lGQUNmTyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUM7Ozs7Ozs7K0ZBQ25ERCxDQUFHO29CQUFDSSxHQUFHLEVBQUVMLFNBQVM7b0JBQUVFLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzhCQUN6Q1YsU0FBUyxDQUFDYyxHQUFHLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUVDLEdBQUc7c0NBQzNCLE1BQU0sd0RBQUxQLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFrQzs7Ozs7OzsyR0FDOUNaLDZDQUFJO2dDQUFDaUIsUUFBUSxFQUFFQSxRQUFROzs7Ozs7OytCQUFPQyxHQUFHOzs7Ozs7O0FBUTlDLENBQUM7SUExQktqQixTQUFTOztRQUNPRiw0REFBYTs7O0tBRDdCRSxTQUFTO0FBNEJmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fycm91c2VsL2luZGV4LmpzeD84MzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUtlZW5TbGlkZXIgfSBmcm9tIFwia2Vlbi1zbGlkZXIvcmVhY3RcIjtcbmltcG9ydCBcImtlZW4tc2xpZGVyL2tlZW4tc2xpZGVyLm1pbi5jc3NcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9DYXJkXCI7XG5jb25zdCBDYXJyb3VzZWwgPSAoeyBwcm9kdWN0b3MsIHRpdHVsbywgc3VidGl0dWxvIH0pID0+IHtcbiAgY29uc3QgW3NsaWRlclJlZl0gPSB1c2VLZWVuU2xpZGVyKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIG1vZGU6IFwiZnJlZS1zbmFwXCIsXG4gICAgc2xpZGVzOiB7XG4gICAgICBwZXJWaWV3OiA1LFxuICAgICAgc3BhY2luZzogMTAsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzcwJV0gbXgtYXV0byBteS0yXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1bMjZweF0gdGV4dC1bIzY2NjY2NmUxXVwiPnt0aXR1bG99IDxzcGFuPntzdWJ0aXR1bG99PC9zcGFuPjwvcD5cbiAgICAgIDxzcGFuPntzdWJ0aXR1bG99PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxuICAgICAgPGRpdiByZWY9e3NsaWRlclJlZn0gY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJcIj5cbiAgICAgICAge3Byb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvLCBrZXkpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtlZW4tc2xpZGVyX19zbGlkZSBudW1iZXItc2xpZGUxXCI+XG4gICAgICAgICAgICA8Q2FyZCBwcm9kdWN0bz17cHJvZHVjdG99IGtleT17a2V5fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fycm91c2VsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlS2VlblNsaWRlciIsIkNhcmQiLCJDYXJyb3VzZWwiLCJwcm9kdWN0b3MiLCJ0aXR1bG8iLCJzdWJ0aXR1bG8iLCJsb29wIiwibW9kZSIsInNsaWRlcyIsInBlclZpZXciLCJzcGFjaW5nIiwic2xpZGVyUmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJyZWYiLCJtYXAiLCJwcm9kdWN0byIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Carrousel/index.jsx\n");

/***/ })

});