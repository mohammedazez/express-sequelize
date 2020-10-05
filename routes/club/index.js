// Require express
const express = require("express");
// Import routernya
const router = express.Router();
// Require controllernya
const {
  getAllUser,
  getById,
  adduser,
  updateById,
  deleteById,
} = require("./club.controller");

// READ
// Untuk mendapatkan semua data user
router.get("/", getAllUser);

// READ
// Untuk mendapatkan data user sesua id
router.get("/user/:id", getById);

// CREATE
// Untuk menambahkan data user
router.post("/addclub", adduser);

// UPDATE
// Untuk update data user berdasarkan id
router.put("/updateclub/:id", updateById);

// Untuk menghapus data user berdasarkan id
router.delete("/deleteclub/:id", deleteById);

// Ekspor routernya
module.exports = router;
