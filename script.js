const display = document.getElementById("display");
const buttons = document.querySelectorAll('button')

//addition
const add = (a, b) => {
    return a + b;
}

//subtraction
const subtract = (a, b) => {
    return a - b;
}

//multiplication
const multiply = (a, b) => {
    return a * b;
}

//division
const divide = (a, b) => {
    return a / b;
}

//Create a new function operate that takes an operator and
//2 numbers and then calls one of the above functions on the numbers.
const operate = (operator, num1, num2) => {
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

//change display
const changeDisplay = (displayValue) => {
    console.log(displayValue)
    display.innerHTML = displayValue;
}

//find id of button 
let value = button.id

//populate display when pushing button
    buttons.forEach((button) => {
    button.addEventListener('click', changeDisplay)
    })



//store value of id button *2

//return result