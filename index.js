let firstNumber = "";
let secondNumber = "";
let operator;
const buttons = document.querySelector(".calculator__buttons");

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
            result = multiply(x, y);
            break;
        case "/":
            result = divide(x, y);
            break;
        default:
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
    return (x / y).toFixed(1);
}

// *********************** User Input ******************************

/**
 * Capture the user input via Mouse and Keyboard and manage the Input,
 * operations and display info.
 */
function manageUserInput() {
    const displayText = document.querySelector(".calculator__display-text");
    getMouseInput(displayText);
    getKeyboardInput();
}

/**
 * Capture the user input via Mouse.
 */
function getMouseInput(displayText) {
    buttons.addEventListener("click", (btn) => {
        newText = displayText.textContent;
        const btnPressed = btn.target.value;

        manageCharacters(btnPressed);
        manageDisplay(btnPressed);
        triggerOperation(btnPressed);
        displayText.textContent = newText;
    });
}

function getKeyboardInput() {
    const ALLOWED_KEYS = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "/",
        "*",
        "+",
        "-",
        ".",
        "=",
        "Backspace",
        "Enter",
    ];
    addEventListener("keyup", (btn) => {
        if (ALLOWED_KEYS.includes(btn.key.toString())) {
            return btn.key.toString().toLocaleLowerCase();
        }
    });
}

/**
 * Manage the characters introduced and allocate it inside the correct
 * variable in order to fill the firstNumber and then secondNumber variable.
 *
 * @param {char} inputChar value of the button when is pressed.
 */
function manageCharacters(inputChar) {
    if (!operator) {
        if (inputChar.match(/[0-9]/)) {
            firstNumber += inputChar;
        } else {
            operator = inputChar;
        }
    } else {
        if (inputChar.match(/[0-9]/)) {
            secondNumber += inputChar;
        }
    }
}

/**
 * Wait until the pressed button be the equality operator and exists an
 * operator in the values to perform the desired operation.
 *
 * @param {char} trigger Btn value of the button pressed.
 * */
function triggerOperation(triggerBtn) {
    if (triggerBtn === "=" && operator) {
        firstNumber = operate(
            Number(firstNumber),
            operator,
            Number(secondNumber)
        );
        operator = null;
        secondNumber = "";
        newText = firstNumber;
    }
}

manageUserInput();
