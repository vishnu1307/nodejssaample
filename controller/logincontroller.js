const user = require("../model/user")
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken')


const auth = {};

auth.Login = async (req, res) => {
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

  auth.Logout = async (req, res) => {
    try{
        const loginUser = await user.findOne({email: req.body.email})
        if(!loginUser){
            return res.status(401).json({ message: 'Not Authorized User' });
        }
    
        await user.findByIdAndUpdate(loginUser._id,{token: null})
        return res.status(200).send('Logout successfully.');
    } catch(err){
        return res.status(401).json({ message:err });
    }

  }
  module.exports = auth