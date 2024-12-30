// String toLowerCase() Method

// The toLowerCase() method is used to convert all the characters in a string
// to lowercase.

// Syntax:
// string.toLowerCase()

// Parameters:
// The toLowerCase() method does not take any parameters.

// Return Value:
// Returns a new string with all characters converted to lowercase.
// The original string remains unchanged (strings are immutable).

// Key Points:

// Non-Mutating:
// The method does not modify the original string; it creates and returns a new string.

// Locale-Insensitive:
// Converts characters to lowercase based on default locale rules.

// Case-Insensitive Matching:
// Often used to normalize strings for comparison purposes.

// Examples:

// Basic Usage:
let str1 = "HELLO WORLD";
console.log(str1.toLowerCase()); // "hello world"

// Using with a Mixed-Case String:
let str2 = "JavaScript Is Fun!";
console.log(str2.toLowerCase()); // "javascript is fun!"

// Checking Case-Insensitive Equality:
let str3 = "Hello";
let str4 = "HELLO";
console.log(str3.toLowerCase() === str4.toLowerCase()); // true

// Handling Non-Alphabetical Characters:
let str5 = "1234!@#ABC";
console.log(str5.toLowerCase()); // "1234!@#abc" (non-letters remain unchanged)

// Use Cases:

// Normalizing User Input:
let userInput = "YES";
if (userInput.toLowerCase() === "yes") {
    console.log("User agreed!");
}

// Transforming Text for Display:
let title = "The GREAT Gatsby";
console.log(title.toLowerCase()); // "the great gatsby"

// Case-Insensitive Searching:
let str6 = "JavaScript is powerful";
let searchTerm = "javascript";
console.log(str6.toLowerCase().includes(searchTerm)); // true

// Comparison with Related Methods:
// ================================
/*
Method          | Description                               | Mutates Original String? | Locale-Sensitive?
------------------|-------------------------------------------|--------------------------|-------------------
toLowerCase()   | Converts all characters to lowercase.      | No                       | No
toUpperCase()   | Converts all characters to uppercase.      | No                       | No
toLocaleLowerCase()| Converts to lowercase based on specific locale rules.| No                       | Yes
*/

// Performance Considerations:
// - Efficient for small or moderate strings.
// - Avoid unnecessary calls if the string is already in the desired case.

// The toLowerCase() method is a straightforward way to standardize text to
// lowercase, particularly useful in case-insensitive comparisons and
// preparing strings for display in consistent formats.