import axios from 'axios'


export const getData = (data) => {
    return (dispatch) => {

           
            dispatch({type:'GET_LIST', todo:data,loaded:'ture'})
            
        
    }
}

export const viewItem = (data,id) => {
    return (dispatch) => {

        
            dispatch( {type:'DISPLAY', todo:data,id:id,loaded:'ture'})
            
        
    }
}

export const deleteItem = (data) => {
    return (dispatch) => {

        
            dispatch( {type:'DELETE',todo:data, loaded:'ture'})
            
            
    }
}
export const updateItem = (data) => {
    return (dispatch) => {

        
            dispatch( {type:'UPDATE',todo:data,loaded:'ture'})
            
            
    }
}

export const createItem = (data) =>{
    return (dispatch) => {

        
        dispatch( {type:'CREATE',todo:data,loaded:'ture'})
        
        
}

}
export default {getData,viewItem,deleteItem,updateItem,createItem}

