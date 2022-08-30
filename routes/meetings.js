var express = require('express')
var router = express.Router()
var meetingsCtrl = require('../controllers/meetings')

router.get('/', meetingsCtrl.index)
router.get('/new', meetingsCtrl.new)
router.get('/:id', meetingsCtrl.show)
router.post('/', meetingsCtrl.create)
router.delete('/:id', meetingsCtrl.delete)
router.get('/:id/edit', meetingsCtrl.edit)
router.put('/:id', meetingsCtrl.update)

module.exports = router
