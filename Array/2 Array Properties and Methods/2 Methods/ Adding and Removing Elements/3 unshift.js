// The unshift() method is used to add one or more elements to the beginning of an array. 
// It modifies the original array and returns the new length of the array after the elements have been added.

// Syntax:
     
     // array.unshift(element1, element2, ..., elementN);     // element1, element2, ..., elementN: The elements you want to add to the beginning of the array.

// Return Value:
     
     // The unshift() method returns the new length of the array after the elements have been added.

//  Example 1: Adding a Single Element
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruits = ['banana', 'cherry', 'date'];
     
     // Adding a single element to the beginning of the array
     let newLength = fruits.unshift('apple');
     
     console.log(fruits);       // Output: ['apple', 'banana', 'cherry', 'date']
     console.log(newLength);    // Output: 4 (new length of the array)


// Example 2: Adding Multiple Elements
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruitss = ['cherry', 'date'];
     
     // Adding multiple elements to the beginning of the array
     let newLengthh = fruitss.unshift('banana', 'apple');
     
     console.log(fruitss);       // Output: ['banana', 'apple', 'cherry', 'date']
     console.log(newLengthh);    // Output: 4 (new length of the array)

// Example 3: Using unshift() on an Empty Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let emptyArray = [];
     
     // Adding elements to an empty array
     emptyArray.unshift('first', 'second');
     
     console.log(emptyArray);   // Output: ['first', 'second']

// Key Points:
     // unshift() adds elements to the beginning of the array.
     // It modifies the array in place and returns the new length.
     // It can add one or more elements at once.
     // The unshift() method shifts all existing elements to higher indices to make room for the new element(s).

// Performance Consideration:
     // While push() adds elements to the end of the array (which is generally faster), unshift() adds elements to the beginning, which can be slower for large arrays because it requires shifting all existing elements.