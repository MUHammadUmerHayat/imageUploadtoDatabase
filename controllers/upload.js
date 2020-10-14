
//init
const express = require('express');
const router = express.Router();
const path = require('path');
var fs = require('fs')
const bodyParser = require('body-parser');
const Upload = require('./../models/upload');
var multer = require('multer');


//router.set('view engine','ejs');
//router.set(express.static(path.join(__dirname,'public')));

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended : true}));


var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'public/images') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.imagefile + '-' + Date.now()) 
    } 
}); 
  
var upload = multer({ storage: storage }); 


//routes
//imageupload
router.post('/imageupload', upload.single('imagefile'), (req, res, next) => { 
  
    var obj = { 
        imagefile: { 
            data: fs.readFileSync(path.join(__dirname + '/../public/images/' + req.file.filename)), 
            contentType: 'image/png'
        } 
    } 
    Upload.create(obj, (err, item) => { 
        if (err) { 
            return res.status(500).json({
                success : false,
                message:'Image upload fail',
                data : err
            }) 
        } 
        else { 
            return res.status(200).json({
                success : true,
                message:'Image upload success'
                
            })  
        } 
    }); 
}); 

//show image
router.get('/show', (req, res) => { 
    Upload.find({}, (err, items) => { 
        if (err) { 
            return res.status(500).json({
                success : false,
                message : 'image show fail',
                data:err
            })
        } 
        else { 
            res.render('show', { items: items }); 
        } 
    }); 
}); 

//module exports

module.exports = router