// Function to append a number to the input field
function appendNumber(number) {
    const input = document.getElementById('result');
    input.value += number;
}

// Function to clear the input field
function clearInput() {
    const input = document.getElementById('result');
    input.value = '';
}

// Function to perform addition
function add() {
    const input = document.getElementById('result');
    const expression = input.value;
    const numbers = expression.split('+');
    const sum = numbers.reduce((accumulator, current) => accumulator + parseFloat(current), 0);
    input.value = sum;
}

// Function to perform subtraction
function subtract() {
    const input = document.getElementById('result');
    const expression = input.value;
    const numbers = expression.split('-');
    const difference = numbers.reduce((accumulator, current) => accumulator - parseFloat(current));
    input.value = difference;
}

// Function to perform multiplication
function multiply() {
    const input = document.getElementById('result');
    const expression = input.value;
    const numbers = expression.split('*');
    const product = numbers.reduce((accumulator, current) => accumulator * parseFloat(current));
    input.value = product;
}

// Function to perform division
function divide() {
    const input = document.getElementById('result');
    const expression = input.value;
    const numbers = expression.split('/');
    const quotient = numbers.reduce((accumulator, current) => accumulator / parseFloat(current));
    input.value = quotient;
}

// Function to evaluate the result
function equalSign() {
    const input = document.getElementById('result');
    const expression = input.value;
    const result = eval(expression);
    input.value = result;
}





