// The find() method is used to locate the first element in an array that satisfies a given condition. If no element matches the condition, it returns undefined.

// Syntax:
// ===========================================================
   let result_s = array.find(function(element, index, array) {
       // Condition to match
   });
// ===========================================================
  
// Or using an arrow function:
// =======================================================
   let result_af = array.find((element, index, array) => {
       // Condition to match
   });
// =======================================================

// element: The current element being processed in the array.
     // index (optional): The index of the current element.
     // array (optional): The array being traversed.

// Key Points:
     // 1. Returns a Single Value: It returns the first element that satisfies the condition, not its index.
     // 2. Stops at First Match: It stops searching once it finds the first matching element.
     // 3. Non-Matching Case: If no elements satisfy the condition, it returns undefined.

// Examples:
// Example 1: Find the First Even Number
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbers = [1, 3, 7, 4, 9];

     // Finding the first even number
     let firstEven = numbers.find(num => num % 2 === 0);
     
     console.log(firstEven);  // Output: 4

// Example 2: Find an Object by Property
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let users = [
         { id: 1, name: 'Alice' },
         { id: 2, name: 'Bob' },
         { id: 3, name: 'Charlie' }
     ];
     
     // Finding the user with id = 2
     let user = users.find(user => user.id === 2);
     
     console.log(user);  // Output: { id: 2, name: 'Bob' }

// Example 3: Find an Element Greater than a Threshold
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbers2 = [10, 20, 30, 40, 50];
     
     // Find the first number greater than 25
     let result = numbers2.find(num => num > 25);
     
     console.log(result);  // Output: 30

// Example 4: Handle No Match Case
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbers3 = [1, 3, 5, 7];
     
     // Trying to find an even number
     let result2 = numbers3.find(num => num % 2 === 0);
     
     console.log(result2);  // Output: undefined

// Example 5: Using index and array Arguments
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbers4 = [10, 15, 20, 25];
     
     // Find the first number where its index is even
     let result3 = numbers4.find((num, index) => index % 2 === 0);
     
     console.log(result3);  // Output: 10

// Use Cases:
     // 1. Finding Specific Elements: Locating an element based on complex conditions.
     // 2. Working with Objects: Finding objects in an array with specific properties.
     // 3. Short-Circuit Searching: Stops searching after the first match for better performance.
     
// Difference Between find() and Similar Methods
// =============================================
/*
Method       |  Description                                                       |  Returns
-------------|--------------------------------------------------------------------|---------------------
find()       |  Finds the first element that matches the condition.               |  The element itself
findIndex()  |  Finds the index of the first element that matches the condition.  |  The index
filter()     |  Finds all elements that match the condition.                      |  A new array
*/

// Example Comparison: find() vs filter()
// ======================================
     let numbers5 = [1, 2, 3, 4, 5];
     
     // Using find()
     let firstEven2 = numbers5.find(num => num % 2 === 0);
     console.log(firstEven2);  // Output: 2
     
     // Using filter()
     let allEvens = numbers5.filter(num => num % 2 === 0);
     console.log(allEvens);  // Output: [2, 4]
