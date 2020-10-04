// Import atau require user di folder model
const User = require("../../models/User");

module.exports = {
  getAllUser: (req, res) => {
    User.findAll().then((data) => {
      res.json(data);
    });
  },
};
