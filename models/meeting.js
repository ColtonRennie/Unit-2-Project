const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
)

const meetingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    avatar: String,
    notes: [noteSchema],
    googleId: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Meeting', meetingSchema)
