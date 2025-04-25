let display = document.getElementById('display')
const buttons = document.querySelectorAll('.buttons')
const actionbuttons = document.querySelectorAll('.action-buttons')
const equalsbtn = document.querySelector('.equals-button')

function addNumbers(num,num) {
    const answer = num1 + num2
    display.textContent = answer

}

function subtractNumbers(num,num) {
    const answer = num1 - num2
    display.textContent = answer
}

function multiplyNumbers(num,num) {
    const answer = num1 * num2
    display.textContent = answer
}


function divideNumbers(num,num) {
    const answer = num1 / num2
    display.textContent = answer
}

let num1 = 0
let num2 = 0
let operator = '+'

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
    // splitString = fullString.split('-')
    // splitString = fullString.split('/')
    // splitString = fullString.split('*')
    num1 = splitString[0]
    num2 = splitString[1]
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    
} 

equalsbtn.addEventListener('click', function(e) {
operate()
})