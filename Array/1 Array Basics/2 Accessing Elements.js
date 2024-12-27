// Accessing Elements : In an array, each element is stored at a specific index, starting from 0. You can access individual elements by their index. 
// You can also easily access the first or last element using specific techniques.
     // Accessing elements by index: Use array[index] to access elements at a specific position.
     // First element: The first element of an array is always at index 0, i.e., array[0].
     // Last element: The last element can be accessed using array[array.length - 1].

// Accessing Elements by Index:
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
     // Each element in an array is associated with an index, and you can retrieve the element at any index using the array[index] syntax.

     let fruits = ['apple', 'banana', 'cherry', 'date'];
     // Accessing...
     console.log(fruits[0]);  // Output: 'apple' (first element)
     console.log(fruits[1]);  // Output: 'banana' (second element)
     console.log(fruits[2]);  // Output: 'cherry' (third element)
     console.log(fruits[3]);  // Output: 'date' (fourth element)
 
// Accessing the First Element:
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
 //  To access the first element of the array, you use the index 0.
     
     let fruitss = ['apple', 'banana', 'cherry', 'date'];
     
     // First element
     console.log(fruitss[0]);  // Output: 'apple'

// Accessing the Last Element:
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
 // To access the last element of the array, you can use the array[array.length - 1] syntax. 
 // This works because array.length gives the total number of elements in the array, and subtracting 1 gives the index of the last element.

     let fruitsss = ['apple', 'banana', 'cherry', 'date'];
     
     // Last element
     console.log(fruitsss[fruitsss.length - 1]);  // Output: 'date'
