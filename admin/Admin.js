const Sequelize = require('sequelize');
const conn = require('../database/conn');

const Users = conn.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nameUser: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    resumeBio: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Users;