var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var AeropuertoRouter = require('./routes/users');
var Mongo = require('./configs/database');
var app = express();


app.use('./Aeropuerto')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('./index', indexRouter);
app.use('./users', usersRouter);

module.exports = app;
