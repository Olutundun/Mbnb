// Requiring our models
var db = require("../../models");
var passport = require("../../config/passport");
// Routes

module.exports = function (app) {
  app.post("/api/Signin", passport.authenticate("local"), function (req, res) {
    res.json("/users");
  });
  app.post("/api/Signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/Signin");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        username: req.user.name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};