/*
===================================
Topic: Arrow Functions in JavaScript
Goal: Understand arrow function, this behavior and lexical scope.
===================================
*/

// --------------------
// 1. Arrow Function
// --------------------

// They are a new way to write functions using the => syntax. They are shorter and do not have their own binding, 
// which makes them useful in some cases. 

// Syntax :
// const functionName = (paramters) => {
//    function body;
//    return value; // optional 
// };

const add = (a, b) => {
    return a + b;
};

// Short form (implicit return for single expression)

const square = n => n * n;

console.log(add(4, 5)); // 9
console.log(square(4)); // 16

// --------------------
// 2. this behavior (Normal vs Arrow )
// --------------------

// In normal functions, `this` depends on how the function is called.

const obj1 = {
    value : 10, 
    show : function(){
        console.log(this.value); // refers to obj1
    }
};

obj1.show(); // 10

// In arrow functions, `this` is taken from surrounding (lexical) scope.

const obj2 = {
    value : 20,
    show : () => {
        console.log(this.value); // NOT obj2 but outer scope.
    }
};

obj2.show(); // undefined (or window / global value)

// Here: show is an arrow function.
// Arrow functions do not have their own this.
// Instead, they take this from the surrounding (lexical) scope.
// What is the surrounding scope here?
// This object is written in the global scope.
// In the global scope:
// In browser: this = window
// In Node.js: this = {} (module object)
// So inside the arrow function: this is NOT obj2
// It is the outer this (global one), this.value there is undefined

// --------------------
// 3. Lexical Scope
// --------------------

// Lexical scope means: a function can access variables from where it is written, not from where it is called.

let a = 10;

function outer(){
    let b = 20;
    
    function inner(){
        let c = 30;
        console.log(a, b, c); // can access all outer variables
    }

    inner();
}

outer(); // 10 20 30

// Arrow functions also follow lexical scoping (especially for `this`).

/*
===================================
Exercises: Arrow Functions
===================================
*/

// 1. Normal vs Arrow `this`

// Q1: Create an object person with properties: name and age.
// Add a method showName using a normal function that prints the name using `this`.

// let person = {
//     name : "Shashank", 
//     age : 68, 
//     showName : function(){
//         console.log(this.name);
//     }
// };

// person.showName(); // Shashank

// Q2: Create the same object, but write showName using an arrow function.
// Call it and observe what `this.name` prints. Explain why.

let person = {
    name : "Shashank", 
    age : 68, 
    showName : () =>{
        console.log(this.name); // undefined
    }
}

person.showName();

// 2. Fix the Bug (Arrow `this`)

// Q3: The following code is wrong. Fix it so that it correctly prints "Laptop".
// const item = {
//     name: "Laptop",
//     print: () => {
//         console.log(this.name);
//     }
// };
// item.print();

const item = {
    name : "Laptop", 
    print : function(){
        console.log(this.name);
    }
};

item.print();


// 3. Lexical Scope
// Q4: Write a function outer that has a variable x = 5.
// Inside it, write a function inner that prints x.
// Call outer and observe the output.

function outerFunction(){
    let x = 5;
    function innerFunction(){
        console.log(x);
    }
    innerFunction();
}

outerFunction();


// 4. Arrow Function with Lexical `this`
// Q5: Create an object counter with a property count = 0.
// Add a method increment that uses setTimeout.
// Inside setTimeout, use an arrow function to increase count by 1 using `this`.
// Print count after 1 second.

const counter = {
    count : 0, 

    increment : function(){
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};
counter.increment();

// 5. Predict the Output
// Q6: Predict the output and then run it:
/*
let value = 100;

const obj = {
    value: 200,
    show: function(){
        const arrow = () => {
            console.log(this.value);
        };
        arrow();
    }
};

obj.show();
*/
