const express = require("express");
// const {Login}  = require("../controller/logincontroller");
const {signup} = require('../controller/signupcontroller')
// const ApiRateLimiter = require("../middleware/attempts");
// const 

const router = express.Router();
router.post("/", signup);
module.exports = router;