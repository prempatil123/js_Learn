//for in loops
const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]} ]` )
    
    
}


///FORIN LOOP ON ARRAYS ...
/*The for...in loop in JavaScript is used to iterate over 
the enumerable properties (keys) of an object. Unlike standard loops 
that look at values, for...in walks through the keys (property names) 
of an object. 




Loop Type	What it Iterates Over	Best Used For	Notes
for...in               Object Keys (Property names)   	  Objects	Iterates over all enumerable properties, including inherited ones up the prototype chain. Avoid using on arrays.
for...of	           Object Values / Iterable items	  Arrays, Strings, Maps, Sets	Directly loops through values of iterables. Cannot be used directly on plain objects.
Traditional for	       Index counters (0 to length - 1)	  Arrays, Custom indexed iteration	Highly flexible; lets you control the starting point, step size, and direction.
while / do...while	   Conditional loops	              Situations where the number of iterations is unknown beforehand	Runs as long as a specified condition evaluates to true.
forEach()	           Array Values and Indices	Arrays	  A built-in array method. Cannot be broken out of using break or continue.*/
                    // (Functional approach)
const programming = ["js","rb","py","java","cpp"]
for (const key in programming)  {
   // console.log(programming[key]);
}
     



//for in loop in maps dosnt work
const map = new Map()//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
map.set('IN',"INDIA")
map.set('IN',"INDIA")//DUPILCAT VALUES IS NOT SHOW IN MAP LISTS 
map.set('USA',"UNITEST AMERICA")
map.set('FR',"FRANCE")


for (const key in map) {
    console.log(key)
    
    
}