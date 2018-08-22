module.exports = {
    renderHome: function(req, res) {
      res.render("index", {
        msg: "This data is being passed into render"
      });
    }
  };