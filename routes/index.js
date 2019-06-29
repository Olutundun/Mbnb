const path = require("path");
const router = require("express").Router();
const itemRoutes = require("./api/itemRoutes");
const userRoutes = require("./api/userRoutes")

//API routes
router.use("/", itemRoutes);
router.use("/", userRoutes);

//if no API routes are hit, send the react app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
  });

module.exports = router;
