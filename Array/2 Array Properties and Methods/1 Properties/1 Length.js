// Property: length
// The length property of an array returns the number of elements in the array. It is a built-in property that provides the total number of items stored in the array. The length is always one more than the highest index in the array, as indices are zero-based.

// Usage of length Property:
     // Accessing the Length of an Array: array.length
     // Modifying the Length: You can also modify the length property to add or remove elements (though this is not a common practice for dynamic array manipulation).

// Example 1: Accessing the Length :
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣

     let fruits = ['apple', 'banana', 'cherry', 'date'];
     
     // Accessing the length of the array
     console.log(fruits.length);  // Output: 4
     
// Example 2: Modifying the Length : You can set the length property to shorten the array or to remove elements. If you set the length to a value smaller than the current length, elements will be truncated from the end.
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣

     let fruitss = ['apple', 'banana', 'cherry', 'date'];

     // Reducing the length of the array (removes elements from the end)
     fruitss.length = 2;
     
     console.log(fruitss);  // Output: ['apple', 'banana']

//  Example 3: Adding Elements by Modifying Length : You can also increase the length of the array by setting length to a larger value. This will add empty slots (undefined elements) to the array.
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣

     let fruitsss = ['apple', 'banana'];
     
     // Increasing the length of the array
     fruitsss.length = 5;
     
     console.log(fruitsss);  // Output: ['apple', 'banana', <3 empty slots>]

//  length property gives you the number of elements in the array.
//  length is automatically updated when elements are added or removed from the array.
//  Modifying the length property can be used to trim or expand the array, but this can lead to unexpected results when not carefully managed (e.g., adding empty slots).
