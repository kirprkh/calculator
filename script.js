function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return 'ERR0R: Division by zero';
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

let first = '';
let second = '';
let operator = '';

function operate(first, second, operator) {
    switch (operator) {
        case '+':
            return add(+first, +second);
        case '-':
            return substract(+first, +second);
        case '/':
            return divide(+first, +second);
        case '*':
            return multiply(+first, +second);
    }
}

function populateDisplay() {
    if ((displayValue + '').length > 6) {
        displayValue = (+displayValue).toFixed(6);
    }
    display.textContent = displayValue;
}

let displayValue = '';
const display = document.querySelector('#display');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    if (button.value === '=') {
        const result = operate(first, second, operator);
        displayValue = result;
        first = result;
        populateDisplay();
        second = '';
        operator = null;
        return;
    }

    if (button.value === 'clear') {
        first = '';
        second = '';
        operator = '';
        displayValue = '';
        populateDisplay();
        return;
    }

    if (button.value === '+'
        || button.value === '-'
        || button.value === '/'
        || button.value === '*') {
            operator = button.value;
            return;
        }

    if (!operator) {
        first += button.value;
        displayValue = first;
    } else {
        second += button.value;
        displayValue = second;
    }

    populateDisplay();
}));
