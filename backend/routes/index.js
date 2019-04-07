'use strict'

const express = require('express')
const asignaturaCtrl = require('../controlled/asignaturas')
const alumnoCtrl = require('../controlled/alumnos')
const api = express.Router()

//guardar asignatura
api.post('/nuevaAsignatura', asignaturaCtrl.saveAsignatura)
//listado de asignatiras
api.get('/asignaturas', asignaturaCtrl.getAsignaturas)
//detalle asignatura
api.get('/asignatura/:asignaturaId', asignaturaCtrl.getAsignatura)
// alumno de una asignatura
api.get('/asignaturas/:alumnoId', asignaturaCtrl.getAlumno)
// añadir alumno a asginatura
api.post('/asignatura/:asignaturaId',asignaturaCtrl.addAlumno)


//listar alumnos
api.get('/listaAlumnos', alumnoCtrl.listarAlumnos)
// crear alumno
api.post('/nuevoAlumno', alumnoCtrl.saveAlumno)
//modificar alumno
api.post('/alumno/:alumnoId', alumnoCtrl.updateAlumno)
//eliminar alumno
api.delete('/alumno/:alumnoId', alumnoCtrl.deleteAlumno)

module.exports = api;