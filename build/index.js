(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js")):undefined}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var attributes = {
  sliderData: {
    type: "array",
    source: "query",
    selector: ".slide",
    query: {
      src: {
        type: "string",
        selector: "img",
        source: "attribute",
        attribute: "src"
      },
      alt: {
        type: "string",
        selector: "img",
        source: "attribute",
        attribute: "alt"
      },
      title: {
        type: "string",
        selector: "h2",
        source: "text",
        "default": "Add header text here"
      },
      btnText: {
        type: "string",
        selector: "button",
        source: "text",
        "default": "Add Text"
      },
      link: {
        type: "string",
        selector: "button",
        source: "attribute",
        attribute: "data-link",
        "default": ""
      }
    },
    "default": []
  },
  intensity: {
    type: "string",
    selector: ".eb-parallax-container",
    source: "attribute",
    attribute: "data-intensity",
    "default": "50"
  },
  startIndex: {
    type: "string",
    selector: ".eb-parallax-container",
    source: "attribute",
    attribute: "data-start-index",
    "default": "1"
  },
  current: {
    type: "number",
    "default": 0
  },
  titleFontFamily: {
    type: "string"
  },
  titleFontWeight: {
    type: "string"
  },
  titleFontSize: {
    type: "number"
  },
  titleSizeUnit: {
    type: "string",
    "default": "px"
  },
  titleTextDecoration: {
    type: "string"
  },
  titleTextTransform: {
    type: "string"
  },
  titleLetterSpacing: {
    type: "number"
  },
  titleLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  titleLineHeight: {
    type: "number"
  },
  titleLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  titleColor: {
    type: "string"
  },
  titleBackgroundColor: {
    type: "string"
  },
  btnFontFamily: {
    type: "string"
  },
  btnFontWeight: {
    type: "string"
  },
  btnFontSize: {
    type: "number"
  },
  btnSizeUnit: {
    type: "string",
    "default": "px"
  },
  btnTextDecoration: {
    type: "string"
  },
  btnTextTransform: {
    type: "string"
  },
  btnLetterSpacing: {
    type: "number"
  },
  btnLetterSpacingUnit: {
    type: "string",
    "default": "px"
  },
  btnLineHeight: {
    type: "number"
  },
  btnLineHeightUnit: {
    type: "string",
    "default": "px"
  },
  btnBorderColor: {
    type: "string"
  },
  btnBorderWidth: {
    type: "number"
  },
  btnBorderStyle: {
    type: "string",
    "default": "solid"
  },
  btnBorderRadius: {
    type: "number"
  },
  hasBtnShadow: {
    type: "string",
    selector: ".eb-parallax-container",
    source: "attribute",
    attribute: "data-shadow",
    "default": false
  },
  btnMarginTop: {
    type: "number",
    "default": 0
  },
  btnMarginRight: {
    type: "number",
    "default": 0
  },
  btnMarginBottom: {
    type: "number",
    "default": 0
  },
  btnMarginLeft: {
    type: "number",
    "default": 0
  },
  btnMarginUnit: {
    type: "string",
    "default": "px"
  },
  btnPaddingTop: {
    type: "number",
    "default": 0
  },
  btnPaddingRight: {
    type: "number",
    "default": 0
  },
  btnPaddingBottom: {
    type: "number",
    "default": 0
  },
  btnPaddingLeft: {
    type: "number",
    "default": 0
  },
  btnPaddingUnit: {
    type: "string",
    "default": "px"
  },
  prevIcon: {
    type: "string",
    "default": "fas fa-chevron-left"
  },
  nextIcon: {
    type: "string",
    "default": "fas fa-chevron-right"
  },
  iconColor: {
    type: "string",
    selector: ".eb-parallax-container",
    source: "attribute",
    attribute: "data-icon-color"
  },
  preview: {
    type: "boolean",
    "default": false
  },
  btnBackgroundColor: {
    type: "string"
  },
  btnColor: {
    type: "string"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: BORDER_STYLES, PREVIOUS_ICONS, NEXT_ICONS, TEXT_TRANSFORM, FONT_WEIGHT, TEXT_DECORATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLES", function() { return BORDER_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIOUS_ICONS", function() { return PREVIOUS_ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_ICONS", function() { return NEXT_ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TRANSFORM", function() { return TEXT_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WEIGHT", function() { return FONT_WEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DECORATION", function() { return TEXT_DECORATION; });
var __ = wp.i18n.__;
var BORDER_STYLES = [{
  label: __("Solid"),
  value: "solid"
}, {
  label: __("Dashed"),
  value: "dashed"
}, {
  label: __("Dotted"),
  value: "dotted"
}, {
  label: __("Double"),
  value: "double"
}, {
  label: __("Groove"),
  value: "groove"
}, {
  label: __("Inset"),
  value: "inset"
}, {
  label: __("Outset"),
  value: "outset"
}, {
  label: __("Ridge"),
  value: "ridge"
}];
var PREVIOUS_ICONS = ["fas fa-angle-double-left", "fas fa-angle-left", "fas fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-left", "fas fa-arrow-circle-left", "fas fa-arrow-left", "fas fa-caret-left", "fas fa-caret-square-left", "far fa-caret-square-left", "fas fa-chevron-circle-left", "fas fa-chevron-left", "fas fa-hand-point-left", "far fa-hand-point-left", "fas fa-long-arrow-alt-left", "fas fa-angle-double-left", "fas fa-angle-left", "fas fa-arrow-alt-circle-left"];
var NEXT_ICONS = ["fas fa-angle-double-right", "fas fa-angle-right", "fas fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-right", "fas fa-arrow-circle-right", "fas fa-arrow-right", "fas fa-caret-right", "fas fa-caret-square-right", "far fa-caret-square-right", "fas fa-chevron-circle-right", "fas fa-chevron-right", "fas fa-hand-point-right", "far fa-hand-point-right", "fas fa-long-arrow-alt-right", "fas fa-angle-double-right", "fas fa-angle-right", "fas fa-arrow-alt-circle-right"];
var TEXT_TRANSFORM = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var FONT_WEIGHT = [{
  label: __("Lighter"),
  value: "lighter"
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}, {
  label: __("Bolder"),
  value: "bolder"
}];
var TEXT_DECORATION = [{
  label: __("Initial"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
  value: "underline overline"
}];

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/slider.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Toolbar = _wp$components.Toolbar;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    Fragment = _wp$element.Fragment;
/**
 * Internal dependencies
 */




function getPreviousImgData(previousData, image) {
  var prevTitle, prevBtnText, prevLink;
  previousData.map(function (item) {
    if (item.id === image.id) {
      prevTitle = item.title;
      prevBtnText = item.btnText;
      prevLink = item.link;
    }
  });
  return [prevTitle, prevBtnText, prevLink];
}

var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected;
  var sliderData = attributes.sliderData,
      startIndex = attributes.startIndex,
      current = attributes.current,
      preview = attributes.preview;
  var hasImages = !!sliderData.length; // Change start index if image is removed from gallery

  useEffect(function () {
    if (startIndex > sliderData.length) {
      setAttributes({
        startIndex: sliderData.length
      });
    }
  }, [startIndex, sliderData]);

  var onImageSelect = function onImageSelect(images) {
    if (!images.length) {
      return null;
    } // Store images with slider data


    var sliderData = [];

    var previousData = _toConsumableArray(attributes.sliderData);

    images.map(function (image) {
      var item = {}; // Get previous image info after updating gallary

      var _getPreviousImgData = getPreviousImgData(previousData, image),
          _getPreviousImgData2 = _slicedToArray(_getPreviousImgData, 3),
          prevTitle = _getPreviousImgData2[0],
          prevBtnText = _getPreviousImgData2[1],
          prevLink = _getPreviousImgData2[2];

      item.id = image.id;
      item.src = image.url;
      item.alt = image.alt;
      item.title = prevTitle || "Header Text";
      item.btnText = prevBtnText || "Button";
      item.link = prevLink || "";
      sliderData.push(item);
    });
    setAttributes({
      sliderData: sliderData
    });
  };

  if (preview) {
    return /*#__PURE__*/React.createElement("img", {
      src: "https://raw.githubusercontent.com/rupok/essential-blocks-templates/dev/previews/parallax-slider-preview.png"
    });
  }

  if (!hasImages) {
    // Show placeholder at the beginning
    return /*#__PURE__*/React.createElement(MediaPlaceholder, {
      labels: {
        title: __("Images"),
        instructions: __("Drag images, upload new ones or select files from your library.")
      },
      onSelect: function onSelect(images) {
        return onImageSelect(images);
      },
      accept: "image/*",
      allowedTypes: ["image"],
      multiple: true
    });
  }

  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(images) {
      return onImageSelect(images);
    },
    allowedTypes: ["image"],
    multiple: true,
    gallery: true,
    value: sliderData.map(function (img) {
      return img.id;
    }),
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement(Button, {
        className: "components-toolbar__control",
        label: __("Edit gallery"),
        icon: "edit",
        onClick: open
      });
    }
  }))), isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(_slider__WEBPACK_IMPORTED_MODULE_0__["default"], {
    slides: sliderData,
    attributes: attributes,
    setAttributes: setAttributes
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 66 70",
    version: "1.1",
    viewBox: "0 0 66 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_1",
    x1: "-16.218",
    x2: "89.025",
    y1: "15.344",
    y2: "18.043",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M68.4 13c-.3-.4-.7-.6-1.1-.6-.3 0-.5.1-.8.2-.6.5-.8 1.3-.4 1.9l2.3 3.3-2.4 2.5c-.5.5-.5 1.3 0 1.9.2.2.6.4.9.4.3 0 .7-.2 1-.5l3.9-4.1-3.4-5z",
    className: "parallax-st0"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_2",
    x1: "-17.074",
    x2: "88.169",
    y1: "48.75",
    y2: "51.448",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 49.7l2.3-3.3c.4-.6.3-1.4-.4-1.9-.2-.2-.5-.2-.8-.2-.4 0-.9.2-1.1.6l-3.4 5 3.9 4c.3.3.6.5 1 .5.3 0 .7-.1.9-.4.5-.5.5-1.3 0-1.9l-2.4-2.4z",
    className: "parallax-st1"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_3",
    x1: "-16.667",
    x2: "88.576",
    y1: "32.874",
    y2: "35.573",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M58 2L17.4.3c-2.7 0-4.8 2.2-4.8 4.8L10 62.3c0 2.7 2.2 4.8 4.8 4.8h.1l35.8-2.8h.1c2.5-.4 4.1-2 4.6-4.6L61 19l.5-3.6L62.7 7v-.2C62.7 4.1 60.6 2 58 2zm-7.6 59.5l-35.6 2.8c-1.1 0-1.9-.9-1.9-1.9l.7-15.9L26 32l9.5 16.6 21.9-24.2-3.6 26.1-1.2 8.8c-.3 1.3-.9 1.9-2.2 2.2zM36 43.7L26.5 27 13.8 41.8l1.6-36.7c0-1.1.9-2 1.9-2l40.6 1.7c1 0 1.9.8 1.9 1.9L58 19.3 36 43.7z",
    className: "parallax-st2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_4",
    x1: "-17.353",
    x2: "87.89",
    y1: "59.614",
    y2: "62.312",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M60.5 52.9c-.6-.1-1.3.4-1.4 1l-1.6 10.8c-.2 1-1 1.8-2.1 1.9l-9.8.9c-.7.1-1.1.6-1.1 1.3.1.6.6 1.1 1.2 1.1h.1l9.8-.9c2.2-.2 3.9-1.8 4.2-4l1.6-10.8c.2-.6-.3-1.2-.9-1.3z",
    className: "parallax-st3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_5",
    x1: "-16.284",
    x2: "88.959",
    y1: "17.925",
    y2: "20.623",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M42.8 17.1c-.1-.3-.3-.5-.5-.8-.2-.2-.3-.4-.5-.5-.2-.1-.3-.3-.5-.4-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.2-.2-.1-.3-.1-.5-.1-.1 0-.2-.1-.3-.1h-.7c-.2 0-.4 0-.5.1-.2 0-.4.1-.5.2-.2.1-.4.2-.5.3-.2.1-.4.2-.5.4-.2.2-.4.3-.5.5-.2.2-.4.5-.6.8-.3.5-.5 1-.6 1.6 0 .2-.1.5-.1.7v1.1c.1.6.2 1.1.5 1.5.1.3.3.5.5.8.2.2.3.4.5.5.2.1.3.2.5.4.2.1.3.2.5.3.2.1.3.1.5.2h1.1c.2 0 .4 0 .5-.1.2 0 .4-.1.5-.1.2-.1.4-.1.5-.2.2-.1.4-.2.5-.3.2-.1.4-.3.5-.4.2-.2.4-.3.5-.5.2-.2.4-.5.6-.8.3-.4.5-.9.6-1.4 0-.2.1-.4.1-.6v-1c-.2-.7-.4-1.2-.6-1.6zM40.5 20c-.1.3-.3.5-.6.7-.2.1-.3.2-.5.3-.2.1-.3.1-.5.1h-.1c-.2 0-.3 0-.5-.1s-.4-.2-.5-.3c-.2-.2-.4-.5-.5-.8-.1-.2-.1-.5-.1-.8 0-.2.1-.4.2-.6.1-.3.3-.6.6-.8.2-.1.3-.3.5-.3.2-.1.3-.1.5-.1h.1c.2 0 .3 0 .4.1.2.1.4.2.5.3.2.2.4.4.5.7.1.2.1.5.1.8.1.3 0 .6-.1.8z",
    className: "parallax-st4"
  }));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;





