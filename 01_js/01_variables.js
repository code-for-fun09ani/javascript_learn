const accountId = 123445
let accountEmail = "ani@bing.com"
var accountPass = "raketlkjsdf"
accountCity = "Jabalpur"
let accountState;

/*
  Prefer not to use 'var'
  because of issue in block scope and functional scope

*/



// accountId=3234 // can't be changed because it is const 

accountEmail = "as@gmail.com"
accountPass = "dfjlkjiou"
accountCity = "Bhopal"

console.log(accountEmail);

console.table([accountId,accountEmail,accountPass,accountCity,accountState])

