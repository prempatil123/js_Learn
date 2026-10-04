let a = 100;
const b = 200;
var c = 400;
{//these curly braces are called block scope and the variables defined inside this block scope are not accessible outside this block scope
    let a = 10 ;
    const b = 20 ;
    var c = 40;
    //console.log("inner:",a,b,c);//block scope

}
//console.log("outer :",a,b,c);//global 
//scopes in node and scopes in browser console are different
//  in node the global scope is the module scope and in browser the global scope is the window object


function one (){
    const username = "prem";
    function two (){
        const website = "prem.com";
        console.log(website); // this will work because website is defined in the scope of two and two is defined in the scope of one
    }
    two();// this will work because two is defined in the scope of one and one is defined in the global scope
    console.log(username); // this will throw an error because website is not defined in this scope
}
one(); // this will throw an error because username is not defined in this scope
//two(); // this will throw an error because two is not defined in this scope



if(true){
    const username = "prem";
    if (username === "prem"){ //You are telling JavaScript: "Only run the next block of code if the variable username is exactly the word 'prem', and it must also be a String data type."
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website); this will not be printed
}
//console.log(username);// so does this



///++++++++++++++++++++ intresting ++++++++++++++++++//

console.log(addone(5))
function addone(num){ ///this is function
    return num +1

}
addone(5)
//anothr way to express this is called " EXPRESSION" act like a variable in js

console.log(addTwo(5)) // this will show a error 
const addTwo = function(num){
    return num + 2
}
addTwo(5)// yaha pe declare karne ke sath sath variable ko hold bhi kiy hai
// this is hoisting