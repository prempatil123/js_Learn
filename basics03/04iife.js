//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
//IIFE is a function that runs as soon as it is defined
//IIFE is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
(function chai(){ // named iiife
    console.log(`Db is connected`);
})();// to immidiately invoke this function  and to end the function we use semicolon at the end of the function
 // to prevent polluting the global scope we can use IIFE my the above  syntax so that `
// first perenthesis is used to create a new scope and the second parenthesis is used to invoke the function immediately


((name) =>{ //unnamed iiife
    console.log(`Db is connected two ${name}`);
})("John");