'use strict'

const express = require('express')
const asignaturaCtrl = require('../controller/asignaturas')
const alumnoCtrl = require('../controller/alumnos')
const api = express.Router()

//crear nueva asignatura
api.post('/nuevaAsignatura', asignaturaCtrl.saveAsignatura)
//listado de asignatiras
api.get('/asignaturas', asignaturaCtrl.getAsignaturas)
//detalle asignatura
api.get('/asignatura/:asignaturaId', asignaturaCtrl.getAsignatura)
// alumno de una asignatura
api.get('/asignaturas/:alumnoId', asignaturaCtrl.getAlumno)
// añadir alumno a asginatura
api.put(':asignaturaId/alumnos/:alumnoId',asignaturaCtrl.addAlumno)


//listar alumnos
api.get('/listaAlumnos', alumnoCtrl.listarAlumnos)
// crear alumno
api.post('/nuevoAlumno', alumnoCtrl.saveAlumno)
//modificar alumno
api.post('/alumno/:alumnoId', alumnoCtrl.updateAlumno)
//eliminar alumno
api.delete('/alumno/:alumnoId', alumnoCtrl.deleteAlumno)

module.exports = api;