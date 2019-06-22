const router = require("express").Router();
const itemRoutes = require("./itemRoutes");
// const userRoutes = require("./userRoutes");
// const apiRoutes = require("./apiRoutes");

router.use("/items", itemRoutes);
// router.use("/users", userRoutes);
// router.use("/", apiRoutes)

module.exports = router;