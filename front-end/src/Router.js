import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './containers/Home';
import Home2 from './containers/Home2';

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
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <RestrictedRoute
            exact
            path="/pro"
            component={Home2}
            isLoggedIn={this.props.isLoggedIn}
          />
        </Switch>
      </Router>
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
