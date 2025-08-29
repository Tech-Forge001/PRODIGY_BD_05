const Hotel = require("../models/Hotel");

exports.createHotel = async (req, res) => {
  const hotel = await Hotel.create(req.body);
  res.json(hotel);
};

exports.getHotels = async (req, res) => {
  const { location, checkIn, checkOut } = req.query;
  let hotels = await Hotel.findAll();
  if (location) hotels = hotels.filter(h => h.location === location);
  res.json(hotels);
};

exports.updateHotel = async (req, res) => {
  const hotel = await Hotel.update(req.body, { where: { id: req.params.id } });
  res.json(hotel);
};

exports.deleteHotel = async (req, res) => {
  await Hotel.destroy({ where: { id: req.params.id } });
  res.json({ message: "Hotel deleted" });
};
