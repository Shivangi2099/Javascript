const accountId =144553
let accountEmail="shivangi@gmail.com"
var accountPassword ="12345"
accountCity ="Jaipur"

//  accountId =2 // not alloweed 

accountEmail = "h@gmail"
accountPassword = "23343"
accountCity ="Bengaluru"
let accountState;
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])