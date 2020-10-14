
//init
require('dotenv').config();
const express = require('express');
const path = require('path');
const uploadRouter = require('./controllers/upload');
var fs = require('fs')
const database = require('./database');
const port = process.env.PORT

const app = express();

app.set('view engine','ejs');
//app.set(express.static(path.join(__dirname,'public')));

app.use('/upload',uploadRouter)

//routes
app.get('/',(req,res)=>
{
    res.render('upload')
})


//server
app.listen(port,()=>console.log('server start : ',port));