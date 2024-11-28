// every(): A Comprehensive Guide
// ______________________________

// The every() method in JavaScript is a powerful tool for checking if every element in an array meets a specific condition. It returns a boolean value: true if all elements pass the test, false otherwise.

// Basic Usage:

const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(number => number % 2 === 0);
console.log(allEven); // Output: true


// Advanced Usage and Example with Books:
// --------------------------------------

// Checking if All Books are Fantasy:

const allFantasy = books.every(book => book.genre === "Fantasy");
console.log(allFantasy); // Output: false (not all books are fantasy)


// Checking if All Books Have a Title Length Greater Than 10:

const allLongTitles = books.every(book => book.title.length > 10);
console.log(allLongTitles); // Output: false (not all titles are longer than 10 characters)


// Key Points:

// every() returns a boolean value.
// The callback function takes three arguments: the current element, the current index, and the entire array.
// The callback function should return a boolean value: true if the element passes the test, false otherwise.
// If any element fails the test, every() immediately returns false and stops iterating.
// Additional Considerations:

// Short-circuiting: every() can short-circuit, meaning it stops iterating as soon as it encounters an element that fails the test.
// Performance: For large arrays, be aware of performance implications, especially when using complex callback functions.
// Readability: Use clear and concise callback functions to improve code readability.
// By understanding every(), you can efficiently check if all elements in an array meet a specific condition, making your code more concise and expressive.