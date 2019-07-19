import React, {Component}from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import {Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import NavBar from './components/Navbar';

 

class App extends Component {
  
  render(){
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
          
            <NavBar></NavBar>
            <Route exact path="/" component={ToDoListContainer}/>
            <Route exact path="/new-item" component={AddToDo}/>
        
            <Button>Dummy</Button>
          </Col>
        </Row>
      </Container>
    );

  } 
}


export default App;
