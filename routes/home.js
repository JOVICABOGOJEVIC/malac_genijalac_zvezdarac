const express = require('express');
const router = express.Router();


router.get('/', (req,res) =>{
    res.render("index");
});
router.get('/kontakt', (req,res) =>{
    res.render("home/kontakt");
});
router.get('/o_nama', (req,res) =>{
    res.render("home/o_nama");
});
router.get('/lokacije', (req,res) =>{
    res.render("home/lokacije");
});
router.get('/priprema', (req,res) =>{
    res.render("home/priprema");
});
router.get('/upis', (req,res) =>{
    res.render("home/upis");
});
router.get('/igrica', (req,res) =>{
    res.render("home/igrica");
});
router.get('/mentalna_aritmetika', (req,res) =>{
    res.render("home/mentalna_aritmetika");
});

router.use('/',require('./games'))

module.exports = router;