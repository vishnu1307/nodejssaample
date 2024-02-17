const User = require("../model/user");
const bcrypt = require('bcryptjs');

const users = {}

users.createuser = async(req, res) => {
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
};

users.getuser = async (req, res) => {
      try {
        const users = await User.find({});
        res.send(users);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    };

users.updateuser = async (req, res) => {
      const { id } = req.params;
      const { name, email, age, contact } = req.body;
    
      try {
        const user = await User.findByIdAndUpdate(id, { name, email, age, contact }, { new: true });
        res.send(user);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    };

 users.deleteuser =    async (req, res) => {
      const { id } = req.params;
    
      try {
        const user = await User.findByIdAndDelete(id);
        res.send(user);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    };
module.exports = users