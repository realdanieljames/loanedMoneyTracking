let name = getInput(0);
let payBackAmount = getInput(1)

let john = 50
let myra = 20
let BillyBobJeans = 1500



function amountOwed(name) {
    switch(name){
        case 'john':
        return name + ' your current amount owed is ' + john;
        
        case 'myra':
        return name + ' your current amount owed is ' + myra;
        
        case 'billybobjeans':
        return name + ' your current amount owed is ' + BillyBobJeans;

        default: 
        return "I'm sorry, You have no account with us yet, Would you like to borrow?"
    }
}

console.log(amountOwed(name))




module.exports = amountOwed


function getInput(i) {
    return process.argv[i + 2];
}

