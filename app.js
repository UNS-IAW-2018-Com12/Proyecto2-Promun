var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app_server/models/db');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/app_server/views/partials');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
// TODO - Why Do we need this key ?
//app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./app_server/passport/init');
initPassport(passport);

var indexRouter = require('./app_server/routes/index')(passport);
var usersRouter = require('./app_server/routes/users');
var adminRouter = require('./app_server/routes/admin');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

app.use(function (req, res, next) {
  res.status(404).send("La página solicitada no existe.")
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
