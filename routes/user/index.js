// Require express
const express = require("express");
// Import routernya
const router = express.Router();
// Require controllernya
const { getAllUser } = require("./controller");

// Untuk mendapatkan data user
router.get("/", getAllUser);

// Ekspor routernya
module.exports = router;
