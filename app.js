var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
const bodyParser = require('body-parser');
const ejs = require('ejs')
var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/homepage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({secret:"mysecret",resave:false,saveUninitialized:false}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/homepage',homeRouter);

app.use(bodyParser.json())
app.listen(3011);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
})
const firebase = require("firebase/app");

require("firebase/auth");
var firebaseConfig = {
  apiKey: "AIzaSyATqm5NCd7blhyT0ohlZMsVOD3_7iPpROs",
  authDomain: "shop-online-c370a.firebaseapp.com",
  databaseURL: "https://shop-online-c370a.firebaseio.com",
  projectId: "shop-online-c370a",
  storageBucket: "shop-online-c370a.appspot.com",
  messagingSenderId: "701537478348",
  appId: "1:701537478348:web:4b2c8baeb58b939a994469",
  measurementId: "G-6VT51428VV"
};
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
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