// String toUpperCase() Method

// The toUpperCase() method is used to convert all the characters in a string
// to uppercase.

// Syntax:
// string.toUpperCase()

// Parameters:
// The toUpperCase() method does not take any parameters.

// Return Value:
// Returns a new string with all characters converted to uppercase.
// The original string remains unchanged (strings are immutable).

// Key Points:

// Non-Mutating:
// The method does not modify the original string; it creates and returns a new string.

// Locale-Insensitive:
// Converts characters to uppercase based on default locale rules.

// Case-Insensitive Matching:
// Often used to normalize strings for comparison purposes.

// Examples:

// Basic Usage:
let str1 = "hello world";
console.log(str1.toUpperCase()); // "HELLO WORLD"

// Using with a Mixed-Case String:
let str2 = "JavaScript is Fun!";
console.log(str2.toUpperCase()); // "JAVASCRIPT IS FUN!"

// Checking Case-Insensitive Equality:
let str3 = "Hello";
let str4 = "hello";
console.log(str3.toUpperCase() === str4.toUpperCase()); // true

// Handling Non-Alphabetical Characters:
let str5 = "1234!@#abc";
console.log(str5.toUpperCase()); // "1234!@#ABC" (non-letters remain unchanged)

// Use Cases:

// Normalizing User Input:
let userInput = "yes";
if (userInput.toUpperCase() === "YES") {
    console.log("User agreed!");
}

// Transforming Text for Display:
let title = "the great gatsby";
console.log(title.toUpperCase()); // "THE GREAT GATSBY"

// Case-Insensitive Searching:
let str6 = "JavaScript is powerful";
let searchTerm = "JAVASCRIPT";
console.log(str6.toUpperCase().includes(searchTerm)); // true

// Comparison with Related Methods:
// ================================
/*
Method          | Description                               | Mutates Original String? | Locale-Sensitive?
------------------|-------------------------------------------|--------------------------|-------------------
toUpperCase()   | Converts all characters to uppercase.      | No                       | No
toLowerCase()   | Converts all characters to lowercase.      | No                       | No
toLocaleUpperCase()| Converts to uppercase based on specific locale rules.| No                       | Yes
*/

// Performance Considerations:
// - Efficient for small or moderate strings.
// - Avoid unnecessary calls if the string is already in the desired case.

// The toUpperCase() method is simple and effective for standardizing string
// capitalization, particularly in scenarios where case consistency is required
// for comparison or display.