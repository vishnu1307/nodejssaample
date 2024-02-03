const User = require("../model/user");

const middleware = {};


middleware.authentication = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ meta: { status: 406, message: 'Auth Token Missing!' }, error: {} })
    }
    var token = req.headers.authorization.split('Bearer ')[1]
    if (!token) {
      return res.status(401).json({ meta: { status: 406, message: 'Auth Token Missing!' }, error: {} })
    }
    // const data = await helpers.verifyToken(token)
    // if (data && data.message === 'jwt expired') {
    //   return res.status(401).json({ meta: { status: 401, message: 'Token Expired!' }, error: {} })
    // }
    // if (!data) {
    //   return res.status(401).json({ meta: { status: 406, message: 'Invalid Token!' }, error: err })
    // }
    const token = req.header("authorization");
    const users = await User.findOne({token: token});
    if(!users){
      return res.status(401).json({ meta: { status: 406, message: 'Invalid Token!' }, error: {} })
    }
    req.user = users[0];
    return next()
  } catch (e) {
    return res.status(401).json({ meta: { status: 406, message: 'Something Went Wrong!' }, error: e })
  }

}

// module.exports = async function setCurrentUser(req, res, next) {
//   const token = req.header("authorization");
//     console.log(token)
//       const users = await User.findOne({token: token});
//     if(!users){
//     //   throw new Error('Unathuorized')
//     res.send(401, "Unauthorized");
//     }
//     // next()
//   };


