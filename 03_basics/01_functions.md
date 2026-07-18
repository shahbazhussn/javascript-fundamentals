Functions and Parameters in JavaScript
1. Core Concept of Functions 📦
A function is simply a clean package wrapping a block of code (whether it's 5 lines or 20 lines). Instead of manually typing out identical strings or logic statements over and over, you package them together. This package can be called as many times as you want across your application.

```JavaScript
// Basic Function Syntax
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
}
```
⚠️ Crucial Distinction: Reference vs. Execution
sayMyName ➡️ Reference: This tells the system where the function resides, but it does not run the logic inside. (Highly important when handling React tracking callbacks or DOM click listeners).

sayMyName() ➡️ Execution: Appending parenthesis actively runs the packed function immediately.

2. Parameters vs. Arguments 🔀
When designing dynamic operations, you pass input metrics inside the method:

```JavaScript
function addTwoNumbers(number1, number2) {  // number1 and number2 are PARAMETERS
    console.log(number1 + number2);
}

addTwoNumbers(3, 5); // 3 and 5 are ARGUMENTS
```
Parameters: The variable placeholders declared inside the function definition.

Arguments: The real, live values you pass inside the parenthesis when calling the function.

🚨 JavaScript Data Typing Flaws
Because JavaScript isn't strictly typed, unexpected inputs yield strange results:

addTwoNumbers(3, "4") evaluations return 34 (treating numbers as merged string characters).

addTwoNumbers(3, null) requires explicit conditional checking (typeof) to avoid parsing issues down the road.

3. The return Keyword Mechanism ↩️
A common beginner mistake is confusing printing a value to the console with a function actually returning a value.

```JavaScript
function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result; 
    console.log("This will never print"); // Unreachable Code Rule
}

const finalScore = addNumbers(10, 20);
console.log(finalScore); // Output: 30
```
Key Principles of return:
Assignment: To store a function's outcome inside a new tracking variable, the function must use the return keyword. Without it, the variable prints undefined.

Unreachable Code Rule: Once a function hits a return statement, execution stops immediately. Any code written below it is completely ignored.

Memory Optimization: You can return expressions directly to save memory without declaring an extra local variable first:

```JavaScript
function addNumbers(num1, num2) {
    return num1 + num2;
}
```
4. Handling Empty or Missing Inputs 
If a function expects an argument but you don't pass one, the parameter defaults to undefined (not null).

```JavaScript
function loginUserMessage(username) {
    return `${username} just logged in!`;
}

console.log(loginUserMessage()); // Output: "undefined just logged in!"
```
Professional Guard Logic Checks
To protect execution paths from broken profiles, inject defensive conditional checks:

```JavaScript
// Method A: Explicit Check
if (username === undefined) {
    console.log("Please enter a username");
    return;
}

// Method B: Professional Shorthand Toggle (Falsy Check)
// In JS, empty strings "" and undefined evaluate as Falsy values.
if (!username) { 
    console.log("Please enter a username");
    return;
}
```
Note: The ! (NOT operator) flips a falsy undefined value to true, triggering the guard clause successfully.

Cleanest Fix: Default Values 🛠️
You can prevent parameters from ever being undefined by assigning a fallback directly in the parameter list.

```JavaScript
function loginUserMessage(username = "sam") {
    return `${username} just logged in!`;
}

console.log(loginUserMessage());        // Output: "sam just logged in!"
console.log(loginUserMessage("hitesh")); // Output: "hitesh just logged in!" (Overwrites default)
```
If an argument is passed, it cleanly overrides the default assignment.

Task 1: The Multi-Item Sneaker Tax Calculator (Basic Return Execution)
Scenario: You need to calculate the final checkout price for a sneaker order including a fixed delivery fee.

Create a function called calculateFinalPrice that takes two parameters: sneakerPrice and deliveryFee.

The function should return the sum of both numbers directly without creating an intermediate variable.

Call the function with arguments 8999 and 150. Store the executed value inside a variable named totalBill and log it to the terminal.

```Javascript
function calculateFinalPrice(sneakerPrice, deliveryFee) {
    return (sneakerPrice + deliveryFee)
}

const totalBill = calculateFinalPrice(8999, 150)
console.log(totalBill);
```

Task 2: The Customer Greeting Guard (Defensive Logic)
Scenario: You want to print a custom dashboard banner for your reselling business profile. If a user is not logged in, it needs to prompt them safely instead of displaying undefined.

Create a function named generateWelcomeBanner that takes a single parameter: customerName.

Inside the function, add a professional shorthand falsy check (!) to inspect if the parameter is missing. If it is missing, log "Please log in to view your store balance!" and terminate execution instantly using a standalone return.

If the name exists, return a template literal string stating: "Welcome back to Sneaker Vault, [customerName]!".

Test your function twice: call it once with no arguments, and once with your name as the argument.

```Javascript
function generatewelcomeBanner (customerName) {
    if(!customerName) {
        console.log("Please log in to view your score balance");
        return;
    }
    if(customerName) {
        return `Welcome back to Sneaker Vault, ${customerName}`;
    }
}
generatewelcomeBanner();
console.log(generatewelcomeBanner("Shahbaz"));
```

Task 3: The Order Status Override (Default Fallback Parameters)
Scenario: Your system needs to print trackable logs when shipping out stock. If an update occurs without an explicit status value, it defaults to a generic state.

Create a function named logShipmentStatus that accepts a trackingId and a status parameter.

Set the default fallback assignment for the status parameter to "Processing" directly within the parameter declaration list.

The function should return a string like: "Order [trackingId] status is now: [status].".

Run console.log() on two execution states:

Call the function passing only a tracking ID (e.g., "TXN-9982").

Call the function passing both a tracking ID and an explicit status string of "Dispatched".

```Javascript
function logShipmentStatus(trackingId, status = "Processing") {
    return `Order ${trackingId} status is now: ${status}.`;
}

console.log(logShipmentStatus("TXN-9982"));
console.log(logShipmentStatus("TXN-9982", "Dispatched"));