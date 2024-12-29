// The sort() method is used to sort the elements of an array in place. By default, it sorts the array alphabetically if the array contains strings, or numerically if the array contains numbers (with certain limitations). You can also provide a custom sorting function for more complex sorting behavior.

// Syntax:
// ===========================================================
let result_s = array.sort(compareFunction);
// ===========================================================

// compareFunction (optional): A function that defines the sort order. If not provided, the array is sorted alphabetically by default.

// Key Points:
// 1. In-Place Sorting: The sort() method modifies the original array.
// 2. String Sorting by Default: Without a custom comparator, it sorts elements as strings, which may lead to incorrect numeric sorting (e.g., "10" comes before "2").
// 3. Custom Sorting: You can provide a custom comparator function to sort numbers or objects correctly.
// 4. Returns the Sorted Array: It returns the array after sorting (the array itself is modified).
// 5. Stability: As of ECMAScript 2019, the sort() method is stable, meaning it preserves the relative order of elements that are considered equal.

// Examples:
// Example 1: Default Sorting (Alphabetical)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits = ["banana", "cherry", "apple", "date"];

// Sort alphabetically
fruits.sort();

console.log(fruits);  // Output: ['apple', 'banana', 'cherry', 'date']
// The sort() method sorts the strings based on their lexicographical order.

// Example 2: Sorting Numbers (Incorrect by Default)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers = [10, 2, 33, 4];

// Sort the numbers (but it will not be sorted numerically correctly by default)
numbers.sort();

console.log(numbers);  // Output: [10, 2, 33, 4] (incorrect sorting)
// Default sorting converts numbers to strings, resulting in lexicographical order.

// Example 3: Sorting Numbers (Correctly) Using Custom Comparator
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers2 = [10, 2, 33, 4];

// Sort the numbers numerically by using a custom comparator
numbers2.sort((a, b) => a - b);

console.log(numbers2);  // Output: [2, 4, 10, 33]
// The comparator (a, b) => a - b ensures that the numbers are sorted in ascending order.

// Example 4: Sorting Numbers in Descending Order
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers3 = [10, 2, 33, 4];

// Sort the numbers in descending order
numbers3.sort((a, b) => b - a);

console.log(numbers3);  // Output: [33, 10, 4, 2]
// The comparator (a, b) => b - a sorts the numbers in descending order.

// Example 5: Sorting Objects Based on a Property
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let people = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 }
];

// Sort by age in ascending order
people.sort((a, b) => a.age - b.age);

console.log(people);
// Output: [{ name: 'Bob', age: 20 }, { name: 'John', age: 25 }, { name: 'Alice', age: 30 }]
// The array of objects is sorted based on the 'age' property in ascending order.

// Example 6: Sorting Strings with Case-Insensitive Comparison
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let fruits2 = ["banana", "Apple", "cherry", "Date"];

// Sort alphabetically without case sensitivity
fruits2.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(fruits2);  // Output: ['Apple', 'banana', 'cherry', 'Date']
// The toLowerCase() method ensures the sorting is case-insensitive.

// Use Cases:
// 1. String Sorting: Sorting arrays of strings in lexicographical order.
// 2. Numerical Sorting: Sorting numbers correctly using a custom comparator.
// 3. Sorting Objects: Sorting arrays of objects based on one or more properties.
// 4. Custom Sorting: Sorting based on conditions like case-insensitivity, or other custom criteria.

// Performance Considerations:
// The sort() method's time complexity is typically O(n log n), but the exact performance can vary depending on the sorting algorithm used by the JavaScript engine.
// Since sort() modifies the array in place, if you need to preserve the original array, it's recommended to create a shallow copy first (using slice() or the spread operator).

// Difference Between sort() and Other Methods
// =============================================
/*
Method       |  Description                                                       |  Use Case
-------------|--------------------------------------------------------------------|-------------------------
sort()       |  Sorts the array elements in place (alphabetically or numerically with custom logic). | Sorting arrays.
reverse()    |  Reverses the order of the elements in the array.                   | Reversing the array.
map()        |  Creates a new array with the results of applying a function to each element. | Transforming array elements.
filter()     |  Creates a new array with elements that meet a condition.           | Filtering array elements.
*/

// Example Comparison: sort() vs reverse()
// =======================================
let numbers4 = [1, 2, 3, 4, 5];

// Using sort()
let sortedNumbers = numbers4.sort((a, b) => a - b);
console.log(sortedNumbers);  // Output: [1, 2, 3, 4, 5]

// Using reverse()
let reversedNumbers = numbers4.reverse();
console.log(reversedNumbers);  // Output: [5, 4, 3, 2, 1]
// The sort() method sorts the array, while reverse() simply reverses the order of the elements.
