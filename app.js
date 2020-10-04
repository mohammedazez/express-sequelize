// Require express jsnya
const express = require("express");
const { authenticate } = require("./config/db");
// Import databasenya di config
const sequelize = require("./config/db");
// Import routernya
const userRouter = require("./routes/user");
const app = express();

// Testing koneksinya
try {
  sequelize.authenticate();
  console.log("Koneksi berhasil.");
} catch (error) {
  console.error("Koneksi gagal:", error);
}

app.get("/", (req, res) => {
  res.send("Selamat datang di Sequelize");
});

// Gunakan routernya
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("running on port 3000");
});
