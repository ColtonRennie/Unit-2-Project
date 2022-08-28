const User = require('../models/meeting')

module.exports = {
  index,
  addFact,
  delFact,
}

function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  let sortKey = req.query.sort || 'name'
  User.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, users) {
      if (err) return next(err)
      res.render('users/index', {
        users,
        user: req.user,
        name: req.query.name,
        sortKey,
      })
    })
}

function addFact() {}
function delFact() {}
