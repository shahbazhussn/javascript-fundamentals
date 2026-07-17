Objects Part 1: JavaScript in Depth
📌 Core Architecture
In JavaScript, there are two primary methods used to declare and structure Objects:

Object Literals

Constructor Pattern (Object.create)

The Concept of a Singleton
Singleton: An object architecture pattern ensuring a single unique instance within execution memory.

Rule: If an object is created using the Constructor pattern (Object.create), a Singleton is guaranteed.

Rule: If an object is created via Object Literals, it is NOT a Singleton. There are no performance variances; the absolute difference is the structural instantiation paradigm.

🛠️ Object Literals Declaration & Property Tracking
Unlike arrays where access rules are limited strictly to indexed tracking keys (0, 1, 2...), object structures allow customization over both the tracking keys and values.

Behind the scenes, JavaScript implicitly maps object keys as strings.

```JavaScript
// Defining a Symbol to use as a dynamic key block
const mySym = Symbol("key1");

const JsUser = {
    name: "Shahbaz",              // Key implicitly acts as string: "name"
    "full name": "Shahbaz Hussain", // Key must explicitly be a string block if spaced
    age: 18,
    [mySym]: "mykey1",           // 🔥 Correct syntax to declare a target Symbol key!
    location: " Assam ",
    email: "shahbaz@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
```
🔍 How to Correctly Access Object Properties
1. The Dot Notation (.)
The most common access method.

```JavaScript
console.log(JsUser.email); // Output: shahbaz@google.com
```
2. The Square Bracket Notation ([])
Highly important for advanced development and edge-case handling.

```JavaScript
// Accessing standard values via bracket notation (must pass key as string)
console.log(JsUser["email"]); // Output: shahbaz@google.com

// 🚫 This will fail! Spaced strings cannot be fetched via dot notation:
// console.log(JsUser.full name); 

// ✅ Correct handling for space-separated keys:
console.log(JsUser["full name"]); // Output: Shahbaz Hussain
```
🔥 Critical Interview Case: The Symbol Datatype Key
If an interviewer asks you to use a Symbol as an object's tracking key and log its correct internal type representation, remember this syntax:

Incorrect Approach: mySym: "mykey1" (This maps as a normal string property, failing the test).

Correct Approach: Use square brackets inside the declaration block: [mySym]: "value".

```JavaScript
// Correctly extracting Symbol value mapping
console.log(JsUser[mySym]); // Output: mykey1
console.log(typeof JsUser[mySym]); // Output: string (value data type)
```
🧊 Mutation and Object Controls
Overriding Values
Properties are altered using simple assignment operators (=).

```JavaScript
JsUser.email = "shahbaz@chatgpt.com"; // Modifies email value
```
Freezing Objects
To prevent any external manipulation, deletion, or modification of an object's properties, you can freeze it using Object.freeze().

```JavaScript
Object.freeze(JsUser); // Prevents further state updates

JsUser.email = "shahbaz@microsoft.com"; // This operation will silently fail
console.log(JsUser.email); // Output remains: shahbaz@chatgpt.com
```
⚡ Functions as First-Class Citizens
In JavaScript, functions are treated as first-class citizens. This means they can be processed, stored, and passed around exactly like standard primitive variables.

```JavaScript
// (Assuming JsUser is not frozen above to execute this section)

// Method 1: Basic Function Attachment
JsUser.greeting = function(){
    console.log("Hello JS user");
};

// Method 2: Accessing object parameters locally via 'this' keyword
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // 'this' points to current execution scope
};
```

// ⚠️ Function Reference vs Function Execution
```javascript
console.log(JsUser.greeting);   
// Output: [Function (anonymous)] -> Returns reference only, function does not execute!

console.log(JsUser.greeting()); 
// Output: Hello JS user -> Executes the function properly!

console.log(JsUser.greetingTwo()); 
// Output: Hello JS user, Shahbaz
```
🎯 Key takeaways for coding tasks:
Prefer square bracket notation ([]) whenever keys are spaced or dynamically initialized.

Always wrap your Symbol properties within brackets [symbolVar] within your objects to treat them correctly as true Symbols.

Task 1: The Spaced-Key Challenge
Scenario: You are importing user profile data from a database where some keys have spaces in their names.

Create an object literal named userProfile.

Inside it, add these three properties:

firstName set to "Shahb"

A space-separated key "account balance" set to 15000

location set to "Assam"

Write a script that updates the "account balance" to 12500.

Log the updated balance to the terminal using the correct bracket notation.

```javascript
const userProfile = {
    firstName: "Shahbaz",
    "account balance": 15000,
    location: "Assam",
};

userProfile["account balance"] = 12500;
console.log(userProfile);
```

Task 2: The Hidden Symbol Key (Interview Classic)
Scenario: An interviewer asks you to hide an internal unique ID inside an object using a Symbol so it doesn't accidentally get overwritten as a standard string property.

Define a constant symbol outside your object: const internalId = Symbol("id123");

Create an object named productItem containing properties for itemName: "Mastercopy Sneakers" and price: 3499.

Map your internalId symbol variable inside the object as a hidden tracking key with the value "SKU-9988".

Log the entire productItem object to the console to ensure your symbol property is mapped correctly as [Symbol(id123)]: 'SKU-9988'.

```javascript
const internalId = Symbol("id123");

productItem = {
    itemName: "Mastercopy sneakers",
    price: 3499,
    [internalId]: "SKU-9988",
};

console.log([productItem]);
```

Task 4: The Dynamic Store Greeting (this Context)
Scenario: You need a method inside your user object that builds a personalized welcome string utilizing local object properties.

Create a storeUser object containing a storeName: "Sneaker Hub" and a username: "Shahb".

Dynamically attach a new method/function property called welcomeMessage to this object.

Inside the function body, write a console log using backticks (string interpolation) that outputs exactly:

"Welcome to Sneaker Hub, Shahb!"

Constraint: You must use the this keyword to access both the storeName and username properties dynamically from the execution context. Execute the method using its correct functional syntax (storeUser.welcomeMessage()) to verify the result.

```javascript
const storeUser = {
    storeName: "Sneaker Hub",
    userName: "shahbaz",
};

storeUser.greeting = function() {
    console.log(`Welcome to ${this.storeName}, ${this.userName}`);    
};

storeUser.greeting();
```