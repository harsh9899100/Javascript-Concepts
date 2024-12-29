// The shift() method is used to remove the first element from an array. 
// It modifies the original array and returns the removed element. If the array is empty, it returns undefined.

// Syntax:

     // let removedElement = array.shift();      // removedElement: The element that was removed from the beginning of the array.

// Return Value:
    
     //  The shift() method returns the removed element.
     //  If the array is empty, it returns undefined.  


// Example 1: Removing the First Element :
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     
     let fruits = ['apple', 'banana', 'cherry', 'date'];
     
     // Removing the first element from the array
     let removedFruit = fruits.shift();
     
     console.log(fruits);        // Output: ['banana', 'cherry', 'date']
     console.log(removedFruit);  // Output: 'apple' (the removed element)


// Example 2: Removing the First Element from an Array with Multiple Elements :
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbers = [1, 2, 3, 4, 5];
     
     // Removing the first element
     let removedNumber = numbers.shift();
     
     console.log(numbers);        // Output: [2, 3, 4, 5]
     console.log(removedNumber);  // Output: 1 (the removed element)


// Example 3: Using shift() on an Empty Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let emptyArray = [];
     
     // Removing the first element from an empty array
     let removedItem = emptyArray.shift();
     
     console.log(emptyArray);      // Output: []
     console.log(removedItem);     // Output: undefined (no element to remove)


//  Key Points:
     //  Removes the first element of the array.
     //  Modifies the array in place, shifting all other elements down by one index.
     //  Returns the removed element.
     //  If the array is empty, shift() returns undefined.

//  Performance Consideration:
    //  While push() and pop() (for adding/removing elements at the end of an array) are typically more efficient, shift() can be slower on large arrays because it requires shifting all the remaining elements to lower indices.