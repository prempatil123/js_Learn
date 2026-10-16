//FOR OF LOOP
/*In JavaScript, the for...of loop is used to iterate directly over the 
values of an iterable object. Introduced in ES6 (ECMAScript 2015), it 
provides a clean, modern, and readable way to loop through data without 
needing to manage loop counters or array indices manually*/

//["" ,"",""]
//[{},{},{}]//obj in array
const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
}
const greetings = "hello world"
for (const greet of greetings){
    //console.log(`each char is ${greet}`)
}

///MAPS //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//Map allows any type of value to be used as a key (including objects, functions, and primitive types), and it explicitly remembers the original insertion order of the elements.
const map = new Map()//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
map.set('IN',"INDIA")
map.set('IN',"INDIA")//DUPILCAT VALUES IS NOT SHOW IN MAP LISTS 
map.set('USA',"UNITEST AMERICA")
map.set('FR',"FRANCE")
console.log(map);
for (const [key,value] of map ) {//
    console.log(key,':-',value);
    
}
const myObject = {//my objext is not iterable in for of loop
    game1: 'NSF',
    game2: 'Spiderman'
}
for (const[kay , value] of myObject){
   // console.log(key,':-',value);
}
