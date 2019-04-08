'use strict'

const Bike = require('../modelos/bike')
const Station = require('../modelos/station')

//listado de estaciones
function getStations(req, res) {
    Station.find({ }, (err, stations) => {
        if (err) return res.status(500).send( `Error al realizar la petición a ala base de datos: ${err} `)
        if (!stations) return res.status(404).send('No hay estaciones')
        res.status(200).send(stations)
    })
}

//listado de estaciones con bicicletas
function getStationsWithBikes(req, res) {
    //busca todos los usuarios, claudator vacio
    Station.find({ }, (err, stationswithbikes) => { //l'array de productes no m'ho dona
      Bike.populate(stationswithbikes, {path: "bike"}, (err, stationswithbikes) =>{
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!stationswithbikes) return res.status(404).send({message: 'No existen estación en la bbdd'})
        //se envia una respuesta en res, la respuesta sera un json de producto
        console.log(stationswithbikes)
        //res.send(200, { userList })
        res.status(200).send(stationswithbikes)
      })

    })
  }
//guardar estación
function saveStation(req, res){
    let station = new Station({
        name: req.body.name,
        state: req.body.state,
        description: req.body.description

    });
    console.log(station)
    station.save((err, result) => {
        console.log(result)
        if (err) res.status(500).send({mensaje: `Error al guardar en la base da datos ${err}`})
        
        return res.status(200).send({result})
    })   
}


//detalle de la estación
function getStationById(req, res) {
    let stationId = req.params.stationId
    Station.findById(stationId,(err, station) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!station) return res.status(404).send(`La estación no existe`)
        res.status(200).send({ station })
    })
}

/*//ver alumno que pertenece a una asignatura
function getAlumno(req, res) {
    let alumnoId = req.params.alumnoId
    Asignatura.findById(alumnoId, (err,alumno) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!alumno) return res.status(404).send(`el alumno no esta en la asignatura`)
        res.status(200).send({alumno})
    })
}*/

function getBikesOfStation(req, res) {
    let stationId = req.params.stationId

    Station.findById({_id: stationId}, (err, result) => {
        console.log(result.bikes)
        //console.log(alumnos)
        if(err) return res.status(500).send(`Error al realizar la petición: ${err} `)
    
        return res.status(200).send(result.bikes)
        /*var arraydeIds = result.alumnos
        console.log(arraydeIds)
        arraydeIds.forEach(element => {
            console.log(element)
            Alumno.findById({_id: element}, (err, alumnos) => {
                if(err) return res.status(500).send(`Error al realizar la petición: ${err} `)
                
                return res.status(200).send(element)
            })
        });*/
        //Alumno.findById({_id: result.alumnos}, (err, alumnos) => {

        //})
    })
}

//añadir un alumno (ya existente) a una asignatura
function addBikeToStation(req, res) {
    let stationId = req.params.stationId
    console.log(stationId)
    let bikeId = req.params.bikeId
    console.log(req.params.bikeId)

    Station.update({_id: stationId}, {"$push": {"bikes": bikeId}}, (err, result) => {
        console.log(result)
        if(err) res.status(500).send(`Error al actualizar la asignatura: ${err}`)
        if(!result) return res.status(404).send('La asignatura no esta en la bbdd')

        res.status(200).send(result)
    })

}

module.exports = {
    getStations,
    getStationsWithBikes,
    saveStation,
    getStationById,
    addBikeToStation,
    getBikesOfStation
}