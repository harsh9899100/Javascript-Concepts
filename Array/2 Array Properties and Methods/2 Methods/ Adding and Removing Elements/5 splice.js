// The splice() method is used to add or remove elements from anywhere within an array. It allows you to modify the array in place by either removing elements, adding new ones, or both.

// Syntax:

     // array.splice(start, deleteCount, item1, item2, ..., itemN);

         // start: The index at which to start changing the array. The first element is at index 0. If start is greater than the array length, no elements will be removed, and items will be added at the end.
         // deleteCount: The number of elements to remove. If deleteCount is omitted or set to 0, no elements are removed.
         // item1, item2, ..., itemN: The elements to add to the array, starting at the start index. If no items are specified, splice() will only remove elements.

// Return Value:
     // The splice() method returns an array of the removed elements. If no elements were removed, it returns an empty array.

// Example 1: Removing Elements 
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruits = ['apple', 'banana', 'cherry', 'date'];
     
     // Removing two elements starting from index 1
     let removedFruits = fruits.splice(1, 2);
     
     console.log(fruits);         // Output: ['apple', 'date']
     console.log(removedFruits);  // Output: ['banana', 'cherry']
     

// Example 2: Adding Elements
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruitss = ['apple', 'banana', 'date'];
     
     // Adding two elements at index 1 (without removing any elements)
     let newLength = fruitss.splice(1, 0, 'cherry', 'orange');
     
     console.log(fruitss);        // Output: ['apple', 'cherry', 'orange', 'banana', 'date']
     console.log(newLength);     // Output: 0 (no elements were removed)
     

// Example 3: Replacing Elements
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruitsss = ['apple', 'banana', 'cherry', 'date'];
     
     // Replacing the element at index 2 with 'orange'
     let replacedFruit = fruitsss.splice(2, 1, 'orange');
     
     console.log(fruitsss);        // Output: ['apple', 'banana', 'orange', 'date']
     console.log(replacedFruit); // Output: ['cherry'] (the removed element)


// Example 4: Removing Elements from the End of the Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbers = [1, 2, 3, 4, 5];
     
     // Removing the last two elements
     let removedNumbers = numbers.splice(-2, 2);
     
     console.log(numbers);       // Output: [1, 2, 3]
     console.log(removedNumbers); // Output: [4, 5]


// Key Points:
     // Modifies the array in place (removes and/or adds elements).
     // Can remove, add, or replace elements at any position.
     // Returns an array of removed elements (if any).
     // If no elements are removed, it returns an empty array.

// Performance Consideration:
     // splice() can be less efficient for large arrays because it may require shifting elements to accommodate new ones or to remove existing eleme     nts.
