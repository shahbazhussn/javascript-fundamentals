Truthy and Falsy Values

JavaScript considers values as inherently "truthy" or "falsy" when evaluated in a boolean context.

Falsy Values:
false

0 and -0

BigInt 0n

"" (empty string)

null

undefined

NaN

Truthy Values:
"0" (string containing zero)

'false' (string containing false)

" " (string containing whitespace)

[] (empty array)

{} (empty object)

function(){} (empty function)

5. Checking for Empty Arrays and Objects

Empty Array Check:
```JavaScript
const userEmail = [];

if (userEmail.length === 0) {
    console.log("Array is empty");
}
```
Empty Object Check:
```JavaScript
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
```
6. Nullish Coalescing Operator (??)

The ?? operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined. Otherwise, it returns its left-hand side operand.

```JavaScript
let val1;

val1 = 5 ?? 10;          // Output: 5
val1 = null ?? 10;       // Output: 10
val1 = undefined ?? 15;  // Output: 15
val1 = null ?? 10 ?? 20; // Output: 10 (returns first valid value)
Use Case: Provides a fallback default value when handling database queries or APIs that might return null or undefined.
```

7. Ternary Operator (?:)

A shorthand for an if-else statement.

Syntax:
condition ? trueExpression : falseExpression

```JavaScript
const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than or equal to 80") : console.log("More than 80");