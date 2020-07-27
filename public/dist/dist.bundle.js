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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/tailwind.css":
/*!*********************************!*\
  !*** ./assets/css/tailwind.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/css/tailwind.css?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_tailwind_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/tailwind.css */ \"./assets/css/tailwind.css\");\n/* harmony import */ var _css_tailwind_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_tailwind_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Http = /*#__PURE__*/function () {\n  function Http() {\n    _classCallCheck(this, Http);\n  }\n\n  _createClass(Http, null, [{\n    key: \"ajax\",\n    value: function ajax(method, url, data, callback) {\n      var xhttp = new XMLHttpRequest();\n      var query = [];\n\n      for (var key in data) {\n        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));\n      }\n\n      xhttp.onreadystatechange = function () {\n        if (this.readyState == 4 && this.status == 200) {\n          callback(this.responseText);\n        }\n      };\n\n      xhttp.open(method, url, true);\n      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');\n      xhttp.send(query.join('&'));\n    }\n  }]);\n\n  return Http;\n}();\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n  }\n\n  _createClass(Modal, null, [{\n    key: \"openModal\",\n    value: function openModal(el, callback) {\n      var modalOverlay = document.querySelector(el);\n      modalOverlay.classList.remove('hidden');\n      callback(modalOverlay);\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal(el, callback) {\n      var modalOverlay = document.querySelector(el);\n      modalOverlay.classList.add('hidden');\n\n      if (_typeof(callback) !== undefined && typeof callback === 'function') {\n        callback(modalOverlay);\n      }\n    }\n  }]);\n\n  return Modal;\n}();\n\nwindow.onload = function () {\n  // Modal Add\n  document.querySelector('.open-modal').addEventListener('click', function () {\n    Modal.openModal('#agenda-action-modal', function (el) {\n      var agendaBtn = el.querySelector('#submit-agenda');\n\n      if (agendaBtn.classList.contains('btn-edit')) {\n        agendaBtn.classList.remove('btn-edit');\n      }\n\n      document.querySelector('#agenda-title').value = '';\n      document.querySelector('#agenda-description').value = '';\n      document.querySelector('#agenda-time').value = '';\n      el.querySelector('.modal-title').innerHTML = 'Tambah Agenda';\n    });\n  }); // Modal Edit\n\n  var openModalEdit = document.querySelectorAll('.open-modal-edit');\n\n  for (var i = 0; i < openModalEdit.length; i++) {\n    openModalEdit[i].addEventListener('click', function () {\n      var id = this.getAttribute('data-id');\n      Modal.openModal('#agenda-action-modal', function (el) {\n        var postData = {\n          id: id\n        };\n        el.querySelector('.modal-title').innerHTML = 'Edit Agenda';\n        el.querySelector('#submit-agenda').classList.add('btn-edit');\n        Http.ajax('POST', 'http://localhost:5000/data-by-id', postData, function (result) {\n          var data = JSON.parse(result);\n          document.querySelector('#agenda-id').value = data.id;\n          document.querySelector('#agenda-title').value = data.title;\n          document.querySelector('#agenda-description').value = data.description;\n          document.querySelector('#agenda-time').value = data.date;\n        });\n      });\n    });\n  } // Close Modal\n\n\n  document.querySelector('.close-modal').addEventListener('click', function () {\n    Modal.closeModal('#agenda-action-modal');\n  });\n  document.querySelector('#submit-agenda').addEventListener('click', function (event) {\n    if (event.target.classList.contains('btn-edit')) {\n      event.preventDefault();\n      var data = {\n        agenda_id: document.querySelector('#agenda-id').value,\n        agenda_title: document.querySelector('#agenda-title').value,\n        agenda_description: document.querySelector('#agenda-description').value,\n        agenda_time: document.querySelector('#agenda-time').value\n      };\n      Http.ajax('POST', 'http://localhost:5000/update-data', data, function (result) {\n        window.location.reload();\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack:///./assets/js/script.js?");

/***/ })

/******/ });