const Aeropuerto = require ('../models/Aeropuerto');
const AeropuertoController = {};


//metodo para ver todos los aeropuertos
AeropuertoController.index = async function (req, res, next) {
    try{
        let Aeropuertos = await Aeropuerto.find();
        return res.status(200).json(Aeropuertos);
    }catch(error){
        return res.status(500).json({error:error});
    }
}

AeropuertoController.update = async function (req, res, next){
    let{id}=req.params;
    let aeropuerto = {
        Aeropuertoname = req.body.AeropuertoName,
        Ubicacionn = req.body.Ubicacion,
        Terminales = req.body.Terminales
    }
    console.log(aeropuerto);
    try{
        await Aeropuerto.update({_id,id}, aeropuerto);
        return res.status(200).json("message", "Actualizado con exito");
    }
    catch{
        return res.status(500).json("message", "no se ha podido actualizar");
    }
}

AeropuertoController.delete = async function(req, res, next){
    let {id} = req.params;
    try{
        await Aeropuerto.remove({_id: id});
        return res.status(200).json({"message": "Se ha eliminado correctamente"});
    }
    catch{
        return res.status(500).json("message", "no se ha podido eliminar");
    }
}

module.exports = AeropuertoController;