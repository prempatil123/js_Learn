// Primitive data types in JavaScript
// these types are based on basis of how your data is stored and and how it is accesed
// 7 types : string, number, boolean, null, undefined, symbol, bigint
//const temp = null 
//let userEmail; // this by default undefind
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);
//const bigNumber = 197467252373782398n
//Reference (non primitive  )
// Array,Objects , functions 

const heros = ["shaktiman","naagraj" ,"doga"];
let myObj = {
    name: "hitesh",
    age:22 ,
}
const myFunction = function(){
   // console.log("helow worls")
}
//console.log(typeof Functions)   
//all non primitive data types have object type when defyning in code by js 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// types of Memory
// stack(Priitive) , Heap (Non-primitive)
//STACK MEMORY
//this is example of stack memmory in this memory you will gwt copy of things 
let myYoutubename = "thisis name"
let anotherName = myYoutubename
 
anotherName = "vibe code"
console.log(myYoutubename)
console.log(anotherName) // in this typr of memmory the
// Copying behavior: When you assign a primitive variable to a new variable, 
// JavaScript creates a strict, independent copy of that value first variable is 
// copied to nxt one so when we change 
// the variable nxt time it makes changes to tha copied one so that the
//  original veraible is not canged and both have different vales
//HEAP MEMORY
// heap memmory (reference type) in this type of memory you get reference
let userOne = {
    email: "user@gmail.com",
    password: "use@yml"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"
 console.log(userOne.email);
 console.log(userTwo.email); 
 // in this type of memmory the there only onerefernce 