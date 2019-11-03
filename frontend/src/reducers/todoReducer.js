
const initState = {

    todo:[],
    id:0,
    loaded:"false"


}


 function todoReducer(state=initState,action){

    console.log("............todoReducer")

    let newState = state

    const {type} = action
    
    

    if(type === "DISPLAY"){

       
        
        const item = action.todo.find((obj) => obj.id == action.id)

        console.log(Array.isArray(item))
        console.log("-----------!!!"+item)
        newState = {
            todo:action.todo,
            id:action.id,
            loaded:"true",
            item:item
          
        }}
        

    else if(type === "GET_LIST"){
        
        newState = {
            todo:action.todo,
            loaded:"true"
        }
    }
     else if(type === "DELETE"){
        
        newState = {
            todo:action.todo,
            loaded:"ture"
            
        }
    }

    else if(type === "UPDATE"){
        
        newState = {
            todo:action.todo,
            loaded:"ture"
            
        }
    }

    else if(type === "CREATE"){
        newState = {
            todo:action.todo,
            loaded:"true"
        }}

    console.log("newState : "+newState)
    return newState
    





}
export default todoReducer