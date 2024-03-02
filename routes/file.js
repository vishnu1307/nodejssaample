const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({dest:'images/'});


router.post("/", upload.single('file'), async(req, res) =>{
    console.log(req.file)
    // return {}
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
        }
        
        // You can perform additional operations with the uploaded image here.
        res.status(200).send('Image uploaded and saved successfully.');
});
module.exports = router;