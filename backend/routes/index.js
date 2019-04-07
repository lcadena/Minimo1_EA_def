'use strict'

const express = require('express')
const asignaturaCtrl = require('../controller/asignaturas')
const alumnoCtrl = require('../controller/alumnos')
const api = express.Router()

//guardar asignatura - FUNCIONA
api.post('/nuevaAsignatura', asignaturaCtrl.saveAsignatura)
//listado de asignaturas - FUNCIONA
api.get('/asignaturas', asignaturaCtrl.getAsignaturas)
///listado asignaturas con alumnos 
api.get('/listaAsignaturas', asignaturaCtrl.getAsignaturasconalumnos)
//detalle asignatura - FUNCIONA
api.get('/asignatura/:asignaturaId', asignaturaCtrl.getAsignatura)
// alumno de una asignatura -- FUNCIONA
api.get('/asignaturas/:alumnoId', asignaturaCtrl.getAlumno)
// añadir alumno a asignatura - FUNCIONA
api.put('/:asignaturaId/alumnos/:alumnoId', asignaturaCtrl.addAlumno)
///listas alumnos de una asignatura
api.get('/filtro/:asignaturaId', asignaturaCtrl.getAlumnosdeAsignatura)


//busca alumno por id - FUNCIONA
api.get('/alumno/:alumnoId', alumnoCtrl.getAlumnobyId)
//listar alumnos - FUNCIONA
api.get('/listaAlumnos', alumnoCtrl.listarAlumnos)
// crear alumno - FUNCIONA
api.post('/nuevoAlumno', alumnoCtrl.saveAlumno)
//modificar alumno - FUNCIONA
api.put('/alumno/:alumnoId', alumnoCtrl.updateAlumno)
//eliminar alumno - FUNCIONA
api.delete('/alumno/:alumnoId', alumnoCtrl.deleteAlumno)

module.exports = api;