// ==============Activity 1=================
//Function Declaration
//Write a function that takes a number as an argument and returns "Even" for even numbers and "Odd" for odd numbers.
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

evenOdd(5);
evenOdd(6);
// Write a function that takes a number as an argument and returns the square of the number.
function square(num) {
    return num * num;
}

console.log(square(5));

// ==============Activity 2=================

// Function Expression

// Write a function that takes two numbers as arguments and returns the maximum of two.
const maximumOfTwoNumbers = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maximumOfTwoNumbers(10, 20));

//Write a function that takes two Strings as arguments and concatenates them.
const concatenateStrings = function (str1, str2) {
    return str1 + str2;
}

console.log(concatenateStrings("Hello", " World"));

// ==============Activity 3=================
// Arrow Function

const sumOfTwoNumbers = (num1, num2) => num1 + num2;
console.log(sumOfTwoNumbers(10, 20));

const isCharacterPresent = (str, ch) => str.includes(ch);
console.log(isCharacterPresent("Hello", "h"));

// ==============Activity 4=================
// Default Parameters
function productOfTwoNums(a, b = 1) {
    return a * b;
}
console.log(productOfTwoNums(5));
console.log(productOfTwoNums(5, 10));

const greeting = (name, age) => {
    return `Hello ${name}, You are ${age} years old`;
}
console.log(greeting("Sudit", 23));

// ==============Activity 5=================
// Higher Order Function

// Write a function that takes another function as an argument and calls it n times.
const hello = () => {
    return "Hello";
}

function HigherOrederFunction(fn, n) {
    while (n > 0) {
        console.log(fn());
        n--;
    }
}

HigherOrederFunction(hello, 5);

const squareOfNumber = (num) => num * num;
const numTimes10 = (num) => num * 10;

function HigherOrederFunction2(fn1, fn2, num) {
    const result = fn1(num);
    return fn2(result);
}

console.log(HigherOrederFunction2(squareOfNumber, numTimes10, 5));

