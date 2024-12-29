// The some() method checks if at least one element in an array satisfies a given condition.
// If it finds a match, it immediately returns true. If no elements satisfy the condition, it returns false.

// Syntax:
// ============================================
// array.some(function(element, index, array) {
//     // Condition to check
// });
// ============================================

// Or using an arrow function:
// =======================================
// array.some((element, index, array) => {
//     // Condition to check
// });
// =======================================

// Examples:

// Example 1: Check for Even Numbers
let numbers = [1, 3, 5, 7, 8];
let hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber);  // Output: true

// Example 2: Check for Negative Numbers
let moreNumbers = [10, 20, 30, -5];
let hasNegative = moreNumbers.some(num => num < 0);
console.log(hasNegative);  // Output: true

// Example 3: Check Properties of Objects
let users = [
    { id: 1, name: 'Alice', active: false },
    { id: 2, name: 'Bob', active: true },
    { id: 3, name: 'Charlie', active: false }
];
let isAnyUserActive = users.some(user => user.active);
console.log(isAnyUserActive);  // Output: true

// Example 4: Handle Empty Arrays
let emptyArray = [];
let result = emptyArray.some(num => num > 0);
console.log(result);  // Output: false

// Example 5: Using index and array Arguments
let indexedNumbers = [5, 15, 25];
let matchIndex = indexedNumbers.some((num, index) => num === index);
console.log(matchIndex);  // Output: false

// Difference Between some() and every()
// some() checks if at least one element matches the condition.
// every() checks if all elements match the condition.

let allOddCheck = numbers.every(num => num % 2 !== 0);
console.log(allOddCheck);  // Output: false
