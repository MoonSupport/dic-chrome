/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./contentscript.js":
/*!**************************!*
  !*** ./contentscript.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modifierKey": () => /* binding */ modifierKey
/* harmony export */ });
let options;
let keyState = false;
chrome.storage.sync.get('options', function (data) {
  options = data.options;
});
$(document).click(function (e) {
  withOptionsSatisfied(e, function () {
    if (options.translate_by != 'click') {
      if ($(e.target).closest('a').length > 0) // closed parent
        return;
    }

    if (options.selection_key_only && !keyState) {
      return;
    }

    processEvent(e);
  });
  return true;
});
$(document).keydown(function (e) {
  if (e.keyCode === modifierKey(options['selection_key_command'])) {
    keyState = true;
  }

  return true;
}).click(function (e) {
  withOptionsSatisfied(e, function () {
    if (options.translate_by != 'click') {
      if ($(e.target).closest('a').length > 0) // closed parent
        return;
    }

    if (options.selection_key_only && !keyState) {
      return;
    }

    processEvent(e);
  });
  return true;
}).keyup(function (e) {
  keyState = false;
});

function withOptionsSatisfied(e, do_stuff) {
  // pre-hook
  do_stuff();
} //translate


function processEvent(e) {
  const selection = window.getSelection();
  const hit_elem = document.elementFromPoint(e.clientX, e.clientY);

  if (!hit_elem) {
    return;
  }

  let word = '';

  if (selection.toString()) {
    let sel_container = selection.getRangeAt(0).commonAncestorContainer;

    while (sel_container.nodeType != Node.ELEMENT_NODE) {
      sel_container = sel_container.parentNode;
    }

    if (($(hit_elem).is(sel_container) || $.contains(sel_container, hit_elem)) && selection.containsNode(hit_elem, true)) {
      word = selection.toString();
    }

    if (word != '') {
      chrome.storage.sync.set({
        word
      });
    }
  }
}

