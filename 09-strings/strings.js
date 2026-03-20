/*
===================================
Topic: Strings
Goal: Understand strings in javascript.
===================================
*/

// A JavaScript String is a sequence of characters, typically used to represent text.
// In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), so a single character string is used when we need a character.
// Like Java and Python, strings in JavaScript are immutable.

// --------------------
// Create strings
// --------------------

// Create using literals

// Using single quotes
let str1 = 'abcs';
console.log(str1);

// Using double quotes
let str2 = "abcd";
console.log(str2);

// Create using constructor
// The new String() constructor creates a string object instead of a primitive string. 
// It is generally not recommended because it can cause unexpected behavior in comparisons.

let str3 = new String("xyz");
console.log(str3);

let strUsingConstructor = new String("youtube");
console.log(strUsingConstructor);

// Empty String
let str4 = '';
let str5 = "";

console.log(str4);
console.log(str5);

// Template literal (String interpolation)

let str6 = 'rom';
let str7 = `You are watching ${str6}`;
console.log(str7);

let str8 = `${str6}-com`;
console.log(str8);

let str9 = 'movie';
let str10 = `Romantic ${str9}`;
console.log(str10);

// Multi-line Strings

let para = `This is not a sentence.
This is a paragraph
Understood??`;
console.log(para);

// --------------------
// Basic Operation on strings.
// --------------------

// ------------------------
// 1. Length of a string
// ------------------------

let len = str9.length;
console.log(len);

console.log(str10.length);
console.log(para.length);

// -------------------------
// 2. String concatenation
// -------------------------

let genre = str6 + " " + str9;
console.log(genre);

// -------------------------
// 3. Escape Characters
// We can use escape characters in a string to add single quotes, double quotes and backlash.
// \' - Inserts a single quote
// \"" - Inserts a double quote
// \\ - Inserts a backlash.
// -------------------------

let strWithEscChars1 = "\'Ross\' has 3 failed marriages"; 
let strWithEscChars2 = "\"Suzanne\" has a baby";
let strWithEscChars3 = "\\Rachel\\ is good for Ross";
console.log(strWithEscChars1);
console.log(strWithEscChars2);
console.log(strWithEscChars3);

let himym1 = "\'Ted\' likes museum";
let himym2 = "\"Robin\" likes ice-skating";
let himym3 = "\\Barney\\ likes laser-tag";
console.log(himym1);
console.log(himym2);
console.log(himym3);

// -------------------------
// 4. Breaking Long Strings
// -------------------------

let concStr = "Why DSA " + "isn't enough??"
console.log(concStr);

// -------------------------
// 5. Substring of a string
// We can extract a portion of string using substring() method.
// -------------------------

let str11 = "JSS Tutorial";
let str12 = str11.substring(1, 5);
console.log(str12);
console.log(str11.substring(1, 20)); // Doesn't throw string index out of bounds exception.

// -------------------------
// 6. Convert string to uppercase and lowercase
// -------------------------

let uCase = "upper".toUpperCase();
let lCase = "LOWER".toLowerCase();
console.log(uCase);
console.log(lCase);

// -------------------------
// 7. String search
// -------------------------

let str13 = 'abc def ghi';
let index = str13.indexOf('ghi');
console.log(index);
console.log(str13.indexOf("wxyz"));

// -------------------------
// 8. String replace
// -------------------------

let str14 = "abc abc abc abc";
let replaceInStr14 = str14.replace("abc", "def");
console.log(replaceInStr14);
let fullReplaceInStr14 = str14.replace(/abc/g, 'def');
console.log(fullReplaceInStr14);

// -------------------------
// 9. Trimming whitespaces
// -------------------------

let str15 = '       JAVA        ';
console.log(str15);
console.log(str15.trim());

// -------------------------
// 10. Accessing characters from string
// -------------------------

let str16 = 'Learn Frontend';
let str17 = str16[6];
console.log(str17);
console.log(str17[10]);

// -------------------------
// 10. String comparison in javascript
// -------------------------

let str18 = "Pench";
let str19 = new String("Pench");
console.log(str18 == str19); // true
console.log(str18 === str19); // false (The strings created by new keyword are objects and not strings).
console.log(str18.localeCompare(str19)); // (0 means lexicographically equal) 

let str20 = "Maggie";
let str21 = "maggie";
console.log(str20 == str21);
console.log(str20 === str21);
console.log(str20.localeCompare(str21));

// -------------------------
// String methods
// -------------------------

// -------------------------
// 1. slice() :- Extracts a part of the string based in the given starting-index and ending index and returns a new string 
// -------------------------

let strA = "Take U Forward";
console.log("Sliced string : ", strA.slice(1, 6));
console.log("Original string : ", strA);
console.log("Sliced string : ", strA.slice(1, 20));

// -------------------------
// 2. substring() :- Extracts a part of the string from the start-index to end index. Indexing starts from 0. 
// -------------------------

console.log(strA.substring(0, 10));
console.log(strA.substring(0, 50));
console.log(strA.substring(-1, -1)); // Empty string
console.log(strA.substring(0, -1)); // Empty string
console.log(strA.substring(50, 0)); // Complete string

