import {AuthTypes} from '../../types/auth/auth';
import {AuthActionTypes} from '../../types/auth/auth.actions';

import {
  LOGOUT,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from '../actions/authActions.actions';

const initialState: AuthTypes = {
  idToken: '',
  userId: '',
  isLoggedIn: false,
  email: 'zapefol@app-expert.com',
  password: 'zapefol@app-expert.com',
};

export default (state = initialState, action: AuthActionTypes): AuthTypes => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        idToken: action.payload.idToken,
        userId: action.payload.userId,
      };
    case UPDATE_EMAIL:
      return {...state, email: action.payload.email};
    case UPDATE_PASSWORD:
      return {...state, password: action.payload.password};
    case SIGNUP_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLoggedIn: action.payload.isLoggedIn,
        idToken: action.payload.idToken,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};
