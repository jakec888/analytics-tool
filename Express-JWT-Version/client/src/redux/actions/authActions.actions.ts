/*
 *
 * this files handles all the redux actions for authorization
 *
 */
// import {Auth} from 'aws-amplify';

import {Dispatch} from 'redux';
import {AppState} from '../rootAppState';
import {AppActions} from '../../types/rootType.actions';

// export const LOGOUT = 'LOGOUT';
// export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const UPDATE_EMAIL = 'UPDATE_EMAIL';
// export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
// export const CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS';
export const LOGOUT = 'LOGOUT';

export const clearCredentials = () => ({
  type: CLEAR_CREDENTIALS,
  payload: {email: '', password: ''},
});

export const updateEmail = (email: string) => ({
  type: UPDATE_EMAIL,
  payload: {email: email},
});

export const updatePassword = (password: string) => ({
  type: UPDATE_PASSWORD,
  payload: {password: password},
});

// export const signUp = (history: any) => {
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     const userCred = getState().Auth;
//     Auth.signUp({
//       username: userCred.email,
//       password: userCred.password,
//     })
//       .then(data => {
//         dispatch({
//           type: SIGNUP_SUCCESS,
//           payload: {email: '', password: ''},
//         });
//         history.push('/login');
//       })
//       .catch(err => {
//         console.log('Fail!');
//         console.log(err);
//       });
//   };
// };

export const signUp = (history: any) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    console.log('sign up initiated!');
    const userCred = getState().Auth;
    console.log('dispatching');
    console.log(userCred);
    dispatch({
      type: SIGNUP,
      payload: {
        email: userCred.email,
        password: userCred.password,
        history: history,
      },
    });
  };
};

export const signUpSuccess = (idToken: string, userId: string) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    email: '',
    password: '',
    isLoggedIn: true,
    idToken: idToken,
    userId: userId,
  },
});

// export const login = (history: any) => {
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     const userCred = getState().Auth;
//     Auth.signIn({
//       username: userCred.email,
//       password: userCred.password,
//     })
//       .then(data => {
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: {
//             email: '',
//             password: '',
//             isLoggedIn: true,
//             idToken: data.signInUserSession.idToken.jwtToken,
//             userId: data.attributes.sub,
//           },
//         });
//         history.push('/');
//       })
//       .catch(err => {
//         console.log('Login Fail!');
//         console.log(err);
//       });
//   };
// };
// export const login = (history: any) => {
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     const userCred = getState().Auth;
//     Auth.signIn({
//       username: userCred.email,
//       password: userCred.password,
//     })
//       .then(data => {
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: {
//             email: '',
//             password: '',
//             isLoggedIn: true,
//             idToken: data.signInUserSession.idToken.jwtToken,
//             userId: data.attributes.sub,
//           },
//         });
//         history.push('/');
//       })
//       .catch(err => {
//         console.log('Login Fail!');
//         console.log(err);
//       });
//   };
// };

export const login = (history: any) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const userCred = getState().Auth;
    dispatch({
      type: LOGIN,
      payload: {
        email: userCred.email,
        password: userCred.password,
        history: history,
      },
    });
  };
};

export const loginSuccess = (idToken: string, userId: string): AppActions => ({
  type: LOGIN_SUCCESS,
  payload: {
    email: '',
    password: '',
    isLoggedIn: true,
    idToken: idToken,
    userId: userId,
  },
});

// export const logout = (history: any) => {
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     Auth.signOut()
//       .then(data => {
//         dispatch({
//           type: LOGOUT,
//           payload: {
//             isLoggedIn: false,
//             idToken: '',
//             userId: '',
//           },
//         });
//         history.push('/login');
//       })
//       .catch(err => {
//         console.log('Logout Fail!');
//         console.log(err);
//       });
//   };
// };

export const logout = () => {
  return null;
};
