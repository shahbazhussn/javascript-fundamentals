Handling Multiple Parameters (Rest Operator)

The Problem: Sometimes you don't know how many items (arguments) will be passed to a function (e.g., prices in a shopping cart).

The Solution: Use the Rest Operator (...). These three dots bundle multiple arguments into a single array.

Example:

```JavaScript
function calculatePrice(...nums) {
  return nums; // Returns an array of all numbers passed
}
console.log(calculatePrice(200, 400, 500)); // [200, 400, 500]
```
Mixing Parameters: If you have specific parameters mixed with the rest operator, the specific ones get assigned first, and the rest go into an array.

```JavaScript
function calculate(val1, val2, ...nums) {
  return nums;
}
// val1 = 500, val2 = 2000, nums = [300, 400]
```
Passing Objects to Functions
You can define an object and pass it, or pass an object literal directly into the function.

```JavaScript
// Function that handles an object
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// 1. Passing an object defined in a variable
const user = {
    username: "Shahbaz",
    price: 199
};
handleObject(user);

// 2. Passing an object directly
handleObject({
    username: "Sam",
    price: 399
});
```
Passing Arrays to Functions
You can pass an array by reference, then access its elements using the index.

```JavaScript
// Function that returns the second value of an array
function returnSecondValue(getArray) {
    return getArray[1];
}

const myNewArray = [200, 400, 600, 1000];

// Logging the result
console.log(returnSecondValue(myNewArray));

// Passing an array directly
console.log(returnSecondValue([100, 500, 900]));
```

Task 1: The Rest Operator (Shopping Cart)
Create a function called addToCart that accepts any number of item prices using the Rest operator. The function should return the total sum of all items in the array.

```Javascript
function addToCart(...nums) {
    return nums[0] + nums[1] + nums[2] + nums[3];
}

console.log(addToCart(2799, 3477, 6473, 8462));
```

Task 2: Object Data Validation
Create a function called checkUserStatus that accepts a user object.

The function should check if the object has both a name and an isActive property.

If both exist, return a string: "User [name] is currently active: [isActive]".

If any property is missing, return: "Invalid user data".

Challenge: Test this by passing both a valid object and an incomplete object.

```Javascript
function checkUserStatus(anyUser) {
    if(anyUser.name && anyUser.IsActive !== undefined) {
    return `User ${anyUser.name} is currently active: ${anyUser.IsActive}`
    }
    else {
        return `Invalid User Data`
    }
}

console.log(checkUserStatus({
    name: "shahbaz",
    IsActive: true,
}));

console.log(checkUserStatus({
    name: "shahbaz",
}));
```

Task 3: Array Manipulation
Create a function called getArrayBoundaries that accepts an array of numbers.

The function should return an object containing the first and the last element of the array.

Example: If the input is [10, 20, 30, 40], the function should return {first: 10, last: 40}.

```Javascript
function getArrayBoundaries(getArray) {
    return `first: ${getArray[0]}, last: ${getArray[3]}`;
}
const myNewArray = [10,20,30,40];

console.log(getArrayBoundaries(myNewArray));