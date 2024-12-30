// String slice() Method

// The slice() method extracts a section of a string and returns it as a new
// string, without modifying the original string.

// Syntax:
// string.slice(startIndex, endIndex)

// Parameters:
// startIndex (required):
// The position where extraction begins (zero-based).
// If negative, it starts from the end of the string, with -1 referring to the last character.
// endIndex (optional):
// The position where extraction stops (up to but not including this index).
// If omitted, the slice extends to the end of the string.
// If negative, it counts backward from the end of the string.

// Key Points:

// Non-Mutating:
// slice() does not modify the original string. It creates a new string.

// Supports Negative Indexes:
// Allows flexible slicing from the end of the string.
let str1 = "Hello, World!";
console.log(str1.slice(-6, -1)); // "World"

// Default Behavior:
// If no endIndex is specified, the slice continues to the end of the string.
let str2 = "JavaScript";
console.log(str2.slice(4)); // "Script"

// Examples:

// Extracting a Substring by Index:
let str3 = "Hello, World!";
console.log(str3.slice(0, 5)); // "Hello"
console.log(str3.slice(7, 12)); // "World"

// Using Negative Indexes:
let str4 = "JavaScript";
console.log(str4.slice(-6)); // "Script"
console.log(str4.slice(-10, -6)); // "Java"

// Omitting endIndex:
let str5 = "Programming";
console.log(str5.slice(3)); // "gramming"

// Extracting the Last Character:
let str6 = "Hello";
console.log(str6.slice(-1)); // "o"

// When startIndex Equals endIndex:
let str7 = "Test";
console.log(str7.slice(2, 2)); // "" (empty string)

// When startIndex is Greater than endIndex:
let str8 = "Example";
console.log(str8.slice(5, 3)); // "" (empty string)

// Common Use Cases:

// Extracting Specific Parts of a String:
let fileName = "document.pdf";
let extension = fileName.slice(fileName.indexOf(".") + 1);
console.log(extension); // "pdf"

// Trimming Unwanted Characters:
let phoneNumber = "(123) 456-7890";
console.log(phoneNumber.slice(1, -1)); // "123) 456-789"

// Extracting Substrings Dynamically:
let str9 = "abcdef";
let start = 2, end = 5;
console.log(str9.slice(start, end)); // "cde"

// Extracting from the End:
let str10 = "Hello, World!";
console.log(str10.slice(-6, -1)); // "World"

// Comparison with Similar Methods:
// ================================
/*
Method      | Description                                     | Mutates Original String? | Supports Negative Indexes?
-------------|-------------------------------------------------|--------------------------|----------------------------
slice()     | Extracts part of a string into a new string.     | No                       | Yes
substring() | Similar to slice() but does not support negative indexes. | No                       | No
substr()    | Extracts part of a string based on length.       | No                       | Yes
*/

// Performance Considerations:
// Efficient Substring Extraction:
// slice() is ideal for extracting parts of strings without modifying the original.
// Use it for readability and compatibility in modern JavaScript environments.

// The slice() method is versatile and widely used for string manipulation,
// offering robust options with its support for negative indexes and flexible slicing.