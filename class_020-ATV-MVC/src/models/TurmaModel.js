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


module.exports = {getTurma, postTurma};
