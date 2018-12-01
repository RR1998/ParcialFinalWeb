const Aeropuerto = require ('../models/Aeropuerto');
const AeropuertoController = {};


//metodo para ver todos los aeropuertos
AeropuertoController.index = async function (req, res, next) {
    try{
        let Aeropuertos = Aeropuerto.find();
        return res.status(200).json(Aeropuertos);
    }catch(error){
        return res.status(500).json({error:error});
    }
}


module.exports = AeropuertoController;