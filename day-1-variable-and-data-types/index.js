// Activity - Variable Declaration

var firstVar = 25;
console.log(firstVar);

let myString = "Hello";
console.log(myString);

// Activity Constant Declaration
const isAdult = true;
console.log(isAdult);

// Activity Data Types
const myNumber = 30;
const str = "World";
const myBool = false
const myArray = [1, 2, 3];
const myObj = {
    "key": "Value"
}
console.log(typeof myNumber);
console.log(typeof str);
console.log(typeof myBool);
console.log(typeof myArray);
console.log(myObj);

// Reassigning Variables
let myVar = 24;
console.log(myVar);
myVar = "Value Changed"
console.log(myVar);

// Understanding Const
const value = 1;
try {
    value = 100; // Gives error --> Assignment to constant variable.
} catch (error) {
    console.log(error.message);
}

// Feature - Variables types console log

function variableTypesConsoleLog(myVar) {
    console.log(typeof myVar, myVar);
}

variableTypesConsoleLog(12)
variableTypesConsoleLog("Hi")
variableTypesConsoleLog([1, 2])
variableTypesConsoleLog(true)

// Feature - Reassignment Demo
function reassignmentDemo() {
    let letVariable = "Initial Value"
    console.log("Let var before Resignment: ", letVariable);
    letVariable = "Changed Value"
    console.log("After Reassignment: ", letVariable);

    const constVariable = "Initial Value"
    console.log("Const var before Resignment: ", constVariable);
    try {
        constVariable = "Changed Value"
    } catch (error) {
        console.log("On Reassigning const variable we get error due to immutability of const variable: ", error.message);

    }
}

reassignmentDemo();