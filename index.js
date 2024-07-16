const buttons = document.querySelector(".calculator__buttons");

function manageMouseInput() {
    buttons?.addEventListener("click", (btn) => {
        console.log(
            `key pressed = ${btn.target.value} is ${inputType(
                btn.target.value
            )}`
        );
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

manageMouseInput();
