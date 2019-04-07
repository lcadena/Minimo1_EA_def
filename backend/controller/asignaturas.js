'use strict'

const Asignatura = require('../modelos/asignaturas')
const Alumno = require('../modelos/alumnos')

//funciones
//listado de asignaturas
function getAsignaturas(req, res) {
    Asignatura.find({ }, (err, asignaturas) => {
        if (err) return res.status(500).send( `Error al realizar la petición a ala base de datos: ${err} `)
        if (!asignaturas) return res.status(404).send('No hay asignaturas')
        res.status(200).send(asignaturas)
    })
}

//listado de asignaturas con estudiantes
function getAsignaturasconalumnos(req, res) {
    //busca todos los usuarios, claudator vacio
    Asignatura.find({ }, (err, asignaturasconalumnos) => { //l'array de productes no m'ho dona
      Alumno.populate(asignaturasconalumnos, {path: "alumno"}, (err, asignaturasconalumnos) =>{
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!asignaturasconalumnos) return res.status(404).send({message: 'No existen asignaturas en la bbdd'})
        //se envia una respuesta en res, la respuesta sera un json de producto
        console.log(asignaturasconalumnos)
        //res.send(200, { userList })
        res.status(200).send(asignaturasconalumnos)
      })

    })
  }

//guardar asignaturas
function saveAsignatura (req, res){
    let asignatura = new Asignatura({
        name: req.body.name
    });
    console.log(asignatura)
    asignatura.save((err, asignatura) => {
        console.log(asignatura)
        console.log(err)
        if (err) res.status(500).send({mensaje: `Error al guardar en la base da datos ${err}`})
        
        return res.status(200).send({asignatura})
    })   
}


//detalle de las asignaturas una por una
function getAsignatura(req, res) {
    let asignaturaId = req.params.asignaturaId
    Asignatura.findById(asignaturaId,(err, asignatura) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!asignatura) return res.status(404).send(`La asignatura no existe`)
        res.status(200).send({ asignatura })
    })
}

//ver alumno que pertenece a una asignatura
function getAlumno(req, res) {
    let alumnoId = req.params.alumnoId
    Asignatura.findById(alumnoId, (err,alumno) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!alumno) return res.status(404).send(`el alumno no esta en la asignatura`)
        res.status(200).send({alumno})
    })
}

//añadir un alumno (ya existente) a una asignatura
function addAlumno (req, res){
    let asignaturaId = req.params.asignaturaId
    let alumnoId = req.params.alumnoId
    
    Asignatura.update({_id: asignaturaId}, {"$push": {"alumnos": alumnoId}}, (err, result) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!result) return res.status(404).send(`el alumno no se ha podido añadir`)
        console.log(result)
        res.status(200).send('el alumno ha sido añadido correctamente')
    })
}
module.exports = {
    getAsignaturasconalumnos,
    saveAsignatura,
    getAsignaturas,
    getAsignatura,
    getAlumno,
    addAlumno
}