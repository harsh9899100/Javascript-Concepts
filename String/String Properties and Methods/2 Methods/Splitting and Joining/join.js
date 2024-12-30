// Array join() Method (Note: This is an Array method, not a String method)

// The join() method combines the elements of an array into a single string,
// with an optional delimiter (separator) between each element.

// Syntax:
// array.join(separator)

// Parameters:
// separator (optional):
// - The string to separate each array element.
//   - If omitted, the default separator is a comma (",").
//   - If an empty string ("") is used, the array elements are concatenated
//     without any separator.

// Return Value:
// A string consisting of all the array elements joined together, with the
// separator between each element.

// Key Points:

// Non-Mutating:
// The join() method does not modify the original array. It creates and
// returns a new string.

// Custom Separator:
// You can specify a custom separator, such as a space, comma, hyphen, etc.

// Empty Arrays:
// If the array is empty, join() returns an empty string.

// Examples:

// Basic Usage:
let arr1 = ["apple", "banana", "cherry"];
let str1 = arr1.join(", ");
console.log(str1);  // "apple, banana, cherry"

// Using an Empty String as Separator:
let arr2 = ["a", "b", "c"];
let str2 = arr2.join("");
console.log(str2);  // "abc"

// With Default Separator (Comma):
let arr3 = ["John", "Doe", "2024"];
let str3 = arr3.join();
console.log(str3);  // "John,Doe,2024" (comma is used by default)

// Custom Separator (Hyphen):
let arr4 = ["2024", "12", "30"];
let str4 = arr4.join("-");
console.log(str4);  // "2024-12-30"

// Empty Array:
let arr5 = [];
let str5 = arr5.join(", ");
console.log(str5);  // ""

// Use Cases:

// Combining Words into a Sentence:
let words = ["The", "quick", "brown", "fox"];
let sentence = words.join(" ");
console.log(sentence);  // "The quick brown fox"

// Creating a CSV (Comma-Separated Values):
let data = ["Name", "Age", "Location"];
let csv = data.join(",");
console.log(csv);  // "Name,Age,Location"

// Path Concatenation:
let path = ["home", "user", "documents", "file.txt"];
let fullPath = path.join("/");
console.log(fullPath);  // "home/user/documents/file.txt"

// Comparison with Related Methods:
// ================================
/*
Method    | Description                                                     | Mutates Original Array? | Return Type
-----------|-----------------------------------------------------------------|--------------------------|-------------
join()    | Joins array elements into a string with a specified separator. | No                       | String
concat()  | Combines multiple arrays or values into a new array.             | No                       | Array
toString()| Returns a string representation of an array.                  | No                       | String
*/

// Performance Considerations:
// join() is efficient for converting array elements into a string, especially
// when working with arrays that contain simple values (like numbers or strings).
// However, when dealing with very large arrays, the performance may vary
// slightly depending on the size of the separator.

// The join() method is extremely useful for array-to-string conversions and
// when you need to format or combine elements with a custom delimiter, making
// it ideal for tasks like creating CSV strings, building URLs, or combining sentences.