const model = require('../models/models');

const getTarefas = (req, res) => {
    const tarefas = model.getTarefas();
    if (tarefas.length === 0) {
        return res.json({ mensagem: "Nenhuma tarefa cadastrada" });
    }
    return res.json(tarefas);
}  

const getTarefaStatus = (req, res) => {
    const status = req.query.status;
    const tarefasFiltradas = model.getTarefaStatus(status);
    return res.json(tarefasFiltradas);
}

const postTarefa = (req, res) => {
   const { titulo, descricao } = req.body;
   const novaTarefa = model.postTarefa(titulo, descricao);
   return res.status(201).json(novaTarefa);
}

const putTarefa = (req, res) => {
   const id = Number(req.body.id);
   const tarefaAtualizada = model.putTarefa(id);
    if (tarefaAtualizada) {
        return res.json(tarefaAtualizada);
    }
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
}  

const deleteTarefa = (req, res) => {
   const id = Number(req.body.id);
   const sucesso = model.deleteTarefa(id);
    if (sucesso) {
        return res.json({ mensagem: "Tarefa deletada com sucesso" });
    }
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
}


module.exports = {getTarefas, getTarefaStatus, postTarefa, putTarefa, deleteTarefa};
