const router = require("express").Router();
const dashboard = require("./controller");

router.get("/admin/dashboard", dashboard.index);

module.exports = router;
