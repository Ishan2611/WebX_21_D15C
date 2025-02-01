import * as readline from "readline-sync";

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

const calculator = new Calculator();

// Get user inputs
const num1 = Number(readline.question("Enter the first number: "));
const num2 = Number(readline.question("Enter the second number: "));
const operation = readline.question("Choose an operation (add, subtract, multiply, divide): ");

try {
  let result: number;

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

  console.log(`The result is: ${result}`);
} catch (error) {
  console.error(error.message);
}
