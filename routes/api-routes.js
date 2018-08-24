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
   
    console.log("app hitting post request");
    // Start Code for POST request
    // USER INPUT IS COMING TO POST REQUEST AS UNDEFINED
    const userInput = "'" + req.body.userInput + "'";
    const score = req.body.score;
    console.log(score + ": score");
    console.log(userInput + ": userInput");
    db.Item.create({
      text: userInput,
      score: score
    }).then(function(result) {
      // What to render after uses presses submit
      //res.json(result);
    });
  });

  /*
  // PUT route (not currently used)
  app.put("/api/new/:id", function(req, res) {
    console.log(req.body);
    db.Item.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbItem) {
        res.send(dbItem);
      });
  });

*/
};
