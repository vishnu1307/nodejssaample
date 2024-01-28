const express = require('express');
const User = require("../model/user");
const bcrypt = require('bcryptjs');

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  // const { name, email, age, contact, password } = req.body;

  try {
    let salt = await bcrypt.genSalt(10);
    // console.log(password)
    req.body.password = await bcrypt.hash(req.body.password, salt);
    console.log(req.body.password)
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age, contact } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, email, age, contact }, { new: true });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router ;
