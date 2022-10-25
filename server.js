const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

//Dependencia a la conexion a bd
const connectDB = require('./config/db')

//Dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')

//Establecer el archivo de configuración con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1 Crear el objetos de app
const app = express()

//Ejecutar la conexión a bd 
connectDB()

app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/users' , userRoutes)

//3 Ejecutar servidor de desarrollo de express 
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto:${process.env.PORT}`.bgBlue.white)
})