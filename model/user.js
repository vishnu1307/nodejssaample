const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  contact: {
    type: Number
  },
  token: String,

  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long'],
    maxlength: [128, 'Password must be less than 128 characters long'],
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;