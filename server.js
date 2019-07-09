const cors = require("cors");
const express = require("express");
const session = require('express-session');
const db = require("./models");
const app = express();
const routes = require("./routes");
const passport = require("passport");

const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

var syncOptions = {
  force: false
};
app.use(cors());
// Add routes, both API and view
app.use(routes);

// Starting the API server, syncing our models 
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
  );

});

module.exports = app;