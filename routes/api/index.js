const router = require("express").Router();
const itemRoutes = require("./itemRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes")

router.use("/api/items", itemRoutes);
router.use("/api/users", userRoutes);
router.use("api/category", categoryRoutes);

module.exports = router;