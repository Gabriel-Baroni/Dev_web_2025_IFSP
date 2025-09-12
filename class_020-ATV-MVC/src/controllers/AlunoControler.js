const alunoModel = require('../models/alunoModel');

const getAlunos = (req, res) => {
    const alunos = alunoModel.getAlunos();
    if (alunos.length === 0) {
        return res.json({ mensagem: "Nenhum aluno cadastrado" });
    }
    return res.status(200).json(alunos);
};

const getAlunoNome = (req, res) => {
    const nome = req.query.nome;
    const alunosFiltrados = alunoModel.getAlunoNome(nome);
    if (!alunosFiltrados) {
        return res.status(404).json({ mensagem: "Nome não informado" });
    }
    return res.status(200).json(alunosFiltrados);
}

const postAluno = (req, res) => {
   const { nome, prontuario, idTurma, email } = req.body;
   const novaAluno = alunoModel.postAluno(nome, prontuario, idTurma, email);
   return res.status(201).json(novaAluno);
}

const getAlunoTurma = (req, res) => {
    const idTurma = Number(req.query.idTurma);
    const alunosfiltros = alunoModel.getAlunoTurma(idTurma);
    if (!alunosfiltros) {
        return res.status(404).json({ mensagem: "Turma não informada" });
    }
    return res.status(200).json(alunosfiltros);
}

const buscarAlunos = (req, res) => {
    const { turma, nome } = req.query;
    const alunos = alunoModel.getAlunosFiltrados(turma ? Number(turma) : undefined, nome);
    res.json(alunos);
};


module.exports = {getAlunos, getAlunoNome, postAluno, getAlunoTurma, buscarAlunos};

