const express = require("express");
const { bookRoom } = require("../controllers/bookingController");
const auth = require("../middleware/authMiddlewares");
const router = express.Router();

router.post("/", auth, bookRoom);

module.exports = router;
