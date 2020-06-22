const amountOwed = require('./amountOwed.js')
const withdrawMoney = require('./payBack.js')

let name = getInput(0);

// let name = getInput(0);
// let amountOwed = getInput(1);
// let deposit = getInput(2)
// let withdraw = getInput(4)

// let john = 50
// let myra = 20  
// let BillyBobJeans = 1500


console.log(amountOwed(name))
// console.log('Borrow')
// console.log('PayBack')







function getInput(i) {
    return process.argv[i + 2];
}