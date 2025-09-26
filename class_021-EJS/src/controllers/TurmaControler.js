const turmaModel = require('../models/TurmaModel');

const getTurmas = (req, res) => {
    const turmas  = turmaModel.getTurma();
    if (turmas.length === 0) {
        return res.json({ mensagem: "Nenhuma turma cadastrada" });
    }
    return res.status(200).render("turmas", {pageTitle: "Lista das turmas", turmas: turmas })
};

const postTurma = (req, res) => {
   const { nome } = req.body;
   turmaModel.postTurma(nome);
    const turmas  = turmaModel.getTurma();
   return res.status(200).render("turmas", {pageTitle: "Turmas adicionada com sucesso", turmas: turmas })
}

const deletarTurma = (req, res) => {
    const { nome } = req.body;
    const sucesso = turmaModel.deletarTurma(nome);
    if (!sucesso) {
        return res.status(400).json({ mensagem: "Não foi possível deletar a turma. Verifique se a turma existe ou se há alunos associados a ela." });
    }
    const turmas  = turmaModel.getTurma();
    return res.status(200).render("turmas", {pageTitle: "Turmas deletada com sucesso", turmas: turmas })
}

module.exports = {getTurmas, postTurma, deletarTurma};