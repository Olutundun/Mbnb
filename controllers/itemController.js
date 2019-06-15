const db = require("../models");

module.exports = function (app) {

    app.get("/api/items", function (req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Item.findAll({
            where: {
                UserId: 1
            }
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });
    // Get route for retrieving a single item
    app.get("/api/items/:id", function (req, res) {
        db.Item.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });
    // POST route for saving a new item
    app.post("/api/items", function (req, res) {
        db.Item.create(req.body).then(function (dbItem) {

            res.json(dbItem);

        });
    });
    // DELETE route for deleting items
    app.delete("/api/items/:id", function (req, res) {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });

};