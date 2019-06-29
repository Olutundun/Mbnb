const db = require("../../models")
const router = require("express").Router();

router
    .route("/api/users")
    .get((req, res) => {
        db.User.findAll({}).then(function (user) {
            //console.log(user)
            res.json(user);
        })
    });

router
    .route("/api/users")
    .post((req, res) => {
        db.User.create(req.body).then(function (user) {
            //console.log(user)
            res.json(user)
        })
    })


module.exports = router;