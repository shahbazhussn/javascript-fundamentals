while Loop

The while loop checks the condition before executing the code block. If the condition is false initially, the block will not run even once.

Syntax Structure
```JavaScript
let index = 0; // 1. Initialization

while (index <= 10) { // 2. Condition check
    console.log(`Value of index is ${index}`);
    index = index + 2; // 3. Increment / State update
}
```
Iterating over an Array using while
```JavaScript
const myArray = ["flash", "batman", "superman"];

let arrIndex = 0;
while (arrIndex < myArray.length) {
    console.log(`Value is ${myArray[arrIndex]}`);
    arrIndex = arrIndex + 1; // Or arrIndex++
}
```
Key Detail: Notice the condition uses < myArray.length (not <=) because array indices start at 0.

do...while Loop

The do...while loop executes the body first and then evaluates the condition.

Key Property

Guaranteed Execution: The loop body will execute at least once, regardless of whether the condition evaluates to true or false initially.

Standard Syntax Example
```JavaScript
let score = 1;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
```
Special Case Demonstration (When condition is initially false)
```JavaScript
let score = 11; // Condition score <= 10 is false from the start

do {
    console.log(`Score is ${score}`); // Output: Score is 11
    score++;
} while (score <= 10);
```
Even though 11 <= 10 is false, "Score is 11" gets logged once before the condition check terminates the loop.

Task 1: Battery Drain Simulation (while loop)
Simulate a smartphone battery discharging until it reaches a low-power state.

Create a variable let batteryLevel = 100;.

Write a while loop that runs as long as batteryLevel is greater than or equal to 20.

Inside the loop:

Print "Battery at [batteryLevel]% - Normal operation".

Decrease batteryLevel by 15 on each iteration.

Outside the loop (after it ends), log "Battery low! Please connect charger.".
```Javascript
let batteryLevel = 100;

while (batteryLevel >= 20) {
    console.log(`Battery at ${batteryLevel}% - Normal Operation`);
    batteryLevel = batteryLevel - 15;
}
console.log("Battery low! Please connect charger");
```

Task 2: Reverse Array Search with while
Search for a specific superhero from an array using a while loop running backward.

Create an array: const heroes = ["batman", "spiderman", "ironman", "thor"];

Write a while loop starting from the last index (heroes.length - 1) down to index 0.

Rules:

Print the hero name at the current index.

If the current hero is "spiderman", log "Target found!" and stop the loop immediately using break.
```Javascript
const heroes = ["batman", "spiderman", "odin", "thor"]

let heroesIndex = heroes.length - 1;

while (heroesIndex >= 0) {
    console.log(heroes[heroesIndex]);
    
    if (heroes[heroesIndex] === "spiderman") {
      console.log("Target found!");
    break;   
    }

heroesIndex = heroesIndex - 1;
}
```

Task 3: ATM Pin Retry System (do...while loop)
Simulate a user entering an incorrect PIN code that gets evaluated at least once.

Create a variable let attempts = 1; and const maxAttempts = 3;.

Write a do...while loop:

Inside the do block, log "Entering PIN... Attempt [attempts] of [maxAttempts]".

Increment attempts by 1.

The while condition should check if attempts <= maxAttempts.

Test what happens if you set the starting attempts = 4 initially to see the guaranteed single execution of do...while!
```Javascript
let attempts = 4;
const maxAttempts = 3;

do {
    console.log(`Entering PIN... Attempt ${attempts} of ${maxAttempts}`);
    attempts++;
} while (attempts <= maxAttempts);
```

Task 4: Dynamic Step Counter (while loop)
Calculate total steps walked during a workout where steps increase dynamically each interval.

Create variables: let totalSteps = 0; and let interval = 1;.

Write a while loop that continues as long as totalSteps < 500.

Inside the loop:

Add 100 * interval steps to totalSteps.

Log "Interval [interval]: Total steps reached [totalSteps]".

Increment interval by 1.
```Javascript
let totalSteps = 0;
let interval = 1;

while (totalSteps < 500) {
    totalSteps += 100 * interval;
    console.log(`Interval ${interval}: Total steps reached ${totalSteps}`);
    interval++;
}