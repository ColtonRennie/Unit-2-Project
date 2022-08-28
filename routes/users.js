var express = require('express')
var router = express.Router()
var usersCtrl = require('../controllers/users')

router.get('/users', usersCtrl.index)

router.get('/', function (req, res, next) {
  res.redirect('/meetings')
})

module.exports = router
