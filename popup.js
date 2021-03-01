const search = document.getElementById('search')
const versatile = document.getElementById('versatile')
const card__text = document.getElementById('card__text')
const DEBOUNCE_DURATION = 1500; 

$('.loader').css("display", "none");

addEventListener('DOMContentLoaded', ()=> {
        search.focus()
        chrome.storage.sync.get('word', function(data) {
            if(!data.word) {
                return
            }
            search.value = data.word
            searchWord(data.word)
        });
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.loading) {
            $('.loader').css("display", "block");
        }else {
            $('.loader').css("display", "none");
        }
    }
);

function debounce(callback, wait, context = this) {
    let timeout = null;
    let callbackArgs = null;

    const later = () => callback.apply(context, callbackArgs);

    return function() {
        callbackArgs = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncingSearchWord = debounce((e) => {
        searchWord(e.target.value); 
      }, DEBOUNCE_DURATION)


search.addEventListener('input', debouncingSearchWord)

versatile.addEventListener('click' ,(e)=> {
    search.value = e.target.innerText
    searchWord(search.value)
})


const NO_CONTENT_ELEMENT = `
                   <div>
                    <span>검색 결과가 없습니다.</span>
                    <a target="_blank" href="https://meotitda.github.io/DICTIONARY-EDITOR/">→ 새로운 단어 추가하기</a>
                    <a target="_blank" href="https://github.com/meotitda/DICTIONARY">→ 단어 추가 메뉴얼</a>
                   </div>
                   `;

function searchWord(word) {
    chrome.runtime.sendMessage(
        {handler: 'translate', word}, function(response) {
        switch(response.type) {
            case 'recommand':
                versatile.innerHTML="<span style='color:red;'>추천 검색어</span><br>"
               response.recommands.map((recommand, index)=> {
                   const element = document.createElement('span')
                   element.className = "recommanded_word"
                   element.innerText = recommand.title + " "
                   versatile.appendChild(element)
                   card__text.innerHTML = NO_CONTENT_ELEMENT
                   return
                })
                break
            case 'find':
                versatile.innerHTML=''
                card__text.innerHTML = response.word.content.replaceAll('<br />', '<br /><br />')
                break
            case 'no_find':
                versatile.innerHTML=''
                card__text.innerHTML = NO_CONTENT_ELEMENT
                break
            default:
        }
        return true

    })
    versatile.innerHTML=''
    card__text.innerHTML = NO_CONTENT_ELEMENT
}

