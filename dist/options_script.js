/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/options.js":
/*!************************!*
  !*** ./lib/options.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  except_urls: function (urls) {
    if (urls instanceof Array) {
      localStorage.except_urls = JSON.stringify(urls);
    }

    if (localStorage.except_urls) {
      try {
        return JSON.parse(localStorage.except_urls);
      } catch (e) {
        // backwards compatibitlity
        return localStorage.except_urls.split(',');
      }
    }

    return [];
  },
  only_urls: function (urls) {
    if (urls instanceof Array) {
      localStorage.only_urls = JSON.stringify(urls);
    }

    if (localStorage.only_urls) {
      try {
        return JSON.parse(localStorage.only_urls);
      } catch (e) {
        // backwards compatibitlity
        return localStorage.only_urls.split(',');
      }
    }

    return [];
  },
  word_key_only: function (arg) {
    if (arg != undefined) {
      localStorage['word_key_only'] = arg;
    }

    return parseInt(localStorage['word_key_only']);
  },
  selection_key_only: function (arg) {
    if (arg != undefined) {
      localStorage['selection_key_only'] = arg;
    }

    return parseInt(localStorage['selection_key_only']);
  },
  selection_key_command: function (arg) {
    if (arg != undefined) {
      localStorage['selection_key_command'] = arg;
    }

    return localStorage['selection_key_command'];
  },
  translate_by: function (arg) {
    if (arg == 'click' || arg == 'point') {
      localStorage.translate_by = arg;
    }

    return localStorage.translate_by || 'click';
  },
  delay: function (ms) {
    if (ms != undefined && !isNaN(parseFloat(ms)) && isFinite(ms)) {
      localStorage['delay'] = ms;
    }

    return localStorage['delay'] == undefined ? 700 : parseInt(localStorage['delay']);
  },
  popup_show_trigger: function (arg) {
    if (arg != undefined) {
      localStorage['popup_show_trigger'] = arg;
    }

    return localStorage['popup_show_trigger'] || 'command';
  },
  fontSize: function (arg) {
    if (arg != undefined) {
      localStorage['fontSize'] = arg;
    }

    return parseInt(localStorage['fontSize'] || 14);
  },

  log(a) {
    console.log('log', a);
  }

});

/***/ }),

