//Objeto de conexión 
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes} = require('sequelize')
//El modelo
const UserModel =require('../models/user')
//Crear el objeto usuario
const User = UserModel(sequelize, DataTypes)

exports.traerUsers = async (req, res)=>{
    const users = await User.findAll();
    res.status(200).json(
        {
          "success": true,
          "data" : users
        }
    )
}

exports.traerUsersporId = async (req,res)=>{
    const userId = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "success": true,
            "data" : userId
        }
    ) 
}

exports.crearUser = async (req, res)=>{
    const newUser = await User.create(req.body);
    res.status(201).json(
        {
            "success": true,
            "data": newUser
        }
    )
}

exports.actualizarUser = async (req, res)=>{
    //Actualizar usuario por id
    await User.update(req.body, 
        {
            where: {
                id: req.params.id
            }
        }
    )
    //Consultar datos actualizados
    const upUser = await User.findByPk(req.params.id)

    res.status(200).json(
        {
            "success": true,
            "data" : upUser
        }
    )
}

exports.eliminarUser = async (req, res)=>{
    //Buscar al usuario por id
    const u = await User.findByPk(req.params.id)

    //Eliminar usuario por id
    await User.destroy({
        where: {
          id: req.params.id
        }
      });

    //Response
    res.status(200).json(
        {
            "success": true,
            "data": u
        }
    )
}