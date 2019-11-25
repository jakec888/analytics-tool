import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { logout } from './redux/actions/authActions.actions';
import { bindActionCreators } from 'redux';

import { AppState } from './redux/rootAppState';
import { AppActions } from './types/rootType.actions';

interface LayoutProps {
  history?: any;
  children: any;
}

interface LayoutState {
  isLoggedIn: boolean;
}

type Props = LayoutProps & LayoutStateProps & LayoutDispatchProps;

class Layout extends Component<Props, LayoutState> {
  onLogoutUser = () => {
    this.props.logout(this.props.history);
  };

  render() {
    return (
      <div>
        <Navbar bg='primary' variant='dark'>
          <Link to='/' className='navbar-dark navbar-brand'>
            Analytics
          </Link>
          <Nav className='mr-auto'>
            {this.props.isLoggedIn ? (
              <Fragment>
                <Link to='/' className='nav-link'>
                  Links
                </Link>
                <Link to='/create' className='nav-link'>
                  Create
                </Link>
              </Fragment>
            ) : (
              <Link to='/sign-up' className='nav-link'>
                Sign Up
              </Link>
            )}
          </Nav>
          {this.props.isLoggedIn ? (
            <Link
              to='/'
              style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}
              onClick={this.onLogoutUser}
            >
              Logout
            </Link>
          ) : (
            <Link
              to='/login'
              style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}
            >
              Login
            </Link>
          )}
        </Navbar>
        <Card
          style={{
            top: '15px',
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

interface LayoutStateProps {
  isLoggedIn: boolean;
}

interface LayoutDispatchProps {
  logout: (history?: any) => void;
}

const mapStateToProps = (state: AppState, ownProps: LayoutProps): LayoutStateProps => ({
  isLoggedIn: state.Auth.isLoggedIn
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: LayoutProps
): LayoutDispatchProps => ({
  logout: bindActionCreators(logout, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
