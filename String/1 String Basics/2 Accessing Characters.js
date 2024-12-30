// Accessing Characters in Strings

// In JavaScript, strings can be treated like arrays of characters, allowing
// access to individual characters using their index.

// How to Access Characters by Index:

// By Index: Use string[index] to access a character at a specific position.
// Indexing starts at 0.
// Negative indexing is not supported directly in JavaScript.
// If the index is out of bounds, undefined is returned.
let str1 = "JavaScript";
console.log(str1[0]);  // "J" (first character)
console.log(str1[4]);  // "S" (fifth character)
console.log(str1[20]); // undefined (index out of bounds)

// Accessing Specific Characters:

// First Character:
// Use string[0] to retrieve the first character.
let str2 = "Hello";
console.log(str2[0]); // "H"

// Last Character:
// Use string[string.length - 1] to get the last character.
let str3 = "Hello";
console.log(str3[str3.length - 1]); // "o"

// Key Points to Remember:

// Strings are Immutable:
// While you can access characters using their index, you cannot change them directly.
// Attempting to modify a character will not affect the string.
let str4 = "Immutable";
str4[0] = "X"; // This does nothing
console.log(str4); // "Immutable"

// Index Out of Bounds:
// Accessing an index outside the valid range (0 to string.length - 1) will return undefined.
let str5 = "Bounds";
console.log(str5[100]); // undefined

// Negative Indexing:
// JavaScript does not natively support negative indexing. However, you can calculate it manually:
let str6 = "Negative";
console.log(str6[str6.length - 2]); // "v" (second-to-last character)

// Examples of Character Access:

// Basic Access:
let word = "Access";
console.log(word[1]); // "c" (second character)
console.log(word[word.length - 3]); // "e" (third-to-last character)

// Iterating Through Characters:
// Use a for loop or for...of loop to process each character in the string.
let str7 = "Iterate";
for (let i = 0; i < str7.length; i++) {
    console.log(str7[i]);
}
// Using for...of
for (let char of str7) {
    console.log(char);
}

// Access Using Variables:
// Use a variable to specify the index dynamically.
let str8 = "Dynamic";
let index = 2;
console.log(str8[index]); // "n"

// Comparison Table for Access Methods:
// ===================================
/*
Task                     | Method                    | Example                     | Output
--------------------------|---------------------------|-----------------------------|--------
Access first character   | string[0]                 | "Hello"[0]                  | "H"
Access last character    | string[string.length - 1] | "Hello"[5 - 1]               | "o"
Access character at index| string[index]             | "JavaScript"[4]              | "S"
Iterate over characters  | for...of or for          | for (char of "Loop") { ... } | "L", "o", "o", "p"
*/

// Accessing characters in a string is straightforward and essential for many
// operations like parsing, comparison, or transformation!