import React, { Component } from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import authActions from '../redux/actions/authActions.action';

class Layout extends Component {
  onLogoutUser = () => {
    this.props.logout(this.props.history);
  };

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Link to="/" className="navbar-dark navbar-brand">
            Analytics
          </Link>
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/sign-up" className="nav-link">
              Sign Up
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
          {this.props.isLoggedIn ? (
            <Link
              to="/login"
              style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}
              onClick={this.onLogoutUser}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}
            >
              Login
            </Link>
          )}
        </Navbar>
        <Card
          style={{
            topHeight: '15px',
            width: '85%',
            minHeight: '300px',
            height: 'auto',
            padding: '15px',
            marginTop: '25px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <Card.Body>{this.props.children}</Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.Auth.isLoggedIn
});

const mapDispatchToProps = {
  logout: authActions.logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
