// Definition and Syntax
// ￣￣￣￣￣￣￣￣￣￣￣
// An array is a data structure in JavaScript that can store multiple values in a single variable. It allows you to work with collections of data (e.g., a list of items, numbers, strings) efficiently.

// Key Features of Arrays:
     // Arrays can hold multiple data types (e.g., numbers, strings, objects).
     // Array elements are ordered and indexed starting from 0.
     // Arrays can dynamically resize and grow as needed.
     // Syntax for Declaring an Array
     // Using Square Brackets ([]) – Array Literal Syntax.
     // Using new Array() – Array Constructor Syntax.


// 1. Creating Arrays Using [] (Array Literal) :
// ---------------------------------------------

    // Declare an array with elements
     let fruits = ["apple", "banana", "cherry"];
     
    // Access elements
     console.log(fruits[0]); // Output: apple
     console.log(fruits[1]); // Output: banana
     
    // Add a new element
     fruits[3] = "orange";
     console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]
     
    // Length of the array
     console.log(fruits.length); // Output: 4
     

// 2. Creating Arrays Using new Array() : You can use the Array constructor to create arrays, but it's less common due to potential confusion with single numbers.
// --------------------------------------

    // Create an array with predefined elements
     let colors = new Array("red", "blue", "green");
     console.log(colors); // Output: ["red", "blue", "green"]
     
    // Create an empty array
     let emptyArray = new Array();
     console.log(emptyArray); // Output: []
     
    // Create an array with a fixed size
     let fixedSizeArray = new Array(5);
     console.log(fixedSizeArray); // Output: [empty × 5] --> If a single number is passed to new Array(), it creates an empty array with that length.
     
    // Add elements to the fixed size array
     fixedSizeArray[0] = "one";
     console.log(fixedSizeArray); // Output: ["one", empty × 4]


//  Best Practices
     // Use the array literal syntax ([]) unless you need a specific feature of the constructor.
     // Avoid new Array(size) unless you intend to create an array of a specific length.