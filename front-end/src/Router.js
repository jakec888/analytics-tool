import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import CreateLink from './containers/CreateLink';
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import ViewLink from './containers/ViewLink';
import ViewLinks from './containers/ViewLinks';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
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

class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={ViewLinks} />
        <Route exact path="/create" component={CreateLink} />
        <Route exact path="/view" component={ViewLink} />

        <RestrictedRoute
          exact
          path="/create-link"
          component={CreateLink}
          isLoggedIn={this.props.isLoggedIn}
        />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.Auth.isLoggedIn
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRouter);
