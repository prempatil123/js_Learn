// for loop 
     //first step initialize loop             //2step:this below upto;is condition check and if the condition is true the next step takes place
     //3rdstep: executon of const and console //4th step : index ki value ko badha deta hai by index++ then again moves to 2nd step , checks the conditionn and loopp continues until the conditionnis met 
     //and if condition is not met loop breaks and moves out of bracket
for (let i = 0; i < 10; i++) {//shortc ut to duplicat is ctrl d to change the index wala keyword 
    const element = i;
    if(element == 7){
        //console.log("7 is the best number");
    }
    //console.log(element) // after this console.log the the lloop moves to index++

}
for (let i = 0; i <= 10; i++) {
   // console.log(`this is outer loop value:${i}`)
    for (let j = 0; j <= 10; j++) {
       // console.log(`this is inner loop value:${j} and inner loop ${i}`)
      // console.log(i + '*'+ j + '='+ i*j);
       

        // here after every one outer loop inner loop is repeated 10 times until outer loop repeats itself 10 times untill conditionis not met
        
    }
    
}
let myArray = ["flash ","batman","superman"]
//console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {//here in index++ condition is cghanged and it is important to change condition , or lopp will never end
    const element = myArray[index];
    //console.log(element)
    
}



//BREAK AND CONTINUE

// for (let index = 1; index <= 20; index++) {
//     if(index ==5){// this condition
//         console.log(`detected 5`)
//         break // used to break the control flow or loop 
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if(index ==5){// this condition
        console.log(`detected 5`)
        continue // used to ignor one condition one time 
    }
    console.log(`value of i is ${index}`);
    
}
