const mongoose = require('mongosee');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI, {
    userNewUrlPArser:true,
    userCreateIndex:true
}).then(db=>console.log('Conexion exitosa'))
.catch(error=> console.error(err));