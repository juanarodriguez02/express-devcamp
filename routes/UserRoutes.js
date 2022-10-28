const express = require('express')
const {crearUser,
       traerUsers,
       traerUsersporId,
       actualizarUser,
       eliminarUser} = require('../controllers/UserController')

const router = express.Router()

//Rutas de Usuario 
router.route('/')
    .get(traerUsers)
    .post(crearUser)

router.route('/:id')
    .get(traerUsersporId)
    .put(actualizarUser)
    .delete(eliminarUser)

module.exports = router