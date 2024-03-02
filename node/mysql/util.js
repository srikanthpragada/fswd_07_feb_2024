var mysql = require('mysql');

var con = mysql.createConnection(
{
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "feb7"
});

exports.con = con 