const router = require("express").Router();
const category = require("./controller");

router.get("/admin/category", category.index);

module.exports = router;
