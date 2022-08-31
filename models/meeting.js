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
    contact: String,
    event: String,
    date:String,
    location: String,
    notes: {type: noteSchema},
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Meeting', meetingSchema)
