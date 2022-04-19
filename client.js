const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    // IP address here,
    port: 50541// PORT number here,
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('YO WE CONNECT');
    conn.write('Name: McB');
  });

  

  return conn;
};

console.log("Connecting ...");


module.exports = connect;

