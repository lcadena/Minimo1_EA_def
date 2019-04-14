'use strict'
const Bike = require('../modelos/bike')

//funciones
function getBikes(req, res) {
    //busca todos los usuarios, claudator vacio
    Bike.find({}, (err, bikes) => { //l'array de productes no m'ho dona
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!bikes) return res.status(404).send({message: 'No existen bicicletas en la bbdd'})
        
        console.log(bikes)
        res.status(200).send(bikes)
    })
  }

//bici por id
function getBikeById(req, res) {
    let bikeId = req.params.bikeId
    Bike.findById(bikeId, (err, result) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!result) return res.status(404).send(`El alumno no existe`)
        res.status(200).send({ result })
    })
}


//crear nueva bici
function saveBike(req,res){
    let bike = new Bike( {
        name: req.body.name,
        kms: req.body.kms,
        state: req.body.state,
        description: req.body.description
    });
    console.log(bike)
    bike.save((err, result) => {
        console.log(result)
        if (err) res.status(500).send({mensaje: 'Error al guardar en la base da datos ${err}'})
        return res.status(200).send({result})
    })   
}

//lista de unassigned bicis
function getUnassignedBikes(req, res) {
    Bike.find({state: false}, (err, unassigbikes) => {
        if (err) return res.status(500).send(`Error al realizar al petición: ${err}`)
        if(!unassigbikes) return res.status(404).send('No existes bicis sin asignar')
        
        return res.status(200).send(unassigbikes)
    })

}

//eliminar bici
function deleteBike(req, res){
    let bikeId = req.params.bikeId
    Bike.findById(bikeId, (err, bikedeleted) => {
        if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
    
        bikedeleted.remove(err => {
            if (err) res.status(500).send(`Error al eliminarlo: ${err}`)
            
            res.status(200).send('bicicleta eliminada')
        })
    
    })

}

module.exports = {
    getBikes,
    getBikeById,
    saveBike,
    getUnassignedBikes,
    deleteBike
}