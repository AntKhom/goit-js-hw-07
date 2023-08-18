const formInputEl = document.querySelector('#validation-input');

const handlerInputValidation = (event) => {
    console.log(event.currentTarget.value.length); 
    console.log(formInputEl.dataset.length);
    
    let currentElementLength = event.currentTarget.value.length; 
    
    const limitElementLength = Number(formInputEl.dataset.length);
    if (currentElementLength === limitElementLength) {
        formInputEl.classList.remove('invalid'); 
        formInputEl.classList.add('valid'); 
    } else {
        formInputEl.classList.remove('valid'); 
        formInputEl.classList.add('invalid');  
    }
}

formInputEl.addEventListener('blur',handlerInputValidation)