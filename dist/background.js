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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./config.js");



const translate = (word, sendResponse) => {
  $.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_1__.URL,
    type: "POST",
    accept: "application/json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({
      "key": _config__WEBPACK_IMPORTED_MODULE_1__.ACCESS_KEY,
      "word": word.trim()
    }),
    dataType: "json",
    beforeSend: function () {
      chrome.runtime.sendMessage({
        loading: true
      });
    },
    complete: function () {
      chrome.runtime.sendMessage({
        loading: false
      });
    },
    success: function on_success(data) {
      console.log('data', data);

      switch (data.type) {
        case 'find':
          sendResponse({
            status: true,
            type: 'find',
            word: data.value
          });
          break;

        case 'recommand':
          sendResponse({
            status: true,
            type: 'recommand',
            recommands: data.value
          });

        case 'no_find':
          sendResponse({
            status: true,
            type: 'no_find'
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
}); // Recovery를 검색
// Recover 에서 없어서 Recommand 요청
// Recovery를 입력 후 결과 반환
// Recovery 를 발견 후 Recoomand 결과 반환

/***/ }),

/***/ "./config.js":
/*!*******************!*
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACCESS_KEY": () => /* binding */ ACCESS_KEY,
/* harmony export */   "URL": () => /* binding */ URL
/* harmony export */ });
const ACCESS_KEY = 'MOONSUPPORT_D_SUPER_ACCESS_KEY';
const URL = 'https://jgxre5pvmj.execute-api.ap-northeast-2.amazonaws.com/default/findWord';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vY29uZmlnLmpzIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvLi9saWIvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsidHJhbnNsYXRlIiwid29yZCIsInNlbmRSZXNwb25zZSIsIiQiLCJhamF4IiwidXJsIiwiVVJMIiwidHlwZSIsImFjY2VwdCIsImNvbnRlbnRUeXBlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJBQ0NFU1NfS0VZIiwidHJpbSIsImRhdGFUeXBlIiwiYmVmb3JlU2VuZCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsImxvYWRpbmciLCJjb21wbGV0ZSIsInN1Y2Nlc3MiLCJvbl9zdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInZhbHVlIiwicmVjb21tYW5kcyIsImVycm9yIiwieGhyIiwiZSIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsIk9wdGlvbnMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJrZXkiLCJzdG9yYWdlIiwic3luYyIsInNldCIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJoYW5kbGVyIiwiZXhjZXB0X3VybHMiLCJ1cmxzIiwiQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJwYXJzZSIsInNwbGl0Iiwib25seV91cmxzIiwid29yZF9rZXlfb25seSIsImFyZyIsInVuZGVmaW5lZCIsInBhcnNlSW50Iiwic2VsZWN0aW9uX2tleV9vbmx5Iiwic2VsZWN0aW9uX2tleV9jb21tYW5kIiwidHJhbnNsYXRlX2J5IiwiZGVsYXkiLCJtcyIsImlzTmFOIiwicGFyc2VGbG9hdCIsImlzRmluaXRlIiwicG9wdXBfc2hvd190cmlnZ2VyIiwiZm9udFNpemUiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUksQ0FBQ0MsSUFBRCxFQUFPQyxZQUFQLEtBQXdCO0FBQ3ZDQyxHQUFDLENBQUNDLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUVDLHdDQURGO0FBRUhDLFFBQUksRUFBRSxNQUZIO0FBR0hDLFVBQU0sRUFBRSxrQkFITDtBQUlIQyxlQUFXLEVBQUUsaUNBSlY7QUFLSEMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQixhQUFPQywrQ0FEVTtBQUVqQixjQUFTWixJQUFJLENBQUNhLElBQUw7QUFGUSxLQUFmLENBTEg7QUFTSEMsWUFBUSxFQUFFLE1BVFA7QUFVSEMsY0FBVSxFQUFFLFlBQVc7QUFDbkJDLFlBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxXQUFmLENBQTJCO0FBQ3ZCQyxlQUFPLEVBQUU7QUFEYyxPQUEzQjtBQUdILEtBZEU7QUFlSEMsWUFBUSxFQUFFLFlBQVc7QUFDakJKLFlBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxXQUFmLENBQTJCO0FBQ3ZCQyxlQUFPLEVBQUU7QUFEYyxPQUEzQjtBQUdILEtBbkJFO0FBb0JIRSxXQUFPLEVBQUUsU0FBU0MsVUFBVCxDQUFvQmIsSUFBcEIsRUFBMEI7QUFDL0JjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JmLElBQXBCOztBQUNJLGNBQU9BLElB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Q0QsR0F6RVk7QUEwRWJpQixVQUFRLEVBQUUsVUFBVVosR0FBVixFQUFlO0FBQ3ZCLFFBQUlBLEdBQUcsSUFBSUMsU0FBWCxFQUFzQjtBQUNwQk4sa0JBQVksQ0FBQyxVQUFELENBQVosR0FBMkJLLEdBQTNCO0FBQ0Q7O0FBQ0QsV0FBT0UsUUFBUSxDQUFDUCxZQUFZLENBQUMsVUFBRCxDQUFaLElBQTRCLEVBQTdCLENBQWY7QUFDRCxHQS9FWTs7QUFnRmIxQixLQUFHLENBQUM0QyxDQUFELEVBQUk7QUFDTDdDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUI0QyxDQUFuQjtBQUNEOztBQWxGWSxDQUFmLEU7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9saWIvb3B0aW9ucydcbmltcG9ydCB7IEFDQ0VTU19LRVksIFVSTCB9IGZyb20gJy4vY29uZmlnJ1xuXG5jb25zdCB0cmFuc2xhdGUgPSAgKHdvcmQsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogVVJMLFxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcImtleVwiOiBBQ0NFU1NfS0VZLFxuICAgICAgICAgICAgXCJ3b3JkXCIgOiB3b3JkLnRyaW0oKVxuICAgICAgICB9KSxcbiAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIG9uX3N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxuICAgICAgICAgICAgICAgIHN3aXRjaChkYXRhLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmluZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UgKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6J2ZpbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQ6IGRhdGEudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWNvbW1hbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVjb21tYW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvbW1hbmRzOiBkYXRhLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdub19maW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vX2ZpbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZSkge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59XG5cblxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5rZXlzKE9wdGlvbnMpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBPcHRpb25zW2tleV0oKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH0sIHt9KVxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtvcHRpb25zfSwgZnVuY3Rpb24oKSB7XG4gICAgfSk7XG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgc3dpdGNoIChyZXF1ZXN0LmhhbmRsZXIpIHtcbiAgICBjYXNlICdnZXRfb3B0aW9ucyc6XG4gICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgIG9wdGlvbnM6IEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgT2JqZWN0LmtleXMoT3B0aW9ucykucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBPcHRpb25zW2tleV0oKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgfSwge30pXG4gICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICBjYXNlICd0cmFuc2xhdGUnOlxuICAgICAgICB0cmFuc2xhdGUocmVxdWVzdC53b3JkLCBzZW5kUmVzcG9uc2UpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgICAgc2VuZFJlc3BvbnNlKHt9KVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufSlcblxuLy8gUmVjb3Zlcnnrpbwg6rKA7IOJXG4vLyBSZWNvdmVyIOyXkOyEnCDsl4bslrTshJwgUmVjb21tYW5kIOyalOyyrVxuLy8gUmVjb3Zlcnnrpbwg7J6F66ClIO2bhCDqsrDqs7wg67CY7ZmYXG4vLyBSZWNvdmVyeSDrpbwg67Cc6rKsIO2bhCBSZWNvb21hbmQg6rKw6rO8IOuwmO2ZmCIsImV4cG9ydCBjb25zdCBBQ0NFU1NfS0VZID0gJ01PT05TVVBQT1JUX0RfU1VQRVJfQUNDRVNTX0tFWSdcbmV4cG9ydCBjb25zdCBVUkwgPSAnaHR0cHM6Ly9qZ3hyZTVwdm1qLmV4ZWN1dGUtYXBpLmFwLW5vcnRoZWFzdC0yLmFtYXpvbmF3cy5jb20vZGVmYXVsdC9maW5kV29yZCciLCJleHBvcnQgZGVmYXVsdCB7XG4gIGV4Y2VwdF91cmxzOiBmdW5jdGlvbiAodXJscykge1xuICAgIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscyA9IEpTT04uc3RyaW5naWZ5KHVybHMpXG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZXhjZXB0X3VybHMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5leGNlcHRfdXJscylcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaXRsaXR5XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZXhjZXB0X3VybHMuc3BsaXQoJywnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgb25seV91cmxzOiBmdW5jdGlvbiAodXJscykge1xuICAgIGlmICh1cmxzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5vbmx5X3VybHMgPSBKU09OLnN0cmluZ2lmeSh1cmxzKVxuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLm9ubHlfdXJscykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLm9ubHlfdXJscylcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaXRsaXR5XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uub25seV91cmxzLnNwbGl0KCcsJylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdXG4gIH0sXG4gIHdvcmRfa2V5X29ubHk6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWyd3b3JkX2tleV9vbmx5J10gPSBhcmdcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZVsnd29yZF9rZXlfb25seSddKVxuICB9LFxuICBzZWxlY3Rpb25fa2V5X29ubHk6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoYXJnICE9IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X29ubHknXSA9IGFyZ1xuICAgIH1cbiAgICBpZighbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X29ubHknXSkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X29ubHknXSlcbiAgfSxcbiAgc2VsZWN0aW9uX2tleV9jb21tYW5kOiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGFyZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVsnc2VsZWN0aW9uX2tleV9jb21tYW5kJ10gPSBhcmdcbiAgICB9XG5cbiAgICBpZighbG9jYWxTdG9yYWdlWydzZWxlY3Rpb25fa2V5X2NvbW1hbmQnXSkge1xuICAgICAgcmV0dXJuICdjb21tYW5kJ1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbJ3NlbGVjdGlvbl9rZXlfY29tbWFuZCddXG4gIH0sXG4gIHRyYW5zbGF0ZV9ieTogZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChhcmcgPT0gJ2NsaWNrJyB8fCBhcmcgPT0gJ3BvaW50Jykge1xuICAgICAgbG9jYWxTdG9yYWdlLnRyYW5zbGF0ZV9ieSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnRyYW5zbGF0ZV9ieSB8fCAnY2xpY2snXG4gIH0sXG4gIGRlbGF5OiBmdW5jdGlvbiAobXMpIHtcbiAgICBpZiAobXMgIT0gdW5kZWZpbmVkICYmICFpc05hTihwYXJzZUZsb2F0KG1zKSkgJiYgaXNGaW5pdGUobXMpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VbJ2RlbGF5J10gPSBtc1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlWydkZWxheSddID09IHVuZGVmaW5lZCA/IDcwMCA6IHBhcnNlSW50KGxvY2FsU3RvcmFnZVsnZGVsYXknXSlcbiAgfSxcbiAgcG9wdXBfc2hvd190cmlnZ2VyOiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGFyZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVsncG9wdXBfc2hvd190cmlnZ2VyJ10gPSBhcmdcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVsncG9wdXBfc2hvd190cmlnZ2VyJ10gfHwgJ2NvbW1hbmQnXG4gIH0sXG4gIGZvbnRTaXplOiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGFyZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVsnZm9udFNpemUnXSA9IGFyZ1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlWydmb250U2l6ZSddIHx8IDE0KVxuICB9LFxuICBsb2coYSkge1xuICAgIGNvbnNvbGUubG9nKCdsb2cnLCBhKVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2JhY2tncm91bmQuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9