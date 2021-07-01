const postCharge = require('../stripe')

module.exports = app => {
    var router = require("express").Router();

    router.post('/stripe/charge', postCharge);
};