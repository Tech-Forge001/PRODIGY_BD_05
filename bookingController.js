const Booking = require("../models/booking");
const Hotel = require("../models/Hotel");

exports.bookRoom = async (req, res) => {
  const { hotelId, checkIn, checkOut } = req.body;
  const hotel = await Hotel.findByPk(hotelId);

  if (!hotel || hotel.availableRooms < 1) {
    return res.status(400).json({ message: "No rooms available" });
  }

  const booking = await Booking.create({
    UserId: req.user.id,
    HotelId: hotelId,
    checkIn,
    checkOut
  });

  hotel.availableRooms -= 1;
  await hotel.save();

  res.json(booking);
};
