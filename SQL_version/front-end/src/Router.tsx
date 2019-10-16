import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import CreateLink from './containers/CreateLink';
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import ViewLink from './containers/ViewLink';
import ViewLinks from './containers/ViewLinks';

import { AppState } from './redux/rootAppState';

interface RouterProps {}

type Props = RouterProps & LinkStateProps;

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class MyRouter extends Component<Props, RouterProps> {
  render() {
    return (
      <Switch>
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <RestrictedRoute
          exact
          path='/'
          component={ViewLinks}
          isLoggedIn={this.props.isLoggedIn}
        />
        <RestrictedRoute
          exact
          path='/create'
          component={CreateLink}
          isLoggedIn={this.props.isLoggedIn}
        />
        <RestrictedRoute
          exact
          path='/view'
          component={ViewLink}
          isLoggedIn={this.props.isLoggedIn}
        />
      </Switch>
    );
  }
}

interface LinkStateProps {
  isLoggedIn: boolean;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  isLoggedIn: state.Auth.isLoggedIn
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRouter);
