const testApiController = require("../controllers/apiController.js");

module.exports = function(app) {
  app.get("/test", testApiController.index);

  // Requiring our models
  var db = require("../models");

  // GET route for getting all of the items
  app.get("/api/all", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Item.findAll({}).then(function(result) {
      // We have access to the items as an argument inside of the callback function
      res.json(result);
    });
  });

  // POST route
  app.post("/api/new", function(req, res) {
    const text = req.body.text;
    const category = req.body.category;
    db.Item.create({
      text: text,
      category: category
    }).then(function(result) {
      res.json(result);
    });
  });
};
