const express = require('express')
const {crearReviews,
       traerReviews,
       traerReviewsporId,
       actualizarReviews,
       eliminarReviews
        } = require('../controllers/ReviewsController')

    const router = express.Router()

        //Rutas de Usuario 
        router.route('/')
        .post(crearReviews)
        .get(traerReviews)


        router.route('/:id')
        .get(traerReviewsporId)
        .put(actualizarReviews)
        .delete(eliminarReviews)
        
    module.exports = router