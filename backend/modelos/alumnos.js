'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

//esquema del alumno
const AlumnosSchema  = new Schema({
    name: {type: String,unique: true},
    address: String, 
    phones: [{casa: String, movil: String}]

})
/*  //encriptacion de datos 
AlumnosSchema.pre('save', (next) => {
    let alumno = this
    bcrypt.genSalt(10, (err, salt)=> {
        if (err) return next(err)
        bcrypt.hash(alumno.name, salt, null, (err, hash) => {
            alumno.name
            next()
        })
    })
})
*/
module.exports = mongoose.model('alumnos', AlumnosSchema)