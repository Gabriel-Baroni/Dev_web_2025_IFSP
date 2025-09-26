const express = require('express');
const app = express();
const alunoRoutes = require('./routes/alunoRoutes');
const turmaRoutes = require('./routes/turmaRoutes');
const initialRoute = require('./routes/initialRoute');
const path = require('path');
const methodOverride = require('method-override');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname, 'view')));
app.use('/', initialRoute);
app.use('/aluno', alunoRoutes);
app.use('/turma', turmaRoutes);


module.exports = app;