import React,{Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateItem, deleteItem} from '../../actions/todoAction'
import {Button,InputGroup,FormControl} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Moment from 'react-moment';
import moment, { Moment as MomentTypes, invalid } from 'moment';

class TodoDetail extends Component {

    constructor(props){
        super(props)
      


        this.state ={
            title:null,
            content:null,
            deadline:null,
            priority:null,
            done:null
        }

    }
    
  

    handleTitleChange(e) {

        this.setState({ title: e.target.value });
    }

    handleContent(e) {
       
        this.setState({ content: e.target.value });
    }

    handlePriorityChange(e) {
        
        this.setState({ priority:  e.target.value });
    }

    handleDateChange= date => {
        console.log(date)
        this.setState({ deadline: date, done:date})
    }


     deleteData = (id) =>{

        if(id !== 0){

        axios.delete("http://localhost:5000/todo?id="+id).then(res =>{

            this.props.delete(res.data)
            console.log("-------------------"+res.data)
        })

        
        }
    }

     updateData = (id) => {
        


        
        axios.put("http://localhost:5000/todo?id="+id,this.state).then(res =>{

            this.props.update(res.data)
            console.log(res)
        })

        

    }
    
   
    render(){

       
        const target = this.props.todo.filter((obj) => obj.id == this.props.id)
        
        
       const list = target.map(({title,id,content,priority,createdAt,deadline})=>{

        
        let done = deadline !== null ?moment(deadline).format("DD/MM/YYYY") :""
   
        
           return (<div key={this.props.id}>
               
               <InputGroup className="mb-3 col-7">
                
                 <FormControl 
                     value={title}
                    aria-label="Username"
                    aria-describedby="basic-addon1" 
                    onChange={e=>{this.handleTitleChange(e)}}/>
                 </InputGroup>
                
                 <div className="mb-3 col-7">작성일 : <Moment format="YYYY/MM/DD">{createdAt}</Moment></div>
                 <div className="mb-3 col-7">마감일<DatePicker  className="form-control" onChange={this.handleDateChange} value={this.state.done===null?done:this.state.deadline}
                 selected={this.state.deadline}/></div>
                 <InputGroup className="mb-3 col-7">
                 <FormControl as="textarea" aria-label="With textarea" placeholder="상세 내용을 입력하세요."
                    value={content} onChange={e=>{this.handleContent(e)}}/>
                </InputGroup>

                
           
           </div> )
   
       })
       
       


    return(

        <div><h4>상세내용</h4>
        {list}
        <div className="mb-3 col-7" >
        <Button  variant="warning" onClick={()=> this.updateData(this.props.id)}>수정</Button>
        <Button  variant="danger" onClick={() => this.deleteData(this.props.id)}>삭제</Button>
        
        </div>
       </div>



    )

}
} 
TodoDetail.defaultProps = {
    todo: []
   
  }

const mapStateToProps = (state) => {
    console.log("Display mapStateToProps..........", state)
    const todo = state.todoReducer.todo
    const id = state.todoReducer.id

    return {todo:todo,id:id}
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (data) => dispatch(deleteItem(data)),
        update: (data) => dispatch(updateItem(data))
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(TodoDetail)


