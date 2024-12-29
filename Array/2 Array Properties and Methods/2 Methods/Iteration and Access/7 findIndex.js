// The findIndex() method is used to locate the index of the first element in an array that satisfies a given condition.

// Syntax:
// array.findIndex(function(element, index, array) {
//     // Condition to match
// });

// Using an arrow function:
// array.findIndex((element, index, array) => {
//     // Condition to match
// });

// Key Points:
// - Returns the index of the matching element.
// - Stops at the first match.
// - Returns -1 if no elements satisfy the condition.

// Examples:

// Example 1: Find the Index of the First Even Number
let numbers = [1, 3, 7, 4, 9];
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);  // Output: 3

// Example 2: Find the Index of an Object by Property
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
let userIndex = users.findIndex(user => user.id === 2);
console.log(userIndex);  // Output: 1

// Example 3: Handle No Match Case
let oddNumbers = [1, 3, 5, 7];
let noMatch = oddNumbers.findIndex(num => num % 2 === 0);
console.log(noMatch);  // Output: -1

// Example 4: Using index and array Arguments
let moreNumbers = [10, 15, 20, 25];
let result = moreNumbers.findIndex((num, index) => index % 2 === 0);
console.log(result);  // Output: 0 (the index of 10)

// Difference Between find() and findIndex()
// - find() returns the element itself.
// - findIndex() returns the index of the element.

// Example Comparison:
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);  // Output: 4
let firstEvenIndexAgain = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndexAgain);  // Output: 3
