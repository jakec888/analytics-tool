import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Card, Form, Button } from 'react-bootstrap';

import {
  updateEmail,
  updatePassword,
  login
} from '../redux/actions/authActions.actions';

import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../Root';
import { AuthActions } from '../types/auth/auth.actions';

interface LoginProps {
  history?: any;
  email: string;
  password: string;
}

interface LoginState {}

type Props = LoginProps & LoginStateProps & LoginDispatchProps;

export class Login extends Component<Props, LoginState> {
  onUpdateEmail = (event: any) => {
    this.props.updateEmail(event.target.value);
  };

  onUpdatePassword = (event: any) => {
    this.props.updatePassword(event.target.value);
  };

  onLogin = (event: any) => {
    event.preventDefault();

    this.props.login(this.props.history);
  };

  render() {
    return (
      <Fragment>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={this.onLogin}>
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
            Login
          </Button>
        </Form>
      </Fragment>
    );
  }
}

interface LoginStateProps {
  email: string;
  password: string;
}

interface LoginDispatchProps {
  updateEmail: (history?: any) => void;
  updatePassword: (history?: any) => void;
  login: (history?: any) => void;
}

const mapStateToProps = (state: AppState, ownProps: LoginProps): LoginStateProps => ({
  email: state.Auth.email,
  password: state.Auth.password
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AuthActions>,
  ownProps: LoginProps
): LoginDispatchProps => ({
  updateEmail: bindActionCreators(updateEmail, dispatch),
  updatePassword: bindActionCreators(updatePassword, dispatch),
  login: bindActionCreators(login, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
