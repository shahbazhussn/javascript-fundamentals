// Task 1: Strict Type & Logical Operator Guard
// Write a script that simulates a user attempting to purchase a course on an e-commerce platform.

// Create variables: userLoggedIn (boolean), debitCard (boolean), loggedInFromGoogle (boolean), loggedInFromEmail (boolean), and userAge (string, e.g., "18").

// Conditions to check:

// Check if userAge is strictly equal (===) to the number 18. If it matches, log "Age verified"; otherwise, log "Strict type check failed".

// Allow the purchase only if userLoggedIn AND debitCard are true AND the user is logged in via either Google OR Email.

// Log "Purchased successfully" or "Purchase denied" based on the result.

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;
const userAge = "18";

if (userAge === 18) {
    console.log("Age verified");
} else {
    console.log("Strict type check failed");
}

if (userLoggedIn && debitCard && loggedInFromGoogle || loggedInFromEmail) {
    console.log("Purchase successfully");
} else {
    console.log("Purchase denied");
}
// Task 2: switch Statement with Fall-Through Test
// Create a switch statement that evaluates a user's role (e.g., "admin", "editor", "viewer", or "guest").
// Define const userRole = "editor".
// Handle each role:
// "admin" $\rightarrow$ log "Full access granted".
// "editor" $\rightarrow$ log "Content edit access granted".
// "viewer" $\rightarrow$ log "Read-only access granted".
// default $\rightarrow$ log "Guest access".
// Experiment: Deliberately comment out the break statement under "editor" and run the file to observe how execution falls through to "viewer". (Re-add break after testing!)

const userRole = "editor"

switch (userRole) {
    case "admin": 
        console.log("Full access granted");
        break;
    case "editor": 
        console.log("Content edit access granted");
        // break;
        case "viewer": 
        console.log("Read-only access granted");
        break;
    default:
        console.log("Guest access");
        break;
}