function serialize(data) {
  const result = {};

  if (!data) {
    return;
  }

  if (data.type === '관련 검색어') {
    result['recommands'] = data.content.map(one => one.title);
  }

  if (data.type === '찾은 단어') {
    result['find'] = data.content;
  }

  return data;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.handler) {
    case 'find':
      result.innerHTML = sender.tab.id;
      return true;

    case 'recommand':
      result.innerHTML = sender.tab.id;
      return true;

    default:
      result.innerHTML = sender.tab.id;
      sendResponse({});
  }

  return true;
});
const modifierKey = key => {
  if (!key) return null;

  switch (key) {
    case 'shift':
      return 16;

    case 'ctrl':
      return 17;

    case 'alt':
      return 18;

    case 'command':
      return 91;

    case 'Return':
      return 13;
  }
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
/******/ 	__webpack_require__("./contentscript.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zLy4vY29udGVudHNjcmlwdC5qcyIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hlbGxvX2V4dGVuc2lvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZWxsb19leHRlbnNpb25zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGVsbG9fZXh0ZW5zaW9ucy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsib3B0aW9ucyIsImtleVN0YXRlIiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJkYXRhIiwiJCIsImRvY3VtZW50IiwiY2xpY2siLCJlIiwid2l0aE9wdGlvbnNTYXRpc2ZpZWQiLCJ0cmFuc2xhdGVfYnkiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwic2VsZWN0aW9uX2tleV9vbmx5IiwicHJvY2Vzc0V2ZW50Iiwia2V5ZG93biIsImtleUNvZGUiLCJtb2RpZmllcktleSIsImtleXVwIiwiZG9fc3R1ZmYiLCJzZWxlY3Rpb24iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJoaXRfZWxlbSIsImVsZW1lbnRGcm9tUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIndvcmQiLCJ0b1N0cmluZyIsInNlbF9jb250YWluZXIiLCJnZXRSYW5nZUF0IiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJwYXJlbnROb2RlIiwiaXMiLCJjb250YWlucyIsImNvbnRhaW5zTm9kZSIsInNldCIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInR5cGUiLCJjb250ZW50IiwibWFwIiwib25lIiwidGl0bGUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiaGFuZGxlciIsImlubmVySFRNTCIsInRhYiIsImlkIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQUo7QUFFQSxJQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUVBQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBZixDQUFvQkMsR0FBcEIsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVUMsSUFBVixFQUFnQjtBQUNqRE4sU0FBTyxHQUFHTSxJQUFJLENBQUNOLE9BQWY7QUFDRCxDQUZEO0FBS0FPLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsVUFBVUMsQ0FBVixFQUFhO0FBQzdCQyxzQkFBb0IsQ0FBQ0QsQ0FBRCxFQUFJLFlBQVk7QUFDbEMsUUFBSVYsT0FBTyxDQUFDWSxZQUFSLElBQXdCLE9BQTVCLEVBQXFDO0FBQ25DLFVBQUlMLENBQUMsQ0FBQ0csQ0FBQyxDQUFDRyxNQUFILENBQUQsQ0FBWUMsT0FBWixDQUFvQixHQUFwQixFQUF5QkMsTUFBekIsR0FBa0MsQ0FBdEMsRUFBeUM7QUFDdkM7QUFDSDs7QUFDRCxRQUFJZixPQUFPLENBQUNnQixrQkFBUixJQUE4QixDQUFDZixRQUFuQyxFQUE2QztBQUMzQztBQUNEOztBQUNEZ0IsZ0JBQVksQ0FBQ1AsQ0FBRCxDQUFaO0FBQ0QsR0FUbUIsQ0FBcEI7QUFVQSxTQUFPLElBQVA7QUFDRCxDQVpEO0FBY0FILENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlVLE9BQVosQ0FBb0IsVUFBVVIsQ0FBVixFQUFhO0FBQy9CLE1BQUdBLENBQUMsQ0FBQ1MsT0FBRixLQUFjQyxXQUFXLENBQUNwQixPQUFPLENBQUMsdUJBQUQsQ0FBUixDQUE1QixFQUFnRTtBQUM5REMsWUFBUSxHQUFHLElBQVg7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxD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a2V5U3RhdGUgPSBmYWxzZVxuXG5jaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnb3B0aW9ucycsIGZ1bmN0aW9uIChkYXRhKSB7XG4gIG9wdGlvbnMgPSBkYXRhLm9wdGlvbnNcbn0pO1xuXG5cbiQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gIHdpdGhPcHRpb25zU2F0aXNmaWVkKGUsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob3B0aW9ucy50cmFuc2xhdGVfYnkgIT0gJ2NsaWNrJykge1xuICAgICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJ2EnKS5sZW5ndGggPiAwKSAvLyBjbG9zZWQgcGFyZW50XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zZWxlY3Rpb25fa2V5X29ubHkgJiYgIWtleVN0YXRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcHJvY2Vzc0V2ZW50KGUpXG4gIH0pXG4gIHJldHVybiB0cnVlXG59KVxuXG4kKGRvY3VtZW50KS5rZXlkb3duKGZ1bmN0aW9uIChlKSB7XG4gIGlmKGUua2V5Q29kZSA9PT0gbW9kaWZpZXJLZXkob3B0aW9uc1snc2VsZWN0aW9uX2tleV9jb21tYW5kJ10pKSB7XG4gICAga2V5U3RhdGUgPSB0cnVlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufSkuY2xpY2soZnVuY3Rpb24oZSkge1xuICB3aXRoT3B0aW9uc1NhdGlzZmllZChlLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9wdGlvbnMudHJhbnNsYXRlX2J5ICE9ICdjbGljaycpIHtcbiAgICAgIGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCdhJykubGVuZ3RoID4gMCkgLy8gY2xvc2VkIHBhcmVudFxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc2VsZWN0aW9uX2tleV9vbmx5ICYmICFrZXlTdGF0ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHByb2Nlc3NFdmVudChlKVxuICB9KVxuICByZXR1cm4gdHJ1ZVxufSkuXG5rZXl1cChmdW5jdGlvbihlKSB7XG4gIGtleVN0YXRlID0gZmFsc2Vcbn0pXG5cblxuZnVuY3Rpb24gd2l0aE9wdGlvbnNTYXRpc2ZpZWQoZSwgZG9fc3R1ZmYpIHtcbiAgLy8gcHJlLWhvb2tcbiAgZG9fc3R1ZmYoKVxufVxuXG5cbi8vdHJhbnNsYXRlXG5cbmZ1bmN0aW9uIHByb2Nlc3NFdmVudChlKSB7XG4gIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICBjb25zdCBoaXRfZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpXG4gIGlmICghaGl0X2VsZW0pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCB3b3JkID0gJydcbiAgaWYgKHNlbGVjdGlvbi50b1N0cmluZygpKSB7XG5cbiAgICBsZXQgc2VsX2NvbnRhaW5lciA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyXG5cbiAgICB3aGlsZSAoc2VsX2NvbnRhaW5lci5ub2RlVHlwZSAhPSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgc2VsX2NvbnRhaW5lciA9IHNlbF9jb250YWluZXIucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICgkKGhpdF9lbGVtKS5pcyhzZWxfY29udGFpbmVyKSB8fCAkLmNvbnRhaW5zKHNlbF9jb250YWluZXIsIGhpdF9lbGVtKSlcbiAgICAgICYmIHNlbGVjdGlvbi5jb250YWluc05vZGUoaGl0X2VsZW0sIHRydWUpXG4gICAgKSB7XG4gICAgICB3b3JkID0gc2VsZWN0aW9uLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAod29yZCAhPSAnJykge1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyB3b3JkIH0pXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKGRhdGEudHlwZSA9PT0gJ+q0gOugqCDqsoDsg4nslrQnKSB7XG4gICAgcmVzdWx0WydyZWNvbW1hbmRzJ10gPSBkYXRhLmNvbnRlbnQubWFwKChvbmUpID0+IG9uZS50aXRsZSlcbiAgfVxuXG4gIGlmIChkYXRhLnR5cGUgPT09ICfssL7snYAg64uo7Ja0Jykge1xuICAgIHJlc3VsdFsnZmluZCddID0gZGF0YS5jb250ZW50XG4gIH1cblxuICByZXR1cm4gZGF0YVxufVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG5cbiAgc3dpdGNoIChyZXF1ZXN0LmhhbmRsZXIpIHtcbiAgICBjYXNlICdmaW5kJzpcbiAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBzZW5kZXIudGFiLmlkXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGNhc2UgJ3JlY29tbWFuZCc6XG4gICAgICByZXN1bHQuaW5uZXJIVE1MID0gc2VuZGVyLnRhYi5pZFxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzdWx0LmlubmVySFRNTCA9IHNlbmRlci50YWIuaWRcbiAgICAgIHNlbmRSZXNwb25zZSh7fSlcbiAgfVxuICByZXR1cm4gdHJ1ZVxufSlcblxuZXhwb3J0IGNvbnN0IG1vZGlmaWVyS2V5ID0oa2V5KSA9PiB7XG4gIGlmKCFrZXkpIHJldHVybiBudWxsXG4gIHN3aXRjaChrZXkpIHtcbiAgICAgIGNhc2UgJ3NoaWZ0JzpcbiAgICAgICAgICByZXR1cm4gMTZcbiAgICAgIGNhc2UgJ2N0cmwnOlxuICAgICAgICAgIHJldHVybiAxN1xuICAgICAgY2FzZSAnYWx0JzpcbiAgICAgICAgICByZXR1cm4gMThcbiAgICAgIGNhc2UgJ2NvbW1hbmQnOlxuICAgICAgICAgIHJldHVybiA5MVxuICAgICAgY2FzZSAnUmV0dXJuJzpcbiAgICAgICAgICByZXR1cm4gMTNcbiAgfVxufSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2NvbnRlbnRzY3JpcHQuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9