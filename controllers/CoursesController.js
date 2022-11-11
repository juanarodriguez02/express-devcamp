//Objeto de conexión 
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes, ValidationError} = require('sequelize')
//El modelo
const CoursesModel =require('../models/courses')
//Crear el objeto usuario
const Courses = CoursesModel(sequelize, DataTypes)

//Crear Courses
exports.crearCourses = async (req, res)=>{
    try {
        const newCourses = await Courses.create(req.body);
        res.status(201).json(
        {
            "success": true,
            "data": newCourses
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

exports.traerCourses = async (req, res)=>{
    try {
        const courses = await Courses.findAll();
        res.status(200).json(
            {
              "success": true,
              "data" : courses
            }
        )
    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "Error de servidor"
        })
    }
   
}

exports.traerCoursesporId = async (req,res)=>{
    try {
        const coursesId = await Courses.findByPk(req.params.id)
        //Si usuario no existe
        if(!coursesId){
            res.status(422).json(
                {
                    "success": true,
                    "data" : coursesId
                }
            )
        }else{
            res.status(422).json(
                {
                    "success": true,
                    "data" : coursesId
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
exports.actualizarCourses = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upCourses = await Courses.findByPk(req.params.id)
      if(!upCourses){
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
            await Courses.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const coursesAct = await Courses.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  coursesAct
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
exports.eliminarCourses = async (req , res)=>{
    //buscar el usuario por id
    try {
        const u = await Courses.findByPk(req.params.id)
        // Borrar usuario 
            await Courses.destroy({
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