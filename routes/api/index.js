const router = require("express").Router();
const itemRoutes = require("./itemRoutes");
const userRoutes = require("./userRoutes");
// const apiRoutes = require("./apiRoutes");

router.use("/api/items", itemRoutes);
router.use("/api/users", userRoutes);
// router.use("/", apiRoutes)

module.exports = router;