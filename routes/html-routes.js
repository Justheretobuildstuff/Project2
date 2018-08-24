const mainController = require("../controllers/mainController");

module.exports = function(app) {
  app.get("/", mainController.renderHome);
  app.get("/mypage/:score", mainController.renderScore)
};
