// Filter: A Powerful Tool for Data Transformation
// ________________________________________________

// Basic Concept
// -------------

// The filter() method in JavaScript is a higher-order function that creates a new array containing only the elements from the original array that pass a specific test. This test is implemented as a callback function.

// Basic Example:
// --------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]   


// Advanced Usage and Example with Books:
// --------------------------------------

// const books = [
//   { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy" },
//   { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy" },
//   { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction" },
//   { title:  "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction" },
//   { title: "1984", author: "George Orwell", genre: "Dystopian  Fiction" },
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


// ⭐Filtering for Specific Genres:

const fantasyBooks = books.filter(book => book.genre === "Fantasy");
console.log(fantasyBooks);


// ⭐Filtering for Books by a Specific Author:

const tolkeinBooks = books.filter(book => book.author === "J.R.R. Tolkien");
console.log(tolkeinBooks);


// ⭐Filtering for Books with a Title Length Greater Than 20:

const longTitleBooks = books.filter(book => book.title.length > 20);
console.log(longTitleBooks);


// ⭐Chaining filter() with Other Array Methods:

const longFantasyBooks = books
  .filter(book => book.genre === "Fantasy")
  .filter(book => book.title.length > 20);
console.log(longFantasyBooks);


// Key Points:

// filter() creates a new array, leaving the original array unchanged.
// The callback function takes three arguments: the current element, the current index, and the entire array.
// The callback function should return a boolean value: true to keep the element, false to discard it.
// You can chain filter() with other array methods like map(), reduce(), and sort() to create complex data transformations.
// By understanding these concepts and examples, you can effectively use filter() to manipulate and extract specific data from arrays in your JavaScript applications.