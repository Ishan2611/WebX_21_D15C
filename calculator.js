var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        if (typeof a === "string" && typeof b === "string") {
            return a + b;
        }
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        return "Invalid inputs";
    };
    Calculator.prototype.sub = function (a, b) {
        return a - b;
    };
    Calculator.prototype.mult = function (a, b) {
        return a * b;
    };
    Calculator.prototype.div = function (a, b) {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Both inputs must be numbers");
        }
        if (b === 0) {
            throw new Error("Dividing by 0 is invalid!!");
        }
        return a / b;
    };
    return Calculator;
}());
var calc = new Calculator();
try {
    console.log("Addition: ".concat(calc.add(45, "55")));
    console.log("Addition: ".concat(calc.add(100, 250)));
    console.log("Subtraction: ".concat(calc.sub(120, 30)));
    console.log("Multiplication: ".concat(calc.mult(15, 10)));
    console.log("Division: ".concat(calc.div(100, 5)));
    console.log("Division: ".concat(calc.div(50, 0)));
}
catch (error) {
    console.error(error.message);
}
