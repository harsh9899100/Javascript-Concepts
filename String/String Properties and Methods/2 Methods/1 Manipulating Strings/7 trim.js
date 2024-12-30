// String trim() Method

// The trim() method removes whitespace from both ends of a string. Whitespace
// includes spaces, tabs, and other whitespace characters like newlines.

// Syntax:
// string.trim()

// Parameters:
// The trim() method does not take any parameters.

// Return Value:
// Returns a new string with leading and trailing whitespace removed.
// The original string remains unchanged (strings are immutable).

// Key Points:

// Non-Mutating:
// The method creates and returns a new string without modifying the original.

// Whitespace Definition:
// Removes all leading and trailing whitespace characters, such as spaces ( ),
// tabs (\t), and newlines (\n).

// Does Not Affect Inner Whitespace:
// Whitespace within the string (not at the start or end) is left untouched.

// Examples:

// Basic Usage:
let str1 = "   Hello World!   ";
console.log(str1.trim()); // "Hello World!"

// Removing Only Leading or Trailing Whitespace:
// For specific cases, use trimStart() or trimEnd().
let str2 = "   Hello World!   ";
console.log(str2.trimStart()); // "Hello World!   "
console.log(str2.trimEnd());   // "   Hello World!"

// Handling Empty Strings or Strings Without Whitespace:
let emptyStr = "";
console.log(emptyStr.trim()); // ""
let noWhitespace = "Hello";
console.log(noWhitespace.trim()); // "Hello"

// Combining with Other Methods:
let userInput = "   JavaScript   ";
console.log(userInput.trim().toUpperCase()); // "JAVASCRIPT"

// Use Cases:

// Cleaning User Input:
let username = "   john_doe   ";
if (username.trim() === "john_doe") {
    console.log("Username is valid!");
}

// Formatting Output:
let message = "   Error: Invalid input.   ";
console.log(message.trim()); // "Error: Invalid input."

// Comparing Strings with Leading/Trailing Spaces:
let str3 = "hello ";
let str4 = "hello";
console.log(str3.trim() === str4); // true

// Comparison with Related Methods:
// ================================
/*
Method      | Description                                     | Mutates Original String? | Scope
-------------|-------------------------------------------------|--------------------------|----------------------
trim()      | Removes whitespace from both ends of the string. | No                       | Both leading and trailing
trimStart() | Removes whitespace from the start of the string. | No                       | Leading only
trimEnd()   | Removes whitespace from the end of the string.   | No                       | Trailing only
*/

// Performance Considerations:
// - Efficient for standard string operations.
// - Avoid redundant trimming if the string has already been processed.

// The trim() method is essential for sanitizing and formatting strings,
// especially when handling user input or displaying data in a clean
// and readable manner.