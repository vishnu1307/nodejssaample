const User = require("../model/user");
const bcrypt = require('bcryptjs');


exports.signup = async (req, res) => {
    try {
        if(!req.body.email && !req.body.password){
            return res.status(401).json({ message: 'Enter the email and passowrd' });
        }
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
}