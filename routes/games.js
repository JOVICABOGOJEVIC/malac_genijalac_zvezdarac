const express = require('express');
const router = express.Router();

router.get('/game1', (req,res) =>{
    res.render("games/game1");
});


module.exports = router;
