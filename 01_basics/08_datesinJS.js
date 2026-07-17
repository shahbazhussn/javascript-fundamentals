// ==========================================
// DATE AND TIME IN JAVASCRIPT (IN-DEPTH)
// ==========================================

/* 
💡 CONCEPT: 
- JavaScript Date objects represent a single moment in time on a platform-independent format.
- Dates are calculated in milliseconds from an arbitrary baseline called the "Unix Epoch": 
  January 1st, 1970.
- Managing dates has historically been a long-standing pain point in JavaScript.
- 🚀 FUTURE NOTE (Temporal API): The TC39 consortium has proposed a new global "Temporal" API 
  (like the Math object) to make date handling far easier in the future (e.g., Temporal.Now.instant()).
*/

// Creating a new Date Instance (Represents the current date and time)
let myDate = new Date();
console.log(myDate); // Output: A raw ISO date string (hard to read)

// ---- Common Date Methods & Formats ----

console.log(myDate.toString());       // Output: Wed Mar 01 2023 00:00:00 GMT+0530 (IST)
console.log(myDate.toDateString());   // Output: Wed Mar 01 2023 (Only Date, no Time)
console.log(myDate.toLocaleString()); // Output: 1/3/2023, 12:00:00 am (Standard local representation)
console.log(myDate.toJSON());         // Output: 2023-03-01T... (Same as ISO format)

// ---- 🔥 INTERVIEW TRICK: Type of Date ----
console.log(typeof myDate); // Output: "object" (JavaScript Date is an Object!)


// ==========================================
// CREATING SPECIFIC DATES
// ==========================================

// Format 1: Passing Arguments (Year, Month, Date)
// ⚠️ WARNING: In JavaScript, when passing numbers as arguments, Month indexing starts from 0 (0 = January, 11 = December).
let myCreatedDate1 = new Date(2023, 0, 23); 
console.log(myCreatedDate1.toDateString()); // Output: Mon Jan 23 2023

// Format 2: Passing Arguments with Time (Year, Month, Date, Hour, Minute)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // Output: 23/1/2023, 5:03:00 am

// Format 3: Passing specific Date Strings (YYYY-MM-DD)
// 💡 NOTE: When using strings, Month counting starts normally from 01 (01 = January).
let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString()); // Output: 14/1/2023

// Format 4: Indian Preferred Format (MM-DD-YYYY)
let myCreatedDate4 = new Date("01-14-2023");
console.log(myCreatedDate4.toLocaleString()); // Output: 14/1/2023


// ==========================================
// TIMESTAMPS IN JAVASCRIPT
// ==========================================
/* 
💡 USE CASE: Timestamps are highly useful when designing quizzes, real-time polls, 
or hotel booking systems where you need to check who responded fastest or calculate elapsed time.
*/

let myTimeStamp = Date.now(); 
console.log(myTimeStamp); // Output: A long number representing total milliseconds elapsed since Jan 1, 1970.

// Getting milliseconds from a specific created date to compare them:
console.log(myCreatedDate4.getTime()); 

// ---- 🔥 INTERVIEW TRICK: Convert Milliseconds to Seconds ----
// Dividing by 1000 converts ms to seconds, but introduces decimals. Use Math.floor to round it cleanly.
console.log(Math.floor(Date.now() / 1000)); 


// ==========================================
// EXTRACTION & ADVANCED CUSTOMIZATION
// ==========================================

let newDate = new Date();
console.log(newDate.getMonth());     // Returns Month index (starts at 0, so add +1 for end-users)
console.log(newDate.getMonth() + 1); // User-friendly current month number
console.log(newDate.getDay());       // Returns Day index (1 = Monday, 2 = Tuesday...)

// String Interpolation with Dates
console.log(`Today's date is ${newDate.getDate()} and the current month is ${newDate.getMonth() + 1}`);

// ---- Pro Tip: Highly Customizing toLocaleString() ----
// You can pass an internationalization configuration object to perfectly customize formatting.
let customizedDate = newDate.toLocaleString('default', {
    weekday: "long", // Options: "long" (e.g., Wednesday), "short", "narrow"
    timeZone: "Asia/Kolkata"
});

console.log(customizedDate); // Output will cleanly show the full customized weekday name based on configuration. 

