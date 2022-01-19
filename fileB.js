// fileB.js

// const myObject = require('./fileA');

// console.log(myObject); // => { A: 42, B: 43, C: 44 }
// console.log(myObject.A); // => 42
// console.log(myObject.B); // => 43
// console.log(myObject.C); // => 44

// fileB.js

const { myNumber, myString, myFunction } = require('./fileA');

console.log(myNumber); // => 42
console.log(myString); // => "hello"
console.log(myFunction.myString); // => the function you wrote
