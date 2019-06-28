const db = require("../../models")
const router = require("express").Router();
const db = require("../../models");
const passport = require("../../config/passport");

module.exports = function (app) {
  app.post("/api/", passport.authenticate("local"), function (req, res) {
    res.json("/UserDashboard");
  });
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        username: req.user.username,
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
