// The reverse() method is used to reverse the order of the elements in an array. It modifies the array in place, meaning that it does not create a new array but instead directly alters the original array.

// Syntax:
// ===========================================================
let result_r = array.reverse();
// ===========================================================

// No Parameters: The reverse() method does not take any arguments.

// Key Points:
// 1. In-Place Modification: The reverse() method modifies the original array, reversing the order of its elements.
// 2. Returns the Reversed Array: It returns the same array after reversing it (the array is modified in place).
// 3. Array Length: The array's length does not change, only the order of its elements is reversed.

// Examples:
// Example 1: Basic Reversal of an Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits = ["apple", "banana", "cherry"];

// Reverse the order of the elements
fruits.reverse();

console.log(fruits);  // Output: ['cherry', 'banana', 'apple']
// The original array is reversed, and its elements are now in the opposite order.

// Example 2: Reversal of a Numeric Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers = [1, 2, 3, 4, 5];

// Reverse the numeric array
numbers.reverse();

console.log(numbers);  // Output: [5, 4, 3, 2, 1]
// The array of numbers is reversed, with the last element becoming the first.

// Example 3: Reversing an Array with Mixed Data Types
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let mixedArray = [1, "banana", true, 4.5, "apple"];

// Reverse the mixed array
mixedArray.reverse();

console.log(mixedArray);  // Output: ['apple', 4.5, true, 'banana', 1]
// The reverse() method works on arrays with any type of data, including strings, numbers, and booleans.

// Example 4: Reversal of a Nested Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let nestedArray = [["apple", "banana"], [1, 2], ["cherry", "date"]];

// Reverse the array containing sub-arrays
nestedArray.reverse();

console.log(nestedArray);  
// Output: [['cherry', 'date'], [1, 2], ['apple', 'banana']]
// The order of the outer array is reversed, but the elements inside the inner arrays remain unchanged.

// Use Cases:
// 1. Reversing a List: Useful for displaying a list of items in reverse order (e.g., reversing recent posts or messages).
// 2. Undoing Order: Reversing arrays when the order of elements needs to be undone or manipulated.
// 3. Efficient Reversal: Reversing data structures when the sequence of elements matters (e.g., in algorithms like depth-first search).

// Performance Considerations:
// The reverse() method has a time complexity of O(n), where n is the number of elements in the array, as it needs to swap every element in the array.
// Since reverse() modifies the array in place, it does not require additional memory (other than for the changes).

// Difference Between reverse() and Other Methods
// =============================================
/*
Method       |  Description                                                       |  Use Case
-------------|--------------------------------------------------------------------|-------------------------
reverse()    |  Reverses the order of elements in the array.                      | Reversing the elements of an array.
sort()       |  Sorts the elements of the array based on a criteria.              | Sorting elements in ascending/descending order.
map()        |  Creates a new array by applying a function to each element.       | Transforming each element in the array.
slice()      |  Creates a shallow copy of the array or a section of it.           | Creating a new array without modifying the original.
*/

// Example Comparison: reverse() vs sort()
// =======================================
let numbers2 = [1, 2, 3, 4, 5];

// Using reverse()
let reversedNumbers = numbers2.reverse();
console.log(reversedNumbers);  // Output: [5, 4, 3, 2, 1]

// Using sort()
let sortedNumbers = numbers2.sort((a, b) => a - b);
console.log(sortedNumbers);  // Output: [1, 2, 3, 4, 5]
// The reverse() method reverses the array's order, while sort() arranges elements according to a specified criteria (e.g., ascending order).
