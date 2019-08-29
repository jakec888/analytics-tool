import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Card, Form, Button } from 'react-bootstrap';

import {updateEmail, updatePassword, login} from "../redux/actions/authActions.actions";

export class Login extends Component {
  onUpdateEmail = (event) => {
    console.log(event);
    this.props.updateEmail(event.target.value);
  };

  onUpdatePassword = (event) => {
    console.log(event);
    this.props.updatePassword(event.target.value);
  };

  onLogin = (event) => {
    event.preventDefault();

    this.props.login(this.props.history);
  };

  render() {
    return (
      <Fragment>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={this.onLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.onUpdateEmail}
              value={this.props.email}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.onUpdatePassword}
              value={this.props.password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.Auth.email,
  password: state.Auth.password
});

const mapDispatchToProps = {
  updateEmail: updateEmail,
  updatePassword: updatePassword,
  login: login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
