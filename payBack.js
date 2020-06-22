const amountOwed = require('./amountOwed.js')

let payBackAmount = getInput(1)

function payBack (name, payBackAmount){
    console.log(amountOwed)
    return payBackAmount
    
}





function getInput(i) {
    return process.argv[i + 2];
}