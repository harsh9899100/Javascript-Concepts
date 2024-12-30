// String lastIndexOf() Method

// The lastIndexOf() method returns the index of the last occurrence of a specified substring within the string. The search starts from the end of the string and works its way backwards.

// Syntax:
// string.lastIndexOf(searchString, start)

// Parameters:
// searchString (required):
// - The substring you want to search for in the string.
// start (optional):
// - The position in the string at which to begin the search.
//   - Defaults to string.length - 1 (the last index of the string) if not specified.
//   - If the start value is negative, it is treated as string.length + start
//     (i.e., searches backwards from a specific index).

// Return Value:
// - The last index (zero-based) of the last occurrence of the searchString within the string.
// - -1 if the searchString is not found.

// Key Points:

// Case-Sensitive:
// The lastIndexOf() method is case-sensitive. It distinguishes between uppercase and lowercase characters.

// Last Occurrence Only:
// Unlike indexOf() which returns the first occurrence, lastIndexOf() returns the index of the **last occurrence** of the substring.

// Non-Mutating:
// This method does not modify the original string. It only searches for the substring and returns the index.

// Returns -1 for Missing Substring:
// If the searchString is not found in the string, the method returns -1.

// Examples:

// Basic Usage:
let str1 = "Hello, world! Hello, universe!";
console.log(str1.lastIndexOf("Hello")); // 13 (last occurrence of "Hello")
console.log(str1.lastIndexOf("hello")); // -1 (case-sensitive)

// Using start Parameter:
let str2 = "The quick brown fox";
console.log(str2.lastIndexOf("quick", 10)); // 4 (search starts before index 10)
console.log(str2.lastIndexOf("fox", 5)); // -1 (search stops before index 5)

// Multiple Occurrences:
let str3 = "apple orange apple apple";
console.log(str3.lastIndexOf("apple")); // 17 (last occurrence)

// When Substring is Not Found:
let str4 = "JavaScript";
console.log(str4.lastIndexOf("Python")); // -1 (substring not found)

// Negative start Value:
let str5 = "Hello, world!";
console.log(str5.lastIndexOf("world", -6)); // 7 (search from index 7, treating it as string.length + (-6))

// Use Cases:

// Finding the Last Occurrence of a Word in a Sentence:
let sentence = "Learning JavaScript is fun, JavaScript is powerful!";
let position = sentence.lastIndexOf("JavaScript");
if (position !== -1) {
  console.log(`Found "JavaScript" at index ${position}`);
} else {
  console.log('Not found.');
}

// Validating Email Domain:
let email = "user@example.com";
if (email.lastIndexOf("@example.com") !== -1) {
  console.log("Valid email domain.");
} else {
  console.log("Invalid email domain.");
}

// Locating Multiple Occurrences with a Loop (Reverse Search):
let str = "JavaScript is awesome. JavaScript is versatile.";
let index = str.length;
while ((index = str.lastIndexOf("JavaScript", index - 1)) !== -1) {
  console.log(`Found "JavaScript" at index ${index}`);
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
match()     | Matches a string with a regular expression.            | Yes (by default) | No
*/

// Performance Considerations:
// lastIndexOf() is efficient for searching from the end of small to medium-length strings. For very large strings or more complex patterns, regular expressions or other searching techniques might be preferred for better performance.

// The lastIndexOf() method is