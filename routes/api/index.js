const router = require("express").Router();
const itemRoutes = require("./itemRoutes");
const userRoutes = require("./userRoutes");

router.use("/api/items", itemRoutes);
router.use("/api/users", userRoutes);

module.exports = router;