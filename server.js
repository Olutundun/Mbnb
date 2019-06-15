const cors = require("cors");
const express = require("express");
const session = require('express-session');
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");


// Middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));


var syncOptions = {
  force: false
};

//serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());
app.use(routes);
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;