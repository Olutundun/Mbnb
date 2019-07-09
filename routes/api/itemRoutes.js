const db = require("../../models")
const router = require("express").Router();

router
    .route("/api/items/:id")
    .get((req, res) => {
        const query = {};
        if (req.query.userid) {
            query.UserId = req.query.id;
        }
        db.Item.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function (item) {
            res.json(item)
        })
    })


router
    .route("/api/items")
    .get((req, res) => {
        db.Item.findAll({}).then(function (item) {
            //console.log(item)
            res.json(item);
        })
    });

router
    .route("/api/items")
    .post((req, res) => {
        db.Item.create(req.body).then(function (item) {
            console.log(item)
            res.json(item)
        })
    })


router
    .route("/api/item/:slug")
    .get((req, res) => {
        db.Item.findOne({
            where: {
                slug: req.params.slug
            }
        }).then(function (item) {
            res.json(item);
        })
    });
router
    .route("/api/items/:id")
    .delete((req, res) => {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (item) {
            res.json(item);
        });
    });


module.exports = router;