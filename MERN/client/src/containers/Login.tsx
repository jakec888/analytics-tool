import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateEmail,
  updatePassword,
  login
} from '../redux/actions/authActions.actions';

import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/rootType.actions';
import { AppState } from '../redux/rootAppState';
import { bindActionCreators } from 'redux';

import LoginView from '../views/LoginView';

interface LoginPageProps {
  history?: any;
}

interface LoginPageState {}

type Props = LoginPageProps & LinkStateProps & LinkDispatchProps;

export class Login extends Component<Props, LoginPageState> {
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
      <LoginView 
        email={this.props.email}
        password={this.props.password}
        onUpdateEmail={this.onUpdateEmail}
        onUpdatePassword={this.onUpdatePassword}
        onLogin={this.onLogin}
      />
    );
  }
}

interface LinkStateProps {
  email: string;
  password: string;
}

interface LinkDispatchProps {
  updateEmail: (e: string) => void;
  updatePassword: (e: string) => void;
  login: (history: any) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  email: state.Auth.email,
  password: state.Auth.password
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  updateEmail: bindActionCreators(updateEmail, dispatch),
  updatePassword: bindActionCreators(updatePassword, dispatch),
  login: bindActionCreators(login, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
