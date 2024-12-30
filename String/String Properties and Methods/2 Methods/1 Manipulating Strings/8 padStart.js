// String padStart() Method

// The padStart() method pads the current string with a specified string
// (repeated, if necessary) until the string reaches a given length. Padding
// is added to the beginning (start) of the string.

// Syntax:
// string.padStart(targetLength, padString)

// Parameters:
// targetLength (required):
// - The desired length of the resulting string after padding.
// - If the targetLength is less than the length of the original string,
//   the string is returned as is (no padding added).
// padString (optional):
// - The string to pad the original string with.
// - The default is " " (space), and it will repeat if necessary to achieve
//   the desired length.
// - If padString is longer than the remaining space to reach targetLength,
//   it will be truncated to fit.

// Return Value:
// A new string, padded from the start, with the length equal to targetLength.

// Key Points:

// Non-Mutating:
// The method returns a new string without modifying the original string.

// Padding String Repetition:
// The padString is repeated if its length is shorter than the space required.

// Truncating Padding String:
// If padString exceeds the remaining space, it is truncated to fit within the length.

// Examples:

// Basic Usage:
let str1 = "42";
console.log(str1.padStart(5, "0")); // "00042"

// Padding with Default Spaces:
let str2 = "JavaScript";
console.log(str2.padStart(15)); // "   JavaScript"

// Padding with Custom String:
let str3 = "A";
console.log(str3.padStart(5, "*")); // "***A"

// Padding with a Longer String:
let str4 = "5";
console.log(str4.padStart(8, "abc")); // "abcabca5"

// Target Length Smaller Than Original String:
let str5 = "Hello";
console.log(str5.padStart(3)); // "Hello" (no padding since targetLength < string length)

// Use Cases:

// Formatting Numbers (e.g., to fit a certain width):
let number = "7";
console.log(number.padStart(3, "0")); // "007"

// Aligning Text for Display or Output:
let productCode = "42";
let paddedCode = productCode.padStart(8, "0");
console.log(paddedCode); // "00000042"

// Adding Leading Zeros to Date or Time:
let hours = "9";
console.log(hours.padStart(2, "0")); // "09"

// Formatting Identifiers or Code:
let orderId = "123";
console.log(orderId.padStart(10, "0")); // "0000000123"

// Comparison with Related Methods:
// ================================
/*
Method    | Description                                       | Mutates Original String? | Pad Location
-----------|---------------------------------------------------|--------------------------|-------------
padStart() | Pads the string from the start with a specified string.| No                       | Start (Beginning)
padEnd()   | Pads the string from the end with a specified string.  | No                       | End (Tail)
*/

// Performance Considerations:
// - Useful for formatting output, but avoid unnecessary padding for already
//   appropriately-sized strings to minimize overhead.

// The padStart() method is a great tool for ensuring string alignment or
// ensuring consistent string lengths, especially in contexts like formatting
// dates, numbers, or any identifiers that need leading zeros or fixed lengths.