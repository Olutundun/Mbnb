<<<<<<< HEAD
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
=======
const express = require("express");
var cors = require('cors');

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
>>>>>>> 7523d29003b37790a70a1d72be4619b9526bd3db
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());
<<<<<<< HEAD
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
=======
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
>>>>>>> 7523d29003b37790a70a1d72be4619b9526bd3db
