const formInputEl = document.querySelector('#font-size-control');
const formTextEl = document.querySelector('#text');


const changeFontSizeHandler = () => {
    let inputFontSize = formInputEl.value;
    formTextEl.style.fontSize = inputFontSize + 'px'
    
}
changeFontSizeHandler();
formInputEl.addEventListener('input',changeFontSizeHandler)