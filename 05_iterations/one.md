1. Introduction to Loops / Iterations

What are Loops? Loops (also referred to as iterations or iterators) allow executing a block of code repeatedly based on a specific condition.

There are multiple ways/structures to implement iterations in JavaScript.

2. Basic for Loop Syntax & Control Flow

A for loop consists of three main parts inside its initialization statement:

Initialization: Declares and assigns an initial value to the loop counter variable (e.g., let index = 0;).

Condition Check: Evaluates a boolean expression before each iteration (e.g., index < 10;).

Increment/Decrement: Updates the counter variable after each iteration completes (e.g., index++).

Execution Order 
Variable is initialized (happens only once at the start).

Condition is checked.

If true, the code inside the block {} executes.

After block execution completes, the counter is incremented/updated.

The condition is re-checked, repeating the process until the condition becomes false.

```JavaScript
// Example: Printing numbers from 1 to 10
for (let index = 1; index <= 10; index++) {
    const element = index;
    console.log(element);
}
```
3. Conditional Logic inside Loops

You can nest if statements inside a for loop to execute specific actions when a particular condition is met during iteration.

```JavaScript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("5 is the best number");
    }
    console.log(i);
}
```
4. Nested Loops (Loop inside a Loop)

A nested loop involves placing one for loop inside another.

For every single iteration of the outer loop, the inner loop executes completely (all its iterations).

Example: Generating Multiplication Tables (1 to 10) [13:35]
```JavaScript
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
```
5. Iterating Over Arrays

Arrays are 0-indexed.

Use .length to set the loop boundary.

Important: Always use strictly less than (index < myArray.length) rather than <=. Using <= causes the loop to access an out-of-bounds index, resulting in undefined.

```JavaScript
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length); // 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
```
6. Control Flow Statements: break vs. continue

A break Statement
Instantly terminates/exits the loop execution completely.

Skips any remaining iterations and jumps outside the loop's block.

```JavaScript
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        break; // Stops the loop completely
    }
    console.log(`Value of i is ${index}`);
}
// Output prints values 1 to 4, then logs "Detected 5" and exits.
```
B. continue Statement 

Skips the current iteration's remaining code once and proceeds directly to the next iteration.

The loop does not terminate.

```JavaScript
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue; // Skips printing 5 for the line below, but continues with 6, 7...
    }
    console.log(`Value of i is ${index}`);
}
// Output prints 1 to 4, logs "Detected 5", then skips logging "Value of i is 5" and resumes printing f
```

Task 1: Skipping and Stopping (The Event Gatekeeper)
Simulate a user scanning system for an event with 15 attendees numbered 1 to 15.

Loop through attendee IDs from 1 to 15.

Rules:

Attendee #5 forgot their pass. Log "Attendee 5 pass missing - Skipping..." and skip processing them using continue.

Attendee #10 has a flagged VIP pass. Log "VIP Attendee 10 detected! Stopping gate access." and immediately exit the loop using break.

For all other attendees, log "Attendee [ID]: Access Granted".
```Javascript
for (let ID = 1; ID <= 15; ID++) {
    if (ID === 5) {
        console.log(`Attendee ${ID} missing - Skipping...`);
    continue
    }
    if (ID === 10) {
        console.log(`VIP Attendee ${ID} detected! Stopping gate access.`);
        break
    }
    console.log(`Attendee ${ID}: Access granted`);
}
```

Task 2: Reversing an Array
Practice accessing array elements using a custom loop condition.

Create an array: const superHeroes = ["flash", "batman", "superman", "spiderman"];

Write a for loop that iterates backward through the array (from the last element to the first) and logs each hero name along with their reverse index.

Hint: Initialize your index at superHeroes.length - 1 and run the loop while index >= 0.
```javascript
const superheroes = ["flash", "superman", "batman", "spiderman"];

for (let i = superheroes.length -1; i >= 0; i--) {
    console.log(`Hero at index ${i}: ${superheroes[i]}`);
}
```

Task 3: Grid Coordinates Generator (Nested Loops)
Practice working with nested loops to build a 2D coordinate grid.

Create an outer loop for row (from 1 to 3).

Create an inner loop for col (from 1 to 4).

Print each coordinate in the format (row, col) (e.g., (1, 1), (1, 2)... (3, 4)).

Challenge: Whenever row === col, log "Diagonal hit at (row, col)" before printing the coordinate!
```Javascript
for (let row = 1; row <=  3; row++) {
    console.log(`Outer loop: ${row}`);
    
    for (let col = 1; col <= 4; col++) { 
        console.log(`Inner loop: ${col}`);
     if (row === col) {
        console.log(`Diagonal hit at (${row}, ${col})`);
     } 
     console.log(`${row}, ${col}`);
    }
}
```

Task 4: Safe Array Index Boundary Check
Demonstrate the common bug when loop conditions exceed array bounds.

Declare const fruits = ["apple", "banana", "cherry"];

Write a for loop using <= (index <= fruits.length) to purposefully trigger undefined.

Inside the loop, add an if check:

If the element is undefined, log "Warning: Index out of bounds at position [index]".

Otherwise, log the fruit name.
```Javascript
const fruits = ["apple", "banana", "cherry"];

for (let index = 0; index <= fruits.length; index++) {
    // const element = array[index];
    if (fruits[index] == undefined) {
        console.log(`Warning: Index out of bounds at position ${index}`);
    } else {
        console.log(fruits[index]);
    }
}