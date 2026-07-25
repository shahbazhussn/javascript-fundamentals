JavaScript Code Execution & Call Stack

1. JavaScript Execution Context (EC)

When JavaScript executes code, it creates an Execution Context.

Types of Execution Contexts:

Global Execution Context (GEC):Created by default as soon as the code starts running.
Referred to by the this keyword.
In browser environments, this points to the Window object.

Function Execution Context (FEC):Created whenever a function is invoked.

Eval Execution Context:Evaluates code inside eval() (property of the global object).

2. Two Phases of Code Execution

JavaScript runs code in two main phases inside the Execution Context:

Phase 1: Memory Creation Phase (Creation Phase)

Memory is allocated for variables and functions.
Variables are initially set to undefined.
Functions store their complete function definition.

Phase 2: Execution Phase

Code is executed line by line.
Variables are assigned their actual values.
When a function call is encountered, a new mini Execution Context (New Variable Environment + Execution Thread) is spawned.
After execution completes and returns a value to the parent context, that function's Execution Context is deleted.

3. Step-by-Step Code Execution Walkthrough

Example Code:

```JavaScript
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```
Execution Steps:

Global Execution Context:

Assigned to this.
Memory Creation Phase: 
val1 $\rightarrow$ undefined
val2 $\rightarrow$ undefined
addNum $\rightarrow$ [Function Definition]
result1 $\rightarrow$ undefined
result2 $\rightarrow$ undefined

Execution Phase:

val1 $\leftarrow$ 10
val2 $\leftarrow$ 5
result1 = addNum(val1, val2) triggers a New Execution Context:

    Memory Phase: num1 $\rightarrow$ undefined, num2 $\rightarrow$ undefined, total $\rightarrow$ undefined.
    Execution Phase: num1 $\leftarrow$ 10, num2 $\leftarrow$ 5, total $\leftarrow$ 15.
    total is returned to the Global Execution Context.
    Function context is destroyed.

result1 $\leftarrow$ 15.
result2 = addNum(10, 2) repeats the exact same process for result2.

4. The Call Stack (LIFO Mechanism)

Call Stack manages the execution order of functions using LIFO (Last In, First Out) principle.
Global Context stays at the bottom of the stack throughout.
Functions are pushed onto the stack when invoked and popped off once execution finishes.

Nested Function Calls Behavior:
```JavaScript
function one() {
    console.log("one");
    two();
}
function two() {
    console.log("two");
    three();
}
function three() {
    console.log("three");
}

one();
```
Stack Push Order: Global $\rightarrow$ one() $\rightarrow$ two() $\rightarrow$ three().
Stack Pop Order: three() finishes and pops $\rightarrow$ two() finishes and pops $\rightarrow$ one() finishes and pops.