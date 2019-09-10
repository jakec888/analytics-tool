import { Auth } from "aws-amplify";

export const LOGOUT = "LOGOUT";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export const updateEmail = email => {
  return dispatch => {
    dispatch({
      type: UPDATE_EMAIL,
      payload: { email: email }
    });
  };
};

export const updatePassword = password => {
  return dispatch => {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: { password: password }
    });
  };
};

export const signUp = history => {
  return (dispatch, getState) => {
    const userCred = getState().Auth;
    Auth.signUp({
      username: userCred.email,
      password: userCred.password
    })
      .then(data => {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: { email: "", password: "" }
        });
        history.push("/login");
      })
      .catch(err => {
        console.log("Fail!");
        console.log(err);
      });
  };
};

export const login = history => {
  return (dispatch, getState) => {
    const userCred = getState().Auth;
    Auth.signIn({
      username: userCred.email,
      password: userCred.password
    })
      .then(data => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            email: "",
            password: "",
            isLoggedIn: true,
            idToken: data.signInUserSession.idToken.jwtToken,
            userId: data.attributes.sub
          }
        });
        history.push("/");
      })
      .catch(err => {
        console.log("Login Fail!");
        console.log(err);
      });
  };
};

export const logout = history => {
  return (dispatch, getState) => {
    Auth.signOut()
      .then(data => {
        dispatch({
          type: LOGOUT,
          payload: {
            isLoggedIn: false,
            idToken: "",
            userId: ""
          }
        });
        history.push("/login");
      })
      .catch(err => {
        console.log("Logout Fail!");
        console.log(err);
      });
  };
};
