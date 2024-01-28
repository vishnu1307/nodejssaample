const user = require("../model/user")
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken')


exports.Login = async (req, res) => {
    console.log("Working")

    const loginUser = await user.findOne({email: req.body.email})
    if(!loginUser){
        return res.status(401).json({ message: 'Not Authorized User' });
    }
    console.log(loginUser)
    let compare = await bcrypt.compare(req.body.password, loginUser.password);
    console.log(compare)
    if(!compare){
        return res.status(401).json({ message: 'Not Authorized User' });
    }
    let authtoken = await JWT.sign({ _id: loginUser.id }, 'demo');
    console.log(loginUser._id)
    await user.findByIdAndUpdate(loginUser._id,{token: authtoken})
    return res.json({...loginUser, token : authtoken})
  }