registerBlockType("parallax-slider-block/parallax-slider-block", {
  title: __("Parallax Slider", "parallax-slider"),
  description: __("Create A Captivating Visual Experience & Impress Your Audience", "parallax-slider"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/typography-control/FontPicker */ "./util/typography-control/FontPicker.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dimensions-control */ "./util/dimensions-control/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */



/**
 * External dependencies
 */



/**
 * Internal dependencies
 */






var Inspector = function Inspector(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var sliderData = attributes.sliderData,
      current = attributes.current,
      intensity = attributes.intensity,
      startIndex = attributes.startIndex,
      titleColor = attributes.titleColor,
      titleFontSize = attributes.titleFontSize,
      titleSizeUnit = attributes.titleSizeUnit,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleTextDecoration = attributes.titleTextDecoration,
      titleTextTransform = attributes.titleTextTransform,
      titleLetterSpacing = attributes.titleLetterSpacing,
      titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightUnit = attributes.titleLineHeightUnit,
      btnColor = attributes.btnColor,
      btnBackgroundColor = attributes.btnBackgroundColor,
      btnFontSize = attributes.btnFontSize,
      btnSizeUnit = attributes.btnSizeUnit,
      btnFontFamily = attributes.btnFontFamily,
      btnFontWeight = attributes.btnFontWeight,
      btnTextDecoration = attributes.btnTextDecoration,
      btnTextTransform = attributes.btnTextTransform,
      btnLetterSpacing = attributes.btnLetterSpacing,
      btnLetterSpacingUnit = attributes.btnLetterSpacingUnit,
      btnLineHeight = attributes.btnLineHeight,
      btnLineHeightUnit = attributes.btnLineHeightUnit,
      btnBorderColor = attributes.btnBorderColor,
      btnBorderWidth = attributes.btnBorderWidth,
      btnBorderStyle = attributes.btnBorderStyle,
      btnBorderRadius = attributes.btnBorderRadius,
      hasBtnShadow = attributes.hasBtnShadow,
      btnMarginTop = attributes.btnMarginTop,
      btnMarginRight = attributes.btnMarginRight,
      btnMarginBottom = attributes.btnMarginBottom,
      btnMarginLeft = attributes.btnMarginLeft,
      btnMarginUnit = attributes.btnMarginUnit,
      btnPaddingTop = attributes.btnPaddingTop,
      btnPaddingRight = attributes.btnPaddingRight,
      btnPaddingBottom = attributes.btnPaddingBottom,
      btnPaddingLeft = attributes.btnPaddingLeft,
      btnPaddingUnit = attributes.btnPaddingUnit,
      prevIcon = attributes.prevIcon,
      nextIcon = attributes.nextIcon,
      iconColor = attributes.iconColor;

  var handleTextChange = function handleTextChange(type, value, index) {
    var updatedData = _toConsumableArray(sliderData);

    updatedData[index][type] = value;
    setAttributes({
      sliderData: updatedData
    });
  };

  var handlePanelClick = function handlePanelClick(index) {
    var updatedIndex = index !== current ? index : 0;
    setAttributes({
      current: updatedIndex
    });
  };

  var TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;
  var TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;
  var TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;
  var TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
  var TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;
  var TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
  var BTN_SIZE_MAX = btnSizeUnit === "em" ? 10 : 100;
  var BTN_SIZE_STEP = btnSizeUnit === "em" ? 0.1 : 1;
  var BTN_SPACING_MAX = btnLetterSpacingUnit === "em" ? 10 : 100;
  var BTN_SPACING_STEP = btnLetterSpacingUnit === "em" ? 0.1 : 1;
  var BTN_LINE_HEIGHT_MAX = btnLineHeightUnit === "em" ? 10 : 100;
  var BTN_LINE_HEIGHT_STEP = btnLineHeightUnit === "em" ? 0.1 : 1;
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {
    key: "controls"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("General")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Starting Slide"),
    value: startIndex,
    allowReset: true,
    onChange: function onChange(startIndex) {
      return setAttributes({
        startIndex: startIndex
      });
    },
    min: 1,
    max: sliderData.length
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Parallax Softness"),
    value: intensity,
    allowReset: true,
    onChange: function onChange(intensity) {
      return setAttributes({
        intensity: intensity
      });
    },
    min: 0,
    max: 100
  })), sliderData.map(function (slide, index) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      key: index,
      title: "Slide ".concat(index + 1, " Settings"),
      initialOpen: false,
      onToggle: function onToggle() {
        return handlePanelClick(index);
      }
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Title Text"),
      value: slide.title,
      onChange: function onChange(title) {
        return handleTextChange("title", title, index);
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Text"),
      value: slide.btnText,
      onChange: function onChange(btnText) {
        return handleTextChange("btnText", btnText, index);
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Link"),
      value: slide.link,
      onChange: function onChange(link) {
        return handleTextChange("link", link, index);
      }
    }));
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Title Color"),
    initialOpen: false,
    colorSettings: [{
      value: titleColor,
      onChange: function onChange(titleColor) {
        return setAttributes({
          titleColor: titleColor
        });
      },
      label: ""
    }]
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Style"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Shadow"),
    checked: hasBtnShadow,
    onChange: function onChange(hasBtnShadow) {
      return setAttributes({
        hasBtnShadow: hasBtnShadow
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Background"),
    color: btnBackgroundColor,
    onChange: function onChange(btnBackgroundColor) {
      return setAttributes({
        btnBackgroundColor: btnBackgroundColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Text"),
    color: btnColor,
    onChange: function onChange(btnColor) {
      return setAttributes({
        btnColor: btnColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Border"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Color"),
    color: btnBorderColor,
    onChange: function onChange(btnBorderColor) {
      return setAttributes({
        btnBorderColor: btnBorderColor
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Width"),
    value: btnBorderWidth,
    allowReset: true,
    onChange: function onChange(btnBorderWidth) {
      return setAttributes({
        btnBorderWidth: btnBorderWidth
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Style"),
    value: btnBorderStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_7__["BORDER_STYLES"],
    onChange: function onChange(btnBorderStyle) {
      return setAttributes({
        btnBorderStyle: btnBorderStyle
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Radius"),
    value: btnBorderRadius,
    allowReset: true,
    onChange: function onChange(btnBorderRadius) {
      return setAttributes({
        btnBorderRadius: btnBorderRadius
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button Margin & Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: btnMarginUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(btnMarginUnit) {
      return setAttributes({
        btnMarginUnit: btnMarginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin"),
    top: btnMarginTop,
    right: btnMarginRight,
    bottom: btnMarginBottom,
    left: btnMarginLeft,
    onChange: function onChange(_ref2) {
      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes({
        btnMarginTop: top,
        btnMarginRight: right,
        btnMarginBottom: bottom,
        btnMarginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: btnPaddingUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(btnPaddingUnit) {
      return setAttributes({
        btnPaddingUnit: btnPaddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Padding"),
    top: btnPaddingTop,
    right: btnPaddingRight,
    bottom: btnPaddingBottom,
    left: btnPaddingLeft,
    onChange: function onChange(_ref3) {
      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes({
        btnPaddingTop: top,
        btnPaddingRight: right,
        btnPaddingBottom: bottom,
        btnPaddingLeft: left
      });
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Typography"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Title"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family"),
        onChange: function onChange(titleFontFamily) {
          return setAttributes({
            titleFontFamily: titleFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        selectedUnit: titleSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(titleSizeUnit) {
          return setAttributes({
            titleSizeUnit: titleSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size"),
        value: titleFontSize,
        onChange: function onChange(titleFontSize) {
          return setAttributes({
            titleFontSize: titleFontSize
          });
        },
        min: 0,
        max: TITLE_SIZE_MAX,
        step: TITLE_SIZE_STEP
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Weight"),
        value: titleFontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_7__["FONT_WEIGHT"],
        onChange: function onChange(titleFontWeight) {
          return setAttributes({
            titleFontWeight: titleFontWeight
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Decoration"),
        value: titleTextDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_DECORATION"],
        onChange: function onChange(titleTextDecoration) {
          return setAttributes({
            titleTextDecoration: titleTextDecoration
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Transform"),
        value: titleTextTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_TRANSFORM"],
        onChange: function onChange(titleTextTransform) {
          return setAttributes({
            titleTextTransform: titleTextTransform
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        selectedUnit: titleLetterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleLetterSpacingUnit) {
          return setAttributes({
            titleLetterSpacingUnit: titleLetterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Letter Spacing"),
        value: titleLetterSpacing,
        onChange: function onChange(titleLetterSpacing) {
          return setAttributes({
            titleLetterSpacing: titleLetterSpacing
          });
        },
        min: 0,
        max: TITLE_SPACING_MAX,
        step: TITLE_SPACING_STEP
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        selectedUnit: titleLineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(titleLineHeightUnit) {
          return setAttributes({
            titleLineHeightUnit: titleLineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height"),
        value: titleLineHeight,
        onChange: function onChange(titleLineHeight) {
          return setAttributes({
            titleLineHeight: titleLineHeight
          });
        },
        min: 0,
        max: TITLE_LINE_HEIGHT_MAX,
        step: TITLE_LINE_HEIGHT_STEP
      }));
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Button"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref5) {
      var isOpen = _ref5.isOpen,
          onToggle = _ref5.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "1rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Family"),
        onChange: function onChange(btnFontFamily) {
          return setAttributes({
            btnFontFamily: btnFontFamily
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        selectedUnit: btnSizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }, {
          label: "%",
          value: "%"
        }],
        onClick: function onClick(btnSizeUnit) {
          return setAttributes({
            btnSizeUnit: btnSizeUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Size"),
        value: btnFontSize,
        onChange: function onChange(btnFontSize) {
          return setAttributes({
            btnFontSize: btnFontSize
          });
        },
        min: 0,
        max: BTN_SIZE_MAX,
        step: BTN_SIZE_STEP
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Font Weight"),
        value: btnFontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_7__["FONT_WEIGHT"],
        onChange: function onChange(btnFontWeight) {
          return setAttributes({
            btnFontWeight: btnFontWeight
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Decoration"),
        value: btnTextDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_DECORATION"],
        onChange: function onChange(btnTextDecoration) {
          return setAttributes({
            btnTextDecoration: btnTextDecoration
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Text Transform"),
        value: btnTextTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_7__["TEXT_TRANSFORM"],
        onChange: function onChange(btnTextTransform) {
          return setAttributes({
            btnTextTransform: btnTextTransform
          });
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        selectedUnit: btnLetterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(btnLetterSpacingUnit) {
          return setAttributes({
            btnLetterSpacingUnit: btnLetterSpacingUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Letter Spacing"),
        value: btnLetterSpacing,
        onChange: function onChange(btnLetterSpacing) {
          return setAttributes({
            btnLetterSpacing: btnLetterSpacing
          });
        },
        min: 0,
        max: BTN_SPACING_MAX,
        step: BTN_SPACING_STEP
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
        selectedUnit: btnLineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(btnLineHeightUnit) {
          return setAttributes({
            btnLineHeightUnit: btnLineHeightUnit
          });
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Height"),
        value: btnLineHeight,
        onChange: function onChange(btnLineHeight) {
          return setAttributes({
            btnLineHeight: btnLineHeight
          });
        },
        min: 0,
        max: BTN_LINE_HEIGHT_MAX,
        step: BTN_LINE_HEIGHT_STEP
      }));
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Icon Style"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Previous Icon")
  }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icons: _constants__WEBPACK_IMPORTED_MODULE_7__["PREVIOUS_ICONS"],
    value: prevIcon,
    onChange: function onChange(prevIcon) {
      return setAttributes({
        prevIcon: prevIcon
      });
    },
    appendTo: "body"
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Next Icon")
  }, /*#__PURE__*/React.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icons: _constants__WEBPACK_IMPORTED_MODULE_7__["NEXT_ICONS"],
    value: nextIcon,
    onChange: function onChange(nextIcon) {
      return setAttributes({
        nextIcon: nextIcon
      });
    },
    appendTo: "body"
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Icon Color"),
    colorSettings: [{
      value: iconColor,
      onChange: function onChange(iconColor) {
        return setAttributes({
          iconColor: iconColor
        });
      },
      label: ""
    }]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var sliderData = attributes.sliderData,
      current = attributes.current,
      intensity = attributes.intensity,
      startIndex = attributes.startIndex,
      titleColor = attributes.titleColor,
      titleFontSize = attributes.titleFontSize,
      titleSizeUnit = attributes.titleSizeUnit,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleTextDecoration = attributes.titleTextDecoration,
      titleTextTransform = attributes.titleTextTransform,
      titleLetterSpacing = attributes.titleLetterSpacing,
      titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightUnit = attributes.titleLineHeightUnit,
      btnColor = attributes.btnColor,
      btnBackgroundColor = attributes.btnBackgroundColor,
      btnFontFamily = attributes.btnFontFamily,
      btnFontSize = attributes.btnFontSize,
      btnSizeUnit = attributes.btnSizeUnit,
      btnFontWeight = attributes.btnFontWeight,
      btnTextDecoration = attributes.btnTextDecoration,
      btnTextTransform = attributes.btnTextTransform,
      btnLetterSpacing = attributes.btnLetterSpacing,
      btnLetterSpacingUnit = attributes.btnLetterSpacingUnit,
      btnLineHeight = attributes.btnLineHeight,
      btnLineHeightUnit = attributes.btnLineHeightUnit,
      btnBorderColor = attributes.btnBorderColor,
      btnBorderWidth = attributes.btnBorderWidth,
      btnBorderStyle = attributes.btnBorderStyle,
      btnBorderRadius = attributes.btnBorderRadius,
      hasBtnShadow = attributes.hasBtnShadow,
      btnMarginTop = attributes.btnMarginTop,
      btnMarginRight = attributes.btnMarginRight,
      btnMarginBottom = attributes.btnMarginBottom,
      btnMarginLeft = attributes.btnMarginLeft,
      btnMarginUnit = attributes.btnMarginUnit,
      btnPaddingTop = attributes.btnPaddingTop,
      btnPaddingRight = attributes.btnPaddingRight,
      btnPaddingBottom = attributes.btnPaddingBottom,
      btnPaddingLeft = attributes.btnPaddingLeft,
      btnPaddingUnit = attributes.btnPaddingUnit,
      prevIcon = attributes.prevIcon,
      nextIcon = attributes.nextIcon,
      iconColor = attributes.iconColor; // Style objects

  var titleStyles = {
    color: titleColor,
    fontFamily: titleFontFamily,
    fontSize: titleFontSize + titleSizeUnit,
    fontWeight: titleFontWeight,
    textTransform: titleTextTransform,
    textDecoration: titleTextDecoration,
    letterSpacing: titleLetterSpacing ? "".concat(titleLetterSpacing).concat(titleLetterSpacingUnit) : undefined,
    lineHeight: titleLineHeight ? "".concat(titleLineHeight).concat(titleLineHeightUnit) : undefined
  };
  var buttonStyles = {
    color: btnColor,
    backgroundColor: btnBackgroundColor,
    fontFamily: btnFontFamily,
    fontSize: btnFontSize + btnSizeUnit,
    fontWeight: btnFontWeight,
    textTransform: btnTextTransform,
    textDecoration: btnTextDecoration,
    letterSpacing: btnLetterSpacing ? "".concat(btnLetterSpacing).concat(btnLetterSpacingUnit) : undefined,
    lineHeight: btnLineHeight ? "".concat(btnLineHeight).concat(btnLineHeightUnit) : undefined,
    border: "".concat(btnBorderWidth || 0, "px ").concat(btnBorderStyle, " ").concat(btnBorderColor || "black"),
    borderRadius: btnBorderRadius + "px",
    margin: "".concat(btnMarginTop).concat(btnMarginUnit, " ").concat(btnMarginRight).concat(btnMarginUnit, " ").concat(btnMarginBottom).concat(btnMarginUnit, " ").concat(btnMarginLeft).concat(btnMarginUnit),
    padding: "".concat(btnPaddingTop).concat(btnPaddingUnit, " ").concat(btnPaddingRight).concat(btnPaddingUnit, " ").concat(btnPaddingBottom).concat(btnPaddingUnit, " ").concat(btnPaddingLeft).concat(btnPaddingUnit, " ")
  };
  var iconStyles = {
    color: iconColor || "gray"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "eb-parallax-container",
    "data-start-index": startIndex,
    "data-intensity": intensity,
    "data-shadow": hasBtnShadow
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-parallax-slider"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "eb-parallax-wrapper"
  }, sliderData.map(function (slide, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: "slide"
    }, /*#__PURE__*/React.createElement("div", {
      className: "slide__image-wrapper"
    }, /*#__PURE__*/React.createElement("img", {
      className: "slide__image",
      src: slide.src,
      alt: slide.alt,
      style: {
        opacity: 1
      }
    })), /*#__PURE__*/React.createElement("article", {
      className: "slide__content"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "slide__headline",
      style: titleStyles
    }, slide.title), /*#__PURE__*/React.createElement("button", {
      className: "slide__action btn",
      style: buttonStyles,
      "data-link": slide.link
    }, slide.btnText)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-slider__controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn btn--previous ".concat(prevIcon),
    style: iconStyles
  }), /*#__PURE__*/React.createElement("div", {
    className: "btn btn--next ".concat(nextIcon),
    style: iconStyles
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/slide-control.js":
/*!******************************!*\
  !*** ./src/slide-control.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SliderControl = function SliderControl(_ref) {
  var type = _ref.type,
      style = _ref.style,
      icon = _ref.icon,
      handleClick = _ref.handleClick;
  return /*#__PURE__*/React.createElement("div", {
    className: "btn btn--".concat(type, " ").concat(icon),
    onClick: handleClick,
    style: style
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SliderControl);

/***/ }),

/***/ "./src/slide.js":
/*!**********************!*\
  !*** ./src/slide.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var createRef = wp.element.createRef;

var Slide = function Slide(_ref) {
  var slide = _ref.slide,
      position = _ref.position,
      handleSlideClick = _ref.handleSlideClick,
      attributes = _ref.attributes;
  var current = attributes.current,
      intensity = attributes.intensity,
      titleColor = attributes.titleColor,
      titleFontFamily = attributes.titleFontFamily,
      titleFontSize = attributes.titleFontSize,
      titleSizeUnit = attributes.titleSizeUnit,
      titleFontWeight = attributes.titleFontWeight,
      titleTextDecoration = attributes.titleTextDecoration,
      titleTextTransform = attributes.titleTextTransform,
      titleLetterSpacing = attributes.titleLetterSpacing,
      titleLetterSpacingUnit = attributes.titleLetterSpacingUnit,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightUnit = attributes.titleLineHeightUnit,
      btnColor = attributes.btnColor,
      btnBackgroundColor = attributes.btnBackgroundColor,
      btnFontSize = attributes.btnFontSize,
      btnSizeUnit = attributes.btnSizeUnit,
      btnFontFamily = attributes.btnFontFamily,
      btnFontWeight = attributes.btnFontWeight,
      btnTextDecoration = attributes.btnTextDecoration,
      btnTextTransform = attributes.btnTextTransform,
      btnLetterSpacing = attributes.btnLetterSpacing,
      btnLetterSpacingUnit = attributes.btnLetterSpacingUnit,
      btnLineHeight = attributes.btnLineHeight,
      btnLineHeightUnit = attributes.btnLineHeightUnit,
      btnBorderColor = attributes.btnBorderColor,
      btnBorderWidth = attributes.btnBorderWidth,
      btnBorderStyle = attributes.btnBorderStyle,
      btnBorderRadius = attributes.btnBorderRadius,
      hasBtnShadow = attributes.hasBtnShadow,
      btnMarginTop = attributes.btnMarginTop,
      btnMarginRight = attributes.btnMarginRight,
      btnMarginBottom = attributes.btnMarginBottom,
      btnMarginLeft = attributes.btnMarginLeft,
      btnMarginUnit = attributes.btnMarginUnit,
      btnPaddingTop = attributes.btnPaddingTop,
      btnPaddingRight = attributes.btnPaddingRight,
      btnPaddingBottom = attributes.btnPaddingBottom,
      btnPaddingLeft = attributes.btnPaddingLeft,
      btnPaddingUnit = attributes.btnPaddingUnit;
  var slideRef = createRef();

  var handleMouseMove = function handleMouseMove(event) {
    var el = slideRef.current;
    var r = el.getBoundingClientRect();
    el.style.setProperty("--x", event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty("--y", event.clientY - (r.top + Math.floor(r.height / 2)));
    el.style.setProperty("--d", intensity || 50);
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    slideRef.current.style.setProperty("--x", 0);
    slideRef.current.style.setProperty("--y", 0);
    slideRef.current.style.setProperty("--y", 50);
  };

  var imageLoaded = function imageLoaded(event) {
    return event.target.style.opacity = 1;
  };

  var handleButtonClick = function handleButtonClick(link) {
    // Redirect to button link
    if (link) {
      window.location = link;
    }
  }; // Style objects


  var titleStyles = {
    color: titleColor,
    fontFamily: titleFontFamily,
    fontSize: titleFontSize + titleSizeUnit,
    fontWeight: titleFontWeight,
    textTransform: titleTextTransform,
    textDecoration: titleTextDecoration,
    letterSpacing: titleLetterSpacing ? "".concat(titleLetterSpacing).concat(titleLetterSpacingUnit) : undefined,
    lineHeight: titleLineHeight ? "".concat(titleLineHeight).concat(titleLineHeightUnit) : undefined
  };
  var buttonStyles = {
    color: btnColor,
    backgroundColor: btnBackgroundColor,
    fontFamily: btnFontFamily,
    fontSize: btnFontSize + btnSizeUnit,
    fontWeight: btnFontWeight,
    textTransform: btnTextTransform,
    textDecoration: btnTextDecoration,
    letterSpacing: btnLetterSpacing ? "".concat(btnLetterSpacing).concat(btnLetterSpacingUnit) : undefined,
    lineHeight: btnLineHeight ? "".concat(btnLineHeight).concat(btnLineHeightUnit) : undefined,
    border: "".concat(btnBorderWidth || 0, "px ").concat(btnBorderStyle, " ").concat(btnBorderColor || "black"),
    borderRadius: btnBorderRadius + "px",
    margin: "".concat(btnMarginTop).concat(btnMarginUnit, " ").concat(btnMarginRight).concat(btnMarginUnit, " ").concat(btnMarginBottom).concat(btnMarginUnit, " ").concat(btnMarginLeft).concat(btnMarginUnit),
    padding: "".concat(btnPaddingTop).concat(btnPaddingUnit, " ").concat(btnPaddingRight).concat(btnPaddingUnit, " ").concat(btnPaddingBottom).concat(btnPaddingUnit, " ").concat(btnPaddingLeft).concat(btnPaddingUnit, " ")
  };
  var classNames = "slide";
  if (current === position) classNames += " slide--current";else if (current - 1 === position) classNames += " slide--previous";else if (current + 1 === position) classNames += " slide--next";
  return /*#__PURE__*/React.createElement("li", {
    ref: slideRef,
    className: classNames,
    onClick: function onClick() {
      return handleSlideClick(position);
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/React.createElement("div", {
    className: "slide__image-wrapper"
  }, /*#__PURE__*/React.createElement("img", {
    className: "slide__image",
    alt: "img",
    src: slide.src,
    onLoad: imageLoaded
  })), /*#__PURE__*/React.createElement("article", {
    className: "slide__content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "slide__headline",
    style: titleStyles
  }, slide.title), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return handleButtonClick(slide.link);
    },
    className: "slide__action btn ".concat(hasBtnShadow ? "btn-has-shadow" : "", " "),
    style: buttonStyles
  }, slide.btnText)));
};

/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide */ "./src/slide.js");
/* harmony import */ var _slide_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide-control */ "./src/slide-control.js");
/**
 * WordPress dependencies
 */
var useState = wp.element.useState;
/**
 * Internal dependencies
 */




var Slider = function Slider(_ref) {
  var slides = _ref.slides,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var current = attributes.current,
      prevIcon = attributes.prevIcon,
      nextIcon = attributes.nextIcon,
      iconColor = attributes.iconColor;

  var handleSlideClick = function handleSlideClick(current) {
    return setAttributes({
      current: current
    });
  };

  var handlePreviousClick = function handlePreviousClick() {
    var previous = current - 1;
    var updateCurrent = previous < 0 ? slides.length - 1 : previous;
    handleSlideClick(updateCurrent);
  };

  var handleNextClick = function handleNextClick() {
    var next = current + 1;
    var updateCurrent = next === slides.length ? 0 : next;
    handleSlideClick(updateCurrent);
  };

  var wrapperTransform = {
    transform: "translateX(-".concat(current * (100 / slides.length), "%)")
  };
  var sliderStyles = {
    color: iconColor || "gray",
    fontSize: 32
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "eb-parallax-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-parallax-slider"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "eb-parallax-wrapper",
    style: wrapperTransform
  }, slides.map(function (slide, index) {
    return /*#__PURE__*/React.createElement(_slide__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: index,
      position: index,
      slide: slide,
      handleSlideClick: handleSlideClick,
      attributes: attributes
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "eb-slider__controls"
  }, /*#__PURE__*/React.createElement(_slide_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "previous",
    style: sliderStyles,
    icon: prevIcon,
    handleClick: handlePreviousClick
  }), /*#__PURE__*/React.createElement(_slide_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "next",
    style: sliderStyles,
    icon: nextIcon,
    handleClick: handleNextClick
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button;
var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  useEffect(function () {
    onChange(bgColor);
  }, [bgColor]);
  useEffect(function () {
    setBgColor(color);
  }, []);
  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: bgColor || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: bgColor && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: bgColor
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": bgColor || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: bgColor,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setBgColor("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(Button, {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    style: {
      transform: "scaleX(-1) rotate(90deg)"
    },
    onClick: function onClick() {
      setBgColor(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control/index.js":
/*!******************************************!*\
  !*** ./util/dimensions-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var DimensionsControl = /*#__PURE__*/function (_Component) {
  _inherits(DimensionsControl, _Component);

  var _super = _createSuper(DimensionsControl);

  function DimensionsControl() {
    var _this;

    _classCallCheck(this, DimensionsControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: _this.props.top || 0,
      right: _this.props.right || 0,
      bottom: _this.props.bottom || 0,
      left: _this.props.left || 0,
      isLinked: false
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      return _this.setState({
        isLinked: !_this.state.isLinked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var _this$state = _this.state,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          left = _this$state.left,
          isLinked = _this$state.isLinked;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (isLinked) {
        top = right = bottom = left = parseInt(value) || 0;

        _this.setState({
          top: top,
          right: right,
          bottom: bottom,
          left: left
        }, function () {
          var _this$state2 = _this.state,
              top = _this$state2.top,
              right = _this$state2.right,
              bottom = _this$state2.bottom,
              left = _this$state2.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      } else {
        _this.setState(_defineProperty({}, name, parseInt(value) || 0), function () {
          var _this$state3 = _this.state,
              top = _this$state3.top,
              right = _this$state3.right,
              bottom = _this$state3.bottom,
              left = _this$state3.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      }
    });

    return _this;
  }

  _createClass(DimensionsControl, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          top = _this$state4.top,
          right = _this$state4.right,
          bottom = _this$state4.bottom,
          left = _this$state4.left,
          isLinked = _this$state4.isLinked;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-label"
      }, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "top",
        value: top || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "right",
        value: right || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "bottom",
        value: bottom || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "left",
        value: left || 0,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
        onClick: this.onButtonClick
      })));
    }
  }]);

  return DimensionsControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DimensionsControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DimensionsControl);

/***/ }),

/***/ "./util/typography-control/FontPicker.js":
/*!***********************************************!*\
  !*** ./util/typography-control/FontPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, WEIGHTS, TRANSFORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHTS", function() { return WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMS", function() { return TRANSFORMS; });
var __ = wp.i18n.__;
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var WEIGHTS = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}];
var TRANSFORMS = [{
  label: __("None"),
  value: ""
}, {
  label: __("AA"),
  value: "uppercase"
}, {
  label: __("aa"),
  value: "lowercase"
}, {
  label: __("Aa"),
  value: "capitalize"
}];


/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map