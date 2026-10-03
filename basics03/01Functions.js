// console.log("H")
// console.log("i")
// console.log("t")
// console.log("e")
// console.log("s")
// console.log("h")

// function printer (msg) {
//     console.log(msg);
// }

// printer("Hi my name is Prem");
// printer("Hi my name is DK");
// printer("Hi my name is Adait");
// printer("I lke coding");

// console.log(2+3)
// console.log(3+3)
// console.log(4+3)
// console.log(5+3)
// console.log(62+3)
// console.log(88+3)
// console.log(3+33)
//parameter and argumrnts here a and b re parameter and 3 are arguments 
/*function adder(a,b) {

    console.log(a+b);
}*/
// Method one for function
function adder(a,b) {

   // let result = a + b
    //return result // after return no code of line is accessible
   return a + b // this is 2nd method to write

}


const result = adder(3,3) // we have to store the return value of the function in a variable to access it outside the function scope
//console.log("Result",result) // we cannot access result here as it is not defined in this scope so we need to define it in the global scope

//how to take parameters in function and how to return the value from function and how to access it outside the function scope
function loginUserMessage(username) // username = "username" = for default name shown so that logic dont reach if else 
 {
    if(username === undefined){ //(!username) =  (username === undefined)
        console.log("Please enter a User name")
        return
    }
    else{
    return`${username} just logged in in the terminal`}
    // function body}
}
console.log(loginUserMessage("prem")) // we can access the return value of the function here as it is
//  defined in the global scope if the username is not passed in the function call then it will return undefined as the username is not defined in the function scope  


function calculateCartPrice(val1,val2,...prices){ //val1 and val2 are normal parameters and ...prices is rest operator which takes all the arguments passed in the function call and stores them in an array called prices
    return pries
}
console.log(calculateCartPrice(20,30,40,50)) // this is called rest operator it takes all the arguments passed in the function call and stores them in an array called prices
 
const user = {
    username: "prem",
    price: 20,} //here we have created an object called user with properties username and price

    function handleObjects(anyobject){
        console.log(`username is ${anyobject.username} 
            and price is ${anyobject.price}`)

    }
    handleObject(user) // we can pass the object as an argument
    //  to the function and access its properties using dot notation