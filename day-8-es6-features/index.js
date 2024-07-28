// Activity 1: Template Literals

// . Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
// . Task 2: Create a multi-line string using template literals and log it to the console.

const x = "Sudit"
console.log(`My name is ${x}`);

const multileneLineString = `This is line 1.
This is line 2.
This is line 3.`;
console.log(multileneLineString);

// ## Activity 2: Destructuring

//  Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
//  Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second);

const book = {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    year: 2011,
    getSummary: () => `${book.title} was written by ${book.author} in ${book.year}`,
    // this keyword will not work in arrow function
    updateYear: function (year) {
        this.year = year
    }
}
const { title, author } = book
console.log(title + "\n" + author);

// ## Activity 3: Spread and Rest Operators

//  Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
//  Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

function sum(...args) {
    console.log(args);
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5));


// ## Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second
// parameter.

function product(a, b = 1) {
    return a * b;
}
console.log(product(2, 3));
console.log(product(2));


// ## Activity 5: Enhanced Object Literals

// .Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
// .Task 9: Create an object with computed property names based on variables and log the object to the console.

const obj = {
    x,
    multileneLineString,
    product,
    sum,
    getSummary: book.getSummary
}
console.log(obj);

const key = 'name';
const value = 'Sudit';
const obj1 = {
    [key]: value
}
console.log(obj1);


