import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


let AddToDo = ({dispatch}) => {
    let input;  

    return (
        <Form onSubmit={e =>{
             e.preventDefault();
             if (!input.value.trim()){
                 return
             }
             dispatch(addToDo(input.value));
             input.vaue = '';
        }}>
            <Form.Group controlId="formBasicEmail">
                <InputGroup>
                <Form.Control type="text" placeholder="Enter something"
                    ref={node=>{ input = node;}}>
                </Form.Control>
                <InputGroup.Append>
                    <Button type="Submit">Add ToDo</Button>
                </InputGroup.Append>
                </InputGroup>

            </Form.Group>

        </Form>
    );
};

AddToDo = connect()(AddToDo);

export default AddToDo;