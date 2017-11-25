var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');


//Express routes import
var execs = require('./routes/execs');
var index = require('./routes/index');
var events = require('./routes/events');
var sponsors = require('./routes/sponsors');
var fb = require('./routes/facebook');
var email = require('./routes/email');



var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

//use dist as path to point express to angular project
app.use(express.static(path.join(__dirname, 'dist')));

//add icon
app.use(favicon(__dirname + '/favicon.ico'));

app.use('/', index);
app.use('/execs', execs);
app.use('/events', events);
app.use('/sponsors', sponsors);
app.use('/facebook', fb);
app.use('/email', email);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

Promise = global.Promise;

module.exports = app;

