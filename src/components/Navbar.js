import React from 'react';
import {Navbar} from 'react-bootstrap';
import Navigation from './Navigation'

export default () => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt="noImage"
          src="./FT_logo.png"
          width="150"
          height="45"
          className="d-inline-block align-top"
        />
         
      </Navbar.Brand>
      <Navigation/>
    </Navbar>
  </div>
);
