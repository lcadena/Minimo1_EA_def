'use strict'
const express = require('express')

const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

const cors = require('cors')
const app = express()
const api = require('./routes/index')



//Método use
app.use(bodyParser.urlencoded({ extended: false}))
//Permitir peticiones con formato de mensaje JSON
app.use(bodyParser.json())
app.use(cors())
//configurar el modo plantilla
//le decimos a la app que en nuestra ruta /api utilize el modulo api
app.use('/api', api)
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    }
    next()
})
module.exports = app