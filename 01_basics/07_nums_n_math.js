// ==========================================
// 1. NUMBERS IN JAVASCRIPT
// ==========================================

// Implicit Declaration (JavaScript automatically detects the type)
const score = 400; 
console.log(score); // Output: 400

// Explicit Declaration (Specifying that you want a Number Object)
const balance = new Number(100); 
console.log(balance); // Output: [Number: 100]

// ---- Important Number Methods ----

// 1. toString(): Converts a number to a string (so you can use string properties like .length)
console.log(balance.toString().length); // Output: 3

// 2. toFixed(): Fixes the number of digits after the decimal point (Most useful in E-commerce Apps)
console.log(balance.toFixed(2)); // Output: 100.00

// 3. toPrecision(): Focuses on total digits and returns a precise rounded value
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // Output: 124 (Rounded off)
console.log(otherNumber.toPrecision(4)); // Output: 123.9

const trickyNumber = 1123.8966;
console.log(trickyNumber.toPrecision(3)); // Output: 1.12e+3 (Returns exponential form if the number is large)

// 4. toLocaleString(): Adds commas to large numbers to make them easier to read
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000 (Based on the Indian number system)


// ---- Useful Properties for Competitive Programming / DSA ----
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);



// ==========================================
// 2. MATH OBJECT IN JAVASCRIPT
// ==========================================

console.log(Math); // This is a large object containing many properties/methods (Check in console)

// 1. Math.abs(): Absolute Value (Only converts negative to positive, positive remains positive)
console.log(Math.abs(-4)); // Output: 4
console.log(Math.abs(4));  // Output: 4

// 2. Math.round(): Standard rounding rule (0.5 or above -> next integer)
console.log(Math.round(4.3)); // Output: 4
console.log(Math.round(4.6)); // Output: 5

// 3. Math.ceil(): Ceiling (Always rounds up to the next integer, even for small decimals)
console.log(Math.ceil(4.2)); // Output: 5

// 4. Math.floor(): Floor (Always rounds down to the lower integer)
console.log(Math.floor(4.9)); // Output: 4

// 5. Math.min() and Math.max(): To find the lowest or highest number in a list
console.log(Math.min(4, 3, 6, 8)); // Output: 3
console.log(Math.max(4, 3, 6, 8)); // Output: 8



// ==========================================
// 3. THE MOST IMPORTANT CONCEPT: Math.random() & Range Formula
// ==========================================

// Math.random() always returns a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); 

// Multiply by 10 to shift the range from 0 to 9/10
// Add +1 to avoid the zero (0) case so that the minimum value returned is 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); // Integer between 1 and 10 (without decimals)


// ---- 🔥 INTERVIEW TRICK: Generating a random number between a specific Range (Min & Max) 🔥 ----
const min = 10;
const max = 20;

// This is the most crucial formula (Keep this in your notes):
const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomValue); 
// Output: Every time you run this, it will return a single integer between 10 and 20 (both inclusive).
