DOM Selectors, NodeList, and HTMLCollection

1. Selecting Elements by ID and Attributes

Selecting by ID:
```JavaScript
const title = document.getElementById('title');
```
Extracting Attributes:
```JavaScript
title.id                    // Returns the element's ID
title.className             // Returns the class name ('class' is a reserved keyword in JS)
title.getAttribute('id')    // Gets value of any specified attribute
title.setAttribute('class', 'test heading') // Overwrites existing classes with new value
```
2. Difference Between Content Extraction Properties

Given the HTML: 
```HTML
<h1 id="title">DOM learning <span style="display: none;">test text</span></h1>
```
Property: title.textContent 

What it Returns:
Returns all text inside the element, including text hidden by CSS (display: none).

Property: title.innerText

What it Returns: Returns only the visible text currently shown on the screen.

Property: title.innerHTML

What it Returns: Returns the entire HTML content (including child HTML tags like <span>).

3. Modern Selectors: querySelector & querySelectorAll

document.querySelector()

Returns only the FIRST matching element found in the document.

```JavaScript
document.querySelector('h2');                 // By Tag
document.querySelector('#title');              // By ID
document.querySelector('.heading');            // By Class Name
document.querySelector('input[type="text"]'); // By Attribute Selector
```
document.querySelectorAll()

 Returns a NodeList containing all matching elements.
```JavaScript
const myH2List = document.querySelectorAll('h2');
```

4. NodeList vs. HTMLCollection vs. Array

This is one of the most important concepts for interview questions and practical DOM manipulation:

A. NodeList (Returned by querySelectorAll)

It is not a true array, but it supports the .forEach() method.

Direct Array methods like .map(), .filter(), and .reduce() do NOT work directly on a NodeList.
```JavaScript 
const myNodeList = document.querySelectorAll('li');

// Works:
myNodeList.forEach((li) => {
    li.style.color = 'green';
});
```
B. HTMLCollection (Returned by getElementsByClassName)

Returns a collection of HTML elements.

Does NOT have .forEach() or any array iteration methods.
```JavaScript
const myHTMLCollection = document.getElementsByClassName('list-item');

// This will fail:
// myHTMLCollection.forEach(...) -> TypeError: myHTMLCollection.forEach is not a function
```
5. Converting Collections to True Arrays

To use full array capabilities (map, filter, forEach) on an HTMLCollection or NodeList, convert it into a real JavaScript array using Array.from():
```JavaScript 
const myHTMLCollection = document.getElementsByClassName('list-item');

// Convert HTMLCollection to a true Array
const convertedArray = Array.from(myHTMLCollection);

// Now all array methods work:
convertedArray.forEach((li) => {
    li.style.color = 'orange';
});