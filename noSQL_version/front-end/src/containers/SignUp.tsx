import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Card, Form, Button } from 'react-bootstrap';

import {
  updateEmail,
  updatePassword,
  signUp
} from '../redux/actions/authActions.actions';

import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../Root';
import { AuthActions } from '../types/auth/auth.actions';

interface SignUpProps {
  history?: any;
  email: string;
  password: string;
}

interface SignUpState {}

type Props = SignUpProps & SignUpStateProps & SignUpDispatchProps;

export class SignUp extends Component<Props, SignUpState> {
  onUpdateEmail = (event: any) => {
    this.props.updateEmail(event.target.value);
  };

  onUpdatePassword = (event: any) => {
    this.props.updatePassword(event.target.value);
  };

  onSignUp = (event: any) => {
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

interface SignUpStateProps {
  email: string;
  password: string;
}

interface SignUpDispatchProps {
  updateEmail: (history?: any) => void;
  updatePassword: (history?: any) => void;
  signUp: (history?: any) => void;
}

const mapStateToProps = (state: AppState, ownProps: SignUpProps): SignUpStateProps => ({
  email: state.Auth.email,
  password: state.Auth.password
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AuthActions>,
  ownProps: SignUpProps
): SignUpDispatchProps => ({
  updateEmail: bindActionCreators(updateEmail, dispatch),
  updatePassword: bindActionCreators(updatePassword, dispatch),
  signUp: bindActionCreators(signUp, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
