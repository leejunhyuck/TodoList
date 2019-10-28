var express = require('express');
var router = express.Router();
var models = require("../models")
const todoservice = require('../service/todoService') 


router.get('/',  function(req, res, next) {
        try{
        let list
        todoservice.getList().then((result) => {
            list = result;
           
            return res.status(200).json(list)
        }
        
        )
        
    }
    catch(e){

        return res.status(500).json(e)
    }

      

      

})



router.post('/', function(req, res, next) {

    try{
        todoservice.Insert(req).then(()=>{
            let list
            todoservice.getList().then((result) => {
                list = result;
               
                return res.status(200).json(list)
            })

        })

       
   
       
        
      
      
    }
    catch(e){

        return res.status(400)
    }





})

router.put('/', function(req, res, next) {

    try{

        todoservice.modify(req).then(() =>{

            let list
            todoservice.getList().then((result) => {
                list = result;
               
                return res.status(200).json(list)
            })
        })
       
        
    
    }catch(e){


    }
   


  



})

router.delete('/', function(req, res, next) {

    try{
    todoservice.delete(req).then(() =>{

        let list
        todoservice.getList().then((result) => {
            list = result;
           
            return res.status(200).json(list)
        })
    })

   
    }
    catch(e){
    
    return res.status(400)

    }
 
 
 
 })
 



module.exports = router;

