import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {createItem} from '../../actions/todoAction'
import {Button,FormControl,ListGroup,Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoCreate extends Component{

    constructor(){
        super()

       
        this.state ={
            title:null,
            content:null,
            deadline:null,
            priority:1,
            message:null
           

        }

    }

    handleTitleChange(e) {

        let value = e.target.value
        console.log(value)
        this.setState({ title: value })
        
    }

    handleContent(e) {
        let value = e.target.value
        this.setState({ content: value })
    }

    handlePriorityChange(e) {
        let value = e.target.value
        this.setState({ priority: String(value) })
    }

    handleDateChange= date => {
        console.log(date)
        this.setState({ deadline: date})
    }

    AddData = ()=>{




        let item ={
            title:this.state.title,
            content:this.state.content,
            deadline:this.state.deadline,
            priority:this.state.priority

        }


        //예외처리 해 주고
        if(this.state.title !== null && this.state.title !== ""){
        axios.post(
            'http://localhost:5000/todo', item
          ).then(res => {
              this.props.create(res.data)
              
              console.log(res)
          })

          this.setState({
            title:null,
            content:null,
            deadline:null,
            priority:1,
            message:null
            

        })
    
        }
        else {

            this.setState({message:"제목을 입력하여주세요"})
        }
    }


    render(){


        let PRIORITY_COLOR = ["", "info", "success", "secondary"]


        return(
           
            <div>
                <ListGroup.Item className="mb-3 col-7">
              
                 <FormControl
                     placeholder="제목을 입력하세요"
                    aria-label="Username"
                    aria-describedby="basic-addon1" onChange={(e)=>this.handleTitleChange(e)} value={this.state.title||''}/>
                
            

              
                 <FormControl
                     placeholder="내용을 입력하세요"
                    aria-label="Username"
                    aria-describedby="basic-addon1" onChange={(e)=>this.handleContent(e)} value={this.state.content||''}/>
                 

                
                
               
            
                <Badge variant={PRIORITY_COLOR[parseInt(this.state.priority)]}>{parseInt(this.state.priority)}순위 </Badge>
                <div >우선순위
                <FormControl as="select" onChange={(e)=>this.handlePriorityChange(e)} value={this.state.priority || 1}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                 </FormControl></div>
                
                 <div>마감일<br></br>
                <DatePicker className="form-control"  onChange={this.handleDateChange} selected={this.state.deadline}/> </div>
                
                <Button onClick={this.AddData}>등록</Button>
                <p><Badge variant="danger">{this.state.message}</Badge></p>
                </ListGroup.Item>
            </div>

            


        )
    }


}
const mapDispatchToProps = (dispatch) => {
    return {
        create: (data) => dispatch(createItem(data))
        
    }
}

export default connect(undefined,mapDispatchToProps)(TodoCreate)