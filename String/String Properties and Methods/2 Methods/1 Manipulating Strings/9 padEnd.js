// String padEnd() Method

// The padEnd() method pads the current string with a specified string
// (repeated if necessary) until the string reaches a given length. Padding
// is added to the end (tail) of the string.

// Syntax:
// string.padEnd(targetLength, padString)

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
// A new string, padded from the end, with the length equal to targetLength.

// Key Points:

// Non-Mutating:
// The method returns a new string, leaving the original string unchanged.

// Padding String Repetition:
// The padString is repeated if its length is shorter than the space required.

// Truncating Padding String:
// If padString exceeds the remaining space, it is truncated to fit.

// Examples:

// Basic Usage:
let str1 = "42";
console.log(str1.padEnd(5, "0")); // "42000"

// Padding with Default Spaces:
let str2 = "JavaScript";
console.log(str2.padEnd(15)); // "JavaScript   "

// Padding with Custom String:
let str3 = "A";
console.log(str3.padEnd(5, "*")); // "A****"

// Padding with a Longer String:
let str4 = "5";
console.log(str4.padEnd(8, "abc")); // "5abcabca"

// Target Length Smaller Than Original String:
let str5 = "Hello";
console.log(str5.padEnd(3)); // "Hello" (no padding since targetLength < string length)

// Use Cases:

// Formatting Numbers or Codes:
let number = "5";
console.log(number.padEnd(3, "0")); // "500"

// Aligning Text for Display or Output:
let productName = "Apple";
let paddedName = productName.padEnd(10, ".");
console.log(paddedName); // "Apple....."

// Formatting Date or Time:
let minutes = "9";
console.log(minutes.padEnd(2, "0")); // "90"

// Ensuring Consistent String Lengths:
let orderNumber = "123";
console.log(orderNumber.padEnd(10, "0")); // "1230000000"

// Comparison with Related Methods:
// ================================
/*
Method    | Description                                       | Mutates Original String? | Pad Location
-----------|---------------------------------------------------|--------------------------|-------------
padEnd()   | Pads the string from the end with a specified string.  | No                       | End (Tail)
padStart() | Pads the string from the start with a specified string.| No                       | Start (Beginning)
*/

// Performance Considerations:
// - Similar to padStart(), padEnd() is ideal for formatting output but
//   should be used judiciously to avoid unnecessary string modification.

// The padEnd() method is useful for ensuring consistent lengths in strings,
// particularly in scenarios where data needs to be aligned or output in a
// specific format (e.g., table formatting, logs, or number formatting).