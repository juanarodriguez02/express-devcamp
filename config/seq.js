const Sequelize = require('sequelize');

//Defiir objeto sequelize de conexión 
const sequelize = new Sequelize(
    'devcamp-2465880',
    'root',
    '',
    {
        host:'127.0.0.1',
        dialect: 'mysql',
        port: '3307'
    }
)

module.exports = sequelize