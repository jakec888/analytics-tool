import authActions from '../actions/authActions.actions';

const initialState = {
  givenLink: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case authActions.LOGOUT:
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        idToken: payload.idToken,
        userId: payload.userId
      };
    case authActions.UPDATE_EMAIL:
      return { ...state, email: payload.email };
    case authActions.UPDATE_PASSWORD:
      return { ...state, password: payload.password };
    case authActions.SIGNUP_SUCCESS:
      return { ...state, email: payload.email, password: payload.password };
    case authActions.LOGIN_SUCCESS:
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
