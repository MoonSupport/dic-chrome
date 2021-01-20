/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./background.js":
/*!***********************!*
  !*** ./background.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/options */ "./lib/options.js");


const URL = word => `http://ec2-54-180-81-156.ap-northeast-2.compute.amazonaws.com:4000/word/find/${word}`;

const URL2 = word => `http://ec2-54-180-81-156.ap-northeast-2.compute.amazonaws.com:4000/word/fuzzy/${word}`;

const translate = (word, sendResponse) => {
  $.ajax({
    url: URL(word),
    type: 'GET',
    success: function on_success(data) {
      if (!data?.content) {
        $.ajax({
          url: URL2(word),
          type: 'GET',
          success: function on_success(data) {
            sendResponse({
              status: true,
              type: 'recommand',
              recommands: data
            });
          }
        });
      } else {
        sendResponse({
          status: true,
          type: 'find',
          word: data
        });
      }
    },
    error: function (xhr, status, e) {
      sendResponse({
        status: true,
        e
      });
    }
  });
};

chrome.runtime.onInstalled.addListener(function () {
  const options = Object.keys(_lib_options__WEBPACK_IMPORTED_MODULE_0__.default).reduce((result, key) => {
    result[key] = _lib_options__WEBPACK_IMPORTED_MODULE_0__.default[key]();
    return result;
  }, {});
  chrome.storage.sync.set({
    options
  }, function () {});
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.handler) {
    case 'get_options':
      sendResponse({
        options: JSON.stringify(Object.keys(_lib_options__WEBPACK_IMPORTED_MODULE_0__.default).reduce((result, key) => {
          result[key] = _lib_options__WEBPACK_IMPORTED_MODULE_0__.default[key]();
          return result;
        }, {}))
      });
      break;

    case 'translate':
      translate(request.word, sendResponse);
      return true;

    default:
      sendResponse({});
  }

  return true;
});

