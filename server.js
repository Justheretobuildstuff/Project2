var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./models");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

db.sequelize.sync({ force: true }).then(function() {
  // Static directory
  app.use(express.static("public"));

  // Handlebars config ---------------------------------------/
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  // Route config -------------------------------------------/
  require("./routes/html-routes")(app);
  require("./routes/api-routes")(app);

  // Start our server so that it can begin listening to client requests.
  db.sequelize.sync().then(function() {
    app.listen(process.env.PORT || 3000, function(){
      console.log(`Listening on PORT ${PORT}`);
    });
  });
});
