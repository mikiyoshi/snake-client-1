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
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'x') {
    connection.write('Say: This is Miki');
  }
};
module.exports = {
  setupInput,
};
