const express = require("express");
const {Login}  = require("../controller/logincontroller");
// const ApiRateLimiter = require("../middleware/attempts");
// const 

const router = express.Router();
router.post("/", Login);
module.exports = router;