// Methods for Accessing the DOM:
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣


// 1. document.getElementById()
// ----------------------------
// Selects an element by its id attribute.
// Returns a single element or null if no element is found.

  const elementById = document.getElementById("myDiv");
  console.log(elementById?.textContent); // Output: Hello World  
  
// 2. document.getElementsByClassName()
// ------------------------------------
// Selects elements by their class attribute.
// Returns an HTMLCollection (live list of elements).

  const elementsByClassName = document.getElementsByClassName("myClass");
  console.log(elementsByClassName[0]?.textContent); // Output: First
  console.log(elementsByClassName[1]?.textContent); // Output: Second

// 3. document.getElementsByTagName()
// ----------------------------------
// Selects elements by their tag name (e.g., div, p, span).
// Returns an HTMLCollection.

  const elementsByTagName = document.getElementsByTagName("div");
  console.log(elementsByTagName.length); // Output: 2
  console.log(elementsByTagName[0]?.textContent); // Output: Div 1

// 4. document.querySelector()
// --------------------------
// Selects the first element that matches a CSS selector.
// Returns null if no match is found.

  const firstElement = document.querySelector(".myClass");
  console.log(firstElement?.textContent); // Output: First

// 5. document.querySelectorAll()
// ------------------------------
// Selects all elements that match a CSS selector.
// Returns a NodeList (static collection of elements).

  const allElements = document.querySelectorAll(".myClass");
  allElements.forEach((el) => console.log(el.textContent));
// Output: First
// Output: Second

// 6. document.forms
// -----------------
// Access forms by their name or index.

  const form = document.forms["myForm"];
  console.log(form?.username?.name); // Output: username

// 7. Accessing head, body, and html
// ----------------------------------
// document.documentElement: Refers to the <html> element.
// document.head: Refers to the <head> element.
// document.body: Refers to the <body> element.
  console.log(document.head); // Output: <head>...</head>
  console.log(document.body); // Output: <body>...</body>
  console.log(document.documentElement); // Output: <html>...</html>

// 8. document.children and document.childNodes
// --------------------------------------------
// document.children: Access child elements of the document (only elements).
// document.childNodes: Access all nodes, including text and comment nodes.
  console.log(document.children); // Output: [html]
  console.log(document.childNodes); // Output: [<!DOCTYPE html>, html]

// Best Practices
// --------------
// Example of Best Practice:

  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    console.log(item.textContent);
  });
