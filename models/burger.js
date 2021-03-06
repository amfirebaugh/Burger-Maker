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
        // note to self: I had the order mixed up with my arguments for a few commits... order definitely matters, of course.
        orm.updateOne('burgers', 'devoured', true, 'burger_name', name, function(resp) {
            callBack(resp);
        });
    },
    deleteOne : function(condition, callBack) {
        // condition will be req.params.id in burgers_controller.js
        orm.deleteOne('burgers', 'id', condition, function(resp) {
            callBack(resp);
        });
    }
}

module.exports = burgSQL;