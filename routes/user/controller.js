// Import atau require user dari folder model
const User = require("../../models/User");

module.exports = {
  getAllUser: (req, res) => {
    User.findAll().then((data) => {
      res.json(data);
    });
  },
  getById: (req, res) => {
    User.findOne().then((data) => {
      res.json(data);
    });
  },
  adduser: (req, res) => {
    User.create().then((data) => {
      res.json(data);
    });
  },
  updateById: (req, res) => {
    User.update().then(() => {
      res.json(data);
    });
  },
  deleteById: (req, res) => {
    User.destroy().then(() => {
      res.json(data);
    });
  },
};
