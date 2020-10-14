
//init code
const mongoose = require('mongoose')
const assert = require('assert')
const db_url = process.env.DB_URL;

//connection code

mongoose.connect(db_url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    },
    function(error,link)
    {
        assert.equal(error,null,"Database connection failed");

        console.log(link)
        console.log("Database connection Success");
    })