// String startsWith() Method

// The startsWith() method determines whether a string begins with a specified substring.

// Syntax:
// string.startsWith(searchString, position)

// Parameters:
// searchString (required):
// - The substring you want to check if the string starts with.
// position (optional):
// - The position in the string at which to begin the search (defaults to 0).
//   - This allows you to check if the string starts with the substring starting at a specific index.

// Return Value:
// - true: If the string starts with the specified searchString.
// - false: If the string does not start with the searchString.

// Key Points:

// Case-Sensitive:
// The startsWith() method is case-sensitive. The casing of the searchString must match exactly for the method to return true.

// Non-Mutating:
// This method does not modify the original string. It simply checks for the presence of the substring at the beginning and returns a boolean value (true or false).

// Efficient for Prefix Checking:
// startsWith() is a convenient and efficient way to quickly check if a string starts with a particular prefix.

// Examples:

// Basic Usage:
let str1 = "Hello, world!";
console.log(str1.startsWith("Hello"));  // true
console.log(str1.startsWith("world"));  // false

// Case Sensitivity:
let str2 = "JavaScript is awesome!";
console.log(str2.startsWith("java"));   // false (case-sensitive)
console.log(str2.startsWith("Java"));   // true

// With position Parameter:
let str3 = "The quick brown fox";
console.log(str3.startsWith("quick", 4)); // true (starts checking from index 4)
console.log(str3.startsWith("brown", 4)); // true (starts checking from index 4)

// When Substring Does Not Match:
let str4 = "Welcome to the jungle";
console.log(str4.startsWith("jungle"));  // false

// Use Cases:

// Checking if a String Begins with a Specific Word:
let fileName = "report.docx";
if (fileName.startsWith("report")) {
  console.log("The file is a report.");
} else {
  console.log("The file is not a report.");
}

// Validating URL Prefix:
let url = "https://www.example.com";
if (url.startsWith("https://")) {
  console.log("The URL uses a secure connection.");
}

// Prefix Matching in User Input:
let input = "prefix123";
if (input.startsWith("prefix")) {
  console.log("Valid input!");
} else {
  console.log("Invalid input!");
}

// Comparison with Related Methods:
// ================================
/*
Method      | Description                                     | Case-Sensitive? | Mutates Original String?
-------------|-------------------------------------------------|-----------------|---------------------------
includes()  | Checks if a substring exists anywhere in the string. | Yes               | No
startsWith() | Checks if a string starts with a specified substring. | Yes               | No
endsWith()  | Checks if a string ends with a specified substring. | Yes               | No
*/

// Performance Considerations:
// startsWith() is optimized for checking the beginning of a string and offers good performance for this specific purpose. However, for more complex pattern matching scenarios, using regular expressions might be a better choice.

// The startsWith() method is a valuable tool for validating prefixes in strings, making it useful for tasks like URL validation, user input validation, and checking file names or paths.