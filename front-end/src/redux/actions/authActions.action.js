const authActions = {
  SIGN_UP: 'SIGN_UP',
  LOGOUT: 'LOGOUT',
  SIGN_IN: 'SIGN_IN',
  login: (username, password) => {
    return (dispatch) => {
      dispatch({
        type: authActions.SIGN_IN,
        payload: { isLoggedIn: true }
      });
    };
  }
};

export default authActions;
