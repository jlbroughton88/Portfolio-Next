module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5sXR");


/***/ }),

/***/ "5sXR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Logo = () => {
  const style1 = {
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 1.5
  };
  const style2 = {
    fill: "#00bcc4",
    stroke: "#333",
    strokeWidth: "0.67px"
  };
  const style3 = {
    fill: "#fee100"
  };
  const style4 = {
    fill: "#00bcc4"
  };
  const style5 = {
    fill: "#333"
  };
  return __jsx("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 50 50",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    space: "preserve",
    serif: "http://www.serif.com/",
    style: style1
  }, __jsx("g", {
    id: "Artboard11",
    id: "Artboard1"
  }, __jsx("circle", {
    cx: "16.667",
    cy: "16.667",
    r: "15.984",
    style: style2
  }), __jsx("path", {
    d: "M16.027,3.478c0.09,-0.271 0.345,-0.454 0.631,-0.454c0.286,0 0.54,0.183 0.631,0.454c1.592,4.763 5.788,17.32 7.841,23.464c0.27,0.807 0.135,1.694 -0.362,2.385c-0.498,0.69 -1.297,1.099 -2.147,1.099c-3.406,0.001 -8.448,0.001 -11.87,0.001c-0.863,0 -1.673,-0.414 -2.178,-1.114c-0.504,-0.7 -0.641,-1.6 -0.367,-2.419c2.057,-6.161 6.234,-18.665 7.821,-23.416Z",
    style: style3
  }), __jsx("path", {
    d: "M16.169,3.409c0.045,-0.239 0.254,-0.412 0.497,-0.412c0.243,0 0.452,0.173 0.497,0.412c1.197,6.343 4.194,22.224 4.932,26.136c0.041,0.218 -0.017,0.442 -0.158,0.613c-0.142,0.17 -0.351,0.269 -0.573,0.269c-2.099,0 -7.313,0 -9.402,0c-0.219,0 -0.426,-0.097 -0.566,-0.265c-0.139,-0.169 -0.197,-0.391 -0.156,-0.605c0.734,-3.895 3.732,-19.799 4.929,-26.148Z",
    style: style3
  }), __jsx("path", {
    d: "M16.391,4.954c0.011,-0.139 0.127,-0.246 0.267,-0.246c0.14,0 0.256,0.107 0.267,0.246c0.604,7.608 2.022,25.473 2.022,25.473l-4.574,0c0,0 1.415,-17.865 2.018,-25.473Z",
    style: style5
  }), __jsx("path", {
    d: "M16.545,15.262c0.004,-0.064 0.058,-0.114 0.122,-0.114c0.065,0 0.118,0.05 0.123,0.114c0.278,4.169 0.941,14.09 1.015,15.205c0.002,0.027 -0.007,0.053 -0.025,0.073c-0.019,0.019 -0.044,0.03 -0.071,0.03c-0.383,0 -1.73,0 -2.093,0c-0.024,0 -0.046,-0.01 -0.062,-0.027c-0.016,-0.017 -0.025,-0.04 -0.023,-0.064c0.07,-1.055 0.735,-11.032 1.014,-15.217Z",
    style: style3
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });