const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'view')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;