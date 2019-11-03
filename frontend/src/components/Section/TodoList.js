import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getData, viewItem} from '../../actions/todoAction'
import {ListGroup,Badge} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'




class TodoList extends Component{

    constructor(props){
        super(props)

       
        this.state ={
           complete:false,
           todo:[]
            
        }
       

    }

    

    componentWillMount(){
        const {getList} =this.props
        axios.get("http://localhost:5000/todo").then(res =>{

            getList(res.data)
            
        })


        getList()
    }
    doClick = (e) => {
        
        let key = e.target.id
        const {display} = this.props
        console.log(key)
        display(this.props.todo,key)
        
    }

    change = (id) =>{
        console.log(id)

        const target = this.props.todo.filter(obj => obj.id === id)[0]
        const index = this.props.todo.indexOf(target)

        console.log(index)

        axios.put("http://localhost:5000/todo?id="+id+"&complete="+!target.complete).then(res =>{

           
            console.log(res)
        })


        const tempArr = this.state.todo

        tempArr[index] = Object.assign(target, {complete: !target.complete})

        this.setState({todo:tempArr})

    }

    viewChange =()=>{

        this.setState({complete:!this.state.complete})
    }



    render(){
        

        
        let PRIORITY_COLOR = ["", "info", "success", "secondary"]
        
        const listComplete = this.props.todo.map(({id,title,complete,priority}) =>{

            const style = complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid', opacity:'0.2'} : {}
            
            console.log(complete)
            return (
             
            <div key={id}>
                
                {complete ==1 ? <ListGroup.Item  id={id} style={style} onClick={(e) => {this.doClick(e)}}> 
           
            
           <Form.Check
         custom
         inline
         label=""
         type="checkbox"
         id={`custom-inline-"checkbox"-${id}`}
         checked = {complete ? 'checked':''} onChange={() => {this.change(id)}}
       />
 
         
           {title}
             
     </ListGroup.Item>:<div></div> }
            
                
    </div>
            )
            
            })



        const list = this.props.todo.map(({id,title,complete,priority}) =>{

            const style = complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}
            let color= PRIORITY_COLOR[parseInt(priority)]
            
            return (
                
            <div key={id}>
            {complete ==0 ? <ListGroup.Item  id={id} style={style} onClick={(e) => {this.doClick(e)}}> 

            
          <Form.Check
        custom
        inline
        label=""
        type="checkbox"
        id={`custom-inline-"checkbox"-${id}`}
        checked = {complete ? 'checked':''} onChange={() => {this.change(id)}}
      />

        <Badge variant={color}>{parseInt(priority)}순위 </Badge> 
        &nbsp;&nbsp;&nbsp;{title}
            
    </ListGroup.Item>:<div></div>}
                
    </div>
            )
            
            })
        
        
        return(
        <div>
            <Form.Check
        custom
        inline
        label="완료된 할 일 보기"
        type="checkbox"
        id={`custom-inline-"checkbox"-0`}
        onChange={() => {this.viewChange()}}
        
      />
        <p></p>
        
           {list}
           {this.state.complete ? <div>{listComplete}</div>:<div></div>}   
           
        
          
            </div>

        )
    }


}

TodoList.defaultProps = {
    todo: []
   
  }

const mapDispatchToProps = (dispatch) => {

    

    return {
        getList: (data) => dispatch(getData(data)),
        display: (data,id) => dispatch(viewItem(data,id))
    }
}

const mapStateToProps = (state) => {
    console.log("TodoList mapStateToProps..........", state)
    const todo = state.todoReducer.todo
    

    return {todo:todo}
}





export default connect(mapStateToProps,mapDispatchToProps)(TodoList)