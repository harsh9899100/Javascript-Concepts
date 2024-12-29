// The includes() method is used to check if an array contains a specific element.
// It returns true if the element is found in the array, and false otherwise.

// Syntax:
// ===========================================================
array.includes(searchElement, fromIndex);
// ===========================================================

// searchElement: The element to search for in the array.
// fromIndex (optional): The index to start the search from. The default is 0.
// If it's a negative value, it starts the search from the end of the array.

// Key Points:
// 1. Returns Boolean: It returns true if the element is found, and false if not.
// 2. Strict Equality: The search is done using strict equality (===), so it won't match NaN with itself or +0 with -0.
// 3. Non-Mutating: Does not modify the original array.
// 4. Finds the Element Anywhere: It checks for the presence of the element regardless of its position in the array.

// Examples:

// Example 1: Check if an Element Exists in an Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits = ["apple", "banana", "cherry"];

// Check if 'banana' is in the array
let containsBanana = fruits.includes("banana");

console.log(containsBanana);  // Output: true

// Example 2: Element Not Found
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits2 = ["apple", "banana", "cherry"];

// Check if 'grape' is in the array
let containsGrape = fruits2.includes("grape");

console.log(containsGrape);  // Output: false

// Example 3: Using fromIndex to Start the Search
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits3 = ["apple", "banana", "cherry", "banana"];

// Check if 'banana' is in the array starting from index 2
let containsBananaFromIndex = fruits3.includes("banana", 2);

console.log(containsBananaFromIndex);  // Output: true

// Example 4: Searching for NaN (Special Case)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers = [1, 2, NaN, 4, 5];

// Check if NaN is in the array
let containsNaN = numbers.includes(NaN);

console.log(containsNaN);  // Output: true

// Example 5: Searching for -0 vs +0
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers2 = [0, -0, 1, 2, 3];

// Check if +0 is in the array
let containsPlusZero = numbers2.includes(0);

console.log(containsPlusZero);  // Output: true

// Check if -0 is in the array
let containsMinusZero = numbers2.includes(-0);

console.log(containsMinusZero);  // Output: true

// Use Cases:
// 1. Presence Check: Useful for checking if an element exists before performing further operations (e.g., adding, removing items).
// 2. Conditional Operations: Perform actions only if an element exists (e.g., validation or modification).
// 3. Validation: Ensure that certain elements are present in the array before proceeding with specific actions.

// Difference Between includes() and Similar Methods
// =============================================
/*
Method       | Description                                                   | Returns
-------------|---------------------------------------------------------------|---------------------
includes()   | Checks if an element is present in the array.                | true or false
indexOf()    | Finds the first index of a specific element.                  | The index or -1
find()       | Finds the first element that satisfies a condition.           | The element or undefined
*/

// Example Comparison: includes() vs indexOf()
// ========================================
let fruits4 = ["apple", "banana", "cherry"];

// Using includes to check if 'banana' is present
let hasBanana = fruits4.includes("banana");
console.log(hasBanana);  // Output: true

// Using indexOf to find the index of 'banana'
let bananaIndex = fruits4.indexOf("banana");
console.log(bananaIndex);  // Output: 1
