// The concat() method is used to merge two or more arrays into a new array. It does not modify the original arrays but instead returns a new array containing the combined elements.

// Syntax:

     // let newArray = array1.concat(array2, array3, ..., arrayN);

//  Return Value:
    //  The concat() method returns a new array that contains the elements of the original array and the additional arrays or values.

// Merging Two Arrays
// ￣￣￣￣￣￣￣￣￣￣
 
     let fruits = ['apple', 'banana'];
     let berries = ['strawberry', 'blueberry'];
     
// Concatenating two arrays
// ￣￣￣￣￣￣￣￣￣￣￣￣￣
     let combinedFruits = fruits.concat(berries);
     
     console.log(fruits);           // Output: ['apple', 'banana'] (original array is unchanged)
     console.log(berries);          // Output: ['strawberry', 'blueberry']
     console.log(combinedFruits);   // Output: ['apple', 'banana', 'strawberry', 'blueberry']

// Adding Individual Elements
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruitss = ['apple', 'banana'];
     
     // Adding single elements to the array
     let moreFruits = fruitss.concat('cherry', 'date');
     
     console.log(fruitss);          // Output: ['apple', 'banana']
     console.log(moreFruits);      // Output: ['apple', 'banana', 'cherry', 'date']

// Merging Multiple Arrays
// ￣￣￣￣￣￣￣￣￣￣￣￣￣
     let fruitsss = ['apple', 'banana'];
     let berriesss = ['strawberry', 'blueberry'];
     let tropicalFruits = ['mango', 'pineapple'];
     
     // Concatenating multiple arrays
     let allFruits = fruitsss.concat(berriesss, tropicalFruits);
     
     console.log(allFruits);  // Output: ['apple', 'banana', 'strawberry', 'blueberry', 'mango', 'p

// Nested Arrays
// ￣￣￣￣￣￣￣
     let array1 = [1, 2];
     let array2 = [[3, 4]];
     
     // Concatenating nested arrays
     let result = array1.concat(array2);
     
     console.log(result);  // Output: [1, 2, [3, 4]]


    //  Key Points:
    //  concat() does not modify the original arrays; it returns a new array.
    //  It can combine arrays and individual elements.
    //  Nested arrays are not flattened—they are added as-is.


// ⭐ Alternative Using Spread Operator (...):
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
    // The spread operator (...) can also be used to merge arrays, often in a more concise way:
    
    let fruitssss = ['apple', 'banana'];
    let berriessss = ['strawberry', 'blueberry'];
    
    let combinedFruitssss = [...fruitssss, ...berriessss];
    
    console.log(combinedFruitssss);  // Output: ['apple', 'banana', 'strawberry', 'blueberry']