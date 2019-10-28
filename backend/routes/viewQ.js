var express = require('express');
var router = express.Router();
var models = require("../models")


router.get('/', function(req, res, next) {
    console.log("hello")
    res.render('qq');
  });
  
  
  router.post('/', function(req, res, next) {
  
    let body = req.body
    


    models.User.create({
      userId:body.id,
      name:body.pw,
      engName:"abc",
      createdAt:new Date(),
      updatedAt:new Date()
    })
    .then(result =>{
      console.log("데이터 추가 완료")
      console.log(result)
      console.log(res)
      res.redirect("/user")


    })
    .catch(err =>{
      console.log("데이터 추가 실패")



    })


  
  });
  
  
  module.exports = router;