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

let displayValue = '';
