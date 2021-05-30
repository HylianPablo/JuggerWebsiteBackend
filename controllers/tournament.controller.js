const db = require("../models")
const Tournament = db.tournament;
const Op = db.Sequelize.Op;

exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tournament with id=" + id
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { name: { [Op.like]: '%${id}%'} } : null;

  Tournament.findAll({ where: condition})
    .then(data => {
      res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tournaments."
        });
      });
};