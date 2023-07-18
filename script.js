const DIGITS_LIMIT = 10;

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Division by zero';
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

function isLongNumber(value) {
    return value.length > DIGITS_LIMIT;
}

function shortenNumber(value) {
    return value.slice(0, DIGITS_LIMIT + 1);
}

function populateDisplay() {
    displayValue = displayValue.toString();
    if (isLongNumber(displayValue)) {
        displayValue = shortenNumber(displayValue);
    }
    display.textContent = displayValue;
}

let displayValue = '';
const display = document.querySelector('#display');

function resetOperation() {
    first = '';
    second = '';
    operator = '';
}

function isFullOperation() {
    return first !== ''
        && second !== ''
        && operator !== '';
}

function handleEquals() {
    if (!isFullOperation()) {
        displayValue = 'ERR0R!';
        populateDisplay();
        return;
    }

    const operationResult = operate(+first, +second, operator);

    if (typeof operationResult !== 'number') {
        displayValue = 'ERR0R!';
        populateDisplay();
        return;
    }

    displayValue = operationResult;
    resetOperation();
    first = operationResult;
}

function handleClear() {
    resetOperation();
    displayValue = '';
}

function handleDelete() {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    if (!operator) {
        first = +displayValue;
    } else {
        second = +displayValue;
    }
}

function handleOperator(value) {
    operator = value;
}

function handleDigit(value) {
    if (!operator) {
        first += value;
        displayValue = first;
    } else {
        second += value;
        displayValue = second;
    }
}

function handleDot() {
    if (displayValue.includes('.')) {
        return;
    }
    if (!operator) {
        first += '.';
        displayValue = first;
    } else {
        second += '.';
        displayValue = second;
    }
}

function handleButtons(value) {
    switch (value) {
        case '=':
            handleEquals();
            break;

        case 'clear':
            handleClear();
            break;

        case 'delete':
            handleDelete();
            break;

        case '+':
        case '-':
        case '/':
        case '*':
            handleOperator(value);
            break;

        case '.':
            handleDot();
            break;
            
        default:
            handleDigit(value);
    }

    populateDisplay();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => {
    handleButtons(button.value);
}));
