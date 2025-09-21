const express = require('express');
const AlunoRouter = express.Router();
const controller = require('../controllers/AlunoControler');

AlunoRouter.get('/get', controller.getAlunos);
AlunoRouter.get('/pesquisar', controller.getAlunoNome);
AlunoRouter.get('/pesquisarTurma', controller.getAlunoTurma);
AlunoRouter.post('/novoAluno', controller.postAluno);
AlunoRouter.get('/buscar', controller.buscarAlunos);
AlunoRouter.post('/atualizar', controller.putAluno);
AlunoRouter.post('/deletar', controller.deleteAluno);
AlunoRouter.post('/alterarTurma', controller.alterarTurmaAluno);
module.exports = AlunoRouter;
