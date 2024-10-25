// forEach.js

// Purpose: Iterates over the values of iterable objects (arrays, strings, Maps, Sets).

// Usage:
// for (const value of iterable) {
//   // Code to execute for each value
// }


// ⭐ 1) Using a normal function:
 const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){
     console.log(val);
 } )

// ⭐ 2) Using an arrow function :
  const fruits = ["apple", "banana", "orange"];
  
  fruits.forEach((fruit, index, fruits) => {
    console.log(`Fruit: ${fruit}, Index: ${index}, Array: ${fruits}`);
  });
  
// ⭐ 3) Extracting parameters from the array:
  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
  ];
  
  people.forEach(({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
  });

// Notes:
 // - Iterates over values of iterable objects.
 // - The order of iteration is guaranteed for arrays.
 // - Not directly applicable to objects.

// Where not applicable:
 // - Directly iterating over object properties.