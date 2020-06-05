const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

//--------CONGIGURACION-------
app.set('port', process.env.PORT || 3000 || 3000);
app.use(express.static(path.join(__dirname, '../dist/api-client')));

//MIDLEGARES
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//ROUTES

app.use('/api', require('./routes/render'));

module.exports = app;