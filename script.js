const numButtons = document.querySelectorAll("button.number");
const operatorButtons = document.querySelectorAll("button.operator");
const decimalButton = document.querySelector("#decimal");

function Calculate(num1, num2) {
  (this.num1 = num1),
    (this.num2 = num2),
    (this.add = function () {
      console.log(num1);
      console.log(num2);
      return num1 + num2;
    });
  this.subtract = function () {
    return num1 - num2;
  };
  this.multiply = function () {
    return num1 * num2;
  };
  this.divide = function () {
    let division = num1 / num2;
    return division.toFixed(2)
  };
  this.percentage = function () {
    return (num1 / 100) * num2;
  };
}

let display = new function (content) {
    const screen = document.getElementById("display");
    this.content = content
    screen.textContent = "";
    this.showDisplay = function (content) {screen.innerHTML += content}
    this.resetDisplay= function () {screen.innerHTML = ''};
  };

//input operator and update 1st value
    operatorButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
           let operation = new Calculate(screen.value, '')
           console.log(operation)
           display.resetDisplay()
        })
    })
// operatorButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     if (operation.num1 === "") {
//       //memorizes 1st value and operator
//       operation.num1 = Number(array.join(""));
//       operation.operator = button.id;
//       array = [];
//       display.innerHTML = "";
//     } else if (operation.num1 !== "" && operation.operator === "") {
//       operation.operator = button.id;
//       array = [];
//       display.innerHTML = "";
//     } else {
//       getTotal();
//       operation.operator = button.id;
//     }
//   });
// });

const getTotal = () => {
  //keeps 2nd value
  operation.num2 = Number(array.join(""));
  let result = operate(operation.num1, operation.num2, operation.operator);
  resetData();
  display.innerHTML = roundResult(result);
  operation.num1 = result;
  console.log(operation);
};

const checkDecimal = () => {
  if (array.length >= 1 && !display.textContent.includes(decimalButton)) {
    display.innerHTML += ".";
    array.push(".");
    console.log("decimal");
  }
};

//equal button
const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", (event) => {
  getTotal();
});

//cancel button
const cancelButton = document.querySelector("#C");
cancelButton.addEventListener("click", (event) => {
  display.innerHTML = "";
});

decimalButton.addEventListener("click", checkDecimal);
window.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key >= 0 && key <= 9) {
    display.innerHTML += key;
    array.push(key);
  } else if (
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "%"
  ) {
    if (operation.num1 === "") {
      //memorizes 1st value and operator
      operation.num1 = Number(array.join(""));
      operation.operator = key;
      array = [];
      display.innerHTML = "";
    } else if (operation.num1 !== "" && operation.operator === "") {
      operation.operator = key;
      array = [];
      display.innerHTML = "";
    } else {
      getTotal();
      operation.operator = key;
    }
  } else if (key === "=") {
    getTotal();
  }
});

//////EVENT LISTENERS
//reset button
const resetButton = document.querySelector("#CE");
resetButton.addEventListener("click", (event) => {
  display.resetDisplay();
});
//input numbers
numButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let number = display.showDisplay(button.id);
    });
  });

  console.log(display)