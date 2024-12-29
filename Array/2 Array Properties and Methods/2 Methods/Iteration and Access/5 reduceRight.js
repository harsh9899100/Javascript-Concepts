// The reduceRight() method works similarly to reduce(), but it processes the array elements from right to left, rather than left to right. It is useful when the order of traversal affects the result.

// Syntax:
// ===========================================================================================
// let newArray = array.reduceRight(function(accumulator, currentValue, currentIndex, array) {
//     // Return the accumulated value
// }, initialValue);
// ===========================================================================================

// Or using an arrow function:
// ======================================================================================
// let newArray = array.reduceRight((accumulator, currentValue, currentIndex, array) => {
//     // Return the accumulated value
// }, initialValue);
// ======================================================================================

// accumulator: Holds the accumulated result of the callback function.
// currentValue: The current element being processed.
// currentIndex (optional): The index of the current element.
// array (optional): The entire array being traversed.
// initialValue (optional): The initial value of the accumulator. If not provided, the last element of the array is used as the initial value, and the iteration starts from the second-to-last element.

// Key Points:
     // 1. Processes Elements in Reverse: Starts from the last element and goes to the first.
     // 2. Flexible Use Cases: Particularly useful for operations where reverse order matters, such as nested structure evaluation.
     // 3. Returns a Single Value: The output can be a number, string, object, or array.
     
// Example 1: Summing Array Elements (Reverse Order)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbers = [1, 2, 3, 4, 5];
     
     // Summing all numbers in reverse order
     let sum = numbers.reduceRight((acc, num) => acc + num, 0);
     
     console.log(sum);  // Output: 15
     
// Example 2: Reversing a String
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let letters = ['H', 'e', 'l', 'l', 'o'];
     
     // Reversing the string
     let reversed = letters.reduceRight((acc, char) => acc + char, '');
     
     console.log(reversed);  // Output: "olleH"

// Example 3: Evaluating Nested Parentheses
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let nestedArray = [')', 'c', '(', 'b', '(', 'a'];
     
     // Flatten and reverse order using reduceRight
     let result = nestedArray.reduceRight((acc, char) => {
         if (char === '(') acc = ')' + acc;
         else if (char === ')') acc = '(' + acc;
         else acc = char + acc;
         return acc;
     }, '');
     
     console.log(result);  // Output: "(ab(c))"
     
// Example 4: Flattening a Deeply Nested Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let nestedArray2 = [[[1, 2]], [3, 4], [5]];
     
     // Flattening a deeply nested array in reverse order
     let flattened = nestedArray2.reduceRight((acc, arr) => acc.concat(arr), []);
     
     console.log(flattened);  // Output: [5, 3, 4, [1, 2]]
     
// Example 5: Combining Strings (Reverse Order)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let words = ['world', ' ', 'hello'];
     
     // Joining words in reverse order
     let sentence = words.reduceRight((acc, word) => acc + word, '');
     
     console.log(sentence);  // Output: "hello world"

// Use Cases:
// 1. Reverse Operations: Combining elements or building data structures where order matters.
// 2. Reversing Strings: Easily reverse strings or arrays of characters.
// 3. Flattening and Transforming Nested Structures: Handling deeply nested arrays or objects.

// Difference Between reduce() and reduceRight()
// Feature   | reduce()                          | reduceRight()
// ----------|-----------------------------------|-------------------------------
// Direction | Left to right (first to last).    | Right to left (last to first).
// Use Cases | Sequential calculations, summing. | Reverse-order operations.

// Example Comparison: Reverse vs Forward Order
let numbers2 = [1, 2, 3, 4];

// Using reduce() (left to right)
let leftToRight = numbers2.reduce((acc, num) => acc + num, '');
console.log(leftToRight);  // Output: "1234"

// Using reduceRight() (right to left)
let rightToLeft = numbers2.reduceRight((acc, num) => acc + num, '');
console.log(rightToLeft);  // Output: "4321"
