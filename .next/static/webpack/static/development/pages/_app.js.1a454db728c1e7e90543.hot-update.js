webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./modules/layout/components/naviguation/user/index.jsx":
/*!**************************************************************!*\
  !*** ./modules/layout/components/naviguation/user/index.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_components_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/auth/components/UserContext */ \"./modules/auth/components/UserContext.jsx\");\n/* harmony import */ var _commons_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/commons/components */ \"./modules/commons/components/index.js\");\n\n\nvar _jsxFileName = \"/Users/benjamin/Desktop/perso/ventejob/modules/layout/components/naviguation/user/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction UserNaviguation() {\n  _s();\n\n  var _useAuth = Object(_auth_components_UserContext__WEBPACK_IMPORTED_MODULE_3__[\"useAuth\"])(),\n      _useAuth2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useAuth, 2),\n      session = _useAuth2[0],\n      logout = _useAuth2[1];\n\n  console.log(logout);\n  return __jsx(\"nav\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, session ? __jsx(_commons_components__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    size: \"large\",\n    kind: \"primary\",\n    onClick: logout,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"logout\") : __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/auth/signin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, \"Connexion\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/auth/signup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, \"Inscription\"))));\n}\n\n_s(UserNaviguation, \"QLt+pyyfOoGlbffN59JE74BXFxo=\", false, function () {\n  return [_auth_components_UserContext__WEBPACK_IMPORTED_MODULE_3__[\"useAuth\"]];\n});\n\n_c = UserNaviguation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserNaviguation);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserNaviguation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL25hdmlndWF0aW9uL3VzZXIvaW5kZXguanN4Pzc1OTUiXSwibmFtZXMiOlsiVXNlck5hdmlndWF0aW9uIiwidXNlQXV0aCIsInNlc3Npb24iLCJsb2dvdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsR0FBMkI7QUFBQTs7QUFBQSxpQkFDQ0MsNEVBQU8sRUFEUjtBQUFBO0FBQUEsTUFDbEJDLE9BRGtCO0FBQUEsTUFDVEMsTUFEUzs7QUFFekJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELE9BQU8sR0FDTixNQUFDLDBEQUFEO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBcUIsUUFBSSxFQUFDLFNBQTFCO0FBQW9DLFdBQU8sRUFBRUMsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURNLEdBS04sTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsRUFJRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FKRixDQU5KLENBREY7QUFrQkQ7O0dBckJRSCxlO1VBQ21CQyxvRTs7O0tBRG5CRCxlO0FBdUJNQSw4RUFBZiIsImZpbGUiOiIuL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvbmF2aWd1YXRpb24vdXNlci9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiQC9hdXRoL2NvbXBvbmVudHMvVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbW1vbnMvY29tcG9uZW50c1wiO1xuXG5mdW5jdGlvbiBVc2VyTmF2aWd1YXRpb24oKSB7XG4gIGNvbnN0IFtzZXNzaW9uLCBsb2dvdXRdID0gdXNlQXV0aCgpO1xuICBjb25zb2xlLmxvZyhsb2dvdXQpO1xuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICB7c2Vzc2lvbiA/IChcbiAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiBraW5kPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2xvZ291dH0+XG4gICAgICAgICAgbG9nb3V0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9zaWduaW5cIj5cbiAgICAgICAgICAgIDxhPkNvbm5leGlvbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3NpZ251cFwiPlxuICAgICAgICAgICAgPGE+SW5zY3JpcHRpb248L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlck5hdmlndWF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/layout/components/naviguation/user/index.jsx\n");

/***/ })

})