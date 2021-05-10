const Sequelize = require('sequelize');
const conn = new Sequelize('blog', 'root', 'webmaster', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = conn;