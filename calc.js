let add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

let sub = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

let mult = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

let div = function (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

let printResult = function (firstNumber, secondNumber, operator, result) {
    console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
}

const operators = { '+': add, '-': sub, '*': mult, '/': div };
let operator = null;
do {
    operator = prompt("What do you want to do?");
} while (!operators[operator]);

const firstNumber = enterNumber('first');
const secondNumber = enterNumber('second');
const result = operators[operator](firstNumber, secondNumber);

console.log(operators[operator]);
console.log(result);
printResult(firstNumber, secondNumber, operator, result);

function enterNumber(serialNumber) {
    let number = NaN;
    do {
        number = prompt(`Enter the ${serialNumber}  number`);
        number = Number(number);
    }
    while (isNaN(number));

    return number;
}