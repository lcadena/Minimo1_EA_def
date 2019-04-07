'use strict'
const Alumno = require('../modelos/alumnos')

//funciones
function listarAlumnos(req, res) {
    //busca todos los usuarios, claudator vacio
    Alumno.find({}, (err, alumnos) => { //l'array de productes no m'ho dona
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!alumnos) return res.status(404).send({message: 'No existen alumnos en la bbdd'})
        
        console.log(alumnos)
        res.status(200).send(alumnos)
    })
  }

//crear un nuevo alumno
function saveAlumno (req,res){
    let alumno = new Alumno( {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    });
    alumno.save((err, alumno) => {
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
    let alumnoId = req.params.alumnoId
    Alumno.findById(alumnoId, (err, alumno) => {
        if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
    
        alumno.remove(err => {
            if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
            
            res.status(200).send( `alumno eliminado`)
        })
    
    })

}

module.exports = {
    listarAlumnos,
    saveAlumno,
    updateAlumno,
    deleteAlumno
}