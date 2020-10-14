
//init code
const mongoose = require('mongoose')

//employee Schema
const imageSchema = mongoose.Schema({
    imagefile:{
        data : Buffer,
        contentType:String
       
    }
})

//employee Model

mongoose.model('imgs',imageSchema);

//module export

module.exports = mongoose.model('imgs')