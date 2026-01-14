/*
===================================
Topic: Functions in JavaScript
Goal: Understand function declaration, function expression, parameters, default parameters and return statement.
===================================
*/

// --------------------
// 1. Function Declaration
// --------------------

// Syntax : 
// function functionName(parameters){
//        function body;
//        return value; // Optional
// }

function add(a, b){
    let sum = a + b;
    return sum;
}

console.log(add(6,9)); // 15

// --------------------
// 2. Function Expression
// --------------------

// Syntax : 
// const functionName = function(parameters){
//         function body;
//         return value; // optional
// }

// When you assign a function (can be named or anonymous) to a variable. The function can then be used by calling the variable.
// Since function expression is just a variable, using var / let / const doesn't matter.
// In real projects, var causes hoisting confusion and scope leaks.
// That's why, modern JS style guide says : 
// Use const by default, let only if reassignment is required, avoid var.

const addition = function(a, b){
    return a + b;
}

console.log(addition(4,5)); // 9

// --------------------
// 3. Function Parameters
// --------------------

// Syntax : 
// function functionName(param1, param2, param3){
//          use parameters;
// }

function multiply(a, b){
    return a * b;
}

console.log(multiply(3,4)); // 12

// --------------------
// 4. Default Parameters
// --------------------

// Syntax :
// function functionName(param1 = defaultValue1, param2 = defaultValue2){
//          use parameters;
// }

function greet(name = "Guest"){
    return "Hello " + name;
}

console.log(greet()); // Hello Guest
console.log(greet("Arjun")); // Hello Arjun

// --------------------
// 5. Return Statement
// --------------------

// Syntax : 
// return expression;

function plusOne(n){
    return n + 1;
}

console.log(plusOne(10)); // 11

/*
===================================
Exercises: Functions
===================================
*/

// 1. Function Declaration

// Q1: Write a function named subtract that takes two numbers and returns their difference.
// Example: subtract(10, 4) -> 6

function subtract(num1, num2){
    return num1 - num2;
}

console.log(subtract(11, 5)); // 6

// Q2: Write a function named areaOfCircle that takes radius and returns the area.
// Example: areaOfCircle(7) -> 153.94 (approx)

function areaOfCircle(radius){
    return 3.14 * radius * radius;
}

console.log(areaOfCircle(3)); // 28.26

// 2. Function Expression

// Q3: Create a function expression named isEven that returns true if a number is even, otherwise false.
// Example: isEven(6) -> true, isEven(7) -> false

const isEven = function(num){
    return num % 2 == 0;
}

console.log(isEven(7));

// Q4: Create a function expression named isPositive that returns true if a number is greater than 0, otherwise false.
// Example: isPositive(5) -> true, isPositive(-2) -> false

const isPositive = function(num){
    return num > 0;
}

console.log(isPositive(3));

// 3. Parameters

// Q5: Write a function findMax that takes three numbers and returns the largest one.
// Example: findMax(3, 9, 1) -> 9

function findMax(num1, num2, num3){
   return (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
}

console.log(findMax(3, 9, 1));

// Q6: Write a function findMin that takes three numbers and returns the smallest one.
// Example: findMin(3, 9, 1) -> 1

function findMin(num1, num2, num3){
    return (num1 < num2) ? (num1 < num3 ? num1 : num3) : (num2 < num3 ? num2 :num3);
}

console.log(findMin(3,9,1));

// 4. Default Parameters

// Q7: Write a function power that takes two parameters: base and exponent.
// If exponent is not provided, it should default to 2.
// Example: power(5) -> 25, power(2, 3) -> 8

function power(base, exponent = 2){
    return base ** exponent;
}

console.log(power(2, 3));

// Q8: Write a function greetUser that takes name and city.
// If city is not provided, it should default to "Pune".
// Example: greetUser("Preet") -> "Hello Preet from Pune"

function greetUser(name, city = "Pune"){
    return "Hello " + name  + " from " + city;
}

console.log(greetUser("Harsh"));

// 5. Return Statement
// Q9: Write a function fullName that takes firstName and lastName
// and returns them combined as a single string.
// Example: fullName("Preet", "Sahu") -> "Preet Sahu"

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

// console.log(fullName); Prints the entire function
console.log(fullName("Deependra", "Goyal"));

// Q10: Write a function average that takes two numbers and returns their average.
// Example: average(4, 6) -> 5

function average(num1, num2){
    return (num1 + num2) / 2;
}

console.log(average(10,50));

// 6. Mixed Practice
// Q11: Write a function calculator that takes three parameters: a, b, and operation.
// operation can be "add", "sub", "mul", "div".
// Return the result based on the operation.

function calculator(num1, num2, operation){
    if(operation === "add") return num1 + num2;
    else if(operation === "sub") return num1 - num2;
    else if(operation === "mul") return num1 * num2;
    else if(operation === "div") return num1 / num2;
    else return "Invalid operation";
}

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "sub"));
console.log(calculator(10, 5, "mul"));
console.log(calculator(10, 5, "div"));

// Q12: Write a function compare that takes two numbers and returns
// "greater", "smaller", or "equal" based on their comparison.

function compare(num1, num2){
    if(num1 > num2) return num1 + " is greater than " + num2;
    else if(num1 < num2) return num1 + " is lesser than " + num2;
    else num1 + " and " + num2 + " are equal";
}

console.log(compare(4,5));