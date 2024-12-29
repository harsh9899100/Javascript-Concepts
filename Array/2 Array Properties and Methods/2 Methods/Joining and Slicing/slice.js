// The slice() method is used to extract a section of an array and return it as a new array, without modifying the original array. The section is specified by two indices, representing the start and end positions. The method does not alter the original array.

// Syntax:
// ===========================================================
let result_s = array.slice(start, end);
// ===========================================================

// start (optional): The index at which to begin extraction. The element at this index will be included. If not provided, it defaults to 0.
// end (optional): The index at which to stop extraction. The element at this index will not be included. If not provided, it extracts all elements from the start to the end of the array.

// Key Points:
// 1. New Array: The slice() method returns a new array containing the extracted elements, leaving the original array unchanged.
// 2. Negative Indices: Both start and end can be negative, which counts from the end of the array (-1 is the last element, -2 is the second-to-last, and so on).
// 3. No Modification of Original Array: The original array remains intact after calling slice().
// 4. Extracting Section: If end is omitted, the method will slice the array from start to the end.

// Examples:
// Example 1: Basic Usage of slice()
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits = ["apple", "banana", "cherry", "date"];

// Extract elements starting from index 1 (inclusive) to index 3 (exclusive)
let selectedFruits = fruits.slice(1, 3);

console.log(selectedFruits);  // Output: ['banana', 'cherry']
console.log(fruits);          // Output: ['apple', 'banana', 'cherry', 'date']  // Original array is unchanged
// In this example, elements starting from index 1 (inclusive) and ending at index 3 (exclusive) are extracted into a new array.

// Example 2: Omitting the end Parameter
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers = [10, 20, 30, 40, 50];

// Extract elements starting from index 2 to the end of the array
let sliceFrom2 = numbers.slice(2);

console.log(sliceFrom2);  // Output: [30, 40, 50]
// Here, we omit the end parameter, so the method extracts all elements starting from index 2 to the end of the array.

// Example 3: Using Negative Indices
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let animals = ["lion", "tiger", "elephant", "giraffe", "zebra"];

// Extract last three elements using negative indices
let lastThreeAnimals = animals.slice(-3);

console.log(lastThreeAnimals);  // Output: ['elephant', 'giraffe', 'zebra']
// In this case, negative indices are used to start from the third-to-last element and extract the last three elements.

// Example 4: Using Both start and end with Negative Indices
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let colors = ["red", "green", "blue", "yellow", "purple"];

// Extract elements starting from the second-to-last index (-2) to the end (-1)
let sliceColors = colors.slice(-3, -1);

console.log(sliceColors);  // Output: ['blue', 'yellow']
// This example uses negative indices to extract a section of the array, starting from index -3 (third-to-last) and ending before index -1 (the last element).

// Use Cases:
// 1. Extracting Subarrays: When you need a portion of an array (e.g., extracting the first few elements, or a slice of data).
// 2. Non-destructive Extraction: Useful when you want to keep the original array unchanged while working with a subset of its data.
// 3. Creating Copies of Arrays: By using slice(0), you can create a shallow copy of the array.

// Performance Considerations:
// The slice() method has a time complexity of O(n), where n is the number of elements being copied into the new array.
// Since slice() creates a new array, if you're working with large arrays, it may have some performance overhead.

// Difference Between slice() and Other Methods
// ==============================================
/*
Method       |  Description                                                       |  Use Case
-------------|--------------------------------------------------------------------|-------------------------
slice()      |  Extracts a section of the array and returns it as a new array.    | Creating a new array from a subset of an existing one.
splice()     |  Modifies the original array by removing or adding elements.       | Removing or adding elements at a specific index.
concat()     |  Combines multiple arrays into one new array.                      | Joining two or more arrays into a single array.
map()        |  Creates a new array by applying a function to each element.       | Transforming the elements of an array.
*/

// Example Comparison: slice() vs splice()
// ========================================
let numbers2 = [1, 2, 3, 4, 5];

// Using slice()
let slicedNumbers = numbers2.slice(1, 4);
console.log(slicedNumbers);  // Output: [2, 3, 4]

// Using splice() to remove elements from the original array
let splicedNumbers = numbers2.splice(1, 3);  // Removes 3 elements starting from index 1
console.log(splicedNumbers);  // Output: [2, 3, 4]
console.log(numbers2);        // Output: [1, 5]  // Original array is modified

// The slice() method returns a new array without modifying the original, while splice() modifies the original array.
