const Meeting = require('../models/meeting')

function create(req, res) {
  Meeting.findById(req.params.id, function (err, meeting) {
    meeting.notes.push(req.body)
    meeting.save(function (err) {
      res.redirect(`/meetings/${meeting._id}`)
    })
  })
}

module.exports = {
  create,
}
