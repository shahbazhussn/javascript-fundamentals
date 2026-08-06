DOM Manipulation: Adding, Editing & Removing Elements

1. Adding Elements (Two Approaches)

Suppose you have an unordered list ```(<ul class="language">)``` and want to dynamically add items ```(<li>)``` to it.

Approach 1: Simple Approach (```innerHTML```)
```JavaScript
function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}

addLanguage('Python');
addLanguage('TypeScript');
```
How it works: Creates an ```<li>``` element, sets its inner HTML directly, and appends it to the parent list.

Drawback: Using innerHTML causes the browser to re-parse the DOM tree, which can lead to performance issues when dealing with large lists.

Approach 2: Optimized Approach (```createTextNode```)
```JavaScript
function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}

addOptiLanguage('GoLang');
```
Why it's better: Instead of setting innerHTML, it directly creates a text node (document.createTextNode) and appends it. This avoids DOM re-parsing and is much more performant for scalable applications.

2. Editing Elements (Three Methods)
Suppose you want to edit an existing item in the list.

Method A: Direct innerHTML Replacement
```JavaScript
const secondLang = document.querySelector("li:nth-child(2)");
secondLang.innerHTML = "Mojo";
```
Selects the element using CSS selectors (nth-child) and changes its content directly.

Method B: Using ```replaceWith()```
```JavaScript
// Select target element
const secondLang = document.querySelector("li:nth-child(2)");

// Create new element & configure it
const newLi = document.createElement('li');
newLi.textContent = "Mojo";

// Replace old element with new element
secondLang.replaceWith(newLi);
```
Creates a completely new node and cleanly swaps it out using .replaceWith().

Method C: Using ```outerHTML```
```JavaScript
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = '<li>TypeScript</li>';
```
Replaces the entire HTML structure of the element, including the tags.

3. Removing Elements
Deleting elements from the DOM is very straightforward:

```JavaScript
// 1. Select the element you want to remove
const lastLang = document.querySelector("li:last-child");

// 2. Call .remove() on it
lastLang.remove();
```

<!--Practice-->
Initial Setup (Put this in your index.html body):
```HTML
<ul id="frameworks">
  <li>React</li>
  <li>Vue</li>
  <li>Angular</li>
</ul>
```
Task 1: Add Element (Optimized Way)
Create a function addFramework(name) that:

Creates an ```<li>``` element.

Uses document.createTextNode(name) to add the text inside the ```<li>```.

Appends the new ```<li>``` to the #frameworks list.

Test: Call addFramework('Next.js').
```Javascript
function addFramework(name) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    document.querySelector('#frameworks').appendChild(li);
}

addFramework('Next.js');
```

Task 2: Edit Element using replaceWith()

Select the 2nd item in the list (Vue) using document.querySelector('li:nth-child(2)').

Create a new ```<li>``` element with the text content "Svelte".

Replace Vue with your new ```<li>``` using .replaceWith().
```Javascript
const secondlang = document.querySelector('li:nth-child(2)');

const newli = document.createElement('li');
newli.textContent = 'Swelte';

secondlang.replaceWith(newli)
```

Task 3: Edit Element using outerHTML

Select the 1st item in the list (React) using document.querySelector('li:first-child').

Replace its entire outer structure using .outerHTML so it becomes ```<li>```React Native```</li>```.
```Javascript
const firstLang = document.querySelector('li:first-child');

firstLang.outerHTML = '<li>React Native</li>';
```

Task 4: Remove Element
Select the last item in the list (Angular) using document.querySelector('li:last-child').

Remove it completely from the DOM using .remove().
```Javascript
const lastItem = document.querySelector('li:last-child');
lastItem.remove();