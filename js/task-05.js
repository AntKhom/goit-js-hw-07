const formInputEl = document.querySelector('#name-input');
const formOutputEl = document.querySelector('#name-output');



const inputHandler = (event) => {
    console.log(event.currentTarget.value)
    formOutputEl.textContent = 'Anonymous';  
    if (event.currentTarget.value.trim() !== '') {
        formOutputEl.textContent = event.currentTarget.value.trim();
    };   
};

formInputEl.addEventListener('input', inputHandler);

