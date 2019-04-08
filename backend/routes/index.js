'use strict'

const express = require('express')
const asignaturaCtrl = require('../controller/asignaturas')
const alumnoCtrl = require('../controller/alumnos')
const api = express.Router()


//ASIGNATURAS: http://localhost:3000/api/asignatura
//crear asignatura - FUNCIONA
api.post('/asignatura/nueva', asignaturaCtrl.saveAsignatura)
//listado de asignaturas - FUNCIONA
api.get('/asignatura/listaAsignaturas', asignaturaCtrl.getAsignaturas)
//detalle asignatura - FUNCIONA
api.get('/asignatura/:asignaturaId', asignaturaCtrl.getAsignatura)
//modificar asignatura
//api.get('/asignatura/modificar/:asignaturaId', ?????)
//eliminar asignatura
//api.get('/asignatura/eliminar/:asignaturaId', ?????)


//ALUMNOS: http://localhost:3000/api/alumno
// crear alumno - FUNCIONA
api.post('/alumno/nuevo', alumnoCtrl.saveAlumno)
//listar alumnos - FUNCIONA
api.get('/alumno/listaAlumnos', alumnoCtrl.listarAlumnos)
//detalle alumno - FUNCIONA
api.get('/alumno/:alumnoId', alumnoCtrl.getAlumnobyId)
//modificar alumno - FUNCIONA
api.put('/alumno/modificar/:alumnoId', alumnoCtrl.updateAlumno)
//eliminar alumno - FUNCIONA
api.delete('/alumno/eliminar/:alumnoId', alumnoCtrl.deleteAlumno)



//ASIGNATURAS Y ALUMNOS: http://localhost:3000/api/relacion
// añadir alumno a asignatura - FUNCIONA
api.put('/relacion/:asignaturaId/:alumnoId', asignaturaCtrl.addAlumno)
//listado asignaturas con alumnos
api.get('/relacion/listaAsignaturasConAlumnos', asignaturaCtrl.getAsignaturasconalumnos)
//listas alumnos de una asignatura
api.get('/relacion/listaAlumnos/:asignaturaId', asignaturaCtrl.getAlumnosdeAsignatura)
//detalle alumno de una asignatura -- FUNCIONA
api.get('/relacion/alumnoDeAsignatura/:alumnoId', asignaturaCtrl.getAlumno)


module.exports = api;