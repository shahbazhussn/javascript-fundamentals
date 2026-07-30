Control Flow (Logic Flow) in JavaScript

Control flow determines the order in which individual statements or instructions are executed in a program. By default, code executes sequentially from top to bottom, but control statements allow conditional execution.

1. Conditional Statements (if and if-else)

Basic if Syntax

An if block executes only if its condition evaluates to true.

```JavaScript
if (condition) {
    // Code executes if condition is true
}
```
Comparison Operators:
< (Less than)

> (Greater than)

<= (Less than or equal to)

>= (Greater than or equal to)

== (Equal to — checks value, allows type coercion)

!= (Not equal to)

=== (Strict Equal — checks both value and data type)

!== (Strict Not Equal)

if-else and else-if Ladder
```JavaScript
const balance = 1000;

if (balance < 500) {
    console.log("Less than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Greater than or equal to 900");
}
```
2. Logical Operators

Used to combine multiple conditions inside conditional statements.

AND (&&): Evaluates to true only if all conditions are true.

OR (||): Evaluates to true if at least one condition is true.

NOT (!): Inverts the boolean value (!true becomes false).

```JavaScript
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Both conditions must be true
if (userLoggedIn && debitCard) {
    console.log("Allowed to buy course");
}

// At least one condition must be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}