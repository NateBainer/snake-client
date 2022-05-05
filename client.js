const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const name = 'Name: CYN';
  const up = 'Move: up';
  const down = 'Move: down';
  const left = 'Move: left';
  const right = 'Move: right';

  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.write(`${name}`);

  conn.on('data', (data) => {
    console.log('received: ' + data);
  });

  conn.on('connect', () => {
    console.log("you're connected!!");
  });
  return conn;
};


module.exports = connect;

console.log("Connecting ...");


module.exports = connect;

