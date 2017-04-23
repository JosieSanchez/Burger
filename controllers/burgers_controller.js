// Controller setup

// Inside your burger directory, create a folder named controllers.

// In controllers, create the burgers_controller.js file.

// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

//=============================================================//

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var cat = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//************I need help understanding where this comes from*******************
router.post("/", function(req, res) {
  burger.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
//************I need help understanding where this comes from*******************
  burger.update({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;