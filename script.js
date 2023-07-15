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

let first = null;
let second = null;
let operator = null;

function parseOperation(operation) {
    operator = operation.replace(/[0-9]/g, '');
    const index = operation.indexOf(operator);
    first = +(operation.slice(0, index));
    second = +(operation.slice(index + 1));
}

function operate(operation) {
    parseOperation(operation);
    switch (operator) {
        case '+':
            return add(first, second);
        case '-':
            return substract(first, second);
        case '/':
            return divide(first, second);
        case '*':
            return multiply(first, second);
        default:
            return 'ERR0R: Unknown operator';
    }
}