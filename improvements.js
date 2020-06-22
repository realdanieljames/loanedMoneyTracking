const name = getInput(0);
const action = getInput(1);
const amount = getInput(2);
const balance = 10000
let john = 'john'
let myra = 'myra'
let BillyBobJeans = 'billybob'


function MoneyTracking(name, action, amount) {      

    if (action == 'borrow'){
    return name + "borrowed" + amount + ' ' + name + ' now owes' + amount}

    if (action == 'payback'){
        return name + "borrowed" + amount + ' ' + name + ' now owes' + amount}
    
    else {return "start a loan"}

}


console.log(MoneyTracking())








module.exports = MoneyTracking;

function getInput(i) {
    return process.argv[i + 2];
}