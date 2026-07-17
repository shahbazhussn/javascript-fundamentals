1. Creating Singleton Objects (Constructor Style)
In the last video, we used object literals (const obj = {}). In this video, we use the Constructor format.
Both methods create an object, but using new Object() creates a Singleton object.

```JavaScript
// Method A: Singleton object declaration
const tinderUser = new Object(); 

// Method B: Non-Singleton object declaration (literal syntax)
const tinderUser2 = {}; 

// Both print the exact same empty object {} in the console
console.log(tinderUser);
console.log(tinderUser2);

// Adding key-value pairs to our object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
```
2. Objects Inside Objects (Nested Objects)
Just like arrays can have nested structures, objects can contain other objects down multiple levels. You chain them together using dot notation (.) to read the deep data.

```JavaScript
const regularUser = {
    email: "sam@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shahbaz",
            lastName: "Hussain"
        }
    }
};

// Accessing the deep inner value
console.log(regularUser.fullName.userFullName.firstName); // Output: Shahbaz
```
💡 Note: In production, you might see syntax like regularUser.fullName?.userFullName. The question mark (?) is called Optional Chaining. It safely checks if a parent folder exists before looking inside it, preventing the app from crashing if an API returns empty data.

3. Combining/Merging Objects
The Old/Standard Way (Object.assign)
Object.assign(target, source1, source2) copies properties from source objects into a target object.

```JavaScript
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// Standard merging syntax
const combinedObj = Object.assign({}, obj1, obj2, obj3);
console.log(combinedObj); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
```
Why use {} as the first argument? The empty brackets {} act as the Target (the empty box everything gets placed inside). Without {}, all elements get thrown permanently into obj1, changing obj1 itself. Passing { ensures a clean new object is safely returned.

✅ The Modern Way (Spread Operator ...)
Just like dropping a glass breaks it into independent pieces, the spread operator opens up objects so their values can be mixed together in a single line. This is what you will use 90% of the time.

```JavaScript
const finalObj = {...obj1, ...obj2, ...obj3};
console.log(finalObj); // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
```
4. Arrays of Objects (How Database Values Arrive)
When you fetch lists from real databases, they almost always arrive formatted as an Array holding multiple individual Objects.

```JavaScript
const databaseResponse = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "s@gmail.com" },
    { id: 3, email: "a@gmail.com" }
];

// To read data, target the array index first, then use the dot property key
console.log(databaseResponse[1].email); // Output: s@gmail.com
```
5. Critical Object Helper Methods
These helper methods are vital when you need to run loops or verify backend states:

```JavaScript
// A. Extracting all Tracking Keys
console.log(Object.keys(tinderUser)); 
// Output: [ 'id', 'name', 'isLoggedIn' ] 
// 🌟 CRITICAL: It returns the keys packaged inside a clean ARRAY datastructure.

// B. Extracting all Values
console.log(Object.values(tinderUser)); 
// Output: [ '123abc', 'Sammy', false ] (Returns values in an array)

// C. Extracting complete Entries
console.log(Object.entries(tinderUser)); 
// Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] 
// Loops everything into minor index pairs.

// D. Safe Property Checking (.hasOwnProperty)
// Checks if a property exists inside an object BEFORE you try to read it to avoid crashes.
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true
console.log(tinderUser.hasOwnProperty('isLoggedOut')); // Output: false
```

Task 1: The Multi-Layer Profile Miner (Nested Objects)
Scenario: You are parsing a complex user profile structure fetched from a social media API.

Create a nested object literal named ecomUser.

Inside it, structure the data so it matches this nesting:

An email field set to your choice of string.

A preferences object that contains a nested theme object.

The theme object should have two key-value properties: current: "dark" and fallback: "light".

Write a script that reads the deep current theme value using dot notation and prints it to the console

```javascript 
const ecomUser = {
    email: "user@gmail.com",
    preferences: {
        current: "dark",
        fallback: "light",
    }
}    

console.log(ecomUser.preferences.current);
```
Task 2: The Cart Merger (Spread Operator vs Object.assign)
Scenario: A customer is shopping anonymously, then logs into their account. You need to combine their guest shopping cart items with their saved user profile preferences.

Create two distinct objects:

const baseProfile = { username: "shahbaz", tier: "premium" };

const currentCart = { item: "Mastercopy Dunks", quantity: 1 };

Part A: Merge these two objects together using Object.assign(). Ensure you use an empty target object {} as the first parameter so you don't mess up the original objects. Store the result in combinedSession1.

Part B: Do the exact same merge, but use the modern Spread Operator (...) instead. Store the result in combinedSession2.

Print both to confirm they look identical.

```javascript
const baseProfile = {username: "shahbaz", tier: "premium"};
const currentCart = {item: "Nike Dunks", quantity: 1};

const combinedSession1 = Object.assign({}, baseProfile, currentCart);
// console.log(combinedSession1);

const combinedSession2 = {...baseProfile, ...currentCart};
console.log(combinedSession2);
```

Task 3: The API Response Iterator (Array of Objects)
Scenario: A database backend returns a list of active products in an array format. You need to access a specific item's property.

Create an array named productsList holding three separate objects. Each object should have an id, title, and price.

Item 1: id: 101, title: "Air Force 1", price: 2999

Item 2: id: 102, title: "Jordan 1 High", price: 4499

Item 3: id: 103, title: "Yeezy Boost", price: 5999

Access the price of the second item ("Jordan 1 High") directly from the array index and print it.
```javascript
const productList = [
    {id: 101, title: "Airforce one", price: 2999},
    {id: 102, title: "Jordan 1 High", price: 2699},
    {id: 103, title: "Yeezy Boost", price: 3499},
];

console.log(productList[1].price);
```

Task 4: The Database Integrity Audit (Object.keys & hasOwnProperty)
Scenario: Before sending a user profile off to a database string parser, you need to verify it contains valid diagnostic structural values to prevent processing bugs.

Create an object:

```JavaScript
const targetUser = { uid: "USR-8899", active: true, role: "admin" };
Part A: Extract all keys from targetUser into an array using Object.keys(). Print the array.
```
Part B: Use the .hasOwnProperty() method to safely check if the property "token" exists in the object. Print the true/false result.

```Javascript
const targetUser = { uid: "USR-8899", active: true, role: "admin" };
console.log(Object.keys(targetUser));

console.log(targetUser.hasOwnProperty("token"));
```