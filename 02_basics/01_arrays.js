// ============================================================================
//                               ARRAYS IN JAVASCRIPT
// ============================================================================

/* 💡 DATA STRUCTURE OVERVIEW:
- An array is a data structure that allows you to store a collection of multiple items under a single variable name.
- JavaScript arrays are resizable (you can dynamically change their length after declaration).
- They can store a mix of different data types (e.g., Numbers, Strings, Booleans, Objects, or even other Arrays).
- JavaScript arrays use Zero-based Indexing (the first element starts at index 0).
- JavaScript arrays are not associative arrays; elements cannot be accessed using arbitrary strings as indexes.

🔥 CRITICAL INTERVIEW CONCEPT: Memory Copy Operations
- When you perform copy operations on JavaScript arrays, they create Shallow Copies rather than Deep Copies.
- Shallow Copy: A copy of an object whose properties share the same reference point. 
  (Modifying the copy will manipulate and change the original array in Heap memory).
- Deep Copy: A copy whose properties do not share the same reference points.
*/

// ---- Array Declaration Methods ----

// Method 1: Literal Syntax (Most common way)
const myArr = [0, 1, 2, 3, 4, 5];
const mixedArr = [true, "Hi", 45, [1, 2]]; // Valid mix of multiple types

const myHeroes = ["Ironman", "Batman", "Spiderman"];

// Method 2: Using the New Keyword constructor
const myArr2 = new Array(1, 2, 3, 4);

// ---- Accessing Elements ----
console.log(myArr[0]); // Output: 0 (Accessing the first element via index)


// ============================================================================
//                             CORE ARRAY METHODS
// ============================================================================

// 1. push(): Adds an element to the END of the array
myArr.push(6);
myArr.push(7);
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6, 7]

// 2. pop(): Removes the LAST element from the array (no arguments needed)
myArr.pop();
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]

// 3. unshift(): Adds an element to the START of the array
myArr.unshift(9);
console.log(myArr); // Output: [9, 0, 1, 2, 3, 4, 5, 6]
/* ⚠️ PERFORMANCE WARNING: unshift() forces every single element in the array to shift 
one index position to the right. While okay for a few items, it is highly unoptimized 
and time-consuming for large arrays (e.g., 10,000+ elements). Use carefully!
*/

// 4. shift(): Removes the FIRST element from the array
myArr.shift();
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]


// ---- Question / Investigative Methods ----

// 5. includes(): Checks if an element exists. Returns a Boolean (true/false)
console.log(myArr.includes(9)); // Output: false
console.log(typeof myArr.includes(9)); // Output: boolean (Useful for future conditional logics)

// 6. indexOf(): Returns the index position of the item. Returns -1 if it doesn't exist.
console.log(myArr.indexOf(9)); // Output: -1 (Item not present)
console.log(myArr.indexOf(3)); // Output: 3

// 7. join(): Binds all elements and converts the array into a comma-separated String
const newArr = myArr.join();
console.log(myArr);  // Output: [0, 1, 2, 3, 4, 5, 6] (Type remains: Object)
console.log(newArr); // Output: "0,1,2,3,4,5,6" (Type converts to: String)


// ============================================================================
//                 🔥 THE ULTIMATE INTERVIEW QUESTION: Slice vs Splice 🔥
// ============================================================================

const testArr = [0, 1, 2, 3, 4, 5];

console.log("Original Array Before Operations (A): ", testArr);

// ---- 1. SLICE OPERATION ----
// Syntax: array.slice(startIndex, endIndex)
// Extracts a section of an array without modifying the original array. The endIndex is EXCLUDED.
const myNewArr1 = testArr.slice(1, 3);

console.log("Sliced Result: ", myNewArr1); // Output: [1, 2] (Index 3 is excluded)
console.log("Original Array After Slice (B): ", testArr); // Output: [0, 1, 2, 3, 4, 5] (Unchanged!)


// ---- 2. SPLICE OPERATION ----
// Syntax: array.splice(startIndex, count/endIndex)
// Removes elements directly from the array. The range is INCLUDED, and the original array is MUTATED.
const myNewArr2 = testArr.splice(1, 3);

console.log("Spliced Result: ", myNewArr2); // Output: [1, 2, 3] (Range is fully included)
console.log("Original Array After Splice (C): ", testArr); // Output: [0, 4, 5] (🔥 CRITICAL: Original elements were ripped out!)

/*
🎯 SUMMARY FOR INTERVIEWS:
Most developers mistakenly state that the only difference is that slice excludes the last index and splice includes it. 
The REAL difference is that slice() does NOT change the original array, whereas splice() completely manipulates and mutates the original array by removing those elements from it.
*/





