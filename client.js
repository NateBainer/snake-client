const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    Name: 'McB',
    // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connection', function() {
    console.log('SUCCESSFULLY CONNECTEDDDD');
  });
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;