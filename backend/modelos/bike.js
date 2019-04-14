'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//esquema de alumnos 
const BikeSchema = new Schema({
    name: String,
    kms: String,
    state: Boolean,
    description: String

})


module.exports = mongoose.model('Bikes', BikeSchema)