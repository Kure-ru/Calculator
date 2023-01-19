const display = document.getElementById("display");
const numButtons = document.querySelectorAll('button.number')
const operatorButtons = document.querySelectorAll('button.operator')
let array = []

let operation = {
    num1 : '',
    num2 : '',
    operator: ''
}

//operations
const add = (a, b) => {return a + b};
const subtract = (a, b) => { return a - b};
const multiply = (a, b) => { return a * b};
const divide = (a, b) => {return a / b};

const roundResult = (number)  => {
    return Math.round(number * 1000) / 1000
  }

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
   resetData();  
})

//reset data
const resetData = () => {
    array = [];
    display.innerHTML = ""
    Object.keys(operation).forEach(key => {
        operation[key] = '';
    });
    console.log(operation)
}

//heart button 
const heartButton = document.querySelector("#♡");
heartButton.addEventListener('click', (event) => {
   display.innerHTML = "HI THERE!"
    })

//input number
 numButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (operation.num1 != '' && operation.num2 === ''){
            display.innerHTML = '';
            console.log('RESET')
        }    
        display.innerHTML += button.id;
            array.push(button.id)
    })})

//input operator and update 1st value
operatorButtons.forEach((button) => {
    button.addEventListener('click',(event) => {
        if (operation.num1 === '') {
            //memorizes 1st value and operator 
            operation.num1 = Number(array.join(""));
            operation.operator = button.id
            array = [];
            display.innerHTML = ""
        } else {
            getTotal();
             operation.operator = button.id
             
        }
    } )
})

//equal button 
const equalButton = document.querySelector("#equal");
equalButton.addEventListener('click', (event) => {
    getTotal();
})

const getTotal = () => {
//keeps 2nd value
    operation.num2 = Number(array.join(""));
    let result = operate(operation.num1, operation.num2, operation.operator)
        resetData();
        display.innerHTML = roundResult(result)
        operation.num1 = result;
        console.log(operation)
}

