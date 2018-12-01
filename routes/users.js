const express = require('express');
const router = express.router();
const AeropuertoController = require('../controllers/AeropuertoController');


router.get('/', AeropuertoController.index);
router.update('/id', AeropuertoController.update);
router.delete('/id', AeropuertoController.delete);
module.exports = router;