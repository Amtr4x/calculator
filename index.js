const buttons = document.querySelector(".calculator__buttons");
let accumulator = "";
let mutator = "";
let operator = "";

function manageMouseInput() {
    buttons?.addEventListener("click", (btn) => {
        const btnPressed = btn.target.value;
        const inputType = inputTypeOf(btnPressed);

        if (inputType === "number") {
            storeValueFrom(btnPressed);
        } else if (inputType === "operator") {
            if (accumulator.length > 0) {
                operator += btnPressed;
            }
        } else {
            console.log("this is an special call, must perform an operation");
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
