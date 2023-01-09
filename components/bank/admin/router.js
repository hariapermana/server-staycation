const router = require("express").Router();
const bank = require("./controller");

router.get("/admin/bank", bank.index);

module.exports = router;
