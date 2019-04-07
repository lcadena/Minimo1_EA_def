'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const conf = require('./conf')

mongoose.connect(conf.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')
  app.listen(conf.port, () => {
    console.log(`API REST corriendo en http://localhost:${conf.port}`)
  })
})