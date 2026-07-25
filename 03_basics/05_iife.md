Immediately Invoked Function Expressions (IIFE) in JavaScript

1. What is an IIFE and Why Use It?
Definition: An IIFE (pronounced "iffy") is a function that runs immediately after it is defined.

Why do we need it?:

Immediate Execution: Useful for tasks like initializing database connections immediately when the application starts.

Avoiding Global Scope Pollution: Variables inside an IIFE are contained within its own block/scope, preventing accidental overrides or contamination from global scope variables.

Interview Tip: Don't just answer "a function that executes immediately". Always mention preventing global scope pollution to give a complete answer.

2. IIFE Syntax Structure
An IIFE consists of two main sets of parentheses:

( ... ) First Parentheses: Wraps the function declaration to treat it as an expression.

() Second Parentheses: Executes the function immediately.

Code Example: Named vs. Unnamed IIFE
```JavaScript
// --- 1. Named IIFE ---
(function connectDB() {
    console.log("DB CONNECTED");
})(); // Semicolon is mandatory!

// --- 2. Unnamed / Arrow Function IIFE ---
(() => {
    console.log("DB CONNECTED TWO");
})();
```
3. Crucial Rules & Parameters

Mandatory Semicolons ;: When writing multiple IIFEs back-to-back in a single file, you must end each IIFE with a semicolon ;. Without it, JavaScript doesn't know where the execution context ends, leading to a TypeError on the second IIFE.

Passing Parameters: Arguments are passed into the second set of parentheses () during invocation.

Code Example: IIFE with Parameters
```JavaScript
((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('shahbaz'); 
// Output: DB CONNECTED TO shahbaz