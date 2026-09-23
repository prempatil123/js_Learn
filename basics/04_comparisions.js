/*console.log(2>1); // true       
console.log(2<1); // false
console.log(2!=1); // true not equal to
console.log(2==1); // false equal to
console.log(2===1); // false equal to and same type
//console.log(2!==1); // true not equal to and not same type*/

//console.log("2" >1); // true string is converted to number
console.log(null > 0); // false null is converted to 0
console.log(null == 0); // false  bcoz the reasom id that an equality check == and comparisions ><>= work differently in js 
//comparisions convert null to a number, treating it as 0, but equality check does not
//  convert null to a number, so it is not equal to 0
//thats why null == 0 is false but null > 0 is false and null < 0 is also false
console.log(null >= 0); // true null is converted to 0
console.log(undefined > 0); // false undefined is converted to NaN
console.log(undefined == 0); // false undefined is converted to NaN
console.log(undefined >= 0); // false undefined is converted to NaN bassically
//  undefined is not equal to any number or null or any other value it is a standalone value type
/* tha above thype of conversuons are not recommended as it is not readable and can lead to confusion
 use brackets to make it more readable*/
/// === and !=== are strict equality operators they check for both value and type
console.log(2 === 2); // true
console.log(2 === "2"); // false