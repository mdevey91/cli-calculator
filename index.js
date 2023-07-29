#! /usr/bin/env node 

// Imports
const prompt = require('prompt-sync')();

// Helper functions
function doCalculate(num1, op, num2) {
    return eval(num1 + op + num2)
}

// Constants
const SUPPORTED_OPERATORS = ['+', '-', '*', '/']

// Body
let userInput
const numberStack = []
let success = true

while (userInput !== 'q' && userInput !== 'exit') {
    success = true
    userInput = prompt('> ')

    userInput.split(' ').forEach(input => {
        if (input === 'q' || input === 'exit') {
            // need a placeholder so we don't trigger error message
        } else if (input === 'clear') {
            numberStack.length = 0 // empty the array
            console.log('calculator is cleared')
            success = false
        } else if (SUPPORTED_OPERATORS.includes(input)) {
            if (numberStack < 2) {
                console.log('you need at least two numbers before you can perform a calculation')
                success = false
            } else {
                const rightNum = numberStack.pop()
                const leftNum = numberStack.pop()
                numberStack.push(doCalculate(leftNum, input, rightNum))
            }
        } else if (!isNaN(input)) {
            numberStack.push(input)
        } else {
            console.log(`${input} is not a valid number or operator`)
            success = false
        }
    })
    
    if (success === true && numberStack.length > 0) {
        console.log(numberStack[numberStack.length - 1])
    }
}

console.log("Exiting gracefully")


