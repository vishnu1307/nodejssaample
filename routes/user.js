const express = require('express');
const {getuser, createuser, updateuser, deleteuser} = require("../controller/usercontroller")

const router = express.Router();

router.get('/', getuser)
router.post('/', createuser)
router.put('/:id', updateuser)
router.delete('/:id', deleteuser)
module.exports = router;  