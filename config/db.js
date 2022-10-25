const colors = require('colors');

const sequelize = require('./seq')
//Dependencia a la función para crear un modelo
const UserModel = require('../models/user')
//Dependencia a DataTypes
const {DataTypes} = require('sequelize')

//Crear el modelo
const User = UserModel( sequelize , DataTypes)

//Crear una función asycrona para conexion 
const connectDB = async () =>{
    try {
        await sequelize.authenticate()
        console.log('Conexión establecida exitosamente'.rainbow)
        //Seleccionar los users:
        //const users = await User.findAll();
        //Crear un users:
        //const juana = await User.create({ name: "Antonia", email: "anto@misena.edu.co", password: "7895" });
        //console.log(juana)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB