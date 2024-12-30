// JavaScript Strings: Definition, Syntax, and Usage

// Definition and Syntax:
// A string in JavaScript is a sequence of characters used to represent text.
// Strings are one of the most commonly used data types and are immutable,
// meaning their content cannot be changed once created.

// Syntax to Declare a String:
// You can create strings in JavaScript using:
// 1. String Literals: Enclosed in single quotes ('), double quotes ("), or backticks (` for template literals).
// 2. String Object: Using the new String() constructor (less common).

// Creating Strings:

// Using String Literals:
// Enclose the text in single (') or double quotes ("):
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "JavaScript is awesome!";

// Use backticks (`) for template literals to allow multi-line strings and interpolation:
let templateLiteral = `Hello,
Multi-line string with template literals.`;

// Using the new String() Constructor:
// Creates a String Object, not a primitive string:
let stringObject = new String("This is a string object.");

// Key Points:

// String Literal vs. String Object:
// String literals are preferred because they are simpler and faster.
// String objects can have unintended consequences due to their type (object instead of string):
let literal = "hello";
let object = new String("hello");
console.log(typeof literal); // "string"
console.log(typeof object);  // "object"

// Template Literals:
// Allow embedding expressions inside strings using ${expression}:
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"

// Strings Are Immutable:
// Once created, a string cannot be changed. Operations like concatenation or replacement create a new string:
let str = "Immutable";
str[0] = "X"; // Doesn't change the string
console.log(str); // "Immutable"

// Examples:

// Basic String Creation:
let greetingExample = "Hello, World!";
console.log(greetingExample); // "Hello, World!"

// Using new String():
let strObjectExample = new String("Hello, Object!");
console.log(strObjectExample); // [String: 'Hello, Object!']

// Template Literal:
let age = 25;
let message = `I am ${age} years old.`;
console.log(message); // "I am 25 years old."

// Comparison of String Creation Methods:
// =======================================
/*
Method          | Syntax              | Type Produced | Notes
-----------------|----------------------|---------------|----------------------------------------------------
String Literal  | "text" or 'text'    | string        | Lightweight and preferred for most cases.
Template Literal| `text`              | string        | Ideal for multi-line strings or expressions.
String Object   | new String("text") | object        | Avoid unless object behavior is required.
*/