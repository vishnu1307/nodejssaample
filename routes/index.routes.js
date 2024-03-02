const express = require('express')
const router = express.Router()

router.use('/api/v1/login', require('./login'))
router.use('/api/v1/signup', require('./signup'))
router.use('/api/v1/user', require('./user'))
router.use('/api/v1/profile', require('./profile'))
router.use('/api/v1/file', require('./file'))


module.exports = router