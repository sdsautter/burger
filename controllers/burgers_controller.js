var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Createall our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgers = {
            burgers: data
        };
        console.log(burgers);
         res.render("index", burgers);
    });
})

router.post("/", function(req, res) {
    burger.insert(req.body.name, function() {
        res.redirect("/");
    });
})

router.put("/:id", function(req, res) {
    // var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    burger.update(req.body.devoured, req.params.id, function() {
        res.redirect("/");
    });
});


// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;
