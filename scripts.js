let display = document.getElementById('display')
const buttons = document.querySelectorAll('.buttons')
const actionbuttons = document.querySelectorAll('.action-buttons')
const equalsbtn = document.querySelector('.equals-button')
const resetbtn = document.querySelector('.reset-button')
const backspace = document.querySelector('.backspace-button')
const decimal = document.querySelector('.decimal')
let runningcalc = document.getElementById('running-calc')
let operateDone = false
let answer = 0

function addNumbers(num,num) {
    answer = num1 + num2
    num1 = answer
    num2 = 0
    operateDone = true
    checkForDecimal()
    assignOperator()
}

function subtractNumbers(num,num) {
    answer = num1 - num2
    num1 = answer
    num2 = 0
    operateDone = true
    checkForDecimal()
    assignOperator()
}

function multiplyNumbers(num,num) {
    answer = num1 * num2
    num1 = answer
    num2 = 0
    operateDone = true
    checkForDecimal()
    assignOperator()
}


function divideNumbers(num,num) {
    if (operator1 === '/' && num1 === 0 || num2 === 0){
        display.textContent = 'ERROR'
     } else {
    answer = num1 / num2
    num1 = answer
    num2 = 0
    operateDone = true
    checkForDecimal()
}
    }


let num1 = 0
let num2 = 0
let operator1 = ''
let operator2 = ''
let result = 0

function checkForDecimal() {
    if (num1 % 1 != 0) {
        display.textContent = num1.toFixed(2)
    }
    else {
        display.textContent = num1
    }
}

function printCalc(event) {
    let calc = event.target
    calc = runningcalc.textContent += calc.innerText
    
}

buttons.forEach((button) => {
    button.addEventListener('click', printDisplay);
})


actionbuttons.forEach((actionbutton) => {
    actionbutton.addEventListener('click', assignOperator);
    
})

buttons.forEach((button) => {
    button.addEventListener('click', printCalc);
})

actionbuttons.forEach((actionbutton) => {
    actionbutton.addEventListener('click', printCalc);
    
})

function printDisplay(event) {
    if (operator1 === '' || num1 === 0) {
        num1 = event.target
        num1 = display.textContent += num1.innerText
        num1 = parseFloat(num1)
     } else if (operator1 != '' && operator2 === '' && num1 !=0 && num2 === 0) {
        display.textContent = ''
        num2 = event.target
        num2 = display.textContent += num2.innerText
        num2 = parseFloat(num2)
    } else if (operateDone === true) {
        num2 = event.target
        num2 = display.textContent += num2.innerText
        num2 = parseFloat(num2)
        operateDone = false
        }
        else {
    num2 = event.target
    num2 = display.textContent += num2.innerText
    num2 = parseFloat(num2)
    }

} 

function operate(num,num) {
    if (operator1 == '+') {
        return addNumbers(num1,num2)  
    } else if (operator1 == '-') {
        return subtractNumbers(num1,num2)
    } else if (operator1 == '*') {
        return multiplyNumbers(num1,num2)
    } else if (operator1 == '/') {
        return divideNumbers(num1,num2)
    }

}

function assignOperator(event) {
    if (operator1 === '') {
operator1 = event.target
operator1 = display.textContent = operator1.innerText
display.textContent = ''
    } if (operator1 != '' && num2 != 0) {
    operate()
    operator2 = event.target
    operator2 = operator2.innerText
    if (operateDone === true) {
        operator1 = operator2
        operator2 = ''
    }
}
// else if (num1 != 0 && num2 != 0) {
//     operate()
}
function disableDecimal(event) {
    decimal.setAttribute('disabled', true)
}

function enableDecimal(event) {
    decimal.removeAttribute('disabled')
}

function clearDisplay(event) {
    display.textContent = ''
    num1 = 0
    num2 = 0 
    operator1 = ''
    operator2 = ''
    runningcalc.textContent = ''
    
    
}

equalsbtn.addEventListener('click', function(e) {
operate()
})



resetbtn.addEventListener('click', function(e) {
clearDisplay()
enableDecimal()
})



function removeLastChar(event) {
   runningcalc.innerText = runningcalc.innerText.slice(0,-1)
   display.innerText = display.innerText.slice(0,-1)
   num1 = num1.toString().slice(0,-1)
   num1 = parseFloat(num1)
}

backspace.addEventListener('click', function(e) {
    removeLastChar()
    
})
decimal.addEventListener('click', function(e){
    disableDecimal()
})



// if operator has been pressed do not allow another to be selected 
// backspace not removing operators
