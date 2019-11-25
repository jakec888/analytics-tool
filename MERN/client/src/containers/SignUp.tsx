import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateEmail,
  updatePassword,
  signUp
} from '../redux/actions/authActions.actions';

import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/rootType.actions';
import { AppState } from '../redux/rootAppState';
import { bindActionCreators } from 'redux';

import SignUpView from '../views/SignUpView';

interface SignUpPageProps {
  history?: any;
}

interface SignUpPageState {}

type Props = SignUpPageProps & LinkStateProps & LinkDispatchProps;

export class SignUp extends Component<Props, SignUpPageState> {
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
      <SignUpView
        email={this.props.email}
        password={this.props.password}
        onUpdateEmail={this.onUpdateEmail}
        onUpdatePassword={this.onUpdatePassword}
        onSignUp={this.onSignUp}
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
  signUp: (history: any) => void;
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
  signUp: bindActionCreators(signUp, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
