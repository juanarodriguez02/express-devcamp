const colors = require('colors');

const sequelize = require('./seq')
// //Dependencia a la función para crear un modelo
// const UserModel = require('../models/user')
// //Dependencia a DataTypes
// const {DataTypes} = require('sequelize')

//Crear el modelo
// const User = UserModel( sequelize , DataTypes)

//Crear una función asycrona para conexion 
const connectDB = async () =>{
    try {
        await sequelize.authenticate()
            console.log('Conexión establecida exitosamente'.rainbow)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB