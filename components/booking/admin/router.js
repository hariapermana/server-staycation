const router = require("express").Router();
const booking = require("./controller");

router.get("/admin/booking", booking.index);

module.exports = router;
