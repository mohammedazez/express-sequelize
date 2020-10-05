// Require sequelizenyaa
const { Sequelize, INTEGER } = require("sequelize");
// Require config databaseya
const sequelize = require("../config/db");
// Define tabel user
const Club = sequelize.define(
  "clubs",
  {
    name: Sequelize.STRING,
    asal_negara: Sequelize.STRING,
    tanggal_berdiri: Sequelize.DATE,
  },
  {
    // Jika tabel data ada underscore nya "_"
    underscored: true,
    // Jika tabel data ada createAt and updateAt
    timestamps: false,
  }
);

// Ekspor user
module.exports = Club;
