"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevueapp"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './auth/AuthService'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst API_URL = 'http://localhost:8080';\nconst auth = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './auth/AuthService'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app',\n\n  data() {\n    this.handleAuthentication();\n    this.authenticated = false;\n    auth.authNotifier.on('authChange', authState => {\n      this.authenticated = authState.authenticated;\n    });\n    return {\n      authenticated: false,\n      message: ''\n    };\n  },\n\n  methods: {\n    // this method calls the AuthService login() method\n    login() {\n      auth.login();\n    },\n\n    handleAuthentication() {\n      auth.handleAuthentication();\n    },\n\n    logout() {\n      auth.logout();\n    },\n\n    privateMessage() {\n      const url = `${API_URL}/api/private/`;\n      return axios__WEBPACK_IMPORTED_MODULE_1___default().get(url, {\n        headers: {\n          Authorization: `Bearer ${auth.getAuthToken()}`\n        }\n      }).then(response => {\n        console.log(response.data);\n        this.message = response.data || '';\n      });\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUE0QkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBakJBO0FBaEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL0FwcC52dWU/OTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1hcmdpblwiXG4gICAgICB2LWlmPVwiIWF1dGhlbnRpY2F0ZWRcIlxuICAgICAgQGNsaWNrPVwibG9naW4oKVwiPlxuICAgICAgTG9nIEluXG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbWFyZ2luXCJcbiAgICAgIHYtaWY9XCJhdXRoZW50aWNhdGVkXCJcbiAgICAgIEBjbGljaz1cInByaXZhdGVNZXNzYWdlKClcIj5cbiAgICAgIENhbGwgUHJpdmF0ZVxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1hcmdpblwiXG4gICAgICB2LWlmPVwiYXV0aGVudGljYXRlZFwiXG4gICAgICBAY2xpY2s9XCJsb2dvdXQoKVwiPlxuICAgICAgTG9nIE91dFxuICAgIDwvYnV0dG9uPlxuICAgIHt7XCJ7eyBcIn19e3sgXCJtZXNzYWdlXCIgfX0gfX1cbiAgICA8YnI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuL2F1dGgvQXV0aFNlcnZpY2UnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJ1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhTZXJ2aWNlKClcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FwcCcsXG4gIGRhdGEgKCkge1xuICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24oKVxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlXG5cbiAgICBhdXRoLmF1dGhOb3RpZmllci5vbignYXV0aENoYW5nZScsIGF1dGhTdGF0ZSA9PiB7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBhdXRoU3RhdGUuYXV0aGVudGljYXRlZFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnJ1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLy8gdGhpcyBtZXRob2QgY2FsbHMgdGhlIEF1dGhTZXJ2aWNlIGxvZ2luKCkgbWV0aG9kXG4gICAgbG9naW4gKCkge1xuICAgICAgYXV0aC5sb2dpbigpXG4gICAgfSxcbiAgICBoYW5kbGVBdXRoZW50aWNhdGlvbiAoKSB7XG4gICAgICBhdXRoLmhhbmRsZUF1dGhlbnRpY2F0aW9uKClcbiAgICB9LFxuICAgIGxvZ291dCAoKSB7XG4gICAgICBhdXRoLmxvZ291dCgpXG4gICAgfSxcbiAgICBwcml2YXRlTWVzc2FnZSAoKSB7XG4gICAgICBjb25zdCB1cmwgPSBgJHtBUElfVVJMfS9hcGkvcHJpdmF0ZS9gXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCwge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5nZXRBdXRoVG9rZW4oKX1gfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3BvbnNlLmRhdGEgfHwgJydcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4jYXBwIHtcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cbm5hdiB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbm5hdiBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG5uYXYgYS5yb3V0ZXItbGluay1leGFjdC1hY3RpdmUge1xuICBjb2xvcjogIzQyYjk4Mztcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(\"{{ \") + /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(\"message\") + \" }} \");\n\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [!$data.authenticated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n    key: 0,\n    class: \"btn btn-primary btn-margin\",\n    onClick: _cache[0] || (_cache[0] = $event => $options.login())\n  }, \" Log In \")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), $data.authenticated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n    key: 1,\n    class: \"btn btn-primary btn-margin\",\n    onClick: _cache[1] || (_cache[1] = $event => $options.privateMessage())\n  }, \" Call Private \")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), $data.authenticated ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n    key: 2,\n    class: \"btn btn-primary btn-margin\",\n    onClick: _cache[2] || (_cache[2] = $event => $options.logout())\n  }, \" Log Out \")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), _hoisted_1, _hoisted_2]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBcUJBOztBQUVBO0FBQUE7QUFBQTs7O0FBdEJBO0FBTUE7QUFKQTtBQUVBO0FBRUE7QUFPQTtBQUpBO0FBRUE7QUFFQTtBQU9BO0FBSkE7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL0FwcC52dWU/OTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1hcmdpblwiXG4gICAgICB2LWlmPVwiIWF1dGhlbnRpY2F0ZWRcIlxuICAgICAgQGNsaWNrPVwibG9naW4oKVwiPlxuICAgICAgTG9nIEluXG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbWFyZ2luXCJcbiAgICAgIHYtaWY9XCJhdXRoZW50aWNhdGVkXCJcbiAgICAgIEBjbGljaz1cInByaXZhdGVNZXNzYWdlKClcIj5cbiAgICAgIENhbGwgUHJpdmF0ZVxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1hcmdpblwiXG4gICAgICB2LWlmPVwiYXV0aGVudGljYXRlZFwiXG4gICAgICBAY2xpY2s9XCJsb2dvdXQoKVwiPlxuICAgICAgTG9nIE91dFxuICAgIDwvYnV0dG9uPlxuICAgIHt7XCJ7eyBcIn19e3sgXCJtZXNzYWdlXCIgfX0gfX1cbiAgICA8YnI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuL2F1dGgvQXV0aFNlcnZpY2UnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJ1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhTZXJ2aWNlKClcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FwcCcsXG4gIGRhdGEgKCkge1xuICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24oKVxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlXG5cbiAgICBhdXRoLmF1dGhOb3RpZmllci5vbignYXV0aENoYW5nZScsIGF1dGhTdGF0ZSA9PiB7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBhdXRoU3RhdGUuYXV0aGVudGljYXRlZFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICBtZXNzYWdlOiAnJ1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLy8gdGhpcyBtZXRob2QgY2FsbHMgdGhlIEF1dGhTZXJ2aWNlIGxvZ2luKCkgbWV0aG9kXG4gICAgbG9naW4gKCkge1xuICAgICAgYXV0aC5sb2dpbigpXG4gICAgfSxcbiAgICBoYW5kbGVBdXRoZW50aWNhdGlvbiAoKSB7XG4gICAgICBhdXRoLmhhbmRsZUF1dGhlbnRpY2F0aW9uKClcbiAgICB9LFxuICAgIGxvZ291dCAoKSB7XG4gICAgICBhdXRoLmxvZ291dCgpXG4gICAgfSxcbiAgICBwcml2YXRlTWVzc2FnZSAoKSB7XG4gICAgICBjb25zdCB1cmwgPSBgJHtBUElfVVJMfS9hcGkvcHJpdmF0ZS9gXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCwge2hlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aC5nZXRBdXRoVG9rZW4oKX1gfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3BvbnNlLmRhdGEgfHwgJydcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4jYXBwIHtcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cbm5hdiB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbm5hdiBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG5uYXYgYS5yb3V0ZXItbGluay1leGFjdC1hY3RpdmUge1xuICBjb2xvcjogIzQyYjk4Mztcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b3b99bca7c479760"; }
/******/ }();
/******/ 
/******/ }
);