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

  // app.get("/mypage/:score", function(req, res){

  //   // let data = "where you got your data from before";
    

  //   let score = req.params.score;
  //   console.log("this is our score: " + score);
  //   res.render("score", {score} )
  // })

  // POST route
  app.post("/api/new", function(req, res) {
    console.log("app hitting post request for /api/new");
    // Start Code for POST request
    const userInput = "'" + req.body.text + "'";
    console.log(JSON.stringify(req.body));
    const score = req.body.score;
    console.log(score + ": score");
    console.log(userInput + ": userInput");
    db.Item.create({
      text: userInput,
      score: score
    }).then(function(result) {
      // What to render after uses presses submit
      res.json(result);
    });
  });

  app.post("/api/textList", function(req, res) {
    console.log("app hitting post request for textList");
    const userInput = "'" + req.body.userInput + "'";
    db.Text.create({
      text: userInput,
    });
  });
};