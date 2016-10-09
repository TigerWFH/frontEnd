/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// name: index.tsx
	// author: monkey@lwork.com
	// date: 10-8-2016
	// functions:
	"use strict";
	// libs
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	// components
	var card_1 = __webpack_require__(3);
	var elem = React.createElement("div", null,
	    React.createElement(card_1.default, null));
	ReactDOM.render(elem, document.getElementById('main'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// name: card.tsx
	// author: monkey@lwork.com
	// date: 10-8-2016
	// functions:
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	// libs
	var React = __webpack_require__(1);
	var Card = (function (_super) {
	    __extends(Card, _super);
	    function Card(props) {
	        return _super.call(this, props) || this;
	    }
	    Card.prototype.render = function () {
	        return (React.createElement("div", null,
	            React.createElement("div", null, "for gulp watch test"),
	            React.createElement("input", { type: "button", value: "BTNinCard" })));
	    };
	    return Card;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Card;


/***/ }
/******/ ]);