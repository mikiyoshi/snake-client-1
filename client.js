const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    // code that does something when the connection is first established
    // console.log(`message: Kokura`); this message at terminal
    // setInterval(event, 4000); is endless, setTimeout(event, 1000) one time
    conn.write('Name: K9R');
    // let event = () => {
    // setTimeout(() => {
    // conn.write('Move: up');
    // conn.write('Move: down');
    // conn.write('Move: down');
    // conn.write('Move: right');
    // conn.write('Move: right');
    // }, 1000);
    // };
    // setInterval(event, 4000);
    // setTimeout(() => {
    //   conn.write('Move: left');
    //   conn.write('Move: left');
    // }, 2000);
    // setTimeout(() => {
    //   conn.write('Move: down');
    //   conn.write('Move: down');
    // }, 3000);
    // setTimeout(() => {
    //   conn.write('Move: right');
    //   conn.write('Move: right');
    // }, 4000);
  });
  return conn;
};
module.exports = {
  connect,
};
