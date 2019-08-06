import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Link to="/" className="navbar-dark navbar-brand">
            Analytics
          </Link>
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/home-2" className="nav-link">
              Home 2
            </Link>
            <Link to="/home-3" className="nav-link">
              Home 3
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <Card>
          <Card.Body>{this.props.children}</Card.Body>
        </Card>
      </div>
    );
  }
}
