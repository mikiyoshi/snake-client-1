// fileA.js

// module.exports = { A: 42, B: 43, C: 44 };

// fileA.js

const myNumber = 42;
const myString = 'hello';
const myFunction = () => {
  // myFunction's code
};

module.exports = {
  myNumber, // stores 42 as myNumber
  myString, // stores "hello" as myString
  myFunction, // stores the function as myFunction
};

// コールバック関数とは
// function a(b) {
//     b();
// }
// function b() {
// }
