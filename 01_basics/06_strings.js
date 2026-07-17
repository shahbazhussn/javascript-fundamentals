// 1. Declaration Methods
const name = "shahbaz"; // Standard way
const repoCount = 50;
const gameName = new String('jordan-1-low'); // Object declaration way (gives key-value access in browser console)

// 2. String Interpolation (Modern Way - Backticks)
// Don't use standard concatenation (name + repoCount). Use backticks ` and ${} instead.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

// 3. Core String Properties & Basic Methods
console.log(gameName.length);          // 12 (Finds total length of string)
console.log(gameName.toUpperCase());   // JORDAN-1-LOW (Note: Original string stays same due to Stack Memory!)
console.log(gameName.charAt(2));       // 'r' (Finds what character is at index 2)
console.log(gameName.indexOf('r'));    // 2 (Finds index of the character 'r')

// 4. Extracting Substrings (substring vs slice)
const newString = gameName.substring(0, 4); 
console.log(newString); // "jord" (End index 4 is NOT included)

const anotherString = gameName.slice(-8, 9); 
console.log(anotherString); // "an-1" (slice accepts negative indexes to start counting from the back)

// 5. Sanitizing Strings (trim & replace)
const messyInput = "   sneakers   ";
console.log(messyInput.trim()); // "sneakers" (Removes all unnecessary starting/ending spaces)

const url = "https://instagram.com/shop%20sneakers";
console.log(url.replace('%20', '-')); // "https://instagram.com/shop-sneakers"

// 6. Checking Presence & Splitting
console.log(url.includes('instagram')); // true (Checks if substring exists)

const splitArray = gameName.split('-'); 
console.log(splitArray); // ['jordan', '1', 'low'] (Splits string into an Array based on separator)