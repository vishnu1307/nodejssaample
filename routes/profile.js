const express = require('express');
const {getprofile, createprofile, updateprofile, deleteprofile} = require("../controller/profilecontroller")

const router = express.Router();

router.get('/', getprofile)
router.post('/', createprofile)
router.put('/:id', updateprofile)
router.delete('/:id', deleteprofile)

module.exports = router;  