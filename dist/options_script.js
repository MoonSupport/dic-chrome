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

    if (!localStorage['selection_key_only']) {
      return 1;
    }

    return parseInt(localStorage['selection_key_only']);
  },
  selection_key_command: function (arg) {
    if (arg != undefined) {
      localStorage['selection_key_command'] = arg;
    }

    if (!localStorage['selection_key_command']) {
      return 'command';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vbGliL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy8uL2xpYi9vcHRpb25zX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJleGNlcHRfdXJscyIsInVybHMiLCJBcnJheSIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImUiLCJzcGxpdCIsIm9ubHlfdXJscyIsIndvcmRfa2V5X29ubHkiLCJhcmciLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsInNlbGVjdGlvbl9rZXlfb25seSIsInNlbGVjdGlvbl9rZXlfY29tbWFuZCIsInRyYW5zbGF0ZV9ieSIsImRlbGF5IiwibXMiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJpc0Zpbml0ZSIsInBvcHVwX3Nob3dfdHJpZ2dlciIsImZvbnRTaXplIiwibG9nIiwiYSIsImNvbnNvbGUiLCJzYXZlX29wdGlvbnMiLCJnZXRfZXhjZXB0X3VybHMiLCIkIiwiZmlsdGVyIiwidmFsdWUiLCJtYXAiLCJnZXQiLCJnZXRfb25seV91cmxzIiwiT3B0aW9ucyIsInZhbCIsImZhZGVJbiIsImZhZGVPdXQiLCJwb3B1bGF0ZV9leGNlcHRfdXJscyIsImFkZF9leGNfdXJsIiwidXJsIiwiYnV0dG9uIiwiaW5wdXQiLCJhdHRyIiwicm1fY2FsbGJhY2siLCJjbG9zZXN0IiwicmVtb3ZlIiwidGV4dCIsImNsaWNrIiwib2ZmIiwiY3NzIiwiZGlzcGxheSIsImFwcGVuZCIsImFwcGVuZFRvIiwic2F2ZWRfZXhjZXB0X3VybHMiLCJmb3JFYWNoIiwicG9wdWxhdGVfb25seV91cmxzIiwiYWRkX29ubHlfdXJsIiwic2F2ZWRfb25seV91cmxzIiwicG9wdWxhdGVfcG9wdXBfc2hvd190cmlnZ2VyIiwic2F2ZWRfcG9wdXBfc2hvd190cmlnZ2VyIiwiU2V0IiwiT2JqZWN0IiwidmFsdWVzIiwiTU9ESUZJRVJfS0VZIiwia2V5IiwiZWFjaCIsInByb3AiLCJjaGFuZ2UiLCJwYXJlbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZG9jdW1lbnQiLCJvbiIsImtleUNvZGUiLCJoaWRlIiwiY2hyb21lIiwidGFicyIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNiQSxhQUFXLEVBQUUsVUFBVUMsSUFBVixFQUFnQjtBQUMzQixRQUFJQSxJQUFJLFlBQVlDLEtBQXBCLEVBQTJCO0FBQ3pCQyxrQkFBWSxDQUFDSCxXQUFiLEdBQTJCSSxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZixDQUEzQjtBQUNEOztBQUNELFFBQUlFLFlBQVksQ0FBQ0gsV0FBakIsRUFBOEI7QUFDNUIsVUFBSTtBQUNGLGVBQU9JLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxZQUFZLENBQUNILFdBQXhCLENBQVA7QUFDRCxPQUZELENBRUUsT0FBT08sQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxlQUFPSixZQUFZLENBQUNILFdBQWIsQ0FBeUJRLEtBQXpCLENBQStCLEdBQS9CLENBQVA7QUFDRDtBQUNGOztBQUNELFdBQU8sRUFBUDtBQUNELEdBZFk7QUFlYkMsV0FBUyxFQUFFLFVBQVVSLElBQVYsRUFBZ0I7QUFDekIsUUFBSUEsSUFB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RixHQUpEO0FBTUFFLEdBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCNkMsRUFBeEIsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBWTtBQUM5QzdDLEtBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCK0MsSUFBeEI7QUFDQS9DLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLE1BQW5CO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FKRDtBQU1BUixHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCNkMsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBWTtBQUN2Q0csVUFBTSxDQUFDQyxJQUFQLENBQVlDLE1BQVosQ0FBbUI7QUFBRXRDLFNBQUcsRUFBRTtBQUFQLEtBQW5CO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FIRDtBQUlELENBMUNBLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7QUN0SE8sTUFBTXdCLFlBQVksR0FBRztBQUN4QixNQUFJLE9BRG9CO0FBQ1gsTUFBSSxNQURPO0FBQ0MsTUFBSSxLQURMO0FBQ1ksTUFBSSxTQURoQjtBQUMyQixNQUFJO0FBRC9CLENBQXJCLEM7Ozs7OztVQ0FQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJvcHRpb25zX3NjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZXhjZXB0X3VybHM6IGZ1bmN0aW9uICh1cmxzKSB7XG4gICAgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzID0gSlNPTi5zdHJpbmdpZnkodXJscylcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpdGxpdHlcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscy5zcGxpdCgnLCcpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9LFxuICBvbmx5X3VybHM6IGZ1bmN0aW9uICh1cmxzKSB7XG4gICAgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbG9jYWxTdG9yYWdlLm9ubHlfdXJscyA9IEpTT04uc3RyaW5naWZ5KHVybHMpXG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2Uub25seV91cmxzKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uub25seV91cmxzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpdGxpdHlcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5vbmx5X3VybHMuc3BsaXQoJywnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgd29yZF9rZXlfb25seTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3dvcmRfa2V5X29ubHknXSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlWyd3b3JkX2tleV9vbmx5J10pXG4gIH0sXG4gIHNlbGVjdGlvbl9rZXlfb25seTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddID0gYXJnXG4gICAgfVxuICAgIGlmKCFsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddKVxuICB9LFxuICBzZWxlY3Rpb25fa2V5X2NvbW1hbmQ6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X2NvbW1hbmQnXSA9IGFyZ1xuICAgIH1cblxuICAgIGlmKCFsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfY29tbWFuZCddKSB7XG4gICAgICByZXR1cm4gJ2NvbW1hbmQnXG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVsnc2VsZWN0aW9uX2tleV9jb21tYW5kJ11cbiAgfSxcbiAgdHJhbnNsYXRlX2J5OiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGFyZyA9PSAnY2xpY2snIHx8IGFyZyA9PSAncG9pbnQnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UudHJhbnNsYXRlX2J5ID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudHJhbnNsYXRlX2J5IHx8ICdjbGljaydcbiAgfSxcbiAgZGVsYXk6IGZ1bmN0aW9uIChtcykge1xuICAgIGlmIChtcyAhPSB1bmRlZmluZWQgJiYgIWlzTmFOKHBhcnNlRmxvYXQobXMpKSAmJiBpc0Zpbml0ZShtcykpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVsnZGVsYXknXSA9IG1zXG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbJ2RlbGF5J10gPT0gdW5kZWZpbmVkID8gNzAwIDogcGFyc2VJbnQobG9jYWxTdG9yYWdlWydkZWxheSddKVxuICB9LFxuICBwb3B1cF9zaG93X3RyaWdnZXI6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWydwb3B1cF9zaG93X3RyaWdnZXInXSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlWydwb3B1cF9zaG93X3RyaWdnZXInXSB8fCAnY29tbWFuZCdcbiAgfSxcbiAgZm9udFNpemU6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWydmb250U2l6ZSddID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ2ZvbnRTaXplJ10gfHwgMTQpXG4gIH0sXG4gIGxvZyhhKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZycsIGEpXG4gIH1cbn1cbiIsImltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucydcbmltcG9ydCB7IE1PRElGSUVSX0tFWSB9IGZyb20gJy4vdXRpbHMnXG5cbmZ1bmN0aW9uIHNhdmVfb3B0aW9ucygpIHtcbiAgZnVuY3Rpb24gZ2V0X2V4Y2VwdF91cmxzKCkge1xuICAgIGxldCBleGNlcHRfdXJscyA9IFtdXG4gICAgZXhjZXB0X3VybHMgPSAkKCcuZXhjZXB0X3VybF9pbnB1dCcpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZVxuICAgIH0pLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZVxuICAgIH0pLmdldCgpXG5cbiAgICByZXR1cm4gZXhjZXB0X3VybHNcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldF9vbmx5X3VybHMoKSB7XG4gICAgbGV0IG9ubHlfdXJscyA9IFtdXG4gICAgb25seV91cmxzID0gJCgnLm9ubHlfdXJsX2lucHV0JykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgfSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgfSkuZ2V0KClcblxuICAgIHJldHVybiBvbmx5X3VybHNcbiAgfVxuXG4gIE9wdGlvbnMuZXhjZXB0X3VybHMoZ2V0X2V4Y2VwdF91cmxzKCkpXG4gIE9wdGlvbnMub25seV91cmxzKGdldF9vbmx5X3VybHMoKSlcblxuICBPcHRpb25zLndvcmRfa2V5X29ubHkoJCgnI3dvcmRfa2V5X29ubHk6Y2hlY2tlZCcpLnZhbCgpID8gMSA6IDApXG4gIE9wdGlvbnMuc2VsZWN0aW9uX2tleV9vbmx5KCQoJyNzZWxlY3Rpb25fa2V5X29ubHk6Y2hlY2tlZCcpLnZhbCgpID8gMSA6IDApXG4gIE9wdGlvbnMuc2VsZWN0aW9uX2tleV9jb21tYW5kKCQoJyNzZWxlY3Rpb25fa2V5X29ubHlfY29tbWFuZCBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSlcblxuICBPcHRpb25zLmRlbGF5KCQoJyNkZWxheScpLnZhbCgpKVxuICBPcHRpb25zLmZvbnRTaXplKCQoJyNmb250U2l6ZScpLnZhbCgpKVxuXG4gIE9wdGlvbnMucG9wdXBfc2hvd190cmlnZ2VyKCQoJyN3b3JkX2tleV9vbmx5X2tleScpLnZhbCgnJykpXG5cbiAgJCgnI3N0YXR1cycpLmZhZGVJbigpLmRlbGF5KDMwMDApLmZhZGVPdXQoKVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZV9leGNlcHRfdXJscygpIHtcbiAgZnVuY3Rpb24gYWRkX2V4Y191cmwodXJsKSB7XG4gICAgbGV0IGJ1dHRvblxuICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJleGNlcHRfdXJsX2lucHV0XCI+JykuYXR0cignc2l6ZScsIDEwMCkudmFsKHVybClcbiAgICBjb25zdCBybV9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7ICQodGhpcykucmVtb3ZlKCkgfSkgfVxuXG4gICAgaWYgKHVybCkge1xuICAgICAgYnV0dG9uID0gJCgnPGJ1dHRvbj4nLCB7IHRleHQ6ICdYJyB9KS5jbGljayhybV9jYWxsYmFjaylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBidXR0b24gPSAkKCc8YnV0dG9uPicsIHsgdGV4dDogJysnIH0pLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQoJy5leGNlcHRfdXJsX2lucHV0JywgJCh0aGlzKS5jbG9zZXN0KCd0cicpKS52YWwoKSA+ICcnKSB7XG4gICAgICAgICAgJCh0aGlzKS50ZXh0KCdYJykub2ZmKCdjbGljaycpLmNsaWNrKHJtX2NhbGxiYWNrKVxuICAgICAgICAgIGFkZF9leGNfdXJsKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgJCgnPHRyPicsIHsgY3NzOiB7IGRpc3BsYXk6ICdub25lJyB9IH0pLmZhZGVJbigpXG4gICAgICAuYXBwZW5kKCQoJzx0ZD4nKS5hcHBlbmQoaW5wdXQpKVxuICAgICAgLmFwcGVuZCgkKCc8dGQ+JykuYXBwZW5kKGJ1dHRvbikpXG4gICAgICAuYXBwZW5kVG8oJCgnI2V4Y191cmxzX3RhYmxlJykpXG4gIH1cblxuICBjb25zdCBzYXZlZF9leGNlcHRfdXJscyA9IE9wdGlvbnMuZXhjZXB0X3VybHMoKVxuXG4gIHNhdmVkX2V4Y2VwdF91cmxzLmZvckVhY2goZnVuY3Rpb24gKHVybCkge1xuICAgIGFkZF9leGNfdXJsKHVybClcbiAgfSlcbiAgYWRkX2V4Y191cmwoKVxufVxuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlX29ubHlfdXJscygpIHtcbiAgZnVuY3Rpb24gYWRkX29ubHlfdXJsKHVybCkge1xuICAgIGxldCBidXR0b25cbiAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwib25seV91cmxfaW5wdXRcIj4nKS5hdHRyKCdzaXplJywgMTAwKS52YWwodXJsKVxuICAgIGNvbnN0IHJtX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5yZW1vdmUoKSB9KSB9XG5cbiAgICBpZiAodXJsKSB7XG4gICAgICBidXR0b24gPSAkKCc8YnV0dG9uPicsIHsgdGV4dDogJ1gnIH0pLmNsaWNrKHJtX2NhbGxiYWNrKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbiA9ICQoJzxidXR0b24+JywgeyB0ZXh0OiAnKycgfSkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCgnLm9ubHlfdXJsX2lucHV0JywgJCh0aGlzKS5jbG9zZXN0KCd0cicpKS52YWwoKSA+ICcnKSB7XG4gICAgICAgICAgJCh0aGlzKS50ZXh0KCdYJykub2ZmKCdjbGljaycpLmNsaWNrKHJtX2NhbGxiYWNrKVxuICAgICAgICAgIGFkZF9vbmx5X3VybCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgICQoJzx0cj4nLCB7IGNzczogeyBkaXNwbGF5OiAnbm9uZScgfSB9KS5mYWRlSW4oKVxuICAgICAgLmFwcGVuZCgkKCc8dGQ+JykuYXBwZW5kKGlucHV0KSlcbiAgICAgIC5hcHBlbmQoJCgnPHRkPicpLmFwcGVuZChidXR0b24pKVxuICAgICAgLmFwcGVuZFRvKCQoJyNvbmx5X3VybHNfdGFibGUnKSlcbiAgfVxuXG4gIGNvbnN0IHNhdmVkX29ubHlfdXJscyA9IE9wdGlvbnMub25seV91cmxzKClcblxuICBzYXZlZF9vbmx5X3VybHMuZm9yRWFjaChmdW5jdGlvbiAodXJsKSB7XG4gICAgYWRkX29ubHlfdXJsKHVybClcbiAgfSlcbiAgYWRkX29ubHlfdXJsKClcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVfcG9wdXBfc2hvd190cmlnZ2VyKCkge1xuICBjb25zdCBzYXZlZF9wb3B1cF9zaG93X3RyaWdnZXIgPSBPcHRpb25zLnBvcHVwX3Nob3dfdHJpZ2dlcigpXG5cbiAgICA7Wy4uLm5ldyBTZXQoT2JqZWN0LnZhbHVlcyhNT0RJRklFUl9LRVkpKV0uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAkKCcjc2VsZWN0aW9uX2tleV9vbmx5X2NvbW1hbmQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5hcHBlbmQoJCgnPG9wdGlvbj4nLCB7IHZhbHVlOiBrZXkgfSkudGV4dChrZXkpLnByb3AoJ3NlbGVjdGVkJywgc2F2ZWRfcG9wdXBfc2hvd190cmlnZ2VyID09IGtleSkpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgJCgnI3dvcmRfa2V5X29ubHlfa2V5LCAjc2VsZWN0aW9uX2tleV9vbmx5X2tleScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgJCgnI3dvcmRfa2V5X29ubHlfa2V5LCAjc2VsZWN0aW9uX2tleV9vbmx5X2tleScpLnZhbCh0aGlzLnZhbHVlKVxuICB9KVxufVxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgcG9wdWxhdGVfZXhjZXB0X3VybHMoKVxuICBwb3B1bGF0ZV9vbmx5X3VybHMoKVxuICBwb3B1bGF0ZV9wb3B1cF9zaG93X3RyaWdnZXIoKVxuXG4gIGlmIChPcHRpb25zLndvcmRfa2V5X29ubHkoKSkge1xuICAgICQoJyNkZWxheScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSkucGFyZW50KCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJylcbiAgfVxuXG5cbiAgJCgnI3dvcmRfa2V5X29ubHknKS5hdHRyKCdjaGVja2VkJywgT3B0aW9ucy53b3JkX2tleV9vbmx5KCkgPyB0cnVlIDogZmFsc2UpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCgnI3RyYW5zbGF0ZV9ieScpLnZhbCgpID09ICdwb2ludCcgJiYgISQodGhpcykuYXR0cignY2hlY2tlZCcpKSB7XG4gICAgICAkKCcjZGVsYXknKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQoJyNkZWxheScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSkucGFyZW50KCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJylcbiAgICB9XG4gIH0pXG5cbiAgJCgnI3NlbGVjdGlvbl9rZXlfb25seScpLmF0dHIoJ2NoZWNrZWQnLCBPcHRpb25zLnNlbGVjdGlvbl9rZXlfb25seSgpID8gdHJ1ZSA6IGZhbHNlKVxuICAkKCcjc2VsZWN0aW9uX2tleV9vbmx5X2NvbW1hbmQnKS52YWwoT3B0aW9ucy5zZWxlY3Rpb25fa2V5X2NvbW1hbmQoKSlcblxuICAkKCcjZGVsYXknKS52YWwoT3B0aW9ucy5kZWxheSgpKVxuICAkKCcjZm9udFNpemUnKS52YWwoT3B0aW9ucy5mb250U2l6ZSgpKVxuXG4gICQoJyNzYXZlX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHsgc2F2ZV9vcHRpb25zKCkgfSlcbiAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcbiAgICAgIHNhdmVfb3B0aW9ucygpXG4gICAgfVxuICB9KVxuXG4gICQoJyNtb3JlX29wdGlvbnNfbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjbW9yZV9vcHRpb25zX2xpbmsnKS5oaWRlKClcbiAgICAkKCcjbW9yZV9vcHRpb25zJykuZmFkZUluKClcbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICAkKCcuc2V0X2hvdGtleScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6ICdjaHJvbWU6Ly9leHRlbnNpb25zL2NvbmZpZ3VyZUNvbW1hbmRzJyB9KVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxufSlcbiIsImV4cG9ydCBjb25zdCBNT0RJRklFUl9LRVkgPSB7XG4gICAgMTY6ICdzaGlmdCcsIDE3OiAnY3RybCcsIDE4OiAnYWx0JywgOTE6ICdjb21tYW5kJywgMTM6ICdSZXR1cm4nXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9saWIvb3B0aW9uc19zY3JpcHQuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9