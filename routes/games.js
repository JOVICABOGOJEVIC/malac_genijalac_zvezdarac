const express = require('express');
const router = express.Router();

router.get('/game1', (req,res) =>{
    res.render("games/game1");
});

router.get('/game3', (req,res) =>{
    res.render("games/game3");
});

router.get('/game4', (req,res) =>{
    res.render("games/game4");
});

router.get('/game5', (req,res) =>{
    res.render("games/game5");
});

module.exports = router;
