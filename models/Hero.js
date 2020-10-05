// Require sequelizenyaa
const { Sequelize, INTEGER } = require("sequelize");
// Require config databaseya
const sequelize = require("../config/db");
// Define tabel Hero
const Hero = sequelize.define(
  "heroes",
  {
    name: Sequelize.STRING,
    movie: Sequelize.STRING,
    birth_data: Sequelize.DATE,
  },
  {
    // Jika tabel data ada underscore nya "_"
    underscored: true,
    // Jika tabel data ada createAt and updateAt
    timestamps: false,
  }
);

// Ekspor Hero
module.exports = Hero;
