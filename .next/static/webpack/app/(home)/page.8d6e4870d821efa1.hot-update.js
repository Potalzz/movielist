/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./styles/movie.module.css":
/*!*********************************!*\
  !*** ./styles/movie.module.css ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// extracted by mini-css-extract-plugin\nmodule.exports = {\"movie\":\"movie_movie__n6Ry2\"};\n    if(true) {\n      // 1712573433135\n      var cssReload = __webpack_require__(/*! ./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js */ \"(app-pages-browser)/./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"/_next/\",\"esModule\":false,\"locals\":true});\n      module.hot.dispose(cssReload);\n      \n    }\n  \nmodule.exports.__checksum = \"1134e743e804\"\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9tb3ZpZS5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdNQUE0SSxjQUFjLHNEQUFzRDtBQUM5TyxNQUFNLFVBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9tb3ZpZS5tb2R1bGUuY3NzPzQ5MjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1vdmllXCI6XCJtb3ZpZV9tb3ZpZV9fbjZSeTJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTcxMjU3MzQzMzEzNVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy/smKTshLjqtJEvRGVza3RvcC9qYXZhUHJhY3RpY2UvTmV4dGpzL21vdmllIHByb2plY3Qvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCIvX25leHQvXCIsXCJlc01vZHVsZVwiOmZhbHNlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gIFxubW9kdWxlLmV4cG9ydHMuX19jaGVja3N1bSA9IFwiMTEzNGU3NDNlODA0XCJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/movie.module.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/movie.jsx":
/*!******************************!*\
  !*** ./components/movie.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movie; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/movie.module.css */ \"(app-pages-browser)/./styles/movie.module.css\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// async function getMovie(id) {\n//   const response = await fetch(`${API_URL}/${id}`);\n//   const json = await response.json();\n//   // const movie = (await fetch(API_URL)).json();\n//   return json;\n// }\nfunction Movie(param) {\n    let { id, title, poster_path } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleClick = (e)=>{\n        e.preventDefault();\n        router.push(\"/movies/\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: id,\n        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: poster_path,\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\오세광\\\\Desktop\\\\javaPractice\\\\Nextjs\\\\movie project\\\\components\\\\movie.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\오세광\\\\Desktop\\\\javaPractice\\\\Nextjs\\\\movie project\\\\components\\\\movie.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\오세광\\\\Desktop\\\\javaPractice\\\\Nextjs\\\\movie project\\\\components\\\\movie.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\오세광\\\\Desktop\\\\javaPractice\\\\Nextjs\\\\movie project\\\\components\\\\movie.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Movie, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Movie;\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW92aWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ2U7QUFDSTtBQUVoRCxnQ0FBZ0M7QUFDaEMsc0RBQXNEO0FBQ3RELHdDQUF3QztBQUN4QyxvREFBb0Q7QUFDcEQsaUJBQWlCO0FBQ2pCLElBQUk7QUFFVyxTQUFTRyxNQUFNLEtBQTBCO1FBQTFCLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBMUI7O0lBQzVCLE1BQU1DLFNBQVNOLDBEQUFTQTtJQUN4QixNQUFNTyxjQUFjLENBQUNDO1FBQ25CQSxFQUFFQyxjQUFjO1FBQ2hCSCxPQUFPSSxJQUFJLENBQUMsV0FBYyxPQUFIUDtJQUN6QjtJQUVBLHFCQUNFLDhEQUFDUTtRQUFJUixJQUFJQTtRQUFJUyxXQUFXWCwyRUFBZ0I7OzBCQUN0Qyw4REFBQ2E7Z0JBQUVDLE1BQUs7Z0JBQUlDLFNBQVNUOzBCQUNuQiw0RUFBQ1U7b0JBQUlDLEtBQUtiO29CQUFhYyxLQUFLZjs7Ozs7Ozs7Ozs7MEJBRTlCLDhEQUFDZ0I7MEJBQUloQjs7Ozs7Ozs7Ozs7O0FBR1g7R0Fmd0JGOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vdmllLmpzeD83NTc0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL21vdmllLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGdldE1vdmllKGlkKSB7XHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS8ke2lkfWApO1xyXG4vLyAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgLy8gY29uc3QgbW92aWUgPSAoYXdhaXQgZmV0Y2goQVBJX1VSTCkpLmpzb24oKTtcclxuLy8gICByZXR1cm4ganNvbjtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWUoeyBpZCwgdGl0bGUsIHBvc3Rlcl9wYXRoIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByb3V0ZXIucHVzaChgL21vdmllcy8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGEgaHJlZj1cIi9cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgPGltZyBzcmM9e3Bvc3Rlcl9wYXRofSBhbHQ9e3RpdGxlfSAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJNb3ZpZSIsImlkIiwidGl0bGUiLCJwb3N0ZXJfcGF0aCIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImEiLCJocmVmIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/movie.jsx\n"));

/***/ })

});