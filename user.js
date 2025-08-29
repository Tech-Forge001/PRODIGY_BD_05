const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true }
});

module.exports = User;
