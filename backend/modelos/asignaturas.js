'use strict'
const mongoose = require('mongoose')
const alumnosSchema = require('./alumnos').schema
const Schema = mongoose.Schema

//esquema de alumnos 
const AsignaturasSchema = new Schema({
    name: {type: String,unique: true},
    alumnos: [{type: Schema.Types.ObjectId, ref: 'Alumno'}]
    //alumnos: [alumnosSchema]
})


module.exports = mongoose.model('Asignaturas', AsignaturasSchema)