const express = require('express');
const router = express.Router();
const controller = require('../controllers/controlers');

router.get('/tarefa', controller.getTarefas);
router.get('/tarefaStatus', controller.getTarefaStatus);
router.post('/tarefa', controller.postTarefa);
router.put('/tarefa/:id', controller.putTarefa);
router.delete('/delete/:id', controller.deleteTarefa);

module.exports = router;
