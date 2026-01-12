/*
===================================
Topic: Iterative statements in JavaScript
Goal: Understand statements those are used for iterating repeatedly until a condition is met.
===================================
*/

// --------------------
// 1. for loop
// --------------------

// Syntax : 
// for(initialization; condition; update){
//     loop body;
// }

for(let i = 1; i <= 5; i++){
    console.log(i);
}

// Printing in the same line.

// 1. Concat a string.
// 2. Add the elements elements in the array.

// --------------------
// 2. while loop
// --------------------

// Syntax :
// while(condition){
//     // loop body
// }

let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

// --------------------
// 3. do-while loop
// --------------------

// Syntax : 
// do{
//     // loop body
// } while(condition)

i = 0;

do{
    console.log(i);
    i++;
}while(i < 0);
// Condition is false from start, but do-while runs once anyway.

// --------------------
// 4. for-of loop (values)
// --------------------

// Syntax :
// for(let element of iterable){
//         body
// }

let arr = ["Shikhar", "Shekhar", "Shelkar"];

for(let str of arr){
    console.log(str);
}

// --------------------
// 5. for-in loop (keys)
// --------------------

// Syntax :
// for(let key in object){

// }

let obj = {
    a : 1,
    b : 2
};

for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}

// --------------------
// 6. break statement
// --------------------

for(let i = 1; i < 11; i++){

    if(i % 2 == 0){
        console.log(i + " : first even number");
        break;
    }

}

// --------------------
// 7. continue statement
// --------------------

for(let i = 1; i < 11; i++){
    if(i % 2 === 0) continue;
    else console.log(i);
}

/*
===================================
Exercises: Loops
===================================
*/

// 1. Print table of 5 using for loop
let num = 5;

for(let j = 1; j < 11; j++){
    console.log(num + " * " + j + " = " + num * j);
}

// 2. Print numbers from 5 to 1 using while loop

let k = 5;
let rev = "";

while( k > 0){
    rev += k + " ";
    k--;    
}

console.log(rev);

// 3. Print "Hello" 3 times using do-while loop.

let count = 1;

do{
    console.log("Hello");
    count++;
}while(count <= 3);

// 4. Print all elements of array using for...of loop

arr = [4, 5, 6, 7, 8];

for(let ele of arr){
    console.log(ele);
}

// 5. Print all keys and values of an object using for...in loop

let student = {
    name : "preet", 
    age : 23, 
    branch : "ece"
};

for(let key in student){
    console.log(key);
    console.log(student[key]);
}

// 6. Use break : stop loop when number becomes 5

for(let j = 1; j <= 10; j++){
    if(j == 5) break;
    console.log(j);
}

// 7. Use continue and skip number 3

for(let i = 1; i <= 10; i++){
    if(i == 3) continue;
    console.log(i);
}


