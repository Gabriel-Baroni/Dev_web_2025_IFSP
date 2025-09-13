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
    const nomeTurma = req.query.nomeTurma;
    const alunosfiltros = alunoModel.getAlunoTurma(nomeTurma);
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

const putAluno = (req, res) => {
    const { nome, nomeNovo, prontuario, idTurma, email } = req.body;
    const alunoAtualizado = alunoModel.putAluno(nome, nomeNovo, prontuario, Number(idTurma), email);
    if (!alunoAtualizado) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
    return res.status(200).json(alunoAtualizado);
}

const deleteAluno = (req, res) => {
    const nome = req.body.nome;
    const alunoDeletado = alunoModel.deleteAluno(nome);
    if (!alunoDeletado) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
    return res.status(200).json({ mensagem: "Aluno deletado com sucesso", alunoDeletado });
}


module.exports = {getAlunos, getAlunoNome, postAluno, getAlunoTurma, buscarAlunos, putAluno, deleteAluno};

