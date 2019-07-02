const db = require("../../models")
const router = require("express").Router();
const passport = require("../../config/passport");
router
    .route("/api/users")
    .get((req, res) => {
        const username = req.params.username;
        db.User.findAll({}).then(function (user) {
            //console.log(user)
            res.json(user);
        }).catch((err)=> {
            res.status(422).json(err)
        })
    });

    router.route("/api/users/:id").get((req, res) => {
        db.User.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Item]
        }).then(function (user) {
          res.json(user);
        });
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
    .route("/api/signin", passport.authenticate("local"))
    .post((req, res) => {
        db.User.findOne({username: req.body.username}).then(function (user) {
            console.log(user)
            res.json(user)
        })
    })


module.exports = router;