const mongoose = require('mongoose');
const {Schema} = mongoose;

const AeropuertoSchema = new Schema({
    AeropuertoName:{type: String, unique:true,require:true},
    Ubicacion:{type: String, require:true},
    Terminales:{type: Number, require:true}
});

module.exports = mongoose.mosel('Aeropuertos', AeropuertoSchema)