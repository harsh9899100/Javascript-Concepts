// String concat() Method

// The concat() method in JavaScript is used to combine two or more strings
// into a single string. It does not modify the original strings but returns a new string.

// Syntax:
// string1.concat(string2, string3, ..., stringN)

// Key Points:

// Immutable Operation:
// concat() does not change the original strings but returns a new string
// with the concatenated result.

// Multiple Arguments:
// Accepts multiple strings as arguments and concatenates them in the order provided.
let result1 = "Hello".concat(", ", "World", "!");
console.log(result1); // "Hello, World!"

// Alternative Approach:
// Using the + operator or template literals is often more concise and commonly preferred.
let result2 = "Hello" + ", " + "World!";
let templateResult = `${"Hello"}, ${"World"}!`;
console.log(result2);          // "Hello, World!"
console.log(templateResult);  // "Hello, World!"

// Handles Non-String Inputs:
// Automatically converts non-string arguments to strings during concatenation.
let result3 = "Number: ".concat(42, ", Boolean: ", true);
console.log(result3); // "Number: 42, Boolean: true"

// Examples:

// Concatenating Two Strings:
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // "John Doe"

// Concatenating Multiple Strings:
let str1 = "JavaScript";
let str2 = " is";
let str3 = " awesome!";
let result4 = str1.concat(str2, str3);
console.log(result4); // "JavaScript is awesome!"

// Using concat() with Numbers and Booleans:
let info = "Value: ".concat(100, ", Status: ", false);
console.log(info); // "Value: 100, Status: false"

// Chaining concat() Calls:
let result5 = "A".concat("B").concat("C");
console.log(result5); // "ABC"

// Comparing with Template Literals:
let result6 = "Hello".concat(", ", "World!");
let templateResult2 = `${"Hello"}, ${"World"}!`;
console.log(result6);         // "Hello, World!"
console.log(templateResult2); // "Hello, World!"

// Common Use Cases:

// Constructing Sentences Dynamically:
let user = "Alice";
let message = "Welcome, ".concat(user, "!");
console.log(message); // "Welcome, Alice!"

// Combining Variables and Strings:
let greeting = "Hello";
let name = "Bob";
console.log(greeting.concat(", ", name, "!")); // "Hello, Bob!"

// Performance Considerations:
// The + operator and template literals are typically faster and more readable
// for simple concatenations.
// Use concat() when working in environments where explicit method chaining is preferred.

// Comparison of Concatenation Methods:
// =====================================
/*
Method          | Code                                  | Result          | Notes
------------------|---------------------------------------|------------------|----------------------------------------------------
concat()        | "Hello".concat(", ", "World!")         | "Hello, World!"  | Explicit method for concatenation.
+ operator      | "Hello" + ", " + "World!"             | "Hello, World!"  | Common and concise.
Template Literals| `${"Hello"}, ${"World"}!`             | "Hello, World!"  | Ideal for more complex interpolations.
*/