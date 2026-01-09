/*
===================================
Topic: Scopes in JavaScript
Goal: Understand where variables are accessible, why var is dangerous, why let / const exist and 
how scope changes inside blocks & functions.
===================================
*/

// --------------------
// Global Scope
// --------------------

let x = 10;

function test(){
    console.log(x);
}

test(); // 10

// --------------------
// Function scope
// --------------------

function fun(){
    var a = 5;
    console.log(a);
}

fun(); 
//console.log(a); // Reference Error

// --------------------
// Block scope
// --------------------

{
    let z = 10;
    const y = 20;
    console.log(z,y);
}

//console.log(z); // Reference Error

{
    var b = 15;
}
console.log(b); // No reference error because var ignores block scope

// --------------------
// Variable Shadowing
// --------------------

let k = 10;

{
    let k = 90;
    console.log(k); // 90 
}

console.log(k); // 10

// --------------------
// Illegal Shadowing
// --------------------

let l = 10;
{
    // var l = 20; // Syntax error
    const l = 30;
    console.log(l);
}

console.log(l);

// --------------------
// Scope Chain
// --------------------

let a = 1;

function outer(){
    let b = 2;

    function inner(){
        let c = 3;
        console.log(a, b, c);
    }

    inner();
}
outer(); // abc
// A function can access variables from the cope where it was defined, not where it was called.

// --------------------
// Loop Scope
// --------------------

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// 3 3 3
// Explanation : var iss function-scoped. So there is only one i shared by all the iterations.
// What does setTimeout do?
// Schedules the callback.
// Does not execute immediately.
// Callback runs after 1 second.
// By then, the loop is already finished.
// The loop stops when i < 3 becomes false.
// All the callback reference the same i.

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 1000);
}

// 0 1 2
// Explanation : 
// let - block-scoped.
// In loops, javascript creates a new binding per iteration.
// Each iteration gets its own j.
// Each callback closes over its own j.
// New variable per iteration.
// Callbacks refer their own copy.

// --------------------
// Exercises
// --------------------

// Exercise 1: 

// Predict output before running

{
    let x = 10;
    {
        let x = 20;
        console.log(x); // 20
    }
    console.log(x); // 10
}

// Exercise 2:

function test() {
    console.log(a); // undefined
    var a = 10;
}
test();

// Exercise 3 : 

{
    const x = 10;
    //x = 20; // Type Error : Assignment to constant variable. 
}


