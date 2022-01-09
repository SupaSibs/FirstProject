let createError = require('http-errors'),
 express = require('express'),
 path = require('path'),
 cookieParser = require('cookie-parser'),
 logger = require('morgan'),
 connect = require("connect"),
 indexRouter = require('./routes/index'),
 usersRouter = require('./routes/users'),
 bodyParser = require("body-parser"),
 cors=require('cors')
 app = express(),
 login = require("routes/login"),
 router = express.Router();
//bodyparse
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use((req, res, next) => {
cookieParser();
next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch12 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
router.post("/login", resParser)
//activate cookie parser
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//make res accessible for cookie management
resParser = (req, res, next) => {
globalThis.req = req;
globalThis.res = res;
}
//manage cookies for logging in
exports.loginCookie = (token, account) => {
res.cookie("Client Login:" + account, token)
}
module.exports = app;
