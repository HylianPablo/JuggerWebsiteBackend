const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
  
    // Create a Tutorial
    const user = {
      name: req.body.name,
      surname: req.body.surname,
      nick: "taka"
    };
  
    // Save Tutorial in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };;

exports.findOne = (req, res) => {
  const name = req.params.name;

  User.findByPk(name)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with name=" + name
      });
    });
};

exports.update = (req, res) => {
  const name = req.params.name;

  User.update(req.body, {
    where: {name: name}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with name=${name}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with name=" + name
      });
    });
};

exports.delete = (req, res) => {
  const name = req.params.name;

  User.destroy({
    where: { name: name }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User deleted successfully."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with name=" + name
      });
    });
};

exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully`});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred while removing all users."
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: '%${name}%'} } : null;

  User.findAll({ where: condition})
    .then(data => {
      res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};