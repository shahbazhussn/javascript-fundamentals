Introduction to the DOM (Document Object Model)

1. What is the DOM?

DOM stands for Document Object Model.

Every webpage written in HTML is parsed by the browser and converted into a tree-like structure of JavaScript objects.

It provides a programming interface to interact with, access, and manipulate HTML structure, content, and styling dynamically using JavaScript.

2. Window vs. Document

window object:

Represents the browser's top-level global window environment.

Contains system-level details, browser features, location, and global methods.

document object:

Sits inside the window object (window.document).

Represents the HTML document loaded into that window.

Browsers allow writing document directly as a shorthand.

Console Tip:

Using console.log(document) prints the HTML structure.

Using console.dir(document) displays the entire object tree with all hidden properties, methods, and details.

3. Understanding the DOM Tree Structure

The DOM is represented as a tree made up of Nodes:

Plaintext
Window
  └── Document
        └── html (Root Element)
              ├── head
              │     ├── title
              │     │     └── Text Node ("Page Title")
              │     └── meta (has Attributes)
              └── body
                    └── div
                          ├── h1
                          │     ├── Attribute (class, id)
                          │     └── Text Node ("Heading Text")
                          └── p
                              └── Text Node ("Paragraph Text")
Key Node Types:

Element Nodes: Tags like <html>, <body>, <div>, <h1>, <p>.

Attribute Nodes: Properties inside elements like class, id, src.

Text Nodes: The actual string content placed inside HTML elements (e.g., text inside <h1>).

4. Accessing DOM Elements

Basic Property Access:
```JavaScript
// Access URL / Base URI of the current page
console.log(document.baseURI); //

// Access all hyperlinks in the document
console.log(document.links); //
```
Important Distinction: Methods like document.links return an HTMLCollection (or NodeList), not a true JavaScript Array. While you can access items via index (document.links[0]), array methods like .map() or .forEach() aren't available directly unless converted to a real array.

5. Selecting & Manipulating Elements

Selecting an Element by ID:
```JavaScript
// Grab element by its 'id' attribute
const heading = document.getElementById('firstHeading'); //
```
Modifying HTML Content Dynamically:
```JavaScript
// Changes the inner HTML of the selected element
document.getElementById('firstHeading').innerHTML = "<h1>Chai aur Code</h1>"; //