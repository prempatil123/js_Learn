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

console.log(JsUser.name)
console.log(JsUser["name"]) // both are same
console.log(JsUser["myName"])
console.log(JsUser[mySym])// console.log(JsUser.mySym) // this will not work because mySym is a symbol, not a string key

JsUser.email = "changed email"
console.log(JsUser.email)

Object.freeze(JsUser) // freeze the object so it cannot be changed further

console.log(JsUser)
JsUser.greetings()