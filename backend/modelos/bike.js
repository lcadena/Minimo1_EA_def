'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//esquema de alumnos 
const BikeSchema = new Schema({
    name: {type: String,unique: true},
    kms: Number,
    description: String

})


module.exports = mongoose.model('Bikes', BikeSchema)