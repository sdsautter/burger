// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(vals, cb) {
    orm.create(vals, function(res) {
      cb(res);
    });
  },
  update: function(name, id, cb) {
    orm.update(name, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
