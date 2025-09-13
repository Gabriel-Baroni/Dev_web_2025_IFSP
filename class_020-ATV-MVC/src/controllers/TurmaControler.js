const turmaModel = require('../models/TurmaModel');

const getTurmas = (req, res) => {
    const turmas  = turmaModel.getTurma();
    if (turmas.length === 0) {
        return res.json({ mensagem: "Nenhuma turma cadastrada" });
    }
    return res.status(200).json(turmas);
};

const postTurma = (req, res) => {
   const { nome } = req.body;
   const novaTurma = turmaModel.postTurma(nome);
   return res.status(201).json(novaTurma);
}

const deletarTurma = (req, res) => {
    const { nome } = req.body;
    const sucesso = turmaModel.deletarTurma(nome);
    if (!sucesso) {
        return res.status(400).json({ mensagem: "Não foi possível deletar a turma. Verifique se a turma existe ou se há alunos associados a ela." });
    }
    return res.status(200).json({ mensagem: "Turma deletada com sucesso" });
}

module.exports = {getTurmas, postTurma, deletarTurma};