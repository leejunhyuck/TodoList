var models = require("../models")



module.exports = {


    Insert:async function(req){
           
        const body=req.body;

        try{
       await models.Todo.create({
            
            title:body.title,
            content:body.content,
            deadline:body.deadline,
            priority:body.priority


        })
    
        return true;
    }catch(e){

        console.log("insert error")
        throw "insert error"
    }


       
    },


getList: function(){

   

    try{

        let list = models.Todo.findAll()

        
        return list


    }catch(e){

        console.log("get Error")
        throw console.log("get Error")
    }


},

delete:async function(req){

    try{
    await models.Todo.destroy({

        where:{id:req.query.id}
    })
    }catch(e){

        console.log("delete Error")
        throw console.log("delete Error")
    }





},

modify:async function(req){

    try{

        
        if(req.query.complete){
        console.log("ture : "+req.query.complete)

        let value = req.query.complete =="true" ?1:0 
            
        console.log(value)
        await models.Todo.update({
           
            complete:value
            
        },{where:{id:req.query.id}})
    }
        else {
            console.log("false : "+req.query.complete)


            const body= req.body
            console.log("-----"+body.title)

            await models.Todo.update({
                   
            title:body.title,
            content:body.content,
            deadline:body.deadline,
            priority:body.priority
                
            },{where:{id:req.query.id}})
        }

            

            
        
    }catch(e){


    }
}


}


