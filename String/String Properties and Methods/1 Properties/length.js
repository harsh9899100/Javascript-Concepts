// String Length Property

// The length property in JavaScript returns the number of characters in a string,
// including spaces, punctuation, and special characters. It is a read-only property.

// Syntax:
// string.length

// Key Points:

// Counts All Characters:
// Includes letters, numbers, spaces, symbols, and even escape sequences like
// \n (newlines) and \t (tabs).
let str1 = "Hello, World!";
console.log(str1.length); // 13 (includes space and punctuation)

// 1-Based Length, Not Index:
// The length value starts counting from 1, while string indexes are zero-based.
// For example:
// A string "Hello" has a length of 5.
// The last character is accessed using string[string.length - 1].
let str2 = "JavaScript";
console.log(str2.length);        // 10
console.log(str2[str2.length - 1]); // "t" (last character)

// Dynamic Property:
// Updates automatically when the string changes.
let str3 = "Hi";
console.log(str3.length); // 2
str3 += " there!";
console.log(str3.length); // 9

// Does Not Include Null-Terminator:
// Unlike some languages (e.g., C), JavaScript strings do not include a
// null-terminator in the length count.

// Examples:

// Basic Usage:
let message = "Hello!";
console.log(message.length); // 6

// String with Spaces:
let spaced = "   ";
console.log(spaced.length); // 3

// Empty String:
let empty = "";
console.log(empty.length); // 0

// Using length in Loops:
let str4 = "Loop this";
for (let i = 0; i < str4.length; i++) {
    console.log(str4[i]); // Logs each character
}

// Handling Special Characters:
let special = "Line 1\nLine 2\tTab";
console.log(special.length); // 17 (includes \n and \t as single characters)

// Common Use Cases:

// Check for Empty Strings:
let str5 = "";
if (str5.length === 0) {
    console.log("String is empty!");
}

// Iterate Over Characters:
let text = "Iterate";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]); // Logs each character
}

// Limit Input Length:
function isTooLong(input) {
    return input.length > 10; // Example length limit
}
console.log(isTooLong("Short")); // false
console.log(isTooLong("This is too long")); // true

// Comparison of String Length Scenarios:
// ===================================
/*
String          | Code                      | Length | Notes
------------------|---------------------------|--------|----------------------------------------
"Hello, World!"  | "Hello, World!".length    | 13     | Counts all characters including spaces.
"   "            | "   ".length             | 3      | A single space counts as one character.
""              | "".length               | 0      | An empty string has a length of zero.
"Line\nTab\tEnd"| "Line\nTab\tEnd".length | 14     | Escape sequences count as one character.
*/