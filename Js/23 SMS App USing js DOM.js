let textAreaEl = document.querySelector('#textArea');
let charCountEl = document.querySelector('#charCount');
textAreaEl.addEventListener('keyup', function(){
    textAreaLength = textAreaEl.value.length;
    charCountEl.innerText = textAreaLength;
});