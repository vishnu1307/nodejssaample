const express = require('express')
const router = express.Router()

router.use('/api/v1/login', require('./login'))
router.use('/api/v1/signup', require('./signup'))
router.use('/api/v1/user', require('./user'))

module.exports = router