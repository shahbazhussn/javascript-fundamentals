let score = "Shahbaz"
//console.log(score);
//console.log(typeof score);

//*************************Conversion*************************//
// 1. Converting to Number
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// 33 => 33
// "33abc" => NaN (Not a Number) Note: The type of NaN is still number
// null => 0
// undefined => NaN
// true => 1; false => 0
// "Shahbaz"(non-numeric string) => NaN

// 2. Converting to Boolean

let isLoggedIn = "Shahbaz"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => fasle
// "Shahbaz"(non-empty string) => true
// ""(empty string) => false

// 3. Converting to String

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// 33 => "33"
// typeof will confirm that the value is now a string.      

// **************************Operation**********************//

let value = 3
let negValue = -3
//console.log(negValue);

//Arithmetic
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "Hello"
let str2 = " Shahbaz"
let str3 = str1 + str2
//console.log(str3);

// The Confusion Part
// console.log("1" + 2); // Output: "12" (string concatenation, not addition)
// console.log(1 + "2"); // Output: "12"
// console.log("1" + 2 + 2); // Output: "122"
// console.log(1 + 2 + "2"); // Output: "32" (1 + 2 is evaluated first, resulting in 3, which is then concatenated with "2")

// Increments
let gameCounter = 100
++gameCounter; // Pre-increment: Increments gameCounter by 1, then returns the new value (101)
console.log(gameCounter); // 101


