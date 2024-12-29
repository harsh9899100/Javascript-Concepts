// The filter() method creates a new array with all the elements that pass the condition specified in the callback function.
// It is commonly used to filter elements based on certain criteria.

// Syntax:
// ==============================================================================
// let newArray = array.filter(function(element, index, array) {
//     return condition; // Return true to keep the element, false to exclude it.
// });
// ==============================================================================

// Or using an arrow function:
// ==================================================================
// let newArray = array.filter((element, index, array) => condition);
// ==================================================================

//  element: The current element being processed.
     //  index (optional): The index of the current element.
     //  array (optional): The entire array being traversed.

// Key Points:
     // - Returns a New Array: Only the elements that satisfy the condition are included in the new array.
     // - Does Not Modify the Original Array.
     // - Callback Function: Should return true to keep the element and false to exclude it.
     

// Example 1: Filtering Even Numbers
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbersFilter = [1, 2, 3, 4, 5, 6];
     
     // Filtering even numbers
     let evens = numbersFilter.filter(num => num % 2 === 0);
     
     console.log(evens);    // Output: [2, 4, 6]
     console.log(numbersFilter);  // Output: [1, 2, 3, 4, 5, 6] (original array unchanged)


// Example 2: Filtering Strings by Length
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let words = ['apple', 'bat', 'banana', 'cat', 'dog'];
     
     // Words longer than 3 characters
     let longWords = words.filter(word => word.length > 3);
     
     console.log(longWords);  // Output: ['apple', 'banana']
     

// Example 3: Filtering Objects by Property
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let usersFilter = [
         { id: 1, name: 'Alice', active: true },
         { id: 2, name: 'Bob', active: false },
         { id: 3, name: 'Charlie', active: true }
     ];
     
     // Filtering active users
     let activeUsers = usersFilter.filter(user => user.active);
     
     console.log(activeUsers);
     // Output:
     // [
     //   { id: 1, name: 'Alice', active: true },
     //   { id: 3, name: 'Charlie', active: true }
     // ]


// Example 4: Removing Duplicates
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbersWithDuplicates = [1, 2, 3, 2, 4, 3, 5];
     
     // Removing duplicates
     let uniqueNumbers = numbersWithDuplicates.filter((num, index, array) => array.indexOf(num) === index);
     
     console.log(uniqueNumbers);  // Output: [1, 2, 3, 4, 5]
     

// Example 5: Filtering Undefined or Null Values
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let mixedArray = [1, undefined, 2, null, 3, '', 4];
     
     // Removing falsy values (undefined, null, '')
     let cleanedArray = mixedArray.filter(value => value != null && value !== '');
     
     console.log(cleanedArray);  // Output: [1, 2, 3, 4]
     

// Use Cases:
     // - Filtering Data: Removing unwanted items from an array (e.g., filtering active users or high scores).
     // - Validating Input: Excluding undefined, null, or invalid values.
     // - Custom Searches: Filtering elements based on user input or dynamic conditions.
     
// Difference Between filter() and map()
// ────────────────────────────────────────
// | Feature           | filter()                                   | map()                           
// |-------------------|--------------------------------------------|--------------------------------------
// | Purpose           | Extract elements that satisfy a condition  | Transform elements into a new array 
// | Return Value      | New array with elements that pass the test | A new array with transformed elements 
// | Original Array    | Not modified                               | Not modified                     

// Example Comparison
// ￣￣￣￣￣￣￣￣￣￣
     let numbersComparison = [1, 2, 3, 4, 5];
     
     // Using filter() to get numbers > 3
     let filtered = numbersComparison.filter(num => num > 3);
     console.log(filtered);  // Output: [4, 5]
     
     // Using map() to double the numbers
     let mapped = numbersComparison.map(num => num * 2);
     console.log(mapped);    // Output: [2, 4, 6, 8, 10]
