const buttons = document.querySelector(".calculator__buttons");
let accumulator = "";
let mutator = "";
let operator = "";

function manageMouseInput() {
  buttons.addEventListener("click", (btn) => {
    const btnPressed = btn.target.value;
    const inputType = inputTypeOf(btnPressed);
    const requirementsAreReady =
      accumulator && operator && mutator ? true : false;

    if (inputType === "number") {
      storeValueFrom(btnPressed);
    } else if (inputType === "operator") {
      if (accumulator && !operator) {
        operator += btnPressed;
      } else if (requirementsAreReady) {
        // TODO call required operation, then store the result in accumulator, clean mutator, store the new operator and fill mutator
      }
    } else {
      switch (btnPressed) {
        case "convert":
          toggleNegation(shouldEditAccumulator());
          break;
        case "AC":
          // TODO remove all values
          break;
        case ".":
          // TODO insert decimal point
          break;
        case "=": {
          if (requirementsAreReady) {
            // TODO call operations
          }
          break;
        }
      }
    }
  });
}

function shouldEditAccumulator() {
  if (mutator) {
    return false;
  } else {
    return true;
  }
}

function toggleNegation(shouldEditAccumulator) {
  if (shouldEditAccumulator) {
    if (accumulator) {
      accumulator = String(Number(accumulator) * -1);
    }
  } else {
    if (mutator) {
      mutator = String(Number(mutator) * -1);
    }
  }
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
  if (!operator) {
    accumulator += x;
  } else {
    mutator += x;
  }
}

manageMouseInput();
