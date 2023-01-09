const router = require("express").Router();
const item = require("./controller");

router.get("/admin/item", item.index);

module.exports = router;
