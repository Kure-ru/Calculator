const display = document.getElementById("display");
const numButtons = document.querySelectorAll('button.number')
const operatorButtons = document.querySelectorAll('button.operator')
const decimalButton = document.querySelector("#decimal");
display.textContent = ""
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
const percentage = (a, b) => {return (a / 100) * b};

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
        if (operation.num1 === 0 || operation.num2 === 0) {
            alert('You cannot divide by 0');
            resetData();
            return 0;
        }
        return divide(num1, num2);
    case "%" :
        return percentage(num1, num2);
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

//input number
 numButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        display.innerHTML += button.id;
        array.push(button.id)
    })});
 
//input operator and update 1st value
operatorButtons.forEach((button) => {
    button.addEventListener('click',(event) => {
        if (operation.num1 === '') {
            //memorizes 1st value and operator 
            operation.num1 = Number(array.join(""));
            operation.operator = button.id
            array = [];
            display.innerHTML = ""
        } else if (operation.num1 !== '' && operation.operator === '') {
            operation.operator = button.id;
            array = [];
            display.innerHTML = "";
        } else {
            getTotal();
             operation.operator = button.id    
        }
    } )
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

const checkDecimal = () => {
    if (array.length >= 1 && !display.textContent.includes(decimalButton)){
       display.innerHTML += '.'
       array.push(".")
       console.log("decimal")
   }
}


//equal button 
const equalButton = document.querySelector("#equal");
equalButton.addEventListener('click', (event) => {
    getTotal();
})

//cancel button 
const cancelButton = document.querySelector("#C");
    cancelButton.addEventListener('click', (event) => {
     display.innerHTML = ""
    })


decimalButton.addEventListener('click', (checkDecimal));
window.addEventListener('keydown', (e) => {
   let key = e.key;
   if (key >= 0 && key <= 9){
   display.innerHTML += key;
   array.push(key);}
   else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%'){
    if (operation.num1 === '') {
        //memorizes 1st value and operator 
        operation.num1 = Number(array.join(""));
        operation.operator = key;
        array = [];
        display.innerHTML = ""
    } else if (operation.num1 !== '' && operation.operator === '') {
        operation.operator = key;
        array = [];
        display.innerHTML = "";
    } else {
        getTotal();
         operation.operator = key;    
    }} else if (key === '='){
        getTotal();
    }
});