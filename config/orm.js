// dependencies
var connection = require("./connection.js");

// creating orm object of functions so we can call these methods in other files
var orm = {
    selectAll: function(tableSelect, callBack) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableSelect], function(err, results) {
            if (err) {
                throw err;
            } else {
                callBack(results);
            }
        });
    },
    insertOne: function(tableSelect, columnSelect, valOfCol, callBack) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableSelect, columnSelect, valOfCol], function(err, results) {
            if (err) {
                throw err;
            } else {
                callBack(results);
            }
        });
    },
    updateOne: function(tableSelect, column1, valofCol1, column2, valofCol2, callBack) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableSelect, column1, valofCol1, column2, valofCol2], function(err, results) {
            if (err) {
                throw err;
            } else {
                callBack(results);
            }
        });
    }
}

module.exports = orm;