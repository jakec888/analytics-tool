import authActions from '../actions/authActions.action';

const initialState = {
  idToken: null,
  userId: null,
  isLoggedIn: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case authActions.SIGN_UP:
      return { ...state, name: payload.name };
    case authActions.LOGOUT:
      return { ...state, email: payload.email };
    case authActions.SIGN_IN:
      return { ...state, password: payload.password };
    default:
      return state;
  }
};
