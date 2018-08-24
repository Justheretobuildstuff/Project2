module.exports = {
    renderHome: function(req, res) {
      res.render("index", {
        msg: "This data is being passed into render"
      });
    },

    renderScore: function(req, res){
      res.render("score", {
        score: req.params.score
      })
    } 
  };