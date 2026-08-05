1. Parent-Child DOM Relationships & Navigation

The DOM is structured as a tree. Instead of constantly searching the entire document with heavy selector queries, you can move directly between related elements:
Accessing Children (```parent.children```):
Returns an ```HTMLCollection``` containing all child elements.

```JavaScript
const parent = document.querySelector('.parent');
console.log(parent.children); // HTMLCollection
console.log(parent.children[0].innerText); // Access specific child
```
First and Last Child Elements:

```parent.firstElementChild``` – Gets the first child element directly.

```parent.lastElementChild``` – Gets the last child element directly.

Moving from Child back to Parent (```element.parentElement```):
Instead of running ```querySelector``` again, jump straight to the parent element:

```JavaScript
const dayOne = document.querySelector('.day');
console.log(dayOne.parentElement); // Directly accesses parent container
```
Moving to Siblings (```element.nextElementSibling```):
Selects the immediate next sibling element:

```JavaScript
console.log(dayOne.nextElementSibling); // E.g., Moves from Monday to Tuesday
```
2. What are NodeLists & childNodes?
```parent.childNodes```:
Returns a NodeList containing every single node inside the parent.

Why does ```childNodes``` show more items than actual elements?
In the DOM, comments, line breaks (enclosing line breaks / carriage returns), and spaces are stored as Text Nodes.

Example: If you have 4 ```<div>``` tags inside a parent container, ```parent.childNodes.length``` might show 9 or 11 because it counts line breaks and comments as individual nodes.

3. How to Create and Append New Elements
Creating new DOM elements programmatically is done using core JavaScript DOM methods:

Step-by-Step Implementation:
Create the Element:

```JavaScript
const div = document.createElement('div');
Add Properties & Attributes:
```
```JavaScript
div.className = 'main'; // Sets class name
div.id = Math.round(Math.random() * 10 + 1); // Sets a dynamic ID
div.setAttribute('title', 'generated title'); // Custom attribute
```
Apply Inline Styling:

```JavaScript
div.style.backgroundColor = 'green';
div.style.padding = '12px';
```
Add Text Content:

Option A (Direct): ```div.innerText``` = 'Chai aur Code';

Option B (Optimized Text Node):

```JavaScript
const addText = document.createTextNode('Chai aur Code');
div.appendChild(addText);
```
Append to the Page (DOM):
Creating an element keeps it in memory until you explicitly attach it to the DOM tree.

```JavaScript
document.body.appendChild(div); // Attaches the div to the web page