const add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const sub = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

const mult = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

const div = function (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

const printResult = function (firstNumber, secondNumber, selectedOperator, result) {
    console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${result}`);
}

const operators = { '+': add, '-': sub, '*': mult, '/': div };
const selectedOperator = enterOperator();
const firstNumber = enterNumber('first');
const secondNumber = enterNumber('second');
const result = operators[selectedOperator](firstNumber, secondNumber);

console.log(operators[selectedOperator]);
console.log(result);
printResult(firstNumber, secondNumber, selectedOperator, result);

function enterNumber(serialNumber) {
    let number = NaN;
    do {
        number = prompt(`Enter the ${serialNumber}  number`);
        number = Number(number);
    }
    while (isNaN(number));

    return number;
}

function enterOperator() {
    let operator = null;
    do {
        operator = prompt("What do you want to do?");
    } while (!operators[operator]);

    return operator;
}