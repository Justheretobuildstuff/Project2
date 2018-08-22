// module.exports = function(app, db) {

//   //Crud
//   app.get("/api/all", function(req, res) {
//     db.Item.findAll({}).then(function(result) {
//       res.json(result);
//     });
//   });

//   app.post("/api/new", function(req, res) {
//     const text = req.body.text;
//     const category = req.body.category;
//     db.Item.create({
//       text: text,
//       category: category
//     }).then(function(result) {
//       res.json(result);
//     });
//   });

//   // Testing POST route to get data to Josh's API
//   // app.post("/userInput", (req, res) => {
//   //   if (typeof req.body.userInput === "undefined") {
//   //     // if the parameter is missing, example response...
//   //     res
//   //       .status(400)
//   //       .json({ error: "missing parameter userInput", data: null });
//   //     // Only an  example
//   //     return;
//   //   }

//   //   let userInput = req.body.userInput;

//   //   res.status(200).json({ error: null, data: userInput });
//   //   // We received the value and only to show the example, returns it in a json within the key 'data'

//   // });
//   // END TEST

//   app.put("/api/update/:id", function(req, res) {
//     db.Item.update(
//       {
//         text: req.body.text
//       },
//       {
//         where: {
//           id: req.params.id
//         }
//       }
//     ).then(function(result) {
//       res.json(result);
//     });
//   });

//   app.delete("/api/delete/:id", function(req, res) {
//     db.Item.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(result) {
//       res.json(result);
//     });
//   });
// };
