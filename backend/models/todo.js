'use strict';


module.exports = function(sequelize, DataTypes){
  const Todo = sequelize.define('Todo', {
    
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    deadline: DataTypes.DATE,
    priority:DataTypes.STRING,
    
    
    complete:{
      
      type:DataTypes.INTEGER,
      defaultValue: sequelize.literal('0')
  }
  }, 
  {

    tableName: "todo"

  });
  

   
  
     
    

  return Todo;
}