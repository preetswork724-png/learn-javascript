/*
===================================
Topic: Data Types in JavaScript
Goal: Understand var, let, const and scope behavior.
===================================
*/

// --------------------
// Primitive Datatypes
// --------------------

// --------------------
// 1. Number
// --------------------

let n = 456;
console.log(typeof n); // number
console.log(typeof 456); // number

// --------------------
// 2. String
// --------------------

let s = "Hello, JavaScript";
console.log(typeof s); // string
console.log(typeof "Heyy"); // string

// --------------------
// 3. Boolean
// --------------------

let bool = true;
console.log(typeof bool); // boolean
console.log(typeof true); // boolean

// --------------------
// 4. Undefined
// --------------------

let something;
console.log(typeof something); // undefined
console.log(typeof undefined); // undefined

// --------------------
// 5. Null
// --------------------

let empty = null;
console.log(typeof empty); // object
console.log(typeof null); // object

// --------------------
// 6. Symbol
// --------------------

let sym = Symbol('best');
console.log(sym); // Symbol(best)
console.log(typeof sym); // symbol
console.log(typeof Symbol('better')); // symbol

// --------------------
// 7. BigInt
// --------------------

let bigNo = 2345678901234n;
console.log(bigNo); // 2345678901234n
console.log(typeof bigNo); // bigint
console.log(typeof 23456789n); // bigint

// --------------------
// Non-Primitive Datatypes
// --------------------

// --------------------
// 1. Object
// --------------------

let obj = {
    name : "Mbappe", // Key : Value
    goals : 400
};

console.log(obj); //{name : 'Mbappe', goals : 400}
console.log(typeof obj); // object

// --------------------
// 2. Array
// --------------------

let arr = [1, 2, 3, 4];
console.log(arr); // (4) [1,2,3,4]
console.log(typeof arr); // object

// --------------------
// 3. Function
// --------------------

function fun(){
    console.log("Data Types");
}

console.log(fun()); // undefined
console.log(typeof fun()); // undefined, because every function in javascript returns something. Even if the function returns nothing, undefined is returned implicitly.

// --------------------
// Understanding common expressions
// --------------------

// 1. 
console.log(null == undefined); // false

// In JavaScript, both null and undefined represent "empty" values but are distinct types. 
// null is a special object representing the intentional absence of a value, while undefined signifies that a variable has been declared but not assigned a value. 
// Despite their similar purpose, they are not strictly equal (===) to each other.
// null === undefined evaluates to false because JavaScript does not perform type coercion with ===.


// 2. 
console.log(5 > 3 > 2); // false

// At first glance, this expression may appear to be checking if 5 is greater than 3 and 3 is greater than 2, but JavaScript evaluates it left-to-right due to its operator precedence.
// First, 5 > 3 evaluates to true.
// Then, true > 2 is evaluated, which in JavaScript results in 1 > 2 (since true is coerced to 1), which evaluates to false.
// So, 5 > 3 > 2 evaluates to false.

// 3. 
// console.log([] === []); //  false

// Expression: [] === []
// Result: false
// In JavaScript, arrays are objects. Even if two arrays have the same content, they are still different objects in memory.
// When you compare two arrays with ===, you are comparing their references, not their contents.
// Since [] and [] are different instances in memory, the result is false.

// 4.
console.log("10" < "9"); // true

// Expression: "10" < "9"
// Result: true
// When JavaScript compares strings, it compares their Unicode values lexicographically (character by character).

// "10" is compared to "9". Since "1" has a lower Unicode value than "9", JavaScript determines that "10" is less than "9".
// This comparison might seem counterintuitive, but it's due to JavaScript's string comparison mechanism

// 5.
console.log(NaN === NaN); // false

// Expression: NaN === NaN
// Result: false
// In JavaScript, NaN (Not-a-Number) is a special value that represents an invalid number or the result of an operation that cannot produce a valid number.
// One of the most unusual aspects of NaN is that it is not equal to itself. 
// This behavior exists due to the design of the IEEE 754 standard, which JavaScript follows for floating-point arithmetic.
// As a result, NaN === NaN returns false.

// 6.
console.log(true == 1); // true

// Expression: true == 1
// Result: true
// JavaScript uses type coercion with the loose equality operator (==). When comparing true and 1, JavaScript converts true to 1 and then compares the values.
// Since 1 == 1 is true, the overall expression evaluates to true.
// This behavior might lead to unexpected results in some cases, so it’s often recommended to use the strict equality operator (===) to avoid implicit type coercion. 

// 7. 
console.log(undefined > 0); // false

// Expression: undefined > 0
// Result: false
// When JavaScript attempts to compare undefined with 0, it converts undefined to NaN (Not-a-Number). 
// Any comparison involving NaN returns false.
// undefined > 0 becomes NaN > 0, which evaluates to false.

// 8. 
console.log("5" === 5); // false

// Expression: "5" === 5
// Result: false
// The strict equality operator (===) checks both value and type. Since "5" is a string and 5 is a number, the types are different, and the comparison returns false.
// If you used the loose equality operator (==), JavaScript would perform type coercion, converting the string "5" to the number 5, and the comparison would return true.

// 9.
console.log([1, 2] == [1, 2]); // false

// Expression: [1, 2] == [1, 2]
// Result: false
// Even though both arrays contain the same elements, JavaScript compares arrays by reference, not by value.
// Since each array is a separate object in memory, their references are different, and thus the comparison returns false.
// To check if two arrays are equal, you must compare their contents element by element.

// 10.
console.log(Infinity > 1000); // true

// Expression: Infinity > 1000
// Result: true
// In JavaScript, Infinity represents an unbounded, positive number. 
// It's greater than any finite number, including 1000.
// Therefore, Infinity > 1000 evaluates to true.

/*
===================================
Exercises: Data Types
===================================
*/

// Write the output 

// Exercise 1 (null vs undefined)

let a = null;
let b;

console.log(a == b); // true (== loose equality allows special coercion, null == undefined -> true)
console.log(a === b); // false

// Exercise 2 (Function return)

function test() {
    return;
}

console.log(test()); // undefined
console.log(typeof test()); // undefined

// Exercise 3 (Arrays and Objects)

let x = [];
let y = {};

console.log(typeof x); // object
console.log(typeof y); // object
console.log(Array.isArray(x)); // true

// Exercise 4 (NaN Behavior)

let n1 = 0 / 0;
let n2 = Number("abc");

console.log(n1 === n2); // false
console.log(typeof n1); // number (type of NaN -> number)

// Exercise 5 (String vs Number Comparison)

console.log("20" > 5); // true ("20" coerced to 20 and 20 > 5)
console.log("20" < "100"); // false (Both operands are strings. Lexicographical comparison "2" > "1" -> false)

// Exercise 6 (Boolean coercion)

// Falsy Values :- 0, "", null, undefined, NaN, false

console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false

// Exercise 7 (INterview level)

console.log([] + []); // [] + "" -> "" + "" -> ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 ({} -> treated as an empty block , expression becomes : +[], +[] -> 0)

// Exercise 8 (Reference Check)

let arr1 = [1,2];
let arr2 = arr1;

arr2.push(3); // arr2 stores reference to arr1. Both point to same memory. Mutating one affects the other. Reference equality -> true

console.log(arr1); // (3) [1,2,3]
console.log(arr1 === arr2); //  true


// Exercise 10 (BigInt rules)

let big = 10n;
//console.log(big + 10); // TypeError :- Cannot mix BigInt and other types, use explicit conversions
// Why this fails?
// 10n - bigInt, 10 - number. JS does not allow mixing
// ❌ BigInt + Number
// ✅ Number(big) + 10




