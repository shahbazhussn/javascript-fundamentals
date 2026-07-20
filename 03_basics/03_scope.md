```Javascript
// Global scope variables
let a = 10;
const b = 20;
var c = 30;

// Block scope
if (true) {
    let a = 100;
    const b = 200;
    var c = 300; // Leaks globally because of 'var'
    
    console.log("Inside block - a:", a); // 100
    console.log("Inside block - b:", b); // 200
    console.log("Inside block - c:", c); // 300
}

// Accessing variables outside the block
// console.log(a); // Error: Block scoped
// console.log(b); // Error: Block scoped
console.log("Outside block - c:", c); // 300 (Leaked)
```

Scope Level and Mini Hoisting in JavaScript

1. Nested Scopes (Lexical Scoping)

The Rule: A child scope or inner function can access variables from its parent/global scope (like a child asking an adult for ice cream), but the parent scope cannot access variables declared inside a child scope.

Code Example: Nested Functions
```JavaScript
function one() {
    const username = "shahbaz";

    function two() {
        const website = "youtube";
        console.log(username); // Can access parent's variable ("shahbaz")
    }

    // console.log(website); // Error: website is block-scoped to function two
    two();
}

one();
```
2. Nested Blocks (if-else)

Block scopes nested inside other blocks follow the exact same isolation rules. Inner blocks can read outer variables, but outer blocks cannot access variables declared deep inside inner blocks.

3. Function Declarations vs. Function Expressions (Mini Hoisting)

Function Declaration: Can be called before the function is actually defined in the code, because JavaScript hoists the entire function definition during execution context setup.

Function Expression (Assigned to a Variable): Cannot be called before its line of definition because variables declared with let/const (or hoisted differently) are not initialized yet, resulting in a reference error.

Code Example: Hoisting Comparison
```JavaScript
// --- 1. Function Declaration (Hoisted Successfully) ---
addOne(5); // Works fine!

function addOne(num) {
    return num + 1;
}


// --- 2. Function Expression (Not Hoisted in the same way) ---
// addTwo(5); // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
}

addTwo(5); // Works here after declaration
```

Task 1: Inner Function Access
Create a function named outer and declare a variable course = "JavaScript" inside it.

Inside outer, define an inner function named inner.

Inside inner, console.log(course).

Call inner() inside outer, and then call outer().

Goal: Verify that a child/inner function can access variables from its parent scope.

```Javascript
function outer() {
    course = "Javascript"

    function inner() {
        console.log(course);
    }
    inner();
}
outer();
```

Task 2: Block Scope Variable Isolation in Nested Blocks
Create a variable age = 25 in the global scope.

Write an outer if (true) block. Inside it, declare let age = 30.

Inside that same outer block, write an inner if (true) block and declare let age = 35.

console.log(age) inside the inner block, inside the outer block, and globally.

Goal: Observe how each nested block level maintains its own local variable scope without affecting outer scopes.

```Javascript
let age = 25;

if(true) {
    let age = 30;

    if (true) {
        let age = 35;
        console.log(age);
    }
    console.log(age);
}
console.log(age);
```

Task 3: Hoisting Test (Declaration vs. Expression)
Write a function call to multiplyByTwo(5) before declaring the function.

Define function multiplyByTwo(num) { return num * 2; } underneath and run it.

Next, try calling a function expression addFive(5) before declaring it like this: const addFive = function(num) { return num + 5; }.

Goal: Observe why standard function declarations execute successfully before their definition due to hoisting, while function expressions assigned to const throw a reference error.

```Javascript
multiplyByTwo(5);

function multiplyByTwo(num) {
    return num * 2;
}

addFive(5);

const addFive = function(num) {
    return num + 5;
}