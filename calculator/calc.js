const first_input = document.querySelector('#field-first');
const operator = document.querySelector('#operator');
const second_input = document.querySelector('#field-second');

const result = document.querySelector('.result');

const calculation = () => {
    console.log(operator.value);
    if (operator.value === '+') {
        result.innerHTML = +first_input.value + +second_input.value;
    } else if (operator.value === '-') {
        result.innerHTML = +first_input.value - +second_input.value;
    } else if (operator.value === '/') {
        result.innerHTML = +first_input.value / +second_input.value;
    } else if (operator.value === '*') {
        result.innerHTML = +first_input.value * +second_input.value;
    } else  {
        result.innerHTML = 'Калькулятор поддерживает только четыре опреации -> +, -, /, *'
    }
}