const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

//--------CONGIGURACION-------
app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, '../dist/api-client')));
app.use(express.static(path.join(__dirname, '../dist/api-admin')));
app.use(express.static(path.join(__dirname, '../dist/api-not-found')));

//MIDLEGARES
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//ROUTES

app.use('/api', require('./routes/render'));
//app.use('/tsa-mean-api', require('./routes/interaccion'));
app.use('/', function(req,res){
    res.redirect('/api');
});

module.exports = app;