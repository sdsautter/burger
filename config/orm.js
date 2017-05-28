// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(vals, cb) {
        var queryString = "INSERT INTO burgers(burger_name) VALUES(?);";


        connection.query(queryString, [vals], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(devoured, id, cb) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";

        console.log(queryString);
        console.log(devoured);
        console.log(id);
        connection.query(queryString, [devoured, id], function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
