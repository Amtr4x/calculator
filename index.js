let firstNumber = 0;
let secondNumber = 0;
let operator = "";

/**
 * Perform the requested operation based in the provided operator.
 * @param {number} x - first number
 * @param {string} op - operator
 * @param {number} y - second number
 * @returns result of the operation or a string indicating an error.
 */
function operate(x, op, y) {
    let result = 0;

    switch (op) {
        case "+":
            result = add(x, y);
            break;
        case "-":
            result = subtract(x, y);
            break;
        case "*":
            result = subtract(x, y);
            break;
        case "/":
            result = divide(x, y);
            break;
        default:
            result = "Invalid Operator";
            break;
    }

    return result;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return Math.floor(x / y) / 10;
}
