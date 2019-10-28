import React,{Fragment} from 'react'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'
import TodoDetail from './TodoDetail'
import {Row,Container,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Section(){

    
    return(
        <Container>
            <h2>할일 목록</h2>
            <hr />
        <Row>
            
    <Col sm={8}><TodoList></TodoList>  
                <TodoCreate></TodoCreate> </Col>
    <Col sm={4}><TodoDetail></TodoDetail></Col>
  </Row>
  
 
  
        
        </Container>
    )


}