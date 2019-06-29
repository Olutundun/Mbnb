const path = require("path");
const router = require("express").Router();
const itemRoutes = require("./api/itemRoutes");

//API routes
router.use("/", itemRoutes);

//if no API routes are hit, send the react app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
  });

module.exports = router;
