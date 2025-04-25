let display = document.getElementById('display')
const buttons = document.querySelectorAll('.buttons')
const actionbuttons = document.querySelectorAll('.action-buttons')

function addNumbers(num,num) {
    return num1 + num2

}

function subtractNumbers(num,num) {
    return num1 - num2
}

function multiplyNumbers(num,num) {
    return num1 * num2
}


function divideNumbers(num,num) {
    return num1 / num2
}

let num1 = 0
let num2 = 0
let operator = ['+', '-', '*', '/']

function operate() {
    if (fullString.includes('+')) {
        return addNumbers(num1,num2)   
    } else if (fullString.includes('-')) {
        return subtractNumbers(num1,num2)
    } else if (fullString.includes('*')) {
        return multiplyNumbers(num1,num2)
    } else if (fullString.includes('/')) {
        return divideNumbers(num1,num2)
    }
    
}

buttons.forEach((button) => {
    button.addEventListener('click', printDisplay);
})
actionbuttons.forEach((actionbutton) => {
    actionbutton.addEventListener('click', printDisplay);
})

let userInput = ''
let fullString = ''

function printDisplay(event) {
    const userInput = event.target;
    fullString = display.textContent += userInput.innerText
    splitString = fullString.split('+')
    num1 = splitString[0]
    num2 = splitString[1]
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    
} 


