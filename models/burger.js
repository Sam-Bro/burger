var orm = require("../config/orm.js");

//retrieve all burgers
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }
    insertOne: function(cb) {
        orm.selectAll("burgers", cols, vals, function(res) {
            cb(res);
        });
    }
    updateOne: function(cb) {
        orm.selectAll("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
    deleteOne: function(cb) {
        orm.selectAll("burgers", condition, function(res) {
            cb(res);
        });
    }

}
module.exports = burger;