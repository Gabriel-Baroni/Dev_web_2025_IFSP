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

module.exports = {getTurmas, postTurma};