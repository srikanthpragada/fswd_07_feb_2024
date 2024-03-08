
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 4,
    host: "localhost",
    user: "demo",
    password: "demo",
    database: "hrdb"
});
 

module.exports.pool = pool 
