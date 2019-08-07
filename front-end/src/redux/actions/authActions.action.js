import { Auth } from 'aws-amplify';

const authActions = {
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
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
  }
};

export default authActions;
