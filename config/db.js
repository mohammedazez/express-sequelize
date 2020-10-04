// Require sequilzenya sequilize nya
const { Sequelize } = require("sequelize");

// buat databasenya dan Connecting to a database
const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "root",
  database: "school",
});

// Ekspor sequelizenya
module.exports = sequelize;
