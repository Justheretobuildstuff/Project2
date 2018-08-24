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
    // console logs for testing purposes
    console.log("POST Request sent to /api/new.........")
    console.log(req.body.userInput + ">>this is reg.body.userInput");
    console.log(req.body + ">>this is reg.body");
    
    // Start Code for POST request
    const userInput = req.body.userInput;
    db.Item.create({
      text: userInput
    }).then(function(result) {
      // What to render after uses presses submit
      //res.json(result);
    });
  });
};
