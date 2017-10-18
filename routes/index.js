const express = require('express');
const router = express.Router();
const multer = require('multer');
let upload = multer({dest: 'uploads/'})

router.use(express.static('public'));


router.post ('/upload', upload.single('file'), (req,res)=>{
    return res.json({size: req.file});
});

module.exports = router;