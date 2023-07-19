const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getAll", itemController.selectAll);
router.get("/:id",itemController.selectItemsPerUser)
router.get('/item/:idItem',itemController.selectOneItem)
router.post("/",itemController.add)
router.delete("/:id",itemController.remove)
router.put("/:id",itemController.modify)

module.exports = router;
