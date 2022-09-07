const Meeting = require('../models/meeting')

function index(req, res) {
  Meeting.find({}, function (err, meetings) {
    res.render('meetings/index', { title: 'MEETERS', meetings })
  })
}

function newMeeting(req, res) {
  res.render('meetings/new', { title: 'MEETERS' })
}

function create(req, res) {
  const meeting = new Meeting(req.body)
  meeting.save(function (err) {
    if (err) {
      res.redirect('/meetings/new')
    }
    res.redirect('/meetings')
  })
}
function deleteMeeting(req, res) {
  console.log('hello')
  Meeting.findByIdAndDelete(req.params.id, function (err) {
    if (err) console.log('Error in deleteMeeting function!')
    res.redirect('/meetings')
  })
}

function show(req, res) {
  Meeting.findById(req.params.id, function (err, meeting) {
    console.log(meeting.notes)
    res.render('meetings/show', { meeting })
  })
}

function edit(req, res) {
  Meeting.findById(req.params.id, function (err, meeting) {
    res.render('meetings/edit', {
      meeting,
    })
  })
}
function update(req, res) {
  Meeting.findByIdAndUpdate(req.params.id, req.body, function (err, meeting) {
    if (err) {
      console.log(err)
      res.render('meetings/edit', {
        meeting,
      })
    }
    res.redirect('/meetings')
  })
}

module.exports = {
  index,
  new: newMeeting,
  create,
  show,
  delete: deleteMeeting,
  edit,
  update,
}
