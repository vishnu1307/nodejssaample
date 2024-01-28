const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  contact: {
    type: Number
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters long'],
    maxlength: [128, 'Password must be less than 128 characters long'],
    // validate: {
    //   validator: function(value) {
    //     // Require at least one uppercase letter, one lowercase letter, one special character and one number
    //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/])[a-zA-Z\d!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/]{8,}$/;
    //     return regex.test(value);
    //   },
    //   message: 'Password must contain at least one uppercase letter, one lowercase letter, one special character and one number'
    // }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;