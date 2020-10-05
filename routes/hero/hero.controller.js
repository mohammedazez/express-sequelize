// Import atau require user dari folder model
const User = require("../../models/Hero");

module.exports = {
  getAllUser: (req, res) => {
    User.findAll()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => res.json(error));
  },
  getById: (req, res) => {
    User.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => res.send(error));
  },
  adduser: (req, res) => {
    User.create(req, body)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => res.send(error));
  },
  updateById: (req, res) => {
    User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => res.send(error));
  },
  deleteById: (req, res) => {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.sendStatus(data);
      })
      .catch((error) => res.send(error));
  },
};
