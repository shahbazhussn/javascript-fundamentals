switch Statement

The switch statement evaluates an expression, matching its value to a case clause, and executes statements associated with that case.

```JavaScript
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case matched");
        break;
}
```
Important: The break keyword stops execution from falling through to subsequent cases. If omitted, JavaScript will execute all subsequent cases regardless of whether they match (except default).