// -------------------------
// 3. substr() :- This method returns a specified number of characters from the specified index from the given string.
// It extracts a part of the original string.   
// -------------------------

let strB = "The unfair advantage";
let part = strB.substr(3, 7);
console.log(part);

// -------------------------
// 4. replace() :- Replaces a part of the given string with thw original string or a regular expression.
// The original string will remain unchanged.
// -------------------------

let replacedStr = strB.replace("unfair", "fair");
console.log("Original String : ", strB);
console.log("Replaced String : ", replacedStr);

console.log(strB.replace("Is", "The"));

// -------------------------
// 5. replaceAll() :- Returns a new string after replacing all the matches of a string with a specified string or a regular expression. 
// The original string is left unchanged after this operation..
// -------------------------

let strC = "a a a a a a a";
console.log(strC.replace("a", "c"));
console.log(strC.replaceAll("a", "j"));

// -------------------------
// 6. concat() :- Combines the text of two strings and returns a new combined or joined string. 
// To concatenate two strings, we use the concat() method on one object of string and send another object of string as a parameter. 
// This method accepts one argument.The variable contains text in double quotes or single quotes.
// -------------------------

let book = strB.concat(" By Ash Ali");
console.log(book);

// -------------------------
// 7. trim() :- is used to remove either white spaces from the given string. This method returns a new string with removed white spaces. 
// This method is called on a String object. This method doesn't accept any parameter.
// -------------------------

console.log("       Spaces      ".trim());
let spaces = "       Spaces      ";
spaces.trim();
console.log(spaces);
spaces = spaces.trim();
console.log(spaces);

// -------------------------
// 8. trimStart() :- removes whitespace from the beginning of a string. 
// The value of the string is not modified in any manner, including any whitespace present after the string.
// -------------------------

console.log("       Spaces      ".trimStart());

// -------------------------
// 9. padStart() :- pad a string with another string until it reaches the given length. 
// The padding is applied from the left end of the string.
// -------------------------

let strWithStars = "Stars";
strWithStars = strWithStars.padStart(10, '*');
console.log(strWithStars);

strWithStars = "star";
strWithStars = strWithStars.padStart(7, "five");
console.log(strWithStars); // fivstar

// -------------------------
// 10. padEnd() :- pad a string with another string until it reaches the given length. 
// The padding is applied from the right end of the string.
// -------------------------

strWithStars = strWithStars.padEnd(10, "s");
console.log(strWithStars);

// -------------------------
// 11. charAt() :- returns the character at the specified index. String in JavaScript has zero-based indexing.
// -------------------------

let strD = "abc";
console.log(strD.charAt(2));
console.log(strD.charAt(3)); // empty
console.log(strD.charAt(-1)); // empty

// -------------------------
// 12. charCodeAt() :- returns a number that represents the Unicode value of the character at the specified index. 
// This method accepts one argument..
// -------------------------

console.log(strD.charCodeAt(0));
console.log(strD.charCodeAt(1));
console.log(strD.charCodeAt(-1)); // NaN
console.log(strD.charCodeAt(4)); // NaN

// -------------------------
// 13. split() :- splits the string into an array of sub-strings. This method returns an array. 
// This method accepts a single parameter character on which you want to split the string.
// -------------------------

strB = "The-unfair-advantage-by-ash-ali";
let strArr = strB.split("-");
console.log(strArr);
console.log(typeof strArr)

// -------------------------
// 14. localeCompare() :- Compare any two elements and returns a positive number.
// -------------------------

let strE = "cool";
let strF = "cool";
console.log(strE.localeCompare(strF)); // 0

strE = "Cool";
console.log(strE.localeCompare(strF)); // 1

strF = "Fool";
console.log(strE.localeCompare(strF)); // -1

// -------------------------
// 15. indexOf() :- The indexOf() method is used to find the position of a value inside a string. 
// It returns the index where the value first appears.
// -------------------------

console.log(strE.indexOf("Cool"));
console.log(strE.indexOf("Fool"));

// -------------------------
// 16. lastIndexOf() :- Finds the index of the last occurrence of the argument string in the given string.
// -------------------------

let characters = "a b c v c d c z";
console.log(characters.lastIndexOf("c"));

// -------------------------
// 17. startsWith() :- Check whether the given string starts with the characters of the specified string or not.
// -------------------------

console.log(characters.startsWith("a"));
console.log(characters.startsWith("c"));

// -------------------------
// 18. endsWith() :- Whether the given string ends with the characters of the specified string or not.
// -------------------------

console.log(characters.endsWith("a"));
console.log(characters.endsWith("z"));

// -------------------------
// 19. search() :- Search for a match in between regular expressions and a given string object.
// -------------------------

console.log(characters.search("a"));
console.log(characters.search("f"));

// -------------------------
// 20. valueOf() :- Returns the value of the given string.
// -------------------------

console.log("9".valueOf());

// -------------------------
// 21. repeat() :- Build a new string containing a specified number of copies of the string.
// -------------------------

let maxOnes = "1";
console.log(maxOnes.repeat(5));
console.log("@".repeat(7));

// -------------------------
// 22. includes() :- Returns true if the string contains the characters, otherwise, it returns false.
// -------------------------

console.log(characters.includes("a"));
console.log(characters.includes("A"));