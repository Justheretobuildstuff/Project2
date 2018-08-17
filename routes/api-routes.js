const testApiController = require("../controllers/apiController");

module.exports = function(app) {
  app.get("/test", testApiController.index);
};
