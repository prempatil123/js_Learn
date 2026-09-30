let myDate = new Date() //date is object

//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toTimeString());
//console.log(myDate.toUTCString());
//console.log(myDate.getTimezoneOffset());
//
//console.log(typeof myDate) ;
//diff syntax for dates
//let myCreatedDate = new Date (2023, 0,23,5,3,6)// monts satarts  from zero in jawascript 
//console.log(myCreatedDate.toLocaleString());
//let myCreatedDate = new Date ("2026-5-6")// monts stRTA FROM 1 WHEN IN STRING in from f yy mm dd//
//let myCreatedDate = new date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date(2023, 0, 23, 5, 3, 6);
let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.toLocaleString());
//console.log(myCreatedDate.getTime()); // to convert actual date in mmiliseconds
//console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
`${newDate.getDay()}and the time`//string interpolation
newDate.toLocaleString('defauly' , {
       weekday:"long"// tocoustomize the localedtring
       
}
//press ctrl space
)