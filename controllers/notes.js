const Meeting = require('../models/meeting')

function create(req, res) {
  Meeting.findById(req.params.id, function (err, meeting) {
    console.log(req.body)
    meeting.notes.push(req.body)
    meeting.save(function (err) {
      res.redirect(`/meetings/${meeting._id}/notes`)
    })
  })
}

module.exports = {
  create,
}
