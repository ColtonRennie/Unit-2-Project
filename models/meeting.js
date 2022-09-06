const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  text: String,
})

const meetingSchema = new mongoose.Schema(
  {
    contact: String,
    event: String,
    date: String,
    location: String,
    notes: [noteSchema],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Meeting', meetingSchema)