/***/ }),

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
/******/ 	__webpack_require__("./background.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vbGliL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlVSTCIsIndvcmQiLCJVUkwyIiwidHJhbnNsYXRlIiwic2VuZFJlc3BvbnNlIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwic3VjY2VzcyIsIm9uX3N1Y2Nlc3MiLCJkYXRhIiwiY29udGVudCIsInN0YXR1cyIsInJlY29tbWFuZHMiLCJlcnJvciIsInhociIsImUiLCJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiT3B0aW9ucyIsInJlZHVjZSIsInJlc3VsdCIsImtleSIsInN0b3JhZ2UiLCJzeW5jIiwic2V0Iiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsImhhbmRsZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhjZXB0X3VybHMiLCJ1cmxzIiwiQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJwYXJzZSIsInNwbGl0Iiwib25seV91cmxzIiwid29yZF9rZXlfb25seSIsImFyZyIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic2VsZWN0aW9uX2tleV9vbmx5Iiwic2VsZWN0aW9uX2tleV9jb21tYW5kIiwidHJhbnNsYXRlX2J5IiwiZGVsYXkiLCJtcyIsImlzTmFOIiwicGFyc2VGbG9hdCIsImlzRmluaXRlIiwicG9wdXBfc2hvd190cmlnZ2VyIiwiZm9udFNpemUiLCJsb2ciLCJhIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFJQyxJQUFELElBQVcsZ0ZBQStFQSxJQUFLLEVBQTNHOztBQUNBLE1BQU1DLElBQUksR0FBSUQsSUFBRCxJQUFXLGlGQUFnRkEsSUFBSyxFQUE3Rzs7QUFFQSxNQUFNRSxTQUFTLEdBQUksQ0FBQ0YsSUFBRCxFQUFPRyxZQUFQLEtBQXdCO0FBQ3ZDQyxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUVQLEdBQUcsQ0FBQ0MsSUFBRCxDQURMO0FBRUhPLFFBQUksRUFBRSxLQUZIO0FBR0hDLFdBQU8sRUFBRSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUMvQixVQUFHLENBQUNBLElBQUksRUFBRUMsT0FBVixFQUFtQjtBQUNmUCxTQUFDLENBQUNDLElBQUYsQ0FBTztBQUNIQyxhQUFHLEVBQUVMLElBQUksQ0FBQ0QsSUFBRCxDQUROO0FBRUhPLGNBQUksRUFBRSxLQUZIO0FBR0hDLGlCQUFPLEVBQUUsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDL0JQLHdCQUFZLENBQUU7QUFDVlMsb0JBQU0sRUFBRyxJQURDO0FBRVZMLGtCQUFJLEVBQUUsV0FGSTtBQUdWTSx3QkFBVSxFQUFFSDtBQUhGLGFBQUYsQ0FBWjtBQUtIO0FBVEUsU0FBUDtBQVdILE9BWkQsTUFZTztBQUNIUCxvQkFBWSxDQUFFO0FBQ1ZTLGdCQUFNLEVBQUcsSUFEQztBQUVWTCxjQUFJLEVBQUMsTUFGSztBQUdWUCxjQUFJLEVBQUVVO0FBSEksU0FBRixDQUFaO0FBS0g7QUFDSixLQXZCRTtBQXdCSEksU0FBSyxFQUFFLFVBQVNDLEdBQVQsRUFBY0gsTUFBZCxF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QzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9saWIvb3B0aW9ucydcblxuY29uc3QgVVJMID0gKHdvcmQpID0+IGBodHRwOi8vZWMyLTU0LTE4MC04MS0xNTYuYXAtbm9ydGhlYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjQwMDAvd29yZC9maW5kLyR7d29yZH1gXG5jb25zdCBVUkwyID0gKHdvcmQpID0+IGBodHRwOi8vZWMyLTU0LTE4MC04MS0xNTYuYXAtbm9ydGhlYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjQwMDAvd29yZC9mdXp6eS8ke3dvcmR9YFxuXG5jb25zdCB0cmFuc2xhdGUgPSAgKHdvcmQsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogVVJMKHdvcmQpLFxuICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gb25fc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICBpZighZGF0YT8uY29udGVudCkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogVVJMMih3b3JkKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIG9uX3N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVjb21tYW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvbW1hbmRzOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlICh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6J2ZpbmQnLFxuICAgICAgICAgICAgICAgICAgICB3b3JkOiBkYXRhXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIHN0YXR1cyA6IHRydWUsXG4gICAgICAgICAgICAgICAgZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbn1cblxuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmtleXMoT3B0aW9ucykucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICByZXN1bHRba2V5XSA9IE9wdGlvbnNba2V5XSgpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfSwge30pXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe29wdGlvbnN9LCBmdW5jdGlvbigpIHtcbiAgICB9KTtcbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBzd2l0Y2ggKHJlcXVlc3QuaGFuZGxlcikge1xuICAgIGNhc2UgJ2dldF9vcHRpb25zJzpcbiAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgb3B0aW9uczogSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhPcHRpb25zKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IE9wdGlvbnNba2V5XSgpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgIGNhc2UgJ3RyYW5zbGF0ZSc6XG4gICAgICAgIHRyYW5zbGF0ZShyZXF1ZXN0LndvcmQsIHNlbmRSZXNwb25zZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgICBzZW5kUmVzcG9uc2Uoe30pXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59KSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZXhjZXB0X3VybHM6IGZ1bmN0aW9uICh1cmxzKSB7XG4gICAgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzID0gSlNPTi5zdHJpbmdpZnkodXJscylcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpdGxpdHlcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscy5zcGxpdCgnLCcpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9LFxuICBvbmx5X3VybHM6IGZ1bmN0aW9uICh1cmxzKSB7XG4gICAgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbG9jYWxTdG9yYWdlLm9ubHlfdXJscyA9IEpTT04uc3RyaW5naWZ5KHVybHMpXG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2Uub25seV91cmxzKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uub25seV91cmxzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpdGxpdHlcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5vbmx5X3VybHMuc3BsaXQoJywnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgd29yZF9rZXlfb25seTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3dvcmRfa2V5X29ubHknXSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlWyd3b3JkX2tleV9vbmx5J10pXG4gIH0sXG4gIHNlbGVjdGlvbl9rZXlfb25seTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddID0gYXJnXG4gICAgfVxuICAgIGlmKCFsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddKVxuICB9LFxuICBzZWxlY3Rpb25fa2V5X2NvbW1hbmQ6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X2NvbW1hbmQnXSA9IGFyZ1xuICAgIH1cblxuICAgIGlmKCFsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfY29tbWFuZCddKSB7XG4gICAgICByZXR1cm4gJ2NvbW1hbmQnXG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVsnc2VsZWN0aW9uX2tleV9jb21tYW5kJ11cbiAgfSxcbiAgdHJhbnNsYXRlX2J5OiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGFyZyA9PSAnY2xpY2snIHx8IGFyZyA9PSAncG9pbnQnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UudHJhbnNsYXRlX2J5ID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UudHJhbnNsYXRlX2J5IHx8ICdjbGljaydcbiAgfSxcbiAgZGVsYXk6IGZ1bmN0aW9uIChtcykge1xuICAgIGlmIChtcyAhPSB1bmRlZmluZWQgJiYgIWlzTmFOKHBhcnNlRmxvYXQobXMpKSAmJiBpc0Zpbml0ZShtcykpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVsnZGVsYXknXSA9IG1zXG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbJ2RlbGF5J10gPT0gdW5kZWZpbmVkID8gNzAwIDogcGFyc2VJbnQobG9jYWxTdG9yYWdlWydkZWxheSddKVxuICB9LFxuICBwb3B1cF9zaG93X3RyaWdnZXI6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWydwb3B1cF9zaG93X3RyaWdnZXInXSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlWydwb3B1cF9zaG93X3RyaWdnZXInXSB8fCAnY29tbWFuZCdcbiAgfSxcbiAgZm9udFNpemU6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWydmb250U2l6ZSddID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ2ZvbnRTaXplJ10gfHwgMTQpXG4gIH0sXG4gIGxvZyhhKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZycsIGEpXG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYmFja2dyb3VuZC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=