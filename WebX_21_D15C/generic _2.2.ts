function aOrC<T>(a: T, b: T): T {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b) as T;
    } else if (typeof a === "string" && typeof b === "string") {
        return (a + b) as T;
    } else {
        throw new Error("Both are of different data types, it should be either both numbers or both strings");
    }
}

try {
    const sum = aOrC(5,"ishan");
    console.log(sum);  

    const concatenatedString = aOrC("Hello, ", "world!");
    console.log(concatenatedString);  
} catch (error) {
    console.error("ERROR!!!!!", error.message);
}

