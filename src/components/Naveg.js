import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import {Container, Row, Col, Image} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
// import { Route, BrowserRouter as Router } from 'react-router-dom';
import './../Style/nav.css';

class Naveg extends Component {
  render() {
    return (
      <Nav
        className="menu"
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">People</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/home">Girasolo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Naveg;
