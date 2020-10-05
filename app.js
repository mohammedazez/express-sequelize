// Require express jsnya
const express = require("express");
const { authenticate } = require("./config/db");
// Import databasenya di config
const sequelize = require("./config/db");
// Import untuk sinkronisasi
const User = require("./models/User");
// Import routernya
const userRouter = require("./routes/user");
const app = express();

// Testing koneksinya
try {
  sequelize.authenticate();
  console.log("Koneksi berhasil.");
  User.sync();
} catch (error) {
  console.error("Koneksi gagal:", error);
}

app.get("/", (req, res) => {
  res.send("Selamat datang di Sequelize");
});

// Gunakan routernya untuk ambil data semuanya
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("running on port succesfull");
});
