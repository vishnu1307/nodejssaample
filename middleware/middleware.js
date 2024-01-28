const User = require("../model/user");

module.exports = async function setCurrentUser(req, res, next) {
  const token = req.header("authorization");
    console.log(token)
      const users = await User.findOne({token: token});
    if(!users){
    //   throw new Error('Unathuorized')
    res.send(401, "Unauthorized");
    }
    // next()
  };
