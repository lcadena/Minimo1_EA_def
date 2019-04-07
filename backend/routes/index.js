'use strict'

const express = require('express')
const asignaturaCtrl = require('../controlled/asignaturas')
const alumnoCtrl = require('../controlled/alumnos')
const api = express.Router()

//listado de asignatiras
api.get('/asignaturas', asignaturaCtrl.getAsignaturas)
//detalle asignatura
api.get('/asignatura/:asignaturaId', asignaturaCtrl.getAsignatura)
// alumno de una asignatura
api.get('/asignaturas/:alumnoId', asignaturaCtrl.getAlumno)
// añadir alumno a asginatura
api.post('/asignatura/:asignaturaId',asignaturaCtrl.addAlumno)


// crear alumno
api.post('/alumno/:alumno', alumnoCtrl.saveAlumno)
//modificar alumno
api.post('/alumno/:alumnoId', alumnoCtrl.updateAlumno)
//eliminar alumno
api.delete('/alumno/:alumnoId', alumnoCtrl.deleteAlumno)

module.exports = api;