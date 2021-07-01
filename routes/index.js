const express = require('express');
const router = express.Router();


router.use('/', require("./home"));
router.get('/ads.txt', (req,res) =>{
    res.render("ads.txt");
});
module.exports = router;