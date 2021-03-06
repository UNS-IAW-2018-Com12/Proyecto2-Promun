var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
require('./app_server/models/db');

var app = express();

// Configuring view engine
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/app_server/views/partials');
hbs.registerPartials(__dirname + '/app_server/views/partials/index');
hbs.registerPartials(__dirname + '/app_server/views/partials/userpage');
hbs.registerPartials(__dirname + '/app_server/views/partials/login');
var helpers = require('handlebars-helpers')();
hbs.registerHelper(helpers);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static((__dirname, 'public')));

// Configuring Sessions and Cookies
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
app.use(cookieParser());
app.use(expressSession({secret: "Es un secreto"}));

// Configuring Passport
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

// Confuring Connecting-flash
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./app_server/passport/init');
initPassport(passport);

// Configure routers
var indexRouter = require('./app_server/routes/index')(passport);
var usersRouter = require('./app_server/routes/users');
var logoutRouter = require('./app_server/routes/logout');
var apiPromunRouter = require('./app_server/routes/promun-api');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/logout', logoutRouter);
app.use('/api', apiPromunRouter);

app.use(function (req, res, next) {
  res.status(404).send("La página solicitada no existe.")
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Configure error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
