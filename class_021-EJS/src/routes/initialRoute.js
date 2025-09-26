const express = require('express');
const router = express.Router();

const initialControler = require('../controllers/initialControler');

router.get('/', initialControler.paginaInicial);

module.exports = router;