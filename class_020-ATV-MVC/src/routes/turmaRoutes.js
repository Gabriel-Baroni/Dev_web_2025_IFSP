const express = require('express');
const TurmaRouter = express.Router();
const controller = require('../controllers/TurmaControler');

TurmaRouter.get('/get', controller.getTurmas);
TurmaRouter.post('/cadastrar', controller.postTurma);

module.exports = TurmaRouter;