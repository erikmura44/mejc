'use strict'

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const session = require('express-session');
const passportVol = require('./passportVol')
const passportOrg = require('./passportOrg')

const index = require('./controller/index');
const volunteer = require('./controller/volunteer');
const organization = require('./controller/organization');
const events = require('./controller/event')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "this team rox",
  saveUninitialized: true,
  resave: false
}));

app.use(passportOrg.initialize());
app.use(passportOrg.session());

app.use(passportVol.initialize());
app.use(passportVol.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/volunteer', volunteer);
app.use('/organization', organization);
app.use('/event', events);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
