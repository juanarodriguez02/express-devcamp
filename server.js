const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

//Dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')

//Establecer el archivo de configuración con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1 Crear el objetos de app
const app = express()

app.use('/api/v1/bootcamps' , bootcampRoutes)

//3 Ejecutar servidor de desarrollo de express 
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto:${process.env.PORT}`.bgBlue.white)
})