//if 
//const isUserloggedin = true;
//const tempreature = 41
//if ( tempreature <50){// if executes only if the condition is true/
// console.log("less than 50");
//} else{     
//
//console.log("temperature is greater than 50");
//}
//
//const score = 200
//if (score > 100){
//    const power = "flying   "}// if have used var then the power variable will be accessible outside the if block but if we use const or let then it will not be accessible outside the if block
//   
//    console.log(`User has power of ${power}`); ///so thats why we use const or let instead of var because var is function scoped and const and let are block scope
    // the above code will throw an error because power is not defined in this scope because it is defined inside the if block and it is not accessible outside the if block because it is defined using const or let




    //SHORT HAND NOTATION OF IF ELSE STATEMENT

    //const balance = 1000;
    //if (balance > 500) console.log("test"),
    //console.log("test2") // this is also a valid syntax but it is not recommended because it is not readable and it is not a good practice to use this syntax because it can lead to bugs in the code

//if (balance < 500) {
//    console.log("balance is less than 500");//

//} else if (balance <750){
//    console.log("balance is less than 750");//

//}
//if (balance < 900) {
//    console.log("balance is less than 900");//

//} else  {
//    console.log("balance is less than 1200");
//    
//}//


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard&& 2==3) { // here && checks condition on both sides and if both are true then it will execute the code inside the if block
    console.log("user can make a purchase");
}

    if(loggedInFromGoogle || loggedInFromEmail) { // here || checks condition on both sides and if any one of them is true then it will execute the code inside the if block
        console.log("user is logged in");
    }


    // nullish coalescing operator (??): null undefined
    let val1;
    val1 = 5 ?? 10 // seafty check on null and undefined values output :5
    val1 = null ?? 10 // output:10
    val1 = undefined ?? 15
    val1 = null ?? 10 ?? 20 // output: 10 you can also do this

//console.log(val1)

// Terniary Operator 
//condition ? true : false 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
