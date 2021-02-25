import Options from './lib/options'

const URL = (word) => `http://ec2-54-180-81-156.ap-northeast-2.compute.amazonaws.com:4000/word/find/${word}`
const URL2 = (word) => `http://ec2-54-180-81-156.ap-northeast-2.compute.amazonaws.com:4000/word/fuzzy/${word}`

const translate =  (word, sendResponse) => {
    $.ajax({
        url: URL(word),
        type: 'GET',
        success: function on_success(data) {
            if(!data?.content) {
                $.ajax({
                    url: URL2(word),
                    type: 'GET',
                    success: function on_success(data) {
                        sendResponse ({
                            status : true,
                            type: 'recommand',
                            recommands: data
                        })
                    }
                })
            } else {
                sendResponse ({
                    status : true,
                    type:'find',
                    word: data
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