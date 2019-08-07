import { Auth } from 'aws-amplify';

const authActions = {
  LOGOUT: 'LOGOUT',
  LOG_IN: 'LOG_IN',
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
  signUp: () => {
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
        })
        .catch((err) => {
          console.log('Fail!');
          console.log(err);
        });
    };
  }
};

export default authActions;
