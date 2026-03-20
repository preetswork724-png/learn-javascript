/*
===================================
Topic: Arrays
Goal: Understand arrays in javascript.
===================================
*/

// --------------------
// 1. Create array 
// --------------------

// Creating an empty array
let a = [];
console.log(a);
console.log(typeof a);

// Creating an array and initializing the values
let b = [10, 20, 30];
console.log(b);

// Create array using new keyword
let c = new Array(10, 20, 30);
console.log(c);

// --------------------
// 2. Accessing elements from array
// --------------------

console.log(b[0]); // 10
console.log(a[1]); // undefined

// --------------------
// 3. Modifying elements from array
// --------------------

let techStack = ["HTML", "JSS", "JAVA", "REACT"];
console.log(techStack);

techStack[techStack.length - 1] = "SpringBoot";
console.log(techStack);

// --------------------
// 4. Adding elements to the array
// --------------------

techStack.push("Node");
console.log(techStack);

techStack.unshift("CSS");
console.log(techStack);

// --------------------
// 5. Removing elements from the array
// --------------------

// pop() :- Removes the last element from the array
let techLast = techStack.pop();
console.log("Last Element : " + techLast);
console.log("After removing last element from the array : " + techStack);

let aLast = a.pop();
console.log(aLast); // Undefined :- When tried to pop from an empty array.

// shift() :- Removes the element from the first index of the array.
let techFirst = techStack.shift();
console.log("First Element : " + techFirst);
console.log("After removing first element from the array : " + techStack);

// splice() :- Removes or replaces the last element from the array.
techStack.splice(1, 2);
console.log("After removing 2 elements starting from index 1: " + techStack);

// --------------------
// 6. Array Length
// --------------------

console.log("Length of the array techStack is : " + techStack.length);
console.log("Length of the array a is : " + a.length);

// --------------------
// 7. Increase and Decrease the Array Length
// --------------------

techStack.length = 5;
console.log("After increasing the length of the array : ", techStack);

techStack.length = 2;
console.log("After decreasing the length of the array : ", techStack);

// --------------------
// 8. Iterating through the Array Elements.
// --------------------

for(let i = 0; i < techStack.length; i++){
    console.log(techStack[i]);
}

// Using Array.forEach() loop.
techStack.forEach(function myFun(x){
    console.log(x);
})

b.forEach(function myFun(x){
    console.log(x);
})

// --------------------
// 9. Array Concatenation.
// --------------------

let frontEnd1 = ["HTML", "CSS", "JSS", "REACT"];
let frontEnd2 = ["NODE", "NEXT"];

let merged = frontEnd1.concat(frontEnd2);
console.log(merged);

// --------------------
// 10. Conversion to String.
// --------------------

console.log(merged.toString());

// --------------------
// 11. Recognizing an Array.
// --------------------

console.log("Using Array.isArray() method : ",Array.isArray(merged));
console.log("Using instanceof method : ",merged instanceof Array);
console.log(Array.isArray(a));
console.log(a instanceof Array);    

// --------------------
// 12. join()
// --------------------

console.log(techStack.join('|'));
console.log(b.join('@'));

// --------------------
// 13. flat()
// --------------------

let nested = [[1, 2], [3, 4], [7, 8, 9]];
let res = nested.flat(Infinity);
console.log(res);

let skills = [["HTML", "JSS", "CSS"], ["JAVA", "PYTHON", "C#"], ["SQL", "NO SQL"]];
let skillSet = skills.flat(Infinity);
console.log(skillSet);

// --------------------
// 14. slice()
// --------------------

let slicedSkills = skillSet.slice(2, 5);
console.log(slicedSkills);

let p = [1, 2, 3, 5, 6, 7, 98, 9];
console.log(p.slice(1, 3));

// --------------------
// 14. map() :- Creates an array by calling a function on each element present in the parent array. It is non-mutating method.
// --------------------

let sqr = [4, 9, 16, 25];
let sub = sqr.map(geeks);

function geeks() {
    return sqr.map(Math.sqrt);
}
console.log(sub);

// --------------------
// 15. filter() :- Creates a new array  with all the elements that pass the test implemented by the provided function. 
// Does not modify the original array.
// --------------------

let arr1 = [1,2,3,4];
let arr2 = arr1.filter((num) => num > 1);
console.log(arr2);   

let mixed = [-1, -2, -4, 0, 1, 2, 3];
let positives = mixed.filter((num) => num >= 0);
console.log(positives);

// --------------------
// 16. reduce() :- Reduce the array to a single value and executes a provided function for each element of the array (from left to right)
// and the return value is stored inside an accumulator.
// --------------------

let nums = [100, 60, 20, 5];
let processed = nums.reduce(subtract);

function subtract(total, num){
    return total - num;
}

console.log(processed);

let multiplication = nums.reduce(multiply);

function multiply(total, num){
    return total * num;
}

console.log("Multiplication of elements of the array : ", multiplication);

let addition = nums.reduce(add);

function add(total, num){
    return total + num;
}

console.log("Addition of elements of the array : ", addition);

let strArr = ["HOW", "U", "DOIN?"];
let concatenated = strArr.reduce(concat);

function concat(total, str){
    return total + str;
}

console.log(concatenated);

// --------------------
// 18. reverse() :- Reverses the order of the elements in arr in place, modifying the original array.
// --------------------

strArr.reverse();
console.log(strArr);

// --------------------
// 19. some() :- Checks whether at least one element of the array satisfies the condition.
// --------------------

let isPositiveThere = mixed.some((num) => num > 0);
console.log("Is there a positive element present in the array : ", isPositiveThere);

let isZeroThere = mixed.some((num) => num === 0);
console.log("Is zero present in the array : ", isZeroThere);

// --------------------
// Common Errors.
// --------------------

const a1 = [5]; // Array with one element = 5
console.log(a1); 

const a2 = new Array(5); // Empty array with length = 5.
console.log(a2);

const a3 = new Array(5, 2); // Array with elements 5 and 2
console.log(a3);

// --------------------
// Exercise
// --------------------

// Given an array arr[], the task is to print every alternate element of the array starting from the first element.

let arr = [1, 2, 3, 4];
let ans = [];

for(let i = 0 ; i < arr.length; i += 2){
            ans.push(arr[i]);
}

console.log(ans);

// Given an array, arr[] of n integers, and an integer element x, find whether element x is present in the array. 
// Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.

function search(arr, x){
        for(let i = 0 ; i < arr.length; i++){
            
            if(arr[i] == x) return i;
        }
        return -1;
}
