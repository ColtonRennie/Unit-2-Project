var express = require('express')
var router = express.Router()
var notesCtrl = require('../controllers/notes')

router.post('/meetings/:id/notes', notesCtrl.create)

module.exports = router
