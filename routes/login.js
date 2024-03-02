const express = require("express");
const {Login, Logout}  = require("../controller/logincontroller");
// const ApiRateLimiter = require("../middleware/attempts");
// const 

const router = express.Router();
router.post("/login", Login);
router.post("/logout", Logout);

module.exports = router;