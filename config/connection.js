// dependencies
require('dotenv').config();
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3360,
        user: 'root',
        password: process.env.mysql_passwd,
        database: 'burgers_db'
    });
}

// let (us) know if we're connected
connection.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log('connected as id ' + connection.threadId);
});

// export this
module.exports = connection;
