const express = require("express");
const app = express();
const port = 3000;


const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let alunos = [
    {  nome: 'Gabriel', prontuario: 'JC3018393', curso: "Informática" },
    {  nome: 'Vinícius', prontuario: 'JC301827x', curso: "Informática" },
    {  nome: 'João', prontuario: 'JC3018395', curso: "ADM" },
    {  nome: 'Maria', prontuario: 'JC3018396', curso: "ADM" },
];

app.get('/alunos', (req, res) => {
    res.json(alunos); 
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

app.get('/aluno', (req, res) => {
    const prontuario = req.query;
    const aluno = alunos.find(a => a.prontuario === prontuario.prontuario);
    res.json(aluno);
});

app.post('/aluno', (req, res) =>{
  const novoAluno = req.body;
  alunos.push(novoAluno); 
  res.json(novoAluno);
});

app.post('/alterar_aluno', (req, res) => {
    const { prontuario, nome, prontuarioNovo, curso } = req.body;
    const aluno = alunos.findIndex(a => a.prontuario === prontuario);

    if (aluno !== -1) { 
        alunos[aluno].nome = nome;
        alunos[aluno].prontuario = prontuarioNovo;
        alunos[aluno].curso = curso;
        res.json(alunos);
    }   else {
        res.status(404).json({ error: 'Aluno não encontrado' });
    }           
});

app.post('/deletar_aluno', (req, res) => {
    const { prontuario } = req.body;
    const alunoIndex = alunos.findIndex(a => a.prontuario === prontuario);

    if (alunoIndex !== -1) { 
        alunos.splice(alunoIndex, 1); 
        res.json(alunos);
    }   else {
        res.status(404).json({ error: 'Aluno não encontrado' });
    }           
});

app.get('/alunos/curso', (req, res) => {
  const nomeCurso = req.query.curso;
  const alunosDoCurso = alunos.filter(a => a.curso.toLowerCase() === nomeCurso.toLowerCase());
  res.json(alunosDoCurso);
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});





