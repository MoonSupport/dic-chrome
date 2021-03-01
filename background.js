import Options from './lib/options'
import { ACCESS_KEY, URL } from './config'

const translate =  (word, sendResponse) => {
    $.ajax({
        url: URL,
        type: "POST",
        accept: "application/json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "key": ACCESS_KEY,
            "word" : word.trim()
        }),
        dataType: "json",
        beforeSend: function() {
            chrome.runtime.sendMessage({
                loading: true
            })
        },
        complete: function() {
            chrome.runtime.sendMessage({
                loading: false
            })
        },
        success: function on_success(data) {
            console.log('data', data)
                switch(data.type) {
                    case 'find':
                        sendResponse ({
                            status : true,
                            type:'find',
                            word: data.value
                        })
                        break
                    case 'recommand':
                        sendResponse ({
                            status : true,
                            type: 'recommand',
                            recommands: data.value
                        })
                    case 'no_find':
                        sendResponse ({
                            status : true,
                            type: 'no_find',
                        })
                }
        },
        error: function(xhr, status, e) {
            sendResponse({
                status : true,
                e,
            })
        }
        
    })
}


chrome.runtime.onInstalled.addListener(function() {
    const options = Object.keys(Options).reduce((result, key) => {
        result[key] = Options[key]()
        return result
        }, {})
    chrome.storage.sync.set({options}, function() {
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.handler) {
    case 'get_options':
        sendResponse({
        options: JSON.stringify(
            Object.keys(Options).reduce((result, key) => {
            result[key] = Options[key]()
            return result
            }, {})
        )
        })
        break
    case 'translate':
        translate(request.word, sendResponse)
        return true
    default:
        sendResponse({})
    }
    return true
})

// Recovery를 검색
// Recover 에서 없어서 Recommand 요청
// Recovery를 입력 후 결과 반환
// Recovery 를 발견 후 Recoomand 결과 반환