var express = require('express')
var router = express.Router()

const { authenticate } = require('passport')
const passport = require('passport')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome to my Meeting Application' })
})

//google oauth login route
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

// google oauth callback
router.get(
  '/unit2project',
  passport.authenticate('google', {
    successRedirect: '/meetings',
    failureRedirect: '/',
  })
)

//google oauth logout
router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

module.exports = router
