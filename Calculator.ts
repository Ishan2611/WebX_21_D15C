class Calculator {
  add(a: any, b: any): number | string {
    if (typeof a === "string" && typeof b === "string") {
      return a + b; 
    }
    if (typeof a === "number" && typeof b === "number") {
      return a + b;  
    }
    return "Invalid inputs";  
  }
  sub(a: number, b: number): number {
    return a - b;
  }
  mult(a: number, b: number): number {
    return a * b;
  }
  div(a: any, b: any): number | never {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both inputs must be numbers");  
    }
    if (b === 0) {
      throw new Error("Dividing by 0 is invalid!!");  
    }
    return a / b;
  }
}
const calc = new Calculator();
try {
  console.log(`Addition: ${calc.add(45, "55")}`);    
  console.log(`Addition: ${calc.add(100, 250)}`);    
  console.log(`Subtraction: ${calc.sub(120, 30)}`);  
  console.log(`Multiplication: ${calc.mult(15, 10)}`);  
  console.log(`Division: ${calc.div(100, 5)}`);      
  console.log(`Division: ${calc.div(50, 0)}`);       
} catch (error) {
  console.error(error.message);
}
