'use strict'

const express = require('express')
const stationCtrl = require('../controller/station')
const bikeCtrl = require('../controller/bike')
const api = express.Router()


//STATION: http://localhost:3000/api/asignatura
//crear station - FUNCIONA
api.post('/station/nueva', stationCtrl.saveStation)
//listado de stations - FUNCIONA
api.get('/station/stationsList', stationCtrl.getStations)
//detalle station - FUNCIONA
api.get('/station/:stationId', stationCtrl.getStationById)


//Bikes: http://localhost:3000/api/alumno
// crear bike - FUNCIONA
api.post('/bike/nuevo', bikeCtrl.saveBike)
//listar bike - FUNCIONA
api.get('/bike/listaBikes', bikeCtrl.getBikes)
//detalle bike - FUNCIONA
api.get('/bike/:bikeId', bikeCtrl.getBikeById)
//modificar bike - FUNCIONA
api.put('/bike/modificar/:bikeId', bikeCtrl.updateBike)
//eliminar alumno - FUNCIONA
api.delete('/bike/delete/:bikeId', bikeCtrl.deleteBike)



//ASIGNATURAS Y ALUMNOS: http://localhost:3000/api/relacion
// añadir alumno a asignatura - FUNCIONA
api.put('/relacion/:stationId/:bikeId', stationCtrl.addBikeToStation)
//listado asignaturas con alumnos
api.get('/relacion/listaStations', stationCtrl.getStationsWithBikes)
//listas alumnos de una asignatura
api.get('/relacion/listaBikes/:stationId', stationCtrl.getBikesOfStation)



module.exports = api;