1. What are JavaScript Events?

JavaScript generally runs code sequentially (line by line).
Events are activities or user interactions (like clicking a button, pressing a key, moving the mouse, or submitting a form) that trigger specific JavaScript code to run.

2. Approaches to Attach Event Listeners
Approach 1: Inline HTML Event Handlers (Not Recommended)
Example: ```<img onclick="alert('clicked')" />```

Why avoid it? It mixes HTML and JS, making the code hard to scale and maintain as your application grows.

Approach 2: JS Event Properties (Better, but Limited)

Example: element.onclick = function() { ... }

Why avoid it? It lacks advanced features like controlling event propagation (bubbling/capturing).

Approach 3: Using ```addEventListener``` (Best Practice)
Example: ```element.addEventListener('click', function(e) { ... }, false)```

Why use it? It is modern, clean, scalable, and provides full control over event propagation and event object data.

3. Important Properties of the Event Object (e / event)
When an event occurs, JavaScript provides an Event Object containing useful details:

```type```: The kind of event triggered (e.g., 'click', 'keydown', 'mouseover').

```target```: The specific HTML element that was interacted with.

```timeStamp```: The exact time the event took place.

```clientX``` / ```clientY```: Mouse coordinates relative to the browser window.

```screenX``` / ```screenY```: Mouse coordinates relative to the user's monitor screen.

```altKey``` / ```ctrlKey``` / ```shiftKey```: Booleans indicating if special modifier keys were held down.

4. Event Propagation: Bubbling vs. Capturing
```addEventListener``` accepts a third argument, which determines the propagation mode (false by default):

Event Bubbling (false - Default):The event starts from the innermost element clicked and bubbles upwards to parent elements (Bottom $\rightarrow$ Top).

Event Capturing (true):The event starts from the outermost parent element and moves downwards to the clicked element (Top $\rightarrow$ Bottom).

Key Propagation Methods:
```e.stopPropagation()```: Stops the event from bubbling up or capturing down through the DOM tree.

```e.preventDefault()```: Prevents the default browser behavior of an element (e.g., stopping a link ```<a>``` from opening a page or stopping a form from submitting).