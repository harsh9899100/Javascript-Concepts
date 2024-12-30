// String endsWith() Method

// The endsWith() method determines whether a string ends with a specified substring.

// Syntax:
// string.endsWith(searchString, length)

// Parameters:
// searchString (required):
// - The substring you want to check if the string ends with.
// length (optional):
// - The length up to which the string is considered for checking the ending substring.
//   - Defaults to the entire string length if not provided.

// Return Value:
// - true: If the string ends with the specified searchString.
// - false: If the string does not end with the searchString.

// Key Points:

// Case-Sensitive:
// The endsWith() method is case-sensitive. The casing of the searchString must match exactly for the method to return true.

// Non-Mutating:
// This method does not modify the original string. It simply checks for the presence of the substring at the end and returns a boolean value (true or false).

// Length Parameter:
// The optional `length` parameter allows you to specify a specific length of the string to check for the ending substring. This can be useful for checking suffixes within a specific portion of the string.

// Examples:

// Basic Usage:
let str1 = "Hello, world!";
console.log(str1.endsWith("world!"));  // true
console.log(str1.endsWith("hello"));   // false

// Case Sensitivity:
let str2 = "JavaScript is awesome!";
console.log(str2.endsWith("awesome!"));   // true
console.log(str2.endsWith("Awesome!"));   // false (case-sensitive)

// With length Parameter:
let str3 = "The quick brown fox";
console.log(str3.endsWith("fox", 19));   // true (checking up to index 19)
console.log(str3.endsWith("fox", 18));   // false (checking only up to index 18)

// When Substring Does Not Match:
let str4 = "Welcome to the jungle";
console.log(str4.endsWith("beach"));  // false

// Use Cases:

// Checking if a File Name Has a Specific Extension:
let fileName = "image.png";
if (fileName.endsWith(".png")) {
  console.log("The file is a PNG image.");
} else {
  console.log("The file is not a PNG image.");
}

// Validating URL Suffix:
let url = "https://www.example.com";
if (url.endsWith(".com")) {
  console.log("The URL ends with .com.");
} else {
  console.log("The URL does not end with .com.");
}

// Password Strength Validation (Suffix Matching):
let password = "mypassword123!";
if (password.endsWith("!")) {
  console.log("Password has the required exclamation mark at the end.");
} else {
  console.log("Password does not meet the requirements.");
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
// endsWith() is optimized for checking the end of a string and performs well for this task. For more complex pattern matching scenarios or if you need to check a large portion of the string, regular expressions might be a better choice.

// The endsWith() method is a valuable tool for validating suffixes in strings, making it useful for tasks like checking file extensions, URL suffixes, or ensuring passwords meet specific requirements (like having a special character at the end).