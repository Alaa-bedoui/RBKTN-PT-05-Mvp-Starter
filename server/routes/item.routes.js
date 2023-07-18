const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getAll", itemController.selectAll);
router.get("/:id",itemController.selectOneByUserId)
router.get('/item/:idItem',itemController.selectOneItem)

module.exports = router;
