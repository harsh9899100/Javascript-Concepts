// The pop() method is used to remove the last element from an array. It modifies the original array and returns the element that was removed.

// Syntax:
     
     // let removedElement = array.pop();

// Return Value:
     
     // The pop() method returns the removed element. If the array is empty, it returns undefined.

// Example 1 : Removing a single Element
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruits = ['apple', 'banana', 'cherry', 'date'];
     
     // Removing the last element from the array
     let removedFruit = fruits.pop();
     
     console.log(fruits);        // Output: ['apple', 'banana', 'cherry']
     console.log(removedFruit);  // Output: 'date' (the removed element)


// Example 2: Removing an Element from an Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbers = [1, 2, 3, 4, 5];
     
     // Removing the last element
     
     let removedNumber = numbers.pop();
     
     console.log(numbers);        // Output: [1, 2, 3, 4]
     console.log(removedNumber);  // Output: 5 (the removed element)


// Example 3: Using pop() on an Empty Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣     
     let emptyArray = [];
     
     // Removing the last element from an empty array
     let removedItem = emptyArray.pop();
     
     console.log(emptyArray);      // Output: []
     console.log(removedItem);     // Output: undefined (no element to remove)

     
// Key Points:
     // Modifies the array in place by removing the last element.
     // Returns the removed element.
     // If the array is empty, pop() returns undefined.
     // Efficient: pop() is an O(1) operation, meaning it operates in constant time, regardless of the array size.