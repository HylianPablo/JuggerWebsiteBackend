module.exports = app => {
    const tournament = require("../controllers/tournament.controller.js");

    var router = require("express").Router();

    // Retrieve all Tournaments
    router.get("/", tournament.findAll);

    // Retrieve all Tournaments in a year
    router.get("/past", tournament.findAllByYear);


    // Retrieve a single Tournament with id
    router.get("/:id", tournament.findOne);

    

    app.use("/tournament", router);
};