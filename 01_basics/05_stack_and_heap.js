// === STACK VS HEAP MEMORY CHEAT SHEET ===

// 1. STACK MEMORY (Used by Primitive types: String, Number, Boolean, null, undefined)
// -> You always get a COPY of the value. Original remains unchanged.

let myName = "Shahbaz";
let anotherName = myName; // Gets a completely independent COPY of the string
anotherName = "Hussain";

console.log(myName);      // "Shahbaz"  (Original didn't change!)
console.log(anotherName); // "Hussain"


// 2. HEAP MEMORY (Used by Non-Primitive types: Objects, Arrays, Functions)
// -> You get a REFERENCE (pointer) to the original data. Modifying the copy changes the original!

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne; // Points to the EXACT SAME memory address in the Heap

userTwo.email = "shahbaz@google.com"; // Modifying userTwo updates the source data

console.log(userOne.email); // "shahbaz@google.com" (Original changed!)
console.log(userTwo.email); // "shahbaz@google.com"06