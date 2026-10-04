const user = {
    username: "prem",
    prices:999 ,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //here this. makes current context , bractek ke andar jitne bhi variables hai unko call karne ke liye  this. ko use karenge
        //console.log(this); // current variables and values ki baat karta hai



    }
//we can use this keywordmin object 
/* const user = {
    username: "prem",
    prices: 999,

    // this in a normal function refers to the object that called it
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// Arrow function example
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 4));           
out put : prem, welcome to website
sam, welcome to website
7       */ 


}
 
//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()
//console.log(this) // this in browser gives value "window"

//function chai(){
//   let username = "hiteh"
//   console.log(this.username);// functions me aake apan this use nahi kar sakte 
//}
//chai()

 const chai = () => { //this => is arrowfunction
   let username = "hiteh"
   console.log(this);

 }
//chai()

//ARROW FUNCTION
//const addTwo = (num1 , num2)=>{ //basic arrow function syntax
//    return num1 + num2 // explicit return
//console.log(addTwo(3, 4))

//const addTwo = (num1 , num2)=> (num1 + num2) //this is also a arrow function syntax
//console.log(addTwo(3, 4)) // implicit return when you dont have to use return keyword and {} then it is called implicit return
// or yoou my can also write like this 

//const addTwo = (num1 , num2)=> num1 + num2 
//console.log(addTwo(3, 4)) 
// if you use {} you have to use return keyword but if you don't use {} then you don't have to use return keyword


// foe objects and arrays you have to use {} and return keyword because if you don't use {} then it will be treated as a block of code and not an object or array
const addTwo = (num1 , num2)=> ({ username: "hiteh" }) //this is also a arrow function syntax
console.log(addTwo()) 

