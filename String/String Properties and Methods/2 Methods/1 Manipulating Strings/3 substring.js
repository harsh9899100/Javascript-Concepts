// String substring() Method

// The substring() method extracts characters from a string between two
// specified indexes and returns the result as a new string.

// Syntax:
// string.substring(startIndex, endIndex)

// Parameters:
// startIndex (required):
// The starting index of the substring (inclusive).
// If negative or NaN, it is treated as 0.
// endIndex (optional):
// The ending index of the substring (exclusive).
// If omitted, the substring extends to the end of the string.
// If negative or NaN, it is treated as 0.

// Key Points:

// Non-Mutating:
// substring() does not alter the original string. It returns a new string.

// Order of Parameters:
// If startIndex is greater than endIndex, the method swaps them.
let str1 = "Hello, World!";
console.log(str1.substring(8, 5)); // "o, "

// Negative Values are Treated as 0:
// Unlike slice(), negative indexes are not supported.
let str2 = "JavaScript";
console.log(str2.substring(-3, 5)); // "JavaS"

// Examples:

// Basic Usage:
let str3 = "JavaScript";
console.log(str3.substring(0, 4)); // "Java"
console.log(str3.substring(4));    // "Script"

// Swapping Indices Automatically:
let str4 = "Hello, World!";
console.log(str4.substring(8, 5)); // "o, "

// Handling Negative or NaN Values:
let str5 = "JavaScript";
console.log(str5.substring(-2, 4)); // "Java" (Negative values treated as 0)
console.log(str5.substring(4, NaN)); // "" (NaN treated as 0)

// Extracting the Rest of the String:
let str6 = "Programming";
console.log(str6.substring(3)); // "gramming"

// Extracting a Single Character:
let str7 = "Hello";
console.log(str7.substring(1, 2)); // "e"

// Common Use Cases:

// Extracting Specific Parts of a String:
let str8 = "filename.txt";
let name = str8.substring(0, str8.indexOf("."));
console.log(name); // "filename"

// Getting Characters from Start to Middle:
let str9 = "abcdef";
console.log(str9.substring(0, str9.length / 2)); // "abc"

// Extracting Dynamic Sections of a String:
let str10 = "1234567890";
let start = 3, end = 7;
console.log(str10.substring(start, end)); // "4567"

// Comparison with Similar Methods:
// ================================
/*
Method      | Description                                     | Mutates Original String? | Supports Negative Indexes?
-------------|-------------------------------------------------|--------------------------|----------------------------
substring() | Extracts characters between two specified indexes. | No                       | No
slice()     | Extracts characters, supports negative indexes.     | No                       | Yes
substr()    | Extracts characters based on a starting index and length.| No                       | Yes
*/

// Key Differences Between slice() and substring():
// ===============================================
/*
Feature           | substring()                                  | slice()
-------------------|----------------------------------------------|-------------------------
Negative Index Support| No                                         | Yes
Index Order Reversal| Swaps start and end if needed                | Does not swap indexes
Use Case          | Simple substring extraction                  | More robust, supports flexible ranges
*/

// Performance Considerations:
// Use substring() for readability when working with strictly positive indexes.
// Prefer slice() for advanced use cases involving negative indexes.

// The substring() method is a straightforward tool for extracting parts of
// strings and is particularly useful for scenarios where index bounds are
// positive or need automatic adjustment.