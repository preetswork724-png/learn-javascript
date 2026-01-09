/*
===================================
Topic: Variables in JavaScript
Goal: Understand var, let, const and scope behavior.
===================================
*/

// --------------------
// 1. var keyword
// --------------------
var n = 5;
console.log(n);

var n = 20; // Redeclaration allowed
console.log(n);

var n = 30 + n;
console.log(n);

// --------------------
// 2. let keyword
// --------------------
let k = "Rohan";
console.log(k);

// let k = "Ritik"; // Redeclaration not allowed
k = 56; //  Reassignment allowed
console.log(k);

// --------------------
// 3. const keyword
// --------------------
const pi = 3.14;
console.log(pi);

// pi = 22 / 7; // TypeError: Assignment to constant variable

/*
===================================
Exercises: Variables
===================================
*/

// 1. Declare a variable using var and update it
var z = 5;
z = z + 5;
console.log(z); // 10

// 2. Redeclare a var variable.
var z = 50;
console.log(z); // 50;

// 3. Redeclare a var variable and add its previous value to it.
var z = 100 + z;
console.log(z); // 150

// 4. Use let to store your age and update it.
let age = 23;
age++;
console.log(age); // 24

// 5. Redeclare a let variable (observe the error).
//let age  = 24; // SyntaxError : Identifier 'age' as already been declared.

// 6. Try changing a const value (observe the error).
const pin = 1234;
//pin = 4567; // TypeError: Assignment to constant variable
console.log(pin);