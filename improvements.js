// const name = getInput(0);
// const action = getInput(1);
// const amount = getInput(2);
const lendingPool = 10000
// let customers = {john: 50, myra: 20, billy: 60}





let customers = {john: 50, myra: 20, billy: 60}
const one = getInput(2)
const name = getInput(0)
console.log({one})
let ownerAccount = Object.values(customers)
let win = 20
console.log(ownerAccount + ', ' + win)


console.log({ownerAccount.name})
console.log({ownerAccount})








// function MoneyTracking(name, action, amount) { 
    
//     let ownerAccount = customers.name

//     if (getInput(0) in customers && getInput(1) === 'borrow'){
//     return getInput(0) + " borrowed " + getInput(2) + '.... ' + getInput(0) + ' now owes ' + ownerAccount + amount}
    

//     if (action === 'payback'){
//         return name + "borrowed" + amount + ' ' + name + ' now owes ' +  amount}
    
//     else {return 'yerr'}
//     }



// console.log(MoneyTracking())








// module.exports = MoneyTracking;

function getInput(i) {
    return process.argv[i + 2];
}