// Mouse Events:
    // - click: Occurs when a mouse button is clicked.
    // - dblclick: Occurs when a mouse button is double-clicked.
    // - mousedown: Occurs when a mouse button is pressed down.
    // - mouseup: Occurs when a mouse button is released.
    // - mousemove: Occurs when the mouse pointer moves over an element.
    // - mouseover: Occurs when the mouse pointer enters an element.
    // - mouseout: Occurs when the mouse pointer leaves an element.
    // - mouseenter: Occurs when the mouse pointer enters an element.
    // - mouseleave: Occurs when the mouse pointer leaves an element.
 
    document.getElementById("myButton").addEventListener("click", function() {
     console.log("Button clicked!");
    });

// Keyboard Events:
    // - keydown: Occurs when a key is pressed down.
    // - keyup: Occurs when a key is released.
    // - keypress: Occurs when a key is pressed and released.   

    document.addEventListener("keydown", function(event) {
     console.log("Key pressed: " + event.key);
    });

// Form Events:
    // - submit: Occurs when a form is submitted.   
    // - change: Occurs when an element's value changes.
    // - input: Occurs when an input field's value changes.
    // - reset: Occurs when a form is reset. 

    document.getElementById("myForm").addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent default form submission
     console.log("Form submitted!");
    });

// Document and Window Events:
    // - load: Occurs when a page or resource is fully loaded.
    // - unload: Occurs when a page or resource is unloaded.
    // - resize: Occurs when the browser window is resized.
    // - scroll: Occurs when the document is scrolled.
    // - error: Occurs when an error occurs.
 
    window.addEventListener("load", function() {
     console.log("Page loaded!");
    });

// Other Events:
    // - focus: Occurs when an element gains focus.
    // - blur: Occurs when an element loses focus.
    // - contextmenu: Occurs when a context menu is triggered (usually right-click).
    // - dragstart: Occurs when a drag operation starts.
    // - dragend: Occurs when a drag operation ends.
    // - drop: Occurs when an element is dropped onto a target element. 

    document.getElementById("myInput").addEventListener("focus", function() {
     console.log("Input field focused!");
    });