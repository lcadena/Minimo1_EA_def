'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StationSchema  = new Schema({
    name: String,
    state: String,
    description: String, 
    bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]

})

module.exports = mongoose.model('Stations', StationSchema)