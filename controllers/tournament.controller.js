const db = require("../models");
const Tournament = db.tournament;
const Op = db.Sequelize.Op;
const moment = require("moment");

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tournament.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tournament with id=" + id,
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: "%${id}%" } } : null;

  Tournament.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tournaments.",
      });
    });
};

exports.findAllByYear = (req, res) => {
  const dateTop = req.query.yearTop;
  const dateBot = req.query.yearBot;

  Tournament.findAll({ where: {date: {[Op.gte]: dateTop, [Op.lte]: dateBot}} })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tournaments.",
      });
    });
};
