const formEl = document.querySelector('.login-form');

const submitHandler = (e) => {
    e.preventDefault();
    // const mail = e.currentTarget.elements.email.value;
    // const pas = e.currentTarget.elements.password.value;

    const { email, password } = e.currentTarget.elements;
    
    if (email.value == '' || password.value == '') {
        return alert('все поля должны быть заполнены');
    };
    const info = {
        email: email.value,
        password: password.value,
    };
    console.log(info);
    formEl.reset();
};

formEl.addEventListener('submit', submitHandler);   