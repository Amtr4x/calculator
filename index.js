let firstNumber = "";
let secondNumber = "";
let operator;
let newText;
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
        case "remainder":
            if (y !== 0) {
                result = remainder(x, y);
            }
            break;
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
            if (y !== 0) {
                result = divide(x, y);
            }
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

function remainder(x, y) {
    return x % y;
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

// ************************** Update Display ********************************

/**
 * Clean the display with a zero when an operator is pressed and
 * put the most recent value in the display.
 *
 * @param {char} triggerBtn value of the pressed button
 */
function manageDisplay(triggerBtn) {
    if (newText === "Welcome!" || (operator && newText === "0")) {
        newText = "";
    }

    if (!triggerBtn.match(/[0-9]/)) {
        newText = "0";
    } else {
        newText += triggerBtn;
    }
}

manageUserInput();
