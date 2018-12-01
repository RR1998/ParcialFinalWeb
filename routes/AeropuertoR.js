const express = require('express');
const router = express.router();
const AeropuertoController = require('../controllers/AeropuertoController');


router.get('/', AeropuertoController.index);
module.exports = router;