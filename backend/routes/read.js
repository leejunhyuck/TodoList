var express = require('express');
var router = express.Router();
var models = require("../models")


router.get('/', function(req, res, next) {
    
    
    models.User.findAll().then(result=>{

       

        res.render("read",{

            posts:result
        })
    })


  });
  
  module.exports = router;
  