// The forEach() method is used to iterate through each element in an array and execute a callback function for each 
// element. It’s commonly used for looping through an array when you need to perform an operation on each element.

// Syntax:

     // array.forEach(function(element, index, array) {
     //     // Your code here
     // });

//  element: The current element being processed in the array.
//  index (optional): The index of the current element.
//  array (optional): The entire array being traversed.

// Alternatively, you can use an arrow function:

     // array.forEach((element, index, array) => {
     //     // Your code here
     // });

// Example 1: Basic Iteration
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbers = [1, 2, 3, 4, 5];
          
     // Logging each element to the console
     numbers.forEach((num) => {
         console.log(num);
     });
     // Output:
     // 1
     // 2
     // 3
     // 4
     // 5


// Example 2: Using index
// ￣￣￣￣￣￣￣￣￣￣￣￣
     let fruits = ['apple', 'banana', 'cherry'];
     
     // Logging element and its index
     fruits.forEach((fruit, index) => {
         console.log(`${index}: ${fruit}`);
     });
     // Output:
     // 0: apple
     // 1: banana
     // 2: cherry
     
     
// Example 3: Modifying External Variables
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let numbersss = [1, 2, 3, 4, 5];
     let sum = 0;
     
     // Calculating the sum of the array elements
     numbersss.forEach((num) => {
         sum += num;
     });
     
     console.log(sum);  // Output: 15


//  Example 4: Accessing the Original Array
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let numberssss = [2, 4, 6, 8];

// Logging the original array along with the current element
     numberssss.forEach((num, index, array) => {
         console.log(`Element: ${num}, Array: ${array}`);
     });
     // Output:
     // Element: 2, Array: 2,4,6,8
     // Element: 4, Array: 2,4,6,8
     // Element: 6, Array: 2,4,6,8
     // Element: 8, Array: 2,4,6,8
     
//  Limitations of forEach()
//  Cannot Break or Continue: You cannot break out of a forEach() loop. For scenarios where breaking or skipping is required, use a for loop or for...of.
//  No Return Value: The result of the callback function isn’t stored or returned by forEach().

// Alternative: Using for...of : If you need to break out of a loop, consider using a for...of loop:
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let nnumbers = [1, 2, 3, 4, 5];
     
     for (let nnum of nnumbers) {
         if (nnum === 3) break;  // Stops the loop
         console.log(nnum);
     }
     // Output:
     // 1
     // 2
