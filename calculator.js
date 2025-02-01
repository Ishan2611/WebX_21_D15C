"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };
    return Calculator;
}());
var calculator = new Calculator();
// Get user inputs
var num1 = Number(readline.question("Enter the first number: "));
var num2 = Number(readline.question("Enter the second number: "));
var operation = readline.question("Choose an operation (add, subtract, multiply, divide): ");
try {
    var result = void 0;
    switch (operation) {
        case "add":
            result = calculator.add(num1, num2);
            break;
        case "subtract":
            result = calculator.subtract(num1, num2);
            break;
        case "multiply":
            result = calculator.multiply(num1, num2);
            break;
        case "divide":
            result = calculator.divide(num1, num2);
            break;
        default:
            throw new Error("Invalid operation");
    }
    console.log("The result is: ".concat(result));
}
catch (error) {
    console.error(error.message);
}
