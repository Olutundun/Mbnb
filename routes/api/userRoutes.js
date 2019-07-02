const db = require("../../models")
const router = require("express").Router();

router
    .route("/api/users")
    .get((req, res) => {
        db.User.findAll({
            include: [db.Item]
        }).then(function (user) {
            //console.log(user)
            res.json(user);
        })
    });

router
    .route("/api/signup")
    .post((req, res) => {
        db.User.create(req.body).then(function (user) {
            //console.log(user)
            res.json(user)
        })
    })
    router
    .route("/api/signin")
    .post((req, res) => {
        db.User.findOne({username: req.body.username}).then(function (user) {
            console.log(user)
            res.json(user)
        })
    })


module.exports = router;