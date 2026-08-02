JavaScript: filter, map, and reduce

1. Why move beyond forEach?

The Problem: A .forEach() loop runs a callback function for every element in an array, but it does not return any value (it returns undefined).

Why it matters: Even if you write return item inside .forEach(), it won't return a new array.

When to use array methods: When you need to transform or filter data and store the result in a new variable, use .filter(), .map(), or .reduce().

2. The .filter() Method

Purpose: Filters items out of an array based on a condition.

How it works: It takes a callback function. If the callback returns true, the item is kept; if false, the item is skipped.

Syntax Examples:

Implicit Return (Single Line):

```JavaScript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Returns all numbers greater than 4
const newNums = nums.filter( (num) => num > 4 );
console.log(newNums); // [5, 6, 7, 8, 9, 10]
Explicit Return (With Curly Braces/Scope):
```
Important: If you open a block scope using {} in an arrow function, you MUST use the return keyword, otherwise it returns an empty array [].

```JavaScript
const newNums = nums.filter( (num) => {
    return num > 4; // 'return' is required here!
} );
```
3. Practical Example: Filtering Real-World Data
Imagine working with an array of objects representing books:

```JavaScript
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
];

// 1. Get all History books:
const userBooks = books.filter( (bk) => bk.genre === 'History' );

// 2. Get books published after 1995 AND in the 'History' genre:
const historyBooksAfter1995 = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History';
} );
```
4. The .map() Method
Purpose: Transforms every element in an array and returns a new array with modified values.

Unlike .filter(), .map() keeps the same array length, but changes the content.

Example:
```JavaScript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add 10 to each number
const newNums = myNumbers.map( (num) => num + 10 );
// Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```
5. Chaining Methods

You can attach multiple array methods together in sequence. The output of the first method passes directly into the second.

```JavaScript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers
                .map( (num) => num * 10 )  // Multiplies every number by 10 [10, 20, 30...]
                .map( (num) => num + 1 )   // Adds 1 to each transformed number [11, 21, 31...]
                .filter( (num) => num >= 40 ); // Keeps numbers >= 40

console.log(newNums); 
// Output: [41, 51, 61, 71, 81, 91, 101]
```
6. The .reduce() Method

Purpose: Reduces an entire array down to a single value (e.g., calculating a sum or grand total).

Key Terms:

accumulator (acc): Stores the accumulated result across iterations.

currentValue (curr): The current item being processed in the loop.

initialValue: The starting value assigned to the accumulator.

Basic Example (Summing Numbers):
```JavaScript
const myNums = [1, 2, 3];

const total = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0 ); // 0 is the initialValue

console.log(total); // 6
```
Real-World Example (Shopping Cart Total):
```JavaScript
const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
];

// Calculate grand total price
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 );

console.log(priceToPay); // 22996
```

Task 1: Filter Numbers (filter)

Create an array named scores with the values: [45, 82, 91, 58, 73, 30, 95, 64].

Use .filter() to create a new array called passingScores containing only scores that are 60 or above.

Log passingScores to the console.
```Javascript
const scores = [45, 82, 91, 58, 73, 30, 95, 64];

const passingScores = scores.filter( (score) => 
        score >= 60
)

console.log(passingScores);
```

Task 2: Transform Data (map)

Create an array of prices in INR: [100, 250, 500, 1200].

Use .map() to apply a 10% discount to every price (e.g., $100 - 10\% = 90$).

Log the new discountedPrices array.
```Javascript
const prices = [100, 250, 500, 1200]

const discountedPrice = prices.map( (price) => price - price * 0.10 )

console.log(discountedPrice);
```

Task 3: Method Chaining (filter + map)

Create an array of numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

Chain .filter() and .map() together to:

    Filter out only the even numbers.
    Square each of those even numbers (e.g., $2 \rightarrow 4, 4 \rightarrow 16$).

Log the final result.
```Javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = nums
    .filter( (num) => num % 2 === 0)
    .map( (num) => num ** 2)

console.log(newNums);
```

Task 4: Calculate Grand Total (reduce)

Create an array named inventory:

```JavaScript
const inventory = [
  { item: "Laptop", price: 45000, quantity: 1 },
  { item: "Mouse", price: 800, quantity: 2 },
  { item: "Keyboard", price: 1500, quantity: 1 }
];
```
Use .reduce() to calculate the total cost of all items in stock (taking price * quantity into account for each item).

Log the total cost.
```Javascript
const inventory = [
  { item: "Laptop", price: 45000, quantity: 1 },
  { item: "Mouse", price: 800, quantity: 2 },
  { item: "Keyboard", price: 1500, quantity: 1 }
];

const totalAmount = inventory.reduce( (acc, item) => acc + item.price * item.quantity, 0)
    
console.log(totalAmount);