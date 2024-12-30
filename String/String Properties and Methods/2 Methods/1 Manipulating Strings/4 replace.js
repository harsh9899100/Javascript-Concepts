// String replace() Method

// The replace() method is used to return a new string where the first
// occurrence (or all occurrences with a flag) of a specified pattern is
// replaced with a new substring.

// Syntax:
// string.replace(searchValue, newValue)

// Parameters:
// searchValue (required):
//  - A substring or a regular expression that specifies what to search for.
//  - Only the first occurrence is replaced unless a global (g) flag is used in a regex.
// newValue (required):
//  - The string or function that specifies the replacement value.
//  - Can include special patterns like $& (matched substring), $1, $2 (capturing groups), and more.

// Key Points:

// Non-Mutating:
// replace() does not modify the original string but returns a new string.

// Regular Expressions:
// Use regular expressions for advanced pattern matching.
// Flags like g (global) and i (case-insensitive) extend functionality.

// Replacement Functions:
// Dynamic replacements can be made using a callback function for newValue.

// Examples:

// Basic Usage:
let str1 = "Hello, World!";
console.log(str1.replace("World", "JavaScript")); // "Hello, JavaScript!"

// Case Sensitivity:
let str2 = "Hello, World!";
console.log(str2.replace("world", "JavaScript")); // "Hello, World!" (case-sensitive)

// Using Regular Expressions:
let str3 = "apple, banana, apple";
console.log(str3.replace(/apple/, "orange")); // "orange, banana, apple" (replaces first match only)

// Global Replacement with Regex:
let str4 = "apple, banana, apple";
console.log(str4.replace(/apple/g, "orange")); // "orange, banana, orange"

// Using Special Patterns in newValue:
let str5 = "JavaScript is fun!";
console.log(str5.replace(/(Java)(Script)/, "$2$1")); // "ScriptJava is fun!" (reverses matched groups)

// Dynamic Replacement with Functions:
let str6 = "Hello, World!";
console.log(str6.replace("World", (match) => match.toUpperCase())); // "Hello, WORLD!"

// Replace Characters with Unicode Support:
let str7 = "café";
console.log(str7.replace(/é/, "e")); // "cafe"

// Common Use Cases:

// Simple String Replacement:
let url = "http://example.com";
let secureUrl = url.replace("http", "https");
console.log(secureUrl); // "https://example.com"

// Replacing All Matches in a String:
let str8 = "banana, apple, banana";
console.log(str8.replace(/banana/g, "orange")); // "orange, apple, orange"

// Formatting Text:
let text = "The price is $10";
console.log(text.replace("$10", "$15")); // "The price is $15"

// Swapping Words:
let str9 = "FirstName LastName";
console.log(str9.replace(/(FirstName) (LastName)/, "$2, $1")); // "LastName, FirstName"

// Dynamic Replacements with Functions:
let str10 = "I scored 5/10.";
let newStr = str10.replace(/\d+/g, (num) => parseInt(num) * 2);
console.log(newStr); // "I scored 10/20."

// Comparison with Similar Methods:
// ================================
/*
Method      | Description                                     | Mutates Original String? | Handles Regex?
-------------|-------------------------------------------------|--------------------------|----------------------------
replace()   | Replaces the first match or all matches with regex. | No                       | Yes
replaceAll() | Replaces all matches of a string or regex.       | No                       | Yes
*/

// Performance Considerations:
// - Use simple strings for small replacements.
// - Use regex with g for multiple replacements in one pass.
// - For complex logic, leverage callback functions in the newValue parameter.

// The replace() method is a versatile tool for text substitution, supporting
// everything from basic replacements to advanced pattern matching with dynamic logic.