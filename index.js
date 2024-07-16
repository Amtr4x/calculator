const buttons = document.querySelector(".calculator__buttons");
let accumulator = "";
let mutator = "";
let operator = "";

function manageMouseInput() {
    buttons.addEventListener("click", (btn) => {
        const btnPressed = btn.target.value;
        const inputType = inputTypeOf(btnPressed);

        if (inputType === "number") {
            storeValueFrom(btnPressed);
        } else if (inputType === "operator") {
            if (accumulator.length > 0 && operator.length === 0) {
                operator += btnPressed;
            }
        } else {
            if (btn === "=" && accumulator && operator && operator) {
                // TODO call operations
            }
        }
    });
}

function inputTypeOf(x) {
    if (x.match(/[0-9]/)) {
        return "number";
    } else if (["AC", "convert", "=", "."].includes(x)) {
        return "specials";
    } else {
        return "operator";
    }
}

function storeValueFrom(x) {
    if (operator.length === 0) {
        accumulator += x;
    } else {
        mutator += x;
    }
}

manageMouseInput();
