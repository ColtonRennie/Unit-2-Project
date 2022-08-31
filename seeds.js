require('./config/database')
const Meeting = require('./models/meeting')
// const Note = require('./models/meeting')
const data = require('./data')

Promise.resolve()
  .then(function () {
    console.log('HERE')

    return Meeting.find({})
  })
  .then((result) => {
    console.log(result)
  })
