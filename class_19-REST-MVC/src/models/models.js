let tarefas = [];

const getTarefas = () =>{
    return tarefas;
}

const getTarefaStatus = (status) =>{
    // const status = req.query.status
    return tarefas.filter(t => t.status === status);
}

const postTarefa = (titulo, descricao) =>{
    // const { titulo, descricao } = req.body;
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo,
        descricao,
        status: "não feita"
    };
    tarefas.push(novaTarefa);
    return novaTarefa;
}

const putTarefa = (id) =>{
    // const id = Number(req.body.id);
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.status = "feita";
        return tarefa;
    }
    return null;
}

const deleteTarefa = (id) =>{
    // const id = Number(req.body.id);
    const index = tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
        tarefas.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = {getTarefas, getTarefaStatus, postTarefa, putTarefa, deleteTarefa};
