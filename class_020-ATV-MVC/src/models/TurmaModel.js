const {alunos} = require('./alunoModel');
let turmas = [
    {id:1, nome: "INFO1"},
    {id:2, nome: "INFO2"},
    {id:3, nome: "INFO3"}, 
    {id:4, nome: "INFO4"}
];


const getTurma = () =>{
    return turmas;
}

const postTurma =  (nome) =>{
    const novaTurma ={
        id: turmas.length + 1,
        nome
    };
    turmas.push(novaTurma);
    return novaTurma;
};

const deletarTurma = (nome) => {
    const turmaIndex = turmas.findIndex(turma => turma.nome === nome);
    if (turmaIndex === -1) {
        return false; 
    }
    const turmaID = turmas[turmaIndex].id;
    const turmaAssociada = alunos.some(aluno => aluno.idTurma === turmaID);
    if (turmaAssociada) {
        return false; 
    }
    turmas.splice(turmaIndex, 1);
    return true; 
}

module.exports = {getTurma, postTurma, deletarTurma, turmas};
