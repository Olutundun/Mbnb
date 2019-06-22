const db = require("../../models")
const router = require("express").Router();

router
    .route("/")
    .get((req, res) => {
        db.Items.create(req.body).then(function(DBItems) {
            res.json(DBItems);
        })
    });
    // .post(itemController.create);

//matches with "/api/items"
// router
//     .route("/:id")
//     .get(itemController.findById)
//     .delete(itemController.remove);

module.exports = router;