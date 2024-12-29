// The indexOf() method is used to find the first index of a specific element in an array. 
// If the element is not found, it returns -1. The search starts from a given index (default is 0).

// Syntax:
// ===========================================================
array.indexOf(searchElement, fromIndex);
// ===========================================================

// searchElement: The element to search for in the array.
// fromIndex (optional): The index to start the search from. The default value is 0. 
// If the value is negative, it is treated as array.length + fromIndex, meaning it starts counting from the end of the array.

// Key Points:
// 1. Returns the First Index: Returns the index of the first occurrence of the element.
// 2. Returns -1 if Not Found: If the element is not found, it returns -1.
// 3. Strict Equality: The search is done using strict equality (===), so it won't match NaN with itself or +0 with -0.
// 4. Non-Mutating: Does not modify the original array.

// Examples:
// Example 1: Find the Index of a Specific Element
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits = ["apple", "banana", "cherry", "date"];

// Find the index of 'banana'
let index = fruits.indexOf("banana");

console.log(index);  // Output: 1

// Example 2: Element Not Found
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits2 = ["apple", "banana", "cherry", "date"];

// Try to find 'grape'
let index2 = fruits2.indexOf("grape");

console.log(index2);  // Output: -1

// Example 3: Using fromIndex
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits3 = ["apple", "banana", "cherry", "banana"];

// Find the first occurrence of 'banana' starting from index 2
let index3 = fruits3.indexOf("banana", 2);

console.log(index3);  // Output: 3

// Example 4: Searching for NaN (Special Case)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers = [1, 2, NaN, 4, 5];

// Trying to find NaN
let index4 = numbers.indexOf(NaN);

console.log(index4);  // Output: -1
// `NaN` cannot be found using `indexOf()` due to strict equality, even though it's in the array.

// Example 5: Searching for -0 vs +0
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers2 = [0, -0, 1, 2, 3];

// Find +0
let indexPlusZero = numbers2.indexOf(0);

console.log(indexPlusZero);  // Output: 0

// Find -0
let indexMinusZero = numbers2.indexOf(-0);

console.log(indexMinusZero);  // Output: 1

// Use Cases:
// 1. Finding Element Position: Useful for determining the position of an item in an array.
// 2. Checking Existence: You can check if an element exists in an array by checking if the return value is -1 or not.
// 3. Avoiding Duplicates: Often used to check if an element is already in the array before adding it.

// Difference Between indexOf() and Similar Methods
// =============================================
/*
Method       | Description                                                     | Returns
-------------|---------------------------------------------------------------|---------------------
indexOf()    | Finds the first index of a specific element.                   | The index or -1
lastIndexOf()| Finds the last index of a specific element.                    | The index or -1
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
