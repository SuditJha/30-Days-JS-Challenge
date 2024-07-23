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

console.log(book);
console.log(book.title, book.author, book.year);
console.log(book.getSummary());
book.updateYear(2021)
console.log(book);

for (const key in book) {
    if (Object.hasOwnProperty.call(book, key)) {
        const element = book[key];
        console.log(key, element);
    }
}

console.log(Object.keys(book));
console.log(Object.values(book));