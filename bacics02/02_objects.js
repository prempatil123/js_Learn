//OBJECTS IN JAVASCRIPT : object is a way to store related data and functions together using key-value pairs.

/*student → object
name, age, branch → properties (keys)
"Prem", 20, "Computer Engineering" → values*/

// singleton: if created using a constructor, it becomes a singleton
// Object.create // constructor operator

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "hitesh",
    "myName": "PremPatil",
    age: 18,
    [mySym]: "myKey1", // square brackets are required to use the symbol as a key
    location: "jalgoan",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["mondays", "Saturday"],
    greetings: function () {
        console.log(`Hello ${this.name}`)
    }
}
//
//console.log(JsUser.name)
//console.log(JsUser["name"]) // both are same
//console.log(JsUser["myName"])
//console.log(JsUser[mySym])// console.log(JsUser.mySym) // this will not work because mySym is a symbol, not a string key
//
JsUser.email = "changed email"
//console.log(JsUser.email)

Object.freeze(JsUser) // freeze the object so it cannot be changed further

//console.log(JsUser)
//JsUser.greetings()

///*object singleton(Constructor function)*///
const User = new Object() // constructor function(singleton)
//const User = {} //non constructor function(non singleton)
User.if = "hitesh"
User.name = "PremPatil"
User.age = 18
User.location = "jalgoan"
User.email = "prem@google.com"
//console.log(User);
const User2 = {
    email: "user2@google.com",
    fullName: {
        userfullaName: {
            firstName: "Prem",
            lastName: "Patil"
        }

    }
}
//console.log(User2.fullName?.userfullaName.lastName) // accessing nested object
// here we are using optional chaining operator (?.) to avoid error if any of the nested object is undefined or null


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = {...obj1, ...obj2} // spread operator to merge two objects
const obj3 = Object.assign({}, obj1, obj2) // Object.assign to merge two objects is also used
// here {} is used to create a new object and then obj1 and obj2 are merged into it , if not used, obj1 and obj2 will be merged into the first object passed to Object.assign
//const obj3 = { obj1, obj2 } // this will create a nested object with obj1 and obj2 as properties ( object inside object)
// to learn more about spread operator and Object.assign, you can refer to the following links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }






const users = [
    {
        
        id : 1,
        email:"j@gmail.com"   
     },
    {
        
        id : 1,
        email:"j@gmail.com"   
     },
    {
        
        id : 1,
        email:"j@gmail.com"   
     },
    {
        
        id : 1,
        email:"j@gmail.com"   
     }//these ae the objects inside the array, each object is a user with id and email properties
    ]

    users[1].email
    //console.log(User) ;
    //console.log(Object.keys(User)) // to get the keys of the object inside the array
    //console.log(Object.values(User)) // to get the values of the object inside the array
    //console.log(Object.entries(User)) // to get the entries of the object inside the array


    //console.log(User.hasOwnProperty("name")) // to check if the object has a property or not
    //console.log(User.hasOwnProperty("email")) // to check if the object has a property or not
    //console.log(User.hasOwnProperty("location")) // to check if the object has a property or not




    // OBJECTS DESTRUCTURING : it is a way to extract values from an object and assign them to variables
    const course = {
        courseName: "JavaScript",
        price: 999,
        courseInstructor: "Hitesh Choudhary"
    }
    //course.courseInstructor this is the normal way to access the property of an object
    const {courseName, price, courseInstructor: instructor} = course // this is the destructuring way to access the property of an object
    console.log(courseName) // JavaScript
    console.log(price) // 999
    console.log(instructor) // Hitesh Choudhary

   /* {
        "name": "PremPatil",
        "age": 18,
        "location": "jalgoan",
        "email": "prem@gmail.com"
     } */
      // this is the JSON format of the object, it is used to store and 
    // exchange data between server and client, it is a string format of 
    // the object, it can be converted to an object using JSON.parse() method
    //  and vice versa using JSON.stringify() method 

    [
        {},
        {},
        {},// 
    ] //this is the JSON format of the array of objects, it is used to store and exchange data between server and client, it is a string format of the array of objects, it can be converted to an array of objects using JSON.parse() method and vice versa using JSON.stringify() method