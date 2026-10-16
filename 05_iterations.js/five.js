// higher order functuions
const coding = ["js","ruby","java","python","cpp"]
//call back functuons 1st version
// coding.forEach( function (item){
//     console.log(item);
// })
//2nd version
// coding.forEach(  (item) => {
//     console.log(item);
// })
//3rd  version
// function printMe(item){
//     console.log(item);
// }

//4thversion
// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr);
// })

///most common iterations
const myCoding = [
    {
    language:"javascript",
    languageFileName:"js"
},
    {
    language:"java",
    languageFileName:"java"
},
    {
    language:"python",
    languageFileName:"py"
    }

]             //here you can acll any values
myCoding.forEach((item)=>{
           console.log(item.language);// thi sis hoe you access object form an aaary
})
