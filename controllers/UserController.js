//Objeto de conexión 
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes, ValidationError} = require('sequelize')
//El modelo
const UserModel =require('../models/user')
//Crear el objeto usuario
const User = UserModel(sequelize, DataTypes)

exports.traerUsers = async (req, res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json(
            {
              "success": true,
              "data" : users
            }
        )
    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "Error de servidor"
        })
    }
   
}

exports.traerUsersporId = async (req,res)=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //Si usuario no existe
        if(!userId){
            res.status(422).json(
                {
                    "success": true,
                    "data" : userId
                }
            )
        }else{
            res.status(422).json(
                {
                    "success": true,
                    "data" : userId
                }
            )
        }
    } catch (error) {
        res.status(200).json({
            "success": false,
            "errors": "Error de servidor"
        })
    }

}

exports.crearUser = async (req, res)=>{
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(
        {
            "success": true,
            "data": newUser
        }
    )
    } catch (error) {
        if(error instanceof ValidationError){
            const errores = error.errors.map((e)=>
            e.message
        )
        res.status(422).json({
            "success": true,
            "errors": errores
        })
        }else{
        //Error de servidor
        res.status(500).json({
            "success": true,
            "errors": "error de servidor"
        })
    }
    }
}

//PUT - PATCH: actualizar
exports.actualizarUser = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upUser = await User.findByPk(req.params.id)
      if(!upUser){
        //response de usuario no encontrado
        res.status(422).json(
            {
                "success": false,
                "errors": [
                    "usuario no existe"
                ]  
            }
           )   
       }else{
            //actualizar usuario por id
            await User.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const userAct = await User.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  userAct
            })
       }
    } catch (error) {
        res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
    }
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