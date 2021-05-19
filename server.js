const express = require("express");
const app = express();
const routes = require('./routes')

app.use(express.static(__dirname+"/public"));

app.set("view engine","ejs")

app.use('/',routes)

app.listen(80, (req,res) =>{
    console.log('Listening on port 3000');
})