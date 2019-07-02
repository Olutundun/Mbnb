const db = require("../../models")
const router = require("express").Router();

router
    .route("/api/items")
    .get((req, res) => {
        let query = {};
            if (req.query.user_id) {
                query.UserId = req.query.user_id;
            }
        db.Item.findAll({}).then(function (item) {
            console.log(item)
            res.json(item);
        })
    });

router
    .route("/api/newitems")
    .post((req, res) => {
        db.Item.create(req.body).then(function (item) {
            console.log(item)
            res.json(item)
        })
    })


module.exports = router;