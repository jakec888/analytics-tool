import { Auth } from 'aws-amplify';

const authActions = {
  LOGOUT: 'LOGOUT',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  updateEmail: (email) => {
    return (dispatch) => {
      dispatch({
        type: authActions.UPDATE_EMAIL,
        payload: { email: email }
      });
    };
  },
  updatePassword: (password) => {
    return (dispatch) => {
      dispatch({
        type: authActions.UPDATE_PASSWORD,
        payload: { password: password }
      });
    };
  },
  signUp: (history) => {
    return (dispatch, getState) => {
      const userCred = getState().Auth;
      console.log(userCred);
      Auth.signUp({
        username: userCred.email,
        password: userCred.password
      })
        .then((data) => {
          console.log('Success!');
          console.log(data);
          dispatch({
            type: authActions.SIGNUP_SUCCESS,
            payload: { email: '', password: '' }
          });
          history.push('/login');
        })
        .catch((err) => {
          console.log('Fail!');
          console.log(err);
        });
    };
  },
  login: (history) => {
    return (dispatch, getState) => {
      const userCred = getState().Auth;
      console.log(userCred);
      Auth.signIn({
        username: userCred.email,
        password: userCred.password
      })
        .then((data) => {
          console.log('Login Success!');
          console.log(data);
          dispatch({
            type: authActions.LOGIN_SUCCESS,
            payload: {
              email: '',
              password: '',
              isLoggedIn: true,
              idToken: data.signInUserSession.idToken.jwtToken,
              userId: data.attributes.sub
            }
          });
          history.push('/');
        })
        .catch((err) => {
          console.log('Login Fail!');
          console.log(err);
        });
    };
  },
  logout: (history) => {
    return (dispatch, getState) => {
      const userCred = getState().Auth;
      console.log(userCred);
      Auth.signOut()
        .then((data) => {
          console.log('Logut Success!');
          console.log(data);
          dispatch({
            type: authActions.LOGOUT,
            payload: {
              isLoggedIn: false,
              idToken: '',
              userId: ''
            }
          });
          history.push('/login');
        })
        .catch((err) => {
          console.log('Logout Fail!');
          console.log(err);
        });
    };
  }
};

export default authActions;
