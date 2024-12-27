// The push() method is used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array after the elements have been added.

// Syntax:

     // array.push(element1, element2, ..., elementN);       // element1, element2, ..., elementN: The elements you want to add to the array.

// Return Value : The push() method returns the new length of the array after the elements have been added.

// Example 1: Adding Multiple Elements : 
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruits = ['apple', 'banana', 'cherry'];
     
     // Adding a single element to the end of the array
     let newLength = fruits.push('date'); 
     
     console.log(fruits);       // Output: ['apple', 'banana', 'cherry', 'date']
     console.log(newLength);    // Output: 4 (new length of the array)


// Example 2: Adding Multiple Elements :
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruitss = ['apple', 'banana'];
     
     // Adding multiple elements to the end of the array
     let newLengthh = fruitss.push('cherry', 'date');
     
     console.log(fruitss);       // Output: ['apple', 'banana', 'cherry', 'date']
     console.log(newLengthh);    // Output: 4 (new length of the array)

// Example 3: Using push() on an Empty Array :
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let emptyArray = [];
     
     // Adding elements to an empty array
     emptyArray.push('apple', 'banana');
     
     console.log(emptyArray);   // Output: ['apple', 'banana']


