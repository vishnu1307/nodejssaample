const Profile = require("../model/profile");
const bcrypt = require('bcryptjs');

const profiles = {}

profiles.createprofile = async(req, res) => {
      // const { name, email, age, contact, password } = req.body;
    
      try {
        // let salt = await bcrypt.genSalt(10);
        // console.log(password)
        // req.body.password = await bcrypt.hash(req.body.password, salt);
        // console.log(req.body.password)
        const profile = new Profile(req.body);
        await profile.save();
        res.send(profile);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
};

profiles.getprofile = async (req, res) => {
      try {
        const profiles = await profile.find({});
        res.send(profiles);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    };

profiles.updateprofile = async (req, res) => {
      const { id } = req.params;
      const { name, email, age, contact } = req.body;
    
      try {
        const profile = await profile.findByIdAndUpdate(id, { name, email, age, contact }, { new: true });
        res.send(profile);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    };

 profiles.deleteprofile =    async (req, res) => {
      const { id } = req.params;
    
      try {
        const profile = await profile.findByIdAndDelete(id);
        res.send(profile);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    };
module.exports = profiles