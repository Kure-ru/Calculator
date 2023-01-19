const display = document.getElementById("display");
const numButtons = document.querySelectorAll('button.number')
const operatorButtons = document.querySelectorAll('button.operator')
let array = []

let operation = {
    num1 : 0,
    num2 : 0,
    operator: null
}

//operations
const add = (a, b) => {return a + b};
const subtract = (a, b) => { return a - b};
const multiply = (a, b) => { return a * b};
const divide = (a, b) => {return a / b};

//Create a new function operate that takes an operator and
//2 numbers and then calls one of the above functions on the numbers.
const operate = (num1, num2, operator) => {
   switch (operator) {
    case "+" :
        return add(num1, num2);
    case "-" :
        return subtract(num1, num2);
    case "*" :
        return multiply(num1, num2);
    case "/" :
        return divide(num1, num2);
   }
}

//reset button
const resetButton =  document.querySelector("#CE");
resetButton.addEventListener('click', (event) => {
    display.innerHTML = "";
    array = []
})

//equal button 
const equalButton = document.querySelector("#equal");
equalButton.addEventListener('click', (event) => {
    if (array !== []) {
        operation.num2 = Number(array.join(""));
        array = [];
        console.log(operation)
        let result = operate(operation.num1, operation.num2, operation.operator)
        console.log(result);
        display.innerHTML = result
        return result;
    }
})

//input number
 numButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
            display.innerHTML += button.id;
            // if a number, add it to operation
            array.push(button.id)
            console.log(array)
            // if an operand, stop
    })})

//input operator and update 1st value
operatorButtons.forEach((button) => {
    button.addEventListener('click',(event) => {
        if (array !== []) {
            operation.num1 = Number(array.join(""));
            array = [];
            display.innerHTML = ""
            operation.operator = button.id
            console.log(operation.num1)
            console.log(operation.operator)
        }
    } )
})

//