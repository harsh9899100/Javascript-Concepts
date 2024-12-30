// String split() Method

// The split() method splits a string into an array of substrings, based on a specified separator. It's the opposite of the `join()` method, which combines array elements into a string.

// Syntax:
// string.split(separator, limit)

// Parameters:
// separator (optional):
// - The string or regular expression to use as the separator for splitting.
//   - The string is split at each occurrence of the separator.
//   - If an empty string ("") is used, the string is split between each character.
// - If no separator is provided, the entire string is returned as a single-element array.
// limit (optional):
// - The maximum number of substrings to include in the resulting array.
//   - If not provided, the method will split the string into all possible substrings.

// Return Value:
// An array containing the substrings obtained by splitting the original string.

// Key Points:

// Non-Mutating:
// The split() method does not modify the original string. It creates and returns a new array containing the substrings.

// Separator Behavior:
// The separator can be a string (like a space, comma, etc.) or a regular expression for more complex patterns.
// If no separator is specified, the entire string is considered as a single substring.

// Limit Parameter:
// The optional `limit` parameter allows you to control the maximum number of substrings returned in the array.
// If the limit is less than the number of possible substrings based on the separator, the array will contain only the specified number of substrings, typically excluding the trailing elements.

// Examples:

// Basic Usage with a Space Separator:
let str1 = "apple banana cherry";
let arr1 = str1.split(" ");
console.log(arr1);  // ["apple", "banana", "cherry"]

// Splitting with a Comma Separator:
let str2 = "red,green,blue";
let arr2 = str2.split(",");
console.log(arr2);  // ["red", "green", "blue"]

// Splitting by Each Character:
let str3 = "hello";
let arr3 = str3.split("");
console.log(arr3);  // ["h", "e", "l", "l", "o"]

// Using the limit Parameter:
let str4 = "apple,banana,cherry";
let arr4 = str4.split(",", 2);
console.log(arr4);  // ["apple", "banana"] (limit set to 2)

// Splitting with a Regular Expression:
let str5 = "apple1banana2cherry3";
let arr5 = str5.split(/\d/);  // Split by any digit
console.log(arr5);  // ["apple", "banana", "cherry"]

// Splitting Without a Separator:
let str6 = "apple";
let arr6 = str6.split();  // No separator specified
console.log(arr6);  // ["apple"] (entire string as one element)

// Use Cases:

// Splitting a Sentence into Words:
let sentence = "The quick brown fox";
let words = sentence.split(" ");
console.log(words);  // ["The", "quick", "brown", "fox"]

// Extracting Values from a CSV String:
let csv = "Name,Age,Location";
let values = csv.split(",");
console.log(values);  // ["Name", "Age", "Location"]

// Parsing a URL:
let url = "https://www.example.com/page/1";
let parts = url.split("/");
console.log(parts);  // ["https:", "", "www.example.com", "page", "1"]

// Extracting Parts of a Date:
let date = "2024-12-30";
let partss = date.split("-");
console.log(partss);  // ["2024", "12", "30"]

// Comparison with Related Methods:
// ================================
/*
Method      | Description                                     | Return Type | Mutates Original String?
-------------|-------------------------------------------------|--------------|-------------------------
split()      | Splits a string into an array of substrings.     | Array        | No
join()       | Joins elements of an array into a single string. | String       | No
substring()  | Extracts a portion of a string between indices. | String       | No
*/

// Performance Considerations:

// split() is generally an efficient method for string splitting. However, the performance can be affected by:
//