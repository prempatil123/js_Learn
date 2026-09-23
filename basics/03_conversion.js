
let score = "33";
//console.log(typeof score); // "string"

let numericScore = Number(score);
//console.log(typeof numericScore); // "number"
//console.log(numericScore); // 33
 let boolean = Boolean(numericScore);
 //console.log(typeof boolean); // "boolean"
 //console.log(boolean); // true
 //link to study more about type conversion in js
  // https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
 // ******************OPERATIOONS******************
let value = 10;
let negvalue = -value;
//console.log(negvalue); // -10
//console.log(2 + 2); // 4
//console.log(2 - 2); // 0
//console.log(2 * 2); // 4
//console.log(2 / 2); // 1    
//console.log(2 % 2); // 0
//console.log(2 ** 3); // 8 this is exponentiation operator
//console.log(2 + "2"); // "22" (string concatenation)
//console.log(2 % 2); // 0 this is to find the remainder of the division

let str = "hello";
let str2 = " world";
let str3 = str + str2;
//console.log(str3); // "hello world" (string concatenation)
console.log("1" + 1); // "11" (string concatenation)
console.log(1 + "1"); // "11" (string concatenation)
console.log("1" + 1 + 1); // "111" (string concatenation)
console.log(1 + 1 + "1"); // "21" (string concatenation) 
//  this type of code is not recommended as it is not
//   readable and can lead to confusion use brackets to make it more readable
//console.log(+true); // 1 (boolean to number conversion) vice versa
//console.log(+""); // 0 (empty string to number conversion) this type of conversion 
// is not recommended as it is not readable and can lead to confusion use brackets to make it more readable
let gameCounter = 100;
gameCounter++;
//console.log(gameCounter); // 101 (increment operator)
//prefix increment operator
let counter = 5;
let newCounter = ++counter;
//console.log(newCounter); // 6 (prefix increment operator)
let x = 3;
const y = x++;
// in postfix it returns the value of x before incrementing it so y will be 3 and x will be 4
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
