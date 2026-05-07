
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');

const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env';
dotenv.config({ path: envFile });

require('dotenv-safe').config({
 allowEmptyValues: false, // ou true, selon votre cas
 example: '.env.example'
});

var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
