'use strict'

const express = require('express')
const stationCtrl = require('../controller/station')
const bikeCtrl = require('../controller/bike')
const api = express.Router()


//STATION: http://localhost:3000/api/station
//crear station - FUNCIONA
api.post('/station/nueva', stationCtrl.saveStation)
//listado de stations - FUNCIONA
api.get('/station/stationsList', stationCtrl.getStations)
//detalle station - FUNCIONA
api.get('/station/:stationId', stationCtrl.getStationById)


//Bikes: http://localhost:3000/api/bike
// crear bike - FUNCIONA
api.post('/bike/nuevo', bikeCtrl.saveBike)
//listar bike - FUNCIONA
api.get('/bike/listaBikes', bikeCtrl.getBikes)
//lista de bicis unassigned
api.get('/bike/unassigned', bikeCtrl.getUnassignedBikes)
//detalle bike - FUNCIONA
api.get('/bike/:bikeId', bikeCtrl.getBikeById)
//eliminar bike - FUNCIONA
api.delete('/bike/delete/:bikeId', bikeCtrl.deleteBike)



//ASIGNATURAS Y ALUMNOS: http://localhost:3000/api/relacion
// añadir bike a station - FUNCIONA
api.put('/relacion/:stationId/:bikeId', stationCtrl.addBikeToStation)
//listado stations con bicis
api.get('/relacion/listaStations', stationCtrl.getStationsWithBikes)
//listar bikes de una station
api.get('/relacion/listaBikes/:stationId', stationCtrl.getBikesOfStation)


module.exports = api;