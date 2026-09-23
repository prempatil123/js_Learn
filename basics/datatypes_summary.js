// Primitive data types in JavaScript
// these types are based on basis of how your data is stored and and how it is accesed
// 7 types : string, number, boolean, null, undefined, symbol, bigint
//const temp = null 
//let userEmail; // this by default undefind
const id = Symbol('123')
const anotherId = Sumbol('123')
console.log(id === anotherId);
const bigNumber = 197467252373782398n
//Reference (non primitive  )
// Array,Objects , functions 

const heros = ["shaktiman","naagraj" ,"doga"];
let myObj = {
    name: "hitesh",
    age:22 ,
}
const myFunction = function(){
    console.log("helow worls")
}
console.log(typeof Functions)   
//all non primitive data types have object type when defyning in code by js 

