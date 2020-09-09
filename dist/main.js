/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/jsx-loader/index.js):\\nError: Parse Error: Line 1: Illegal import declaration\\n    at throwError (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\node_modules\\\\esprima-fb\\\\esprima.js:2823:21)\\n    at throwErrorTolerant (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\node_modules\\\\esprima-fb\\\\esprima.js:2835:24)\\n    at parseSourceElement (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\node_modules\\\\esprima-fb\\\\esprima.js:6435:17)\\n    at parseProgramElement (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\node_modules\\\\esprima-fb\\\\esprima.js:6491:16)\\n    at parseProgramElements (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\node_modules\\\\esprima-fb\\\\esprima.js:6523:29)\\n    at parseProgram (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\node_modules\\\\esprima-fb\\\\esprima.js:6536:16)\\n    at Object.parse (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\node_modules\\\\esprima-fb\\\\esprima.js:7713:23)\\n    at getAstForSource (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\src\\\\jstransform.js:244:21)\\n    at Object.transform (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\src\\\\jstransform.js:267:11)\\n    at Object.transform (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jstransform\\\\src\\\\simple.js:105:28)\\n    at Object.module.exports (C:\\\\WORK\\\\Frontend_Projects\\\\pomodoro_clock\\\\node_modules\\\\jsx-loader\\\\index.js:15:31)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });