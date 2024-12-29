// The every() method checks if all elements in an array satisfy a given condition. If all elements pass the test, it returns true. If even one element fails, it returns false.

// Syntax:
// ===========================================================
array.every(function(element, index, array) {
    // Condition to check
});
// ===========================================================

// Or using an arrow function:
// ===========================================================
array.every((element, index, array) => {
    // Condition to check
});
// ===========================================================

// element: The current element being processed in the array.
// index (optional): The index of the current element.
// array (optional): The array being traversed.

// Key Points:
// 1. Short-Circuit Evaluation: Stops processing as soon as it finds the first element that fails the condition.
// 2. Returns a Boolean: Returns true if all elements satisfy the condition, otherwise false.
// 3. Non-Mutating: Does not modify the original array.

// Examples:
// Example 1: Check if All Numbers are Positive
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers = [2, 4, 6, 8];

// Check if all numbers are positive
let allPositive = numbers.every(num => num > 0);

console.log(allPositive);  // Output: true

// Example 2: Check for Uniform Data Types
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let mixedArray = [1, 2, 3, "4"];

// Check if all elements are numbers
let allNumbers = mixedArray.every(item => typeof item === 'number');

console.log(allNumbers);  // Output: false

// Example 3: Validate Object Properties
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let users = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: true },
    { id: 3, name: 'Charlie', active: true }
];

// Check if all users are active
let areAllUsersActive = users.every(user => user.active);

console.log(areAllUsersActive);  // Output: true

// Example 4: Handle Empty Arrays
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let emptyArray = [];

// Check if all elements in an empty array satisfy a condition
let result = emptyArray.every(num => num > 0);

console.log(result);  // Output: true
// Note: `every()` returns true for empty arrays because there are no elements to fail the condition.

// Example 5: Using index and array Arguments
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers2 = [0, 1, 2, 3];

// Check if all elements match their index
let allMatchIndex = numbers2.every((num, index) => num === index);

console.log(allMatchIndex);  // Output: true

// Use Cases:
// 1. Validation: Ensure that all elements in an array meet a specific criterion (e.g., all fields are complete, all items are valid).
// 2. Consistency Checks: Verify uniform properties or values across an array.
// 3. Data Integrity: Confirm that an array conforms to expected standards before processing.

// Difference Between every() and Similar Methods
// =============================================
/*
Method       | Description                                                        | Returns
-------------|--------------------------------------------------------------------|---------------------
every()      | Checks if all elements match the condition.                        | true or false
some()       | Checks if at least one element matches the condition.               | true or false
filter()     | Returns all elements that match the condition.                     | A new array
*/

// Example Comparison: every() vs some()
// ======================================
let numbers3 = [1, 3, 5, 7, 8];

// Using every() to check if all numbers are odd
let allOdd = numbers3.every(num => num % 2 !== 0);
console.log(allOdd);  // Output: false

// Using some() to check if any number is even
let hasEven = numbers3.some(num => num % 2 === 0);
console.log(hasEven);  // Output: true
