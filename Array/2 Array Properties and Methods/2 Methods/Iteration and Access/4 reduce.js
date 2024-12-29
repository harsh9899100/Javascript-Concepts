// The reduce() method executes a reducer callback function on each element of the array, accumulating the result into a single output value. It is widely used for calculations like summing numbers, flattening arrays, or building objects.

// Syntax:
// =======================================================================
// array.reduce(function(accumulator, currentValue, currentIndex, array) {
//     return accumulatedValue;
// }, initialValue);
// =======================================================================

// Example 1: Summing Array Elements
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15

// Example 2: Finding the Maximum Value
let max = numbers.reduce((acc, num) => (num > acc ? num : acc));
console.log(max);  // Output: 5

// Example 3: Counting Occurrences
let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let fruitCounts = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCounts);  // Output: { apple: 3, banana: 2, orange: 1 }

// Example 4: Flattening an Array
let nestedArray = [[1, 2], [3, 4], [5]];
let flattened = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened);  // Output: [1, 2, 3, 4, 5]

// Example 5: Building an Object from an Array
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
let userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});
console.log(userMap);  // Output: { 1: 'Alice', 2: 'Bob', 3: 'Charlie' }

// Example 6: Using initialValue
sum = numbers.reduce((acc, num) => acc + num, 10);
console.log(sum);  // Output: 25
