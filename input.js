// setup interface to handle user input from stdin
const handleUserInput = function () {
  // your code here
  process.stdin.on('data', (key) => {
    // process.stdout.write('key press');
    // \u0003 maps to ctrl+c input
    console.log(key);
    if (key === '\u0003') {
      process.exit();
    }
  });
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};
