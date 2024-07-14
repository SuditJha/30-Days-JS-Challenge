let a = 231, b = 93;
// Arithmetic Operators
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Assignment Operators
console.log("Value before adding 23 : ", a);
a += 23;
console.log("Value after adding 23 : ", a);
console.log("Value before subtracting 23 : ", a);
a -= 23;
console.log("Value after subtracting 23 : ", a);

// Comparison Operators
console.log(a > b);
console.log(a < b);
console.log(a === b);

// Logical Operators
console.log(a > 20 && b < 20);
console.log(a > 20 || b < 20);
console.log(a !== b);

// Ternary
console.log(a >= 0 ? "Positive" : "Negative");

// Feature 
function arithmeticOperationsScript(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
}

function comparisonAndLogicalOperationsScript(a, b) {
    // Comparison Operators
    console.log(a > b);
    console.log(a < b);
    console.log(a === b);

    // Logical Operators
    console.log(a > 20 && b < 20);
    console.log(a > 20 || b < 20);
    console.log(a !== b);
}

function ternaryOperationPositiveOrNegativeNumber(a) {
    console.log(a >= 0 ? "Positive" : "Negative");
}