const screen = document.getElementById("display");
const numButtons = document.querySelectorAll("button.number");
const operatorButtons = document.querySelectorAll("button.operator");
const decimalButton = document.querySelector("#decimal");
const equalButton = document.querySelector("#equal");
const cancelButton = document.querySelector("#C");

let calculator = {
  num1: null,
  num2: null,
  operator: null,
  previousTotal: null,
  operate() {
    switch (this.operator) {
      case "+":
        screen.textContent = Number(this.num1) + Number(this.num2);
        break;
      case "-":
        screen.textContent = Number(this.num1) - Number(this.num2);
        break;
      case "*":
        screen.textContent = Number(this.num1) * Number(this.num2);
        break;
      case "/":
        screen.textContent = Number(this.num1) / Number(this.num2);
        break;
      case "%":
        screen.textContent = (this.num1 / 100) * this.num2;
        break;
    }
    this.num1 = screen.textContent;
  },
};

let display = new (function (content) {
  this.content = content;
  screen.textContent = "";
  this.showDisplay = function (content) {
    screen.innerHTML === "0"
      ? (screen.innerHTML = content)
      : (screen.innerHTML += content);
  };
  this.resetDisplay = function () {
    screen.textContent = "0";
  };
  this.checkDecimal = function () {
    if (screen.textContent.length >= 1) {
      screen.textContent += ".";
      console.log("decimal");
    }
  };
})();

//////EVENT LISTENERS
//reset button
const resetButton = document.querySelector("#CE");
resetButton.addEventListener("click", (event) => {
  display.resetDisplay();
});
//input numbers
numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    display.showDisplay(button.id);
  });
});
//equal button
equalButton.addEventListener("click", (event) => {
  calculator.num2 = screen.textContent;
  calculator.operate(calculator.num1, calculator.num2);
});
//input operator and update 1st value
operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    calculator.num1 = screen.textContent;
    calculator.operator = button.id;
    display.resetDisplay();
  });
});
//cancel button
cancelButton.addEventListener("click", (event) => {
  display.resetDisplay();
});
//decimal button
decimalButton.addEventListener("click", (event) => {
  display.checkDecimal();
});
//keyboard events
window.addEventListener("keydown", (event) => {
  if (event.key >= 0 && event.key <= 9) {
    display.showDisplay(event.key);
  } else if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/" ||
    event.key === "%"
  ) {
    calculator.num1 = screen.textContent;
    calculator.operator = event.key;
    display.resetDisplay();
  } else if (event.key === "=" || event.key === 'Enter') {
    calculator.num2 = screen.textContent;
    calculator.operate(calculator.num1, calculator.num2);
  }
});