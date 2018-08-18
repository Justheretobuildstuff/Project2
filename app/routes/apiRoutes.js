module.exports = function (app, db) {

    //Crud
    app.get('/api/all', function (req, res) {
        db.Item.findAll({}).then(function (result) {
            res.json(result);
        });
    });

    app.post('/api/new', function (req, res) {
        const text = req.body.text
        const category = req.body.category
        db.Item.create({
            text: text,
            category: category })
        .then(function (result) {
            res.json(result);
        });
});

app.put('/api/update/:id', function (req, res) {
    db.Item.update({
        text: req.body.text
    }, {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        });
});

app.delete('/api/delete/:id', function (req, res) {
    db.Item.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json(result);
    });
})
}