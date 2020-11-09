// version 0:
// console.log('\u0007');

// Version 1 ////////////////////////
// setTimeout(function() {
//     console.log('3 seconds passed')
// }, 3000)

// Version 2 ////////////////////////
var input = process.argv[2];
setTimeout(function() {
    console.log(`${input} second(s) have passed`)
}, input*1000)

// Version 3 ////////////////////////
