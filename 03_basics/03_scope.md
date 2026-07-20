```Javascript
// Global scope variables
let a = 10;
const b = 20;
var c = 30;

// Block scope
if (true) {
    let a = 100;
    const b = 200;
    var c = 300; // Leaks globally because of 'var'
    
    console.log("Inside block - a:", a); // 100
    console.log("Inside block - b:", b); // 200
    console.log("Inside block - c:", c); // 300
}

// Accessing variables outside the block
// console.log(a); // Error: Block scoped
// console.log(b); // Error: Block scoped
console.log("Outside block - c:", c); // 300 (Leaked)
```

