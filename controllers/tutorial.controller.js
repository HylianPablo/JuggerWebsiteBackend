const db = require("../models");
const User = db.tutorials;
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

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};