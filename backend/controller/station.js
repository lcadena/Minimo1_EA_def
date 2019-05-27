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
        //console.log(result.bikes)
        //console.log(alumnos)
        if(err) return res.status(500).send(`Error al realizar la petición: ${err} `)

        if(!result) return res.status(400).send({message: 'La estación no existe'})

        Bike.find({'_id': { $in: result.bikes}}, (err, bikesStations) => {
            if(bikesStations.length == 0) {
                return res.status(204).send({message: 'No hay bicis en la estación'})
            }
            else {
                return res.status(200).send(bikesStations)
            }
        })

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

        return res.status(200).send(result)
    })

}

function deleteOneBike(req, res) {
    try{
        const stationId = req.params.stationId;
        const bikeId = req.params.bikeId;

        console.log(`StationID: ${stationId}, BikeID: ${bikeId}`);

        let station = Station.findById(stationId);
        if(!station){
            return res.status(404).send({message: 'Station not found'})
        }else{
            mongoose.Types.ObjectId(bikeId);

            let stationUpdated = Station.update({_id: stationId}, {$pull: {bikes: bikeId}});

            if (stationUpdated.nModified === 0) {
                return res.status(404).send({message: 'Bike not found'})
            }

            let bikeUpdated = Bike.findByIdAndUpdate({_id: bikeId}, {assigned: "false"});
            console.log(bikeUpdated);
        }
        res.status(200).send({message:'Bike deleted successfully'});
    } catch(err) {
        res.status(500).send(err)
    }
}


module.exports = {
    getStations,
    getStationsWithBikes,
    saveStation,
    getStationById,
    addBikeToStation,
    getBikesOfStation,
    deleteOneBike
}