const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./user");
const Hotel = require("./Hotel");

const Booking = sequelize.define("Booking", {
  checkIn: DataTypes.DATE,
  checkOut: DataTypes.DATE,
});

User.hasMany(Booking);
Booking.belongsTo(User);

Hotel.hasMany(Booking);
Booking.belongsTo(Hotel);

module.exports = Booking;
