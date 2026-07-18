Object Destructuring & JSON API Introduction
1. Object Destructuring 🧩
The Problem: Verbose Code
When working with objects, accessing nested values repeatedly using dot notation can make your code look cluttered.

```JavaScript
const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
};

// Accessing standard way:
console.log(course.courseInstructor); // Hitesh
```
The Solution: Syntactic Sugar
Destructuring allows you to cleanly unpack values out of objects into distinct variables.

```JavaScript
// Basic Destructuring Syntax
const { courseInstructor } = course;
console.log(courseInstructor); // Output: Hitesh

// Renaming fields inside destructuring (Alias Method)
const { courseInstructor: instructor } = course;
console.log(instructor); // Output: Hitesh
```
💡 Real-World Framework Context (React Example)
Destructuring is heavily used in React. Instead of passing a generic props argument into a functional component and typing props.company everywhere, components unpack keys instantly within the parameters:

```JavaScript
// React specific syntax (Mental Model)
const Navbar = ({ company }) => {
    return <div>{company}</div>
};
```
2. Introduction to APIs & JSON 🌐
What is an API?
An API (Application Programming Interface) allows you to offload work to someone else's system.

The Restaurant Analogy: When you order food at a restaurant, you look at a menu card and order. You don't worry about how the kitchen prepares the food. The menu card acts as the API Documentation.

Real Example: When clicking "Login with Google", your application relies on Google's API to verify the user account without knowing how Google’s validation engine functions behind the scenes.

Transitioning Formats: XML to JSON
In older architecture, backend servers responded using highly complex XML structures.

Modern web architectures overwhelmingly use JSON (JavaScript Object Notation).

3. JSON Structure Rules 📝
JSON looks exactly like a standard JavaScript object literal, but it has two key differences: it doesn't have a variable name assignment, and both keys and values must be wrapped in double quotes "" (except for numeric and boolean data types).

Standard Object Format JSON:
```JSON
{
    "name": "Hitesh",
    "courseName": "JS in Hindi",
    "price": "free"
}
```
Array Format JSON:
APIs do not always return singular object blocks; data frequently arrives nested as an Array of Objects.

```JSON
[
    { "id": 1, "status": "active" },
    { "id": 2, "status": "pending" }
]
```

Task 1: The Cleaner Variable Extract (Basic Destructuring)
Scenario: You are building a checkout page for your sneaker store and need to quickly extract product specifications without typing the parent object name over and over.

Create an object named sneakerProduct:

```JavaScript
const sneakerProduct = {
    brand: "Nike",
    model: "Dunk Low",
    sku: "NK-DL-001",
    retailPrice: 8999
};
```
Use Object Destructuring in a single line to unpack model and retailPrice into independent variables.

Log both variables to the console to verify they print cleanly.

```Javascript
const sneakerProduct = {
    brand: "Nike",
    model: "Dunk Low",
    sku: "NK-DL-001",
    retailPrice: 8999
};

const { model, retailPrice } = sneakerProduct;
console.log(model);
console.log(retailPrice);
```

Task 2: The Alias Redefinition (Destructuring with Renaming)
Scenario: You pulled an item configuration from a backend database, but the property keys conflict with variables you already declared elsewhere in your script. You need to rename them instantly.

Create an object named apiConfig:

JavaScript
const apiConfig = {
    status: "success",
    timeout: 5000,
    version: "v2.4.0"
};
Destructure the version property from apiConfig, but use an alias to rename the variable to currentAppVersion during the extraction.

Print currentAppVersion to the console.

```Javascript
const apiConfig = {
    status: "success",
    timeout: 5000,
    version: "v2.4.0"
};

const {version: currentAppVersion} = apiConfig;
console.log(currentAppVersion);
```

Task 3: The Mock JSON Auditor (JSON Schema Validation)
Scenario: You want to simulate inspecting raw API output before building a custom data fetching script.

Create a string variable named mockJsonResponse that mimics a true JSON payload. Remember the strict JSON rule from the video notes: both keys and values must be wrapped in explicit double quotes "".

The JSON structure inside the string should contain:

"storeName": "Sneaker Vault"

"isOpen": true (Note: booleans don't take quotes)

"inventoryCount": 45 (Note: numbers don't take quotes)

Use console.log(mockJsonResponse) to print your mock string to the terminal.

```Javascript
const mockJsonResponse =`{
    "storeName": "Sneaker Vault",
    "isOpen": true,
    "inventoryCount": 45,
}`;

console.log(mockJsonResponse);