var express = require('express')
var router = express.Router()
var meetingsCtrl = require('../controllers/meetings')

router.get('/', meetingsCtrl.index)
router.get('/new', meetingsCtrl.new)
router.get('/:id/notes', meetingsCtrl.show)
router.post('/', meetingsCtrl.create)
router.delete('/:id', meetingsCtrl.delete)

module.exports = router
