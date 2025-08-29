const express = require("express");
const { createHotel, getHotels, updateHotel, deleteHotel } = require("../controllers/hotelController");
const auth = require("../middleware/authMiddlewares");
const router = express.Router();

router.post("/", auth, createHotel);
router.get("/", getHotels);
router.put("/:id", auth, updateHotel);
router.delete("/:id", auth, deleteHotel);

module.exports = router;
