// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
//console.log('hello world!');
// var readline = require('readline');

// var rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
const fibonacci = require('./lib/fibonacci.js')
function isLeapYear(n) {
    if ((n % 4 === 0 && n % 100 == 0) || (n % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


fibonacci(2);

module.exports = isLeeapYear
