// The map() method creates a new array by applying a callback function to each element of the original array.
// It is ideal for transforming or mapping data from one form to another.

// Syntax:
// ==========================================================
// let newArray = array.map(function(element, index, array) {
//     // Return transformed element
// });
// ==========================================================

// Or using an arrow function:
// =====================================================
// let newArray = array.map((element, index, array) => {
//     // Return transformed element
// });
// =====================================================

//  element: The current element being processed in the array.
     //  index (optional): The index of the current element.
     //  array (optional): The entire array being traversed.

// Key Points:
     // - Returns a New Array: The original array is not modified.
     // - Same Length as Original: The resulting array has the same number of elements as the original array.
     // - Pure Functionality: It doesn't modify the original array (unless explicitly done so within the callback).

// Examples:

// Example 1: Basic Transformation
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numbers = [1, 2, 3, 4, 5];

// Multiplying each element by 2
let doubled = numbers.map(num => num * 2);

console.log(doubled);    // Output: [2, 4, 6, 8, 10]
console.log(numbers);    // Output: [1, 2, 3, 4, 5] (original array unchanged)


// Example 2: Extracting Properties from Objects
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// Extracting user names
let userNames = users.map(user => user.name);

console.log(userNames);  // Output: ['Alice', 'Bob', 'Charlie']


// Example 3: Using index
// ￣￣￣￣￣￣￣￣￣￣￣￣
let numbersWithIndex = [10, 20, 30];

// Appending index to each number
let result = numbersWithIndex.map((num, index) => `${num}-${index}`);

console.log(result);  // Output: ['10-0', '20-1', '30-2']


// Example 4: Converting Data
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let temperaturesCelsius = [0, 20, 30];

// Converting Celsius to Fahrenheit
let temperaturesFahrenheit = temperaturesCelsius.map(temp => (temp * 9) / 5 + 32);

console.log(temperaturesFahrenheit);  // Output: [32, 68, 86]


// Use Cases:
     // - Transforming Arrays: Converting values in an array (e.g., Celsius to Fahrenheit).
     // - Extracting Specific Data: Extracting fields from an array of objects.
     // - Creating New Structures: Generating new arrays from existing data.

// Difference Between forEach() and map()
// ────────────────────────────────────────
// | Feature           | forEach()                | map()                           |
// |-------------------|--------------------------|----------------------------------|
// | Purpose           | Perform side effects     | Transform elements into a new array |
// | Return Value      | undefined                | A new array with transformed elements |
// | Original Array    | Not modified            | Not modified                     |

// Example Comparison
// ￣￣￣￣￣￣￣￣￣￣
let numbersCompare = [1, 2, 3];

// Using forEach()
let doubledForEach = [];
numbersCompare.forEach(num => doubledForEach.push(num * 2));
console.log(doubledForEach);  // Output: [2, 4, 6]

// Using map()
let doubledMap = numbersCompare.map(num => num * 2);
console.log(doubledMap);  // Output: [2, 4, 6]