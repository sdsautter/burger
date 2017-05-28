// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      return cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(vals, cb) {
    orm.insertOne(vals, function(res) {
      return cb(res);
    });
  },
  update: function(name, id, cb) {
    orm.updateOne(name, id, function(res) {
      return cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
