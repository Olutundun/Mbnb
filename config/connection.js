var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	m2s372e6t0k39e7n",
    password: "chif58m109fhsfqb",
    database: "jqquy99clscc6h93"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;