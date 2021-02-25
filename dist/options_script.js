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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vbGliL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy8uL2xpYi9vcHRpb25zX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJleGNlcHRfdXJscyIsInVybHMiLCJBcnJheSIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImUiLCJzcGxpdCIsIm9ubHlfdXJscyIsIndvcmRfa2V5X29ubHkiLCJhcmciLCJ1bmRlZmluZWQiLCJwYXJzZUludCIsInNlbGVjdGlvbl9rZXlfb25seSIsInNlbGVjdGlvbl9rZXlfY29tbWFuZCIsInRyYW5zbGF0ZV9ieSIsImRlbGF5IiwibXMiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJpc0Zpbml0ZSIsInBvcHVwX3Nob3dfdHJpZ2dlciIsImZvbnRTaXplIiwibG9nIiwiYSIsImNvbnNvbGUiLCJzYXZlX29wdGlvbnMiLCJnZXRfZXhjZXB0X3VybHMiLCIkIiwiZmlsdGVyIiwidmFsdWUiLCJtYXAiLCJnZXQiLCJnZXRfb25seV91cmxzIiwiT3B0aW9ucyIsInZhbCIsImZhZGVJbiIsImZhZGVPdXQiLCJwb3B1bGF0ZV9leGNlcHRfdXJscyIsImFkZF9leGNfdXJsIiwidXJsIiwiYnV0dG9uIiwiaW5wdXQiLCJhdHRyIiwicm1fY2FsbGJhY2siLCJjbG9zZXN0IiwicmVtb3ZlIiwidGV4dCIsImNsaWNrIiwib2ZmIiwiY3NzIiwiZGlzcGxheSIsImFwcGVuZCIsImFwcGVuZFRvIiwic2F2ZWRfZXhjZXB0X3VybHMiLCJmb3JFYWNoIiwicG9wdWxhdGVfb25seV91cmxzIiwiYWRkX29ubHlfdXJsIiwic2F2ZWRfb25seV91cmxzIiwicG9wdWxhdGVfcG9wdXBfc2hvd190cmlnZ2VyIiwic2F2ZWRfcG9wdXBfc2hvd190cmlnZ2VyIiwiU2V0IiwiT2JqZWN0IiwidmFsdWVzIiwiTU9ESUZJRVJfS0VZIiwia2V5IiwiZWFjaCIsInByb3AiLCJjaGFuZ2UiLCJwYXJlbnQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZG9jdW1lbnQiLCJvbiIsImtleUNvZGUiLCJoaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0FBQ2JBLGFBQVcsRUFBRSxVQUFVQyxJQUFWLEVBQWdCO0FBQzNCLFFBQUlBLElBQUksWUFBWUMsS0FBcEIsRUFBMkI7QUFDekJDLGtCQUFZLENBQUNILFdBQWIsR0FBMkJJLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmLENBQTNCO0FBQ0Q7O0FBQ0QsUUFBSUUsWUFBWSxDQUFDSCxXQUFqQixFQUE4QjtBQUM1QixVQUFJO0FBQ0YsZUFBT0ksSUFBSSxDQUFDRSxLQUFMLENBQVdILFlBQVksQ0FBQ0gsV0FBeEIsQ0FBUDtBQUNELE9BRkQsQ0FFRSxPQUFPTyxDQUFQLEVBQVU7QUFDVjtBQUNBLGVBQU9KLFlBQVksQ0FBQ0gsV0FBYixDQUF5QlEsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTyxFQUFQO0FBQ0QsR0FkWTtBQWViQyxXQUFTLEVBQUUsVUFBVVIsSUFBVixFQUFnQjtBQUN6QixRQUFJQSxJQUFJLFlBQVlDLEtBQXBCLEVBQTJCO0FBQ3pC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QUFELENBQUQsQ0FBd0I2QyxFQUF4QixDQUEyQixPQUEzQixFQUFvQyxZQUFZO0FBQzlDN0MsS0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IrQyxJQUF4QjtBQUNBL0MsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsTUFBbkI7QUFDQSxXQUFPLEtBQVA7QUFDRCxHQUpEO0FBS0QsQ0FyQ0EsQ0FBRCxDOzs7Ozs7Ozs7Ozs7OztBQ3RITyxNQUFNNEIsWUFBWSxHQUFHO0FBQ3hCLE1BQUksT0FEb0I7QUFDWCxNQUFJLE1BRE87QUFDQyxNQUFJLEtBREw7QUFDWSxNQUFJLFNBRGhCO0FBQzJCLE1BQUk7QUFEL0IsQ0FBckIsQzs7Ozs7O1VDQVA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im9wdGlvbnNfc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBleGNlcHRfdXJsczogZnVuY3Rpb24gKHVybHMpIHtcbiAgICBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBsb2NhbFN0b3JhZ2UuZXhjZXB0X3VybHMgPSBKU09OLnN0cmluZ2lmeSh1cmxzKVxuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZXhjZXB0X3VybHMpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYml0bGl0eVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzLnNwbGl0KCcsJylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdXG4gIH0sXG4gIG9ubHlfdXJsczogZnVuY3Rpb24gKHVybHMpIHtcbiAgICBpZiAodXJscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uub25seV91cmxzID0gSlNPTi5zdHJpbmdpZnkodXJscylcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5vbmx5X3VybHMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5vbmx5X3VybHMpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYml0bGl0eVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLm9ubHlfdXJscy5zcGxpdCgnLCcpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9LFxuICB3b3JkX2tleV9vbmx5OiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGFyZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVsnd29yZF9rZXlfb25seSddID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ3dvcmRfa2V5X29ubHknXSlcbiAgfSxcbiAgc2VsZWN0aW9uX2tleV9vbmx5OiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGFyZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVsnc2VsZWN0aW9uX2tleV9vbmx5J10gPSBhcmdcbiAgICB9XG4gICAgaWYoIWxvY2FsU3RvcmFnZVsnc2VsZWN0aW9uX2tleV9vbmx5J10pIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZVsnc2VsZWN0aW9uX2tleV9vbmx5J10pXG4gIH0sXG4gIHNlbGVjdGlvbl9rZXlfY29tbWFuZDogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfY29tbWFuZCddID0gYXJnXG4gICAgfVxuXG4gICAgaWYoIWxvY2FsU3RvcmFnZVsnc2VsZWN0aW9uX2tleV9jb21tYW5kJ10pIHtcbiAgICAgIHJldHVybiAnY29tbWFuZCdcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X2NvbW1hbmQnXVxuICB9LFxuICB0cmFuc2xhdGVfYnk6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnID09ICdjbGljaycgfHwgYXJnID09ICdwb2ludCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS50cmFuc2xhdGVfYnkgPSBhcmdcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS50cmFuc2xhdGVfYnkgfHwgJ2NsaWNrJ1xuICB9LFxuICBkZWxheTogZnVuY3Rpb24gKG1zKSB7XG4gICAgaWYgKG1zICE9IHVuZGVmaW5lZCAmJiAhaXNOYU4ocGFyc2VGbG9hdChtcykpICYmIGlzRmluaXRlKG1zKSkge1xuICAgICAgbG9jYWxTdG9yYWdlWydkZWxheSddID0gbXNcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVsnZGVsYXknXSA9PSB1bmRlZmluZWQgPyA3MDAgOiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ2RlbGF5J10pXG4gIH0sXG4gIHBvcHVwX3Nob3dfdHJpZ2dlcjogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3BvcHVwX3Nob3dfdHJpZ2dlciddID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbJ3BvcHVwX3Nob3dfdHJpZ2dlciddIHx8ICdjb21tYW5kJ1xuICB9LFxuICBmb250U2l6ZTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ2ZvbnRTaXplJ10gPSBhcmdcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZVsnZm9udFNpemUnXSB8fCAxNClcbiAgfSxcbiAgbG9nKGEpIHtcbiAgICBjb25zb2xlLmxvZygnbG9nJywgYSlcbiAgfVxufVxuIiwiaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJ1xuaW1wb3J0IHsgTU9ESUZJRVJfS0VZIH0gZnJvbSAnLi91dGlscydcblxuZnVuY3Rpb24gc2F2ZV9vcHRpb25zKCkge1xuICBmdW5jdGlvbiBnZXRfZXhjZXB0X3VybHMoKSB7XG4gICAgbGV0IGV4Y2VwdF91cmxzID0gW11cbiAgICBleGNlcHRfdXJscyA9ICQoJy5leGNlcHRfdXJsX2lucHV0JykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgfSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlXG4gICAgfSkuZ2V0KClcblxuICAgIHJldHVybiBleGNlcHRfdXJsc1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0X29ubHlfdXJscygpIHtcbiAgICBsZXQgb25seV91cmxzID0gW11cbiAgICBvbmx5X3VybHMgPSAkKCcub25seV91cmxfaW5wdXQnKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICB9KS5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVcbiAgICB9KS5nZXQoKVxuXG4gICAgcmV0dXJuIG9ubHlfdXJsc1xuICB9XG5cbiAgT3B0aW9ucy5leGNlcHRfdXJscyhnZXRfZXhjZXB0X3VybHMoKSlcbiAgT3B0aW9ucy5vbmx5X3VybHMoZ2V0X29ubHlfdXJscygpKVxuXG4gIE9wdGlvbnMud29yZF9rZXlfb25seSgkKCcjd29yZF9rZXlfb25seTpjaGVja2VkJykudmFsKCkgPyAxIDogMClcbiAgT3B0aW9ucy5zZWxlY3Rpb25fa2V5X29ubHkoJCgnI3NlbGVjdGlvbl9rZXlfb25seTpjaGVja2VkJykudmFsKCkgPyAxIDogMClcbiAgT3B0aW9ucy5zZWxlY3Rpb25fa2V5X2NvbW1hbmQoJCgnI3NlbGVjdGlvbl9rZXlfb25seV9jb21tYW5kIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKVxuXG4gIE9wdGlvbnMuZGVsYXkoJCgnI2RlbGF5JykudmFsKCkpXG4gIE9wdGlvbnMuZm9udFNpemUoJCgnI2ZvbnRTaXplJykudmFsKCkpXG5cbiAgT3B0aW9ucy5wb3B1cF9zaG93X3RyaWdnZXIoJCgnI3dvcmRfa2V5X29ubHlfa2V5JykudmFsKCcnKSlcblxuICAkKCcjc3RhdHVzJykuZmFkZUluKCkuZGVsYXkoMzAwMCkuZmFkZU91dCgpXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlX2V4Y2VwdF91cmxzKCkge1xuICBmdW5jdGlvbiBhZGRfZXhjX3VybCh1cmwpIHtcbiAgICBsZXQgYnV0dG9uXG4gICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImV4Y2VwdF91cmxfaW5wdXRcIj4nKS5hdHRyKCdzaXplJywgMTAwKS52YWwodXJsKVxuICAgIGNvbnN0IHJtX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHsgJCh0aGlzKS5yZW1vdmUoKSB9KSB9XG5cbiAgICBpZiAodXJsKSB7XG4gICAgICBidXR0b24gPSAkKCc8YnV0dG9uPicsIHsgdGV4dDogJ1gnIH0pLmNsaWNrKHJtX2NhbGxiYWNrKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJ1dHRvbiA9ICQoJzxidXR0b24+JywgeyB0ZXh0OiAnKycgfSkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCgnLmV4Y2VwdF91cmxfaW5wdXQnLCAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykpLnZhbCgpID4gJycpIHtcbiAgICAgICAgICAkKHRoaXMpLnRleHQoJ1gnKS5vZmYoJ2NsaWNrJykuY2xpY2socm1fY2FsbGJhY2spXG4gICAgICAgICAgYWRkX2V4Y191cmwoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICAkKCc8dHI+JywgeyBjc3M6IHsgZGlzcGxheTogJ25vbmUnIH0gfSkuZmFkZUluKClcbiAgICAgIC5hcHBlbmQoJCgnPHRkPicpLmFwcGVuZChpbnB1dCkpXG4gICAgICAuYXBwZW5kKCQoJzx0ZD4nKS5hcHBlbmQoYnV0dG9uKSlcbiAgICAgIC5hcHBlbmRUbygkKCcjZXhjX3VybHNfdGFibGUnKSlcbiAgfVxuXG4gIGNvbnN0IHNhdmVkX2V4Y2VwdF91cmxzID0gT3B0aW9ucy5leGNlcHRfdXJscygpXG5cbiAgc2F2ZWRfZXhjZXB0X3VybHMuZm9yRWFjaChmdW5jdGlvbiAodXJsKSB7XG4gICAgYWRkX2V4Y191cmwodXJsKVxuICB9KVxuICBhZGRfZXhjX3VybCgpXG59XG5cblxuZnVuY3Rpb24gcG9wdWxhdGVfb25seV91cmxzKCkge1xuICBmdW5jdGlvbiBhZGRfb25seV91cmwodXJsKSB7XG4gICAgbGV0IGJ1dHRvblxuICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvbmx5X3VybF9pbnB1dFwiPicpLmF0dHIoJ3NpemUnLCAxMDApLnZhbCh1cmwpXG4gICAgY29uc3Qgcm1fY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7ICQodGhpcykuY2xvc2VzdCgndHInKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkgeyAkKHRoaXMpLnJlbW92ZSgpIH0pIH1cblxuICAgIGlmICh1cmwpIHtcbiAgICAgIGJ1dHRvbiA9ICQoJzxidXR0b24+JywgeyB0ZXh0OiAnWCcgfSkuY2xpY2socm1fY2FsbGJhY2spXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnV0dG9uID0gJCgnPGJ1dHRvbj4nLCB7IHRleHQ6ICcrJyB9KS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKCcub25seV91cmxfaW5wdXQnLCAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykpLnZhbCgpID4gJycpIHtcbiAgICAgICAgICAkKHRoaXMpLnRleHQoJ1gnKS5vZmYoJ2NsaWNrJykuY2xpY2socm1fY2FsbGJhY2spXG4gICAgICAgICAgYWRkX29ubHlfdXJsKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgJCgnPHRyPicsIHsgY3NzOiB7IGRpc3BsYXk6ICdub25lJyB9IH0pLmZhZGVJbigpXG4gICAgICAuYXBwZW5kKCQoJzx0ZD4nKS5hcHBlbmQoaW5wdXQpKVxuICAgICAgLmFwcGVuZCgkKCc8dGQ+JykuYXBwZW5kKGJ1dHRvbikpXG4gICAgICAuYXBwZW5kVG8oJCgnI29ubHlfdXJsc190YWJsZScpKVxuICB9XG5cbiAgY29uc3Qgc2F2ZWRfb25seV91cmxzID0gT3B0aW9ucy5vbmx5X3VybHMoKVxuXG4gIHNhdmVkX29ubHlfdXJscy5mb3JFYWNoKGZ1bmN0aW9uICh1cmwpIHtcbiAgICBhZGRfb25seV91cmwodXJsKVxuICB9KVxuICBhZGRfb25seV91cmwoKVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZV9wb3B1cF9zaG93X3RyaWdnZXIoKSB7XG4gIGNvbnN0IHNhdmVkX3BvcHVwX3Nob3dfdHJpZ2dlciA9IE9wdGlvbnMucG9wdXBfc2hvd190cmlnZ2VyKClcblxuICAgIDtbLi4ubmV3IFNldChPYmplY3QudmFsdWVzKE1PRElGSUVSX0tFWSkpXS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICQoJyNzZWxlY3Rpb25fa2V5X29ubHlfY29tbWFuZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmFwcGVuZCgkKCc8b3B0aW9uPicsIHsgdmFsdWU6IGtleSB9KS50ZXh0KGtleSkucHJvcCgnc2VsZWN0ZWQnLCBzYXZlZF9wb3B1cF9zaG93X3RyaWdnZXIgPT0ga2V5KSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAkKCcjd29yZF9rZXlfb25seV9rZXksICNzZWxlY3Rpb25fa2V5X29ubHlfa2V5JykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjd29yZF9rZXlfb25seV9rZXksICNzZWxlY3Rpb25fa2V5X29ubHlfa2V5JykudmFsKHRoaXMudmFsdWUpXG4gIH0pXG59XG5cbiQoZnVuY3Rpb24gKCkge1xuICBwb3B1bGF0ZV9leGNlcHRfdXJscygpXG4gIHBvcHVsYXRlX29ubHlfdXJscygpXG4gIHBvcHVsYXRlX3BvcHVwX3Nob3dfdHJpZ2dlcigpXG5cbiAgaWYgKE9wdGlvbnMud29yZF9rZXlfb25seSgpKSB7XG4gICAgJCgnI2RlbGF5JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKS5wYXJlbnQoKS5hZGRDbGFzcygnZGlzYWJsZWQnKVxuICB9XG5cblxuICAkKCcjd29yZF9rZXlfb25seScpLmF0dHIoJ2NoZWNrZWQnLCBPcHRpb25zLndvcmRfa2V5X29ubHkoKSA/IHRydWUgOiBmYWxzZSkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKCcjdHJhbnNsYXRlX2J5JykudmFsKCkgPT0gJ3BvaW50JyAmJiAhJCh0aGlzKS5hdHRyKCdjaGVja2VkJykpIHtcbiAgICAgICQoJyNkZWxheScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCgnI2RlbGF5JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKS5wYXJlbnQoKS5hZGRDbGFzcygnZGlzYWJsZWQnKVxuICAgIH1cbiAgfSlcblxuICAkKCcjc2VsZWN0aW9uX2tleV9vbmx5JykuYXR0cignY2hlY2tlZCcsIE9wdGlvbnMuc2VsZWN0aW9uX2tleV9vbmx5KCkgPyB0cnVlIDogZmFsc2UpXG4gICQoJyNzZWxlY3Rpb25fa2V5X29ubHlfY29tbWFuZCcpLnZhbChPcHRpb25zLnNlbGVjdGlvbl9rZXlfY29tbWFuZCgpKVxuXG4gICQoJyNkZWxheScpLnZhbChPcHRpb25zLmRlbGF5KCkpXG4gICQoJyNmb250U2l6ZScpLnZhbChPcHRpb25zLmZvbnRTaXplKCkpXG5cbiAgJCgnI3NhdmVfYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkgeyBzYXZlX29wdGlvbnMoKSB9KVxuICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgc2F2ZV9vcHRpb25zKClcbiAgICB9XG4gIH0pXG5cbiAgJCgnI21vcmVfb3B0aW9uc19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJyNtb3JlX29wdGlvbnNfbGluaycpLmhpZGUoKVxuICAgICQoJyNtb3JlX29wdGlvbnMnKS5mYWRlSW4oKVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxufSlcbiIsImV4cG9ydCBjb25zdCBNT0RJRklFUl9LRVkgPSB7XG4gICAgMTY6ICdzaGlmdCcsIDE3OiAnY3RybCcsIDE4OiAnYWx0JywgOTE6ICdjb21tYW5kJywgMTM6ICdSZXR1cm4nXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9saWIvb3B0aW9uc19zY3JpcHQuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9