1. for...of Loop
Purpose: Best suited for iterating directly over iterable objects such as Arrays, Strings, and Maps.

Key Characteristic: Gives the direct values contained in the iterable rather than their indexes.

Syntax Example:

```JavaScript
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num); // Outputs: 1, 2, 3, 4, 5
}
```
Iterating over Strings: Iterates character by character (e.g., printing "H", "e", "l", "l", "o").

Maps with for...of:

A Map holds unique key-value pairs in insertion order.

You can destructure keys and values using array destructuring:

```JavaScript
const map = new Map();
map.set('IN', 'India');
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
```
Note: The for...of loop does not work directly on standard JavaScript objects as plain objects are not iterable by default with this syntax.

2. for...in Loop
Purpose: Best suited for iterating over Objects.

Key Characteristic: Iterates over the keys (or property names/indexes) rather than direct values.

Iterating over Objects:

```JavaScript
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby'
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
```
for...in with Arrays: Iterating over an array with for...in gives array indexes (0, 1, 2...), not the array elements.

Note: for...in does not iterate over Map objects.

3. forEach Loop
Purpose: A higher-order array method built directly into JavaScript arrays.

Key Characteristic: Takes a callback function and executes it once for every element in the array.

Basic Syntax (Callback Functions):
```JavaScript
const coding = ["js", "ruby", "python", "cpp"];

// Standard function
coding.forEach(function (val) {
    console.log(val);
});

// Arrow function syntax
coding.forEach((item) => {
    console.log(item);
});
```
Accessing Parameters:
The callback function inside forEach can receive up to three parameters:

item: The current element.

index: The index of the current element.

arr: The complete array being traversed.

```JavaScript
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
Iterating over Arrays of Objects (Common Real-World Scenario):
In real-world applications (e.g., handling API/database responses), data often comes as an array of objects. forEach makes accessing properties within these objects simple:

JavaScript
const myCoding = [
    { languageName: "JavaScript", languageFile: "js" },
    { languageName: "Java", languageFile: "java" },
    { languageName: "Python", languageFile: "py" }
];

myCoding.forEach((item) => {
    console.log(item.languageName); // Outputs: JavaScript, Java, Python
});
```

Task 1: for...of Loop with Strings & Arrays
Create an array of your top 3 favorite programming languages and a string variable with your name.

Use a for...of loop to print each language from the array.

Use another for...of loop to print every character of your name on a new line.
```Javascript
const myArr = ["javascript", "python", "java", "react"];
const myName = "Shahbaz";

for (const item of myArr) {
    console.log(item);
}

for (const char of myName) {
    console.log(char);
}
```

Task 2: for...in Loop with Objects
Create an object representing a student profile with properties like name, age, course, and semester.

Use a for...in loop to iterate over the object and log output formatted like:
Property: <key> | Value: <value>
```Javascript
const myObject = {
    name: 'Shahbaz',
    age: 23,
    course: 'mechanical',
    semester: 7,
}

for (const key in myObject) {
    console.log(`Property: ${key} | Value: ${myObject[key]}`);
}
```

Task 3: for...of with Map Destructuring
Create a new Map that stores 3 country codes and their full names (e.g., 'IN' => 'India', 'US' => 'United States').

Use map.set() to add the pairs.

Use a for...of loop with array destructuring ([key, value]) to log:
Country Code: IN -> Country: India
```Javascript
const map = new Map ();
map.set('IN', 'India'); 
map.set('US', 'United States'); 
map.set('FR', 'France'); 

for (const [key, value] of map) {
    console.log(`Country Code: ${key} -> Country: ${value}`);
}
```

Task 4: forEach with Array of Objects

Create an array named books containing 3 objects. Each object should have title, author, and year.

Use the .forEach() array method (using an arrow function) to iterate through the array and print:
"<title>" was written by <author> in <year>.
```Javascript
const books = [
    {title: 'Pride and Prejudice', author: 'Jane Austen', Year: 1813},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', Year: 1925},
    {title: 'Nineteen Eighty-Four', author: 'George Orwell', Year: 1949},
];

books.forEach((val) => {
    console.log(`${val.title} was written by ${val.author} in the year ${val.Year}.`);  
});
```