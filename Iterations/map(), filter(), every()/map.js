// Map: A Versatile Tool for Transforming Data

// Basic Concept

// The map() method in JavaScript is a higher-order function that creates a new array by transforming each element of an existing array. It applies a given function to each element and returns a new array containing the results.

// Basic Example
// -------------

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10];


// Advanced Usage and Example with Books:
// --------------------------------------

// const books = [
//   { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy" },
//   { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy" },
//   { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
//   { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction" },
//   { title: "1984", author: "George Orwell", genre: "Dystopian Fiction" },
//   { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction" },
//   { title: "The Alchemist", author: "Paulo Coelho", genre: "Inspirational" },
//   { title: "The Lion, the Witch, and the Wardrobe", author: "C.S. Lewis", genre: "Fantasy" },
//   { title: "The Little Prince", author: "Antoine de Saint-Exupéry", genre: "Children's Literature" },
//   { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
//   { title: "Jane Eyre", author: "Charlotte Brontë", genre: "Romance" },
//   { title: "Wuthering Heights", author: "Emily Brontë", genre: "Romantic Tragedy" },
//   { title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "Gothic Fiction" },
//   { title: "The Count of Monte Cristo", author: "Alexandre Dumas", genre: "Adventure" },
//   { title: "Les Misérables", author: "Victor Hugo", genre: "Historical Fiction" },
//   { title: "Don Quixote", author: "Miguel de Cervantes", genre: "Satire" },
//   { title: "Anna Karenina", author: "Leo Tolstoy", genre: "Realism" },
//   { title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Psychological Fiction" }
// ];


// ⭐ Transforming Titles to Uppercase:

const uppercaseTitles = books.map(book => book.title.toUpperCase());
console.log(uppercaseTitles);


// ⭐ Creating a New Array of Author-Title Pairs:

const authorTitlePairs = books.map(book => `${book.author}: ${book.title}`);
console.log(authorTitlePairs);


// ⭐ Creating a New Array of Book Objects with an Added isClassic Property:

const classicBooks = books.map(book => ({
  ...book,
  isClassic: book.age > 100
}));
console.log(classicBooks);


// Key Points:

// map() creates a new array, leaving the original array unchanged.
// The callback function takes three arguments: the current element, the current index, and the entire array.
// The callback function should return the transformed value for each element.
// You can chain map() with other array methods like filter(), reduce(), and sort() to create complex data transformations.
// Additional Considerations:

// Immutability: map() is a powerful tool for functional programming, promoting immutability by creating new arrays instead of modifying existing ones.
// Performance: While map() is efficient, be mindful of its performance implications, especially when dealing with large datasets.
// Side Effects: Avoid side effects within the callback function, as it can lead to unexpected behavior.
// By mastering map(), you can efficiently transform and manipulate data in JavaScript, making your code more concise and readable.