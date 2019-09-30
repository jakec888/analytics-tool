import { AuthTypes } from '../../types/auth/auth';
import { AuthActionTypes } from '../../types/auth/auth.actions';

import {
  LOGOUT,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD
} from '../actions/authActions.actions';

const initialState: AuthTypes = {
  idToken: '',
  userId: '',
  isLoggedIn: false,
  email: 'zapefol@app-expert.com',
  password: 'zapefol@app-expert.com'
};

export default (
  state = initialState,
  { type, payload }: AuthActionTypes
): AuthTypes => {
  switch (type) {
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        idToken: payload.idToken,
        userId: payload.userId
      };
    case UPDATE_EMAIL:
      return { ...state, email: payload.email };
    case UPDATE_PASSWORD:
      return { ...state, password: payload.password };
    case SIGNUP_SUCCESS:
      return { ...state, email: payload.email, password: payload.password };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: payload.email,
        password: payload.password,
        isLoggedIn: payload.isLoggedIn,
        idToken: payload.idToken,
        userId: payload.userId
      };
    default:
      return state;
  }
};
