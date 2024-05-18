function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function power(a, b) {
  return a ** b;
}
function mod(a, b) {
  return a % b;
}
function sqrt(a) {
  return Math.sqrt(a);
}

function calculate(expression) {
  const tokens = expression.split(" ");
  let num1;
  let operator;
  let num2;

  //checks for sqrt and if variables are actually numbers
  if (tokens.length === 3) {
    num1 = Number(tokens[0]);
    operator = tokens[1];
    num2 = Number(tokens[2]);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("Not a number! Try again.");
      return;
    }
  } else if (tokens.length === 2) {
    operator = tokens[0];
    num1 = Number(tokens[1]);
    if (Number.isNaN(num1)) {
      alert("Not a number! Try again.");
      return;
    }
    //checks for too many tokens
  } else if (tokens.length > 3) {
    alert("Please enter a valid expression");
    return;
  }

  //performs calculation based on operator:
  let result;
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  } else if (operator === "^") {
    result = power(num1, num2);
  } else if (operator === "%") {
    result = mod(num1, num2);
  } else if (operator === "sqrt") {
    result = sqrt(num1);
  } else if (operator !== "+" || "-" || "*" || "/" || "^" || "%" || "sqrt") {
    alert("Not an operator");
  }
  return result;
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector("#submitButton").addEventListener("click", () => {
  const result = calculate(document.querySelector("#expression").value);
  if (result !== undefined) {
    document.querySelector("#answer").innerText = result;
  }
});
