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

/***/ "./src/auth/AuthService.js":
/*!*********************************!*\
  !*** ./src/auth/AuthService.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthService; }\n/* harmony export */ });\n/* harmony import */ var _Users_architect_Documents_Capstone_Fabrial_vueapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! auth0-js */ \"./node_modules/auth0-js/dist/auth0.min.esm.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../router */ \"./src/router/index.js\");\n\n\n\n\nclass AuthService {\n  constructor() {\n    (0,_Users_architect_Documents_Capstone_Fabrial_vueapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"authenticated\", this.isAuthenticated());\n\n    (0,_Users_architect_Documents_Capstone_Fabrial_vueapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"authNotifier\", new (eventemitter3__WEBPACK_IMPORTED_MODULE_2___default())());\n\n    (0,_Users_architect_Documents_Capstone_Fabrial_vueapp_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"auth0\", new auth0_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].WebAuth({\n      domain: 'dev-l54azry8.us.auth0.com',\n      clientID: '8w0tZioMNNrgtSidq2KlkTbs5dEAxFzM',\n      redirectUri: 'http://localhost:8080',\n      audience: 'https://django-vuejs-api',\n      responseType: 'token id_token',\n      scope: 'openid profile'\n    }));\n\n    this.login = this.login.bind(this);\n    this.setSession = this.setSession.bind(this);\n    this.logout = this.logout.bind(this);\n    this.isAuthenticated = this.isAuthenticated.bind(this);\n    this.handleAuthentication = this.handleAuthentication.bind(this);\n  } // create an instance of auth0.WebAuth with your\n  // API and Client credentials\n\n\n  // this method calls the authorize() method\n  // which triggers the Auth0 login page\n  login() {\n    this.auth0.authorize();\n  } // this method calls the parseHash() method of Auth0\n  // to get authentication information from the callback URL\n\n\n  handleAuthentication() {\n    this.auth0.parseHash((err, authResult) => {\n      if (authResult && authResult.accessToken && authResult.idToken) {\n        this.setSession(authResult);\n      } else if (err) {\n        console.log(err);\n        alert(`Error: ${err.error}. Check the console for further details.`);\n      }\n\n      _router__WEBPACK_IMPORTED_MODULE_3__[\"default\"].replace('/');\n    });\n  } // stores the user's access_token, id_token, and a time at\n  // which the access_token will expire in the local storage\n\n\n  setSession(authResult) {\n    this.accessToken = authResult.accessToken;\n    this.idToken = authResult.idToken;\n    this.profile = authResult.idTokenPayload;\n    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();\n    this.authNotifier.emit('authChange', {\n      authenticated: true\n    });\n  } // remove the access and ID tokens from the\n  // local storage and emits the authChange event\n\n\n  logout() {\n    delete this.accessToken;\n    delete this.idToken;\n    delete this.expiresAt;\n    this.authNotifier.emit('authChange', false); // navigate to the home route\n\n    _router__WEBPACK_IMPORTED_MODULE_3__[\"default\"].replace('/');\n  } // checks if the user is authenticated\n\n\n  isAuthenticated() {\n    // Check whether the current time is past the\n    // access token's expiry time\n    return new Date().getTime() < this.expiresAt;\n  } // a static method to get the access token\n\n\n  getAuthToken() {\n    return this.accessToken;\n  } // a method to get the User profile\n\n\n  getUserProfile() {\n    return this.profile;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0aC9BdXRoU2VydmljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUFBOztBQUFBOztBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7O0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBL0VBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL2F1dGgvQXV0aFNlcnZpY2UuanM/NmU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aDAgZnJvbSAnYXV0aDAtanMnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vLi4vcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGF1dGhlbnRpY2F0ZWQgPSB0aGlzLmlzQXV0aGVudGljYXRlZCgpXG4gIGF1dGhOb3RpZmllciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTZXNzaW9uID0gdGhpcy5zZXRTZXNzaW9uLmJpbmQodGhpcylcbiAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcylcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRoaXMuaXNBdXRoZW50aWNhdGVkLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uID0gdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvbi5iaW5kKHRoaXMpXG4gIH1cblxuICAvLyBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYXV0aDAuV2ViQXV0aCB3aXRoIHlvdXJcbiAgLy8gQVBJIGFuZCBDbGllbnQgY3JlZGVudGlhbHNcbiAgYXV0aDAgPSBuZXcgYXV0aDAuV2ViQXV0aCh7XG4gICAgZG9tYWluOiAnZGV2LWw1NGF6cnk4LnVzLmF1dGgwLmNvbScsXG4gICAgY2xpZW50SUQ6ICc4dzB0WmlvTU5Ocmd0U2lkcTJLbGtUYnM1ZEVBeEZ6TScsXG4gICAgcmVkaXJlY3RVcmk6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgIGF1ZGllbmNlOiAnaHR0cHM6Ly9kamFuZ28tdnVlanMtYXBpJyxcbiAgICByZXNwb25zZVR5cGU6ICd0b2tlbiBpZF90b2tlbicsXG4gICAgc2NvcGU6ICdvcGVuaWQgcHJvZmlsZSdcbiAgfSlcblxuICAvLyB0aGlzIG1ldGhvZCBjYWxscyB0aGUgYXV0aG9yaXplKCkgbWV0aG9kXG4gIC8vIHdoaWNoIHRyaWdnZXJzIHRoZSBBdXRoMCBsb2dpbiBwYWdlXG4gIGxvZ2luICgpIHtcbiAgICB0aGlzLmF1dGgwLmF1dGhvcml6ZSgpXG4gIH1cblxuICAvLyB0aGlzIG1ldGhvZCBjYWxscyB0aGUgcGFyc2VIYXNoKCkgbWV0aG9kIG9mIEF1dGgwXG4gIC8vIHRvIGdldCBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjYWxsYmFjayBVUkxcbiAgaGFuZGxlQXV0aGVudGljYXRpb24gKCkge1xuICAgIHRoaXMuYXV0aDAucGFyc2VIYXNoKChlcnIsIGF1dGhSZXN1bHQpID0+IHtcbiAgICAgIGlmIChhdXRoUmVzdWx0ICYmIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4gJiYgYXV0aFJlc3VsdC5pZFRva2VuKSB7XG4gICAgICAgIHRoaXMuc2V0U2Vzc2lvbihhdXRoUmVzdWx0KVxuICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBhbGVydChgRXJyb3I6ICR7ZXJyLmVycm9yfS4gQ2hlY2sgdGhlIGNvbnNvbGUgZm9yIGZ1cnRoZXIgZGV0YWlscy5gKVxuICAgICAgfVxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKVxuICAgIH0pXG4gIH1cblxuICAvLyBzdG9yZXMgdGhlIHVzZXIncyBhY2Nlc3NfdG9rZW4sIGlkX3Rva2VuLCBhbmQgYSB0aW1lIGF0XG4gIC8vIHdoaWNoIHRoZSBhY2Nlc3NfdG9rZW4gd2lsbCBleHBpcmUgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgc2V0U2Vzc2lvbiAoYXV0aFJlc3VsdCkge1xuICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuXG4gICAgdGhpcy5pZFRva2VuID0gYXV0aFJlc3VsdC5pZFRva2VuXG4gICAgdGhpcy5wcm9maWxlID0gYXV0aFJlc3VsdC5pZFRva2VuUGF5bG9hZFxuICAgIHRoaXMuZXhwaXJlc0F0ID0gYXV0aFJlc3VsdC5leHBpcmVzSW4gKiAxMDAwICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB0aGlzLmF1dGhOb3RpZmllci5lbWl0KCdhdXRoQ2hhbmdlJywge2F1dGhlbnRpY2F0ZWQ6IHRydWV9KVxuICB9XG5cbiAgLy8gcmVtb3ZlIHRoZSBhY2Nlc3MgYW5kIElEIHRva2VucyBmcm9tIHRoZVxuICAvLyBsb2NhbCBzdG9yYWdlIGFuZCBlbWl0cyB0aGUgYXV0aENoYW5nZSBldmVudFxuICBsb2dvdXQgKCkge1xuICAgIGRlbGV0ZSB0aGlzLmFjY2Vzc1Rva2VuXG4gICAgZGVsZXRlIHRoaXMuaWRUb2tlblxuICAgIGRlbGV0ZSB0aGlzLmV4cGlyZXNBdFxuICAgIHRoaXMuYXV0aE5vdGlmaWVyLmVtaXQoJ2F1dGhDaGFuZ2UnLCBmYWxzZSlcbiAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgaG9tZSByb3V0ZVxuICAgIHJvdXRlci5yZXBsYWNlKCcvJylcbiAgfVxuXG4gIC8vIGNoZWNrcyBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gIGlzQXV0aGVudGljYXRlZCAoKSB7XG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCB0aW1lIGlzIHBhc3QgdGhlXG4gICAgLy8gYWNjZXNzIHRva2VuJ3MgZXhwaXJ5IHRpbWVcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCB0aGlzLmV4cGlyZXNBdFxuICB9XG5cbiAgLy8gYSBzdGF0aWMgbWV0aG9kIHRvIGdldCB0aGUgYWNjZXNzIHRva2VuXG4gIGdldEF1dGhUb2tlbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWNjZXNzVG9rZW5cbiAgfVxuXG4gIC8vIGEgbWV0aG9kIHRvIGdldCB0aGUgVXNlciBwcm9maWxlXG4gIGdldFVzZXJQcm9maWxlICgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlXG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/auth/AuthService.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8f42132ba93c4beb"; }
/******/ }();
/******/ 
/******/ }
);