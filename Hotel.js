const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Hotel = sequelize.define("Hotel", {
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  pricePerNight: DataTypes.FLOAT,
  availableRooms: DataTypes.INTEGER
});

module.exports = Hotel;