/***/ "./lib/options_script.js":
/*!*******************************!*
  !*** ./lib/options_script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./lib/options.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");



function save_options() {
  function get_except_urls() {
    let except_urls = [];
    except_urls = $('.except_url_input').filter(function () {
      return this.value;
    }).map(function () {
      return this.value;
    }).get();
    return except_urls;
  }

  function get_only_urls() {
    let only_urls = [];
    only_urls = $('.only_url_input').filter(function () {
      return this.value;
    }).map(function () {
      return this.value;
    }).get();
    return only_urls;
  }

  _options__WEBPACK_IMPORTED_MODULE_0__.default.except_urls(get_except_urls());
  _options__WEBPACK_IMPORTED_MODULE_0__.default.only_urls(get_only_urls());
  _options__WEBPACK_IMPORTED_MODULE_0__.default.word_key_only($('#word_key_only:checked').val() ? 1 : 0);
  _options__WEBPACK_IMPORTED_MODULE_0__.default.selection_key_only($('#selection_key_only:checked').val() ? 1 : 0);
  _options__WEBPACK_IMPORTED_MODULE_0__.default.selection_key_command($('#selection_key_only_command option:selected').val());
  _options__WEBPACK_IMPORTED_MODULE_0__.default.delay($('#delay').val());
  _options__WEBPACK_IMPORTED_MODULE_0__.default.fontSize($('#fontSize').val());
  _options__WEBPACK_IMPORTED_MODULE_0__.default.popup_show_trigger($('#word_key_only_key').val(''));
  $('#status').fadeIn().delay(3000).fadeOut();
}

function populate_except_urls() {
  function add_exc_url(url) {
    let button;
    const input = $('<input type="text" class="except_url_input">').attr('size', 100).val(url);

    const rm_callback = function () {
      $(this).closest('tr').fadeOut('fast', function () {
        $(this).remove();
      });
    };

    if (url) {
      button = $('<button>', {
        text: 'X'
      }).click(rm_callback);
    } else {
      button = $('<button>', {
        text: '+'
      }).click(function () {
        if ($('.except_url_input', $(this).closest('tr')).val() > '') {
          $(this).text('X').off('click').click(rm_callback);
          add_exc_url();
        }
      });
    }

    $('<tr>', {
      css: {
        display: 'none'
      }
    }).fadeIn().append($('<td>').append(input)).append($('<td>').append(button)).appendTo($('#exc_urls_table'));
  }

  const saved_except_urls = _options__WEBPACK_IMPORTED_MODULE_0__.default.except_urls();
  saved_except_urls.forEach(function (url) {
    add_exc_url(url);
  });
  add_exc_url();
}

function populate_only_urls() {
  function add_only_url(url) {
    let button;
    const input = $('<input type="text" class="only_url_input">').attr('size', 100).val(url);

    const rm_callback = function () {
      $(this).closest('tr').fadeOut('fast', function () {
        $(this).remove();
      });
    };

    if (url) {
      button = $('<button>', {
        text: 'X'
      }).click(rm_callback);
    } else {
      button = $('<button>', {
        text: '+'
      }).click(function () {
        if ($('.only_url_input', $(this).closest('tr')).val() > '') {
          $(this).text('X').off('click').click(rm_callback);
          add_only_url();
        }
      });
    }

    $('<tr>', {
      css: {
        display: 'none'
      }
    }).fadeIn().append($('<td>').append(input)).append($('<td>').append(button)).appendTo($('#only_urls_table'));
  }

  const saved_only_urls = _options__WEBPACK_IMPORTED_MODULE_0__.default.only_urls();
  saved_only_urls.forEach(function (url) {
    add_only_url(url);
  });
  add_only_url();
}

function populate_popup_show_trigger() {
  const saved_popup_show_trigger = _options__WEBPACK_IMPORTED_MODULE_0__.default.popup_show_trigger();
  [...new Set(Object.values(_utils__WEBPACK_IMPORTED_MODULE_1__.MODIFIER_KEY))].forEach(function (key) {
    $('#selection_key_only_command').each(function () {
      $(this).append($('<option>', {
        value: key
      }).text(key).prop('selected', saved_popup_show_trigger == key));
    });
  });
  $('#word_key_only_key, #selection_key_only_key').change(function () {
    $('#word_key_only_key, #selection_key_only_key').val(this.value);
  });
}

$(function () {
  populate_except_urls();
  populate_only_urls();
  populate_popup_show_trigger();

  if (_options__WEBPACK_IMPORTED_MODULE_0__.default.word_key_only()) {
    $('#delay').attr('disabled', true).parent().addClass('disabled');
  }

  $('#word_key_only').attr('checked', _options__WEBPACK_IMPORTED_MODULE_0__.default.word_key_only() ? true : false).click(function () {
    if ($('#translate_by').val() == 'point' && !$(this).attr('checked')) {
      $('#delay').attr('disabled', false).parent().removeClass('disabled');
    } else {
      $('#delay').attr('disabled', true).parent().addClass('disabled');
    }
  });
  $('#selection_key_only').attr('checked', _options__WEBPACK_IMPORTED_MODULE_0__.default.selection_key_only() ? true : false);
  $('#selection_key_only_command').val(_options__WEBPACK_IMPORTED_MODULE_0__.default.selection_key_command());
  $('#delay').val(_options__WEBPACK_IMPORTED_MODULE_0__.default.delay());
  $('#fontSize').val(_options__WEBPACK_IMPORTED_MODULE_0__.default.fontSize());
  $('#save_button').click(function () {
    save_options();
  });
  $(document).on('keydown', function (e) {
    if (e.keyCode == 13) {
      save_options();
    }
  });
  $('#more_options_link').on('click', function () {
    $('#more_options_link').hide();
    $('#more_options').fadeIn();
    return false;
  });
  $('.set_hotkey').on('click', function () {
    chrome.tabs.create({
      url: 'chrome://extensions/configureCommands'
    });
    return false;
  });
});

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODIFIER_KEY": () => /* binding */ MODIFIER_KEY
/* harmony export */ });
const MODIFIER_KEY = {
  16: 'shift',
  17: 'ctrl',
  18: 'alt',
  91: 'command',
  13: 'Return'
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./lib/options_script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vbGliL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy8uL2xpYi9vcHRpb25zX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJleGNlcHRfdXJscyIsInVybHMiLCJBcnJheSIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImUiLCJzcGxpdCIsIm9ubHlfdXJscyIsIndvcmRfa2V5X29ubHkiLCJhcmciLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsInNlbGVjdGlvbl9rZXlfb25seSIsInNlbGVjdGlvbl9rZXlfY29tbWFuZCIsInRyYW5zbGF0ZV9ieSIsImRlbGF5IiwibXMiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJpc0Zpbml0ZSIsInBvcHVwX3Nob3dfdHJpZ2dlciIsImZvbnRTaXplIiwibG9nIiwiYSIsImNvbnNvbGUiLCJzYXZlX29wdGlvbnMiLCJnZXRfZXhjZXB0X3VybHMiLCIkIiwiZmlsdGVyIiwidmFsdWUiLCJtYXAiLCJnZXQiLCJnZXRfb25seV91cmxzIiwiT3B0aW9ucyIsInZhbCIsImZhZGVJbiIsImZhZGVPdXQiLCJwb3B1bGF0ZV9leGNlcHRfdXJscyIsImFkZF9leGNfdXJsIiwidXJsIiwiYnV0dG9uIiwiaW5wdXQiLCJhdHRyIiwicm1fY2FsbGJhY2siLCJjbG9zZXN0IiwicmVtb3ZlIiwidGV4dCIsImNsaWNrIiwib2ZmIiwiY3NzIiwiZGlzcGxheSIsImFwcGVuZCIsImFwcGVuZFRvIiwic2F2ZWRfZXhjZXB0X3VybHMiLCJmb3JFYWNoIiwicG9wdWxhdGVfb25seV91cmxzIiwiYWRkX29ubHlfdXJsIiwic2F2ZWRfb25seV91cmxzIiwicG9wdWxhdGVfcG9wdXBfc2hvd190cmlnZ2VyIiwic2F2ZWRfcG9wdXBfc2hvd190cmlnZ2VyIiwiU2V0IiwiT2JqZWN0IiwidmFsdWVzIiwiTU9ESUZJRVJfS0VZIiwia2V5IiwiZWFjaCIsInByb3AiLCJjaGFuZ2UiLCJwYXJlbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZG9jdW1lbnQiLCJvbiIsImtleUNvZGUiLCJoaWRlIiwiY2hyb21lIiwidGFicyIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNiQSxhQUFXLEVBQUUsVUFBVUMsSUFBVixFQUFnQjtBQUMzQixRQUFJQSxJQUFJLFlBQVlDLEtBQXBCLEVBQTJCO0FBQ3pCQyxrQkFBWSxDQUFDSCxXQUFiLEdBQTJCSSxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZixDQUEzQjtBQUNEOztBQUNELFFBQUlFLFlBQVksQ0FBQ0gsV0FBakIsRUFBOEI7QUFDNUIsVUFBSTtBQUNGLGVBQU9JLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxZQUFZLENBQUNILFdBQXhCLENBQVA7QUFDRCxPQUZELENBRUUsT0FBT08sQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxlQUFPSixZQUFZLENBQUNILFdBQWIsQ0FBeUJRLEtBQXpCLENBQStCLEdBQS9CLENBQVA7QUFDRDtBQUNGOztBQUNELFdBQU8sRUFBUDtBQUNELEdBZFk7QUFlYkMsV0FBUyxFQUFFLFVBQVVSLElBQVYsRUFBZ0I7QUFDekIsUUFBSUEsSUFB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QUFELENBQUQsQ0FBbUJRLE1BQW5CO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FKRDtBQU1BUixHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCNkMsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBWTtBQUN2Q0csVUFBTSxDQUFDQyxJQUFQLENBQVlDLE1BQVosQ0FBbUI7QUFBRXRDLFNBQUcsRUFBRTtBQUFQLEtBQW5CO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FIRDtBQUlELENBMUNBLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7QUN0SE8sTUFBTXdCLFlBQVksR0FBRztBQUN4QixNQUFJLE9BRG9CO0FBQ1gsTUFBSSxNQURPO0FBQ0MsTUFBSSxLQURMO0FBQ1ksTUFBSSxTQURoQjtBQUMyQixNQUFJO0FBRC9CLENBQXJCLEM7Ozs7OztVQ0FQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJvcHRpb25zX3NjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZXhjZXB0X3VybHM6IGZ1bmN0aW9uICh1cmxzKSB7XG4gICAgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzID0gSlNPTi5zdHJpbmdpZnkodXJscylcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpdGxpdHlcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscy5zcGxpdCgnLCcpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9LFxuICBvbmx5X3VybHM6IGZ1bmN0aW9uICh1cmxzKSB7XG4gICAgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbG9jYWxTdG9yYWdlLm9ubHlfdXJscyA9IEpTT04uc3RyaW5naWZ5KHVybHMpXG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2Uub25seV91cmxzKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uub25seV91cmxzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpdGxpdHlcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5vbmx5X3VybHMuc3BsaXQoJywnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgd29yZF9rZXlfb25seTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3dvcmRfa2V5X29ubHknXSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlWyd3b3JkX2tleV9vbmx5J10pXG4gIH0sXG4gIHNlbGVjdGlvbl9rZXlfb25seTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddKVxuICB9LFxuICBzZWxlY3Rpb25fa2V5X2NvbW1hbmQ6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X2NvbW1hbmQnXSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X2NvbW1hbmQnXVxuICB9LFxuICB0cmFuc2xhdGVfYnk6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnID09ICdjbGljaycgfHwgYXJnID09ICdwb2ludCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS50cmFuc2xhdGVfYnkgPSBhcmdcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS50cmFuc2xhdGVfYnkgfHwgJ2NsaWNrJ1xuICB9LFxuICBkZWxheTogZnVuY3Rpb24gKG1zKSB7XG4gICAgaWYgKG1zICE9IHVuZGVmaW5lZCAmJiAhaXNOYU4ocGFyc2VGbG9hdChtcykpICYmIGlzRmluaXRlKG1zKSkge1xuICAgICAgbG9jYWxTdG9yYWdlWydkZWxheSddID0gbXNcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVsnZGVsYXknXSA9PSB1bmRlZmluZWQgPyA3MDAgOiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ2RlbGF5J10pXG4gIH0sXG4gIHBvcHVwX3Nob3dfdHJpZ2dlcjogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3BvcHVwX3Nob3dfdHJpZ2dlciddID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbJ3BvcHVwX3Nob3dfdHJpZ2dlciddIHx8ICdjb21tYW5kJ1xuICB9LFxuICBmb250U2l6ZTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ2ZvbnRTaXplJ10gPSBhcmdcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZVsnZm9udFNpemUnXSB8fCAxNClcbiAgfSxcbiAgbG9nKGEpIHtcbiAgICBjb25zb2xlLmxvZygnbG9nJywgYSlcbiAgfVxufVxuIiwiaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJ1xuaW1wb3J0IHsgTU9ESUZJRVJfS0VZIH0gZnJvbSAnLi91dGlscydcblxuZnVuY3Rpb24gc2F2ZV9vcHRpb25zKCkge1xuICBmdW5jdGlvbiBnZXRfZXhjZXB0X3VybHMoKSB7XG4gICAgbGV0IGV4Y2VwdF91cmxzID0gW11cbiAgICBleGNlcHRfdXJscyA9ICQoJy5leGNlcHRfdXJsX2lucHV0JykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgfSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgfSkuZ2V0KClcblxuICAgIHJldHVybiBleGNlcHRfdXJsc1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0X29ubHlfdXJscygpIHtcbiAgICBsZXQgb25seV91cmxzID0gW11cbiAgICBvbmx5X3VybHMgPSAkKCcub25seV91cmxfaW5wdXQnKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICB9KS5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICB9KS5nZXQoKVxuXG4gICAgcmV0dXJuIG9ubHlfdXJsc1xuICB9XG5cbiAgT3B0aW9ucy5leGNlcHRfdXJscyhnZXRfZXhjZXB0X3VybHMoKSlcbiAgT3B0aW9ucy5vbmx5X3VybHMoZ2V0X29ubHlfdXJscygpKVxuXG4gIE9wdGlvbnMud29yZF9rZXlfb25seSgkKCcjd29yZF9rZXlfb25seTpjaGVja2VkJykudmFsKCkgPyAxIDogMClcbiAgT3B0aW9ucy5zZWxlY3Rpb25fa2V5X29ubHkoJCgnI3NlbGVjdGlvbl9rZXlfb25seTpjaGVja2VkJykudmFsKCkgPyAxIDogMClcbiAgT3B0aW9ucy5zZWxlY3Rpb25fa2V5X2NvbW1hbmQoJCgnI3NlbGVjdGlvbl9rZXlfb25seV9jb21tYW5kIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKVxuXG4gIE9wdGlvbnMuZGVsYXkoJCgnI2RlbGF5JykudmFsKCkpXG4gIE9wdGlvbnMuZm9udFNpemUoJCgnI2ZvbnRTaXplJykudmFsKCkpXG5cbiAgT3B0aW9ucy5wb3B1cF9zaG93X3RyaWdnZXIoJCgnI3dvcmRfa2V5X29ubHlfa2V5JykudmFsKCcnKSlcblxuICAkKCcjc3RhdHVzJykuZmFkZUluKCkuZGVsYXkoMzAwMCkuZmFkZU91dCgpXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlX2V4Y2VwdF91cmxzKCkge1xuICBmdW5jdGlvbiBhZGRfZXhjX3VybCh1cmwpIHtcbiAgICBsZXQgYnV0dG9uXG4gICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImV4Y2VwdF91cmxfaW5wdXRcIj4nKS5hdHRyKCdzaXplJywgMTAwKS52YWwodXJsKVxuICAgIGNvbnN0IHJtX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5yZW1vdmUoKSB9KSB9XG5cbiAgICBpZiAodXJsKSB7XG4gICAgICBidXR0b24gPSAkKCc8YnV0dG9uPicsIHsgdGV4dDogJ1gnIH0pLmNsaWNrKHJtX2NhbGxiYWNrKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbiA9ICQoJzxidXR0b24+JywgeyB0ZXh0OiAnKycgfSkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCgnLmV4Y2VwdF91cmxfaW5wdXQnLCAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykpLnZhbCgpID4gJycpIHtcbiAgICAgICAgICAkKHRoaXMpLnRleHQoJ1gnKS5vZmYoJ2NsaWNrJykuY2xpY2socm1fY2FsbGJhY2spXG4gICAgICAgICAgYWRkX2V4Y191cmwoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICAkKCc8dHI+JywgeyBjc3M6IHsgZGlzcGxheTogJ25vbmUnIH0gfSkuZmFkZUluKClcbiAgICAgIC5hcHBlbmQoJCgnPHRkPicpLmFwcGVuZChpbnB1dCkpXG4gICAgICAuYXBwZW5kKCQoJzx0ZD4nKS5hcHBlbmQoYnV0dG9uKSlcbiAgICAgIC5hcHBlbmRUbygkKCcjZXhjX3VybHNfdGFibGUnKSlcbiAgfVxuXG4gIGNvbnN0IHNhdmVkX2V4Y2VwdF91cmxzID0gT3B0aW9ucy5leGNlcHRfdXJscygpXG5cbiAgc2F2ZWRfZXhjZXB0X3VybHMuZm9yRWFjaChmdW5jdGlvbiAodXJsKSB7XG4gICAgYWRkX2V4Y191cmwodXJsKVxuICB9KVxuICBhZGRfZXhjX3VybCgpXG59XG5cblxuZnVuY3Rpb24gcG9wdWxhdGVfb25seV91cmxzKCkge1xuICBmdW5jdGlvbiBhZGRfb25seV91cmwodXJsKSB7XG4gICAgbGV0IGJ1dHRvblxuICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvbmx5X3VybF9pbnB1dFwiPicpLmF0dHIoJ3NpemUnLCAxMDApLnZhbCh1cmwpXG4gICAgY29uc3Qgcm1fY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7ICQodGhpcykuY2xvc2VzdCgndHInKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkgeyAkKHRoaXMpLnJlbW92ZSgpIH0pIH1cblxuICAgIGlmICh1cmwpIHtcbiAgICAgIGJ1dHRvbiA9ICQoJzxidXR0b24+JywgeyB0ZXh0OiAnWCcgfSkuY2xpY2socm1fY2FsbGJhY2spXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uID0gJCgnPGJ1dHRvbj4nLCB7IHRleHQ6ICcrJyB9KS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKCcub25seV91cmxfaW5wdXQnLCAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykpLnZhbCgpID4gJycpIHtcbiAgICAgICAgICAkKHRoaXMpLnRleHQoJ1gnKS5vZmYoJ2NsaWNrJykuY2xpY2socm1fY2FsbGJhY2spXG4gICAgICAgICAgYWRkX29ubHlfdXJsKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgJCgnPHRyPicsIHsgY3NzOiB7IGRpc3BsYXk6ICdub25lJyB9IH0pLmZhZGVJbigpXG4gICAgICAuYXBwZW5kKCQoJzx0ZD4nKS5hcHBlbmQoaW5wdXQpKVxuICAgICAgLmFwcGVuZCgkKCc8dGQ+JykuYXBwZW5kKGJ1dHRvbikpXG4gICAgICAuYXBwZW5kVG8oJCgnI29ubHlfdXJsc190YWJsZScpKVxuICB9XG5cbiAgY29uc3Qgc2F2ZWRfb25seV91cmxzID0gT3B0aW9ucy5vbmx5X3VybHMoKVxuXG4gIHNhdmVkX29ubHlfdXJscy5mb3JFYWNoKGZ1bmN0aW9uICh1cmwpIHtcbiAgICBhZGRfb25seV91cmwodXJsKVxuICB9KVxuICBhZGRfb25seV91cmwoKVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZV9wb3B1cF9zaG93X3RyaWdnZXIoKSB7XG4gIGNvbnN0IHNhdmVkX3BvcHVwX3Nob3dfdHJpZ2dlciA9IE9wdGlvbnMucG9wdXBfc2hvd190cmlnZ2VyKClcblxuICAgIDtbLi4ubmV3IFNldChPYmplY3QudmFsdWVzKE1PRElGSUVSX0tFWSkpXS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICQoJyNzZWxlY3Rpb25fa2V5X29ubHlfY29tbWFuZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmFwcGVuZCgkKCc8b3B0aW9uPicsIHsgdmFsdWU6IGtleSB9KS50ZXh0KGtleSkucHJvcCgnc2VsZWN0ZWQnLCBzYXZlZF9wb3B1cF9zaG93X3RyaWdnZXIgPT0ga2V5KSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAkKCcjd29yZF9rZXlfb25seV9rZXksICNzZWxlY3Rpb25fa2V5X29ubHlfa2V5JykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjd29yZF9rZXlfb25seV9rZXksICNzZWxlY3Rpb25fa2V5X29ubHlfa2V5JykudmFsKHRoaXMudmFsdWUpXG4gIH0pXG59XG5cbiQoZnVuY3Rpb24gKCkge1xuICBwb3B1bGF0ZV9leGNlcHRfdXJscygpXG4gIHBvcHVsYXRlX29ubHlfdXJscygpXG4gIHBvcHVsYXRlX3BvcHVwX3Nob3dfdHJpZ2dlcigpXG5cbiAgaWYgKE9wdGlvbnMud29yZF9rZXlfb25seSgpKSB7XG4gICAgJCgnI2RlbGF5JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKS5wYXJlbnQoKS5hZGRDbGFzcygnZGlzYWJsZWQnKVxuICB9XG5cblxuICAkKCcjd29yZF9rZXlfb25seScpLmF0dHIoJ2NoZWNrZWQnLCBPcHRpb25zLndvcmRfa2V5X29ubHkoKSA/IHRydWUgOiBmYWxzZSkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKCcjdHJhbnNsYXRlX2J5JykudmFsKCkgPT0gJ3BvaW50JyAmJiAhJCh0aGlzKS5hdHRyKCdjaGVja2VkJykpIHtcbiAgICAgICQoJyNkZWxheScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCgnI2RlbGF5JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKS5wYXJlbnQoKS5hZGRDbGFzcygnZGlzYWJsZWQnKVxuICAgIH1cbiAgfSlcblxuICAkKCcjc2VsZWN0aW9uX2tleV9vbmx5JykuYXR0cignY2hlY2tlZCcsIE9wdGlvbnMuc2VsZWN0aW9uX2tleV9vbmx5KCkgPyB0cnVlIDogZmFsc2UpXG4gICQoJyNzZWxlY3Rpb25fa2V5X29ubHlfY29tbWFuZCcpLnZhbChPcHRpb25zLnNlbGVjdGlvbl9rZXlfY29tbWFuZCgpKVxuXG4gICQoJyNkZWxheScpLnZhbChPcHRpb25zLmRlbGF5KCkpXG4gICQoJyNmb250U2l6ZScpLnZhbChPcHRpb25zLmZvbnRTaXplKCkpXG5cbiAgJCgnI3NhdmVfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkgeyBzYXZlX29wdGlvbnMoKSB9KVxuICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgc2F2ZV9vcHRpb25zKClcbiAgICB9XG4gIH0pXG5cbiAgJCgnI21vcmVfb3B0aW9uc19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNtb3JlX29wdGlvbnNfbGluaycpLmhpZGUoKVxuICAgICQoJyNtb3JlX29wdGlvbnMnKS5mYWRlSW4oKVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gICQoJy5zZXRfaG90a2V5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogJ2Nocm9tZTovL2V4dGVuc2lvbnMvY29uZmlndXJlQ29tbWFuZHMnIH0pXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG59KVxuIiwiZXhwb3J0IGNvbnN0IE1PRElGSUVSX0tFWSA9IHtcbiAgICAxNjogJ3NoaWZ0JywgMTc6ICdjdHJsJywgMTg6ICdhbHQnLCA5MTogJ2NvbW1hbmQnLCAxMzogJ1JldHVybidcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2xpYi9vcHRpb25zX3NjcmlwdC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=