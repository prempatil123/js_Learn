const userEmail = "" // here if epmpty arrey[]is placed thrn following if statement becoms true and executes the if statement

if (userEmail){
    console.log("got user email");

}else {
    console.log("dont have user email");
}


///falsy values

//false , 0,-0, bigInt 0n , null ,undefined ,NaN are all falsy values


//truthy values
// "0" zero in string , 'false' also in the string , " ", [],{},function(){} , are all truthy values

if (userEmail.length ===0)//to check empty array , here length is property 
{
    console.log("Array is empty")
}
const emptyObj  ={ }// to check object is epty or   not
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");

}