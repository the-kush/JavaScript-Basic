// let, var, const

// let -> cannot be redefined, can be redeclared
// var -> can be redefined, can be redeclared => Not used these days, issue in block scope & functional scope
// const -> cannot be redefiend, cannot be redeclared

const accountId = 144553
let accountEamil = "kush@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"

// accountId = 2;

accountEamil = "kush1@gmail.com";
accountPassword = "123456";
accountCity = "Delhi";

console.log(accountId);

console.table([accountId, accountEamil, accountPassword, accountCity])