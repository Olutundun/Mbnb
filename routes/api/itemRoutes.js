const db = require("../../models")
const router = require("express").Router();

router
    .route("/api/items")
     .get((req, res) => {
         db.Item.findAll({}).then(function(item) {
             console.log(item)
             res.json(item);
        })
    });
    //     .get((req, res) => {
    //         db.Item.find(({}) => {
    //             res.json(dbItem);
    //         })
    // });
    // .post(itemController.create);

//matches with "/api/item"
// router
//     .route("/:id")
//     .get(itemController.findById)
//     .delete(itemController.remove);

module.exports = router;