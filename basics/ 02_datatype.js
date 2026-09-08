"use strict";//treat all js code as newer version
//alert(3+3) //to usee alert there is different syntax in nodejs this works on browser
console.log(3+3); console.log("Hello World"); // the code readablity is diffcult in this form 
                                              // code readiblity should be in a proper format   
console.log("Hello World");
console.log("3+3");                  /* for DOCUMENTATION TC39 and mdn are the best sources for js documentation */


// DATAYPES IN JS
let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "gaming", "coding"]; // Array
let address = { street: "123 Main St", city: "New York" }; // Object
let nullValue = null; // Null is standalone value type
let undefinedValue; // Undefined
let symbolValue = Symbol("unique"); // Symbol is used to create unique identifiers
// number(range) => 2^53 - 1
//bigint => for larger numbers

console.log(typeof name); // "string"
console.log(typeof undefined);// "undefined"
console.log(typeof nullValue); // "object" (this is a known quirk in JavaScript)
console.log(typeof symbolValue); // "symbol"
console.log(typeof hobbies); // "object" (arrays are objects in JavaScript)
console.log(typeof address); // "object"