const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json(
        {
        "message": "aqui se van a mostrar todos los usuarios"
        }
    )
})

router.get('/' , (request , response)=>{
    response.send('Ruta check')
} )

router.get('/:id' , (req,res)=>{
    res.status(200).json(
        {
        "message": `aqui va a mostrarse el usuario cuyo id es ${req.params.id}`
        }
    ) 
})

router.post('/', (req, res)=>{
    res.status(201).json({
        "message" : "Aqui se va a crear el usuario"
    })
})

router.put('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "message": `Aqui se va a actualizar el usuario ${req.params.id}`
        }
    )
})

router.delete('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "message": `Aqui se va a eliminar el user ${req.params.id}`
        }
    )
})

module.exports = router