var express = require('express')
var router = express.Router()
var meetingsCtrl = require('../controllers/meetings')

router.get('/', meetingsCtrl.index)

module.exports = router
