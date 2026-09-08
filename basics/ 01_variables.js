const accountId = 123456789;
let accountEmail = "user@example.com";
var accountPassword = "securepassword123";
/* prefer not to use var
  bacause of issue in block scope and functional acope*/
//accountCity = "New York" ;// This will throw an error because accountCity is not declared with var, let, or const
//acountId = 2 ;// This will throw an error because accountId is a constant and cannot be reassigned
accountEmail = "asdDDBSD@example.com";
accountPassword = "newpassword456"; // This will work because accountPassword is declared with var and can be reassigned
accountCity = "mumbai"; // This will throw an error because accountCity is not declared with var, let, or const
let accountState = "Maharashtra";
console.log(accountId);
console.table([accountEmail, accountPassword,accountId,accountCity,




    
]);
