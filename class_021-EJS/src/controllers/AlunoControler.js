const alunoModel = require('../models/alunoModel');

const getAlunos = (req, res) => {
    const alunos = alunoModel.getAlunos();
    if (alunos.length === 0) {
        return res.json({ mensagem: "Nenhum aluno cadastrado" });
    }
    return res.status(200).render("alunos", { pageTitle: "Lista dos alunos", alunos });
};

const getAlunoNome = (req, res) => {
    const nome = req.query.nome;
    const alunosFiltrados = alunoModel.getAlunoNome(nome);
    if (!alunosFiltrados) {
        return res.status(404).json({ mensagem: "Nome não informado" });
    }
   return res.status(200).render("alunos", {pageTitle: "Resultado da busca", alunos: alunosFiltrados });
}

const postAluno = (req, res) => {
   const { nome, prontuario, idTurma, email } = req.body;
    alunoModel.postAluno(nome, prontuario, idTurma, email);
    const alunos = alunoModel.getAlunos();
   return res.status(201).render("alunos", {pageTitle: "Aluno adicionado com sucesso!", alunos})
}

const getAlunoTurma = (req, res) => {
    const nomeTurma = req.query.nomeTurma;
    const alunosfiltros = alunoModel.getAlunoTurma(nomeTurma);
    if (!alunosfiltros) {
        return res.status(404).json({ mensagem: "Turma não informada" });
    }
    return res.status(200).render("alunos", { pageTitle: "Resultados da Busca", alunos: alunosfiltros });
}

const buscarAlunos = (req, res) => {
    const { turma, nome } = req.query;
    const alunos = alunoModel.getAlunosFiltrados(turma ? Number(turma) : undefined, nome);
    res.render("alunos", { pageTitle: "Resultados da Busca", alunos: alunos })
};

const putAluno = (req, res) => {
    const { nome, nomeNovo, prontuario, idTurma, email } = req.body;
    const alunoAtualizado = alunoModel.putAluno(nome, nomeNovo, prontuario, Number(idTurma), email);
    if (!alunoAtualizado) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
   const alunos = alunoModel.getAlunos();
   return res.status(201).render("alunos", {pageTitle: "Aluno atualizado com sucesso!", alunos});
};

const deleteAluno = (req, res) => {
    const nome = req.body.nome;
    const alunoDeletado = alunoModel.deleteAluno(nome);
    if (!alunoDeletado) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
    const alunos = alunoModel.getAlunos();
    return res.status(200).render("alunos", {pageTitle: "Aluno deletado com sucesso!", alunos});
};

const alterarTurmaAluno = (req, res) => {
    const { NomeAluno, novaTurma } = req.body;
    const alunoAtualizado = alunoModel.alterarTurmaAluno(NomeAluno, novaTurma);
    if (!alunoAtualizado) {
        return res.status(404).json({ mensagem: "Aluno ou Turma não encontrado" });
    }
    return res.status(200).json(alunoAtualizado);
};

module.exports = {getAlunos, getAlunoNome, postAluno, getAlunoTurma, buscarAlunos, putAluno, deleteAluno, alterarTurmaAluno};

