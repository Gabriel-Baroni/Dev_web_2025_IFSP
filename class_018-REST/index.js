const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tarefas = [];

app.get('/tarefa', (req, res) => {
    if(tarefas.length === 0) {
        return res.json({mensagem: "Nenhuma tarefa cadastrada"});
    }
    else{
         res.json(tarefas);
    }
});

app.post('/tarefa', (req, res) => {
    const { titulo, descricao } = req.body;
    const novaTarefa = { id: tarefas.length + 1, titulo, descricao, status: "não feita" };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

app.put('/tarefa/:id', (req, res) => {
    const id = Number(req.body.id);
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.status = "feita";
        res.json(tarefa);
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }
});

app.get('/tarefaStatus', (req, res) => {
    const status = req.query.status
    if(status == "feita"){
        const tarefaFeita = tarefas.filter(t => t.status === "feita");
        res.json(tarefaFeita);
    }else{
        const tarefaNaofeita = tarefas.filter(t => t.status === "não feita");
        res.json(tarefaNaofeita);
    }
});

app.delete('/delete/:id', (req, res) => {
    const id = Number(req.body.id);
    const tarefaIndex = tarefas.findIndex(t => t.id === id);
    console.log(tarefaIndex);
    if (tarefaIndex) {
        tarefas.splice(tarefaIndex-1, 1);
        res.json("Tarefa deletada com sucesso");
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



