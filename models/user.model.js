const { notify } = require("../app");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        },
        nick: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING,  
        },
        email: {
            type: Sequelize.STRING
        },
        nif: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return User;
};
