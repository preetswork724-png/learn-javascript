/*
===================================
Topic: Conditional statements in JavaScript
Goal: Understand statements that are used for decision making.
===================================
*/

// --------------------
// If Statement
// --------------------

// The code block gets executed when the condition is satisfied.

let followers = 1001;

if(followers >= 1000){
    console.log("You are a creator");
};

// --------------------
// If-Else Statement
// --------------------

// The if-else statement will perform some action for a specific condition.
// If the condition meets then a particular code of action will be executed otherwise it will execute another code of action that satisfies that particular condition.

if(followers >= 1000){
    console.log("You are an adult");
}
else{
    console.log("You are not a creator");
}

// --------------------
// Switch Statement
// --------------------

// The switch case statement in JavaScript is also used for decision-making purposes.
// In some cases, using the switch case statement is seen to be more convenient than if-else statements.

let day = "Monday";

switch(day){
    case "Monday" : 
    console.log("1st Day of the week");
    break;

    case "Tuesday" : 
    console.log("2nd day of the week");
    break;

    case "Wednesday" : 
    console.log("3rd day of the week");
    break;

    case "Thursday" : 
    console.log("4th day of the week");
    break;

    case "Friday" : 
    console.log("5th day of the week");
    break;

    case "Saturday" : 
    console.log("6th day of the week");
    break;
    
    case "Saturday" : 
    console.log("7th day of the week");
    break;

    default : 
    console.log("Now, that's not a day");
};

// --------------------
// Ternary Operator (Conditional Operator)
// --------------------

// The conditional operator, also referred to as the ternary operator (?:). 
// It is a shortcut for expressing conditional statements in JavaScript.

let num = 9;

let result = num > 9 ? "Not a single digit number." : "Single digit number." ;

console.log(result);