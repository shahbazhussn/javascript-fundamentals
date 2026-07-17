// 1. Same Types (Predictable)
console.log(2 > 1);   // true
console.log(2 == 1);  // false

// 2. Different Types (Avoid - JS forces type conversion)
console.log("2" > 1);  // true ("2" becomes number 2)
console.log("02" > 1); // true

// 3. The Null Quirk (Inconsistent language behavior)
// NOTE: Comparisons (>, >=) convert null to 0. Equality (==) does not.
console.log(null > 0);  // false (0 > 0 is false)
console.log(null == 0); // false (no conversion here)
console.log(null >= 0); // true  (0 >= 0 is true)

// 4. Undefined Behavior
// Always returns false when compared to 0
console.log(undefined == 0); // false
console.log(undefined > 0);  // false

// 5. Loose (==) vs Strict (===)
console.log("2" == 2);   // true  (checks value only, converts type)
console.log("2" === 2);  // false (checks value AND type. Strict check)

// GOLDEN RULE FOR CLEAN CODE: 
// Always compare same data types and use === instead of ==. Avoid null/undefined math.