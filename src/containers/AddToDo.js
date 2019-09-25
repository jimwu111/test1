import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


let AddToDo = ({dispatch}) => {
    let input;  

    var icons = `
.e-search:before {
    content:'\\e993';
}
.e-upload:before {
    content: '\\e725';
}
.e-font:before {
    content: '\\e34c';
}
`;

    var iconList = ['e-search', 'e-upload', 'e-font'];
    const listItems = iconList.map((icon, index) =>
        <li><span className={`e-icons ${icon}`} key={index}></span></li>
    );

    return (
        <div>
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
       
        <div>
            <div>abcde</div>
                    <style>{icons}</style>
            <div className="icons">
                <ul>
                    {listItems}
                </ul>
            </div>
       </div>
       </div>
    );
};

AddToDo = connect()(AddToDo);

export default AddToDo;