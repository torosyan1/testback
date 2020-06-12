const mongoose = require('mongoose');

const user = new mongoose.Schema({
  login: {
    type: String
  },
  pass: {
    type: String
  },
  data:{
    type: String
  }
});

const User = mongoose.model('user', user);
module.exports = User