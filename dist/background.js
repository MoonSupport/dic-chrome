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


const URL = word => `http://localhost:4000/word/find/${word}`;

const URL2 = word => `http://localhost:4000/word/fuzzy/${word}`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vbGliL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlVSTCIsIndvcmQiLCJVUkwyIiwidHJhbnNsYXRlIiwic2VuZFJlc3BvbnNlIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwic3VjY2VzcyIsIm9uX3N1Y2Nlc3MiLCJkYXRhIiwiY29udGVudCIsInN0YXR1cyIsInJlY29tbWFuZHMiLCJlcnJvciIsInhociIsImUiLCJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiT3B0aW9ucyIsInJlZHVjZSIsInJlc3VsdCIsImtleSIsInN0b3JhZ2UiLCJzeW5jIiwic2V0Iiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsImhhbmRsZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhjZXB0X3VybHMiLCJ1cmxzIiwiQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJwYXJzZSIsInNwbGl0Iiwib25seV91cmxzIiwid29yZF9rZXlfb25seSIsImFyZyIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic2VsZWN0aW9uX2tleV9vbmx5Iiwic2VsZWN0aW9uX2tleV9jb21tYW5kIiwidHJhbnNsYXRlX2J5IiwiZGVsYXkiLCJtcyIsImlzTmFOIiwicGFyc2VGbG9hdCIsImlzRmluaXRlIiwicG9wdXBfc2hvd190cmlnZ2VyIiwiZm9udFNpemUiLCJsb2ciLCJhIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsR0FBRyxHQUFJQyxJQUFELElBQVcsbUNBQWtDQSxJQUFLLEVBQTlEOztBQUNBLE1BQU1DLElBQUksR0FBSUQsSUFBRCxJQUFXLG9DQUFtQ0EsSUFBSyxFQUFoRTs7QUFFQSxNQUFNRSxTQUFTLEdBQUksQ0FBQ0YsSUFBRCxFQUFPRyxZQUFQLEtBQXdCO0FBQ3ZDQyxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUVQLEdBQUcsQ0FBQ0MsSUFBRCxDQURMO0FBRUhPLFFBQUksRUFBRSxLQUZIO0FBR0hDLFdBQU8sRUFBRSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUMvQixVQUFHLENBQUNBLElBQUksRUFBRUMsT0FBVixFQUFtQjtBQUNmUCxTQUFDLENBQUNDLElBQUYsQ0FBTztBQUNIQyxhQUFHLEVBQUVMLElBQUksQ0FBQ0QsSUFBRCxDQUROO0FBRUhPLGNBQUksRUFBRSxLQUZIO0FBR0hDLGlCQUFPLEVBQUUsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDL0JQLHdCQUFZLENBQUU7QUFDVlMsb0JBQU0sRUFBRyxJQURDO0FBRVZMLGtCQUFJLEVBQUUsV0FGSTtBQUdWTSx3QkFBVSxFQUFFSDtBQUhGLGFBQUYsQ0FBWjtBQUtIO0FBVEUsU0FBUDtBQVdILE9BWkQsTUFZTztBQUNIUCxvQkFBWSxDQUFFO0FBQ1ZTLGdCQUFNLEVBQUcsSUFEQztBQUVWTCxjQUFJLEVBQUMsTUFGSztBQUdWUCxjQUFJLEVBQUVVO0FBSEksU0FBRixDQUFaO0FBS0g7QUFDSixLQXZCRTtBQXdCSEksU0FBSyxFQUFFLFVBQVNDLEdBQVQsRUFBY0gsTUFBZCxF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Qk0sU0FBekIsR0FBcUMsR0FBckMsR0FBMkNDLFFBQVEsQ0FBQ1AsWUFBWSxDQUFDLE9BQUQsQ0FBYixDQUExRDtBQUNELEdBMURZO0FBMkRiZ0Isb0JBQWtCLEVBQUUsVUFBVVgsR0FBVixFQUFlO0FBQ2pDLFFBQUlBLEdBQUcsSUFBSUMsU0FBWCxFQUFzQjtBQUNwQk4sa0JBQVksQ0FBQyxvQkFBRCxDQUFaLEdBQXFDSyxHQUFyQztBQUNEOztBQUNELFdBQU9MLFlBQVksQ0FBQyxvQkFBRCxDQUFaLElBQXNDLFNBQTdDO0FBQ0QsR0FoRVk7QUFpRWJpQixVQUFRLEVBQUUsVUFBVVosR0FBVixFQUFlO0FBQ3ZCLFFBQUlBLEdBQUcsSUFBSUMsU0FBWCxFQUFzQjtBQUNwQk4sa0JBQVksQ0FBQyxVQUFELENBQVosR0FBMkJLLEdBQTNCO0FBQ0Q7O0FBQ0QsV0FBT0UsUUFBUSxDQUFDUCxZQUFZLENBQUMsVUFBRCxDQUFaLElBQTRCLEVBQTdCLENBQWY7QUFDRCxHQXRFWTs7QUF1RWJrQixLQUFHLENBQUNDLENBQUQsRUFBSTtBQUNMQyxXQUFPLENBQUNGLEdBQVIsQ0FBWSxLQUFaLEVBQW1CQyxDQUFuQjtBQUNEOztBQXpFWSxDQUFmLEU7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9saWIvb3B0aW9ucydcblxuY29uc3QgVVJMID0gKHdvcmQpID0+IGBodHRwOi8vbG9jYWxob3N0OjQwMDAvd29yZC9maW5kLyR7d29yZH1gXG5jb25zdCBVUkwyID0gKHdvcmQpID0+IGBodHRwOi8vbG9jYWxob3N0OjQwMDAvd29yZC9mdXp6eS8ke3dvcmR9YFxuXG5jb25zdCB0cmFuc2xhdGUgPSAgKHdvcmQsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogVVJMKHdvcmQpLFxuICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gb25fc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICBpZighZGF0YT8uY29udGVudCkge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogVVJMMih3b3JkKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIG9uX3N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVjb21tYW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvbW1hbmRzOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlICh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6J2ZpbmQnLFxuICAgICAgICAgICAgICAgICAgICB3b3JkOiBkYXRhXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlKSB7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIHN0YXR1cyA6IHRydWUsXG4gICAgICAgICAgICAgICAgZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbn1cblxuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmtleXMoT3B0aW9ucykucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICByZXN1bHRba2V5XSA9IE9wdGlvbnNba2V5XSgpXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfSwge30pXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe29wdGlvbnN9LCBmdW5jdGlvbigpIHtcbiAgICB9KTtcbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBzd2l0Y2ggKHJlcXVlc3QuaGFuZGxlcikge1xuICAgIGNhc2UgJ2dldF9vcHRpb25zJzpcbiAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgb3B0aW9uczogSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhPcHRpb25zKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IE9wdGlvbnNba2V5XSgpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgIGNhc2UgJ3RyYW5zbGF0ZSc6XG4gICAgICAgIHRyYW5zbGF0ZShyZXF1ZXN0LndvcmQsIHNlbmRSZXNwb25zZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgICBzZW5kUmVzcG9uc2Uoe30pXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59KSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZXhjZXB0X3VybHM6IGZ1bmN0aW9uICh1cmxzKSB7XG4gICAgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzID0gSlNPTi5zdHJpbmdpZnkodXJscylcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmV4Y2VwdF91cmxzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpdGxpdHlcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscy5zcGxpdCgnLCcpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9LFxuICBvbmx5X3VybHM6IGZ1bmN0aW9uICh1cmxzKSB7XG4gICAgaWYgKHVybHMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbG9jYWxTdG9yYWdlLm9ubHlfdXJscyA9IEpTT04uc3RyaW5naWZ5KHVybHMpXG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2Uub25seV91cmxzKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Uub25seV91cmxzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpdGxpdHlcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5vbmx5X3VybHMuc3BsaXQoJywnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgd29yZF9rZXlfb25seTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3dvcmRfa2V5X29ubHknXSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlWyd3b3JkX2tleV9vbmx5J10pXG4gIH0sXG4gIHNlbGVjdGlvbl9rZXlfb25seTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfb25seSddKVxuICB9LFxuICBzZWxlY3Rpb25fa2V5X2NvbW1hbmQ6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X2NvbW1hbmQnXSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X2NvbW1hbmQnXVxuICB9LFxuICB0cmFuc2xhdGVfYnk6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnID09ICdjbGljaycgfHwgYXJnID09ICdwb2ludCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS50cmFuc2xhdGVfYnkgPSBhcmdcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS50cmFuc2xhdGVfYnkgfHwgJ2NsaWNrJ1xuICB9LFxuICBkZWxheTogZnVuY3Rpb24gKG1zKSB7XG4gICAgaWYgKG1zICE9IHVuZGVmaW5lZCAmJiAhaXNOYU4ocGFyc2VGbG9hdChtcykpICYmIGlzRmluaXRlKG1zKSkge1xuICAgICAgbG9jYWxTdG9yYWdlWydkZWxheSddID0gbXNcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVsnZGVsYXknXSA9PSB1bmRlZmluZWQgPyA3MDAgOiBwYXJzZUludChsb2NhbFN0b3JhZ2VbJ2RlbGF5J10pXG4gIH0sXG4gIHBvcHVwX3Nob3dfdHJpZ2dlcjogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ3BvcHVwX3Nob3dfdHJpZ2dlciddID0gYXJnXG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbJ3BvcHVwX3Nob3dfdHJpZ2dlciddIHx8ICdjb21tYW5kJ1xuICB9LFxuICBmb250U2l6ZTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ2ZvbnRTaXplJ10gPSBhcmdcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZVsnZm9udFNpemUnXSB8fCAxNClcbiAgfSxcbiAgbG9nKGEpIHtcbiAgICBjb25zb2xlLmxvZygnbG9nJywgYSlcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9iYWNrZ3JvdW5kLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==