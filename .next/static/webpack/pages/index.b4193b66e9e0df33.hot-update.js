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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keen-slider/react */ \"./node_modules/keen-slider/react.js\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Card */ \"./src/components/Card/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Carrousel = function() {\n    var _this1 = _this;\n    _s1();\n    var ref = _slicedToArray((0,keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider)({\n        loop: true,\n        mode: \"free-snap\",\n        slides: {\n            perView: 5,\n            spacing: 1\n        }\n    }), 1), sliderRef = ref[0];\n    var productos = [\n        {\n            marca: \"motorola\",\n            imagen: \"/../public/assets/productos/celular.png\",\n            precio: \"20.999\"\n        },\n        {\n            marca: \"motorola k44\",\n            imagen: \"/../public/assets/productos/celular.png\",\n            precio: \"22.999\"\n        },\n        {\n            marca: \"motorola\",\n            imagen: \"/../public/assets/productos/celular.png\",\n            precio: \"20.999\"\n        },\n        {\n            marca: \"motorola\",\n            imagen: \"/../public/assets/productos/celular.png\",\n            precio: \"20.999\"\n        },\n        {\n            marca: \"LG 120\",\n            imagen: \"/../public/assets/productos/celular.png\",\n            precio: \"60.999\"\n        },\n        {\n            marca: \"motorola\",\n            imagen: \"/../public/assets/productos/celular.png\",\n            precio: \"20.999\"\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \" w-[70%] flex items-center justify-center mx-auto\",\n        __source: {\n            fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n            lineNumber: 45,\n            columnNumber: 11\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            ref: sliderRef,\n            className: \"keen-slider\",\n            __source: {\n                fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: productos.map(function(producto, key) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"keen-slider__slide number-slide1\",\n                    __source: {\n                        fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        producto: producto,\n                        __source: {\n                            fileName: \"/home/leonardo/Escritorio/practica ecommerce/ecommerce2/src/components/Carrousel/index.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 61\n                        },\n                        __self: _this1\n                    }, key)\n                });\n            })\n        })\n    }));\n};\n_s1(Carrousel, \"czjHPJ+WAOa0SN9idoqsoyyfytY=\", false, function() {\n    return [\n        keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider\n    ];\n});\n_c = Carrousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carrousel);\nvar _c;\n$RefreshReg$(_c, \"Carrousel\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJyb3VzZWwvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3dCO0FBQ1Q7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQixHQUFLLENBQUNHLFNBQVMsR0FBRyxRQUNsQixHQUR3QixDQUFDOzs7SUFDckIsR0FBSyxDQUFlRixHQU9oQixrQkFQZ0JBLGdFQUFhLENBQUMsQ0FBQztRQUMvQkcsSUFBSSxFQUFFLElBQUk7UUFDVkMsSUFBSSxFQUFFLENBQVc7UUFDakJDLE1BQU0sRUFBRSxDQUFDO1lBQ1BDLE9BQU8sRUFBRSxDQUFDO1lBQ1ZDLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUMsT0FQSUMsU0FBUyxHQUFJUixHQU9oQjtJQUNKLEdBQUcsQ0FBQ1MsU0FBUyxHQUFDLENBQUM7UUFDYixDQUFDO1lBQ0NDLEtBQUssRUFBQyxDQUFVO1lBQ2hCQyxNQUFNLEVBQUMsQ0FBeUM7WUFDaERDLE1BQU0sRUFBQyxDQUFRO1FBQ2pCLENBQUM7UUFDRCxDQUFDO1lBQ0NGLEtBQUssRUFBQyxDQUFjO1lBQ3BCQyxNQUFNLEVBQUMsQ0FBeUM7WUFDaERDLE1BQU0sRUFBQyxDQUFRO1FBQ2pCLENBQUM7UUFBRSxDQUFDO1lBQ0ZGLEtBQUssRUFBQyxDQUFVO1lBQ2hCQyxNQUFNLEVBQUMsQ0FBeUM7WUFDaERDLE1BQU0sRUFBQyxDQUFRO1FBQ2pCLENBQUM7UUFBRSxDQUFDO1lBQ0ZGLEtBQUssRUFBQyxDQUFVO1lBQ2hCQyxNQUFNLEVBQUMsQ0FBeUM7WUFDaERDLE1BQU0sRUFBQyxDQUFRO1FBQ2pCLENBQUM7UUFBRSxDQUFDO1lBQ0ZGLEtBQUssRUFBQyxDQUFRO1lBQ2RDLE1BQU0sRUFBQyxDQUF5QztZQUNoREMsTUFBTSxFQUFDLENBQVE7UUFDakIsQ0FBQztRQUFFLENBQUM7WUFDRkYsS0FBSyxFQUFDLENBQVU7WUFDaEJDLE1BQU0sRUFBQyxDQUF5QztZQUNoREMsTUFBTSxFQUFDLENBQVE7UUFDakIsQ0FBQztJQUVELENBQUM7SUFFRCxNQUFNLHNFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFtRDs7Ozs7Ozt1RkFFbkVELENBQUc7WUFBQ0UsR0FBRyxFQUFFUCxTQUFTO1lBQUVNLFNBQVMsRUFBQyxDQUFhOzs7Ozs7O3NCQUUxQ0wsU0FBUyxDQUFDTyxHQUFHLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUVDLEdBQUc7OEJBQzVCLE1BQU0sd0RBQUxMLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFrQzs7Ozs7OzttR0FBRWIsNkNBQUk7d0JBQUNnQixRQUFRLEVBQUVBLFFBQVE7Ozs7Ozs7dUJBQU9DLEdBQUc7Ozs7O0FBUTlGLENBQUM7SUFyREtoQixTQUFTOztRQUNTRiw0REFBYTs7O0tBRC9CRSxTQUFTO0FBdURmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcnJvdXNlbC9pbmRleC5qc3g/ODM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VLZWVuU2xpZGVyIH0gZnJvbSBcImtlZW4tc2xpZGVyL3JlYWN0XCJcbmltcG9ydCBcImtlZW4tc2xpZGVyL2tlZW4tc2xpZGVyLm1pbi5jc3NcIlxuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCdcbmNvbnN0IENhcnJvdXNlbCA9ICgpID0+IHtcbiAgICBjb25zdCBbc2xpZGVyUmVmXSA9IHVzZUtlZW5TbGlkZXIoe1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtb2RlOiBcImZyZWUtc25hcFwiLFxuICAgICAgICBzbGlkZXM6IHtcbiAgICAgICAgICBwZXJWaWV3OiA1LFxuICAgICAgICAgIHNwYWNpbmc6IDEsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIGxldCBwcm9kdWN0b3M9W1xuICAgICAge1xuICAgICAgICBtYXJjYTpcIm1vdG9yb2xhXCIsXG4gICAgICAgIGltYWdlbjpcIi8uLi9wdWJsaWMvYXNzZXRzL3Byb2R1Y3Rvcy9jZWx1bGFyLnBuZ1wiLFxuICAgICAgICBwcmVjaW86XCIyMC45OTlcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWFyY2E6XCJtb3Rvcm9sYSBrNDRcIixcbiAgICAgICAgaW1hZ2VuOlwiLy4uL3B1YmxpYy9hc3NldHMvcHJvZHVjdG9zL2NlbHVsYXIucG5nXCIsXG4gICAgICAgIHByZWNpbzpcIjIyLjk5OVwiXG4gICAgICB9LCB7XG4gICAgICAgIG1hcmNhOlwibW90b3JvbGFcIixcbiAgICAgICAgaW1hZ2VuOlwiLy4uL3B1YmxpYy9hc3NldHMvcHJvZHVjdG9zL2NlbHVsYXIucG5nXCIsXG4gICAgICAgIHByZWNpbzpcIjIwLjk5OVwiXG4gICAgICB9LCB7XG4gICAgICAgIG1hcmNhOlwibW90b3JvbGFcIixcbiAgICAgICAgaW1hZ2VuOlwiLy4uL3B1YmxpYy9hc3NldHMvcHJvZHVjdG9zL2NlbHVsYXIucG5nXCIsXG4gICAgICAgIHByZWNpbzpcIjIwLjk5OVwiXG4gICAgICB9LCB7XG4gICAgICAgIG1hcmNhOlwiTEcgMTIwXCIsXG4gICAgICAgIGltYWdlbjpcIi8uLi9wdWJsaWMvYXNzZXRzL3Byb2R1Y3Rvcy9jZWx1bGFyLnBuZ1wiLFxuICAgICAgICBwcmVjaW86XCI2MC45OTlcIlxuICAgICAgfSwge1xuICAgICAgICBtYXJjYTpcIm1vdG9yb2xhXCIsXG4gICAgICAgIGltYWdlbjpcIi8uLi9wdWJsaWMvYXNzZXRzL3Byb2R1Y3Rvcy9jZWx1bGFyLnBuZ1wiLFxuICAgICAgICBwcmVjaW86XCIyMC45OTlcIlxuICAgICAgfSxcblxuICAgICAgXVxuICAgIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHctWzcwJV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byc+XG5cbiAgICAgICAgPGRpdiByZWY9e3NsaWRlclJlZn0gY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJcIj5cbiAgICAgICAge1xuICAgICAgICAgIHByb2R1Y3Rvcy5tYXAoKHByb2R1Y3RvLCBrZXkgKT0+KFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIG51bWJlci1zbGlkZTFcIj48Q2FyZCBwcm9kdWN0bz17cHJvZHVjdG99IGtleT17a2V5fSAvPjwvZGl2PlxuICAgICAgICAgIClcbilcbiAgICAgICAgfSBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnJvdXNlbFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlS2VlblNsaWRlciIsIkNhcmQiLCJDYXJyb3VzZWwiLCJsb29wIiwibW9kZSIsInNsaWRlcyIsInBlclZpZXciLCJzcGFjaW5nIiwic2xpZGVyUmVmIiwicHJvZHVjdG9zIiwibWFyY2EiLCJpbWFnZW4iLCJwcmVjaW8iLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJtYXAiLCJwcm9kdWN0byIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Carrousel/index.jsx\n");

/***/ })

});