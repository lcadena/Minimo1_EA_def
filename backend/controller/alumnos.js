'use strict'
const Alumno = require('../modelos/alumnos')

//funciones
//crear un nuevo alumno
function saveAlumno (req,res){
    let alumno = new Alumno( {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    })

    Alumno.save((err, alumno) => {
        if (err) res.status(500).send({mensaje: 'Error al guardar en la base da datos ${err}'})
        res.status(200).send({alumno})
    })   
}

//modificar alumno
function updateAlumno (req, res){
    let alumnoId = req.params.alumnoId
    let update = req.body
    Alumno.findByIdAndUpdate(alumnoId, update, (err, alumno) => {
        if (err) res.status(500).send(`Error al actualizarlo: ${err}`)
        if (!alumno) return res.status(404).send({message: 'La asignatura no existe'})

        res.status(200).send(alumno)
    })
}

//eliminar alumno
function deleteAlumno (req, res){
    let alumno = req.params.alumno
    Alumno.findById(alumno, (err, alumnno) => {
        if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
    
        Alumnos.remove(err => {
            if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
            
            res.status(200).send( `alumno eliminado`)
        })
    
    })

}

module.exports = {
    saveAlumno,
    updateAlumno,
    deleteAlumno
}