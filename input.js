let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  // your code here
  // process.stdin.on('data', (key) => {
  // process.stdout.write('key press');
  // \u0003 maps to ctrl+c input
  console.log(key);
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  }
};
module.exports = {
  setupInput,
};
