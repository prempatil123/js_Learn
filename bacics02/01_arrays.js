//ARRAY/
//have sq brackets
const myArr = ["a","b","c","d","e" ,]
//for description link :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const myHeros = ["ironman", "shaktiman"]
const myArrr = new Array( 1, 2, 3, 4) // diff method to define an array
//console.log(myArr[1]);

//Array methods 
//myArr.push(6)
//myArr.push(7)
//myArr.pop() // removes any last element
//myArr.unshift(9) // inserts element at start in case ofmilloins elements computer is over loaded to change the indexing of elements 
//myArr.shift() // remove element from start

//console.log(myArr.includes(9)); //  to check information
//console.log(myArr.indexOf(3));
const newArr = myArr.join() // join converts array to string
//console.log(typeof myArr);
//console.log(newArr);
//console.log(typeof newArr);

//////slice and splice//////////
//console.log("A" , myArr);

const myn1  = myArr.slice(1,3) // do not change the original array
//console.log(myn1);

//console.log("B" , myArr);
const myn2  = myArr.splice(1,3) // change the original array and also include the range

//console.log(myn2);        //th amain differeence btw slice and splice is that splice changes or maniplate the the original array

//console.log("C" , myArr); // this was the original array ehivh is changed dur to the splice

/* array 2.0 */
const  marvel_heros = ["thor" , "ironman ", "loki"]
const dc_heros = ["superman", "fash" ,"batman"]
 //marvel_heros.push(dc_heros)
 //console.log(marvel_heros);
 //console.log(marvel_heros[3][1]);
 const allHeros = marvel_heros.concat(dc_heros)//will merge all arrays properly CALLED "CONCAT OPRATOR"

 //console.log(allHeros);
 //diff method to ad arrays :
 const all_new_heros = [...marvel_heros,...dc_heros] // Spread Operator
 //console.log(all_new_heros);

 const another_array = [ 1 ,2, 3 ,[ 4, 5, 6],7,8,[9,[10,11]]]
 const real_another_array = another_array.flat(2) // flat operator
// console.log(real_another_array);


/// to convert into array .from  , .of is used
 console.log(Array.isArray("hitesh")) // .isArray checks if the folowing is arrays
 console.log(Array.from("hitesh"))
 console.log(Array.from({name:"hitesh"})) // here value in {} ia not converted into array INTRESTING CASE "is neither iterable nor array-like, so JavaScript cannot turn it into an array in the way you expect. That is why it gives an empty array [].

 let score1 = 100
 let score2 = 200 
let score3 = 300
console.log(Array.of(score1,score2,score3))