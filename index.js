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
      } else if (requirementsAreReady &&
        !(accumulator.endsWith(".") || mutator.endsWith("."))) {
        operate();
        operator += btnPressed;
      }
    } else {
      switch (btnPressed) {
        case "convert":
          toggleNegation(shouldEditAccumulator());
          break;
        case "AC":
          deleteAllStoredData();
          break;
        case ".":
          assignDecimalPoint();
          break;
        case "=": {
          if (requirementsAreReady &&
            !(accumulator.endsWith(".") || mutator.endsWith("."))) {
            operate();
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

function assignDecimalPoint() {
  if (shouldEditAccumulator()) {
    if (accumulator && !accumulator.includes(".")) {
      accumulator += ".";
    }
  } else {
    if (mutator && !mutator.includes(".")) {
      mutator += ".";
    }
  }
}

function deleteAllStoredData() {
  if (accumulator || mutator || operator) {
    accumulator = "";
    mutator = "";
    operator = "";
  }
}

function add(x, y) {
  return String(Number(x) + Number(y));
}

function subtract(x, y) {
  return String(Number(x) - Number(y));
}

function multiply(x, y) {
  return String(Number(x) * Number(y));
}

function divide(x, y) {
  if (y != "0") {
    return String((Number(x) / Number(y)).toFixed(1));
  } else {
    return "0";
  }
}

function remainder(x, y) {
  return String(Number(x) % Number(y));
}

function operate() {
  switch (operator) {
    case "+":
      accumulator = add(accumulator, mutator);
      break;
    case "-":
      accumulator = subtract(accumulator, mutator);
      break;
    case "*":
      accumulator = multiply(accumulator, mutator);
      break;
    case "/":
      accumulator = divide(accumulator, mutator);
      break;
    case "remainder":
      accumulator = remainder(accumulator, mutator);
      break;
  }

  mutator = "";
  operator = "";
}

manageMouseInput();
