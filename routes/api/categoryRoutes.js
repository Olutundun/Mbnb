const db = require("../../models")
const router = require("express").Router();

router
    .route("/api/category/:category")
    .get((req, res) => {
        db.Item.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (item) {
            res.json(item)
        })
    })

module.exports = router;