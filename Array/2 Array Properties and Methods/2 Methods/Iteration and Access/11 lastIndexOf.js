// The lastIndexOf() method is used to find the last index of a specific element in an array.
// It searches from the end of the array towards the beginning and returns the index of the last occurrence of the element.
// If the element is not found, it returns -1.

// Syntax:
// ===========================================================
array.lastIndexOf(searchElement, fromIndex);
// ===========================================================

// searchElement: The element to search for in the array.
// fromIndex (optional): The index to start the search from. By default, it starts from the end of the array. 
// If it's a negative value, it is treated as array.length + fromIndex, meaning it starts counting from the end of the array.

// Key Points:
// 1. Searches from the End: It searches for the element starting from the end of the array.
// 2. Returns the Last Index: Returns the index of the last occurrence of the element.
// 3. Returns -1 if Not Found: If the element is not found, it returns -1.
// 4. Strict Equality: Like indexOf(), lastIndexOf() uses strict equality (===) for comparisons.
// 5. Non-Mutating: Does not modify the original array.

// Examples:
// Example 1: Find the Last Index of a Specific Element
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits = ["apple", "banana", "cherry", "banana"];

// Find the last index of 'banana'
let index = fruits.lastIndexOf("banana");

console.log(index);  // Output: 3

// Example 2: Element Not Found
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits2 = ["apple", "banana", "cherry", "date"];

// Try to find 'grape'
let index2 = fruits2.lastIndexOf("grape");

console.log(index2);  // Output: -1

// Example 3: Using fromIndex to Limit the Search
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits3 = ["apple", "banana", "cherry", "banana"];

// Find the last occurrence of 'banana' starting from index 2
let index3 = fruits3.lastIndexOf("banana", 2);

console.log(index3);  // Output: 1

// Example 4: Searching for NaN (Special Case)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers = [1, 2, NaN, 4, NaN];

// Find the last occurrence of NaN
let index4 = numbers.lastIndexOf(NaN);

console.log(index4);  // Output: 4
// Note: `lastIndexOf()` can correctly find the last occurrence of NaN, unlike `indexOf()`.

// Example 5: Searching for -0 vs +0
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers2 = [0, -0, 1, 2, 3];

// Find the last occurrence of +0
let indexPlusZero = numbers2.lastIndexOf(0);

console.log(indexPlusZero);  // Output: 0

// Find the last occurrence of -0
let indexMinusZero = numbers2.lastIndexOf(-0);

console.log(indexMinusZero);  // Output: 1

// Use Cases:
// 1. Find the Last Occurrence: Useful when you need to find the most recent occurrence of an element in an array.
// 2. Handling Duplicates: Helps find the last instance of a repeated element in an array.
// 3. Efficient Searching: Useful for searching backwards, especially in scenarios where the most recent element is more relevant.

// Difference Between lastIndexOf() and Similar Methods
// =============================================
/*
Method       | Description                                                     | Returns
-------------|---------------------------------------------------------------|---------------------
lastIndexOf()| Finds the last index of a specific element.                   | The last index or -1
indexOf()    | Finds the first index of a specific element.                   | The first index or -1
findIndex()  | Finds the index of the first element that satisfies a condition. | The index or -1
*/

// Example Comparison: indexOf() vs lastIndexOf()
// ============================================
let fruits4 = ["apple", "banana", "cherry", "banana"];

// Using indexOf to find the first occurrence of 'banana'
let firstIndex = fruits4.indexOf("banana");
console.log(firstIndex);  // Output: 1

// Using lastIndexOf to find the last occurrence of 'banana'
let lastIndex = fruits4.lastIndexOf("banana");
console.log(lastIndex);  // Output: 3
