import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './containers/Home';
import Home2 from './containers/Home2';
import Home3 from './containers/Home3';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
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
        <Route exact path="/" component={Home} />
        <Route exact path="/home-2" component={Home2} />
        <Route exact path="/home-3" component={Home3} />
        <RestrictedRoute
          exact
          path="/pro"
          component={Home2}
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
