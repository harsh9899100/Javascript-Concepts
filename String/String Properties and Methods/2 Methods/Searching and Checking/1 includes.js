// String includes() Method

// The includes() method checks if a given substring exists within the string. It returns true if the substring is found, and false otherwise.

// Syntax:
// string.includes(searchString, start)

// Parameters:
// searchString (required):
// - The substring you want to search for in the string.
// start (optional):
// - The position in the string at which to begin the search.
//   - Defaults to 0 (beginning of the string) if not specified.
//   - If the start value is negative, it is treated as string.length + start
//     (i.e., starts searching from the end of the string).

// Return Value:
// - true: If the searchString is found within the string.
// - false: If the searchString is not found.

// Key Points:

// Case-Sensitive:
// The includes() method is case-sensitive. It distinguishes between uppercase and lowercase characters.

// Non-Mutating:
// This method does not modify the original string. It only checks for the presence of the substring.

// Efficient for Substring Search:
// The includes() method is useful for quickly checking the presence of a substring without needing to know its exact position or index.

// Examples:

// Basic Usage:
let str1 = "Hello, world!";
console.log(str1.includes("world")); // true
console.log(str1.includes("hello")); // false (case-sensitive)

// Using with Start Position:
let str2 = "The quick brown fox jumps over the lazy dog";
console.log(str2.includes("quick", 5)); // false (searching after index 5)
console.log(str2.includes("quick", 0)); // true

// Case-Sensitive Check:
let str3 = "JavaScript is fun!";
console.log(str3.includes("javascript")); // false (case-sensitive)
console.log(str3.includes("JavaScript")); // true

// Using with an Empty String:
let str4 = "test string";
console.log(str4.includes("")); // true (every string includes the empty string)

// Use Cases:

// Checking if a Word Exists in a Sentence:
let sentence = "JavaScript is a versatile language";
if (sentence.includes("versatile")) {
  console.log("The word 'versatile' is present in the sentence.");
}

// Validating Input or Data:
let email = "user@example.com";
if (email.includes("@")) {
  console.log("Valid email address.");
} else {
  console.log("Invalid email address.");
}

// Detecting Substrings in Text Parsing:
let message = "System error: Disk space is full.";
if (message.includes("error")) {
  console.log("An error has occurred.");
}

// Comparison with Related Methods:
// ================================
/*
Method      | Description                                     | Case-Sensitive? | Mutates Original String?
-------------|-------------------------------------------------|-----------------|---------------------------
includes()   | Checks if a substring exists in a string.              | Yes               | No
indexOf()   | Finds the index of the first occurrence of a substring. | Yes               | No
search()     | Searches for a match with a regular expression.            | Yes (by default) | No
match()     | Matches a string with a regular expression.            | Yes (by default) | No
*/

// Performance Considerations:
// includes() is a fast and efficient way to check for substring presence, especially for small to medium strings. For very large strings or complex searches, consider using more advanced text search algorithms for better performance.

// The includes() method is a valuable tool for tasks like validation, searching for specific patterns within strings, and text parsing.