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
            return add(first, second);
        case '-':
            return substract(first, second);
        case '/':
            return divide(first, second);
        case '*':
            return multiply(first, second);
    }
}

function populateDisplay() {
    if ((displayValue + '').length > 6) {
        displayValue = (+displayValue).toFixed(6);
    }
    display.textContent = displayValue;
}

function isOperator(value) {
    return value === '+'
    || value === '-'
    || value === '/'
    || value === '*';
}

let displayValue = '';
const display = document.querySelector('#display');

function resetOperation() {
    first = '';
    second = '';
    operator = '';
}

function manageButton(value) {
    switch (value) {
        case '=':
            const result = operate(+first, +second, operator);
            displayValue = result;
            populateDisplay();
            resetOperation();
            first = result;
            break;
        case 'clear':
            resetOperation();
            displayValue = '';
            populateDisplay();
            break;
        case 'delete':
            break;
        case '+':
        case '-':
        case '/':
        case '*':
            operator = value;
            break;
        default:
            if (!operator) {
                first += value;
                displayValue = first;
            } else {
                second += value;
                displayValue = second;
            }
            populateDisplay();
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    manageButton(button.value);
}));
