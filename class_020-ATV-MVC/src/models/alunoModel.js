const {turmas} = require('./TurmaModel');
let alunos = [
    {id:1, nome: "Gabriel Baroni", prontuario:"JC3018393", idTurma: 4, email: "gabriel.baroni@alunos.ifsp.edu.br"},
    {id:2, nome: "Vinícius Máximo", prontuario:"JC301827X", idTurma: 4, email:"vinicius@gmail.com"},
    {id:3, nome: "Renan Alexandre", prontuario:"JC3019161", idTurma: 4, email: "renan@gmail.com"}
];

const getAlunos=() =>{
    return alunos;
}

const getAlunoNome = (nome) =>{
    return alunos.filter(t => t.nome === nome);
}

const getAlunoTurma = (nomeDaTurma) => {
    const turma = turmas.find(t => t.nome === nomeDaTurma);
    if (!turma) {
        return [];
    }

    return alunos.filter(aluno => aluno.idTurma === turma.id);
}


const getAlunosFiltrados = (idTurma, nome) => {
    return alunos.filter(aluno => {
        const turmaMatch = idTurma ? aluno.idTurma == idTurma : true;
        const nomeMatch = nome ? aluno.nome.toLowerCase().includes(nome.toLowerCase()) : true;
        return turmaMatch && nomeMatch;
    });
};

const postAluno = (nome, prontuario, idTurma, email) =>{
    const novoAluno ={
        id: alunos.length + 1,
        nome,
        prontuario,
        idTurma,
        email
    };
    alunos.push(novoAluno);
    return novoAluno;
}

const putAluno = (nome, nomeNovo, prontuario, idTurma, email) =>{
    const alunoIndex = alunos.findIndex(a => a.nome === nome);
    if (alunoIndex === -1) {
        return null; 
    }
    const alunoAtualizado = { id: alunos[alunoIndex].id, nome: nomeNovo, prontuario, idTurma, email };
    alunos[alunoIndex] = alunoAtualizado;
    return alunoAtualizado;
}

const deleteAluno = (nome) => {
    const alunoIndex = alunos.findIndex(a => a.nome === nome);
    if (alunoIndex === -1) {
        return false; 
    }
    alunos.splice(alunoIndex, 1);
    return true; 
}
module.exports = {getAlunos,getAlunoTurma, getAlunoNome, postAluno, getAlunosFiltrados, putAluno, deleteAluno, alunos}; 

