// dependency
var orm = require ('../config/orm.js');

var burgSQL = {
    // selectAll query requires you to pass in: tableSelect 
    selectAll : function(callBack) {
        orm.selectAll('burgers', function(resp) {
            callBack(resp);
        });
    },
    // insertOne query requires you to pass in: tableSelect, columnSelect, valOfCol
    insertOne : function(name, callBack) {
        orm.insertOne('burgers', 'burger_name', name, function(resp) {
            callBack(resp);
        });
    },
    updateOne : function(name, callBack) {
        orm.updateOne('burgers', 'burger_name', name, 'devoured', true, function(resp) {
            callBack(resp);
        });
    }
}

module.exports = burgSQL;