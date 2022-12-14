var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var createError = require('http-errors')
var session = require('express-session')
var passport = require('passport')
var methodOverride = require('method-override')

// load the env vars
require('dotenv').config()

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var meetingsRouter = require('./routes/meetings')
var notesRouter = require('./routes/notes')

var app = express()

// connect to the MongoDB with mongoose

require('./config/database')
require('./config/passport')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Authentication
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.end('Logged in!')
  }
)

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/meetings', meetingsRouter)
app.use('/', notesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
