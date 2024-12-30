// String indexOf() Method

// The indexOf() method returns the index of the first occurrence of a specified substring within a string. If the substring is not found, the method returns -1.

// Syntax:
// string.indexOf(searchString, start)

// Parameters:
// searchString (required):
// - The substring you want to search for in the string.
// start (optional):
// - The position in the string at which to begin the search.
//   - Defaults to 0 (beginning of the string) if not specified.
//   - If the start value is negative, it is treated as string.length + start
//     (i.e., starts searching from the end of the string).

// Return Value:
// - The index (zero-based) of the first occurrence of the searchString within the string.
// - -1 if the searchString is not found.

// Key Points:

// Case-Sensitive:
// The indexOf() method is case-sensitive. It distinguishes between uppercase and lowercase characters.

// First Occurrence Only:
// It returns the index of the **first occurrence** of the substring. If the substring appears multiple times, only the index of the first match is returned.

// Non-Mutating:
// This method does not modify the original string. It only searches for the substring and returns the index.

// Returns -1 for Missing Substring:
// If the searchString is not found in the string, the method returns -1.

// Examples:

// Basic Usage:
let str1 = "Hello, world!";
console.log(str1.indexOf("world")); // 7
console.log(str1.indexOf("hello")); // -1 (case-sensitive)

// Using start Parameter:
let str2 = "The quick brown fox";
console.log(str2.indexOf("quick", 0)); // 4
console.log(str2.indexOf("fox", 5)); // 16 (search starts after index 5)

// Multiple Occurrences:
let str3 = "apple apple apple";
console.log(str3.indexOf("apple")); // 0 (first occurrence)

// When Substring is Not Found:
let str4 = "JavaScript";
console.log(str4.indexOf("Python")); // -1 (substring not found)

// Negative start Value:
let str5 = "Hello, world!";
console.log(str5.indexOf("world", -6)); // 7 (searching from index 7)

// Use Cases:

// Finding the Position of a Word in a Sentence:
let sentence = "Learning JavaScript is fun!";
let position = sentence.indexOf("JavaScript");
if (position !== -1) {
  console.log(`Found "JavaScript" at index ${position}`);
} else {
  console.log('Not found.');
}

// Validating Presence of Substring:
let email = "user@example.com";
if (email.indexOf("@") !== -1) {
  console.log("Valid email address.");
} else {
  console.log("Invalid email address.");
}

// Checking for Words in a Text (Case-Sensitive):
let text = "The quick brown fox.";
if (text.indexOf("quick") !== -1) {
  console.log("The word 'quick' is in the text.");
}

// Locating Multiple Occurrences with a Loop:
let strr = "JavaScript is cool. JavaScript is versatile.";
let index = 0;
while ((index = strr.indexOf("JavaScript", index)) !== -1) {
  console.log(`Found "JavaScript" at index ${index}`);
  index++; // Move past the current match
}

// Comparison with Related Methods:
// ================================
/*
Method      | Description                                     | Case-Sensitive? | Mutates Original String?
-------------|-------------------------------------------------|-----------------|---------------------------
indexOf()   | Returns the index of the first occurrence of a substring. | Yes               | No
lastIndexOf() | Returns the index of the last occurrence of a substring. | Yes               | No
includes()  | Checks if a substring exists in a string.              | Yes               | No
search()     | Searches for a match with a regular expression.            | Yes (by default) | No
*/

// Performance Considerations:
// indexOf() is efficient for searching small to medium-length strings. For very large strings or more complex patterns, regular expressions or other searching techniques might be preferred for better performance.

// The indexOf() method is a useful tool for tasks like validation, text parsing, and searching