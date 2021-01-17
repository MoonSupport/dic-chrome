let options

let keyState = false

chrome.storage.sync.get('options', function (data) {
  options = data.options
});


$(document).click(function (e) {
  withOptionsSatisfied(e, function () {
    if (options.translate_by != 'click') {
      if ($(e.target).closest('a').length > 0) // closed parent
        return
    }
    if (options.selection_key_only && !keyState) {
      return
    }
    processEvent(e)
  })
  return true
})

$(document).keydown(function (e) {
  if(e.keyCode === modifierKey(options['selection_key_command'])) {
    keyState = true
  }

  return true
}).click(function(e) {
  withOptionsSatisfied(e, function () {
    if (options.translate_by != 'click') {
      if ($(e.target).closest('a').length > 0) // closed parent
        return
    }
    if (options.selection_key_only && !keyState) {
      return
    }
    processEvent(e)
  })
  return true
}).
keyup(function(e) {
  keyState = false
})


function withOptionsSatisfied(e, do_stuff) {
  // pre-hook
  do_stuff()
}


//translate

function processEvent(e) {
  const selection = window.getSelection()
  const hit_elem = document.elementFromPoint(e.clientX, e.clientY)
  if (!hit_elem) {
    return
  }

  let word = ''
  if (selection.toString()) {

    let sel_container = selection.getRangeAt(0).commonAncestorContainer

    while (sel_container.nodeType != Node.ELEMENT_NODE) {
      sel_container = sel_container.parentNode
    }

    if (
      ($(hit_elem).is(sel_container) || $.contains(sel_container, hit_elem))
      && selection.containsNode(hit_elem, true)
    ) {
      word = selection.toString()
    }

    if (word != '') {
      chrome.storage.sync.set({ word })
    }
  }
}

function serialize(data) {
  const result = {}
  if (!data) {
    return
  }

  if (data.type === '관련 검색어') {
    result['recommands'] = data.content.map((one) => one.title)
  }

  if (data.type === '찾은 단어') {
    result['find'] = data.content
  }

  return data
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  switch (request.handler) {
    case 'find':
      result.innerHTML = sender.tab.id
      return true
    case 'recommand':
      result.innerHTML = sender.tab.id
      return true
    default:
      result.innerHTML = sender.tab.id
      sendResponse({})
  }
  return true
})

export const modifierKey =(key) => {
  if(!key) return null
  switch(key) {
      case 'shift':
          return 16
      case 'ctrl':
          return 17
      case 'alt':
          return 18
      case 'command':
          return 91
      case 'Return':
          return 13
  }
} 