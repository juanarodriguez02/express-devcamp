//Objeto de conexión 
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes, ValidationError} = require('sequelize')
//El modelo
const ReviewsModel =require('../models/reviews')
//Crear el objeto usuario
const Reviews = ReviewsModel(sequelize, DataTypes)

exports.crearReviews = async (req, res)=>{
    try {
        const newReviews = await Reviews.create(req.body);
        res.status(201).json(
        {
            "success": true,
            "data": newReviews
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

exports.traerReviews = async (req, res)=>{
    try {
        const reviews = await Reviews.findAll();
        res.status(200).json(
            {
              "success": true,
              "data" : reviews
            }
        )
    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "Error de servidor"
        })
    }
   
}

exports.traerReviewsporId = async (req,res)=>{
    try {
        const reviewsId = await Reviews.findByPk(req.params.id)
        //Si usuario no existe
        if(!reviewsId){
            res.status(422).json(
                {
                    "success": true,
                    "data" : reviewsId
                }
            )
        }else{
            res.status(422).json(
                {
                    "success": true,
                    "data" : reviewsId
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

//PUT - PATCH:
exports.actualizarReviews = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upReviews = await Reviews.findByPk(req.params.id)
      if(!upReviews){
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
            await Reviews.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const reviewsAct = await Reviews.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  reviewsAct
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

//DELETE: borrar un Usuario
exports.eliminarReviews = async (req , res)=>{
    //buscar el usuario por id
    try {
        const u = await Reviews.findByPk(req.params.id)
        // Borrar usuario 
            await Reviews.destroy({
                where: {
                id: req.params.id
                }
            })
            res.status(200).json(
                {
                    "success": true,
                    "data": u
                }
            )
    } catch (error) {
        res
            .status(500)
            .json({
                 "success": false, 
                 "errors":  "error de servidor"  
            })
    }
        
    }