'use strict'
const Asignatura = require('../modelos/asignaturas')

//funciones
//listado de asignaturas
function getAsignaturas (res,req) {
    Asignatura.find({}, (err, asignaturas) => {
        if (err) return res.status(500).send( `Error al realizar la petición a ala base de datos: ${err} `)
        if (!asignaturas) return res.status(404).send('No hay asignaturas')
        res.send(200, {asignaturas})
    })
}

//detalle de las asignaturas una por una
function getAsignatura (req, res){
    let asignaturaId = req.params.asignaturaId
    Asignatura.findById(asignaturaId,(err, asignatura) =>{
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!asignatura) return res.status(404).send(`La asignatura no existe`)
        res.status(200).send({ asignatura })
    })
}

//ver alumno que pertenece a una asignatura
function getAlumno (req, res){
    let alumnoId = req.params.alumnoId
    Asignatura.findById(alumnoId,(err,alumno) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!alumno) return res.status(404).send(`el alumno no esta en la asignatura`)
        res.status(200).send({ alumno})
    })
}

//añadir un alumno (ya existente) a una asignatura
function addAlumno (req, res){
    let asignaturaId = req.params.asignaturaId
    let alumnoId = req.params.alumnoId
    Asignatura.findByIdAndUpdate(asignaturaId,alumnoId,(err,alumno) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!alumno) return res.status(404).send(`el alumno no se ha podido añadir`)
        res.status(200).send('el alumno ha sido añadido correctamente')
    })
}
module.exports = {
    getAsignaturas,
    getAsignatura,
    getAlumno,
    addAlumno

}