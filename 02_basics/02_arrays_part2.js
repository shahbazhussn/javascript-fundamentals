// ============================================================================
//                               ARRAYS PART 2
// ============================================================================

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ----------------------------------------------------------------------------
// 1. push() vs concat()
// ----------------------------------------------------------------------------

// ⚠️ THE PROBLEM WITH push():
// push() mutates the ORIGINAL array. It takes the entire second array as a SINGLE element entry.
// marvel_heros.push(dc_heros); 
// console.log(marvel_heros); 
// Output: ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]] -> Nested Array (Array inside Array)
// To access "flash", you'd need awkward indexing: marvel_heros[3][1]

// ✅ THE CONCATENATION WAY: concat()
// concat() does NOT change the original array. Instead, it returns a completely NEW array containing merged elements.
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros); 
// Output: ["thor", "ironman", "spiderman", "superman", "flash", "batman"]


// ----------------------------------------------------------------------------
// 2. The Spread Operator (...)
// ----------------------------------------------------------------------------
// 💡 ANALOGY: Think of an array as a glass. When you drop the glass using `...`, it breaks/spreads all elements into individual items.
// Most modern developers prefer the Spread Operator over concat() because you can merge multiple arrays easily (e.g., [...arr1, ...arr2, ...arr3]).

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); 
// Output: ["thor", "ironman", "spiderman", "superman", "flash", "batman"]


// ----------------------------------------------------------------------------
// 3. Handling Deeply Nested Arrays: flat()
// ----------------------------------------------------------------------------
// flat() resolves situations where arrays are nested inside arrays down multiple levels.
// It creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat() takes an argument for depth (1, 2, etc.). Passing 'Infinity' automatically flattens all levels.
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); 
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// ----------------------------------------------------------------------------
// 4. Data Scrapping / Type-Conversion Array Methods
// ----------------------------------------------------------------------------
/* 💡 USE CASE: When data is scraped from web pages, it often returns in other formats like NodeLists or Objects. 
To run loops or operations on them, you must first verify or parse them into clean arrays.
*/

// A. Array.isArray(): Verifies if the passed argument is an array (Returns true/false)
console.log(Array.isArray("Hitesh")); // Output: false

// B. Array.from(): Converts the passed data format cleanly into an array
console.log(Array.from("Hitesh")); // Output: ['H', 'i', 't', 'e', 's', 'h']

// 🔥 CRITICAL INTERVIEW CASE: Array.from() with Objects
console.log(Array.from({name: "hitesh"})); 
// Output: [] (An empty array!)
// Why? If it cannot directly convert the collection, it defaults to an empty array. 
// You must explicitly tell JavaScript whether you want an array generated from the "keys" or the "values".

// C. Array.of(): Returns a new array instance from a variable set of distinct elements/variables
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); 
// Output: [100, 200, 300]