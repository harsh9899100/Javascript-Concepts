for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
      //console.log("5 is best number");
    }
    //console.log(element);
  }

// This loop iterates from 0 to 10 (inclusive).
// Inside the loop, the current value of i is assigned to element.
// The if statement checks if element is equal to 5. If it is, the commented-out line console.log("5 is best number"); would be executed.
// The commented-out line console.log(element); would print the current value of element (i.e., the loop counter).

// ------------------------------------------------------------

for (let a = 1; b <= 10; a++) {
    console.log(`Outer loop value: ${a}`);
    for (let b = 1; b <= 10; b++) {
      console.log(`Inner loop value ${b} and inner loop ${a}`);
      console.log(a + '*' + b + ' = ' + a*b );
    }
  }

//   This code creates a nested for loop.
//   The outer loop iterates from 1 to 10 (inclusive).
//   The inner loop also iterates from 1 to 10 (inclusive) for each iteration of the outer loop.
//   The commented-out lines inside the inner loop would print various information related to the values of i and j, including their product.  

// ------------------------------------------------------------

let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// This code iterates over the elements of an array.
// The myArray array contains three superhero names.
// The loop iterates from 0 to the length of the array (exclusive).
// Inside the loop, the current element of the array is assigned to element.
// The commented-out line console.log(element); would print the current element of the array.

// ------------------------------------------------------------

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
      console.log(`Detected 5`);
      continue;
    }
    console.log(`Value of i is ${index}`);
  }

// These code snippets demonstrate the use of break and continue statements within a for loop.
// The first snippet uses break to exit the loop prematurely when index becomes 5.
// The second snippet uses continue to skip the rest of the loop body when index becomes 5 and proceed to the next iteration.