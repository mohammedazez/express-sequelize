// Require sequilzenya sequilize nya
const { Sequelize } = require("sequelize");

// buat databasenya dan Connecting to a database
const sequelize = new Sequelize({
  host: "127.0.0.1",
  dialect: "mysql",
  username: "root",
  password: "root",
  database: "school",
});

// Ekspor sequelizenya
module.exports = sequelize;
