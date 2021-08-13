const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('malac', ['users']);

router.get('/', (req,res) =>{
    res.render("index");
});
router.get('/kontakt', (req,res) =>{
    res.render("home/kontakt");
});
router.get('/login', (req,res) =>{
    db.users.find((err,data) =>{
    res.render("home/login", {data:data});
    })
});
router.post('/login',(req,res) =>{
    db.users.insert({
        name : req.body.senderName,
        mail : req.body.senderEmail,
        phone : req.body.senderPhone,
        call:true
    },(err,data) =>{
        res.redirect('/kontakt')
    });
});
router.get('/delete/:id', (req,res) =>{
    let id = req.params.id;
    db.users.remove({"_id":db.ObjectId(id)},(err,data) =>{
res.redirect('/login');
    });
});
router.get('/o_nama', (req,res) =>{
    res.render("home/o_nama");
});
router.get('/lokacije', (req,res) =>{
    res.render("home/lokacije");
});
router.get('/abakus', (req,res) =>{
    res.render("home/abakus");
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
router.get('/superum', (req,res) =>{
    res.render("home/superum");
});
router.get('/numicon', (req,res) =>{
    res.render("home/numicon");
});



router.use('/',require('./games'))

module.exports = router;