"use strict" //treat all JS code as newer version

// alert(3  + 3)// works in the browser environment but will throw an error in Node.js because Node uses a different engine API.

// Data types in JavaScript
// 1. Primitive data types
// number ==> Used for integers and floating-point values. Range is roughly 2^{53}
// bigint ==> Used for very large numbers
// string ==> Textual data wrapped in "", '', or backticks.
// boolean ==> true/false
// null ==> A standalone value representing an empty or intentional "nothing" (e.g., a server response for temperature that hasn't arrived yet).
// undefined ==> A variable that has been declared but not assigned a value.
// symbol ==> Used for uniqueness, especially useful in complex front-end frameworks like React.

// 2. Non-primitive data types
// object ==> Used to store collections of data and more complex entities
// function ==> A block of code designed to perform a particular task
// array ==> A special type of object used for storing ordered collections

console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object"
