const express = require("express");
const app = express();
const routes = require('./routes');
const mongojs = require('mongojs');
const db = mongojs('malac', ['users']);
app.use(express.static(__dirname+"/public"));

app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}));
app.use('/',routes)

app.listen(8080, (req,res) =>{
    console.log('Listening on port 3000');
})