module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        surname: {
            type: Sequelize.STRING
        },
        nick: {
            type: Sequelize.STRING
        }
    });

    return User;
};
