const mongoose = require('mongoose');
const validator = require('validator');

const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  contact: {
    type: Number
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;