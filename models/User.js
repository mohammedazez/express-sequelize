// Require sequelizenyaa
const { Sequelize, INTEGER } = require("sequelize");
// Require config databaseya
const sequelize = require("../config/db");
const Exschool = require("./Exschool");

// Define tabel user
const User = sequelize.define(
  "users",
  {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    birth_data: Sequelize.DATE,
    exschool_id: Sequelize.INTEGER,
  },
  {
    // Jika tabel data ada underscore nya "_"
    underscored: true,
    // Jika tabel data ada createAt and updateAt
    timestamps: false,
  }
);
User.belongsTo(Exschool);

// Ekspor user
module.exports = User;
