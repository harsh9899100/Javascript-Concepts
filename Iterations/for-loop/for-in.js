// for...in Loop

// Purpose: Iterates over the properties of an object.

// Usage:
// for (const property in object) {
//   // Code to execute for each property
// }

// ⭐ 1) Iterating over custom objects --------------------
 const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
  };
  
  for (const property in person) {
    console.log(property, ":", person[property]);

       // output :
           // firstName : Alice
           // lastName : Smith
           // age : 30
  }

// ⭐ 2) Iterating over Object Properties -------------------
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const myCar = new Car("Toyota", "Camry", 2023);
  
  for (const property in myCar) {
    console.log(property, ":", myCar[property]);

       // output:
           // make : Toyota
           // model : Camry
           // year : 2023
  }
  
// -----------------------------------------------------------------------

// Notes:
  // - Iterates over enumerable properties of an object.
  // - The order of iteration is not guaranteed to be consistent.
  // - Avoids prototype properties using `hasOwnProperty()`.
  
// Where not applicable:
  // - Directly iterating over arrays.
  // - Iterating over values of iterable objects like strings, Maps, and Sets.