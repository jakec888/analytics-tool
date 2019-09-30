import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Card, Form, Button } from 'react-bootstrap';

import {
  updateEmail,
  updatePassword,
  signUp
} from '../redux/actions/authActions.actions';

export class SignUp extends Component {
  onUpdateEmail = (event) => {
    this.props.updateEmail(event.target.value);
  };

  onUpdatePassword = (event) => {
    this.props.updatePassword(event.target.value);
  };

  onSignUp = (event) => {
    event.preventDefault();

    this.props.signUp(this.props.history);
  };

  render() {
    return (
      <Fragment>
        <Card.Title>Sign Up</Card.Title>
        <Form onSubmit={this.onSignUp}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={this.onUpdateEmail}
              value={this.props.email}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={this.onUpdatePassword}
              value={this.props.password}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
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
  signUp: signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
