const btnDecr = document.querySelector('[data-action="decrement"]');
console.log(btnDecr);
const btnIncr = document.querySelector('[data-action="increment"]');
console.log(btnIncr);
const counterValueEl = document.querySelector('#value');
console.log(counterValueEl.textContent);

let counterValue = 0;

const decr = () => {
    counterValue -= 1;
    console.log(counterValue);
    counterValueEl.textContent = counterValue;
}

const incr = () => {
    counterValue += 1;
    console.log(counterValue);
    counterValueEl.textContent = counterValue;
}




btnDecr.addEventListener('click', decr);
btnIncr.addEventListener('click', incr);


console.log(counterValue);