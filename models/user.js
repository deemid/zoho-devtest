const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  useridentifier: {
    type: String,
    required: true,
    unique: true
  },
  accesstoken: {
    type: String,
    required: true,
    unique: true
  },
  refreshtoken: {
    type: String,
    required: true
  },
  expirytime: {
    type: Number,
  },
})

const User = mongoose.model('User', UserSchema)

module.exports = User