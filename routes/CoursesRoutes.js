const express = require('express')
const {crearCourses,
        traerCourses,
        traerCoursesporId,
        actualizarCourses,
        eliminarCourses
        } = require('../controllers/CoursesController')

    const router = express.Router()

        //Rutas de Usuario 
        router.route('/')
        .post(crearCourses)
        .get(traerCourses)


        router.route('/:id')
        .get(traerCoursesporId)
        .put(actualizarCourses)
        .delete(eliminarCourses)
        
    module.exports = router