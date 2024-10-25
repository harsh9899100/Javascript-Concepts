// for...of Loop

// Purpose: Iterates over the values of iterable objects (arrays, strings, Maps, Sets).

// Usage:
// for (const value of iterable) {
//   // Code to execute for each value
// }

// ⭐ 1) Iterating over Arrays --------------------

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

// ⭐ 2) Iterating over Strings -------------------

const greeting = "Hello, world!";

for (const char of greeting) {
  console.log(char);
}

// ⭐ 3) Iterating over Maps ----------------------

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

for (const [key, value] of myMap) {
  console.log(key, ":", value);
}

// ⭐ 4) Iterating over Sets ----------------------

const mySet = new Set([1, 2, 3, 3]);

for (const value of mySet) {
  console.log(value);
}

// -----------------------------------------------------------------------

// Notes:
 // - Iterates over values of iterable objects.
 // - The order of iteration is guaranteed for arrays.
 // - Not directly applicable to objects.

// Where not applicable:
 // - Directly iterating over object properties.

// -----------------------------------------------------------------------

// ⭐ Iterating over objects using Object.entries()
const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
};

for (const [key, value] of Object.entries(myObject)) {
  console.log(key, ':-', value);
}